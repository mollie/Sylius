import _get from 'lodash.get';

import { steps } from '../config/steps';
import wizardTranslations from '../config/wizardTranslations';

const handleStepButtons = (OnboardingWizard, stepIndex, step) => {
  if (step.customButtons) {
    return step.customButtons.map(customButton => (
      {
        ...customButton,
        text: _get(wizardTranslations, customButton.text),
        action: () => customButton.action(OnboardingWizard, stepIndex)
      }
    ));
  }
  
  return [
    {
      text: '<i class="close icon"></i>',
      action: () => {
        OnboardingWizard.handleQuitConfirmation()
      },
      classes: `shepherd-button--close ${step.btnCloseClass || ''}`
    },
    {
      text: '<i class="arrow down icon"></i>',
      action: () => OnboardingWizard.modalCollapseHandler(),
      classes: `shepherd-button--collapse js-tour-collapse ${step.btnCollapseClass || ''}`
    },
    {
      text: step.btnBackText ?
        _get(wizardTranslations, step.btnBackText)
        : _get(wizardTranslations, 'stepButtons.goBack'),
      secondary: true,
      classes: `${step.btnBackClass || ''}`,
      action() {
        const tour = OnboardingWizard.tour;

        if (stepIndex === 0) {
          tour.complete();
        } else {
          if (step.urlMollie) {
            window.open(`${step.urlMollie}/signin`, '_blank');
            tour.next();

            return;
          }

          tour.back();
        }
      },
    },
    {
      text: step.btnNextText ?
        _get(wizardTranslations, step.btnNextText)
        : _get(wizardTranslations, 'stepButtons.nextWithArrow'),
      classes: `${step.btnNextClass || ''}`,
      action() {
        const tour = OnboardingWizard.tour;

        if (stepIndex === OnboardingWizard.steps.length - 1) {
          tour.complete();
        } else {
          if (step.urlMollie) {
            window.open(`${step.urlMollie}/signup`, '_blank');
            tour.next();
            return;
          }
          tour.next();
        }
      }
    }
  ];
};

export default (steps = []) => steps.map(step => (
  {
    ...step,
    title: step.title ? _get(wizardTranslations, step.title) : null,
    text: _get(wizardTranslations, step.text),
    stepButtons: (OnboardingWizard, stepIndex) => handleStepButtons(OnboardingWizard, stepIndex, step)
  }
));
