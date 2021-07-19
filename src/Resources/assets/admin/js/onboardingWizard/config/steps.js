import {
	paymentTypeIndicator,
	methodLoadIndicator,
	currentStepValidator,
	updateTourCompletition,
} from '../helpers/filterMethod';

const paymentMethodPaymentApi = 'PAYMENT_API';
const paymentMethodOrderApi = 'ORDER_API';
const enviromentTest = '0';
const enviromentLive = '1';

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
				action: (onboardingWizard) => {
					onboardingWizard.tour.removeStep('step-quit-confirmation');
					onboardingWizard.tour.complete();
				},
				secondary: true,
			},
			{
				text: 'stepButtons.quitCancel',
				action: (onboardingWizard, stepIndex) => {
					onboardingWizard.tour.show(stepIndex, true);
					onboardingWizard.tour.removeStep('step-quit-confirmation');
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
		showOn: function () {
			currentStepValidator(
				'.js-onboardingWizard-environment',
				'.pushable'
			);
			return true;
		},
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
		showOn: function () {
			currentStepValidator(
				'.js-two-fields-test .required.field',
				'.pushable'
			);
			return paymentTypeIndicator(
				'.js-onboardingWizard-environment',
				enviromentTest
			);
		},
		id: 'step-api-key-test',
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
		showOn: function () {
			currentStepValidator(
				'.js-onboardingWizard-profile-api',
				'.pushable'
			);
			return paymentTypeIndicator(
				'.js-onboardingWizard-environment',
				enviromentLive
			);
		},
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
		showOn: function () {
			currentStepValidator(
				'.js-onboardingWizard-mollieComponents',
				'.pushable'
			);
			return true;
		},
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
		showOn: function () {
			currentStepValidator(
				'.js-onboardingWizard-singleClick',
				'.pushable'
			);
			return true;
		},
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
		showOn: function () {
			currentStepValidator(
				'.js-onboardingWizard-load-methods',
				'.pushable'
			);
			methodLoadIndicator('.js-payment-method-not-loaded', '.pushable');
			return true;
		},
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
		showOn: function () {
			currentStepValidator(
				'.js-onboardingWizard-paymentName',
				'.pushable'
			);
			return true;
		},
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
		showOn: function () {
			currentStepValidator(
				'.js-onboardingWizard-customizeMethodImage',
				'.pushable'
			);
			return true;
		},
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
		showOn: function () {
			currentStepValidator(
				'.js-onboardingWizard-countryRestriction',
				'.pushable'
			);
			return true;
		},
		id: 'step-country-restriction',
		text: 'stepCountryRestriction.text',
		classes: 'step-12 shepherd-element--align-right',
		highlightClass: 'payment-settings',
		btnNextClass: 'shepherd-button--arrow-down',
		attachTo: {
			element: '.js-onboardingWizard-countryRestrictions',
			on: 'top-start',
		},
	},
	{
		showOn: function () {
			currentStepValidator(
				'.js-onboardingWizard-PaymentMethod',
				'.pushable'
			);
			return true;
		},
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
	{
		showOn: function () {
			currentStepValidator(
				'.js-onboardingWizard-order-number',
				'.pushable'
			);
			return paymentTypeIndicator(
				'#sylius_payment_method_gatewayConfig_mollieGatewayConfig_0_paymentType',
				paymentMethodPaymentApi
			);
		},
		id: 'step-order-number',
		text: 'stepOrderNumber.text',
		classes: 'step-12 shepherd-element--align-right',
		highlightClass: 'payment-settings',
		btnNextClass: 'shepherd-button--arrow-down',
		attachTo: {
			element: '.js-onboardingWizard-order-number',
			on: 'top-start',
		},
	},
	{
		showOn: function () {
			return paymentTypeIndicator(
				'#sylius_payment_method_gatewayConfig_mollieGatewayConfig_0_paymentType',
				paymentMethodOrderApi
			);
		},
		id: 'step-order-api',
		text: 'stepOrdersAPI.text',
		classes: 'step-12 shepherd-element--align-right',
		highlightClass: 'payment-settings',
		btnNextClass: 'shepherd-button--arrow-down',
	},

	{
		showOn: function () {
			currentStepValidator('.js-onboardingWizard-paymentFee', '.pushable');
			return true;
		},
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
		showOn: function () {
			updateTourCompletition();
			return true;
		},
		id: 'save',
		text: 'stepSave.text',
		classes: 'step-13 shepherd-element--align-right',
		highlightClass: 'payment-settings',
		btnNextClass: 'shepherd-button--arrow-down',
		attachTo: {
			element: '.ui.buttons:not(.js-header-btn)',
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
	}
];
