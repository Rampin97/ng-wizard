import {STEP_DIRECTIN, STEP_POSITION, STEP_STATE, STEP_STATUS, THEME, TOOLBAR_BUTTON_POSITION, TOOLBAR_POSITION} from './enums';
import {ComponentRef, Directive, HostBinding, Input, Type} from '@angular/core';
import {Observable} from 'rxjs';

export interface Language {
  next?: string;
  previous?: string;
}

export interface ToolbarSettings {
  toolbarPosition?: TOOLBAR_POSITION; // none, top, bottom, both
  toolbarButtonPosition?: TOOLBAR_BUTTON_POSITION; // start, end
  showNextButton?: boolean; // show/hide a Next button
  showPreviousButton?: boolean; // show/hide a Previous button
  toolbarExtraButtons?: ToolbarButton[]; // Extra buttons to show on toolbar, array of input/buttons elements
}

export interface ToolbarButton {
  text: string;
  class: string;
  event?: () => void;
}

export interface AnchorSettings {
  anchorClickable?: boolean; // Enable/Disable anchor navigation
  enableAllAnchors?: boolean; // Activates all anchors clickable all times
  markDoneStep?: boolean; // Add done css
  markAllPreviousStepsAsDone?: boolean; // When a step selected, all previous steps are marked done
  removeDoneStepOnNavigateBack?: boolean; // While navigate back done step after active step will be cleared
  enableAnchorOnDoneStep?: boolean; // Enable/Disable the done steps navigation
}

export interface NgWizardConfig {
  selected?: number; // Initial selected step, 0 = first step
  keyNavigation?: boolean; // Enable/Disable keyboard navigation(left and right keys are used if enabled)
  cycleSteps?: boolean; // Allows to cycle the navigation of steps
  lang?: Language; // Language variables for button
  toolbarSettings?: ToolbarSettings;
  anchorSettings?: AnchorSettings;
  theme?: THEME; // theme for the wizard, related css need to include for other than default theme
}

@Directive()
export class NgWizardStepDirective {
  index: number;

  @Input()
  title: string;

  @Input()
  description: string;

  @Input()
  state?: STEP_STATE;
  initialState?: STEP_STATE;

  @Input()
  component: Type<any>;
  componentRef: ComponentRef<any>;

  @Input()
  canEnter: boolean | ((args: StepValidationArgs) => boolean) | ((args: StepValidationArgs) => Observable<boolean>);

  @Input()
  canExit: boolean | ((args: StepValidationArgs) => boolean) | ((args: StepValidationArgs) => Observable<boolean>);

  status?: STEP_STATUS;
  initialStatus?: STEP_STATUS;

  @HostBinding('hidden')
  public get hidden(): boolean {
    return this.status !== STEP_STATUS.active;
  }

  get isHidden(): boolean {
    return this.state === STEP_STATE.hidden;
  }
}

export interface StepValidationArgs {
  direction: STEP_DIRECTIN;
  fromStep: NgWizardStepDirective;
  toStep: NgWizardStepDirective;
}

export interface StepChangedArgs {
  step: NgWizardStepDirective;
  previousStep: NgWizardStepDirective;
  direction: STEP_DIRECTIN;
  position: STEP_POSITION;
}
