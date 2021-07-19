export default {
	stepStart: {
		title: 'Let me help you',
		text: 'Thank you for installing Mollie for payment services. This guide will take your through the configuration set-up.',
	},
	stepMollieConnect: {
		title: 'Connect to your Mollie account',
		text: "To sync the Mollie plugin to your webshop you'll need Mollie API keys and Profile ID.",
	},
	stepEnv: {
		text: "Now that you're connected to Mollie we will configure the environment and credentials. Test will be the default environment in the plugin. You only need to do the configuration once to have TEST + LIVE environments available. Try easily togging between the two.",
	},
	stepApiKey: {
		text: 'Fill in your correct details and click "TEST API Key" this will return a successful or failed result for both the LIVE and TEST environments',
	},
	stepCheckoutConfig: {
		text: "Next, we'll set-up key settings for the checkout screen display on your webshop.",
	},
	stepMollieComponents: {
		text: `Enabling components, allows you to add the fields needed for credit card holder data to your own checkout.<br><br>If you select NO, customers will be redirected to the Mollie checkout page.<br><br>Learn more about Mollie components <a target="_blank" href="https://www.mollie.com/en/news/post/better-checkout-flows-with-mollie-components">here</a>.`,
	},
	stepMolliePayments: {
		text: `Enabling single click payments remembers your consumer's payment preferences in order to expedite follow-up payments. Your consumer does not have to perform any additional actions to enjoy quick and easy payments.<br><br>Learn more about single click payments <a target="_blank" href="https://help.mollie.com/hc/en-us/articles/115000671249-What-are-single-click-payments-and-how-does-it-work-">here</a>.`,
	},
	stepMethodConfig: {
		text: "Now it's time to customize features for individual payment methods.<br><br>First, select the load methods button. Only the methods that are enabled in your Mollie account will display here.<br><br>Then you use the enable/disable selector to control which will show on your webshop checkout.<br><br>NOTE: It is not possible to continue the guided onboarding without loading payment methods.",
	},
	stepMethodRequired: {
		text: 'The loaded methods are required to complete onboard wizard and move forward, please load methods by clicking "Load Methods" button and come back to complete this tutorial',
	},
	stepErrorTitle: {
		text: 'Onboarding Assistant Wizard - Ended Up',
	},
	stepErrorDescription: {
		text: 'The required action was not performed',
	},
	stepPaymentTitle: {
		text: 'For each method, you can enter a custom title here - it will be displayed on your webshop checkout page.',
	},
	stepImageUpload: {
		text: 'Try uploading a custom image for the payment method icon. This will be shown in the wenshop checkout page.',
	},
	stepCountryRestriction: {
		text: 'Here you can create filters for country specific payment methods - for example, if you want iDEAL only to show for Netherlands customers you choose "Select Countries" and select Netherlands.',
	},
	stepPaymentMethod: {
		text: 'Per method, you can select which Mollie API to use to create payments. Click <a target="_blank" href="https://docs.mollie.com/orders/why-use-orders">here</a> to read about the differences between Orders and Payments API.',
	},
	stepOrderNumber: {
		text: 'When using Payments API you may want additional details to help you match payments with customer orders -- you can enter those values here but make sure to use the correct tags provided in the text below',
	},
	stepOrdersAPI: {
		text: 'Orders API <br>This is Mollie suggested API to use for webshops because it allows you to create “orders”. An order contains the personal information of a customer (e.g. address) and products that the customer ordered. When an order is made, a corresponding payment will be created automatically.',
	},
	stepPaymentsAPI: {
		text: 'Payments API <br>Note: Payments API can not be used for methods such as Klarna',
	},
	stepFees: {
		text: 'In case you have fees that you are passing on to the consumer, you can add them <a target="_blank" href="https://help.mollie.com/hc/en-us/articles/360012564454-Can-I-pass-over-the-costs-for-the-use-of-a-payment-method-to-my-customers-">here</a>',
	},
	stepSave: {
		text: 'Remeber to save your configurations. ',
	},
	stepFinishWizard: {
		title: '<i class="icon check circle"></i> You\'re all set!',
		text: "You're all done, you can now attempt a consumer order or your website.",
	},
	stepQuitConfirmation: {
		title: 'Are you sure you want to quit ?',
		text: "You're all done, you can now attempt a consumer order or your website",
	},
	stepPaymentType: {
		text: 'When using Payments API you may want additional details to help you match payments with customer orders -- you can enter those values here but make sure to use the correct tags provide in the text below',
	},
	stepPaymentDescription: {
		text: 'Choose Payments API Learn about the difference between Orders API or the Payments API',
	},
	stepOrderApi: {
		text:
			'Select Orders API - this is Mollie\n' +
			'suggested API to use for webshops b/c it allows you to create “orders”. An order contains the personal information of a customer (e.g. address) and products that the customer ordered. When an order is made, a corresponding payment will be created automatically.',
	},
	stepButtons: {
		goBack: 'Go back',
		skipWizard: 'Skip this, I know how it works',
		startWizard:
			'Start onboarding assistant <i class="icon angle right"></i>',
		loginMollieAccount: 'Login to my account',
		nextWithArrow: 'Next <i class="icon angle right"></i>',
		next: 'Next',
		createMollieAccount:
			'Create a Mollie account <i class="icon angle right"></i>',
		finishWizard:
			'Start using Mollie plugin <i class="icon angle right"></i>',
		quitConfirm: 'Quit the onboarding assistant',
		quitCancel: 'Continue onboarding <i class="icon angle right"></i>',
	},
	common: {
		open: 'Open',
	},
};
