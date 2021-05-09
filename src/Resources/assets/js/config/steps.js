export const stepPaymentType = {
  id: 'paymentType',
  text: 'When using Payments API you may want additional details to help you match payments with customer orders -- \n' +
    'you can enter those values here but make sure to use the correct tags provide in the text below',
  classes: 'right-bottom',
  attachTo: {
    element: '.js-onboardingWizard-paymentType',
    on: 'top-start'
  },
  highlightClass: 'payment-settings',
  when: {
    show: () => {
      this.previousStepIndex = tour.steps.indexOf(tour.getCurrentStep());
      navbarProgressHandler(tour);
    }
  },
  buttons: [
    {
      text: '<i class="close icon"></i>',
      action: () => {
        tour.addStep(stepQuitConfirmationHandler(this.previousStepIndex));
        tour.show('step-quitConfirmation');
      },
      classes: 'btn-close',
    },
    {
      text: '<i class="arrow down icon"></i>',
      action: () => modalCollapseHandler(tour),
      classes: 'btn-collapse',
    },
    {
      text: 'Go back',
      action() {
        tour.back();
      },
      secondary: true,
    },
    {
      text: 'Next <i class="icon angle right"></i>',
      action() {
        tour.next();
      },
      classes: 'with-triangle',
    },
  ],
};

export const stepPaymentDescription = {
  id: 'paymentDescription',
  text: 'Choose Payments API Learn about the difference between Orders API or the Payments API',
  classes: 'right-bottom',
  attachTo: {
    element: '.js-onboardingWizard-paymentDescription',
    on: 'top-start'
  },
  highlightClass: 'payment-settings',
  when: {
    show: () => {
      this.previousStepIndex = tour.steps.indexOf(tour.getCurrentStep());
      navbarProgressHandler(tour);
    }
  },
  buttons: [
    {
      text: '<i class="close icon"></i>',
      action: () => {
        tour.addStep(stepQuitConfirmationHandler(this.previousStepIndex));
        tour.show('step-quitConfirmation');
      },
      classes: 'btn-close',
    },
    {
      text: '<i class="arrow down icon"></i>',
      action: () => modalCollapseHandler(tour),
      classes: 'btn-collapse',
    },
    {
      text: 'Go back',
      action() {
        tour.back();
      },
      secondary: true,
    },
    {
      text: 'Next <i class="icon angle right"></i>',
      action() {
        tour.next();
      },
      classes: 'with-triangle',
    },
  ],
};

export const stepOrderApi = {
  id: 'orderApi',
  highlightClass: 'payment-settings',
  classes: 'right-bottom',
  text: 'Select Orders API - this is Mollie\n' +
    'suggested API to use for webshops b/c it allows you to create “orders”. An order contains the personal information of a customer (e.g. address) and products that the customer ordered. When an order is made, a corresponding payment will be created automatically.',
  attachTo: {
    element: '.js-onboardingWizard-paymentType',
    on: 'top-start',
  },
  when: {
    show: () => {
      this.previousStepIndex = tour.steps.indexOf(tour.getCurrentStep());
      navbarProgressHandler(tour);
    },
  },
  buttons: [
    {
      text: '<i class="close icon"></i>',
      action: () => {
        tour.addStep(stepQuitConfirmationHandler(this.previousStepIndex));
        tour.show('step-quitConfirmation')
      },
      classes: 'btn-close',
    },
    {
      text: '<i class="arrow down icon"></i>',
      action: () => modalCollapseHandler(tour),
      classes: 'btn-collapse',
    },
    {
      text: 'Go back',
      action: () => {
        tour.back();
      },
      secondary: true,
    },
    {
      text: 'Next <i class="icon angle right"></i>',
      action: () => {
        tour.next();
      },
      classes: 'with-triangle',
    },
  ],
};

export const stepQuitConfirmation = [
  {
    id: 'step-quit-confirmation',
    title: 'stepQuitConfirmation.title',
    text: 'stepQuitConfirmation.text',
    highlightClass: 'intro',
    customButtons: [
      {
        text: 'stepButtons.quitConfirm',
        action: (OnboardingWizard) => {
          OnboardingWizard.tour.removeStep('step-quit-confirmation');
          OnboardingWizard.tour.complete();
        },
        secondary: true,
      },
      {
        text: 'stepButtons.quitCancel',
        action: (OnboardingWizard, stepIndex) => {
          OnboardingWizard.tour.show(stepIndex, true);
          OnboardingWizard.tour.removeStep('step-quit-confirmation');
        },
      },
    ],
  }
];

