import Shepherd from 'shepherd.js';
import _get from 'lodash.get';

// import { steps, stepPaymentType, stepPaymentDescription, stepOrderApi } from './config/steps';
import { steps, stepQuitConfirmation } from './config/steps';
import shepherdConfig from './config/shepherdConfig';
import stepFactory from './helpers/stepFactory';
import wizardTranslations from './config/wizardTranslations';

export default class OnboardingWizard {
  constructor(
    tourSteps = steps,
    tourConfig = shepherdConfig,
    tourQuitConfirmation = stepQuitConfirmation
  ) {
    this.steps = stepFactory(tourSteps);
    this.stepQuitConfirmation = stepFactory(tourQuitConfirmation)[0];
    this.tourConfig = tourConfig;
    this.navbar = document.querySelector('.js-onboarding-wizard');
    this.navBarItems = [...this.navbar.querySelectorAll('.js-onboarding-wizard-progress')];
    this.previousStepIndex = 0;
  }

  modalCollapseHandler = () => {
    const currentStep = this.tour.currentStep.el;
    const buttonCollapse = currentStep.querySelector('.js-tour-collapse');
    const isCollapsed = [...currentStep.classList].includes('collapsed');
    
    const paragraph = document.createElement('span');
    paragraph.classList.add('btn-text-open');
    paragraph.textContent = _get(wizardTranslations, 'common.open');

    if (!buttonCollapse) {
      return;
    }

    const textOpen = buttonCollapse.querySelector('.btn-text-open')

    !isCollapsed ? buttonCollapse.appendChild(paragraph) : buttonCollapse.removeChild(textOpen)

    currentStep.classList.toggle('collapsed', !isCollapsed);
    currentStep.setAttribute('aria-hidden', !isCollapsed);
  }

  handleQuitConfirmation = () => {
    const returnStepIndex = this.previousStepIndex;
    
    this.tour.addStep({
      ...this.stepQuitConfirmation,
      buttons: this.stepQuitConfirmation.stepButtons(this, returnStepIndex)
    });

    this.tour.show('step-quit-confirmation', true);
  }

  navbarVisibilityHandler = (isActive) => {
    this.navbar.classList.toggle('d-none', !isActive);
    this.navbar.setAttribute('aria-hidden', !isActive);
  }

  navbarProgressHandler = () => {
    const currentStepProgress = this.tour.getCurrentStep().options.highlightClass;
    
    this.navBarItems.forEach(navBarItem => {
      if (navBarItem.getAttribute('data-navigation-step') === currentStepProgress) {
        navBarItem.classList.add('onboarding-wizard__step--current')
      } else {
        navBarItem.classList.remove('onboarding-wizard__step--current')
      }
    });
  }

  initTour() {
    if (this.navbar) {
      this.tour = new Shepherd.Tour({
        ...this.tourConfig
      });

      this.steps.forEach((step, stepIndex) => {
        this.tour.addStep({
          ...step,
          when: {
            show: () => {
              this.previousStepIndex = this.tour.getCurrentStep().id;
              this.navbarProgressHandler();
            }
          },
          buttons: step.stepButtons(this, stepIndex)
        });
      });

      this.tour.on('complete', () => {
        this.navbarVisibilityHandler(false);
      });

      this.tour.start();
    }
  }
};
