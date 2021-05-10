export default {
  stepStart: {
    title: 'Let me help you',
    text: 'Thank you for installing Mollie for payment services. This guide will take you through the configuration setup. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam suscipit nibh quis urna congue, et interdum nulla rutrum. Cras at justo ornare.'
  },
  stepEnv: {
    text: 'TEST will be the default in the plugin. You only need to do the configuration once to have TEST + LIVE environments available. Try easily togging between the two.'
  },
  stepMollieConnect: {
    title: 'Connect to your Mollie account',
    text: 'To sync the Mollie plugin to your webshop you\'ll need Mollie API keys and Profile ID.'
  },
  stepApiKey: {
    text: 'Fill in your correct details and click "TEST API Key" this will return a successful or failed result for both the LIVE and TEST environments. Learn about the difference between: Orders API or the Payments API'
  },
  stepCheckoutConfig: {
    text: 'Webshop checkout Configurations, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper velit et urna gravida efficitur.'
  },
  stepMollieComponents: {
    text: 'Enabling components, allows you to add the fields needed for credit card holder data to your own checkout. If you select NO, users will be redirected to the Mollie checkout page'
  },
  stepMolliePayments: {
    text: 'Enabling single click payments remembers your consumer\'s payment preferences in order to expedite follow-up payments. Your consumer does not have to perform any additional actions to enjoy quick and easy payments.'
  },
  stepPaymentsApi: {
    text: 'We\'ll go through setup with the Payments API first and then highlight differences if you choose to use the Orders API'
  },
  stepPaymentTitle: {
    text: 'You can enter a custom title here - it will be displayed on your checkout page'
  },
  stepImageUpload: {
    text: 'Upload a custom image for the payment method icon, this will be shown in the checkout page.'
  },
  stepRestrictPayment: {
    text: 'Restrict/allow payment per individual countries.'
  },
  stepFees: {
    text: 'In case you have fees that you are passing on to the consumer, you can add them here'
  },
  stepFinishWizard: {
    title: '<i class="icon check circle"></i> You\'re all set!',
    text: 'You\'re all done, you can now attempt a consumer order or your website.'
  },
  stepQuitConfirmation: {
    title: 'Are you sure you want to quit ?',
    text: 'You\'re all done, you can now attempt a consumer order or your website'
  },
  stepPaymentType: {
    text: 'When using Payments API you may want additional details to help you match payments with customer orders -- you can enter those values here but make sure to use the correct tags provide in the text below'
  },
  stepPaymentDescription: {
    text: 'Choose Payments API Learn about the difference between Orders API or the Payments API'
  },
  stepOrderApi: {
    text: 'Select Orders API - this is Mollie\n' +
    'suggested API to use for webshops b/c it allows you to create “orders”. An order contains the personal information of a customer (e.g. address) and products that the customer ordered. When an order is made, a corresponding payment will be created automatically.',
  },
  stepButtons: {
    goBack: 'Go back',
    skipWizard: 'Skip this, I know how it works',
    startWizard: 'Start onboarding assistant <i class="icon angle right"></i>',
    loginMollieAccount: 'Login to my account',
    nextWithArrow: 'Next <i class="icon angle right"></i>',
    next: 'Next',
    createMollieAccount: 'Create a Mollie account <i class="icon angle right"></i>',
    finishWizard: 'Start using Mollie plugin <i class="icon angle right"></i>',
    quitConfirm: 'Quit the onboarding assistant',
    quitCancel: 'Continue onboarding <i class="icon angle right"></i>',
  },
  common: {
    open: 'Open'
  }
};