export const steps = [
  {
    id: 'step-start',
    title: 'stepStart.title',
    text: 'stepStart.text',
    highlightClass: 'intro',
    btnBackText: 'stepButtons.skipWizard',
    btnNextText: 'stepButtons.startWizard',
    btnCollapseClass: 'd-none',
    btnCloseClass: 'd-none',
  },
  {
    id: 'step-env',
    text: 'stepEnv.text',
    classes: 'right-bottom',
    highlightClass: 'api-settings',
    attachTo: {
      element: '.js-onboardingWizard-environment',
      on: 'top-start'
    },
    btnNextClass: 'with-triangle',
  },
  {
    id: 'step-mollie-connect',
    title: 'stepMollieConnect.title',
    text: 'stepMollieConnect.text',
    highlightClass: 'api-settings',
    btnBackText: 'stepButtons.loginMollieAccount',
    btnNextText: 'stepButtons.createMollieAccount',
    btnCollapseClass: 'd-none',
    urlMollie: 'https://www.mollie.com/dashboard',
  },
  {
    id: 'step-api-key',
    text: 'stepApiKey.text',
    classes: 'right-bottom',
    highlightClass: 'api-settings',
    btnNextClass: 'with-triangle',
    attachTo: {
      element: '.js-onboardingWizard-apiKey',
      on: 'top-start'
    },
  },
  {
    id: 'step-checkout-config',
    text: 'stepCheckoutConfig.text',
    classes: 'step-6 right-bottom',
    highlightClass: 'store-settings',
    btnNextText: 'stepButtons.next',
  },
  {
    id: 'step-mollie-components',
    text: 'stepMollieComponents.text',
    classes: 'right-bottom',
    highlightClass: 'store-settings',
    btnNextClass: 'with-triangle',
    attachTo: {
      element: '.js-onboardingWizard-mollieComponents + label',
      on: 'top-start'
    },
  },
  {
    id: 'step-mollie-payments',
    text: 'stepMolliePayments.text',
    classes: 'right-bottom',
    highlightClass: 'store-settings',
    btnNextClass: 'with-triangle',
    attachTo: {
      element: '.js-onboardingWizard-singleClick + label',
      on: 'top-start'
    },
  },
  {
    id: 'step-payments-api',
    text: 'stepPaymentsApi.text',
    classes: 'right-bottom',
    highlightClass: 'payment-settings',
    btnNextText: 'stepButtons.next',
  },
  {
    id: 'step-payment-title',
    text: 'stepPaymentTitle.text',
    classes: 'step-9 right-bottom',
    highlightClass: 'payment-settings',
    btnNextClass: 'with-triangle',
    attachTo: {
      element: '.js-onboardingWizard-paymentName',
      on: 'top-start'
    },
  },
  {
    id: 'step-image-upload',
    text: 'stepImageUpload.text',
    classes: 'step-14 right-bottom',
    highlightClass: 'payment-settings',
    btnNextClass: 'with-triangle',
    attachTo: {
      element: '.js-onboardingWizard-customizeMethodImage input',
      on: 'top-start'
    },
  },
  {
    id: 'step-restrict-payment',
    text: 'stepRestrictPayment.text',
    classes: 'step-12 right-bottom',
    highlightClass: 'payment-settings',
    btnNextClass: 'with-triangle',
    attachTo: {
      element: '.js-onboardingWizard-countryRestriction',
      on: 'top-start'
    },
  },
  {
    id: 'step-fees',
    text: 'stepFees.text',
    classes: 'step-13 right-bottom',
    highlightClass: 'payment-settings',
    btnNextClass: 'with-triangle',
    attachTo: {
      element: '.js-onboardingWizard-paymentFee .dropdown',
      on: 'top-start'
    },
  },
  {
    id: 'step-finish-wizard',
    title: 'stepFinishWizard.title',
    text: 'stepFinishWizard.text',
    highlightClass: 'payment-settings',
    btnBackClass: 'd-none',
    btnNextClass: 'mr-auto',
    btnNextText: 'stepButtons.finishWizard',
    btnCollapseClass: 'd-none',
    btnCloseClass: 'd-none',
  },
];
