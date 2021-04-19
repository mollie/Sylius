$(function () {
  if (!document.querySelector('#mollie-payment-form')) {
    return;
  }

  const steps = [
    {
      id: 'step-start',
      text: 'Thank you for installing Mollie for payment services. This guide will take you \n' +
        'through the configuration setup. Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n' +
        'Etiam suscipit nibh quis urna congue, et interdum nulla rutrum. Cras at justo ornare.',
      title: 'Let me help you',
      btnBackText:'Skip this, I know how it works',
      btnNextText: 'Start onboarding assistant <i class="icon angle right"></i>',
      scrollToTarget: '#sylius_payment_method_gatewayConfig_config_api_key_test',
      btnCollapseClass: 'd-none',
      btnCloseClass: 'd-none',
    },
    {
      text: 'TEST will be the default in the plugin. You only need to do the configuration once to have TEST + \n' +
        'LIVE environments available. Try easily togging between the two.',
      stepClass: 'right-bottom',
      classActive: 'api-settings',
      attachToElement: '.onboardingWizard-environment',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      btnCollapseClass: 'btn-collapse',
      btnCloseClass: 'btn-close',
    },
    {
      id: 'mollie-connect',
      title: 'Connect to your Mollie account',
      text: 'To sync the Mollie plugin to your webshop you\'ll need Mollie API keys and Profile ID.',
      classActive: 'api-settings',
      btnBackText:'Login to my account',
      btnNextText: 'Create a Mollie account <i class="icon angle right"></i>',
      btnCollapseClass: 'btn-collapse d-none',
      btnCloseClass: 'btn-close',
      urlMollie: 'https://www.mollie.com/dashboard',
    },
    {
      text: 'Fill in your correct details and click "TEST API Key" this will return a successful or failed result for \n' +
        'both the LIVE and TEST environments.\n' +
        'Learn about the difference between: Orders API or the Payments API',
      stepClass: 'right-bottom',
      classActive: 'api-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '[for="sylius_payment_method_gatewayConfig_config_api_key_test"] + *',
      btnCollapseClass: 'btn-collapse',
      btnCloseClass: 'btn-close',
    },
    {
      text: 'Webshop checkout Configurations, Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n' +
        'Fusce semper velit et urna gravida efficitur.',
      stepClass: 'step-6 right-bottom',
      classActive: 'store-settings',
      btnBackText: 'Go back',
      btnNextText: 'Next',
      btnCollapseClass: 'btn-collapse',
      btnCloseClass: 'btn-close',
    },
    {
      text: 'Enabling components, allows you to add the fields needed for credit card holder data to your own\n' +
        'checkout. If you select NO, users will be redirected to the Mollie\n' +
        'checkout page',
      stepClass: 'right-bottom',
      classActive: 'store-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '.onboardingWizard-mollieComponents',
      btnCollapseClass: 'btn-collapse',
      btnCloseClass: 'btn-close',
    },
    {
      text: 'Enabling single click payments remembers your consumer\'s payment preferences in order to expedite follow-up \n' +
        'payments. Your consumer does not have to perform any additional actions to enjoy quick and easy payments.',
      stepClass: 'step-7 right-bottom',
      classActive: 'store-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '.onboardingWizard-singleClick',
      btnCollapseClass: 'btn-collapse',
      btnCloseClass: 'btn-close',
    },
    {
      text: 'We\'ll go through setup with the Payments API first and then highlight differences if you choose to use the Orders API',
      stepClass: 'step-8 right-bottom',
      classActive: 'payment-settings',
      btnBackText:'Go back',
      btnNextText: 'Next',
      btnCollapseClass: 'btn-collapse',
      btnCloseClass: 'btn-close',
    },
    {
      id: 'paymentTitle',
      text: 'You can enter a custom title here - it will be displayed on your checkout page',
      stepClass: 'step-9 right-bottom',
      classActive: 'payment-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '#sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_name',
      btnCollapseClass: 'btn-collapse',
      btnCloseClass: 'btn-close',
    },
    {
      text: 'Upload a custom image for the payment method icon, this will be shown in the checkout page',
      stepClass: 'step-14 right-bottom',
      classActive: 'payment-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '#sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_customizeMethodImage_file',
      btnCollapseClass: 'btn-collapse',
      btnCloseClass: 'btn-close',
    },
    {
      id: 'restrictPayment',
      text: 'Restrict/ allow payment per individual countries.',
      stepClass: 'step-12 right-bottom',
      classActive: 'payment-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '[for="sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_country_restriction"] +' +
        ' .dropdown',
      btnCollapseClass: 'btn-collapse',
      btnCloseClass: 'btn-close',
    },
    {
      text: 'Choose Payments API Learn about the difference   between Orders APIor the Payments API',
      stepClass: 'step-10 right-bottom',
      classActive: 'payment-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '[for="sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_paymentType"] + .dropdown',
      btnCollapseClass: 'btn-collapse',
      btnCloseClass: 'btn-close',
    },
    {
      classActive: 'payment-settings',
      text:'When using Payments API you may want additional details to help you match payments with customer orders -- \n' +
        'you can enter those values here but make sure to use the correct tags provide in the text below',
      stepClass: 'step-13 right-bottom',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      btnBackText: 'Go back',
      attachToElement: '#sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_paymentDescription',
      btnCollapseClass: 'btn-collapse',
      btnCloseClass: 'btn-close',
    },
    {
      id: 'fees',
      text: 'In case you have fees that you are passing on to the consumer, you can add them here',
      stepClass: 'step-13 right-bottom',
      classActive: 'payment-settings',
      btnBackText:'Go back',
      btnNextText: 'Next <i class="icon angle right"></i>',
      btnNextClass: 'with-triangle',
      attachToElement: '[for="sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_paymentSurchargeFee_type"] +' +
        ' .dropdown',
      btnCollapseClass: 'btn-collapse',
      btnCloseClass: 'btn-close',
    },
    {
      title: '<i class="icon check circle"></i> You\'re all set!',
      classActive: 'payment-settings',
      text: 'You\'re all done, you can now attempt a consumer order or your website',
      btnBackClass: 'd-none',
      btnNextClass: 'mr-auto',
      btnNextText: 'Start using Mollie plugin <i class="icon angle right"></i>',
      btnCollapseClass: 'btn-collapse d-none',
      btnCloseClass: 'd-none',
    },
  ];

  const stepQuitConfirmationHandler = (previousStepIndex) => {
    return {
      id: 'step-quitConfirmation',
      keyboardNavigation: false,
      title: 'Are you sure you want to quit ?',
      text: 'You\'re all done, you can now attempt a consumer order or your website',
      buttons: [
        {
          text: 'Quit the onboarding assistant',
          action: () => {
            tour.removeStep('step-quitConfirmation');
            tour.removeStep('orderApi');
            tour.complete();
          },
          secondary: true,
        },
        {
          text: 'Continue onboarding <i class="icon angle right"></i>',
          action: () => {
            tour.show(previousStepIndex, true);
            tour.removeStep('step-quitConfirmation');
          },
        },
      ],
    }
  }

  const navbar = document.querySelector('.onboardingWizard-nav');

  const navbarVisibilityHandler = (isActive) => {
    navbar.classList.toggle('d-none', !isActive());
    navbar.setAttribute('aria-hidden', !isActive());
  }

  const navbarProgressHandler = (tour) => {
    const currentStep = tour.getCurrentStep().target;

    if (!currentStep) {
      return;
    }
    const navbarItems = [...navbar.querySelectorAll('.onboardingWizard-nav-item')];

    navbarItems.some((navItem) => {
      const { navigationStep } = navItem.dataset;

      if ([...currentStep.classList].includes(navigationStep)) {
        navbarItems.forEach(item => {
          const itemClasses = item.classList;

          itemClasses.add('active')
          itemClasses.remove('last')
        });

        $(navItem).last().addClass('last')

        return true
      }

      return false;
    });
  }

  const modalCollapseHandler = (tour) => {
    const currentStep = tour.currentStep.el;
    const buttonCollapse = currentStep.querySelector('.btn-collapse');
    const isCollapsed = [...currentStep.classList].includes('collapsed');
    const paragraph = document.createElement('span');

    paragraph.classList.add('btn-text-open');
    paragraph.textContent = 'Open';

    if (!buttonCollapse) {
      return;
    }

    const textOpen = buttonCollapse.querySelector('.btn-text-open ')

    !isCollapsed ? buttonCollapse.appendChild(paragraph) : buttonCollapse.removeChild(textOpen)

    currentStep.classList.toggle('collapsed', !isCollapsed);
    currentStep.setAttribute('aria-hidden', !isCollapsed);
  }

  const tour = new Shepherd.Tour({
    useModalOverlay: true,
    confirmCancel: false,
    keyboardNavigation: false,
    defaultStepOptions: {
      class: 'onboardingWizard-popup',
      arrow: false,
      cancelIcon: {
        enabled: false,
      },
      scrollTo: { behavior: 'smooth', block: 'center' },
      modalOverlayOpeningRadius: 4,
    },
  });

  steps.forEach((step, index) => {
    tour.addStep({
      id: step.id,
      title: step.title ? step.title : null,
      text: step.text,
      classes: step.stepClass,
      attachTo: {
        ...(step.attachToElement && { element: step.attachToElement }),
        on: 'top-start'
      },
      ...(step.classActive && { highlightClass: step.classActive }),
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
          ...(step.btnCloseClass && { classes: step.btnCloseClass }),
        },
        {
          text: '<i class="arrow down icon"></i>',
          action: () => modalCollapseHandler(tour),
          ...(step.btnCollapseClass && { classes: step.btnCollapseClass }),
        },
        {
          text: step.btnBackText,
          action() {
            if (index === 0) {
              tour.complete();
            } else {
              if(step.urlMollie) {
                window.open(`${step.urlMollie}/signin`, '_blank');
                tour.next();

                return;
              }

              tour.back();
            }
          },
          secondary: true,
          ...(step.btnBackClass && { classes: step.btnBackClass }),
        },
        {
          text: step.btnNextText,
          action() {
            if(index === steps.length - 1) {
              tour.complete();
            } else {
              if(step.urlMollie) {
                window.open(`${step.urlMollie}/signup`, '_blank');
                tour.next();
                return
              }
              tour.next();
            }
          },
          ...(step.btnNextClass && { classes: step.btnNextClass }),
        },
      ],
    });
  });

  tour.start();

  ['inactive', 'show'].forEach(event => tour.on(event, () => navbarVisibilityHandler(tour.isActive)));

  function mountTourOrderApi () {
    const selectCustom = document.querySelector(
      '#sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_paymentType ~ .menu'
    )

    const orderApiOption = selectCustom.querySelector('[data-value="ORDER_API"]');

    if (!orderApiOption) {
      return;
    }

    const orderApiOptionSelected =
      $('[for=sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_paymentType] + .dropdown')
        .find(':selected')
        .val() === 'ORDER_API'


    orderApiOption.addEventListener('click', () => {
      tour.steps.forEach(step => {
        if (step.id === 'orderApi') {
          tour.show('orderApi');

          return;
        }
      });

      tour.addStep({
        keyboardNavigation: false,
        id: 'orderApi',
        highlightClass: 'payment-settings',
        classes: 'right-bottom',
        text: 'Select Orders API - this is Mollie\n' +
          'suggested API to use for webshops b/c it allows you to create “orders”. An order contains the personal information of a customer (e.g. address) and products that the customer ordered. When an order is made, a corresponding payment will be created automatically.',
        btnBackText:'Go back',
        btnNextText: 'Next',
        attachTo: {
          element: '[for="sylius_payment_method_gatewayConfig_mollieGatewayConfig_1_paymentType"] + .dropdown',
          on: 'top-start',
        },
        when: {
          show: () => {
            const previousStepIndex = tour.steps.indexOf(tour.getCurrentStep());
            const buttonClose = document.querySelector('.btn-close');

            buttonClose.addEventListener('click', () => {
              tour.addStep(stepQuitConfirmationHandler(previousStepIndex));
              tour.show('step-quitConfirmation');
            });

            navbarProgressHandler(tour);
          },
        },
        buttons: [
          {
            text: '<i class="close icon"></i>',
            action: () => tour.addStep(stepQuitConfirmationHandler(this.previousStepIndex)),
            classes: 'btn-close',
          },
          {
            text: '<i class="arrow down icon"></i>',
            action: () => modalCollapseHandler(tour),
            classes: 'btn-collapse',
          },
          {
            text: 'Go back',
            action: () => tour.show('paymentTitle'),
            secondary: true,
          },
          {
            text: 'Next',
            action: () => {
              tour.show('fees')
            },
            classes: 'with-triangle',
          },
        ],
      });

      tour.start();
      tour.show('orderApi');
    })
  }

  mountTourOrderApi();
})
