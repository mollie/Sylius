import {paymentTypeIndicator} from '../helpers/filterMethod';

export const stepPaymentType = {
	id: 'step-payment-type',
	text: 'stepPaymentType.text',
	classes: 'shepherd-element--align-right',
	highlightClass: 'payment-settings',
	attachTo: {
		element: '.js-onboardingWizard-paymentType',
		on: 'top-start',
	},
	btnNextClass: 'shepherd-button--arrow-down',
};

export const stepPaymentDescription = {
	id: 'step-payment-description',
	text: 'stepPaymentDescription.text',
	classes: 'shepherd-element--align-right',
	attachTo: {
		element: '.js-onboardingWizard-paymentDescription',
		on: 'top-start',
	},
	highlightClass: 'payment-settings',
	btnNextClass: 'shepherd-button--arrow-down',
};

export const stepOrderApi = {
	id: 'step-order-api',
	highlightClass: 'payment-settings',
	classes: 'shepherd-element--align-right',
	text: 'stepOrderApi.text',
	attachTo: {
		element: '.js-onboardingWizard-paymentType',
		on: 'top-start',
	},
	btnNextClass: 'shepherd-button--arrow-down',
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
	},
];

export const steps = [
	{
		id: 'step-start',
		title: 'stepStart.title',
		text: 'stepStart.text',
		classes: 'shepherd-element--first',
		highlightClass: 'intro',
		btnBackText: 'stepButtons.skipWizard',
		btnNextText: 'stepButtons.startWizard',
		btnCollapseClass: 'd-none',
		btnCloseClass: 'd-none',
	},
	{
		id: 'step-mollie-connect',
		title: 'stepMollieConnect.title',
		text: 'stepMollieConnect.text',
		highlightClass: 'intro',
		btnBackText: 'stepButtons.loginMollieAccount',
		btnNextText: 'stepButtons.createMollieAccount',
		btnCollapseClass: 'd-none',
		urlMollie: 'https://www.mollie.com/dashboard',
	},
	{
		id: 'step-env',
		text: 'stepEnv.text',
		classes: 'shepherd-element--align-right',
		highlightClass: 'api-settings',
		attachTo: {
			element: '.js-onboardingWizard-environment',
			on: 'top-start',
		},
		btnNextClass: 'shepherd-button--arrow-down',
	},
	{
		id: 'step-api-key',
		text: 'stepApiKey.text',
		classes: 'shepherd-element--align-right',
		highlightClass: 'api-settings',
		btnNextClass: 'shepherd-button--arrow-down',
		attachTo: {
			element: '.js-onboardingWizard-profile-api',
			on: 'top-start',
		},
	},
	{
		id: 'step-checkout-config',
		text: 'stepCheckoutConfig.text',
		classes: 'step-6 shepherd-element--align-right',
		highlightClass: 'store-settings',
		btnNextText: 'stepButtons.next',
	},
	{
		id: 'step-mollie-components',
		text: 'stepMollieComponents.text',
		classes: 'shepherd-element--align-right',
		highlightClass: 'store-settings',
		btnNextClass: 'shepherd-button--arrow-down',
		attachTo: {
			element: '.js-onboardingWizard-mollieComponents',
			on: 'top-start',
		},
	},
	{
		id: 'step-mollie-payments',
		text: 'stepMolliePayments.text',
		classes: 'shepherd-element--align-right',
		highlightClass: 'store-settings',
		btnNextClass: 'shepherd-button--arrow-down',
		attachTo: {
			element: '.js-onboardingWizard-singleClick',
			on: 'top-start',
		},
	},
	{
		id: 'step-payments-api',
		text: 'stepMethodConfig.text',
		classes: 'shepherd-element--align-right',
		highlightClass: 'payment-settings',
		btnNextText: 'stepButtons.next',
		attachTo: {
			element: '.js-onboardingWizard-load-methods',
			on: 'top-start',
		},
	},
	{
		id: 'step-payment-title',
		text: 'stepPaymentTitle.text',
		classes: 'step-9 shepherd-element--align-right',
		highlightClass: 'payment-settings',
		btnNextClass: 'shepherd-button--arrow-down',
		attachTo: {
			element: '.js-onboardingWizard-paymentName',
			on: 'top-start',
		},
	},
	{
		id: 'step-image-upload',
		text: 'stepImageUpload.text',
		classes: 'step-14 shepherd-element--align-right',
		highlightClass: 'payment-settings',
		btnNextClass: 'shepherd-button--arrow-down',
		attachTo: {
			element: '.js-onboardingWizard-customizeMethodImage input',
			on: 'top-start',
		},
	},
	{
		id: 'step-country-restriction',
		text: 'stepCountryRestriction.text',
		classes: 'step-12 shepherd-element--align-right',
		highlightClass: 'payment-settings',
		btnNextClass: 'shepherd-button--arrow-down',
		attachTo: {
			element: '.js-onboardingWizard-countryRestriction',
			on: 'top-start',
		},
	},
	// payment type select
	{
		id: 'step-payment-method',
		text: 'stepPaymentMethod.text',
		classes: 'step-12 shepherd-element--align-right',
		highlightClass: 'payment-settings',
		btnNextClass: 'shepherd-button--arrow-down',
		attachTo: {
			element: '.js-onboardingWizard-PaymentMethod',
			on: 'top-start',
		},
	},
	//
	{
		showOn: paymentTypeIndicator(
			'#sylius_payment_method_gatewayConfig_mollieGatewayConfig_0_paymentType',
			'ORDER_API'
		),
		id: 'step-order-number',
		text: 'stepOrderNumber.text',
		classes: 'step-12 shepherd-element--align-right',
		highlightClass: 'payment-settings',
		btnNextClass: 'shepherd-button--arrow-down',
	},
	{
		showOn: paymentTypeIndicator(
			'#sylius_payment_method_gatewayConfig_mollieGatewayConfig_0_paymentType',
			'ORDER_API'
		),
		id: 'step-order-api',
		text: 'stepOrderAPI.text',
		classes: 'step-12 shepherd-element--align-right',
		highlightClass: 'payment-settings',
		btnNextClass: 'shepherd-button--arrow-down',
	},
	{
		showOn: paymentTypeIndicator(
			'#sylius_payment_method_gatewayConfig_mollieGatewayConfig_0_paymentType',
			'PAYMENT_API'
		),
		id: 'step-payments-api',
		text: 'stepPaymentsAPI.text',
		classes: 'step-12 shepherd-element--align-right',
		highlightClass: 'payment-settings',
		btnNextClass: 'shepherd-button--arrow-down',
	},
	//
	{
		id: 'step-fees',
		text: 'stepFees.text',
		classes: 'step-13 shepherd-element--align-right',
		highlightClass: 'payment-settings',
		btnNextClass: 'shepherd-button--arrow-down',
		attachTo: {
			element: '.js-onboardingWizard-paymentFee .dropdown',
			on: 'top-start',
		},
	},
	{
		id: 'save',
		text: 'stepSave.text',
		classes: 'step-13 shepherd-element--align-right',
		highlightClass: 'payment-settings',
		btnNextClass: 'shepherd-button--arrow-down',
		attachTo: {
			element: '#sylius_save_changes_button',
			on: 'top-start',
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
