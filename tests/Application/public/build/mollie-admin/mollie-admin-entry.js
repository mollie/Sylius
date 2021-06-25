/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/mollie-admin/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../src/Resources/assets/admin/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../src/Resources/assets/admin/css/main.scss":
/*!**********************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/css/main.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../src/Resources/assets/admin/entry.js":
/*!*****************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/entry.js ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.scss */ "../../src/Resources/assets/admin/css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main */ "../../src/Resources/assets/admin/js/main.js");



/***/ }),

/***/ "../../src/Resources/assets/admin/js/main.js":
/*!*******************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/js/main.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _molliePayments_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./molliePayments/main */ "../../src/Resources/assets/admin/js/molliePayments/main.js");
/* harmony import */ var _onboardingWizard_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onboardingWizard/main */ "../../src/Resources/assets/admin/js/onboardingWizard/main.js");



/***/ }),

/***/ "../../src/Resources/assets/admin/js/molliePayments/app.js":
/*!*********************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/js/molliePayments/app.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  const mollieFormIncluded = document.getElementById("mollie-payment-form");

  if (!mollieFormIncluded) {
    return;
  }

  $("#get_methods").on('click', function () {
    let form = $(".ui.form");
    form.addClass('loading');
    $.ajax({
      type: "GET",
      url: $(this).data('url'),
      success: function (data) {
        location.reload();
      },
      error: function () {
        location.reload();
      }
    });
  });
  $('.ui.dropdown').dropdown();
  $(".form_button--delete-img").each(function (index, value) {
    $(this).on('click', function () {
      let form = $(".ui.form");
      let value = $(this).data('value');
      form.addClass('loading');
      $.ajax({
        data: {
          method: value
        },
        type: "DELETE",
        url: $(this).data('url'),
        success: function (data) {
          location.reload();
        },
        error: function () {
          form.removeClass('loading');
        }
      });
    });
  });
  $(".bitbag-mollie-components").change(function () {
    if ($(this).is(':checked')) {
      $('.bitbag-single-click-payment').prop('checked', !$(this).is(':checked'));
    }
  });
  $(".bitbag-single-click-payment").change(function () {
    if ($(this).is(':checked')) {
      $('.bitbag-mollie-components').prop('checked', !$(this).is(':checked'));
    }
  });
  $('[id$="_paymentType"]').each(function (index) {
    setPaymentDescription($(this), index);
    $(this).on('change', function (event) {
      setPaymentDescription($(event.target), index);
    });
  });

  function setPaymentDescription(select) {
    const $targetMethod = select.closest('.js-draggable');
    const $inputOrderNumber = $targetMethod.find('[id$="_paymentDescription"]');
    const $descriptionOrderNumber = $targetMethod.find('[id^="payment_description_"]');

    if (select.find(':selected').val() === 'PAYMENT_API') {
      $inputOrderNumber.show();
      $descriptionOrderNumber.show();
    } else {
      $inputOrderNumber.hide();
      $descriptionOrderNumber.hide();
    }
  }

  $('[id$="_paymentSurchargeFee_type"]').each(function (index) {
    const value = $(this).find(":selected").val();
    setPaymentFeeFields(value, index);
    $(this).on('change', function () {
      const value = $(this).val();
      setPaymentFeeFields(value, index);
    });
  });

  function setPaymentFeeFields(value, index) {
    const fixedAmount = 'sylius_payment_method_gatewayConfig_mollieGatewayConfig_' + index + '_paymentSurchargeFee_fixedAmount';
    const percentage = 'sylius_payment_method_gatewayConfig_mollieGatewayConfig_' + index + '_paymentSurchargeFee_percentage';
    const surchargeLimit = 'sylius_payment_method_gatewayConfig_mollieGatewayConfig_' + index + '_paymentSurchargeFee_surchargeLimit';

    if (value === 'no_fee') {
      $('label[for=' + fixedAmount + '], input#' + fixedAmount + '').hide();
      $('label[for=' + percentage + '], input#' + percentage + '').hide();
      $('label[for=' + surchargeLimit + '], input#' + surchargeLimit + '').hide();
    }

    if (value === 'percentage') {
      $('label[for=' + percentage + '], input#' + percentage + '').show();
      $('label[for=' + surchargeLimit + '], input#' + surchargeLimit + '').show();
      $('label[for=' + fixedAmount + '], input#' + fixedAmount + '').hide();
    }

    if (value === 'fixed_fee') {
      $('label[for=' + fixedAmount + '], input#' + fixedAmount + '').show();
      $('label[for=' + percentage + '], input#' + percentage + '').hide();
      $('label[for=' + surchargeLimit + '], input#' + surchargeLimit + '').hide();
    }

    if (value === 'fixed_fee_and_percentage') {
      $('label[for=' + fixedAmount + '], input#' + fixedAmount + '').show();
      $('label[for=' + percentage + '], input#' + percentage + '').show();
      $('label[for=' + surchargeLimit + '], input#' + surchargeLimit + '').show();
    }
  }

  $('[id$="_country_restriction"]').each(function (index) {
    const value = $(this).find(":selected").val();
    setCountryRestriction(value, index);
    $(this).on('change', function () {
      const value = $(this).val();
      setCountryRestriction(value, index);
    });
  });

  function setCountryRestriction(value, index) {
    const excludeCountries = $('#country-excluded_' + index);
    const allowCountries = $('#country-allowed_' + index);

    if (value === 'ALL_COUNTRIES') {
      excludeCountries.show();
      allowCountries.hide();
    }

    if (value === 'SELECTED_COUNTRIES') {
      excludeCountries.hide();
      allowCountries.show();
    }
  }
});

/***/ }),

/***/ "../../src/Resources/assets/admin/js/molliePayments/main.js":
/*!**********************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/js/molliePayments/main.js ***!
  \**********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "../../src/Resources/assets/admin/js/molliePayments/app.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _showHideApiKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showHideApiKeys */ "../../src/Resources/assets/admin/js/molliePayments/showHideApiKeys.js");
/* harmony import */ var _showHideApiKeys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_showHideApiKeys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortable */ "../../src/Resources/assets/admin/js/molliePayments/sortable.js");
/* harmony import */ var _sortable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sortable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _testApiKeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testApiKeys */ "../../src/Resources/assets/admin/js/molliePayments/testApiKeys.js");
/* harmony import */ var _testApiKeys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_testApiKeys__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "../../src/Resources/assets/admin/js/molliePayments/showHideApiKeys.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/js/molliePayments/showHideApiKeys.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  const testApiKeyButton = document.getElementById("api_key_test");
  const liveApiKeyButton = document.getElementById("api_key_live");
  $(testApiKeyButton).on('click', function (event) {
    const testApiKeyInput = document.getElementById("sylius_payment_method_gatewayConfig_config_api_key_test");

    if (testApiKeyInput.type === 'password') {
      testApiKeyInput.type = 'text';
      return;
    }

    testApiKeyInput.type = 'password';
  });
  $(liveApiKeyButton).on('click', function (event) {
    const liveApiKeyInput = document.getElementById("sylius_payment_method_gatewayConfig_config_api_key_live");

    if (liveApiKeyInput.type === 'password') {
      liveApiKeyInput.type = 'text';
      return;
    }

    liveApiKeyInput.type = 'password';
  });
});

/***/ }),

/***/ "../../src/Resources/assets/admin/js/molliePayments/sortable.js":
/*!**************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/js/molliePayments/sortable.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  const container = document.querySelector('.js-sortable');

  if (!container) {
    return;
  }

  const draggables = document.querySelectorAll('.js-draggable');
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });
    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
      const payload = getPaymentMethodPositions();
      changePositionAjaxAction(payload);
    });
  });
  container.addEventListener('dragover', event => {
    event.preventDefault();
    const afterElement = getDragAfterElement(container, event.clientY);
    const draggable = document.querySelector('.dragging');

    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });

  function getPaymentMethodPositions() {
    const draggables = [...container.querySelectorAll('.js-draggable')];
    const updatedPositions = [];
    draggables.map((item, index) => {
      const {
        paymentMethod
      } = item.dataset;
      updatedPositions.push({
        id: index,
        name: paymentMethod
      });
    });
    return updatedPositions;
  }

  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.js-draggable:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return {
          offset: offset,
          element: child
        };
      } else {
        return closest;
      }
    }, {
      offset: Number.NEGATIVE_INFINITY
    }).element;
  }

  function changePositionAjaxAction(data) {
    const url = document.getElementById("payment_methods").getAttribute('data-ajax-url');
    $.ajax({
      type: "GET",
      url: url,
      data: {
        'data': data
      },
      success: function (data) {},
      error: function () {}
    });
  }
});

/***/ }),

/***/ "../../src/Resources/assets/admin/js/molliePayments/testApiKeys.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/js/molliePayments/testApiKeys.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  const testApiKeyButton = document.getElementsByClassName(" test-api-key-button");
  $(testApiKeyButton).on('click', function (event) {
    const testApiDataDiv = document.getElementsByClassName("test-api-key-div");
    const testApiKey = document.getElementById("sylius_payment_method_gatewayConfig_config_api_key_test");
    const liveApiKey = document.getElementById("sylius_payment_method_gatewayConfig_config_api_key_live");
    $(this).addClass('loading');
    $(this).attr('disabled', true);
    $.ajax({
      type: "GET",
      url: $(this).data('url'),
      data: {
        api_key_test: $(testApiKey).val(),
        api_key_live: $(liveApiKey).val()
      },
      success: function (data) {
        $(testApiDataDiv).removeClass('message red');
        $(testApiKeyButton).removeClass('loading');
        $(testApiKeyButton).removeAttr('disabled');
        $(testApiDataDiv).html(data);
      },
      error: function (error) {}
    });
  });
});

/***/ }),

/***/ "../../src/Resources/assets/admin/js/onboardingWizard/OnboardingWizard.js":
/*!************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/js/onboardingWizard/OnboardingWizard.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onboardingWizard; });
/* harmony import */ var shepherd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shepherd.js */ "./node_modules/shepherd.js/dist/js/shepherd.esm.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_steps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/steps */ "../../src/Resources/assets/admin/js/onboardingWizard/config/steps.js");
/* harmony import */ var _config_shepherdConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/shepherdConfig */ "../../src/Resources/assets/admin/js/onboardingWizard/config/shepherdConfig.js");
/* harmony import */ var _helpers_stepFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/stepFactory */ "../../src/Resources/assets/admin/js/onboardingWizard/helpers/stepFactory.js");
/* harmony import */ var _config_wizardTranslations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/wizardTranslations */ "../../src/Resources/assets/admin/js/onboardingWizard/config/wizardTranslations.js");






class onboardingWizard {
  constructor(tourSteps = _config_steps__WEBPACK_IMPORTED_MODULE_2__["steps"], tourConfig = _config_shepherdConfig__WEBPACK_IMPORTED_MODULE_3__["default"], tourQuitConfirmation = _config_steps__WEBPACK_IMPORTED_MODULE_2__["stepQuitConfirmation"]) {
    this.steps = Object(_helpers_stepFactory__WEBPACK_IMPORTED_MODULE_4__["default"])(tourSteps);
    this.stepQuitConfirmation = Object(_helpers_stepFactory__WEBPACK_IMPORTED_MODULE_4__["default"])(tourQuitConfirmation)[0];
    this.tourConfig = tourConfig;
    this.navbar = document.querySelector('.js-onboarding-wizard');
    this.navBarItems = [...this.navbar.querySelectorAll('.js-onboarding-wizard-progress')];
    this.previousStepIndex = 0;
  }

  modalCollapseHandler() {
    const currentStep = this.tour.currentStep.el;
    const buttonCollapse = currentStep.querySelector('.js-tour-collapse');
    const isCollapsed = [...currentStep.classList].includes('shepherd-element--collapsed');
    const expandButton = document.createElement('span');
    expandButton.classList.add('shepherd-button__open');
    expandButton.classList.add('js-shepherd-expand');
    expandButton.textContent = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_5__["default"], 'common.open');
    const textOpen = buttonCollapse.querySelector('.js-shepherd-expand');

    if (isCollapsed) {
      buttonCollapse.removeChild(textOpen);
    } else {
      buttonCollapse.appendChild(expandButton);
    }

    currentStep.classList.toggle('shepherd-element--collapsed', !isCollapsed);
    currentStep.setAttribute('aria-hidden', !isCollapsed);
  }

  handleQuitConfirmation() {
    const returnStepIndex = this.previousStepIndex;
    this.tour.addStep({ ...this.stepQuitConfirmation,
      buttons: this.stepQuitConfirmation.stepButtons(this, returnStepIndex)
    });
    this.tour.show('step-quit-confirmation', true);
  }

  navbarVisibilityHandler(isActive) {
    this.navbar.classList.toggle('d-none', !isActive);
    this.navbar.setAttribute('aria-hidden', !isActive);
  }

  navbarProgressHandler() {
    const currentStepProgress = this.tour.getCurrentStep().options.highlightClass;
    this.navBarItems.forEach(navBarItem => {
      if (navBarItem.getAttribute('data-navigation-step') === currentStepProgress) {
        navBarItem.classList.add('onboarding-wizard__step--current');
      } else {
        navBarItem.classList.remove('onboarding-wizard__step--current');
      }
    });
  }

  restartTourListener() {
    const restartTourTrigger = document.querySelector('.js-restart-tour');
    restartTourTrigger.addEventListener('click', () => {
      this.tour.start();
      this.navbar.classList.toggle('d-none');
    });
  }

  initTour() {
    if (this.navbar) {
      this.tour = new shepherd_js__WEBPACK_IMPORTED_MODULE_0__["default"].Tour({ ...this.tourConfig
      });
      this.steps.forEach((step, stepIndex) => {
        this.tour.addStep({ ...step,
          buttons: step.stepButtons(this, stepIndex),
          when: {
            show: () => {
              this.previousStepIndex = this.tour.getCurrentStep().id;
              this.navbarProgressHandler();
            }
          }
        });
      });
      this.tour.on('complete', () => {
        this.navbarVisibilityHandler(false);
      });
      this.tour.start();
      this.restartTourListener();
    }
  }

}

/***/ }),

/***/ "../../src/Resources/assets/admin/js/onboardingWizard/config/shepherdConfig.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/js/onboardingWizard/config/shepherdConfig.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  useModalOverlay: true,
  confirmCancel: false,
  keyboardNavigation: false,
  exitOnEsc: false,
  defaultStepOptions: {
    class: 'onboardingWizard-popup',
    arrow: false,
    cancelIcon: {
      enabled: false
    },
    scrollTo: {
      behavior: 'smooth',
      block: 'center'
    },
    modalOverlayOpeningRadius: 4
  }
});

/***/ }),

/***/ "../../src/Resources/assets/admin/js/onboardingWizard/config/steps.js":
/*!********************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/js/onboardingWizard/config/steps.js ***!
  \********************************************************************************************************************/
/*! exports provided: stepPaymentType, stepPaymentDescription, stepOrderApi, stepQuitConfirmation, steps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepPaymentType", function() { return stepPaymentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepPaymentDescription", function() { return stepPaymentDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepOrderApi", function() { return stepOrderApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepQuitConfirmation", function() { return stepQuitConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony import */ var _helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/filterMethod */ "../../src/Resources/assets/admin/js/onboardingWizard/helpers/filterMethod.js");

const paymentMethodPaymentApi = 'PAYMENT_API';
const paymentMethodOrderApi = 'ORDER_API';
const enviromentTest = '0';
const enviromentLive = '1';
const stepPaymentType = {
  id: 'step-payment-type',
  text: 'stepPaymentType.text',
  classes: 'shepherd-element--align-right',
  highlightClass: 'payment-settings',
  attachTo: {
    element: '.js-onboardingWizard-paymentType',
    on: 'top-start'
  },
  btnNextClass: 'shepherd-button--arrow-down'
};
const stepPaymentDescription = {
  id: 'step-payment-description',
  text: 'stepPaymentDescription.text',
  classes: 'shepherd-element--align-right',
  attachTo: {
    element: '.js-onboardingWizard-paymentDescription',
    on: 'top-start'
  },
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down'
};
const stepOrderApi = {
  id: 'step-order-api',
  highlightClass: 'payment-settings',
  classes: 'shepherd-element--align-right',
  text: 'stepOrderApi.text',
  attachTo: {
    element: '.js-onboardingWizard-paymentType',
    on: 'top-start'
  },
  btnNextClass: 'shepherd-button--arrow-down'
};
const stepQuitConfirmation = [{
  id: 'step-quit-confirmation',
  title: 'stepQuitConfirmation.title',
  text: 'stepQuitConfirmation.text',
  highlightClass: 'intro',
  customButtons: [{
    text: 'stepButtons.quitConfirm',
    action: onboardingWizard => {
      onboardingWizard.tour.removeStep('step-quit-confirmation');
      onboardingWizard.tour.complete();
    },
    secondary: true
  }, {
    text: 'stepButtons.quitCancel',
    action: (onboardingWizard, stepIndex) => {
      onboardingWizard.tour.show(stepIndex, true);
      onboardingWizard.tour.removeStep('step-quit-confirmation');
    }
  }]
}];
const steps = [{
  id: 'step-start',
  title: 'stepStart.title',
  text: 'stepStart.text',
  classes: 'shepherd-element--first',
  highlightClass: 'intro',
  btnBackText: 'stepButtons.skipWizard',
  btnNextText: 'stepButtons.startWizard',
  btnCollapseClass: 'd-none',
  btnCloseClass: 'd-none'
}, {
  id: 'step-mollie-connect',
  title: 'stepMollieConnect.title',
  text: 'stepMollieConnect.text',
  highlightClass: 'intro',
  btnBackText: 'stepButtons.loginMollieAccount',
  btnNextText: 'stepButtons.createMollieAccount',
  btnCollapseClass: 'd-none',
  urlMollie: 'https://www.mollie.com/dashboard'
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-environment', '.pushable');
    return true;
  },
  id: 'step-env',
  text: 'stepEnv.text',
  classes: 'shepherd-element--align-right',
  highlightClass: 'api-settings',
  attachTo: {
    element: '.js-onboardingWizard-environment',
    on: 'top-start'
  },
  btnNextClass: 'shepherd-button--arrow-down'
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-two-fields-test .required.field', '.pushable');
    return Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["paymentTypeIndicator"])('.js-onboardingWizard-environment', enviromentTest);
  },
  id: 'step-api-key-test',
  text: 'stepApiKey.text',
  classes: 'shepherd-element--align-right',
  highlightClass: 'api-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-profile-api',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-profile-api', '.pushable');
    return Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["paymentTypeIndicator"])('.js-onboardingWizard-environment', enviromentLive);
  },
  id: 'step-api-key-live',
  text: 'stepApiKey.text',
  classes: 'shepherd-element--align-right',
  highlightClass: 'api-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-profile-api',
    on: 'top-start'
  }
}, {
  id: 'step-checkout-config',
  text: 'stepCheckoutConfig.text',
  classes: 'step-6 shepherd-element--align-right',
  highlightClass: 'store-settings',
  btnNextText: 'stepButtons.next'
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-mollieComponents', '.pushable');
    return true;
  },
  id: 'step-mollie-components',
  text: 'stepMollieComponents.text',
  classes: 'shepherd-element--align-right',
  highlightClass: 'store-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-mollieComponents',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-singleClick', '.pushable');
    return true;
  },
  id: 'step-mollie-payments',
  text: 'stepMolliePayments.text',
  classes: 'shepherd-element--align-right',
  highlightClass: 'store-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-singleClick',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-load-methods', '.pushable');
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["methodLoadIndicator"])('.js-payment-method-not-loaded', '.pushable');
    return true;
  },
  id: 'step-payments-api',
  text: 'stepMethodConfig.text',
  classes: 'shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextText: 'stepButtons.next',
  attachTo: {
    element: '.js-onboardingWizard-load-methods',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-paymentName', '.pushable');
    return true;
  },
  id: 'step-payment-title',
  text: 'stepPaymentTitle.text',
  classes: 'step-9 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-paymentName',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-customizeMethodImage', '.pushable');
    return true;
  },
  id: 'step-image-upload',
  text: 'stepImageUpload.text',
  classes: 'step-14 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-customizeMethodImage input',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-countryRestriction', '.pushable');
    return true;
  },
  id: 'step-country-restriction',
  text: 'stepCountryRestriction.text',
  classes: 'step-12 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-countryRestrictions',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-PaymentMethod', '.pushable');
    return true;
  },
  id: 'step-payment-method',
  text: 'stepPaymentMethod.text',
  classes: 'step-12 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-PaymentMethod',
    on: 'top-start'
  }
}, {
  showOn: function () {
    Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["currentStepValidator"])('.js-onboardingWizard-order-number', '.pushable');
    return Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["paymentTypeIndicator"])('#sylius_payment_method_gatewayConfig_mollieGatewayConfig_0_paymentType', paymentMethodPaymentApi);
  },
  id: 'step-order-number',
  text: 'stepOrderNumber.text',
  classes: 'step-12 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-order-number',
    on: 'top-start'
  }
}, {
  showOn: function () {
    return Object(_helpers_filterMethod__WEBPACK_IMPORTED_MODULE_0__["paymentTypeIndicator"])('#sylius_payment_method_gatewayConfig_mollieGatewayConfig_0_paymentType', paymentMethodOrderApi);
  },
  id: 'step-order-api',
  text: 'stepOrdersAPI.text',
  classes: 'step-12 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-PaymentMethod',
    on: 'top-start'
  }
}, {
  id: 'step-fees',
  text: 'stepFees.text',
  classes: 'step-13 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.js-onboardingWizard-paymentFee',
    on: 'top-start'
  }
}, {
  id: 'save',
  text: 'stepSave.text',
  classes: 'step-13 shepherd-element--align-right',
  highlightClass: 'payment-settings',
  btnNextClass: 'shepherd-button--arrow-down',
  attachTo: {
    element: '.ui.buttons:not(.js-header-btn)',
    on: 'top-start'
  }
}, {
  id: 'step-finish-wizard',
  title: 'stepFinishWizard.title',
  text: 'stepFinishWizard.text',
  highlightClass: 'payment-settings',
  btnBackClass: 'd-none',
  btnNextClass: 'mr-auto',
  btnNextText: 'stepButtons.finishWizard',
  btnCollapseClass: 'd-none',
  btnCloseClass: 'd-none'
}];

/***/ }),

/***/ "../../src/Resources/assets/admin/js/onboardingWizard/config/wizardTranslations.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/js/onboardingWizard/config/wizardTranslations.js ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  stepStart: {
    title: 'Let me help you',
    text: 'Thank you for installing Mollie for payment services. This guide will take you through the configuration set-up.'
  },
  stepMollieConnect: {
    title: 'Connect to your Mollie account',
    text: "To sync the Mollie plugin to your webshop you'll need Mollie API keys and Profile ID."
  },
  stepEnv: {
    text: "Now that you're connected to Mollie we will configure the environment and credentials.<br><br>Test will be the default environment in the plugin.<br><br>You only need to do the configuration once to have TEST + LIVE environments available. Try easily togging between the two."
  },
  stepApiKey: {
    text: 'Fill in your correct details and click "TEST API Key" this will return a successful or failed result for both the LIVE and TEST environments'
  },
  stepCheckoutConfig: {
    text: "Next, we'll set-up key settings for the checkout screen display on your webshop."
  },
  stepMollieComponents: {
    text: `Enabling components, allows you to add the fields needed for credit card holder data to your own checkout.<br><br>If you select NO, customers will be redirected to the Mollie checkout page.<br><br>Learn more about Mollie components <a target="_blank" href="https://www.mollie.com/en/news/post/better-checkout-flows-with-mollie-components">here</a>.`
  },
  stepMolliePayments: {
    text: `Enabling single click payments remembers your consumer's payment preferences in order to expedite follow-up payments. Your consumer does not have to perform any additional actions to enjoy quick and easy payments.<br><br>Learn more about single click payments <a target="_blank" href="https://help.mollie.com/hc/en-us/articles/115000671249-What-are-single-click-payments-and-how-does-it-work-">here</a>.`
  },
  stepMethodConfig: {
    text: "Now it's time to customize features for individual payment methods.<br><br>First, select the load methods button. Only the methods that are enabled in your Mollie account will display here.<br><br>Then you use the enable/disable selector to control which will show on your webshop checkout.<br><br>NOTE: It is not possible to continue the guided onboarding without loading payment methods. "
  },
  stepMethodRequired: {
    text: 'The loaded methods are required to complete onboard wizard and move forward, please load methods by clicking "Load Methods" button and come back to complete this tutorial'
  },
  stepErrorTitle: {
    text: 'Onboarding Assistant Wizard - Ended Up'
  },
  stepErrorDescription: {
    text: 'The required action was not performed'
  },
  stepPaymentTitle: {
    text: 'For each method, you can enter a custom title here. It will be displayed on your webshop checkout page.'
  },
  stepImageUpload: {
    text: 'Try uploading a custom image for the payment method icon. This will be shown in the webshop checkout page.'
  },
  stepCountryRestriction: {
    text: 'Here you can create filters for country specific payment methods - for example, if you want iDEAL only to show for Netherlands customers you choose "Select Countries" and select Netherlands.'
  },
  stepPaymentMethod: {
    text: 'Per method, you can select which Mollie API to use to create payments. Click <a target="_blank" href="https://docs.mollie.com/orders/why-use-orders">here</a> to read about the differences between Orders and Payments API.'
  },
  stepOrderNumber: {
    text: 'When using Payments API you may want additional details to help you match payments with customer orders -- you can enter those values here but make sure to use the correct tags provided in the text below'
  },
  stepOrdersAPI: {
    text: 'This is Mollie suggested API to use for webshops because it allows you to create “orders”. An order contains the personal information of a customer (e.g. address) and products that the customer ordered. When an order is made, a corresponding payment will be created automatically.'
  },
  stepPaymentsAPI: {
    text: 'Payments API <br>Note: Payments API can not be used for methods such as Klarna'
  },
  stepFees: {
    text: 'In case you have fees that you are passing on to the consumer, you can add them <a target="_blank" href="https://help.mollie.com/hc/en-us/articles/360012564454-Can-I-pass-over-the-costs-for-the-use-of-a-payment-method-to-my-customers-">here</a>'
  },
  stepSave: {
    text: 'Remeber to save your configurations. '
  },
  stepFinishWizard: {
    title: '<i class="icon check circle"></i> You\'re all set!',
    text: "You can now attempt a customer order on your website."
  },
  stepQuitConfirmation: {
    title: 'Are you sure you want to quit ?',
    text: "You're all done, you can now attempt a consumer order or your website"
  },
  stepPaymentType: {
    text: 'When using Payments API you may want additional details to help you match payments with customer orders -- you can enter those values here but make sure to use the correct tags provide in the text below'
  },
  stepPaymentDescription: {
    text: 'Choose Payments API Learn about the difference between Orders API or the Payments API'
  },
  stepOrderApi: {
    text: 'Select Orders API - this is Mollie\n' + 'suggested API to use for webshops b/c it allows you to create “orders”. An order contains the personal information of a customer (e.g. address) and products that the customer ordered. When an order is made, a corresponding payment will be created automatically.'
  },
  stepButtons: {
    goBack: 'Go back',
    skipWizard: 'Skip this, I know how it works',
    startWizard: 'Start onboarding assistant <i class="icon angle right"></i>',
    loginMollieAccount: 'Login to my account',
    nextWithArrow: 'Next <i class="icon angle right"></i>',
    next: 'Next',
    createMollieAccount: 'Create a Mollie account <i class="icon angle right"></i>',
    finishWizard: 'Start using Mollie <i class="icon angle right"></i>',
    quitConfirm: 'Quit the onboarding assistant',
    quitCancel: 'Continue onboarding <i class="icon angle right"></i>'
  },
  common: {
    open: 'Open'
  }
});

/***/ }),

/***/ "../../src/Resources/assets/admin/js/onboardingWizard/helpers/filterMethod.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/js/onboardingWizard/helpers/filterMethod.js ***!
  \****************************************************************************************************************************/
/*! exports provided: paymentTypeIndicator, methodLoadIndicator, validateFields, currentStepValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentTypeIndicator", function() { return paymentTypeIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "methodLoadIndicator", function() { return methodLoadIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateFields", function() { return validateFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentStepValidator", function() { return currentStepValidator; });
const paymentTypeIndicator = (item, expectedValue) => {
  const indicatedItem = document.querySelector(item);
  const indicatedItemValue = indicatedItem.value;
  return indicatedItemValue === expectedValue;
};
const methodLoadIndicator = (item, messageContainer) => {
  const indicatedItem = document.querySelector(item);
  const messageWindow = document.querySelector(messageContainer);

  if (indicatedItem) {
    messageWindow.classList.add('step-next-disabled');
  } else {
    messageWindow.classList.remove('step-next-disabled');
  }
};
const validateFields = (elements, messageContainer) => {
  const errors = [];
  elements.forEach(item => {
    if (!item.value) {
      errors.push(item);
    }
  });

  if (errors.every(el => el === null)) {
    messageContainer.classList.remove('step-next-disabled');
  } else {
    messageContainer.classList.add('step-next-disabled');
  }
};
const currentStepValidator = (element, popup) => {
  const validationContainer = document.querySelector(element);
  const validationElements = validationContainer.parentNode.querySelectorAll(`input:not([type="file"]):not([type="submit"]):not(disabled):not([style*="display: none"]),
		select:not(disabled):not([style*="display: none;"])`);
  const messageWindow = document.querySelector(popup);

  if (validationElements && validationElements.length != 0) {
    validateFields(validationElements, messageWindow);
    validationElements.forEach(el => {
      el.addEventListener('input', () => {
        validateFields(validationElements, messageWindow);
      });
    });
  }
};

/***/ }),

/***/ "../../src/Resources/assets/admin/js/onboardingWizard/helpers/stepFactory.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/js/onboardingWizard/helpers/stepFactory.js ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/steps */ "../../src/Resources/assets/admin/js/onboardingWizard/config/steps.js");
/* harmony import */ var _config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/wizardTranslations */ "../../src/Resources/assets/admin/js/onboardingWizard/config/wizardTranslations.js");




const handleStepButtons = (onboardingWizard, stepIndex, step) => {
  if (step.customButtons) {
    return step.customButtons.map(customButton => ({ ...customButton,
      text: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__["default"], customButton.text),
      action: () => customButton.action(onboardingWizard, stepIndex)
    }));
  }

  return [{
    text: '<i class="close icon"></i>',
    action: () => {
      onboardingWizard.handleQuitConfirmation();
    },
    classes: `shepherd-button--close ${step.btnCloseClass || ''}`
  }, {
    text: '<i class="arrow down icon"></i>',
    action: () => onboardingWizard.modalCollapseHandler(),
    classes: `shepherd-button--collapse js-tour-collapse ${step.btnCollapseClass || ''}`
  }, {
    text: step.btnBackText ? lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__["default"], step.btnBackText) : lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__["default"], 'stepButtons.goBack'),
    secondary: true,
    classes: `${step.btnBackClass || ''}`,

    action() {
      const tour = onboardingWizard.tour;

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
    }

  }, {
    text: step.btnNextText ? lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__["default"], step.btnNextText) : lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__["default"], 'stepButtons.nextWithArrow'),
    classes: `${step.btnNextClass || ''}`,

    action() {
      const tour = onboardingWizard.tour;

      if (stepIndex === onboardingWizard.steps.length - 1) {
        tour.complete();
      } else {
        if (step.urlMollie) {
          window.open(`${step.urlMollie}/signup`, '_blank');
        }

        tour.next();
      }
    }

  }];
};

/* harmony default export */ __webpack_exports__["default"] = ((steps = []) => steps.map(step => ({ ...step,
  title: step.title ? lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__["default"], step.title) : null,
  text: lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(_config_wizardTranslations__WEBPACK_IMPORTED_MODULE_2__["default"], step.text),
  stepButtons: (onboardingWizard, stepIndex) => handleStepButtons(onboardingWizard, stepIndex, step)
})));

/***/ }),

/***/ "../../src/Resources/assets/admin/js/onboardingWizard/main.js":
/*!************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/admin/js/onboardingWizard/main.js ***!
  \************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OnboardingWizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OnboardingWizard */ "../../src/Resources/assets/admin/js/onboardingWizard/OnboardingWizard.js");

const tour = new _OnboardingWizard__WEBPACK_IMPORTED_MODULE_0__["default"]();
tour.initTour();
console.log('dup12341234a');

/***/ }),

/***/ "./node_modules/lodash.get/index.js":
/*!******************************************!*\
  !*** ./node_modules/lodash.get/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/shepherd.js/dist/js/shepherd.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/shepherd.js/dist/js/shepherd.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! shepherd.js 8.3.1 */

var isMergeableObject = function isMergeableObject(value) {
  return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
  return !!value && typeof value === 'object';
}

function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
} // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25


var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}

function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function (element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}

function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }

  var customMerge = options.customMerge(key);
  return typeof customMerge === 'function' ? customMerge : deepmerge;
}

function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}

function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}

function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
} // Protects from prototype poisoning and unexpected merging up the prototype chain.


function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
  && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
  && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
  var destination = {};

  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }

  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }

    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}

function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
  // implementations can use it. The caller may not replace it.

  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}

deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error('first argument should be an array');
  }

  return array.reduce(function (prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};

var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;

/**
 * Checks if `value` is classified as an `Element`.
 * @param {*} value The param to check if it is an Element
 */
function isElement$1(value) {
  return value instanceof Element;
}
/**
 * Checks if `value` is classified as an `HTMLElement`.
 * @param {*} value The param to check if it is an HTMLElement
 */

function isHTMLElement$1(value) {
  return value instanceof HTMLElement;
}
/**
 * Checks if `value` is classified as a `Function` object.
 * @param {*} value The param to check if it is a function
 */

function isFunction(value) {
  return typeof value === 'function';
}
/**
 * Checks if `value` is classified as a `String` object.
 * @param {*} value The param to check if it is a string
 */

function isString(value) {
  return typeof value === 'string';
}
/**
 * Checks if `value` is undefined.
 * @param {*} value The param to check if it is undefined
 */

function isUndefined(value) {
  return value === undefined;
}

class Evented {
  on(event, handler, ctx, once = false) {
    if (isUndefined(this.bindings)) {
      this.bindings = {};
    }

    if (isUndefined(this.bindings[event])) {
      this.bindings[event] = [];
    }

    this.bindings[event].push({
      handler,
      ctx,
      once
    });
    return this;
  }

  once(event, handler, ctx) {
    return this.on(event, handler, ctx, true);
  }

  off(event, handler) {
    if (isUndefined(this.bindings) || isUndefined(this.bindings[event])) {
      return this;
    }

    if (isUndefined(handler)) {
      delete this.bindings[event];
    } else {
      this.bindings[event].forEach((binding, index) => {
        if (binding.handler === handler) {
          this.bindings[event].splice(index, 1);
        }
      });
    }

    return this;
  }

  trigger(event, ...args) {
    if (!isUndefined(this.bindings) && this.bindings[event]) {
      this.bindings[event].forEach((binding, index) => {
        const {
          ctx,
          handler,
          once
        } = binding;
        const context = ctx || this;
        handler.apply(context, args);

        if (once) {
          this.bindings[event].splice(index, 1);
        }
      });
    }

    return this;
  }

}

/**
 * Binds all the methods on a JS Class to the `this` context of the class.
 * Adapted from https://github.com/sindresorhus/auto-bind
 * @param {object} self The `this` context of the class
 * @return {object} The `this` context of the class
 */
function autoBind(self) {
  const keys = Object.getOwnPropertyNames(self.constructor.prototype);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const val = self[key];

    if (key !== 'constructor' && typeof val === 'function') {
      self[key] = val.bind(self);
    }
  }

  return self;
}

/**
 * Sets up the handler to determine if we should advance the tour
 * @param {string} selector
 * @param {Step} step The step instance
 * @return {Function}
 * @private
 */

function _setupAdvanceOnHandler(selector, step) {
  return event => {
    if (step.isOpen()) {
      const targetIsEl = step.el && event.currentTarget === step.el;
      const targetIsSelector = !isUndefined(selector) && event.currentTarget.matches(selector);

      if (targetIsSelector || targetIsEl) {
        step.tour.next();
      }
    }
  };
}
/**
 * Bind the event handler for advanceOn
 * @param {Step} step The step instance
 */


function bindAdvance(step) {
  // An empty selector matches the step element
  const {
    event,
    selector
  } = step.options.advanceOn || {};

  if (event) {
    const handler = _setupAdvanceOnHandler(selector, step); // TODO: this should also bind/unbind on show/hide


    let el;

    try {
      el = document.querySelector(selector);
    } catch (e) {// TODO
    }

    if (!isUndefined(selector) && !el) {
      return console.error(`No element was found for the selector supplied to advanceOn: ${selector}`);
    } else if (el) {
      el.addEventListener(event, handler);
      step.on('destroy', () => {
        return el.removeEventListener(event, handler);
      });
    } else {
      document.body.addEventListener(event, handler, true);
      step.on('destroy', () => {
        return document.body.removeEventListener(event, handler, true);
      });
    }
  } else {
    return console.error('advanceOn was defined, but no event name was passed.');
  }
}

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name; // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step

  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _getCenteredStylePopperModifier() {
  return [{
    name: 'applyStyles',

    fn({
      state
    }) {
      Object.keys(state.elements).forEach(name => {
        if (name !== 'popper') {
          return;
        }

        const style = {
          position: 'fixed',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        };
        const attributes = state.attributes[name] || {};
        const element = state.elements[name];
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(name => {
          const value = attributes[name];

          if (value === false) {
            element.removeAttribute(name);
          } else {
            element.setAttribute(name, value === true ? '' : value);
          }
        });
      });
    }

  }, {
    name: 'computeStyles',
    options: {
      adaptive: false
    }
  }];
}
/**
 * Generates the array of options for a tooltip that doesn't have a
 * target element in the DOM -- and thus is positioned in the center
 * of the view
 *
 * @param {Step} step The step instance
 * @return {Object} The final Popper options object
 */


function makeCenteredPopper(step) {
  const centeredStylePopperModifier = _getCenteredStylePopperModifier();

  let popperOptions = {
    placement: 'top',
    strategy: 'fixed',
    modifiers: [{
      name: 'focusAfterRender',
      enabled: true,
      phase: 'afterWrite',

      fn() {
        setTimeout(() => {
          if (step.el) {
            step.el.focus();
          }
        }, 300);
      }

    }]
  };
  popperOptions = _extends({}, popperOptions, {
    modifiers: Array.from(new Set([...popperOptions.modifiers, ...centeredStylePopperModifier]))
  });
  return popperOptions;
}

/**
 * Ensure class prefix ends in `-`
 * @param {string} prefix The prefix to prepend to the class names generated by nano-css
 * @return {string} The prefix ending in `-`
 */

function normalizePrefix(prefix) {
  if (!isString(prefix) || prefix === '') {
    return '';
  }

  return prefix.charAt(prefix.length - 1) !== '-' ? `${prefix}-` : prefix;
}
/**
 * Checks if options.attachTo.element is a string, and if so, tries to find the element
 * @param {Step} step The step instance
 * @returns {{element, on}}
 * `element` is a qualified HTML Element
 * `on` is a string position value
 */

function parseAttachTo(step) {
  const options = step.options.attachTo || {};
  const returnOpts = Object.assign({}, options);

  if (isString(options.element)) {
    // Can't override the element in user opts reference because we can't
    // guarantee that the element will exist in the future.
    try {
      returnOpts.element = document.querySelector(options.element);
    } catch (e) {// TODO
    }

    if (!returnOpts.element) {
      console.error(`The element for this Shepherd step was not found ${options.element}`);
    }
  }

  return returnOpts;
}
/**
 * Determines options for the tooltip and initializes
 * `step.tooltip` as a Popper instance.
 * @param {Step} step The step instance
 */

function setupTooltip(step) {
  if (step.tooltip) {
    step.tooltip.destroy();
  }

  const attachToOptions = parseAttachTo(step);
  let target = attachToOptions.element;
  const popperOptions = getPopperOptions(attachToOptions, step);

  if (step.isCentered()) {
    target = document.body;
    const content = step.shepherdElementComponent.getElement();
    content.classList.add('shepherd-centered');
  }

  step.tooltip = createPopper(target, step.el, popperOptions);
  step.target = attachToOptions.element;
  return popperOptions;
}
/**
 * Create a unique id for steps, tours, modals, etc
 * @return {string}
 */

function uuid() {
  let d = Date.now();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
}
/**
 * Gets the `Popper` options from a set of base `attachTo` options
 * @param attachToOptions
 * @param {Step} step The step instance
 * @return {Object}
 * @private
 */

function getPopperOptions(attachToOptions, step) {
  let popperOptions = {
    modifiers: [{
      name: 'preventOverflow',
      options: {
        altAxis: true,
        tether: false
      }
    }, {
      name: 'focusAfterRender',
      enabled: true,
      phase: 'afterWrite',

      fn() {
        setTimeout(() => {
          if (step.el) {
            step.el.focus();
          }
        }, 300);
      }

    }],
    strategy: 'absolute'
  };

  if (step.isCentered()) {
    popperOptions = makeCenteredPopper(step);
  } else {
    popperOptions.placement = attachToOptions.on;
  }

  const defaultStepOptions = step.tour && step.tour.options && step.tour.options.defaultStepOptions;

  if (defaultStepOptions) {
    popperOptions = _mergeModifiers(defaultStepOptions, popperOptions);
  }

  popperOptions = _mergeModifiers(step.options, popperOptions);
  return popperOptions;
}

function _mergeModifiers(stepOptions, popperOptions) {
  if (stepOptions.popperOptions) {
    let mergedPopperOptions = Object.assign({}, popperOptions, stepOptions.popperOptions);

    if (stepOptions.popperOptions.modifiers && stepOptions.popperOptions.modifiers.length > 0) {
      const names = stepOptions.popperOptions.modifiers.map(mod => mod.name);
      const filteredModifiers = popperOptions.modifiers.filter(mod => !names.includes(mod.name));
      mergedPopperOptions.modifiers = Array.from(new Set([...filteredModifiers, ...stepOptions.popperOptions.modifiers]));
    }

    return mergedPopperOptions;
  }

  return popperOptions;
}

function noop() {}

function assign(tar, src) {
  // @ts-ignore
  for (const k in src) tar[k] = src[k];

  return tar;
}

function run(fn) {
  return fn();
}

function blank_object() {
  return Object.create(null);
}

function run_all(fns) {
  fns.forEach(run);
}

function is_function(thing) {
  return typeof thing === 'function';
}

function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}

function is_empty(obj) {
  return Object.keys(obj).length === 0;
}

function append(target, node) {
  target.appendChild(node);
}

function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}

function detach(node) {
  node.parentNode.removeChild(node);
}

function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i]) iterations[i].d(detaching);
  }
}

function element(name) {
  return document.createElement(name);
}

function svg_element(name) {
  return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function text(data) {
  return document.createTextNode(data);
}

function space() {
  return text(' ');
}

function empty() {
  return text('');
}

function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}

function attr(node, attribute, value) {
  if (value == null) node.removeAttribute(attribute);else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}

function set_attributes(node, attributes) {
  // @ts-ignore
  const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);

  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === 'style') {
      node.style.cssText = attributes[key];
    } else if (key === '__value') {
      node.value = node[key] = attributes[key];
    } else if (descriptors[key] && descriptors[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}

function children(element) {
  return Array.from(element.childNodes);
}

function toggle_class(element, name, toggle) {
  element.classList[toggle ? 'add' : 'remove'](name);
}

let current_component;

function set_current_component(component) {
  current_component = component;
}

function get_current_component() {
  if (!current_component) throw new Error('Function called outside component initialization');
  return current_component;
}

function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}

function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;

function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}

function add_render_callback(fn) {
  render_callbacks.push(fn);
}

let flushing = false;
const seen_callbacks = new Set();

function flush() {
  if (flushing) return;
  flushing = true;

  do {
    // first, call beforeUpdate functions
    // and update components
    for (let i = 0; i < dirty_components.length; i += 1) {
      const component = dirty_components[i];
      set_current_component(component);
      update(component.$$);
    }

    set_current_component(null);
    dirty_components.length = 0;

    while (binding_callbacks.length) binding_callbacks.pop()(); // then, once components are updated, call
    // afterUpdate functions. This may cause
    // subsequent updates...


    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];

      if (!seen_callbacks.has(callback)) {
        // ...so guard against infinite loops
        seen_callbacks.add(callback);
        callback();
      }
    }

    render_callbacks.length = 0;
  } while (dirty_components.length);

  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }

  update_scheduled = false;
  flushing = false;
  seen_callbacks.clear();
}

function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}

const outroing = new Set();
let outros;

function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros // parent group

  };
}

function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }

  outros = outros.p;
}

function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}

function transition_out(block, local, detach, callback) {
  if (block && block.o) {
    if (outroing.has(block)) return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);

      if (callback) {
        if (detach) block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}

function get_spread_update(levels, updates) {
  const update = {};
  const to_null_out = {};
  const accounted_for = {
    $$scope: 1
  };
  let i = levels.length;

  while (i--) {
    const o = levels[i];
    const n = updates[i];

    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }

      for (const key in n) {
        if (!accounted_for[key]) {
          update[key] = n[key];
          accounted_for[key] = 1;
        }
      }

      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }

  for (const key in to_null_out) {
    if (!(key in update)) update[key] = undefined;
  }

  return update;
}

function create_component(block) {
  block && block.c();
}

function mount_component(component, target, anchor, customElement) {
  const {
    fragment,
    on_mount,
    on_destroy,
    after_update
  } = component.$$;
  fragment && fragment.m(target, anchor);

  if (!customElement) {
    // onMount happens before the initial afterUpdate
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push(...new_on_destroy);
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
  }

  after_update.forEach(add_render_callback);
}

function destroy_component(component, detaching) {
  const $$ = component.$$;

  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
    // preserve final state?)

    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}

function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }

  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}

function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(parent_component ? parent_component.$$.context : options.context || []),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false
  };
  let ready = false;
  $$.ctx = instance ? instance(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;

    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
      if (ready) make_dirty(component, i);
    }

    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update); // `false` as a special case of no DOM component

  $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

  if (options.target) {
    if (options.hydrate) {
      const nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      $$.fragment && $$.fragment.c();
    }

    if (options.intro) transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    flush();
  }

  set_current_component(parent_component);
}
/**
 * Base class for Svelte components. Used when dev=false.
 */


class SvelteComponent {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }

  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1) callbacks.splice(index, 1);
    };
  }

  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }

}

/* src/js/components/shepherd-button.svelte generated by Svelte v3.37.0 */

function create_fragment$8(ctx) {
  let button;
  let button_aria_label_value;
  let button_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      attr(button, "aria-label", button_aria_label_value =
      /*label*/
      ctx[3] ?
      /*label*/
      ctx[3] : null);
      attr(button, "class", button_class_value = `${
      /*classes*/
      ctx[1] || ""} shepherd-button ${
      /*secondary*/
      ctx[4] ? "shepherd-button-secondary" : ""}`);
      button.disabled =
      /*disabled*/
      ctx[2];
      attr(button, "tabindex", "0");
    },

    m(target, anchor) {
      insert(target, button, anchor);
      button.innerHTML =
      /*text*/
      ctx[5];

      if (!mounted) {
        dispose = listen(button, "click", function () {
          if (is_function(
          /*action*/
          ctx[0]))
            /*action*/
            ctx[0].apply(this, arguments);
        });
        mounted = true;
      }
    },

    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      if (dirty &
      /*text*/
      32) button.innerHTML =
      /*text*/
      ctx[5];

      if (dirty &
      /*label*/
      8 && button_aria_label_value !== (button_aria_label_value =
      /*label*/
      ctx[3] ?
      /*label*/
      ctx[3] : null)) {
        attr(button, "aria-label", button_aria_label_value);
      }

      if (dirty &
      /*classes, secondary*/
      18 && button_class_value !== (button_class_value = `${
      /*classes*/
      ctx[1] || ""} shepherd-button ${
      /*secondary*/
      ctx[4] ? "shepherd-button-secondary" : ""}`)) {
        attr(button, "class", button_class_value);
      }

      if (dirty &
      /*disabled*/
      4) {
        button.disabled =
        /*disabled*/
        ctx[2];
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(button);
      mounted = false;
      dispose();
    }

  };
}

function instance$8($$self, $$props, $$invalidate) {
  let {
    config
  } = $$props,
      {
    step
  } = $$props;
  let action, classes, disabled, label, secondary, text;

  function getDisabled(disabled) {
    if (isFunction(disabled)) {
      return disabled = disabled.call(step);
    }

    return disabled;
  }

  $$self.$$set = $$props => {
    if ("config" in $$props) $$invalidate(6, config = $$props.config);
    if ("step" in $$props) $$invalidate(7, step = $$props.step);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*config, step*/
    192) {
      {
        $$invalidate(0, action = config.action ? config.action.bind(step.tour) : null);
        $$invalidate(1, classes = config.classes);
        $$invalidate(2, disabled = config.disabled ? getDisabled(config.disabled) : false);
        $$invalidate(3, label = config.label);
        $$invalidate(4, secondary = config.secondary);
        $$invalidate(5, text = config.text);
      }
    }
  };

  return [action, classes, disabled, label, secondary, text, config, step];
}

class Shepherd_button extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {
      config: 6,
      step: 7
    });
  }

}

/* src/js/components/shepherd-footer.svelte generated by Svelte v3.37.0 */

function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
} // (24:4) {#if buttons}


function create_if_block$3(ctx) {
  let each_1_anchor;
  let current;
  let each_value =
  /*buttons*/
  ctx[1];
  let each_blocks = [];

  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  const out = i => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });

  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }

      each_1_anchor = empty();
    },

    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }

      insert(target, each_1_anchor, anchor);
      current = true;
    },

    p(ctx, dirty) {
      if (dirty &
      /*buttons, step*/
      3) {
        each_value =
        /*buttons*/
        ctx[1];
        let i;

        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);

          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }

        group_outros();

        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }

        check_outros();
      }
    },

    i(local) {
      if (current) return;

      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }

      current = true;
    },

    o(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }

      current = false;
    },

    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching) detach(each_1_anchor);
    }

  };
} // (25:8) {#each buttons as config}


function create_each_block(ctx) {
  let shepherdbutton;
  let current;
  shepherdbutton = new Shepherd_button({
    props: {
      config:
      /*config*/
      ctx[2],
      step:
      /*step*/
      ctx[0]
    }
  });
  return {
    c() {
      create_component(shepherdbutton.$$.fragment);
    },

    m(target, anchor) {
      mount_component(shepherdbutton, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const shepherdbutton_changes = {};
      if (dirty &
      /*buttons*/
      2) shepherdbutton_changes.config =
      /*config*/
      ctx[2];
      if (dirty &
      /*step*/
      1) shepherdbutton_changes.step =
      /*step*/
      ctx[0];
      shepherdbutton.$set(shepherdbutton_changes);
    },

    i(local) {
      if (current) return;
      transition_in(shepherdbutton.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(shepherdbutton.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(shepherdbutton, detaching);
    }

  };
}

function create_fragment$7(ctx) {
  let footer;
  let current;
  let if_block =
  /*buttons*/
  ctx[1] && create_if_block$3(ctx);
  return {
    c() {
      footer = element("footer");
      if (if_block) if_block.c();
      attr(footer, "class", "shepherd-footer");
    },

    m(target, anchor) {
      insert(target, footer, anchor);
      if (if_block) if_block.m(footer, null);
      current = true;
    },

    p(ctx, [dirty]) {
      if (
      /*buttons*/
      ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*buttons*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$3(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(footer, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },

    o(local) {
      transition_out(if_block);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(footer);
      if (if_block) if_block.d();
    }

  };
}

function instance$7($$self, $$props, $$invalidate) {
  let buttons;
  let {
    step
  } = $$props;

  $$self.$$set = $$props => {
    if ("step" in $$props) $$invalidate(0, step = $$props.step);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*step*/
    1) {
      $$invalidate(1, buttons = step.options.buttons);
    }
  };

  return [step, buttons];
}

class Shepherd_footer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      step: 0
    });
  }

}

/* src/js/components/shepherd-cancel-icon.svelte generated by Svelte v3.37.0 */

function create_fragment$6(ctx) {
  let button;
  let span;
  let button_aria_label_value;
  let mounted;
  let dispose;
  return {
    c() {
      button = element("button");
      span = element("span");
      span.textContent = "×";
      attr(span, "aria-hidden", "true");
      attr(button, "aria-label", button_aria_label_value =
      /*cancelIcon*/
      ctx[0].label ?
      /*cancelIcon*/
      ctx[0].label : "Close Tour");
      attr(button, "class", "shepherd-cancel-icon");
      attr(button, "type", "button");
    },

    m(target, anchor) {
      insert(target, button, anchor);
      append(button, span);

      if (!mounted) {
        dispose = listen(button, "click",
        /*handleCancelClick*/
        ctx[1]);
        mounted = true;
      }
    },

    p(ctx, [dirty]) {
      if (dirty &
      /*cancelIcon*/
      1 && button_aria_label_value !== (button_aria_label_value =
      /*cancelIcon*/
      ctx[0].label ?
      /*cancelIcon*/
      ctx[0].label : "Close Tour")) {
        attr(button, "aria-label", button_aria_label_value);
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(button);
      mounted = false;
      dispose();
    }

  };
}

function instance$6($$self, $$props, $$invalidate) {
  let {
    cancelIcon
  } = $$props,
      {
    step
  } = $$props;
  /**
  * Add a click listener to the cancel link that cancels the tour
  */

  const handleCancelClick = e => {
    e.preventDefault();
    step.cancel();
  };

  $$self.$$set = $$props => {
    if ("cancelIcon" in $$props) $$invalidate(0, cancelIcon = $$props.cancelIcon);
    if ("step" in $$props) $$invalidate(2, step = $$props.step);
  };

  return [cancelIcon, handleCancelClick, step];
}

class Shepherd_cancel_icon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
      cancelIcon: 0,
      step: 2
    });
  }

}

/* src/js/components/shepherd-title.svelte generated by Svelte v3.37.0 */

function create_fragment$5(ctx) {
  let h3;
  return {
    c() {
      h3 = element("h3");
      attr(h3, "id",
      /*labelId*/
      ctx[1]);
      attr(h3, "class", "shepherd-title");
    },

    m(target, anchor) {
      insert(target, h3, anchor);
      /*h3_binding*/

      ctx[3](h3);
    },

    p(ctx, [dirty]) {
      if (dirty &
      /*labelId*/
      2) {
        attr(h3, "id",
        /*labelId*/
        ctx[1]);
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(h3);
      /*h3_binding*/

      ctx[3](null);
    }

  };
}

function instance$5($$self, $$props, $$invalidate) {
  let {
    labelId
  } = $$props,
      {
    element
  } = $$props,
      {
    title
  } = $$props;
  afterUpdate(() => {
    if (isFunction(title)) {
      $$invalidate(2, title = title());
    }

    $$invalidate(0, element.innerHTML = title, element);
  });

  function h3_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element = $$value;
      $$invalidate(0, element);
    });
  }

  $$self.$$set = $$props => {
    if ("labelId" in $$props) $$invalidate(1, labelId = $$props.labelId);
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("title" in $$props) $$invalidate(2, title = $$props.title);
  };

  return [element, labelId, title, h3_binding];
}

class Shepherd_title extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      labelId: 1,
      element: 0,
      title: 2
    });
  }

}

/* src/js/components/shepherd-header.svelte generated by Svelte v3.37.0 */

function create_if_block_1$1(ctx) {
  let shepherdtitle;
  let current;
  shepherdtitle = new Shepherd_title({
    props: {
      labelId:
      /*labelId*/
      ctx[0],
      title:
      /*title*/
      ctx[2]
    }
  });
  return {
    c() {
      create_component(shepherdtitle.$$.fragment);
    },

    m(target, anchor) {
      mount_component(shepherdtitle, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const shepherdtitle_changes = {};
      if (dirty &
      /*labelId*/
      1) shepherdtitle_changes.labelId =
      /*labelId*/
      ctx[0];
      if (dirty &
      /*title*/
      4) shepherdtitle_changes.title =
      /*title*/
      ctx[2];
      shepherdtitle.$set(shepherdtitle_changes);
    },

    i(local) {
      if (current) return;
      transition_in(shepherdtitle.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(shepherdtitle.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(shepherdtitle, detaching);
    }

  };
} // (39:4) {#if cancelIcon && cancelIcon.enabled}


function create_if_block$2(ctx) {
  let shepherdcancelicon;
  let current;
  shepherdcancelicon = new Shepherd_cancel_icon({
    props: {
      cancelIcon:
      /*cancelIcon*/
      ctx[3],
      step:
      /*step*/
      ctx[1]
    }
  });
  return {
    c() {
      create_component(shepherdcancelicon.$$.fragment);
    },

    m(target, anchor) {
      mount_component(shepherdcancelicon, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const shepherdcancelicon_changes = {};
      if (dirty &
      /*cancelIcon*/
      8) shepherdcancelicon_changes.cancelIcon =
      /*cancelIcon*/
      ctx[3];
      if (dirty &
      /*step*/
      2) shepherdcancelicon_changes.step =
      /*step*/
      ctx[1];
      shepherdcancelicon.$set(shepherdcancelicon_changes);
    },

    i(local) {
      if (current) return;
      transition_in(shepherdcancelicon.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(shepherdcancelicon.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(shepherdcancelicon, detaching);
    }

  };
}

function create_fragment$4(ctx) {
  let header;
  let t;
  let current;
  let if_block0 =
  /*title*/
  ctx[2] && create_if_block_1$1(ctx);
  let if_block1 =
  /*cancelIcon*/
  ctx[3] &&
  /*cancelIcon*/
  ctx[3].enabled && create_if_block$2(ctx);
  return {
    c() {
      header = element("header");
      if (if_block0) if_block0.c();
      t = space();
      if (if_block1) if_block1.c();
      attr(header, "class", "shepherd-header");
    },

    m(target, anchor) {
      insert(target, header, anchor);
      if (if_block0) if_block0.m(header, null);
      append(header, t);
      if (if_block1) if_block1.m(header, null);
      current = true;
    },

    p(ctx, [dirty]) {
      if (
      /*title*/
      ctx[2]) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*title*/
          4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_1$1(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(header, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }

      if (
      /*cancelIcon*/
      ctx[3] &&
      /*cancelIcon*/
      ctx[3].enabled) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*cancelIcon*/
          8) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block$2(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(header, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },

    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(header);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
    }

  };
}

function instance$4($$self, $$props, $$invalidate) {
  let {
    labelId
  } = $$props,
      {
    step
  } = $$props;
  let title, cancelIcon;

  $$self.$$set = $$props => {
    if ("labelId" in $$props) $$invalidate(0, labelId = $$props.labelId);
    if ("step" in $$props) $$invalidate(1, step = $$props.step);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*step*/
    2) {
      {
        $$invalidate(2, title = step.options.title);
        $$invalidate(3, cancelIcon = step.options.cancelIcon);
      }
    }
  };

  return [labelId, step, title, cancelIcon];
}

class Shepherd_header extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      labelId: 0,
      step: 1
    });
  }

}

/* src/js/components/shepherd-text.svelte generated by Svelte v3.37.0 */

function create_fragment$3(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      attr(div, "class", "shepherd-text");
      attr(div, "id",
      /*descriptionId*/
      ctx[1]);
    },

    m(target, anchor) {
      insert(target, div, anchor);
      /*div_binding*/

      ctx[3](div);
    },

    p(ctx, [dirty]) {
      if (dirty &
      /*descriptionId*/
      2) {
        attr(div, "id",
        /*descriptionId*/
        ctx[1]);
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(div);
      /*div_binding*/

      ctx[3](null);
    }

  };
}

function instance$3($$self, $$props, $$invalidate) {
  let {
    descriptionId
  } = $$props,
      {
    element
  } = $$props,
      {
    step
  } = $$props;
  afterUpdate(() => {
    let {
      text
    } = step.options;

    if (isFunction(text)) {
      text = text.call(step);
    }

    if (isHTMLElement$1(text)) {
      element.appendChild(text);
    } else {
      $$invalidate(0, element.innerHTML = text, element);
    }
  });

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element = $$value;
      $$invalidate(0, element);
    });
  }

  $$self.$$set = $$props => {
    if ("descriptionId" in $$props) $$invalidate(1, descriptionId = $$props.descriptionId);
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("step" in $$props) $$invalidate(2, step = $$props.step);
  };

  return [element, descriptionId, step, div_binding];
}

class Shepherd_text extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      descriptionId: 1,
      element: 0,
      step: 2
    });
  }

}

/* src/js/components/shepherd-content.svelte generated by Svelte v3.37.0 */

function create_if_block_2(ctx) {
  let shepherdheader;
  let current;
  shepherdheader = new Shepherd_header({
    props: {
      labelId:
      /*labelId*/
      ctx[1],
      step:
      /*step*/
      ctx[2]
    }
  });
  return {
    c() {
      create_component(shepherdheader.$$.fragment);
    },

    m(target, anchor) {
      mount_component(shepherdheader, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const shepherdheader_changes = {};
      if (dirty &
      /*labelId*/
      2) shepherdheader_changes.labelId =
      /*labelId*/
      ctx[1];
      if (dirty &
      /*step*/
      4) shepherdheader_changes.step =
      /*step*/
      ctx[2];
      shepherdheader.$set(shepherdheader_changes);
    },

    i(local) {
      if (current) return;
      transition_in(shepherdheader.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(shepherdheader.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(shepherdheader, detaching);
    }

  };
} // (28:2) {#if !isUndefined(step.options.text)}


function create_if_block_1(ctx) {
  let shepherdtext;
  let current;
  shepherdtext = new Shepherd_text({
    props: {
      descriptionId:
      /*descriptionId*/
      ctx[0],
      step:
      /*step*/
      ctx[2]
    }
  });
  return {
    c() {
      create_component(shepherdtext.$$.fragment);
    },

    m(target, anchor) {
      mount_component(shepherdtext, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const shepherdtext_changes = {};
      if (dirty &
      /*descriptionId*/
      1) shepherdtext_changes.descriptionId =
      /*descriptionId*/
      ctx[0];
      if (dirty &
      /*step*/
      4) shepherdtext_changes.step =
      /*step*/
      ctx[2];
      shepherdtext.$set(shepherdtext_changes);
    },

    i(local) {
      if (current) return;
      transition_in(shepherdtext.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(shepherdtext.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(shepherdtext, detaching);
    }

  };
} // (35:2) {#if Array.isArray(step.options.buttons) && step.options.buttons.length}


function create_if_block$1(ctx) {
  let shepherdfooter;
  let current;
  shepherdfooter = new Shepherd_footer({
    props: {
      step:
      /*step*/
      ctx[2]
    }
  });
  return {
    c() {
      create_component(shepherdfooter.$$.fragment);
    },

    m(target, anchor) {
      mount_component(shepherdfooter, target, anchor);
      current = true;
    },

    p(ctx, dirty) {
      const shepherdfooter_changes = {};
      if (dirty &
      /*step*/
      4) shepherdfooter_changes.step =
      /*step*/
      ctx[2];
      shepherdfooter.$set(shepherdfooter_changes);
    },

    i(local) {
      if (current) return;
      transition_in(shepherdfooter.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(shepherdfooter.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      destroy_component(shepherdfooter, detaching);
    }

  };
}

function create_fragment$2(ctx) {
  let div;
  let show_if_2 = !isUndefined(
  /*step*/
  ctx[2].options.title) ||
  /*step*/
  ctx[2].options.cancelIcon &&
  /*step*/
  ctx[2].options.cancelIcon.enabled;
  let t0;
  let show_if_1 = !isUndefined(
  /*step*/
  ctx[2].options.text);
  let t1;
  let show_if = Array.isArray(
  /*step*/
  ctx[2].options.buttons) &&
  /*step*/
  ctx[2].options.buttons.length;
  let current;
  let if_block0 = show_if_2 && create_if_block_2(ctx);
  let if_block1 = show_if_1 && create_if_block_1(ctx);
  let if_block2 = show_if && create_if_block$1(ctx);
  return {
    c() {
      div = element("div");
      if (if_block0) if_block0.c();
      t0 = space();
      if (if_block1) if_block1.c();
      t1 = space();
      if (if_block2) if_block2.c();
      attr(div, "class", "shepherd-content");
    },

    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block0) if_block0.m(div, null);
      append(div, t0);
      if (if_block1) if_block1.m(div, null);
      append(div, t1);
      if (if_block2) if_block2.m(div, null);
      current = true;
    },

    p(ctx, [dirty]) {
      if (dirty &
      /*step*/
      4) show_if_2 = !isUndefined(
      /*step*/
      ctx[2].options.title) ||
      /*step*/
      ctx[2].options.cancelIcon &&
      /*step*/
      ctx[2].options.cancelIcon.enabled;

      if (show_if_2) {
        if (if_block0) {
          if_block0.p(ctx, dirty);

          if (dirty &
          /*step*/
          4) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }

      if (dirty &
      /*step*/
      4) show_if_1 = !isUndefined(
      /*step*/
      ctx[2].options.text);

      if (show_if_1) {
        if (if_block1) {
          if_block1.p(ctx, dirty);

          if (dirty &
          /*step*/
          4) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1(ctx);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, t1);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }

      if (dirty &
      /*step*/
      4) show_if = Array.isArray(
      /*step*/
      ctx[2].options.buttons) &&
      /*step*/
      ctx[2].options.buttons.length;

      if (show_if) {
        if (if_block2) {
          if_block2.p(ctx, dirty);

          if (dirty &
          /*step*/
          4) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$1(ctx);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
    },

    i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      transition_in(if_block2);
      current = true;
    },

    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      transition_out(if_block2);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(div);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
    }

  };
}

function instance$2($$self, $$props, $$invalidate) {
  let {
    descriptionId
  } = $$props,
      {
    labelId
  } = $$props,
      {
    step
  } = $$props;

  $$self.$$set = $$props => {
    if ("descriptionId" in $$props) $$invalidate(0, descriptionId = $$props.descriptionId);
    if ("labelId" in $$props) $$invalidate(1, labelId = $$props.labelId);
    if ("step" in $$props) $$invalidate(2, step = $$props.step);
  };

  return [descriptionId, labelId, step];
}

class Shepherd_content extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      descriptionId: 0,
      labelId: 1,
      step: 2
    });
  }

}

/* src/js/components/shepherd-element.svelte generated by Svelte v3.37.0 */

function create_if_block(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      attr(div, "class", "shepherd-arrow");
      attr(div, "data-popper-arrow", "");
    },

    m(target, anchor) {
      insert(target, div, anchor);
    },

    d(detaching) {
      if (detaching) detach(div);
    }

  };
}

function create_fragment$1(ctx) {
  let div;
  let t;
  let shepherdcontent;
  let div_aria_describedby_value;
  let div_aria_labelledby_value;
  let current;
  let mounted;
  let dispose;
  let if_block =
  /*step*/
  ctx[4].options.arrow &&
  /*step*/
  ctx[4].options.attachTo &&
  /*step*/
  ctx[4].options.attachTo.element &&
  /*step*/
  ctx[4].options.attachTo.on && create_if_block();
  shepherdcontent = new Shepherd_content({
    props: {
      descriptionId:
      /*descriptionId*/
      ctx[2],
      labelId:
      /*labelId*/
      ctx[3],
      step:
      /*step*/
      ctx[4]
    }
  });
  let div_levels = [{
    "aria-describedby": div_aria_describedby_value = !isUndefined(
    /*step*/
    ctx[4].options.text) ?
    /*descriptionId*/
    ctx[2] : null
  }, {
    "aria-labelledby": div_aria_labelledby_value =
    /*step*/
    ctx[4].options.title ?
    /*labelId*/
    ctx[3] : null
  },
  /*dataStepId*/
  ctx[1], {
    role: "dialog"
  }, {
    tabindex: "0"
  }];
  let div_data = {};

  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }

  return {
    c() {
      div = element("div");
      if (if_block) if_block.c();
      t = space();
      create_component(shepherdcontent.$$.fragment);
      set_attributes(div, div_data);
      toggle_class(div, "shepherd-has-cancel-icon",
      /*hasCancelIcon*/
      ctx[5]);
      toggle_class(div, "shepherd-has-title",
      /*hasTitle*/
      ctx[6]);
      toggle_class(div, "shepherd-element", true);
    },

    m(target, anchor) {
      insert(target, div, anchor);
      if (if_block) if_block.m(div, null);
      append(div, t);
      mount_component(shepherdcontent, div, null);
      /*div_binding*/

      ctx[13](div);
      current = true;

      if (!mounted) {
        dispose = listen(div, "keydown",
        /*handleKeyDown*/
        ctx[7]);
        mounted = true;
      }
    },

    p(ctx, [dirty]) {
      if (
      /*step*/
      ctx[4].options.arrow &&
      /*step*/
      ctx[4].options.attachTo &&
      /*step*/
      ctx[4].options.attachTo.element &&
      /*step*/
      ctx[4].options.attachTo.on) {
        if (if_block) ; else {
          if_block = create_if_block();
          if_block.c();
          if_block.m(div, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      const shepherdcontent_changes = {};
      if (dirty &
      /*descriptionId*/
      4) shepherdcontent_changes.descriptionId =
      /*descriptionId*/
      ctx[2];
      if (dirty &
      /*labelId*/
      8) shepherdcontent_changes.labelId =
      /*labelId*/
      ctx[3];
      if (dirty &
      /*step*/
      16) shepherdcontent_changes.step =
      /*step*/
      ctx[4];
      shepherdcontent.$set(shepherdcontent_changes);
      set_attributes(div, div_data = get_spread_update(div_levels, [(!current || dirty &
      /*step, descriptionId*/
      20 && div_aria_describedby_value !== (div_aria_describedby_value = !isUndefined(
      /*step*/
      ctx[4].options.text) ?
      /*descriptionId*/
      ctx[2] : null)) && {
        "aria-describedby": div_aria_describedby_value
      }, (!current || dirty &
      /*step, labelId*/
      24 && div_aria_labelledby_value !== (div_aria_labelledby_value =
      /*step*/
      ctx[4].options.title ?
      /*labelId*/
      ctx[3] : null)) && {
        "aria-labelledby": div_aria_labelledby_value
      }, dirty &
      /*dataStepId*/
      2 &&
      /*dataStepId*/
      ctx[1], {
        role: "dialog"
      }, {
        tabindex: "0"
      }]));
      toggle_class(div, "shepherd-has-cancel-icon",
      /*hasCancelIcon*/
      ctx[5]);
      toggle_class(div, "shepherd-has-title",
      /*hasTitle*/
      ctx[6]);
      toggle_class(div, "shepherd-element", true);
    },

    i(local) {
      if (current) return;
      transition_in(shepherdcontent.$$.fragment, local);
      current = true;
    },

    o(local) {
      transition_out(shepherdcontent.$$.fragment, local);
      current = false;
    },

    d(detaching) {
      if (detaching) detach(div);
      if (if_block) if_block.d();
      destroy_component(shepherdcontent);
      /*div_binding*/

      ctx[13](null);
      mounted = false;
      dispose();
    }

  };
}

const KEY_TAB = 9;
const KEY_ESC = 27;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

function getClassesArray(classes) {
  return classes.split(" ").filter(className => !!className.length);
}

function instance$1($$self, $$props, $$invalidate) {
  let {
    classPrefix
  } = $$props,
      {
    element
  } = $$props,
      {
    descriptionId
  } = $$props,
      {
    firstFocusableElement
  } = $$props,
      {
    focusableElements
  } = $$props,
      {
    labelId
  } = $$props,
      {
    lastFocusableElement
  } = $$props,
      {
    step
  } = $$props,
      {
    dataStepId
  } = $$props;
  let hasCancelIcon, hasTitle, classes;

  const getElement = () => element;

  onMount(() => {
    // Get all elements that are focusable
    $$invalidate(1, dataStepId = {
      [`data-${classPrefix}shepherd-step-id`]: step.id
    });
    $$invalidate(9, focusableElements = element.querySelectorAll("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex=\"0\"]"));
    $$invalidate(8, firstFocusableElement = focusableElements[0]);
    $$invalidate(10, lastFocusableElement = focusableElements[focusableElements.length - 1]);
  });
  afterUpdate(() => {
    if (classes !== step.options.classes) {
      updateDynamicClasses();
    }
  });

  function updateDynamicClasses() {
    removeClasses(classes);
    classes = step.options.classes;
    addClasses(classes);
  }

  function removeClasses(classes) {
    if (isString(classes)) {
      const oldClasses = getClassesArray(classes);

      if (oldClasses.length) {
        element.classList.remove(...oldClasses);
      }
    }
  }

  function addClasses(classes) {
    if (isString(classes)) {
      const newClasses = getClassesArray(classes);

      if (newClasses.length) {
        element.classList.add(...newClasses);
      }
    }
  }
  /**
  * Setup keydown events to allow closing the modal with ESC
  *
  * Borrowed from this great post! https://bitsofco.de/accessible-modal-dialog/
  *
  * @private
  */


  const handleKeyDown = e => {
    const {
      tour
    } = step;

    switch (e.keyCode) {
      case KEY_TAB:
        if (focusableElements.length === 0) {
          e.preventDefault();
          break;
        } // Backward tab


        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement || document.activeElement.classList.contains("shepherd-element")) {
            e.preventDefault();
            lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        }

        break;

      case KEY_ESC:
        if (tour.options.exitOnEsc) {
          step.cancel();
        }

        break;

      case LEFT_ARROW:
        if (tour.options.keyboardNavigation) {
          tour.back();
        }

        break;

      case RIGHT_ARROW:
        if (tour.options.keyboardNavigation) {
          tour.next();
        }

        break;
    }
  };

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element = $$value;
      $$invalidate(0, element);
    });
  }

  $$self.$$set = $$props => {
    if ("classPrefix" in $$props) $$invalidate(11, classPrefix = $$props.classPrefix);
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("descriptionId" in $$props) $$invalidate(2, descriptionId = $$props.descriptionId);
    if ("firstFocusableElement" in $$props) $$invalidate(8, firstFocusableElement = $$props.firstFocusableElement);
    if ("focusableElements" in $$props) $$invalidate(9, focusableElements = $$props.focusableElements);
    if ("labelId" in $$props) $$invalidate(3, labelId = $$props.labelId);
    if ("lastFocusableElement" in $$props) $$invalidate(10, lastFocusableElement = $$props.lastFocusableElement);
    if ("step" in $$props) $$invalidate(4, step = $$props.step);
    if ("dataStepId" in $$props) $$invalidate(1, dataStepId = $$props.dataStepId);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*step*/
    16) {
      {
        $$invalidate(5, hasCancelIcon = step.options && step.options.cancelIcon && step.options.cancelIcon.enabled);
        $$invalidate(6, hasTitle = step.options && step.options.title);
      }
    }
  };

  return [element, dataStepId, descriptionId, labelId, step, hasCancelIcon, hasTitle, handleKeyDown, firstFocusableElement, focusableElements, lastFocusableElement, classPrefix, getElement, div_binding];
}

class Shepherd_element extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      classPrefix: 11,
      element: 0,
      descriptionId: 2,
      firstFocusableElement: 8,
      focusableElements: 9,
      labelId: 3,
      lastFocusableElement: 10,
      step: 4,
      dataStepId: 1,
      getElement: 12
    });
  }

  get getElement() {
    return this.$$.ctx[12];
  }

}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var smoothscroll = createCommonjsModule(function (module, exports) {
  /* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
  (function () {

    function polyfill() {
      // aliases
      var w = window;
      var d = document; // return if scroll behavior is supported and polyfill is not forced

      if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
        return;
      } // globals


      var Element = w.HTMLElement || w.Element;
      var SCROLL_TIME = 468; // object gathering original scroll methods

      var original = {
        scroll: w.scroll || w.scrollTo,
        scrollBy: w.scrollBy,
        elementScroll: Element.prototype.scroll || scrollElement,
        scrollIntoView: Element.prototype.scrollIntoView
      }; // define timing method

      var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
      /**
       * indicates if a the current browser is made by Microsoft
       * @method isMicrosoftBrowser
       * @param {String} userAgent
       * @returns {Boolean}
       */

      function isMicrosoftBrowser(userAgent) {
        var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
        return new RegExp(userAgentPatterns.join('|')).test(userAgent);
      }
      /*
       * IE has rounding bug rounding down clientHeight and clientWidth and
       * rounding up scrollHeight and scrollWidth causing false positives
       * on hasScrollableSpace
       */


      var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
      /**
       * changes scroll position inside an element
       * @method scrollElement
       * @param {Number} x
       * @param {Number} y
       * @returns {undefined}
       */

      function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
      }
      /**
       * returns result of applying ease math function to a number
       * @method ease
       * @param {Number} k
       * @returns {Number}
       */


      function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }
      /**
       * indicates if a smooth behavior should be applied
       * @method shouldBailOut
       * @param {Number|Object} firstArg
       * @returns {Boolean}
       */


      function shouldBailOut(firstArg) {
        if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
          // first argument is not an object/null
          // or behavior is auto, instant or undefined
          return true;
        }

        if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
          // first argument is an object and behavior is smooth
          return false;
        } // throw error when behavior is not supported


        throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
      }
      /**
       * indicates if an element has scrollable space in the provided axis
       * @method hasScrollableSpace
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function hasScrollableSpace(el, axis) {
        if (axis === 'Y') {
          return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
        }

        if (axis === 'X') {
          return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
      }
      /**
       * indicates if an element has a scrollable overflow property in the axis
       * @method canOverflow
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function canOverflow(el, axis) {
        var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
        return overflowValue === 'auto' || overflowValue === 'scroll';
      }
      /**
       * indicates if an element can be scrolled in either axis
       * @method isScrollable
       * @param {Node} el
       * @param {String} axis
       * @returns {Boolean}
       */


      function isScrollable(el) {
        var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
        var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
        return isScrollableY || isScrollableX;
      }
      /**
       * finds scrollable parent of an element
       * @method findScrollableParent
       * @param {Node} el
       * @returns {Node} el
       */


      function findScrollableParent(el) {
        while (el !== d.body && isScrollable(el) === false) {
          el = el.parentNode || el.host;
        }

        return el;
      }
      /**
       * self invoked function that, given a context, steps through scrolling
       * @method step
       * @param {Object} context
       * @returns {undefined}
       */


      function step(context) {
        var time = now();
        var value;
        var currentX;
        var currentY;
        var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

        elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

        value = ease(elapsed);
        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;
        context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

        if (currentX !== context.x || currentY !== context.y) {
          w.requestAnimationFrame(step.bind(w, context));
        }
      }
      /**
       * scrolls window or element with a smooth behavior
       * @method smoothScroll
       * @param {Object|Node} el
       * @param {Number} x
       * @param {Number} y
       * @returns {undefined}
       */


      function smoothScroll(el, x, y) {
        var scrollable;
        var startX;
        var startY;
        var method;
        var startTime = now(); // define scroll context

        if (el === d.body) {
          scrollable = w;
          startX = w.scrollX || w.pageXOffset;
          startY = w.scrollY || w.pageYOffset;
          method = original.scroll;
        } else {
          scrollable = el;
          startX = el.scrollLeft;
          startY = el.scrollTop;
          method = scrollElement;
        } // scroll looping over a frame


        step({
          scrollable: scrollable,
          method: method,
          startTime: startTime,
          startX: startX,
          startY: startY,
          x: x,
          y: y
        });
      } // ORIGINAL METHODS OVERRIDES
      // w.scroll and w.scrollTo


      w.scroll = w.scrollTo = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
      }; // w.scrollBy


      w.scrollBy = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0])) {
          original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
      }; // Element.prototype.scroll and Element.prototype.scrollTo


      Element.prototype.scroll = Element.prototype.scrollTo = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          // if one number is passed, throw error to match Firefox implementation
          if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
            throw new SyntaxError('Value could not be converted');
          }

          original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
          return;
        }

        var left = arguments[0].left;
        var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

        smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
      }; // Element.prototype.scrollBy


      Element.prototype.scrollBy = function () {
        // avoid action when no arguments are passed
        if (arguments[0] === undefined) {
          return;
        } // avoid smooth behavior if not required


        if (shouldBailOut(arguments[0]) === true) {
          original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
          return;
        }

        this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        });
      }; // Element.prototype.scrollIntoView


      Element.prototype.scrollIntoView = function () {
        // avoid smooth behavior if not required
        if (shouldBailOut(arguments[0]) === true) {
          original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
          return;
        } // LET THE SMOOTHNESS BEGIN!


        var scrollableParent = findScrollableParent(this);
        var parentRects = scrollableParent.getBoundingClientRect();
        var clientRects = this.getBoundingClientRect();

        if (scrollableParent !== d.body) {
          // reveal element inside parent
          smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

          if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
            w.scrollBy({
              left: parentRects.left,
              top: parentRects.top,
              behavior: 'smooth'
            });
          }
        } else {
          // reveal element in viewport
          w.scrollBy({
            left: clientRects.left,
            top: clientRects.top,
            behavior: 'smooth'
          });
        }
      };
    }

    {
      // commonjs
      module.exports = {
        polyfill: polyfill
      };
    }
  })();
});
smoothscroll.polyfill;

smoothscroll.polyfill();
/**
 * A class representing steps to be added to a tour.
 * @extends {Evented}
 */

class Step extends Evented {
  /**
   * Create a step
   * @param {Tour} tour The tour for the step
   * @param {object} options The options for the step
   * @param {boolean} options.arrow Whether to display the arrow for the tooltip or not. Defaults to `true`.
   * @param {object} options.attachTo The element the step should be attached to on the page.
   * An object with properties `element` and `on`.
   *
   * ```js
   * const step = new Step(tour, {
   *   attachTo: { element: '.some .selector-path', on: 'left' },
   *   ...moreOptions
   * });
   * ```
   *
   * If you don’t specify an attachTo the element will appear in the middle of the screen.
   * If you omit the `on` portion of `attachTo`, the element will still be highlighted, but the tooltip will appear
   * in the middle of the screen, without an arrow pointing to the target.
   * @param {HTMLElement|string} options.attachTo.element An element selector string or a DOM element.
   * @param {string} options.attachTo.on The optional direction to place the Popper tooltip relative to the element.
   *   - Possible string values: 'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'
   * @param {Object} options.advanceOn An action on the page which should advance shepherd to the next step.
   * It should be an object with a string `selector` and an `event` name
   * ```js
   * const step = new Step(tour, {
   *   advanceOn: { selector: '.some .selector-path', event: 'click' },
   *   ...moreOptions
   * });
   * ```
   * `event` doesn’t have to be an event inside the tour, it can be any event fired on any element on the page.
   * You can also always manually advance the Tour by calling `myTour.next()`.
   * @param {function} options.beforeShowPromise A function that returns a promise.
   * When the promise resolves, the rest of the `show` code for the step will execute.
   * @param {Object[]} options.buttons An array of buttons to add to the step. These will be rendered in a
   * footer below the main body text.
   * @param {function} options.buttons.button.action A function executed when the button is clicked on.
   * It is automatically bound to the `tour` the step is associated with, so things like `this.next` will
   * work inside the action.
   * You can use action to skip steps or navigate to specific steps, with something like:
   * ```js
   * action() {
   *   return this.show('some_step_name');
   * }
   * ```
   * @param {string} options.buttons.button.classes Extra classes to apply to the `<a>`
   * @param {boolean} options.buttons.button.disabled Should the button be disabled?
   * @param {string} options.buttons.button.label The aria-label text of the button
   * @param {boolean} options.buttons.button.secondary If true, a shepherd-button-secondary class is applied to the button
   * @param {string} options.buttons.button.text The HTML text of the button
   * @param {boolean} options.canClickTarget A boolean, that when set to false, will set `pointer-events: none` on the target
   * @param {object} options.cancelIcon Options for the cancel icon
   * @param {boolean} options.cancelIcon.enabled Should a cancel “✕” be shown in the header of the step?
   * @param {string} options.cancelIcon.label The label to add for `aria-label`
   * @param {string} options.classes A string of extra classes to add to the step's content element.
   * @param {string} options.highlightClass An extra class to apply to the `attachTo` element when it is
   * highlighted (that is, when its step is active). You can then target that selector in your CSS.
   * @param {string} options.id The string to use as the `id` for the step.
   * @param {number} options.modalOverlayOpeningPadding An amount of padding to add around the modal overlay opening
   * @param {number} options.modalOverlayOpeningRadius An amount of border radius to add around the modal overlay opening
   * @param {object} options.popperOptions Extra options to pass to Popper
   * @param {boolean|Object} options.scrollTo Should the element be scrolled to when this step is shown? If true, uses the default `scrollIntoView`,
   * if an object, passes that object as the params to `scrollIntoView` i.e. `{behavior: 'smooth', block: 'center'}`
   * @param {function} options.scrollToHandler A function that lets you override the default scrollTo behavior and
   * define a custom action to do the scrolling, and possibly other logic.
   * @param {function} options.showOn A function that, when it returns `true`, will show the step.
   * If it returns false, the step will be skipped.
   * @param {string} options.text The text in the body of the step. It can be one of three types:
   * ```
   * - HTML string
   * - `HTMLElement` object
   * - `Function` to be executed when the step is built. It must return one the two options above.
   * ```
   * @param {string} options.title The step's title. It becomes an `h3` at the top of the step. It can be one of two types:
   * ```
   * - HTML string
   * - `Function` to be executed when the step is built. It must return HTML string.
   * ```
   * @param {object} options.when You can define `show`, `hide`, etc events inside `when`. For example:
   * ```js
   * when: {
   *   show: function() {
   *     window.scrollTo(0, 0);
   *   }
   * }
   * ```
   * @return {Step} The newly created Step instance
   */
  constructor(tour, options = {}) {
    super(tour, options);
    this.tour = tour;
    this.classPrefix = this.tour.options ? normalizePrefix(this.tour.options.classPrefix) : '';
    this.styles = tour.styles;
    autoBind(this);

    this._setOptions(options);

    return this;
  }
  /**
   * Cancel the tour
   * Triggers the `cancel` event
   */


  cancel() {
    this.tour.cancel();
    this.trigger('cancel');
  }
  /**
   * Complete the tour
   * Triggers the `complete` event
   */


  complete() {
    this.tour.complete();
    this.trigger('complete');
  }
  /**
   * Remove the step, delete the step's element, and destroy the Popper instance for the step.
   * Triggers `destroy` event
   */


  destroy() {
    if (this.tooltip) {
      this.tooltip.destroy();
      this.tooltip = null;
    }

    if (isHTMLElement$1(this.el) && this.el.parentNode) {
      this.el.parentNode.removeChild(this.el);
      this.el = null;
    }

    this._updateStepTargetOnHide();

    this.trigger('destroy');
  }
  /**
   * Returns the tour for the step
   * @return {Tour} The tour instance
   */


  getTour() {
    return this.tour;
  }
  /**
   * Hide the step
   */


  hide() {
    this.tour.modal.hide();
    this.trigger('before-hide');

    if (this.el) {
      this.el.hidden = true;
    }

    this._updateStepTargetOnHide();

    this.trigger('hide');
  }
  /**
   * Checks if the step should be centered or not
   * @return {boolean} True if the step is centered
   */


  isCentered() {
    const attachToOptions = parseAttachTo(this);
    return !attachToOptions.element || !attachToOptions.on;
  }
  /**
   * Check if the step is open and visible
   * @return {boolean} True if the step is open and visible
   */


  isOpen() {
    return Boolean(this.el && !this.el.hidden);
  }
  /**
   * Wraps `_show` and ensures `beforeShowPromise` resolves before calling show
   * @return {*|Promise}
   */


  show() {
    if (isFunction(this.options.beforeShowPromise)) {
      const beforeShowPromise = this.options.beforeShowPromise();

      if (!isUndefined(beforeShowPromise)) {
        return beforeShowPromise.then(() => this._show());
      }
    }

    this._show();
  }
  /**
   * Updates the options of the step.
   *
   * @param {Object} options The options for the step
   */


  updateStepOptions(options) {
    Object.assign(this.options, options);

    if (this.shepherdElementComponent) {
      this.shepherdElementComponent.$set({
        step: this
      });
    }
  }
  /**
   * Returns the element for the step
   * @return {HTMLElement|null|undefined} The element instance. undefined if it has never been shown, null if it has been destroyed
   */


  getElement() {
    return this.el;
  }
  /**
   * Returns the target for the step
   * @return {HTMLElement|null|undefined} The element instance. undefined if it has never been shown, null if query string has not been found
   */


  getTarget() {
    return this.target;
  }
  /**
   * Creates Shepherd element for step based on options
   *
   * @return {Element} The DOM element for the step tooltip
   * @private
   */


  _createTooltipContent() {
    const descriptionId = `${this.id}-description`;
    const labelId = `${this.id}-label`;
    this.shepherdElementComponent = new Shepherd_element({
      target: this.tour.options.stepsContainer || document.body,
      props: {
        classPrefix: this.classPrefix,
        descriptionId,
        labelId,
        step: this,
        styles: this.styles
      }
    });
    return this.shepherdElementComponent.getElement();
  }
  /**
   * If a custom scrollToHandler is defined, call that, otherwise do the generic
   * scrollIntoView call.
   *
   * @param {boolean|Object} scrollToOptions If true, uses the default `scrollIntoView`,
   * if an object, passes that object as the params to `scrollIntoView` i.e. `{ behavior: 'smooth', block: 'center' }`
   * @private
   */


  _scrollTo(scrollToOptions) {
    const {
      element
    } = parseAttachTo(this);

    if (isFunction(this.options.scrollToHandler)) {
      this.options.scrollToHandler(element);
    } else if (isElement$1(element) && typeof element.scrollIntoView === 'function') {
      element.scrollIntoView(scrollToOptions);
    }
  }
  /**
   * _getClassOptions gets all possible classes for the step
   * @param {Object} stepOptions The step specific options
   * @returns {String} unique string from array of classes
   * @private
   */


  _getClassOptions(stepOptions) {
    const defaultStepOptions = this.tour && this.tour.options && this.tour.options.defaultStepOptions;
    const stepClasses = stepOptions.classes ? stepOptions.classes : '';
    const defaultStepOptionsClasses = defaultStepOptions && defaultStepOptions.classes ? defaultStepOptions.classes : '';
    const allClasses = [...stepClasses.split(' '), ...defaultStepOptionsClasses.split(' ')];
    const uniqClasses = new Set(allClasses);
    return Array.from(uniqClasses).join(' ').trim();
  }
  /**
   * Sets the options for the step, maps `when` to events, sets up buttons
   * @param {Object} options The options for the step
   * @private
   */


  _setOptions(options = {}) {
    let tourOptions = this.tour && this.tour.options && this.tour.options.defaultStepOptions;
    tourOptions = cjs({}, tourOptions || {});
    this.options = Object.assign({
      arrow: true
    }, tourOptions, options);
    const {
      when
    } = this.options;
    this.options.classes = this._getClassOptions(options);
    this.destroy();
    this.id = this.options.id || `step-${uuid()}`;

    if (when) {
      Object.keys(when).forEach(event => {
        this.on(event, when[event], this);
      });
    }
  }
  /**
   * Create the element and set up the Popper instance
   * @private
   */


  _setupElements() {
    if (!isUndefined(this.el)) {
      this.destroy();
    }

    this.el = this._createTooltipContent();

    if (this.options.advanceOn) {
      bindAdvance(this);
    }

    setupTooltip(this);
  }
  /**
   * Triggers `before-show`, generates the tooltip DOM content,
   * sets up a Popper instance for the tooltip, then triggers `show`.
   * @private
   */


  _show() {
    this.trigger('before-show');

    this._setupElements();

    if (!this.tour.modal) {
      this.tour._setupModal();
    }

    this.tour.modal.setupForStep(this);

    this._styleTargetElementForStep(this);

    this.el.hidden = false; // start scrolling to target before showing the step

    if (this.options.scrollTo) {
      setTimeout(() => {
        this._scrollTo(this.options.scrollTo);
      });
    }

    this.el.hidden = false;
    const content = this.shepherdElementComponent.getElement();
    const target = this.target || document.body;
    target.classList.add(`${this.classPrefix}shepherd-enabled`);
    target.classList.add(`${this.classPrefix}shepherd-target`);
    content.classList.add('shepherd-enabled');
    this.trigger('show');
  }
  /**
   * Modulates the styles of the passed step's target element, based on the step's options and
   * the tour's `modal` option, to visually emphasize the element
   *
   * @param step The step object that attaches to the element
   * @private
   */


  _styleTargetElementForStep(step) {
    const targetElement = step.target;

    if (!targetElement) {
      return;
    }

    if (step.options.highlightClass) {
      targetElement.classList.add(step.options.highlightClass);
    }

    if (step.options.canClickTarget === false) {
      targetElement.classList.add('shepherd-target-click-disabled');
    }
  }
  /**
   * When a step is hidden, remove the highlightClass and 'shepherd-enabled'
   * and 'shepherd-target' classes
   * @private
   */


  _updateStepTargetOnHide() {
    const target = this.target || document.body;

    if (this.options.highlightClass) {
      target.classList.remove(this.options.highlightClass);
    }

    target.classList.remove('shepherd-target-click-disabled', `${this.classPrefix}shepherd-enabled`, `${this.classPrefix}shepherd-target`);
  }

}

/**
 * Cleanup the steps and set pointerEvents back to 'auto'
 * @param tour The tour object
 */
function cleanupSteps(tour) {
  if (tour) {
    const {
      steps
    } = tour;
    steps.forEach(step => {
      if (step.options && step.options.canClickTarget === false && step.options.attachTo) {
        if (step.target instanceof HTMLElement) {
          step.target.classList.remove('shepherd-target-click-disabled');
        }
      }
    });
  }
}

/**
 * Generates the svg path data for a rounded rectangle overlay
 * @param {Object} dimension - Dimensions of rectangle.
 * @param {number} width - Width.
 * @param {number} height - Height.
 * @param {number} [x=0] - Offset from top left corner in x axis. default 0.
 * @param {number} [y=0] - Offset from top left corner in y axis. default 0.
 * @param {number} [r=0] - Corner Radius. Keep this smaller than  half of width or height.
 * @returns {string} - Rounded rectangle overlay path data.
 */
function makeOverlayPath({
  width,
  height,
  x = 0,
  y = 0,
  r = 0
}) {
  const {
    innerWidth: w,
    innerHeight: h
  } = window;
  return `M${w},${h}\
H0\
V0\
H${w}\
V${h}\
Z\
M${x + r},${y}\
a${r},${r},0,0,0-${r},${r}\
V${height + y - r}\
a${r},${r},0,0,0,${r},${r}\
H${width + x - r}\
a${r},${r},0,0,0,${r}-${r}\
V${y + r}\
a${r},${r},0,0,0-${r}-${r}\
Z`;
}

/* src/js/components/shepherd-modal.svelte generated by Svelte v3.37.0 */

function create_fragment(ctx) {
  let svg;
  let path;
  let svg_class_value;
  let mounted;
  let dispose;
  return {
    c() {
      svg = svg_element("svg");
      path = svg_element("path");
      attr(path, "d",
      /*pathDefinition*/
      ctx[2]);
      attr(svg, "class", svg_class_value = `${
      /*modalIsVisible*/
      ctx[1] ? "shepherd-modal-is-visible" : ""} shepherd-modal-overlay-container`);
    },

    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path);
      /*svg_binding*/

      ctx[11](svg);

      if (!mounted) {
        dispose = listen(svg, "touchmove",
        /*_preventModalOverlayTouch*/
        ctx[3]);
        mounted = true;
      }
    },

    p(ctx, [dirty]) {
      if (dirty &
      /*pathDefinition*/
      4) {
        attr(path, "d",
        /*pathDefinition*/
        ctx[2]);
      }

      if (dirty &
      /*modalIsVisible*/
      2 && svg_class_value !== (svg_class_value = `${
      /*modalIsVisible*/
      ctx[1] ? "shepherd-modal-is-visible" : ""} shepherd-modal-overlay-container`)) {
        attr(svg, "class", svg_class_value);
      }
    },

    i: noop,
    o: noop,

    d(detaching) {
      if (detaching) detach(svg);
      /*svg_binding*/

      ctx[11](null);
      mounted = false;
      dispose();
    }

  };
}

function _getScrollParent(element) {
  if (!element) {
    return null;
  }

  const isHtmlElement = element instanceof HTMLElement;
  const overflowY = isHtmlElement && window.getComputedStyle(element).overflowY;
  const isScrollable = overflowY !== "hidden" && overflowY !== "visible";

  if (isScrollable && element.scrollHeight >= element.clientHeight) {
    return element;
  }

  return _getScrollParent(element.parentElement);
}
/**
 * Get the visible height of the target element relative to its scrollParent.
 * If there is no scroll parent, the height of the element is returned.
 *
 * @param {HTMLElement} element The target element
 * @param {HTMLElement} [scrollParent] The scrollable parent element
 * @returns {{y: number, height: number}}
 * @private
 */


function _getVisibleHeight(element, scrollParent) {
  const elementRect = element.getBoundingClientRect();
  let top = elementRect.y || elementRect.top;
  let bottom = elementRect.bottom || top + elementRect.height;

  if (scrollParent) {
    const scrollRect = scrollParent.getBoundingClientRect();
    const scrollTop = scrollRect.y || scrollRect.top;
    const scrollBottom = scrollRect.bottom || scrollTop + scrollRect.height;
    top = Math.max(top, scrollTop);
    bottom = Math.min(bottom, scrollBottom);
  }

  const height = Math.max(bottom - top, 0); // Default to 0 if height is negative

  return {
    y: top,
    height
  };
}

function instance($$self, $$props, $$invalidate) {
  let {
    element
  } = $$props,
      {
    openingProperties
  } = $$props;
  uuid();
  let modalIsVisible = false;
  let rafId = undefined;
  let pathDefinition;
  closeModalOpening();

  const getElement = () => element;

  function closeModalOpening() {
    $$invalidate(4, openingProperties = {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      r: 0
    });
  }

  function hide() {
    $$invalidate(1, modalIsVisible = false); // Ensure we cleanup all event listeners when we hide the modal

    _cleanupStepEventListeners();
  }

  function positionModal(modalOverlayOpeningPadding = 0, modalOverlayOpeningRadius = 0, scrollParent, targetElement) {
    if (targetElement) {
      const {
        y,
        height
      } = _getVisibleHeight(targetElement, scrollParent);

      const {
        x,
        width,
        left
      } = targetElement.getBoundingClientRect(); // getBoundingClientRect is not consistent. Some browsers use x and y, while others use left and top

      $$invalidate(4, openingProperties = {
        width: width + modalOverlayOpeningPadding * 2,
        height: height + modalOverlayOpeningPadding * 2,
        x: (x || left) - modalOverlayOpeningPadding,
        y: y - modalOverlayOpeningPadding,
        r: modalOverlayOpeningRadius
      });
    } else {
      closeModalOpening();
    }
  }

  function setupForStep(step) {
    // Ensure we move listeners from the previous step, before we setup new ones
    _cleanupStepEventListeners();

    if (step.tour.options.useModalOverlay) {
      _styleForStep(step);

      show();
    } else {
      hide();
    }
  }

  function show() {
    $$invalidate(1, modalIsVisible = true);
  }

  const _preventModalBodyTouch = e => {
    e.preventDefault();
  };

  const _preventModalOverlayTouch = e => {
    e.stopPropagation();
  };
  /**
  * Add touchmove event listener
  * @private
  */


  function _addStepEventListeners() {
    // Prevents window from moving on touch.
    window.addEventListener("touchmove", _preventModalBodyTouch, {
      passive: false
    });
  }
  /**
  * Cancel the requestAnimationFrame loop and remove touchmove event listeners
  * @private
  */


  function _cleanupStepEventListeners() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = undefined;
    }

    window.removeEventListener("touchmove", _preventModalBodyTouch, {
      passive: false
    });
  }
  /**
  * Style the modal for the step
  * @param {Step} step The step to style the opening for
  * @private
  */


  function _styleForStep(step) {
    const {
      modalOverlayOpeningPadding,
      modalOverlayOpeningRadius
    } = step.options;

    const scrollParent = _getScrollParent(step.target); // Setup recursive function to call requestAnimationFrame to update the modal opening position


    const rafLoop = () => {
      rafId = undefined;
      positionModal(modalOverlayOpeningPadding, modalOverlayOpeningRadius, scrollParent, step.target);
      rafId = requestAnimationFrame(rafLoop);
    };

    rafLoop();

    _addStepEventListeners();
  }

  function svg_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      element = $$value;
      $$invalidate(0, element);
    });
  }

  $$self.$$set = $$props => {
    if ("element" in $$props) $$invalidate(0, element = $$props.element);
    if ("openingProperties" in $$props) $$invalidate(4, openingProperties = $$props.openingProperties);
  };

  $$self.$$.update = () => {
    if ($$self.$$.dirty &
    /*openingProperties*/
    16) {
      $$invalidate(2, pathDefinition = makeOverlayPath(openingProperties));
    }
  };

  return [element, modalIsVisible, pathDefinition, _preventModalOverlayTouch, openingProperties, getElement, closeModalOpening, hide, positionModal, setupForStep, show, svg_binding];
}

class Shepherd_modal extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      element: 0,
      openingProperties: 4,
      getElement: 5,
      closeModalOpening: 6,
      hide: 7,
      positionModal: 8,
      setupForStep: 9,
      show: 10
    });
  }

  get getElement() {
    return this.$$.ctx[5];
  }

  get closeModalOpening() {
    return this.$$.ctx[6];
  }

  get hide() {
    return this.$$.ctx[7];
  }

  get positionModal() {
    return this.$$.ctx[8];
  }

  get setupForStep() {
    return this.$$.ctx[9];
  }

  get show() {
    return this.$$.ctx[10];
  }

}

const Shepherd = new Evented();
/**
 * Class representing the site tour
 * @extends {Evented}
 */

class Tour extends Evented {
  /**
   * @param {Object} options The options for the tour
   * @param {boolean} options.confirmCancel If true, will issue a `window.confirm` before cancelling
   * @param {string} options.confirmCancelMessage The message to display in the confirm dialog
   * @param {string} options.classPrefix The prefix to add to the `shepherd-enabled` and `shepherd-target` class names as well as the `data-shepherd-step-id`.
   * @param {Object} options.defaultStepOptions Default options for Steps ({@link Step#constructor}), created through `addStep`
   * @param {boolean} options.exitOnEsc Exiting the tour with the escape key will be enabled unless this is explicitly
   * set to false.
   * @param {boolean} options.keyboardNavigation Navigating the tour via left and right arrow keys will be enabled
   * unless this is explicitly set to false.
   * @param {HTMLElement} options.stepsContainer An optional container element for the steps.
   * If not set, the steps will be appended to `document.body`.
   * @param {HTMLElement} options.modalContainer An optional container element for the modal.
   * If not set, the modal will be appended to `document.body`.
   * @param {object[] | Step[]} options.steps An array of step options objects or Step instances to initialize the tour with
   * @param {string} options.tourName An optional "name" for the tour. This will be appended to the the tour's
   * dynamically generated `id` property -- which is also set on the `body` element as the `data-shepherd-active-tour` attribute
   * whenever the tour becomes active.
   * @param {boolean} options.useModalOverlay Whether or not steps should be placed above a darkened
   * modal overlay. If true, the overlay will create an opening around the target element so that it
   * can remain interactive
   * @returns {Tour}
   */
  constructor(options = {}) {
    super(options);
    autoBind(this);
    const defaultTourOptions = {
      exitOnEsc: true,
      keyboardNavigation: true
    };
    this.options = Object.assign({}, defaultTourOptions, options);
    this.classPrefix = normalizePrefix(this.options.classPrefix);
    this.steps = [];
    this.addSteps(this.options.steps); // Pass these events onto the global Shepherd object

    const events = ['active', 'cancel', 'complete', 'inactive', 'show', 'start'];
    events.map(event => {
      (e => {
        this.on(e, opts => {
          opts = opts || {};
          opts.tour = this;
          Shepherd.trigger(e, opts);
        });
      })(event);
    });

    this._setTourID();

    return this;
  }
  /**
   * Adds a new step to the tour
   * @param {Object|Step} options An object containing step options or a Step instance
   * @param {number} index The optional index to insert the step at. If undefined, the step
   * is added to the end of the array.
   * @return {Step} The newly added step
   */


  addStep(options, index) {
    let step = options;

    if (!(step instanceof Step)) {
      step = new Step(this, step);
    } else {
      step.tour = this;
    }

    if (!isUndefined(index)) {
      this.steps.splice(index, 0, step);
    } else {
      this.steps.push(step);
    }

    return step;
  }
  /**
   * Add multiple steps to the tour
   * @param {Array<object> | Array<Step>} steps The steps to add to the tour
   */


  addSteps(steps) {
    if (Array.isArray(steps)) {
      steps.forEach(step => {
        this.addStep(step);
      });
    }

    return this;
  }
  /**
   * Go to the previous step in the tour
   */


  back() {
    const index = this.steps.indexOf(this.currentStep);
    this.show(index - 1, false);
  }
  /**
   * Calls _done() triggering the 'cancel' event
   * If `confirmCancel` is true, will show a window.confirm before cancelling
   */


  cancel() {
    if (this.options.confirmCancel) {
      const cancelMessage = this.options.confirmCancelMessage || 'Are you sure you want to stop the tour?';
      const stopTour = window.confirm(cancelMessage);

      if (stopTour) {
        this._done('cancel');
      }
    } else {
      this._done('cancel');
    }
  }
  /**
   * Calls _done() triggering the `complete` event
   */


  complete() {
    this._done('complete');
  }
  /**
   * Gets the step from a given id
   * @param {Number|String} id The id of the step to retrieve
   * @return {Step} The step corresponding to the `id`
   */


  getById(id) {
    return this.steps.find(step => {
      return step.id === id;
    });
  }
  /**
   * Gets the current step
   * @returns {Step|null}
   */


  getCurrentStep() {
    return this.currentStep;
  }
  /**
   * Hide the current step
   */


  hide() {
    const currentStep = this.getCurrentStep();

    if (currentStep) {
      return currentStep.hide();
    }
  }
  /**
   * Check if the tour is active
   * @return {boolean}
   */


  isActive() {
    return Shepherd.activeTour === this;
  }
  /**
   * Go to the next step in the tour
   * If we are at the end, call `complete`
   */


  next() {
    const index = this.steps.indexOf(this.currentStep);

    if (index === this.steps.length - 1) {
      this.complete();
    } else {
      this.show(index + 1, true);
    }
  }
  /**
   * Removes the step from the tour
   * @param {String} name The id for the step to remove
   */


  removeStep(name) {
    const current = this.getCurrentStep(); // Find the step, destroy it and remove it from this.steps

    this.steps.some((step, i) => {
      if (step.id === name) {
        if (step.isOpen()) {
          step.hide();
        }

        step.destroy();
        this.steps.splice(i, 1);
        return true;
      }
    });

    if (current && current.id === name) {
      this.currentStep = undefined; // If we have steps left, show the first one, otherwise just cancel the tour

      this.steps.length ? this.show(0) : this.cancel();
    }
  }
  /**
   * Show a specific step in the tour
   * @param {Number|String} key The key to look up the step by
   * @param {Boolean} forward True if we are going forward, false if backward
   */


  show(key = 0, forward = true) {
    const step = isString(key) ? this.getById(key) : this.steps[key];

    if (step) {
      this._updateStateBeforeShow();

      const shouldSkipStep = isFunction(step.options.showOn) && !step.options.showOn(); // If `showOn` returns false, we want to skip the step, otherwise, show the step like normal

      if (shouldSkipStep) {
        this._skipStep(step, forward);
      } else {
        this.trigger('show', {
          step,
          previous: this.currentStep
        });
        this.currentStep = step;
        step.show();
      }
    }
  }
  /**
   * Start the tour
   */


  start() {
    this.trigger('start'); // Save the focused element before the tour opens

    this.focusedElBeforeOpen = document.activeElement;
    this.currentStep = null;

    this._setupModal();

    this._setupActiveTour();

    this.next();
  }
  /**
   * Called whenever the tour is cancelled or completed, basically anytime we exit the tour
   * @param {String} event The event name to trigger
   * @private
   */


  _done(event) {
    const index = this.steps.indexOf(this.currentStep);

    if (Array.isArray(this.steps)) {
      this.steps.forEach(step => step.destroy());
    }

    cleanupSteps(this);
    this.trigger(event, {
      index
    });
    Shepherd.activeTour = null;
    this.trigger('inactive', {
      tour: this
    });

    if (this.modal) {
      this.modal.hide();
    }

    if (event === 'cancel' || event === 'complete') {
      if (this.modal) {
        const modalContainer = document.querySelector('.shepherd-modal-overlay-container');

        if (modalContainer) {
          modalContainer.remove();
        }
      }
    } // Focus the element that was focused before the tour started


    if (isHTMLElement$1(this.focusedElBeforeOpen)) {
      this.focusedElBeforeOpen.focus();
    }
  }
  /**
   * Make this tour "active"
   * @private
   */


  _setupActiveTour() {
    this.trigger('active', {
      tour: this
    });
    Shepherd.activeTour = this;
  }
  /**
   * _setupModal create the modal container and instance
   * @private
   */


  _setupModal() {
    this.modal = new Shepherd_modal({
      target: this.options.modalContainer || document.body,
      props: {
        classPrefix: this.classPrefix,
        styles: this.styles
      }
    });
  }
  /**
   * Called when `showOn` evaluates to false, to skip the step
   * @param {Step} step The step to skip
   * @param {Boolean} forward True if we are going forward, false if backward
   * @private
   */


  _skipStep(step, forward) {
    const index = this.steps.indexOf(step);
    const nextIndex = forward ? index + 1 : index - 1;
    this.show(nextIndex, forward);
  }
  /**
   * Before showing, hide the current step and if the tour is not
   * already active, call `this._setupActiveTour`.
   * @private
   */


  _updateStateBeforeShow() {
    if (this.currentStep) {
      this.currentStep.hide();
    }

    if (!this.isActive()) {
      this._setupActiveTour();
    }
  }
  /**
   * Sets this.id to `${tourName}--${uuid}`
   * @private
   */


  _setTourID() {
    const tourName = this.options.tourName || 'tour';
    this.id = `${tourName}--${uuid()}`;
  }

}

Object.assign(Shepherd, {
  Tour,
  Step
});

/* harmony default export */ __webpack_exports__["default"] = (Shepherd);
//# sourceMappingURL=shepherd.esm.js.map


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9jc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9qcy9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvbW9sbGllUGF5bWVudHMvYXBwLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvbW9sbGllUGF5bWVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkbWluL0Rlc2t0b3AvUFJBQ0EvU3lsaXVzTW9sbGllUGx1Z2luL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL21vbGxpZVBheW1lbnRzL3Nob3dIaWRlQXBpS2V5cy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkbWluL0Rlc2t0b3AvUFJBQ0EvU3lsaXVzTW9sbGllUGx1Z2luL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL21vbGxpZVBheW1lbnRzL3NvcnRhYmxlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvbW9sbGllUGF5bWVudHMvdGVzdEFwaUtleXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9qcy9vbmJvYXJkaW5nV2l6YXJkL09uYm9hcmRpbmdXaXphcmQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9qcy9vbmJvYXJkaW5nV2l6YXJkL2NvbmZpZy9zaGVwaGVyZENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkbWluL0Rlc2t0b3AvUFJBQ0EvU3lsaXVzTW9sbGllUGx1Z2luL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL29uYm9hcmRpbmdXaXphcmQvY29uZmlnL3N0ZXBzLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvb25ib2FyZGluZ1dpemFyZC9jb25maWcvd2l6YXJkVHJhbnNsYXRpb25zLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvb25ib2FyZGluZ1dpemFyZC9oZWxwZXJzL2ZpbHRlck1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkbWluL0Rlc2t0b3AvUFJBQ0EvU3lsaXVzTW9sbGllUGx1Z2luL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL29uYm9hcmRpbmdXaXphcmQvaGVscGVycy9zdGVwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkbWluL0Rlc2t0b3AvUFJBQ0EvU3lsaXVzTW9sbGllUGx1Z2luL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL29uYm9hcmRpbmdXaXphcmQvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLmdldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hlcGhlcmQuanMvZGlzdC9qcy9zaGVwaGVyZC5lc20uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyIkIiwibW9sbGllRm9ybUluY2x1ZGVkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uIiwiZm9ybSIsImFkZENsYXNzIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwic3VjY2VzcyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJkcm9wZG93biIsImVhY2giLCJpbmRleCIsInZhbHVlIiwibWV0aG9kIiwicmVtb3ZlQ2xhc3MiLCJjaGFuZ2UiLCJpcyIsInByb3AiLCJzZXRQYXltZW50RGVzY3JpcHRpb24iLCJldmVudCIsInRhcmdldCIsInNlbGVjdCIsIiR0YXJnZXRNZXRob2QiLCJjbG9zZXN0IiwiJGlucHV0T3JkZXJOdW1iZXIiLCJmaW5kIiwiJGRlc2NyaXB0aW9uT3JkZXJOdW1iZXIiLCJ2YWwiLCJzaG93IiwiaGlkZSIsInNldFBheW1lbnRGZWVGaWVsZHMiLCJmaXhlZEFtb3VudCIsInBlcmNlbnRhZ2UiLCJzdXJjaGFyZ2VMaW1pdCIsInNldENvdW50cnlSZXN0cmljdGlvbiIsImV4Y2x1ZGVDb3VudHJpZXMiLCJhbGxvd0NvdW50cmllcyIsInRlc3RBcGlLZXlCdXR0b24iLCJsaXZlQXBpS2V5QnV0dG9uIiwidGVzdEFwaUtleUlucHV0IiwibGl2ZUFwaUtleUlucHV0IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImRyYWdnYWJsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRyYWdnYWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJwYXlsb2FkIiwiZ2V0UGF5bWVudE1ldGhvZFBvc2l0aW9ucyIsImNoYW5nZVBvc2l0aW9uQWpheEFjdGlvbiIsInByZXZlbnREZWZhdWx0IiwiYWZ0ZXJFbGVtZW50IiwiZ2V0RHJhZ0FmdGVyRWxlbWVudCIsImNsaWVudFkiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsInVwZGF0ZWRQb3NpdGlvbnMiLCJtYXAiLCJpdGVtIiwicGF5bWVudE1ldGhvZCIsImRhdGFzZXQiLCJwdXNoIiwiaWQiLCJuYW1lIiwieSIsImRyYWdnYWJsZUVsZW1lbnRzIiwicmVkdWNlIiwiY2hpbGQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvZmZzZXQiLCJ0b3AiLCJoZWlnaHQiLCJlbGVtZW50IiwiTnVtYmVyIiwiTkVHQVRJVkVfSU5GSU5JVFkiLCJnZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidGVzdEFwaURhdGFEaXYiLCJ0ZXN0QXBpS2V5IiwibGl2ZUFwaUtleSIsImF0dHIiLCJhcGlfa2V5X3Rlc3QiLCJhcGlfa2V5X2xpdmUiLCJyZW1vdmVBdHRyIiwiaHRtbCIsIm9uYm9hcmRpbmdXaXphcmQiLCJjb25zdHJ1Y3RvciIsInRvdXJTdGVwcyIsInN0ZXBzIiwidG91ckNvbmZpZyIsInNoZXBoZXJkQ29uZmlnIiwidG91clF1aXRDb25maXJtYXRpb24iLCJzdGVwUXVpdENvbmZpcm1hdGlvbiIsInN0ZXBGYWN0b3J5IiwibmF2YmFyIiwibmF2QmFySXRlbXMiLCJwcmV2aW91c1N0ZXBJbmRleCIsIm1vZGFsQ29sbGFwc2VIYW5kbGVyIiwiY3VycmVudFN0ZXAiLCJ0b3VyIiwiZWwiLCJidXR0b25Db2xsYXBzZSIsImlzQ29sbGFwc2VkIiwiaW5jbHVkZXMiLCJleHBhbmRCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJfZ2V0Iiwid2l6YXJkVHJhbnNsYXRpb25zIiwidGV4dE9wZW4iLCJyZW1vdmVDaGlsZCIsInRvZ2dsZSIsInNldEF0dHJpYnV0ZSIsImhhbmRsZVF1aXRDb25maXJtYXRpb24iLCJyZXR1cm5TdGVwSW5kZXgiLCJhZGRTdGVwIiwiYnV0dG9ucyIsInN0ZXBCdXR0b25zIiwibmF2YmFyVmlzaWJpbGl0eUhhbmRsZXIiLCJpc0FjdGl2ZSIsIm5hdmJhclByb2dyZXNzSGFuZGxlciIsImN1cnJlbnRTdGVwUHJvZ3Jlc3MiLCJnZXRDdXJyZW50U3RlcCIsIm9wdGlvbnMiLCJoaWdobGlnaHRDbGFzcyIsIm5hdkJhckl0ZW0iLCJyZXN0YXJ0VG91ckxpc3RlbmVyIiwicmVzdGFydFRvdXJUcmlnZ2VyIiwic3RhcnQiLCJpbml0VG91ciIsIlNoZXBoZXJkIiwiVG91ciIsInN0ZXAiLCJzdGVwSW5kZXgiLCJ3aGVuIiwidXNlTW9kYWxPdmVybGF5IiwiY29uZmlybUNhbmNlbCIsImtleWJvYXJkTmF2aWdhdGlvbiIsImV4aXRPbkVzYyIsImRlZmF1bHRTdGVwT3B0aW9ucyIsImNsYXNzIiwiYXJyb3ciLCJjYW5jZWxJY29uIiwiZW5hYmxlZCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJibG9jayIsIm1vZGFsT3ZlcmxheU9wZW5pbmdSYWRpdXMiLCJwYXltZW50TWV0aG9kUGF5bWVudEFwaSIsInBheW1lbnRNZXRob2RPcmRlckFwaSIsImVudmlyb21lbnRUZXN0IiwiZW52aXJvbWVudExpdmUiLCJzdGVwUGF5bWVudFR5cGUiLCJ0ZXh0IiwiY2xhc3NlcyIsImF0dGFjaFRvIiwiYnRuTmV4dENsYXNzIiwic3RlcFBheW1lbnREZXNjcmlwdGlvbiIsInN0ZXBPcmRlckFwaSIsInRpdGxlIiwiY3VzdG9tQnV0dG9ucyIsImFjdGlvbiIsInJlbW92ZVN0ZXAiLCJjb21wbGV0ZSIsInNlY29uZGFyeSIsImJ0bkJhY2tUZXh0IiwiYnRuTmV4dFRleHQiLCJidG5Db2xsYXBzZUNsYXNzIiwiYnRuQ2xvc2VDbGFzcyIsInVybE1vbGxpZSIsInNob3dPbiIsImN1cnJlbnRTdGVwVmFsaWRhdG9yIiwicGF5bWVudFR5cGVJbmRpY2F0b3IiLCJtZXRob2RMb2FkSW5kaWNhdG9yIiwiYnRuQmFja0NsYXNzIiwic3RlcFN0YXJ0Iiwic3RlcE1vbGxpZUNvbm5lY3QiLCJzdGVwRW52Iiwic3RlcEFwaUtleSIsInN0ZXBDaGVja291dENvbmZpZyIsInN0ZXBNb2xsaWVDb21wb25lbnRzIiwic3RlcE1vbGxpZVBheW1lbnRzIiwic3RlcE1ldGhvZENvbmZpZyIsInN0ZXBNZXRob2RSZXF1aXJlZCIsInN0ZXBFcnJvclRpdGxlIiwic3RlcEVycm9yRGVzY3JpcHRpb24iLCJzdGVwUGF5bWVudFRpdGxlIiwic3RlcEltYWdlVXBsb2FkIiwic3RlcENvdW50cnlSZXN0cmljdGlvbiIsInN0ZXBQYXltZW50TWV0aG9kIiwic3RlcE9yZGVyTnVtYmVyIiwic3RlcE9yZGVyc0FQSSIsInN0ZXBQYXltZW50c0FQSSIsInN0ZXBGZWVzIiwic3RlcFNhdmUiLCJzdGVwRmluaXNoV2l6YXJkIiwiZ29CYWNrIiwic2tpcFdpemFyZCIsInN0YXJ0V2l6YXJkIiwibG9naW5Nb2xsaWVBY2NvdW50IiwibmV4dFdpdGhBcnJvdyIsIm5leHQiLCJjcmVhdGVNb2xsaWVBY2NvdW50IiwiZmluaXNoV2l6YXJkIiwicXVpdENvbmZpcm0iLCJxdWl0Q2FuY2VsIiwiY29tbW9uIiwib3BlbiIsImV4cGVjdGVkVmFsdWUiLCJpbmRpY2F0ZWRJdGVtIiwiaW5kaWNhdGVkSXRlbVZhbHVlIiwibWVzc2FnZUNvbnRhaW5lciIsIm1lc3NhZ2VXaW5kb3ciLCJ2YWxpZGF0ZUZpZWxkcyIsImVsZW1lbnRzIiwiZXJyb3JzIiwiZXZlcnkiLCJwb3B1cCIsInZhbGlkYXRpb25Db250YWluZXIiLCJ2YWxpZGF0aW9uRWxlbWVudHMiLCJwYXJlbnROb2RlIiwibGVuZ3RoIiwiaGFuZGxlU3RlcEJ1dHRvbnMiLCJjdXN0b21CdXR0b24iLCJ3aW5kb3ciLCJiYWNrIiwiT25ib2FyZGluZ1dpemFyZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNDQUEsQ0FBQyxDQUFDLFlBQVk7QUFDVixRQUFNQyxrQkFBa0IsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixDQUEzQjs7QUFFQSxNQUFJLENBQUNGLGtCQUFMLEVBQXlCO0FBQ3JCO0FBQ0g7O0FBRURELEdBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JJLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7QUFDdEMsUUFBSUMsSUFBSSxHQUFHTCxDQUFDLENBQUMsVUFBRCxDQUFaO0FBQ0FLLFFBQUksQ0FBQ0MsUUFBTCxDQUFjLFNBQWQ7QUFFQU4sS0FBQyxDQUFDTyxJQUFGLENBQU87QUFDSEMsVUFBSSxFQUFFLEtBREg7QUFFSEMsU0FBRyxFQUFFVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLElBQVIsQ0FBYSxLQUFiLENBRkY7QUFHSEMsYUFBTyxFQUFFLFVBQVVELElBQVYsRUFBZ0I7QUFDckJFLGdCQUFRLENBQUNDLE1BQVQ7QUFDSCxPQUxFO0FBTUhDLFdBQUssRUFBRSxZQUFZO0FBQ2ZGLGdCQUFRLENBQUNDLE1BQVQ7QUFDSDtBQVJFLEtBQVA7QUFVSCxHQWREO0FBZ0JBYixHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCZSxRQUFsQjtBQUVBZixHQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QmdCLElBQTlCLENBQW1DLFVBQVVDLEtBQVYsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQ3ZEbEIsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSSxFQUFSLENBQVcsT0FBWCxFQUFvQixZQUFZO0FBQzVCLFVBQUlDLElBQUksR0FBR0wsQ0FBQyxDQUFDLFVBQUQsQ0FBWjtBQUNBLFVBQUlrQixLQUFLLEdBQUdsQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLElBQVIsQ0FBYSxPQUFiLENBQVo7QUFDQUwsVUFBSSxDQUFDQyxRQUFMLENBQWMsU0FBZDtBQUVBTixPQUFDLENBQUNPLElBQUYsQ0FBTztBQUNIRyxZQUFJLEVBQUU7QUFBQ1MsZ0JBQU0sRUFBRUQ7QUFBVCxTQURIO0FBRUhWLFlBQUksRUFBRSxRQUZIO0FBR0hDLFdBQUcsRUFBRVQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxJQUFSLENBQWEsS0FBYixDQUhGO0FBSUhDLGVBQU8sRUFBRSxVQUFVRCxJQUFWLEVBQWdCO0FBQ3JCRSxrQkFBUSxDQUFDQyxNQUFUO0FBQ0gsU0FORTtBQU9IQyxhQUFLLEVBQUUsWUFBWTtBQUNmVCxjQUFJLENBQUNlLFdBQUwsQ0FBaUIsU0FBakI7QUFDSDtBQVRFLE9BQVA7QUFXSCxLQWhCRDtBQWlCSCxHQWxCRDtBQW9CQXBCLEdBQUMsQ0FBQywyQkFBRCxDQUFELENBQStCcUIsTUFBL0IsQ0FBc0MsWUFBWTtBQUM5QyxRQUFJckIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRc0IsRUFBUixDQUFXLFVBQVgsQ0FBSixFQUE0QjtBQUN4QnRCLE9BQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDdUIsSUFBbEMsQ0FBdUMsU0FBdkMsRUFBa0QsQ0FBQ3ZCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLEVBQVIsQ0FBVyxVQUFYLENBQW5EO0FBQ0g7QUFDSixHQUpEO0FBTUF0QixHQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ3FCLE1BQWxDLENBQXlDLFlBQVk7QUFDakQsUUFBSXJCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXNCLEVBQVIsQ0FBVyxVQUFYLENBQUosRUFBNEI7QUFDeEJ0QixPQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQnVCLElBQS9CLENBQW9DLFNBQXBDLEVBQStDLENBQUN2QixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFzQixFQUFSLENBQVcsVUFBWCxDQUFoRDtBQUNIO0FBQ0osR0FKRDtBQU1BdEIsR0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJnQixJQUExQixDQUErQixVQUFVQyxLQUFWLEVBQWlCO0FBQzVDTyx5QkFBcUIsQ0FBQ3hCLENBQUMsQ0FBQyxJQUFELENBQUYsRUFBVWlCLEtBQVYsQ0FBckI7QUFFQWpCLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksRUFBUixDQUFXLFFBQVgsRUFBcUIsVUFBVXFCLEtBQVYsRUFBaUI7QUFDbENELDJCQUFxQixDQUFDeEIsQ0FBQyxDQUFDeUIsS0FBSyxDQUFDQyxNQUFQLENBQUYsRUFBa0JULEtBQWxCLENBQXJCO0FBQ0gsS0FGRDtBQUdILEdBTkQ7O0FBUUEsV0FBU08scUJBQVQsQ0FBK0JHLE1BQS9CLEVBQXVDO0FBQ25DLFVBQU1DLGFBQWEsR0FBR0QsTUFBTSxDQUFDRSxPQUFQLENBQWUsZUFBZixDQUF0QjtBQUNBLFVBQU1DLGlCQUFpQixHQUFHRixhQUFhLENBQUNHLElBQWQsQ0FBbUIsNkJBQW5CLENBQTFCO0FBQ0EsVUFBTUMsdUJBQXVCLEdBQUdKLGFBQWEsQ0FBQ0csSUFBZCxDQUFtQiw4QkFBbkIsQ0FBaEM7O0FBRUEsUUFBSUosTUFBTSxDQUFDSSxJQUFQLENBQVksV0FBWixFQUF5QkUsR0FBekIsT0FBbUMsYUFBdkMsRUFBc0Q7QUFDbERILHVCQUFpQixDQUFDSSxJQUFsQjtBQUNBRiw2QkFBdUIsQ0FBQ0UsSUFBeEI7QUFDSCxLQUhELE1BR087QUFDSEosdUJBQWlCLENBQUNLLElBQWxCO0FBQ0FILDZCQUF1QixDQUFDRyxJQUF4QjtBQUNIO0FBQ0o7O0FBR0RuQyxHQUFDLENBQUMsbUNBQUQsQ0FBRCxDQUF1Q2dCLElBQXZDLENBQTRDLFVBQVVDLEtBQVYsRUFBaUI7QUFDekQsVUFBTUMsS0FBSyxHQUFHbEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0IsSUFBUixDQUFhLFdBQWIsRUFBMEJFLEdBQTFCLEVBQWQ7QUFDQUcsdUJBQW1CLENBQUNsQixLQUFELEVBQVFELEtBQVIsQ0FBbkI7QUFFQWpCLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUksRUFBUixDQUFXLFFBQVgsRUFBcUIsWUFBWTtBQUM3QixZQUFNYyxLQUFLLEdBQUdsQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpQyxHQUFSLEVBQWQ7QUFDQUcseUJBQW1CLENBQUNsQixLQUFELEVBQVFELEtBQVIsQ0FBbkI7QUFDSCxLQUhEO0FBSUgsR0FSRDs7QUFVQSxXQUFTbUIsbUJBQVQsQ0FBNkJsQixLQUE3QixFQUFvQ0QsS0FBcEMsRUFBMkM7QUFDdkMsVUFBTW9CLFdBQVcsR0FBRyw2REFBNERwQixLQUE1RCxHQUFtRSxrQ0FBdkY7QUFDQSxVQUFNcUIsVUFBVSxHQUFHLDZEQUE0RHJCLEtBQTVELEdBQW1FLGlDQUF0RjtBQUNBLFVBQU1zQixjQUFjLEdBQUcsNkRBQTREdEIsS0FBNUQsR0FBbUUscUNBQTFGOztBQUVBLFFBQUlDLEtBQUssS0FBSyxRQUFkLEVBQXdCO0FBQ3BCbEIsT0FBQyxDQUFDLGVBQWFxQyxXQUFiLEdBQXlCLFdBQXpCLEdBQXFDQSxXQUFyQyxHQUFpRCxFQUFsRCxDQUFELENBQXVERixJQUF2RDtBQUNBbkMsT0FBQyxDQUFDLGVBQWFzQyxVQUFiLEdBQXdCLFdBQXhCLEdBQW9DQSxVQUFwQyxHQUErQyxFQUFoRCxDQUFELENBQXFESCxJQUFyRDtBQUNBbkMsT0FBQyxDQUFDLGVBQWF1QyxjQUFiLEdBQTRCLFdBQTVCLEdBQXdDQSxjQUF4QyxHQUF1RCxFQUF4RCxDQUFELENBQTZESixJQUE3RDtBQUNIOztBQUNELFFBQUlqQixLQUFLLEtBQUssWUFBZCxFQUE0QjtBQUN4QmxCLE9BQUMsQ0FBQyxlQUFhc0MsVUFBYixHQUF3QixXQUF4QixHQUFvQ0EsVUFBcEMsR0FBK0MsRUFBaEQsQ0FBRCxDQUFxREosSUFBckQ7QUFDQWxDLE9BQUMsQ0FBQyxlQUFhdUMsY0FBYixHQUE0QixXQUE1QixHQUF3Q0EsY0FBeEMsR0FBdUQsRUFBeEQsQ0FBRCxDQUE2REwsSUFBN0Q7QUFDQWxDLE9BQUMsQ0FBQyxlQUFhcUMsV0FBYixHQUF5QixXQUF6QixHQUFxQ0EsV0FBckMsR0FBaUQsRUFBbEQsQ0FBRCxDQUF1REYsSUFBdkQ7QUFDSDs7QUFDRCxRQUFJakIsS0FBSyxLQUFLLFdBQWQsRUFBMkI7QUFDdkJsQixPQUFDLENBQUMsZUFBYXFDLFdBQWIsR0FBeUIsV0FBekIsR0FBcUNBLFdBQXJDLEdBQWlELEVBQWxELENBQUQsQ0FBdURILElBQXZEO0FBQ0FsQyxPQUFDLENBQUMsZUFBYXNDLFVBQWIsR0FBd0IsV0FBeEIsR0FBb0NBLFVBQXBDLEdBQStDLEVBQWhELENBQUQsQ0FBcURILElBQXJEO0FBQ0FuQyxPQUFDLENBQUMsZUFBYXVDLGNBQWIsR0FBNEIsV0FBNUIsR0FBd0NBLGNBQXhDLEdBQXVELEVBQXhELENBQUQsQ0FBNkRKLElBQTdEO0FBQ0g7O0FBQ0QsUUFBSWpCLEtBQUssS0FBSywwQkFBZCxFQUEwQztBQUN0Q2xCLE9BQUMsQ0FBQyxlQUFhcUMsV0FBYixHQUF5QixXQUF6QixHQUFxQ0EsV0FBckMsR0FBaUQsRUFBbEQsQ0FBRCxDQUF1REgsSUFBdkQ7QUFDQWxDLE9BQUMsQ0FBQyxlQUFhc0MsVUFBYixHQUF3QixXQUF4QixHQUFvQ0EsVUFBcEMsR0FBK0MsRUFBaEQsQ0FBRCxDQUFxREosSUFBckQ7QUFDQWxDLE9BQUMsQ0FBQyxlQUFhdUMsY0FBYixHQUE0QixXQUE1QixHQUF3Q0EsY0FBeEMsR0FBdUQsRUFBeEQsQ0FBRCxDQUE2REwsSUFBN0Q7QUFDSDtBQUNKOztBQUVEbEMsR0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0NnQixJQUFsQyxDQUF1QyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3BELFVBQU1DLEtBQUssR0FBR2xCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStCLElBQVIsQ0FBYSxXQUFiLEVBQTBCRSxHQUExQixFQUFkO0FBQ0FPLHlCQUFxQixDQUFDdEIsS0FBRCxFQUFRRCxLQUFSLENBQXJCO0FBRUFqQixLQUFDLENBQUMsSUFBRCxDQUFELENBQVFJLEVBQVIsQ0FBVyxRQUFYLEVBQXFCLFlBQVk7QUFDN0IsWUFBTWMsS0FBSyxHQUFHbEIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUMsR0FBUixFQUFkO0FBQ0FPLDJCQUFxQixDQUFDdEIsS0FBRCxFQUFRRCxLQUFSLENBQXJCO0FBQ0gsS0FIRDtBQUlILEdBUkQ7O0FBVUEsV0FBU3VCLHFCQUFULENBQStCdEIsS0FBL0IsRUFBc0NELEtBQXRDLEVBQTZDO0FBQ3pDLFVBQU13QixnQkFBZ0IsR0FBR3pDLENBQUMsQ0FBQyx1QkFBdUJpQixLQUF4QixDQUExQjtBQUNBLFVBQU15QixjQUFjLEdBQUcxQyxDQUFDLENBQUMsc0JBQXNCaUIsS0FBdkIsQ0FBeEI7O0FBRUEsUUFBSUMsS0FBSyxLQUFLLGVBQWQsRUFBK0I7QUFDM0J1QixzQkFBZ0IsQ0FBQ1AsSUFBakI7QUFDQVEsb0JBQWMsQ0FBQ1AsSUFBZjtBQUNIOztBQUNELFFBQUlqQixLQUFLLEtBQUssb0JBQWQsRUFBb0M7QUFDaEN1QixzQkFBZ0IsQ0FBQ04sSUFBakI7QUFDQU8sb0JBQWMsQ0FBQ1IsSUFBZjtBQUNIO0FBQ0o7QUFDSixDQTVJQSxDQUFELEM7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkFsQyxDQUFDLENBQUMsWUFBWTtBQUNWLFFBQU0yQyxnQkFBZ0IsR0FBR3pDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUF6QjtBQUNBLFFBQU15QyxnQkFBZ0IsR0FBRzFDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUF6QjtBQUVBSCxHQUFDLENBQUMyQyxnQkFBRCxDQUFELENBQW9CdkMsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBVXFCLEtBQVYsRUFBaUI7QUFDN0MsVUFBTW9CLGVBQWUsR0FBRzNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qix5REFBeEIsQ0FBeEI7O0FBRUEsUUFBSTBDLGVBQWUsQ0FBQ3JDLElBQWhCLEtBQXlCLFVBQTdCLEVBQXlDO0FBQ3JDcUMscUJBQWUsQ0FBQ3JDLElBQWhCLEdBQXVCLE1BQXZCO0FBRUE7QUFDSDs7QUFFRHFDLG1CQUFlLENBQUNyQyxJQUFoQixHQUF1QixVQUF2QjtBQUNILEdBVkQ7QUFZQVIsR0FBQyxDQUFDNEMsZ0JBQUQsQ0FBRCxDQUFvQnhDLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFVBQVVxQixLQUFWLEVBQWlCO0FBQzdDLFVBQU1xQixlQUFlLEdBQUc1QyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IseURBQXhCLENBQXhCOztBQUVBLFFBQUkyQyxlQUFlLENBQUN0QyxJQUFoQixLQUF5QixVQUE3QixFQUF5QztBQUNyQ3NDLHFCQUFlLENBQUN0QyxJQUFoQixHQUF1QixNQUF2QjtBQUVBO0FBQ0g7O0FBRURzQyxtQkFBZSxDQUFDdEMsSUFBaEIsR0FBdUIsVUFBdkI7QUFDSCxHQVZEO0FBV0gsQ0EzQkEsQ0FBRCxDOzs7Ozs7Ozs7OztBQ0FBUixDQUFDLENBQUMsWUFBWTtBQUNaLFFBQU0rQyxTQUFTLEdBQUc3QyxRQUFRLENBQUM4QyxhQUFULENBQXVCLGNBQXZCLENBQWxCOztBQUVBLE1BQUksQ0FBQ0QsU0FBTCxFQUFnQjtBQUNkO0FBQ0Q7O0FBRUQsUUFBTUUsVUFBVSxHQUFHL0MsUUFBUSxDQUFDZ0QsZ0JBQVQsQ0FBMEIsZUFBMUIsQ0FBbkI7QUFFQUQsWUFBVSxDQUFDRSxPQUFYLENBQW1CQyxTQUFTLElBQUk7QUFDOUJBLGFBQVMsQ0FBQ0MsZ0JBQVYsQ0FBMkIsV0FBM0IsRUFBd0MsTUFBTTtBQUM1Q0QsZUFBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixVQUF4QjtBQUNELEtBRkQ7QUFJQUgsYUFBUyxDQUFDQyxnQkFBVixDQUEyQixTQUEzQixFQUFzQyxNQUFNO0FBQzFDRCxlQUFTLENBQUNFLFNBQVYsQ0FBb0JFLE1BQXBCLENBQTJCLFVBQTNCO0FBQ0EsWUFBTUMsT0FBTyxHQUFHQyx5QkFBeUIsRUFBekM7QUFDQUMsOEJBQXdCLENBQUNGLE9BQUQsQ0FBeEI7QUFDRCxLQUpEO0FBS0QsR0FWRDtBQVlBVixXQUFTLENBQUNNLGdCQUFWLENBQTJCLFVBQTNCLEVBQXdDNUIsS0FBRCxJQUFXO0FBQ2hEQSxTQUFLLENBQUNtQyxjQUFOO0FBQ0EsVUFBTUMsWUFBWSxHQUFHQyxtQkFBbUIsQ0FBQ2YsU0FBRCxFQUFZdEIsS0FBSyxDQUFDc0MsT0FBbEIsQ0FBeEM7QUFDQSxVQUFNWCxTQUFTLEdBQUdsRCxRQUFRLENBQUM4QyxhQUFULENBQXVCLFdBQXZCLENBQWxCOztBQUNBLFFBQUlhLFlBQVksSUFBSSxJQUFwQixFQUEwQjtBQUN4QmQsZUFBUyxDQUFDaUIsV0FBVixDQUFzQlosU0FBdEI7QUFDRCxLQUZELE1BRU87QUFDTEwsZUFBUyxDQUFDa0IsWUFBVixDQUF1QmIsU0FBdkIsRUFBa0NTLFlBQWxDO0FBQ0Q7QUFDRixHQVREOztBQVdBLFdBQVNILHlCQUFULEdBQXNDO0FBQ3BDLFVBQU1ULFVBQVUsR0FBRyxDQUFDLEdBQUdGLFNBQVMsQ0FBQ0csZ0JBQVYsQ0FBMkIsZUFBM0IsQ0FBSixDQUFuQjtBQUNBLFVBQU1nQixnQkFBZ0IsR0FBRyxFQUF6QjtBQUVBakIsY0FBVSxDQUFDa0IsR0FBWCxDQUFlLENBQUNDLElBQUQsRUFBT25ELEtBQVAsS0FBaUI7QUFDOUIsWUFBTTtBQUFFb0Q7QUFBRixVQUFvQkQsSUFBSSxDQUFDRSxPQUEvQjtBQUNBSixzQkFBZ0IsQ0FBQ0ssSUFBakIsQ0FBc0I7QUFBRUMsVUFBRSxFQUFFdkQsS0FBTjtBQUFhd0QsWUFBSSxFQUFFSjtBQUFuQixPQUF0QjtBQUNELEtBSEQ7QUFLQSxXQUFPSCxnQkFBUDtBQUNEOztBQUVELFdBQVNKLG1CQUFULENBQTZCZixTQUE3QixFQUF3QzJCLENBQXhDLEVBQTJDO0FBQ3pDLFVBQU1DLGlCQUFpQixHQUFHLENBQUMsR0FBRzVCLFNBQVMsQ0FBQ0csZ0JBQVYsQ0FBMkIsOEJBQTNCLENBQUosQ0FBMUI7QUFFQSxXQUFPeUIsaUJBQWlCLENBQUNDLE1BQWxCLENBQXlCLENBQUMvQyxPQUFELEVBQVVnRCxLQUFWLEtBQW9CO0FBQ2xELFlBQU1DLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxxQkFBTixFQUFaO0FBQ0EsWUFBTUMsTUFBTSxHQUFHTixDQUFDLEdBQUdJLEdBQUcsQ0FBQ0csR0FBUixHQUFjSCxHQUFHLENBQUNJLE1BQUosR0FBYSxDQUExQzs7QUFDQSxVQUFJRixNQUFNLEdBQUcsQ0FBVCxJQUFjQSxNQUFNLEdBQUduRCxPQUFPLENBQUNtRCxNQUFuQyxFQUEyQztBQUN6QyxlQUFPO0FBQUVBLGdCQUFNLEVBQUVBLE1BQVY7QUFBa0JHLGlCQUFPLEVBQUVOO0FBQTNCLFNBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPaEQsT0FBUDtBQUNEO0FBRUYsS0FUTSxFQVNKO0FBQUVtRCxZQUFNLEVBQUVJLE1BQU0sQ0FBQ0M7QUFBakIsS0FUSSxFQVNrQ0YsT0FUekM7QUFVRDs7QUFFRCxXQUFTeEIsd0JBQVQsQ0FBa0NqRCxJQUFsQyxFQUF3QztBQUN0QyxVQUFNRCxHQUFHLEdBQUdQLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkNtRixZQUEzQyxDQUF3RCxlQUF4RCxDQUFaO0FBRUF0RixLQUFDLENBQUNPLElBQUYsQ0FBTztBQUNMQyxVQUFJLEVBQUUsS0FERDtBQUVMQyxTQUFHLEVBQUVBLEdBRkE7QUFHTEMsVUFBSSxFQUFFO0FBQUMsZ0JBQVFBO0FBQVQsT0FIRDtBQUlMQyxhQUFPLEVBQUUsVUFBVUQsSUFBVixFQUFnQixDQUFFLENBSnRCO0FBS0xJLFdBQUssRUFBRSxZQUFZLENBQUU7QUFMaEIsS0FBUDtBQU9EO0FBQ0YsQ0F0RUEsQ0FBRCxDOzs7Ozs7Ozs7OztBQ0FBZCxDQUFDLENBQUMsWUFBWTtBQUNWLFFBQU0yQyxnQkFBZ0IsR0FBR3pDLFFBQVEsQ0FBQ3FGLHNCQUFULENBQWdDLHNCQUFoQyxDQUF6QjtBQUVBdkYsR0FBQyxDQUFDMkMsZ0JBQUQsQ0FBRCxDQUFvQnZDLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFVBQVVxQixLQUFWLEVBQWlCO0FBQzdDLFVBQU0rRCxjQUFjLEdBQUd0RixRQUFRLENBQUNxRixzQkFBVCxDQUFnQyxrQkFBaEMsQ0FBdkI7QUFDQSxVQUFNRSxVQUFVLEdBQUd2RixRQUFRLENBQUNDLGNBQVQsQ0FBd0IseURBQXhCLENBQW5CO0FBQ0EsVUFBTXVGLFVBQVUsR0FBR3hGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qix5REFBeEIsQ0FBbkI7QUFFQUgsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxRQUFSLENBQWlCLFNBQWpCO0FBQ0FOLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJGLElBQVIsQ0FBYSxVQUFiLEVBQXlCLElBQXpCO0FBRUEzRixLQUFDLENBQUNPLElBQUYsQ0FBTztBQUNIQyxVQUFJLEVBQUUsS0FESDtBQUVIQyxTQUFHLEVBQUVULENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsSUFBUixDQUFhLEtBQWIsQ0FGRjtBQUdIQSxVQUFJLEVBQUU7QUFDRmtGLG9CQUFZLEVBQUU1RixDQUFDLENBQUN5RixVQUFELENBQUQsQ0FBY3hELEdBQWQsRUFEWjtBQUVGNEQsb0JBQVksRUFBRTdGLENBQUMsQ0FBQzBGLFVBQUQsQ0FBRCxDQUFjekQsR0FBZDtBQUZaLE9BSEg7QUFPSHRCLGFBQU8sRUFBRSxVQUFVRCxJQUFWLEVBQWdCO0FBQ3JCVixTQUFDLENBQUN3RixjQUFELENBQUQsQ0FBa0JwRSxXQUFsQixDQUE4QixhQUE5QjtBQUVBcEIsU0FBQyxDQUFDMkMsZ0JBQUQsQ0FBRCxDQUFvQnZCLFdBQXBCLENBQWdDLFNBQWhDO0FBQ0FwQixTQUFDLENBQUMyQyxnQkFBRCxDQUFELENBQW9CbUQsVUFBcEIsQ0FBK0IsVUFBL0I7QUFDQTlGLFNBQUMsQ0FBQ3dGLGNBQUQsQ0FBRCxDQUFrQk8sSUFBbEIsQ0FBdUJyRixJQUF2QjtBQUNILE9BYkU7QUFjSEksV0FBSyxFQUFFLFVBQVVBLEtBQVYsRUFBaUIsQ0FDdkI7QUFmRSxLQUFQO0FBaUJILEdBekJEO0FBMEJILENBN0JBLENBQUQsQzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsTUFBTWtGLGdCQUFOLENBQXVCO0FBQ3JDQyxhQUFXLENBQ1ZDLFNBQVMsR0FBR0MsbURBREYsRUFFVkMsVUFBVSxHQUFHQyw4REFGSCxFQUdWQyxvQkFBb0IsR0FBR0Msa0VBSGIsRUFJVDtBQUNELFNBQUtKLEtBQUwsR0FBYUssb0VBQVcsQ0FBQ04sU0FBRCxDQUF4QjtBQUNBLFNBQUtLLG9CQUFMLEdBQTRCQyxvRUFBVyxDQUFDRixvQkFBRCxDQUFYLENBQWtDLENBQWxDLENBQTVCO0FBQ0EsU0FBS0YsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLSyxNQUFMLEdBQWN2RyxRQUFRLENBQUM4QyxhQUFULENBQXVCLHVCQUF2QixDQUFkO0FBQ0EsU0FBSzBELFdBQUwsR0FBbUIsQ0FDbEIsR0FBRyxLQUFLRCxNQUFMLENBQVl2RCxnQkFBWixDQUE2QixnQ0FBN0IsQ0FEZSxDQUFuQjtBQUdBLFNBQUt5RCxpQkFBTCxHQUF5QixDQUF6QjtBQUNBOztBQUVEQyxzQkFBb0IsR0FBRztBQUN0QixVQUFNQyxXQUFXLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxXQUFWLENBQXNCRSxFQUExQztBQUNBLFVBQU1DLGNBQWMsR0FBR0gsV0FBVyxDQUFDN0QsYUFBWixDQUEwQixtQkFBMUIsQ0FBdkI7QUFDQSxVQUFNaUUsV0FBVyxHQUFHLENBQUMsR0FBR0osV0FBVyxDQUFDdkQsU0FBaEIsRUFBMkI0RCxRQUEzQixDQUNuQiw2QkFEbUIsQ0FBcEI7QUFJQSxVQUFNQyxZQUFZLEdBQUdqSCxRQUFRLENBQUNrSCxhQUFULENBQXVCLE1BQXZCLENBQXJCO0FBQ0FELGdCQUFZLENBQUM3RCxTQUFiLENBQXVCQyxHQUF2QixDQUEyQix1QkFBM0I7QUFDQTRELGdCQUFZLENBQUM3RCxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixvQkFBM0I7QUFDQTRELGdCQUFZLENBQUNFLFdBQWIsR0FBMkJDLGlEQUFJLENBQUNDLGtFQUFELEVBQXFCLGFBQXJCLENBQS9CO0FBRUEsVUFBTUMsUUFBUSxHQUFHUixjQUFjLENBQUNoRSxhQUFmLENBQTZCLHFCQUE3QixDQUFqQjs7QUFFQSxRQUFJaUUsV0FBSixFQUFpQjtBQUNoQkQsb0JBQWMsQ0FBQ1MsV0FBZixDQUEyQkQsUUFBM0I7QUFDQSxLQUZELE1BRU87QUFDTlIsb0JBQWMsQ0FBQ2hELFdBQWYsQ0FBMkJtRCxZQUEzQjtBQUNBOztBQUVETixlQUFXLENBQUN2RCxTQUFaLENBQXNCb0UsTUFBdEIsQ0FDQyw2QkFERCxFQUVDLENBQUNULFdBRkY7QUFJQUosZUFBVyxDQUFDYyxZQUFaLENBQXlCLGFBQXpCLEVBQXdDLENBQUNWLFdBQXpDO0FBQ0E7O0FBRURXLHdCQUFzQixHQUFHO0FBQ3hCLFVBQU1DLGVBQWUsR0FBRyxLQUFLbEIsaUJBQTdCO0FBRUEsU0FBS0csSUFBTCxDQUFVZ0IsT0FBVixDQUFrQixFQUNqQixHQUFHLEtBQUt2QixvQkFEUztBQUVqQndCLGFBQU8sRUFBRSxLQUFLeEIsb0JBQUwsQ0FBMEJ5QixXQUExQixDQUNSLElBRFEsRUFFUkgsZUFGUTtBQUZRLEtBQWxCO0FBUUEsU0FBS2YsSUFBTCxDQUFVNUUsSUFBVixDQUFlLHdCQUFmLEVBQXlDLElBQXpDO0FBQ0E7O0FBRUQrRix5QkFBdUIsQ0FBQ0MsUUFBRCxFQUFXO0FBQ2pDLFNBQUt6QixNQUFMLENBQVluRCxTQUFaLENBQXNCb0UsTUFBdEIsQ0FBNkIsUUFBN0IsRUFBdUMsQ0FBQ1EsUUFBeEM7QUFDQSxTQUFLekIsTUFBTCxDQUFZa0IsWUFBWixDQUF5QixhQUF6QixFQUF3QyxDQUFDTyxRQUF6QztBQUNBOztBQUVEQyx1QkFBcUIsR0FBRztBQUN2QixVQUFNQyxtQkFBbUIsR0FDeEIsS0FBS3RCLElBQUwsQ0FBVXVCLGNBQVYsR0FBMkJDLE9BQTNCLENBQW1DQyxjQURwQztBQUdBLFNBQUs3QixXQUFMLENBQWlCdkQsT0FBakIsQ0FBMEJxRixVQUFELElBQWdCO0FBQ3hDLFVBQ0NBLFVBQVUsQ0FBQ2xELFlBQVgsQ0FBd0Isc0JBQXhCLE1BQ0E4QyxtQkFGRCxFQUdFO0FBQ0RJLGtCQUFVLENBQUNsRixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixrQ0FBekI7QUFDQSxPQUxELE1BS087QUFDTmlGLGtCQUFVLENBQUNsRixTQUFYLENBQXFCRSxNQUFyQixDQUE0QixrQ0FBNUI7QUFDQTtBQUNELEtBVEQ7QUFVQTs7QUFFRGlGLHFCQUFtQixHQUFHO0FBQ3JCLFVBQU1DLGtCQUFrQixHQUFHeEksUUFBUSxDQUFDOEMsYUFBVCxDQUF1QixrQkFBdkIsQ0FBM0I7QUFFQTBGLHNCQUFrQixDQUFDckYsZ0JBQW5CLENBQW9DLE9BQXBDLEVBQTZDLE1BQU07QUFDbEQsV0FBS3lELElBQUwsQ0FBVTZCLEtBQVY7QUFDQSxXQUFLbEMsTUFBTCxDQUFZbkQsU0FBWixDQUFzQm9FLE1BQXRCLENBQTZCLFFBQTdCO0FBQ0EsS0FIRDtBQUlBOztBQUVEa0IsVUFBUSxHQUFHO0FBQ1YsUUFBSSxLQUFLbkMsTUFBVCxFQUFpQjtBQUNoQixXQUFLSyxJQUFMLEdBQVksSUFBSStCLG1EQUFRLENBQUNDLElBQWIsQ0FBa0IsRUFDN0IsR0FBRyxLQUFLMUM7QUFEcUIsT0FBbEIsQ0FBWjtBQUlBLFdBQUtELEtBQUwsQ0FBV2hELE9BQVgsQ0FBbUIsQ0FBQzRGLElBQUQsRUFBT0MsU0FBUCxLQUFxQjtBQUN2QyxhQUFLbEMsSUFBTCxDQUFVZ0IsT0FBVixDQUFrQixFQUNqQixHQUFHaUIsSUFEYztBQUVqQmhCLGlCQUFPLEVBQUVnQixJQUFJLENBQUNmLFdBQUwsQ0FBaUIsSUFBakIsRUFBdUJnQixTQUF2QixDQUZRO0FBR2pCQyxjQUFJLEVBQUU7QUFDTC9HLGdCQUFJLEVBQUUsTUFBTTtBQUNYLG1CQUFLeUUsaUJBQUwsR0FDQyxLQUFLRyxJQUFMLENBQVV1QixjQUFWLEdBQTJCN0QsRUFENUI7QUFFQSxtQkFBSzJELHFCQUFMO0FBQ0E7QUFMSTtBQUhXLFNBQWxCO0FBV0EsT0FaRDtBQWNBLFdBQUtyQixJQUFMLENBQVUxRyxFQUFWLENBQWEsVUFBYixFQUF5QixNQUFNO0FBQzlCLGFBQUs2SCx1QkFBTCxDQUE2QixLQUE3QjtBQUNBLE9BRkQ7QUFJQSxXQUFLbkIsSUFBTCxDQUFVNkIsS0FBVjtBQUVBLFdBQUtGLG1CQUFMO0FBQ0E7QUFDRDs7QUFuSG9DLEM7Ozs7Ozs7Ozs7OztBQ1J0QztBQUFlO0FBQ2RTLGlCQUFlLEVBQUUsSUFESDtBQUVkQyxlQUFhLEVBQUUsS0FGRDtBQUdkQyxvQkFBa0IsRUFBRSxLQUhOO0FBSWRDLFdBQVMsRUFBRSxLQUpHO0FBS2RDLG9CQUFrQixFQUFFO0FBQ25CQyxTQUFLLEVBQUUsd0JBRFk7QUFFbkJDLFNBQUssRUFBRSxLQUZZO0FBR25CQyxjQUFVLEVBQUU7QUFDWEMsYUFBTyxFQUFFO0FBREUsS0FITztBQU1uQkMsWUFBUSxFQUFFO0FBQUNDLGNBQVEsRUFBRSxRQUFYO0FBQXFCQyxXQUFLLEVBQUU7QUFBNUIsS0FOUztBQU9uQkMsNkJBQXlCLEVBQUU7QUFQUjtBQUxOLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BLE1BQU1DLHVCQUF1QixHQUFHLGFBQWhDO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsV0FBOUI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsR0FBdkI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsR0FBdkI7QUFFTyxNQUFNQyxlQUFlLEdBQUc7QUFDOUIzRixJQUFFLEVBQUUsbUJBRDBCO0FBRTlCNEYsTUFBSSxFQUFFLHNCQUZ3QjtBQUc5QkMsU0FBTyxFQUFFLCtCQUhxQjtBQUk5QjlCLGdCQUFjLEVBQUUsa0JBSmM7QUFLOUIrQixVQUFRLEVBQUU7QUFDVG5GLFdBQU8sRUFBRSxrQ0FEQTtBQUVUL0UsTUFBRSxFQUFFO0FBRkssR0FMb0I7QUFTOUJtSyxjQUFZLEVBQUU7QUFUZ0IsQ0FBeEI7QUFZQSxNQUFNQyxzQkFBc0IsR0FBRztBQUNyQ2hHLElBQUUsRUFBRSwwQkFEaUM7QUFFckM0RixNQUFJLEVBQUUsNkJBRitCO0FBR3JDQyxTQUFPLEVBQUUsK0JBSDRCO0FBSXJDQyxVQUFRLEVBQUU7QUFDVG5GLFdBQU8sRUFBRSx5Q0FEQTtBQUVUL0UsTUFBRSxFQUFFO0FBRkssR0FKMkI7QUFRckNtSSxnQkFBYyxFQUFFLGtCQVJxQjtBQVNyQ2dDLGNBQVksRUFBRTtBQVR1QixDQUEvQjtBQVlBLE1BQU1FLFlBQVksR0FBRztBQUMzQmpHLElBQUUsRUFBRSxnQkFEdUI7QUFFM0IrRCxnQkFBYyxFQUFFLGtCQUZXO0FBRzNCOEIsU0FBTyxFQUFFLCtCQUhrQjtBQUkzQkQsTUFBSSxFQUFFLG1CQUpxQjtBQUszQkUsVUFBUSxFQUFFO0FBQ1RuRixXQUFPLEVBQUUsa0NBREE7QUFFVC9FLE1BQUUsRUFBRTtBQUZLLEdBTGlCO0FBUzNCbUssY0FBWSxFQUFFO0FBVGEsQ0FBckI7QUFZQSxNQUFNaEUsb0JBQW9CLEdBQUcsQ0FDbkM7QUFDQy9CLElBQUUsRUFBRSx3QkFETDtBQUVDa0csT0FBSyxFQUFFLDRCQUZSO0FBR0NOLE1BQUksRUFBRSwyQkFIUDtBQUlDN0IsZ0JBQWMsRUFBRSxPQUpqQjtBQUtDb0MsZUFBYSxFQUFFLENBQ2Q7QUFDQ1AsUUFBSSxFQUFFLHlCQURQO0FBRUNRLFVBQU0sRUFBRzVFLGdCQUFELElBQXNCO0FBQzdCQSxzQkFBZ0IsQ0FBQ2MsSUFBakIsQ0FBc0IrRCxVQUF0QixDQUFpQyx3QkFBakM7QUFDQTdFLHNCQUFnQixDQUFDYyxJQUFqQixDQUFzQmdFLFFBQXRCO0FBQ0EsS0FMRjtBQU1DQyxhQUFTLEVBQUU7QUFOWixHQURjLEVBU2Q7QUFDQ1gsUUFBSSxFQUFFLHdCQURQO0FBRUNRLFVBQU0sRUFBRSxDQUFDNUUsZ0JBQUQsRUFBbUJnRCxTQUFuQixLQUFpQztBQUN4Q2hELHNCQUFnQixDQUFDYyxJQUFqQixDQUFzQjVFLElBQXRCLENBQTJCOEcsU0FBM0IsRUFBc0MsSUFBdEM7QUFDQWhELHNCQUFnQixDQUFDYyxJQUFqQixDQUFzQitELFVBQXRCLENBQWlDLHdCQUFqQztBQUNBO0FBTEYsR0FUYztBQUxoQixDQURtQyxDQUE3QjtBQTBCQSxNQUFNMUUsS0FBSyxHQUFHLENBQ3BCO0FBQ0MzQixJQUFFLEVBQUUsWUFETDtBQUVDa0csT0FBSyxFQUFFLGlCQUZSO0FBR0NOLE1BQUksRUFBRSxnQkFIUDtBQUlDQyxTQUFPLEVBQUUseUJBSlY7QUFLQzlCLGdCQUFjLEVBQUUsT0FMakI7QUFNQ3lDLGFBQVcsRUFBRSx3QkFOZDtBQU9DQyxhQUFXLEVBQUUseUJBUGQ7QUFRQ0Msa0JBQWdCLEVBQUUsUUFSbkI7QUFTQ0MsZUFBYSxFQUFFO0FBVGhCLENBRG9CLEVBWXBCO0FBQ0MzRyxJQUFFLEVBQUUscUJBREw7QUFFQ2tHLE9BQUssRUFBRSx5QkFGUjtBQUdDTixNQUFJLEVBQUUsd0JBSFA7QUFJQzdCLGdCQUFjLEVBQUUsT0FKakI7QUFLQ3lDLGFBQVcsRUFBRSxnQ0FMZDtBQU1DQyxhQUFXLEVBQUUsaUNBTmQ7QUFPQ0Msa0JBQWdCLEVBQUUsUUFQbkI7QUFRQ0UsV0FBUyxFQUFFO0FBUlosQ0Fab0IsRUFzQnBCO0FBQ0NDLFFBQU0sRUFBRSxZQUFZO0FBQ25CQyxzRkFBb0IsQ0FDbkIsa0NBRG1CLEVBRW5CLFdBRm1CLENBQXBCO0FBSUEsV0FBTyxJQUFQO0FBQ0EsR0FQRjtBQVFDOUcsSUFBRSxFQUFFLFVBUkw7QUFTQzRGLE1BQUksRUFBRSxjQVRQO0FBVUNDLFNBQU8sRUFBRSwrQkFWVjtBQVdDOUIsZ0JBQWMsRUFBRSxjQVhqQjtBQVlDK0IsVUFBUSxFQUFFO0FBQ1RuRixXQUFPLEVBQUUsa0NBREE7QUFFVC9FLE1BQUUsRUFBRTtBQUZLLEdBWlg7QUFnQkNtSyxjQUFZLEVBQUU7QUFoQmYsQ0F0Qm9CLEVBd0NwQjtBQUNDYyxRQUFNLEVBQUUsWUFBWTtBQUNuQkMsc0ZBQW9CLENBQ25CLHFDQURtQixFQUVuQixXQUZtQixDQUFwQjtBQUlBLFdBQU9DLGtGQUFvQixDQUMxQixrQ0FEMEIsRUFFMUJ0QixjQUYwQixDQUEzQjtBQUlBLEdBVkY7QUFXQ3pGLElBQUUsRUFBRSxtQkFYTDtBQVlDNEYsTUFBSSxFQUFFLGlCQVpQO0FBYUNDLFNBQU8sRUFBRSwrQkFiVjtBQWNDOUIsZ0JBQWMsRUFBRSxjQWRqQjtBQWVDZ0MsY0FBWSxFQUFFLDZCQWZmO0FBZ0JDRCxVQUFRLEVBQUU7QUFDVG5GLFdBQU8sRUFBRSxrQ0FEQTtBQUVUL0UsTUFBRSxFQUFFO0FBRks7QUFoQlgsQ0F4Q29CLEVBNkRwQjtBQUNDaUwsUUFBTSxFQUFFLFlBQVk7QUFDbkJDLHNGQUFvQixDQUNuQixrQ0FEbUIsRUFFbkIsV0FGbUIsQ0FBcEI7QUFJQSxXQUFPQyxrRkFBb0IsQ0FDMUIsa0NBRDBCLEVBRTFCckIsY0FGMEIsQ0FBM0I7QUFJQSxHQVZGO0FBV0MxRixJQUFFLEVBQUUsbUJBWEw7QUFZQzRGLE1BQUksRUFBRSxpQkFaUDtBQWFDQyxTQUFPLEVBQUUsK0JBYlY7QUFjQzlCLGdCQUFjLEVBQUUsY0FkakI7QUFlQ2dDLGNBQVksRUFBRSw2QkFmZjtBQWdCQ0QsVUFBUSxFQUFFO0FBQ1RuRixXQUFPLEVBQUUsa0NBREE7QUFFVC9FLE1BQUUsRUFBRTtBQUZLO0FBaEJYLENBN0RvQixFQWtGcEI7QUFDQ29FLElBQUUsRUFBRSxzQkFETDtBQUVDNEYsTUFBSSxFQUFFLHlCQUZQO0FBR0NDLFNBQU8sRUFBRSxzQ0FIVjtBQUlDOUIsZ0JBQWMsRUFBRSxnQkFKakI7QUFLQzBDLGFBQVcsRUFBRTtBQUxkLENBbEZvQixFQXlGcEI7QUFDQ0ksUUFBTSxFQUFFLFlBQVk7QUFDbkJDLHNGQUFvQixDQUNuQix1Q0FEbUIsRUFFbkIsV0FGbUIsQ0FBcEI7QUFJQSxXQUFPLElBQVA7QUFDQSxHQVBGO0FBUUM5RyxJQUFFLEVBQUUsd0JBUkw7QUFTQzRGLE1BQUksRUFBRSwyQkFUUDtBQVVDQyxTQUFPLEVBQUUsK0JBVlY7QUFXQzlCLGdCQUFjLEVBQUUsZ0JBWGpCO0FBWUNnQyxjQUFZLEVBQUUsNkJBWmY7QUFhQ0QsVUFBUSxFQUFFO0FBQ1RuRixXQUFPLEVBQUUsdUNBREE7QUFFVC9FLE1BQUUsRUFBRTtBQUZLO0FBYlgsQ0F6Rm9CLEVBMkdwQjtBQUNDaUwsUUFBTSxFQUFFLFlBQVk7QUFDbkJDLHNGQUFvQixDQUNuQixrQ0FEbUIsRUFFbkIsV0FGbUIsQ0FBcEI7QUFJQSxXQUFPLElBQVA7QUFDQSxHQVBGO0FBUUM5RyxJQUFFLEVBQUUsc0JBUkw7QUFTQzRGLE1BQUksRUFBRSx5QkFUUDtBQVVDQyxTQUFPLEVBQUUsK0JBVlY7QUFXQzlCLGdCQUFjLEVBQUUsZ0JBWGpCO0FBWUNnQyxjQUFZLEVBQUUsNkJBWmY7QUFhQ0QsVUFBUSxFQUFFO0FBQ1RuRixXQUFPLEVBQUUsa0NBREE7QUFFVC9FLE1BQUUsRUFBRTtBQUZLO0FBYlgsQ0EzR29CLEVBNkhwQjtBQUNDaUwsUUFBTSxFQUFFLFlBQVk7QUFDbkJDLHNGQUFvQixDQUNuQixtQ0FEbUIsRUFFbkIsV0FGbUIsQ0FBcEI7QUFJQUUscUZBQW1CLENBQUMsK0JBQUQsRUFBa0MsV0FBbEMsQ0FBbkI7QUFDQSxXQUFPLElBQVA7QUFDQSxHQVJGO0FBU0NoSCxJQUFFLEVBQUUsbUJBVEw7QUFVQzRGLE1BQUksRUFBRSx1QkFWUDtBQVdDQyxTQUFPLEVBQUUsK0JBWFY7QUFZQzlCLGdCQUFjLEVBQUUsa0JBWmpCO0FBYUMwQyxhQUFXLEVBQUUsa0JBYmQ7QUFjQ1gsVUFBUSxFQUFFO0FBQ1RuRixXQUFPLEVBQUUsbUNBREE7QUFFVC9FLE1BQUUsRUFBRTtBQUZLO0FBZFgsQ0E3SG9CLEVBZ0pwQjtBQUNDaUwsUUFBTSxFQUFFLFlBQVk7QUFDbkJDLHNGQUFvQixDQUNuQixrQ0FEbUIsRUFFbkIsV0FGbUIsQ0FBcEI7QUFJQSxXQUFPLElBQVA7QUFDQSxHQVBGO0FBUUM5RyxJQUFFLEVBQUUsb0JBUkw7QUFTQzRGLE1BQUksRUFBRSx1QkFUUDtBQVVDQyxTQUFPLEVBQUUsc0NBVlY7QUFXQzlCLGdCQUFjLEVBQUUsa0JBWGpCO0FBWUNnQyxjQUFZLEVBQUUsNkJBWmY7QUFhQ0QsVUFBUSxFQUFFO0FBQ1RuRixXQUFPLEVBQUUsa0NBREE7QUFFVC9FLE1BQUUsRUFBRTtBQUZLO0FBYlgsQ0FoSm9CLEVBa0twQjtBQUNDaUwsUUFBTSxFQUFFLFlBQVk7QUFDbkJDLHNGQUFvQixDQUNuQiwyQ0FEbUIsRUFFbkIsV0FGbUIsQ0FBcEI7QUFJQSxXQUFPLElBQVA7QUFDQSxHQVBGO0FBUUM5RyxJQUFFLEVBQUUsbUJBUkw7QUFTQzRGLE1BQUksRUFBRSxzQkFUUDtBQVVDQyxTQUFPLEVBQUUsdUNBVlY7QUFXQzlCLGdCQUFjLEVBQUUsa0JBWGpCO0FBWUNnQyxjQUFZLEVBQUUsNkJBWmY7QUFhQ0QsVUFBUSxFQUFFO0FBQ1RuRixXQUFPLEVBQUUsaURBREE7QUFFVC9FLE1BQUUsRUFBRTtBQUZLO0FBYlgsQ0FsS29CLEVBb0xwQjtBQUNDaUwsUUFBTSxFQUFFLFlBQVk7QUFDbkJDLHNGQUFvQixDQUNuQix5Q0FEbUIsRUFFbkIsV0FGbUIsQ0FBcEI7QUFJQSxXQUFPLElBQVA7QUFDQSxHQVBGO0FBUUM5RyxJQUFFLEVBQUUsMEJBUkw7QUFTQzRGLE1BQUksRUFBRSw2QkFUUDtBQVVDQyxTQUFPLEVBQUUsdUNBVlY7QUFXQzlCLGdCQUFjLEVBQUUsa0JBWGpCO0FBWUNnQyxjQUFZLEVBQUUsNkJBWmY7QUFhQ0QsVUFBUSxFQUFFO0FBQ1RuRixXQUFPLEVBQUUseUJBREE7QUFFVC9FLE1BQUUsRUFBRTtBQUZLO0FBYlgsQ0FwTG9CLEVBc01wQjtBQUNDaUwsUUFBTSxFQUFFLFlBQVk7QUFDbkJDLHNGQUFvQixDQUNuQixvQ0FEbUIsRUFFbkIsV0FGbUIsQ0FBcEI7QUFJQSxXQUFPLElBQVA7QUFDQSxHQVBGO0FBUUM5RyxJQUFFLEVBQUUscUJBUkw7QUFTQzRGLE1BQUksRUFBRSx3QkFUUDtBQVVDQyxTQUFPLEVBQUUsdUNBVlY7QUFXQzlCLGdCQUFjLEVBQUUsa0JBWGpCO0FBWUNnQyxjQUFZLEVBQUUsNkJBWmY7QUFhQ0QsVUFBUSxFQUFFO0FBQ1RuRixXQUFPLEVBQUUsb0NBREE7QUFFVC9FLE1BQUUsRUFBRTtBQUZLO0FBYlgsQ0F0TW9CLEVBd05wQjtBQUNDaUwsUUFBTSxFQUFFLFlBQVk7QUFDbkJDLHNGQUFvQixDQUNuQixtQ0FEbUIsRUFFbkIsV0FGbUIsQ0FBcEI7QUFJQSxXQUFPQyxrRkFBb0IsQ0FDMUIsd0VBRDBCLEVBRTFCeEIsdUJBRjBCLENBQTNCO0FBSUEsR0FWRjtBQVdDdkYsSUFBRSxFQUFFLG1CQVhMO0FBWUM0RixNQUFJLEVBQUUsc0JBWlA7QUFhQ0MsU0FBTyxFQUFFLHVDQWJWO0FBY0M5QixnQkFBYyxFQUFFLGtCQWRqQjtBQWVDZ0MsY0FBWSxFQUFFLDZCQWZmO0FBZ0JDRCxVQUFRLEVBQUU7QUFDVG5GLFdBQU8sRUFBRSxtQ0FEQTtBQUVUL0UsTUFBRSxFQUFFO0FBRks7QUFoQlgsQ0F4Tm9CLEVBNk9wQjtBQUNDaUwsUUFBTSxFQUFFLFlBQVk7QUFDbkIsV0FBT0Usa0ZBQW9CLENBQzFCLHdFQUQwQixFQUUxQnZCLHFCQUYwQixDQUEzQjtBQUlBLEdBTkY7QUFPQ3hGLElBQUUsRUFBRSxnQkFQTDtBQVFDNEYsTUFBSSxFQUFFLG9CQVJQO0FBU0NDLFNBQU8sRUFBRSx1Q0FUVjtBQVVDOUIsZ0JBQWMsRUFBRSxrQkFWakI7QUFXQ2dDLGNBQVksRUFBRSw2QkFYZjtBQVlDRCxVQUFRLEVBQUU7QUFDVG5GLFdBQU8sRUFBRSxvQ0FEQTtBQUVUL0UsTUFBRSxFQUFFO0FBRks7QUFaWCxDQTdPb0IsRUErUHBCO0FBQ0NvRSxJQUFFLEVBQUUsV0FETDtBQUVDNEYsTUFBSSxFQUFFLGVBRlA7QUFHQ0MsU0FBTyxFQUFFLHVDQUhWO0FBSUM5QixnQkFBYyxFQUFFLGtCQUpqQjtBQUtDZ0MsY0FBWSxFQUFFLDZCQUxmO0FBTUNELFVBQVEsRUFBRTtBQUNUbkYsV0FBTyxFQUFFLGlDQURBO0FBRVQvRSxNQUFFLEVBQUU7QUFGSztBQU5YLENBL1BvQixFQTBRcEI7QUFDQ29FLElBQUUsRUFBRSxNQURMO0FBRUM0RixNQUFJLEVBQUUsZUFGUDtBQUdDQyxTQUFPLEVBQUUsdUNBSFY7QUFJQzlCLGdCQUFjLEVBQUUsa0JBSmpCO0FBS0NnQyxjQUFZLEVBQUUsNkJBTGY7QUFNQ0QsVUFBUSxFQUFFO0FBQ1RuRixXQUFPLEVBQUUsaUNBREE7QUFFVC9FLE1BQUUsRUFBRTtBQUZLO0FBTlgsQ0ExUW9CLEVBcVJwQjtBQUNDb0UsSUFBRSxFQUFFLG9CQURMO0FBRUNrRyxPQUFLLEVBQUUsd0JBRlI7QUFHQ04sTUFBSSxFQUFFLHVCQUhQO0FBSUM3QixnQkFBYyxFQUFFLGtCQUpqQjtBQUtDa0QsY0FBWSxFQUFFLFFBTGY7QUFNQ2xCLGNBQVksRUFBRSxTQU5mO0FBT0NVLGFBQVcsRUFBRSwwQkFQZDtBQVFDQyxrQkFBZ0IsRUFBRSxRQVJuQjtBQVNDQyxlQUFhLEVBQUU7QUFUaEIsQ0FyUm9CLENBQWQsQzs7Ozs7Ozs7Ozs7O0FDekVQO0FBQWU7QUFDZE8sV0FBUyxFQUFFO0FBQ1ZoQixTQUFLLEVBQUUsaUJBREc7QUFFVk4sUUFBSSxFQUFFO0FBRkksR0FERztBQUtkdUIsbUJBQWlCLEVBQUU7QUFDbEJqQixTQUFLLEVBQUUsZ0NBRFc7QUFFbEJOLFFBQUksRUFBRTtBQUZZLEdBTEw7QUFTZHdCLFNBQU8sRUFBRTtBQUNSeEIsUUFBSSxFQUFFO0FBREUsR0FUSztBQVlkeUIsWUFBVSxFQUFFO0FBQ1h6QixRQUFJLEVBQUU7QUFESyxHQVpFO0FBZWQwQixvQkFBa0IsRUFBRTtBQUNuQjFCLFFBQUksRUFBRTtBQURhLEdBZk47QUFrQmQyQixzQkFBb0IsRUFBRTtBQUNyQjNCLFFBQUksRUFBRztBQURjLEdBbEJSO0FBcUJkNEIsb0JBQWtCLEVBQUU7QUFDbkI1QixRQUFJLEVBQUc7QUFEWSxHQXJCTjtBQXdCZDZCLGtCQUFnQixFQUFFO0FBQ2pCN0IsUUFBSSxFQUFFO0FBRFcsR0F4Qko7QUEyQmQ4QixvQkFBa0IsRUFBRTtBQUNuQjlCLFFBQUksRUFBRTtBQURhLEdBM0JOO0FBOEJkK0IsZ0JBQWMsRUFBRTtBQUNmL0IsUUFBSSxFQUFFO0FBRFMsR0E5QkY7QUFpQ2RnQyxzQkFBb0IsRUFBRTtBQUNyQmhDLFFBQUksRUFBRTtBQURlLEdBakNSO0FBb0NkaUMsa0JBQWdCLEVBQUU7QUFDakJqQyxRQUFJLEVBQUU7QUFEVyxHQXBDSjtBQXVDZGtDLGlCQUFlLEVBQUU7QUFDaEJsQyxRQUFJLEVBQUU7QUFEVSxHQXZDSDtBQTBDZG1DLHdCQUFzQixFQUFFO0FBQ3ZCbkMsUUFBSSxFQUFFO0FBRGlCLEdBMUNWO0FBNkNkb0MsbUJBQWlCLEVBQUU7QUFDbEJwQyxRQUFJLEVBQUU7QUFEWSxHQTdDTDtBQWdEZHFDLGlCQUFlLEVBQUU7QUFDaEJyQyxRQUFJLEVBQUU7QUFEVSxHQWhESDtBQW1EZHNDLGVBQWEsRUFBRTtBQUNkdEMsUUFBSSxFQUFFO0FBRFEsR0FuREQ7QUFzRGR1QyxpQkFBZSxFQUFFO0FBQ2hCdkMsUUFBSSxFQUFFO0FBRFUsR0F0REg7QUF5RGR3QyxVQUFRLEVBQUU7QUFDVHhDLFFBQUksRUFBRTtBQURHLEdBekRJO0FBNERkeUMsVUFBUSxFQUFFO0FBQ1R6QyxRQUFJLEVBQUU7QUFERyxHQTVESTtBQStEZDBDLGtCQUFnQixFQUFFO0FBQ2pCcEMsU0FBSyxFQUFFLG9EQURVO0FBRWpCTixRQUFJLEVBQUU7QUFGVyxHQS9ESjtBQW1FZDdELHNCQUFvQixFQUFFO0FBQ3JCbUUsU0FBSyxFQUFFLGlDQURjO0FBRXJCTixRQUFJLEVBQUU7QUFGZSxHQW5FUjtBQXVFZEQsaUJBQWUsRUFBRTtBQUNoQkMsUUFBSSxFQUFFO0FBRFUsR0F2RUg7QUEwRWRJLHdCQUFzQixFQUFFO0FBQ3ZCSixRQUFJLEVBQUU7QUFEaUIsR0ExRVY7QUE2RWRLLGNBQVksRUFBRTtBQUNiTCxRQUFJLEVBQ0gseUNBQ0E7QUFIWSxHQTdFQTtBQWtGZHBDLGFBQVcsRUFBRTtBQUNaK0UsVUFBTSxFQUFFLFNBREk7QUFFWkMsY0FBVSxFQUFFLGdDQUZBO0FBR1pDLGVBQVcsRUFDViw2REFKVztBQUtaQyxzQkFBa0IsRUFBRSxxQkFMUjtBQU1aQyxpQkFBYSxFQUFFLHVDQU5IO0FBT1pDLFFBQUksRUFBRSxNQVBNO0FBUVpDLHVCQUFtQixFQUNsQiwwREFUVztBQVVaQyxnQkFBWSxFQUNYLHFEQVhXO0FBWVpDLGVBQVcsRUFBRSwrQkFaRDtBQWFaQyxjQUFVLEVBQUU7QUFiQSxHQWxGQztBQWlHZEMsUUFBTSxFQUFFO0FBQ1BDLFFBQUksRUFBRTtBQURDO0FBakdNLENBQWYsRTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1uQyxvQkFBb0IsR0FBRyxDQUFDbkgsSUFBRCxFQUFPdUosYUFBUCxLQUF5QjtBQUM1RCxRQUFNQyxhQUFhLEdBQUcxTixRQUFRLENBQUM4QyxhQUFULENBQXVCb0IsSUFBdkIsQ0FBdEI7QUFDQSxRQUFNeUosa0JBQWtCLEdBQUdELGFBQWEsQ0FBQzFNLEtBQXpDO0FBRUEsU0FBTzJNLGtCQUFrQixLQUFLRixhQUE5QjtBQUNBLENBTE07QUFPQSxNQUFNbkMsbUJBQW1CLEdBQUcsQ0FBQ3BILElBQUQsRUFBTzBKLGdCQUFQLEtBQTRCO0FBQzlELFFBQU1GLGFBQWEsR0FBRzFOLFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUJvQixJQUF2QixDQUF0QjtBQUNBLFFBQU0ySixhQUFhLEdBQUc3TixRQUFRLENBQUM4QyxhQUFULENBQXVCOEssZ0JBQXZCLENBQXRCOztBQUVBLE1BQUlGLGFBQUosRUFBbUI7QUFDbEJHLGlCQUFhLENBQUN6SyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixvQkFBNUI7QUFDQSxHQUZELE1BRU87QUFDTndLLGlCQUFhLENBQUN6SyxTQUFkLENBQXdCRSxNQUF4QixDQUErQixvQkFBL0I7QUFDQTtBQUNELENBVE07QUFXQSxNQUFNd0ssY0FBYyxHQUFHLENBQUNDLFFBQUQsRUFBV0gsZ0JBQVgsS0FBZ0M7QUFDN0QsUUFBTUksTUFBTSxHQUFHLEVBQWY7QUFFQUQsVUFBUSxDQUFDOUssT0FBVCxDQUFrQmlCLElBQUQsSUFBVTtBQUMxQixRQUFJLENBQUNBLElBQUksQ0FBQ2xELEtBQVYsRUFBaUI7QUFDaEJnTixZQUFNLENBQUMzSixJQUFQLENBQVlILElBQVo7QUFDQTtBQUNELEdBSkQ7O0FBTUEsTUFBSThKLE1BQU0sQ0FBQ0MsS0FBUCxDQUFjcEgsRUFBRCxJQUFRQSxFQUFFLEtBQUssSUFBNUIsQ0FBSixFQUF1QztBQUN0QytHLG9CQUFnQixDQUFDeEssU0FBakIsQ0FBMkJFLE1BQTNCLENBQWtDLG9CQUFsQztBQUNBLEdBRkQsTUFFTztBQUNOc0ssb0JBQWdCLENBQUN4SyxTQUFqQixDQUEyQkMsR0FBM0IsQ0FBK0Isb0JBQS9CO0FBQ0E7QUFDRCxDQWRNO0FBZ0JBLE1BQU0rSCxvQkFBb0IsR0FBRyxDQUFDbkcsT0FBRCxFQUFVaUosS0FBVixLQUFvQjtBQUN2RCxRQUFNQyxtQkFBbUIsR0FBR25PLFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUJtQyxPQUF2QixDQUE1QjtBQUNBLFFBQU1tSixrQkFBa0IsR0FBR0QsbUJBQW1CLENBQUNFLFVBQXBCLENBQ3pCckwsZ0JBRHlCLENBQ1A7QUFDckIsc0RBRjRCLENBQTNCO0FBR0EsUUFBTTZLLGFBQWEsR0FBRzdOLFFBQVEsQ0FBQzhDLGFBQVQsQ0FBdUJvTCxLQUF2QixDQUF0Qjs7QUFFQSxNQUFJRSxrQkFBa0IsSUFBSUEsa0JBQWtCLENBQUNFLE1BQW5CLElBQTZCLENBQXZELEVBQTBEO0FBQ3pEUixrQkFBYyxDQUFDTSxrQkFBRCxFQUFxQlAsYUFBckIsQ0FBZDtBQUNBTyxzQkFBa0IsQ0FBQ25MLE9BQW5CLENBQTRCNEQsRUFBRCxJQUFRO0FBQ2xDQSxRQUFFLENBQUMxRCxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixNQUFNO0FBQ2xDMkssc0JBQWMsQ0FBQ00sa0JBQUQsRUFBcUJQLGFBQXJCLENBQWQ7QUFDQSxPQUZEO0FBR0EsS0FKRDtBQUtBO0FBQ0QsQ0FmTSxDOzs7Ozs7Ozs7Ozs7QUNsQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFFQSxNQUFNVSxpQkFBaUIsR0FBRyxDQUFDekksZ0JBQUQsRUFBbUJnRCxTQUFuQixFQUE4QkQsSUFBOUIsS0FBdUM7QUFDaEUsTUFBSUEsSUFBSSxDQUFDNEIsYUFBVCxFQUF3QjtBQUN2QixXQUFPNUIsSUFBSSxDQUFDNEIsYUFBTCxDQUFtQnhHLEdBQW5CLENBQXdCdUssWUFBRCxLQUFtQixFQUNoRCxHQUFHQSxZQUQ2QztBQUVoRHRFLFVBQUksRUFBRTlDLGlEQUFJLENBQUNDLGtFQUFELEVBQXFCbUgsWUFBWSxDQUFDdEUsSUFBbEMsQ0FGc0M7QUFHaERRLFlBQU0sRUFBRSxNQUFNOEQsWUFBWSxDQUFDOUQsTUFBYixDQUFvQjVFLGdCQUFwQixFQUFzQ2dELFNBQXRDO0FBSGtDLEtBQW5CLENBQXZCLENBQVA7QUFLQTs7QUFFRCxTQUFPLENBQ047QUFDQ29CLFFBQUksRUFBRSw0QkFEUDtBQUVDUSxVQUFNLEVBQUUsTUFBTTtBQUNiNUUsc0JBQWdCLENBQUM0QixzQkFBakI7QUFDQSxLQUpGO0FBS0N5QyxXQUFPLEVBQUcsMEJBQXlCdEIsSUFBSSxDQUFDb0MsYUFBTCxJQUFzQixFQUFHO0FBTDdELEdBRE0sRUFRTjtBQUNDZixRQUFJLEVBQUUsaUNBRFA7QUFFQ1EsVUFBTSxFQUFFLE1BQU01RSxnQkFBZ0IsQ0FBQ1ksb0JBQWpCLEVBRmY7QUFHQ3lELFdBQU8sRUFBRyw4Q0FDVHRCLElBQUksQ0FBQ21DLGdCQUFMLElBQXlCLEVBQ3pCO0FBTEYsR0FSTSxFQWVOO0FBQ0NkLFFBQUksRUFBRXJCLElBQUksQ0FBQ2lDLFdBQUwsR0FDSDFELGlEQUFJLENBQUNDLGtFQUFELEVBQXFCd0IsSUFBSSxDQUFDaUMsV0FBMUIsQ0FERCxHQUVIMUQsaURBQUksQ0FBQ0Msa0VBQUQsRUFBcUIsb0JBQXJCLENBSFI7QUFJQ3dELGFBQVMsRUFBRSxJQUpaO0FBS0NWLFdBQU8sRUFBRyxHQUFFdEIsSUFBSSxDQUFDMEMsWUFBTCxJQUFxQixFQUFHLEVBTHJDOztBQU1DYixVQUFNLEdBQUc7QUFDUixZQUFNOUQsSUFBSSxHQUFHZCxnQkFBZ0IsQ0FBQ2MsSUFBOUI7O0FBRUEsVUFBSWtDLFNBQVMsS0FBSyxDQUFsQixFQUFxQjtBQUNwQmxDLFlBQUksQ0FBQ2dFLFFBQUw7QUFDQSxPQUZELE1BRU87QUFDTixZQUFJL0IsSUFBSSxDQUFDcUMsU0FBVCxFQUFvQjtBQUNuQnVELGdCQUFNLENBQUNqQixJQUFQLENBQWEsR0FBRTNFLElBQUksQ0FBQ3FDLFNBQVUsU0FBOUIsRUFBd0MsUUFBeEM7QUFDQXRFLGNBQUksQ0FBQ3NHLElBQUw7QUFFQTtBQUNBOztBQUVEdEcsWUFBSSxDQUFDOEgsSUFBTDtBQUNBO0FBQ0Q7O0FBckJGLEdBZk0sRUFzQ047QUFDQ3hFLFFBQUksRUFBRXJCLElBQUksQ0FBQ2tDLFdBQUwsR0FDSDNELGlEQUFJLENBQUNDLGtFQUFELEVBQXFCd0IsSUFBSSxDQUFDa0MsV0FBMUIsQ0FERCxHQUVIM0QsaURBQUksQ0FBQ0Msa0VBQUQsRUFBcUIsMkJBQXJCLENBSFI7QUFJQzhDLFdBQU8sRUFBRyxHQUFFdEIsSUFBSSxDQUFDd0IsWUFBTCxJQUFxQixFQUFHLEVBSnJDOztBQUtDSyxVQUFNLEdBQUc7QUFDUixZQUFNOUQsSUFBSSxHQUFHZCxnQkFBZ0IsQ0FBQ2MsSUFBOUI7O0FBRUEsVUFBSWtDLFNBQVMsS0FBS2hELGdCQUFnQixDQUFDRyxLQUFqQixDQUF1QnFJLE1BQXZCLEdBQWdDLENBQWxELEVBQXFEO0FBQ3BEMUgsWUFBSSxDQUFDZ0UsUUFBTDtBQUNBLE9BRkQsTUFFTztBQUNOLFlBQUkvQixJQUFJLENBQUNxQyxTQUFULEVBQW9CO0FBQ25CdUQsZ0JBQU0sQ0FBQ2pCLElBQVAsQ0FBYSxHQUFFM0UsSUFBSSxDQUFDcUMsU0FBVSxTQUE5QixFQUF3QyxRQUF4QztBQUNBOztBQUNEdEUsWUFBSSxDQUFDc0csSUFBTDtBQUNBO0FBQ0Q7O0FBaEJGLEdBdENNLENBQVA7QUF5REEsQ0FsRUQ7O0FBb0VlLGdFQUFDakgsS0FBSyxHQUFHLEVBQVQsS0FDZEEsS0FBSyxDQUFDaEMsR0FBTixDQUFXNEUsSUFBRCxLQUFXLEVBQ3BCLEdBQUdBLElBRGlCO0FBRXBCMkIsT0FBSyxFQUFFM0IsSUFBSSxDQUFDMkIsS0FBTCxHQUFhcEQsaURBQUksQ0FBQ0Msa0VBQUQsRUFBcUJ3QixJQUFJLENBQUMyQixLQUExQixDQUFqQixHQUFvRCxJQUZ2QztBQUdwQk4sTUFBSSxFQUFFOUMsaURBQUksQ0FBQ0Msa0VBQUQsRUFBcUJ3QixJQUFJLENBQUNxQixJQUExQixDQUhVO0FBSXBCcEMsYUFBVyxFQUFFLENBQUNoQyxnQkFBRCxFQUFtQmdELFNBQW5CLEtBQ1p5RixpQkFBaUIsQ0FBQ3pJLGdCQUFELEVBQW1CZ0QsU0FBbkIsRUFBOEJELElBQTlCO0FBTEUsQ0FBWCxDQUFWLENBREQsRTs7Ozs7Ozs7Ozs7O0FDekVBO0FBQUE7QUFBQTtBQUNBLE1BQU1qQyxJQUFJLEdBQUcsSUFBSStILHlEQUFKLEVBQWI7QUFDQS9ILElBQUksQ0FBQzhCLFFBQUw7QUFDQWtHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEtBQUs7QUFDaEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLDJEQUEyRDs7O0FBRzNEOztBQUVBO0FBQ0E7QUFDQSxLQUFLLFlBQVk7QUFDakI7O0FBRUE7QUFDQSwyRkFBMkYsU0FBUztBQUNwRyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUMsTUFBTTs7QUFFUDtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSEFBc0g7O0FBRXRIO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSSxFQUFFOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBEOztBQUUxRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsc0NBQXNDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDBEQUEwRDtBQUMxRCw2RkFBNkY7QUFDN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHLElBQUk7QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxRQUFRO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtRUFBbUU7QUFDbkU7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGO0FBQzVGO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEU7QUFDOUU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBSztBQUNoQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtEQUErRDtBQUMvRDtBQUNBOzs7QUFHQSxtQkFBbUIsNkJBQTZCO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLFlBQVk7OztBQUdiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix1QkFBdUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQ0FBbUMsd0JBQXdCO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUEscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsWUFBWTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxZQUFZOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxZQUFZOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLFlBQVk7OztBQUdiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJtb2xsaWUtYWRtaW4tZW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9tb2xsaWUtYWRtaW4vXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uLy4uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2VudHJ5LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuL2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0ICcuL2pzL21haW4nO1xuIiwiaW1wb3J0ICcuL21vbGxpZVBheW1lbnRzL21haW4nO1xuaW1wb3J0ICcuL29uYm9hcmRpbmdXaXphcmQvbWFpbic7XG4iLCJcbiQoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG1vbGxpZUZvcm1JbmNsdWRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9sbGllLXBheW1lbnQtZm9ybVwiKTtcblxuICAgIGlmICghbW9sbGllRm9ybUluY2x1ZGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAkKFwiI2dldF9tZXRob2RzXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGZvcm0gPSAkKFwiLnVpLmZvcm1cIik7XG4gICAgICAgIGZvcm0uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIHVybDogJCh0aGlzKS5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcudWkuZHJvcGRvd24nKS5kcm9wZG93bigpO1xuXG4gICAgJChcIi5mb3JtX2J1dHRvbi0tZGVsZXRlLWltZ1wiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgJCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgZm9ybSA9ICQoXCIudWkuZm9ybVwiKTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9ICQodGhpcykuZGF0YSgndmFsdWUnKTtcbiAgICAgICAgICAgIGZvcm0uYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7bWV0aG9kOiB2YWx1ZX0sXG4gICAgICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcbiAgICAgICAgICAgICAgICB1cmw6ICQodGhpcykuZGF0YSgndXJsJyksXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICAkKFwiLmJpdGJhZy1tb2xsaWUtY29tcG9uZW50c1wiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJCgnLmJpdGJhZy1zaW5nbGUtY2xpY2stcGF5bWVudCcpLnByb3AoJ2NoZWNrZWQnLCAhJCh0aGlzKS5pcygnOmNoZWNrZWQnKSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgJChcIi5iaXRiYWctc2luZ2xlLWNsaWNrLXBheW1lbnRcIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoJy5iaXRiYWctbW9sbGllLWNvbXBvbmVudHMnKS5wcm9wKCdjaGVja2VkJywgISQodGhpcykuaXMoJzpjaGVja2VkJykpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgICQoJ1tpZCQ9XCJfcGF5bWVudFR5cGVcIl0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBzZXRQYXltZW50RGVzY3JpcHRpb24oJCh0aGlzKSwgaW5kZXgpO1xuXG4gICAgICAgICQodGhpcykub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgc2V0UGF5bWVudERlc2NyaXB0aW9uKCQoZXZlbnQudGFyZ2V0KSwgaW5kZXgpO1xuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc2V0UGF5bWVudERlc2NyaXB0aW9uKHNlbGVjdCkge1xuICAgICAgICBjb25zdCAkdGFyZ2V0TWV0aG9kID0gc2VsZWN0LmNsb3Nlc3QoJy5qcy1kcmFnZ2FibGUnKTtcbiAgICAgICAgY29uc3QgJGlucHV0T3JkZXJOdW1iZXIgPSAkdGFyZ2V0TWV0aG9kLmZpbmQoJ1tpZCQ9XCJfcGF5bWVudERlc2NyaXB0aW9uXCJdJyk7XG4gICAgICAgIGNvbnN0ICRkZXNjcmlwdGlvbk9yZGVyTnVtYmVyID0gJHRhcmdldE1ldGhvZC5maW5kKCdbaWRePVwicGF5bWVudF9kZXNjcmlwdGlvbl9cIl0nKTtcblxuICAgICAgICBpZiAoc2VsZWN0LmZpbmQoJzpzZWxlY3RlZCcpLnZhbCgpID09PSAnUEFZTUVOVF9BUEknKSB7XG4gICAgICAgICAgICAkaW5wdXRPcmRlck51bWJlci5zaG93KCk7XG4gICAgICAgICAgICAkZGVzY3JpcHRpb25PcmRlck51bWJlci5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkaW5wdXRPcmRlck51bWJlci5oaWRlKCk7XG4gICAgICAgICAgICAkZGVzY3JpcHRpb25PcmRlck51bWJlci5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgICQoJ1tpZCQ9XCJfcGF5bWVudFN1cmNoYXJnZUZlZV90eXBlXCJdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkKHRoaXMpLmZpbmQoXCI6c2VsZWN0ZWRcIikudmFsKCk7XG4gICAgICAgIHNldFBheW1lbnRGZWVGaWVsZHModmFsdWUsIGluZGV4KTtcblxuICAgICAgICAkKHRoaXMpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICBzZXRQYXltZW50RmVlRmllbGRzKHZhbHVlLCBpbmRleCk7XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzZXRQYXltZW50RmVlRmllbGRzKHZhbHVlLCBpbmRleCkge1xuICAgICAgICBjb25zdCBmaXhlZEFtb3VudCA9ICdzeWxpdXNfcGF5bWVudF9tZXRob2RfZ2F0ZXdheUNvbmZpZ19tb2xsaWVHYXRld2F5Q29uZmlnXycrIGluZGV4ICsnX3BheW1lbnRTdXJjaGFyZ2VGZWVfZml4ZWRBbW91bnQnO1xuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gJ3N5bGl1c19wYXltZW50X21ldGhvZF9nYXRld2F5Q29uZmlnX21vbGxpZUdhdGV3YXlDb25maWdfJysgaW5kZXggKydfcGF5bWVudFN1cmNoYXJnZUZlZV9wZXJjZW50YWdlJztcbiAgICAgICAgY29uc3Qgc3VyY2hhcmdlTGltaXQgPSAnc3lsaXVzX3BheW1lbnRfbWV0aG9kX2dhdGV3YXlDb25maWdfbW9sbGllR2F0ZXdheUNvbmZpZ18nKyBpbmRleCArJ19wYXltZW50U3VyY2hhcmdlRmVlX3N1cmNoYXJnZUxpbWl0JztcblxuICAgICAgICBpZiAodmFsdWUgPT09ICdub19mZWUnKSB7XG4gICAgICAgICAgICAkKCdsYWJlbFtmb3I9JytmaXhlZEFtb3VudCsnXSwgaW5wdXQjJytmaXhlZEFtb3VudCsnJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnbGFiZWxbZm9yPScrcGVyY2VudGFnZSsnXSwgaW5wdXQjJytwZXJjZW50YWdlKycnKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCdsYWJlbFtmb3I9JytzdXJjaGFyZ2VMaW1pdCsnXSwgaW5wdXQjJytzdXJjaGFyZ2VMaW1pdCsnJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ3BlcmNlbnRhZ2UnKSB7XG4gICAgICAgICAgICAkKCdsYWJlbFtmb3I9JytwZXJjZW50YWdlKyddLCBpbnB1dCMnK3BlcmNlbnRhZ2UrJycpLnNob3coKTtcbiAgICAgICAgICAgICQoJ2xhYmVsW2Zvcj0nK3N1cmNoYXJnZUxpbWl0KyddLCBpbnB1dCMnK3N1cmNoYXJnZUxpbWl0KycnKS5zaG93KCk7XG4gICAgICAgICAgICAkKCdsYWJlbFtmb3I9JytmaXhlZEFtb3VudCsnXSwgaW5wdXQjJytmaXhlZEFtb3VudCsnJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ2ZpeGVkX2ZlZScpIHtcbiAgICAgICAgICAgICQoJ2xhYmVsW2Zvcj0nK2ZpeGVkQW1vdW50KyddLCBpbnB1dCMnK2ZpeGVkQW1vdW50KycnKS5zaG93KCk7XG4gICAgICAgICAgICAkKCdsYWJlbFtmb3I9JytwZXJjZW50YWdlKyddLCBpbnB1dCMnK3BlcmNlbnRhZ2UrJycpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJ2xhYmVsW2Zvcj0nK3N1cmNoYXJnZUxpbWl0KyddLCBpbnB1dCMnK3N1cmNoYXJnZUxpbWl0KycnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAnZml4ZWRfZmVlX2FuZF9wZXJjZW50YWdlJykge1xuICAgICAgICAgICAgJCgnbGFiZWxbZm9yPScrZml4ZWRBbW91bnQrJ10sIGlucHV0IycrZml4ZWRBbW91bnQrJycpLnNob3coKTtcbiAgICAgICAgICAgICQoJ2xhYmVsW2Zvcj0nK3BlcmNlbnRhZ2UrJ10sIGlucHV0IycrcGVyY2VudGFnZSsnJykuc2hvdygpO1xuICAgICAgICAgICAgJCgnbGFiZWxbZm9yPScrc3VyY2hhcmdlTGltaXQrJ10sIGlucHV0Iycrc3VyY2hhcmdlTGltaXQrJycpLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICQoJ1tpZCQ9XCJfY291bnRyeV9yZXN0cmljdGlvblwiXScpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gJCh0aGlzKS5maW5kKFwiOnNlbGVjdGVkXCIpLnZhbCgpO1xuICAgICAgICBzZXRDb3VudHJ5UmVzdHJpY3Rpb24odmFsdWUsIGluZGV4KTtcblxuICAgICAgICAkKHRoaXMpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICBzZXRDb3VudHJ5UmVzdHJpY3Rpb24odmFsdWUsIGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzZXRDb3VudHJ5UmVzdHJpY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGV4Y2x1ZGVDb3VudHJpZXMgPSAkKCcjY291bnRyeS1leGNsdWRlZF8nICsgaW5kZXgpO1xuICAgICAgICBjb25zdCBhbGxvd0NvdW50cmllcyA9ICQoJyNjb3VudHJ5LWFsbG93ZWRfJyArIGluZGV4KTtcblxuICAgICAgICBpZiAodmFsdWUgPT09ICdBTExfQ09VTlRSSUVTJykge1xuICAgICAgICAgICAgZXhjbHVkZUNvdW50cmllcy5zaG93KCk7XG4gICAgICAgICAgICBhbGxvd0NvdW50cmllcy5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAnU0VMRUNURURfQ09VTlRSSUVTJykge1xuICAgICAgICAgICAgZXhjbHVkZUNvdW50cmllcy5oaWRlKCk7XG4gICAgICAgICAgICBhbGxvd0NvdW50cmllcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsImltcG9ydCAnLi9hcHAnO1xuaW1wb3J0ICcuL3Nob3dIaWRlQXBpS2V5cyc7XG5pbXBvcnQgJy4vc29ydGFibGUnO1xuaW1wb3J0ICcuL3Rlc3RBcGlLZXlzJztcbiIsIiQoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRlc3RBcGlLZXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwaV9rZXlfdGVzdFwiKTtcbiAgICBjb25zdCBsaXZlQXBpS2V5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcGlfa2V5X2xpdmVcIik7XG5cbiAgICAkKHRlc3RBcGlLZXlCdXR0b24pLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCB0ZXN0QXBpS2V5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN5bGl1c19wYXltZW50X21ldGhvZF9nYXRld2F5Q29uZmlnX2NvbmZpZ19hcGlfa2V5X3Rlc3RcIik7XG5cbiAgICAgICAgaWYgKHRlc3RBcGlLZXlJbnB1dC50eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgICB0ZXN0QXBpS2V5SW5wdXQudHlwZSA9ICd0ZXh0JztcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGVzdEFwaUtleUlucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xuICAgIH0pO1xuXG4gICAgJChsaXZlQXBpS2V5QnV0dG9uKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgbGl2ZUFwaUtleUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzeWxpdXNfcGF5bWVudF9tZXRob2RfZ2F0ZXdheUNvbmZpZ19jb25maWdfYXBpX2tleV9saXZlXCIpO1xuXG4gICAgICAgIGlmIChsaXZlQXBpS2V5SW5wdXQudHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAgICAgbGl2ZUFwaUtleUlucHV0LnR5cGUgPSAndGV4dCc7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpdmVBcGlLZXlJbnB1dC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICB9KTtcbn0pO1xuIiwiJChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zb3J0YWJsZScpO1xuXG4gIGlmICghY29udGFpbmVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgZHJhZ2dhYmxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1kcmFnZ2FibGUnKTtcblxuICBkcmFnZ2FibGVzLmZvckVhY2goZHJhZ2dhYmxlID0+IHtcbiAgICBkcmFnZ2FibGUuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKCkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgfSlcblxuICAgIGRyYWdnYWJsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xuICAgICAgZHJhZ2dhYmxlLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgICBjb25zdCBwYXlsb2FkID0gZ2V0UGF5bWVudE1ldGhvZFBvc2l0aW9ucygpO1xuICAgICAgY2hhbmdlUG9zaXRpb25BamF4QWN0aW9uKHBheWxvYWQpO1xuICAgIH0pO1xuICB9KVxuXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWZ0ZXJFbGVtZW50ID0gZ2V0RHJhZ0FmdGVyRWxlbWVudChjb250YWluZXIsIGV2ZW50LmNsaWVudFkpO1xuICAgIGNvbnN0IGRyYWdnYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcmFnZ2luZycpO1xuICAgIGlmIChhZnRlckVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyYWdnYWJsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoZHJhZ2dhYmxlLCBhZnRlckVsZW1lbnQpO1xuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBnZXRQYXltZW50TWV0aG9kUG9zaXRpb25zICgpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVzID0gWy4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZHJhZ2dhYmxlJyldO1xuICAgIGNvbnN0IHVwZGF0ZWRQb3NpdGlvbnMgPSBbXTtcblxuICAgIGRyYWdnYWJsZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXltZW50TWV0aG9kIH0gPSBpdGVtLmRhdGFzZXQ7XG4gICAgICB1cGRhdGVkUG9zaXRpb25zLnB1c2goeyBpZDogaW5kZXgsIG5hbWU6IHBheW1lbnRNZXRob2QgfSlcbiAgICB9KTtcblxuICAgIHJldHVybiB1cGRhdGVkUG9zaXRpb25zO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RHJhZ0FmdGVyRWxlbWVudChjb250YWluZXIsIHkpIHtcbiAgICBjb25zdCBkcmFnZ2FibGVFbGVtZW50cyA9IFsuLi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmpzLWRyYWdnYWJsZTpub3QoLmRyYWdnaW5nKScpXTtcblxuICAgIHJldHVybiBkcmFnZ2FibGVFbGVtZW50cy5yZWR1Y2UoKGNsb3Nlc3QsIGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBib3ggPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHkgLSBib3gudG9wIC0gYm94LmhlaWdodCAvIDI7XG4gICAgICBpZiAob2Zmc2V0IDwgMCAmJiBvZmZzZXQgPiBjbG9zZXN0Lm9mZnNldCkge1xuICAgICAgICByZXR1cm4geyBvZmZzZXQ6IG9mZnNldCwgZWxlbWVudDogY2hpbGQgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3Q7XG4gICAgICB9XG5cbiAgICB9LCB7IG9mZnNldDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZIH0pLmVsZW1lbnRcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZVBvc2l0aW9uQWpheEFjdGlvbihkYXRhKSB7XG4gICAgY29uc3QgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXltZW50X21ldGhvZHNcIikuZ2V0QXR0cmlidXRlKCdkYXRhLWFqYXgtdXJsJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogeydkYXRhJzogZGF0YX0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge30sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKCkge31cbiAgICB9KTtcbiAgfVxufSk7XG4iLCIkKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0ZXN0QXBpS2V5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIiB0ZXN0LWFwaS1rZXktYnV0dG9uXCIpO1xuXG4gICAgJCh0ZXN0QXBpS2V5QnV0dG9uKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGVzdEFwaURhdGFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGVzdC1hcGkta2V5LWRpdlwiKVxuICAgICAgICBjb25zdCB0ZXN0QXBpS2V5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzeWxpdXNfcGF5bWVudF9tZXRob2RfZ2F0ZXdheUNvbmZpZ19jb25maWdfYXBpX2tleV90ZXN0XCIpXG4gICAgICAgIGNvbnN0IGxpdmVBcGlLZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN5bGl1c19wYXltZW50X21ldGhvZF9nYXRld2F5Q29uZmlnX2NvbmZpZ19hcGlfa2V5X2xpdmVcIilcblxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICQodGhpcykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIHVybDogJCh0aGlzKS5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBhcGlfa2V5X3Rlc3Q6ICQodGVzdEFwaUtleSkudmFsKCksXG4gICAgICAgICAgICAgICAgYXBpX2tleV9saXZlOiAkKGxpdmVBcGlLZXkpLnZhbCgpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJCh0ZXN0QXBpRGF0YURpdikucmVtb3ZlQ2xhc3MoJ21lc3NhZ2UgcmVkJyk7XG5cbiAgICAgICAgICAgICAgICAkKHRlc3RBcGlLZXlCdXR0b24pLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgJCh0ZXN0QXBpS2V5QnV0dG9uKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICQodGVzdEFwaURhdGFEaXYpLmh0bWwoZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwiaW1wb3J0IFNoZXBoZXJkIGZyb20gJ3NoZXBoZXJkLmpzJztcbmltcG9ydCBfZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xuXG5pbXBvcnQge3N0ZXBzLCBzdGVwUXVpdENvbmZpcm1hdGlvbn0gZnJvbSAnLi9jb25maWcvc3RlcHMnO1xuaW1wb3J0IHNoZXBoZXJkQ29uZmlnIGZyb20gJy4vY29uZmlnL3NoZXBoZXJkQ29uZmlnJztcbmltcG9ydCBzdGVwRmFjdG9yeSBmcm9tICcuL2hlbHBlcnMvc3RlcEZhY3RvcnknO1xuaW1wb3J0IHdpemFyZFRyYW5zbGF0aW9ucyBmcm9tICcuL2NvbmZpZy93aXphcmRUcmFuc2xhdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBvbmJvYXJkaW5nV2l6YXJkIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0dG91clN0ZXBzID0gc3RlcHMsXG5cdFx0dG91ckNvbmZpZyA9IHNoZXBoZXJkQ29uZmlnLFxuXHRcdHRvdXJRdWl0Q29uZmlybWF0aW9uID0gc3RlcFF1aXRDb25maXJtYXRpb25cblx0KSB7XG5cdFx0dGhpcy5zdGVwcyA9IHN0ZXBGYWN0b3J5KHRvdXJTdGVwcyk7XG5cdFx0dGhpcy5zdGVwUXVpdENvbmZpcm1hdGlvbiA9IHN0ZXBGYWN0b3J5KHRvdXJRdWl0Q29uZmlybWF0aW9uKVswXTtcblx0XHR0aGlzLnRvdXJDb25maWcgPSB0b3VyQ29uZmlnO1xuXHRcdHRoaXMubmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW9uYm9hcmRpbmctd2l6YXJkJyk7XG5cdFx0dGhpcy5uYXZCYXJJdGVtcyA9IFtcblx0XHRcdC4uLnRoaXMubmF2YmFyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1vbmJvYXJkaW5nLXdpemFyZC1wcm9ncmVzcycpLFxuXHRcdF07XG5cdFx0dGhpcy5wcmV2aW91c1N0ZXBJbmRleCA9IDA7XG5cdH1cblxuXHRtb2RhbENvbGxhcHNlSGFuZGxlcigpIHtcblx0XHRjb25zdCBjdXJyZW50U3RlcCA9IHRoaXMudG91ci5jdXJyZW50U3RlcC5lbDtcblx0XHRjb25zdCBidXR0b25Db2xsYXBzZSA9IGN1cnJlbnRTdGVwLnF1ZXJ5U2VsZWN0b3IoJy5qcy10b3VyLWNvbGxhcHNlJyk7XG5cdFx0Y29uc3QgaXNDb2xsYXBzZWQgPSBbLi4uY3VycmVudFN0ZXAuY2xhc3NMaXN0XS5pbmNsdWRlcyhcblx0XHRcdCdzaGVwaGVyZC1lbGVtZW50LS1jb2xsYXBzZWQnXG5cdFx0KTtcblxuXHRcdGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2hlcGhlcmQtYnV0dG9uX19vcGVuJyk7XG5cdFx0ZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2pzLXNoZXBoZXJkLWV4cGFuZCcpO1xuXHRcdGV4cGFuZEJ1dHRvbi50ZXh0Q29udGVudCA9IF9nZXQod2l6YXJkVHJhbnNsYXRpb25zLCAnY29tbW9uLm9wZW4nKTtcblxuXHRcdGNvbnN0IHRleHRPcGVuID0gYnV0dG9uQ29sbGFwc2UucXVlcnlTZWxlY3RvcignLmpzLXNoZXBoZXJkLWV4cGFuZCcpO1xuXG5cdFx0aWYgKGlzQ29sbGFwc2VkKSB7XG5cdFx0XHRidXR0b25Db2xsYXBzZS5yZW1vdmVDaGlsZCh0ZXh0T3Blbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGJ1dHRvbkNvbGxhcHNlLmFwcGVuZENoaWxkKGV4cGFuZEJ1dHRvbik7XG5cdFx0fVxuXG5cdFx0Y3VycmVudFN0ZXAuY2xhc3NMaXN0LnRvZ2dsZShcblx0XHRcdCdzaGVwaGVyZC1lbGVtZW50LS1jb2xsYXBzZWQnLFxuXHRcdFx0IWlzQ29sbGFwc2VkXG5cdFx0KTtcblx0XHRjdXJyZW50U3RlcC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgIWlzQ29sbGFwc2VkKTtcblx0fTtcblxuXHRoYW5kbGVRdWl0Q29uZmlybWF0aW9uKCkge1xuXHRcdGNvbnN0IHJldHVyblN0ZXBJbmRleCA9IHRoaXMucHJldmlvdXNTdGVwSW5kZXg7XG5cblx0XHR0aGlzLnRvdXIuYWRkU3RlcCh7XG5cdFx0XHQuLi50aGlzLnN0ZXBRdWl0Q29uZmlybWF0aW9uLFxuXHRcdFx0YnV0dG9uczogdGhpcy5zdGVwUXVpdENvbmZpcm1hdGlvbi5zdGVwQnV0dG9ucyhcblx0XHRcdFx0dGhpcyxcblx0XHRcdFx0cmV0dXJuU3RlcEluZGV4XG5cdFx0XHQpLFxuXHRcdH0pO1xuXG5cdFx0dGhpcy50b3VyLnNob3coJ3N0ZXAtcXVpdC1jb25maXJtYXRpb24nLCB0cnVlKTtcblx0fTtcblxuXHRuYXZiYXJWaXNpYmlsaXR5SGFuZGxlcihpc0FjdGl2ZSkge1xuXHRcdHRoaXMubmF2YmFyLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScsICFpc0FjdGl2ZSk7XG5cdFx0dGhpcy5uYXZiYXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICFpc0FjdGl2ZSk7XG5cdH07XG5cblx0bmF2YmFyUHJvZ3Jlc3NIYW5kbGVyKCkge1xuXHRcdGNvbnN0IGN1cnJlbnRTdGVwUHJvZ3Jlc3MgPVxuXHRcdFx0dGhpcy50b3VyLmdldEN1cnJlbnRTdGVwKCkub3B0aW9ucy5oaWdobGlnaHRDbGFzcztcblxuXHRcdHRoaXMubmF2QmFySXRlbXMuZm9yRWFjaCgobmF2QmFySXRlbSkgPT4ge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuYXZCYXJJdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1uYXZpZ2F0aW9uLXN0ZXAnKSA9PT1cblx0XHRcdFx0Y3VycmVudFN0ZXBQcm9ncmVzc1xuXHRcdFx0KSB7XG5cdFx0XHRcdG5hdkJhckl0ZW0uY2xhc3NMaXN0LmFkZCgnb25ib2FyZGluZy13aXphcmRfX3N0ZXAtLWN1cnJlbnQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5hdkJhckl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnb25ib2FyZGluZy13aXphcmRfX3N0ZXAtLWN1cnJlbnQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRyZXN0YXJ0VG91ckxpc3RlbmVyKCkge1xuXHRcdGNvbnN0IHJlc3RhcnRUb3VyVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZXN0YXJ0LXRvdXInKTtcblxuXHRcdHJlc3RhcnRUb3VyVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRcdHRoaXMudG91ci5zdGFydCgpO1xuXHRcdFx0dGhpcy5uYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG5cdFx0fSk7XG5cdH07XG5cblx0aW5pdFRvdXIoKSB7XG5cdFx0aWYgKHRoaXMubmF2YmFyKSB7XG5cdFx0XHR0aGlzLnRvdXIgPSBuZXcgU2hlcGhlcmQuVG91cih7XG5cdFx0XHRcdC4uLnRoaXMudG91ckNvbmZpZyxcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnN0ZXBzLmZvckVhY2goKHN0ZXAsIHN0ZXBJbmRleCkgPT4ge1xuXHRcdFx0XHR0aGlzLnRvdXIuYWRkU3RlcCh7XG5cdFx0XHRcdFx0Li4uc3RlcCxcblx0XHRcdFx0XHRidXR0b25zOiBzdGVwLnN0ZXBCdXR0b25zKHRoaXMsIHN0ZXBJbmRleCksXG5cdFx0XHRcdFx0d2hlbjoge1xuXHRcdFx0XHRcdFx0c2hvdzogKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnByZXZpb3VzU3RlcEluZGV4ID1cblx0XHRcdFx0XHRcdFx0XHR0aGlzLnRvdXIuZ2V0Q3VycmVudFN0ZXAoKS5pZDtcblx0XHRcdFx0XHRcdFx0dGhpcy5uYXZiYXJQcm9ncmVzc0hhbmRsZXIoKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy50b3VyLm9uKCdjb21wbGV0ZScsICgpID0+IHtcblx0XHRcdFx0dGhpcy5uYXZiYXJWaXNpYmlsaXR5SGFuZGxlcihmYWxzZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy50b3VyLnN0YXJ0KCk7XG5cblx0XHRcdHRoaXMucmVzdGFydFRvdXJMaXN0ZW5lcigpO1xuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHR1c2VNb2RhbE92ZXJsYXk6IHRydWUsXG5cdGNvbmZpcm1DYW5jZWw6IGZhbHNlLFxuXHRrZXlib2FyZE5hdmlnYXRpb246IGZhbHNlLFxuXHRleGl0T25Fc2M6IGZhbHNlLFxuXHRkZWZhdWx0U3RlcE9wdGlvbnM6IHtcblx0XHRjbGFzczogJ29uYm9hcmRpbmdXaXphcmQtcG9wdXAnLFxuXHRcdGFycm93OiBmYWxzZSxcblx0XHRjYW5jZWxJY29uOiB7XG5cdFx0XHRlbmFibGVkOiBmYWxzZSxcblx0XHR9LFxuXHRcdHNjcm9sbFRvOiB7YmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcid9LFxuXHRcdG1vZGFsT3ZlcmxheU9wZW5pbmdSYWRpdXM6IDQsXG5cdH0sXG59O1xuIiwiaW1wb3J0IHtcblx0cGF5bWVudFR5cGVJbmRpY2F0b3IsXG5cdG1ldGhvZExvYWRJbmRpY2F0b3IsXG5cdGN1cnJlbnRTdGVwVmFsaWRhdG9yLFxufSBmcm9tICcuLi9oZWxwZXJzL2ZpbHRlck1ldGhvZCc7XG5cbmNvbnN0IHBheW1lbnRNZXRob2RQYXltZW50QXBpID0gJ1BBWU1FTlRfQVBJJztcbmNvbnN0IHBheW1lbnRNZXRob2RPcmRlckFwaSA9ICdPUkRFUl9BUEknO1xuY29uc3QgZW52aXJvbWVudFRlc3QgPSAnMCc7XG5jb25zdCBlbnZpcm9tZW50TGl2ZSA9ICcxJztcblxuZXhwb3J0IGNvbnN0IHN0ZXBQYXltZW50VHlwZSA9IHtcblx0aWQ6ICdzdGVwLXBheW1lbnQtdHlwZScsXG5cdHRleHQ6ICdzdGVwUGF5bWVudFR5cGUudGV4dCcsXG5cdGNsYXNzZXM6ICdzaGVwaGVyZC1lbGVtZW50LS1hbGlnbi1yaWdodCcsXG5cdGhpZ2hsaWdodENsYXNzOiAncGF5bWVudC1zZXR0aW5ncycsXG5cdGF0dGFjaFRvOiB7XG5cdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLXBheW1lbnRUeXBlJyxcblx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdH0sXG5cdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG59O1xuXG5leHBvcnQgY29uc3Qgc3RlcFBheW1lbnREZXNjcmlwdGlvbiA9IHtcblx0aWQ6ICdzdGVwLXBheW1lbnQtZGVzY3JpcHRpb24nLFxuXHR0ZXh0OiAnc3RlcFBheW1lbnREZXNjcmlwdGlvbi50ZXh0Jyxcblx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0YXR0YWNoVG86IHtcblx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtcGF5bWVudERlc2NyaXB0aW9uJyxcblx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdH0sXG5cdGhpZ2hsaWdodENsYXNzOiAncGF5bWVudC1zZXR0aW5ncycsXG5cdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG59O1xuXG5leHBvcnQgY29uc3Qgc3RlcE9yZGVyQXBpID0ge1xuXHRpZDogJ3N0ZXAtb3JkZXItYXBpJyxcblx0aGlnaGxpZ2h0Q2xhc3M6ICdwYXltZW50LXNldHRpbmdzJyxcblx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0dGV4dDogJ3N0ZXBPcmRlckFwaS50ZXh0Jyxcblx0YXR0YWNoVG86IHtcblx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtcGF5bWVudFR5cGUnLFxuXHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0fSxcblx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzdGVwUXVpdENvbmZpcm1hdGlvbiA9IFtcblx0e1xuXHRcdGlkOiAnc3RlcC1xdWl0LWNvbmZpcm1hdGlvbicsXG5cdFx0dGl0bGU6ICdzdGVwUXVpdENvbmZpcm1hdGlvbi50aXRsZScsXG5cdFx0dGV4dDogJ3N0ZXBRdWl0Q29uZmlybWF0aW9uLnRleHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAnaW50cm8nLFxuXHRcdGN1c3RvbUJ1dHRvbnM6IFtcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogJ3N0ZXBCdXR0b25zLnF1aXRDb25maXJtJyxcblx0XHRcdFx0YWN0aW9uOiAob25ib2FyZGluZ1dpemFyZCkgPT4ge1xuXHRcdFx0XHRcdG9uYm9hcmRpbmdXaXphcmQudG91ci5yZW1vdmVTdGVwKCdzdGVwLXF1aXQtY29uZmlybWF0aW9uJyk7XG5cdFx0XHRcdFx0b25ib2FyZGluZ1dpemFyZC50b3VyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNlY29uZGFyeTogdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHRleHQ6ICdzdGVwQnV0dG9ucy5xdWl0Q2FuY2VsJyxcblx0XHRcdFx0YWN0aW9uOiAob25ib2FyZGluZ1dpemFyZCwgc3RlcEluZGV4KSA9PiB7XG5cdFx0XHRcdFx0b25ib2FyZGluZ1dpemFyZC50b3VyLnNob3coc3RlcEluZGV4LCB0cnVlKTtcblx0XHRcdFx0XHRvbmJvYXJkaW5nV2l6YXJkLnRvdXIucmVtb3ZlU3RlcCgnc3RlcC1xdWl0LWNvbmZpcm1hdGlvbicpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRdLFxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHN0ZXBzID0gW1xuXHR7XG5cdFx0aWQ6ICdzdGVwLXN0YXJ0Jyxcblx0XHR0aXRsZTogJ3N0ZXBTdGFydC50aXRsZScsXG5cdFx0dGV4dDogJ3N0ZXBTdGFydC50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc2hlcGhlcmQtZWxlbWVudC0tZmlyc3QnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAnaW50cm8nLFxuXHRcdGJ0bkJhY2tUZXh0OiAnc3RlcEJ1dHRvbnMuc2tpcFdpemFyZCcsXG5cdFx0YnRuTmV4dFRleHQ6ICdzdGVwQnV0dG9ucy5zdGFydFdpemFyZCcsXG5cdFx0YnRuQ29sbGFwc2VDbGFzczogJ2Qtbm9uZScsXG5cdFx0YnRuQ2xvc2VDbGFzczogJ2Qtbm9uZScsXG5cdH0sXG5cdHtcblx0XHRpZDogJ3N0ZXAtbW9sbGllLWNvbm5lY3QnLFxuXHRcdHRpdGxlOiAnc3RlcE1vbGxpZUNvbm5lY3QudGl0bGUnLFxuXHRcdHRleHQ6ICdzdGVwTW9sbGllQ29ubmVjdC50ZXh0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ2ludHJvJyxcblx0XHRidG5CYWNrVGV4dDogJ3N0ZXBCdXR0b25zLmxvZ2luTW9sbGllQWNjb3VudCcsXG5cdFx0YnRuTmV4dFRleHQ6ICdzdGVwQnV0dG9ucy5jcmVhdGVNb2xsaWVBY2NvdW50Jyxcblx0XHRidG5Db2xsYXBzZUNsYXNzOiAnZC1ub25lJyxcblx0XHR1cmxNb2xsaWU6ICdodHRwczovL3d3dy5tb2xsaWUuY29tL2Rhc2hib2FyZCcsXG5cdH0sXG5cdHtcblx0XHRzaG93T246IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRTdGVwVmFsaWRhdG9yKFxuXHRcdFx0XHQnLmpzLW9uYm9hcmRpbmdXaXphcmQtZW52aXJvbm1lbnQnLFxuXHRcdFx0XHQnLnB1c2hhYmxlJ1xuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLWVudicsXG5cdFx0dGV4dDogJ3N0ZXBFbnYudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ2FwaS1zZXR0aW5ncycsXG5cdFx0YXR0YWNoVG86IHtcblx0XHRcdGVsZW1lbnQ6ICcuanMtb25ib2FyZGluZ1dpemFyZC1lbnZpcm9ubWVudCcsXG5cdFx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdFx0fSxcblx0XHRidG5OZXh0Q2xhc3M6ICdzaGVwaGVyZC1idXR0b24tLWFycm93LWRvd24nLFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy10d28tZmllbGRzLXRlc3QgLnJlcXVpcmVkLmZpZWxkJyxcblx0XHRcdFx0Jy5wdXNoYWJsZSdcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gcGF5bWVudFR5cGVJbmRpY2F0b3IoXG5cdFx0XHRcdCcuanMtb25ib2FyZGluZ1dpemFyZC1lbnZpcm9ubWVudCcsXG5cdFx0XHRcdGVudmlyb21lbnRUZXN0XG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLWFwaS1rZXktdGVzdCcsXG5cdFx0dGV4dDogJ3N0ZXBBcGlLZXkudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ2FwaS1zZXR0aW5ncycsXG5cdFx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLXByb2ZpbGUtYXBpJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLXByb2ZpbGUtYXBpJyxcblx0XHRcdFx0Jy5wdXNoYWJsZSdcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gcGF5bWVudFR5cGVJbmRpY2F0b3IoXG5cdFx0XHRcdCcuanMtb25ib2FyZGluZ1dpemFyZC1lbnZpcm9ubWVudCcsXG5cdFx0XHRcdGVudmlyb21lbnRMaXZlXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLWFwaS1rZXktbGl2ZScsXG5cdFx0dGV4dDogJ3N0ZXBBcGlLZXkudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ2FwaS1zZXR0aW5ncycsXG5cdFx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLXByb2ZpbGUtYXBpJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0aWQ6ICdzdGVwLWNoZWNrb3V0LWNvbmZpZycsXG5cdFx0dGV4dDogJ3N0ZXBDaGVja291dENvbmZpZy50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc3RlcC02IHNoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3N0b3JlLXNldHRpbmdzJyxcblx0XHRidG5OZXh0VGV4dDogJ3N0ZXBCdXR0b25zLm5leHQnLFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLW1vbGxpZUNvbXBvbmVudHMnLFxuXHRcdFx0XHQnLnB1c2hhYmxlJ1xuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLW1vbGxpZS1jb21wb25lbnRzJyxcblx0XHR0ZXh0OiAnc3RlcE1vbGxpZUNvbXBvbmVudHMudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3N0b3JlLXNldHRpbmdzJyxcblx0XHRidG5OZXh0Q2xhc3M6ICdzaGVwaGVyZC1idXR0b24tLWFycm93LWRvd24nLFxuXHRcdGF0dGFjaFRvOiB7XG5cdFx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtbW9sbGllQ29tcG9uZW50cycsXG5cdFx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdHNob3dPbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFN0ZXBWYWxpZGF0b3IoXG5cdFx0XHRcdCcuanMtb25ib2FyZGluZ1dpemFyZC1zaW5nbGVDbGljaycsXG5cdFx0XHRcdCcucHVzaGFibGUnXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHRpZDogJ3N0ZXAtbW9sbGllLXBheW1lbnRzJyxcblx0XHR0ZXh0OiAnc3RlcE1vbGxpZVBheW1lbnRzLnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzaGVwaGVyZC1lbGVtZW50LS1hbGlnbi1yaWdodCcsXG5cdFx0aGlnaGxpZ2h0Q2xhc3M6ICdzdG9yZS1zZXR0aW5ncycsXG5cdFx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLXNpbmdsZUNsaWNrJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLWxvYWQtbWV0aG9kcycsXG5cdFx0XHRcdCcucHVzaGFibGUnXG5cdFx0XHQpO1xuXHRcdFx0bWV0aG9kTG9hZEluZGljYXRvcignLmpzLXBheW1lbnQtbWV0aG9kLW5vdC1sb2FkZWQnLCAnLnB1c2hhYmxlJyk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdGlkOiAnc3RlcC1wYXltZW50cy1hcGknLFxuXHRcdHRleHQ6ICdzdGVwTWV0aG9kQ29uZmlnLnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzaGVwaGVyZC1lbGVtZW50LS1hbGlnbi1yaWdodCcsXG5cdFx0aGlnaGxpZ2h0Q2xhc3M6ICdwYXltZW50LXNldHRpbmdzJyxcblx0XHRidG5OZXh0VGV4dDogJ3N0ZXBCdXR0b25zLm5leHQnLFxuXHRcdGF0dGFjaFRvOiB7XG5cdFx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtbG9hZC1tZXRob2RzJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLXBheW1lbnROYW1lJyxcblx0XHRcdFx0Jy5wdXNoYWJsZSdcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdGlkOiAnc3RlcC1wYXltZW50LXRpdGxlJyxcblx0XHR0ZXh0OiAnc3RlcFBheW1lbnRUaXRsZS50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc3RlcC05IHNoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3BheW1lbnQtc2V0dGluZ3MnLFxuXHRcdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG5cdFx0YXR0YWNoVG86IHtcblx0XHRcdGVsZW1lbnQ6ICcuanMtb25ib2FyZGluZ1dpemFyZC1wYXltZW50TmFtZScsXG5cdFx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdHNob3dPbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFN0ZXBWYWxpZGF0b3IoXG5cdFx0XHRcdCcuanMtb25ib2FyZGluZ1dpemFyZC1jdXN0b21pemVNZXRob2RJbWFnZScsXG5cdFx0XHRcdCcucHVzaGFibGUnXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHRpZDogJ3N0ZXAtaW1hZ2UtdXBsb2FkJyxcblx0XHR0ZXh0OiAnc3RlcEltYWdlVXBsb2FkLnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzdGVwLTE0IHNoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3BheW1lbnQtc2V0dGluZ3MnLFxuXHRcdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG5cdFx0YXR0YWNoVG86IHtcblx0XHRcdGVsZW1lbnQ6ICcuanMtb25ib2FyZGluZ1dpemFyZC1jdXN0b21pemVNZXRob2RJbWFnZSBpbnB1dCcsXG5cdFx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdHNob3dPbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFN0ZXBWYWxpZGF0b3IoXG5cdFx0XHRcdCcuanMtb25ib2FyZGluZ1dpemFyZC1jb3VudHJ5UmVzdHJpY3Rpb24nLFxuXHRcdFx0XHQnLnB1c2hhYmxlJ1xuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLWNvdW50cnktcmVzdHJpY3Rpb24nLFxuXHRcdHRleHQ6ICdzdGVwQ291bnRyeVJlc3RyaWN0aW9uLnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzdGVwLTEyIHNoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3BheW1lbnQtc2V0dGluZ3MnLFxuXHRcdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG5cdFx0YXR0YWNoVG86IHtcblx0XHRcdGVsZW1lbnQ6ICcuanMtY291bnRyeVJlc3RyaWN0aW9ucycsXG5cdFx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdHNob3dPbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFN0ZXBWYWxpZGF0b3IoXG5cdFx0XHRcdCcuanMtb25ib2FyZGluZ1dpemFyZC1QYXltZW50TWV0aG9kJyxcblx0XHRcdFx0Jy5wdXNoYWJsZSdcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdGlkOiAnc3RlcC1wYXltZW50LW1ldGhvZCcsXG5cdFx0dGV4dDogJ3N0ZXBQYXltZW50TWV0aG9kLnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzdGVwLTEyIHNoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3BheW1lbnQtc2V0dGluZ3MnLFxuXHRcdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG5cdFx0YXR0YWNoVG86IHtcblx0XHRcdGVsZW1lbnQ6ICcuanMtb25ib2FyZGluZ1dpemFyZC1QYXltZW50TWV0aG9kJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLW9yZGVyLW51bWJlcicsXG5cdFx0XHRcdCcucHVzaGFibGUnXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHBheW1lbnRUeXBlSW5kaWNhdG9yKFxuXHRcdFx0XHQnI3N5bGl1c19wYXltZW50X21ldGhvZF9nYXRld2F5Q29uZmlnX21vbGxpZUdhdGV3YXlDb25maWdfMF9wYXltZW50VHlwZScsXG5cdFx0XHRcdHBheW1lbnRNZXRob2RQYXltZW50QXBpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLW9yZGVyLW51bWJlcicsXG5cdFx0dGV4dDogJ3N0ZXBPcmRlck51bWJlci50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc3RlcC0xMiBzaGVwaGVyZC1lbGVtZW50LS1hbGlnbi1yaWdodCcsXG5cdFx0aGlnaGxpZ2h0Q2xhc3M6ICdwYXltZW50LXNldHRpbmdzJyxcblx0XHRidG5OZXh0Q2xhc3M6ICdzaGVwaGVyZC1idXR0b24tLWFycm93LWRvd24nLFxuXHRcdGF0dGFjaFRvOiB7XG5cdFx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtb3JkZXItbnVtYmVyJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gcGF5bWVudFR5cGVJbmRpY2F0b3IoXG5cdFx0XHRcdCcjc3lsaXVzX3BheW1lbnRfbWV0aG9kX2dhdGV3YXlDb25maWdfbW9sbGllR2F0ZXdheUNvbmZpZ18wX3BheW1lbnRUeXBlJyxcblx0XHRcdFx0cGF5bWVudE1ldGhvZE9yZGVyQXBpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLW9yZGVyLWFwaScsXG5cdFx0dGV4dDogJ3N0ZXBPcmRlcnNBUEkudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3N0ZXAtMTIgc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAncGF5bWVudC1zZXR0aW5ncycsXG5cdFx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLVBheW1lbnRNZXRob2QnLFxuXHRcdFx0b246ICd0b3Atc3RhcnQnLFxuXHRcdH0sXG5cdH0sXG5cblx0e1xuXHRcdGlkOiAnc3RlcC1mZWVzJyxcblx0XHR0ZXh0OiAnc3RlcEZlZXMudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3N0ZXAtMTMgc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAncGF5bWVudC1zZXR0aW5ncycsXG5cdFx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLXBheW1lbnRGZWUnLFxuXHRcdFx0b246ICd0b3Atc3RhcnQnLFxuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHRpZDogJ3NhdmUnLFxuXHRcdHRleHQ6ICdzdGVwU2F2ZS50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc3RlcC0xMyBzaGVwaGVyZC1lbGVtZW50LS1hbGlnbi1yaWdodCcsXG5cdFx0aGlnaGxpZ2h0Q2xhc3M6ICdwYXltZW50LXNldHRpbmdzJyxcblx0XHRidG5OZXh0Q2xhc3M6ICdzaGVwaGVyZC1idXR0b24tLWFycm93LWRvd24nLFxuXHRcdGF0dGFjaFRvOiB7XG5cdFx0XHRlbGVtZW50OiAnLnVpLmJ1dHRvbnM6bm90KC5qcy1oZWFkZXItYnRuKScsXG5cdFx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdGlkOiAnc3RlcC1maW5pc2gtd2l6YXJkJyxcblx0XHR0aXRsZTogJ3N0ZXBGaW5pc2hXaXphcmQudGl0bGUnLFxuXHRcdHRleHQ6ICdzdGVwRmluaXNoV2l6YXJkLnRleHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAncGF5bWVudC1zZXR0aW5ncycsXG5cdFx0YnRuQmFja0NsYXNzOiAnZC1ub25lJyxcblx0XHRidG5OZXh0Q2xhc3M6ICdtci1hdXRvJyxcblx0XHRidG5OZXh0VGV4dDogJ3N0ZXBCdXR0b25zLmZpbmlzaFdpemFyZCcsXG5cdFx0YnRuQ29sbGFwc2VDbGFzczogJ2Qtbm9uZScsXG5cdFx0YnRuQ2xvc2VDbGFzczogJ2Qtbm9uZScsXG5cdH0sXG5dO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRzdGVwU3RhcnQ6IHtcblx0XHR0aXRsZTogJ0xldCBtZSBoZWxwIHlvdScsXG5cdFx0dGV4dDogJ1RoYW5rIHlvdSBmb3IgaW5zdGFsbGluZyBNb2xsaWUgZm9yIHBheW1lbnQgc2VydmljZXMuIFRoaXMgZ3VpZGUgd2lsbCB0YWtlIHlvdSB0aHJvdWdoIHRoZSBjb25maWd1cmF0aW9uIHNldC11cC4nLFxuXHR9LFxuXHRzdGVwTW9sbGllQ29ubmVjdDoge1xuXHRcdHRpdGxlOiAnQ29ubmVjdCB0byB5b3VyIE1vbGxpZSBhY2NvdW50Jyxcblx0XHR0ZXh0OiBcIlRvIHN5bmMgdGhlIE1vbGxpZSBwbHVnaW4gdG8geW91ciB3ZWJzaG9wIHlvdSdsbCBuZWVkIE1vbGxpZSBBUEkga2V5cyBhbmQgUHJvZmlsZSBJRC5cIixcblx0fSxcblx0c3RlcEVudjoge1xuXHRcdHRleHQ6IFwiTm93IHRoYXQgeW91J3JlIGNvbm5lY3RlZCB0byBNb2xsaWUgd2Ugd2lsbCBjb25maWd1cmUgdGhlIGVudmlyb25tZW50IGFuZCBjcmVkZW50aWFscy48YnI+PGJyPlRlc3Qgd2lsbCBiZSB0aGUgZGVmYXVsdCBlbnZpcm9ubWVudCBpbiB0aGUgcGx1Z2luLjxicj48YnI+WW91IG9ubHkgbmVlZCB0byBkbyB0aGUgY29uZmlndXJhdGlvbiBvbmNlIHRvIGhhdmUgVEVTVCArIExJVkUgZW52aXJvbm1lbnRzIGF2YWlsYWJsZS4gVHJ5IGVhc2lseSB0b2dnaW5nIGJldHdlZW4gdGhlIHR3by5cIixcblx0fSxcblx0c3RlcEFwaUtleToge1xuXHRcdHRleHQ6ICdGaWxsIGluIHlvdXIgY29ycmVjdCBkZXRhaWxzIGFuZCBjbGljayBcIlRFU1QgQVBJIEtleVwiIHRoaXMgd2lsbCByZXR1cm4gYSBzdWNjZXNzZnVsIG9yIGZhaWxlZCByZXN1bHQgZm9yIGJvdGggdGhlIExJVkUgYW5kIFRFU1QgZW52aXJvbm1lbnRzJyxcblx0fSxcblx0c3RlcENoZWNrb3V0Q29uZmlnOiB7XG5cdFx0dGV4dDogXCJOZXh0LCB3ZSdsbCBzZXQtdXAga2V5IHNldHRpbmdzIGZvciB0aGUgY2hlY2tvdXQgc2NyZWVuIGRpc3BsYXkgb24geW91ciB3ZWJzaG9wLlwiLFxuXHR9LFxuXHRzdGVwTW9sbGllQ29tcG9uZW50czoge1xuXHRcdHRleHQ6IGBFbmFibGluZyBjb21wb25lbnRzLCBhbGxvd3MgeW91IHRvIGFkZCB0aGUgZmllbGRzIG5lZWRlZCBmb3IgY3JlZGl0IGNhcmQgaG9sZGVyIGRhdGEgdG8geW91ciBvd24gY2hlY2tvdXQuPGJyPjxicj5JZiB5b3Ugc2VsZWN0IE5PLCBjdXN0b21lcnMgd2lsbCBiZSByZWRpcmVjdGVkIHRvIHRoZSBNb2xsaWUgY2hlY2tvdXQgcGFnZS48YnI+PGJyPkxlYXJuIG1vcmUgYWJvdXQgTW9sbGllIGNvbXBvbmVudHMgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3Lm1vbGxpZS5jb20vZW4vbmV3cy9wb3N0L2JldHRlci1jaGVja291dC1mbG93cy13aXRoLW1vbGxpZS1jb21wb25lbnRzXCI+aGVyZTwvYT4uYCxcblx0fSxcblx0c3RlcE1vbGxpZVBheW1lbnRzOiB7XG5cdFx0dGV4dDogYEVuYWJsaW5nIHNpbmdsZSBjbGljayBwYXltZW50cyByZW1lbWJlcnMgeW91ciBjb25zdW1lcidzIHBheW1lbnQgcHJlZmVyZW5jZXMgaW4gb3JkZXIgdG8gZXhwZWRpdGUgZm9sbG93LXVwIHBheW1lbnRzLiBZb3VyIGNvbnN1bWVyIGRvZXMgbm90IGhhdmUgdG8gcGVyZm9ybSBhbnkgYWRkaXRpb25hbCBhY3Rpb25zIHRvIGVuam95IHF1aWNrIGFuZCBlYXN5IHBheW1lbnRzLjxicj48YnI+TGVhcm4gbW9yZSBhYm91dCBzaW5nbGUgY2xpY2sgcGF5bWVudHMgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vaGVscC5tb2xsaWUuY29tL2hjL2VuLXVzL2FydGljbGVzLzExNTAwMDY3MTI0OS1XaGF0LWFyZS1zaW5nbGUtY2xpY2stcGF5bWVudHMtYW5kLWhvdy1kb2VzLWl0LXdvcmstXCI+aGVyZTwvYT4uYCxcblx0fSxcblx0c3RlcE1ldGhvZENvbmZpZzoge1xuXHRcdHRleHQ6IFwiTm93IGl0J3MgdGltZSB0byBjdXN0b21pemUgZmVhdHVyZXMgZm9yIGluZGl2aWR1YWwgcGF5bWVudCBtZXRob2RzLjxicj48YnI+Rmlyc3QsIHNlbGVjdCB0aGUgbG9hZCBtZXRob2RzIGJ1dHRvbi4gT25seSB0aGUgbWV0aG9kcyB0aGF0IGFyZSBlbmFibGVkIGluIHlvdXIgTW9sbGllIGFjY291bnQgd2lsbCBkaXNwbGF5IGhlcmUuPGJyPjxicj5UaGVuIHlvdSB1c2UgdGhlIGVuYWJsZS9kaXNhYmxlIHNlbGVjdG9yIHRvIGNvbnRyb2wgd2hpY2ggd2lsbCBzaG93IG9uIHlvdXIgd2Vic2hvcCBjaGVja291dC48YnI+PGJyPk5PVEU6IEl0IGlzIG5vdCBwb3NzaWJsZSB0byBjb250aW51ZSB0aGUgZ3VpZGVkIG9uYm9hcmRpbmcgd2l0aG91dCBsb2FkaW5nIHBheW1lbnQgbWV0aG9kcy4gXCIsXG5cdH0sXG5cdHN0ZXBNZXRob2RSZXF1aXJlZDoge1xuXHRcdHRleHQ6ICdUaGUgbG9hZGVkIG1ldGhvZHMgYXJlIHJlcXVpcmVkIHRvIGNvbXBsZXRlIG9uYm9hcmQgd2l6YXJkIGFuZCBtb3ZlIGZvcndhcmQsIHBsZWFzZSBsb2FkIG1ldGhvZHMgYnkgY2xpY2tpbmcgXCJMb2FkIE1ldGhvZHNcIiBidXR0b24gYW5kIGNvbWUgYmFjayB0byBjb21wbGV0ZSB0aGlzIHR1dG9yaWFsJyxcblx0fSxcblx0c3RlcEVycm9yVGl0bGU6IHtcblx0XHR0ZXh0OiAnT25ib2FyZGluZyBBc3Npc3RhbnQgV2l6YXJkIC0gRW5kZWQgVXAnLFxuXHR9LFxuXHRzdGVwRXJyb3JEZXNjcmlwdGlvbjoge1xuXHRcdHRleHQ6ICdUaGUgcmVxdWlyZWQgYWN0aW9uIHdhcyBub3QgcGVyZm9ybWVkJyxcblx0fSxcblx0c3RlcFBheW1lbnRUaXRsZToge1xuXHRcdHRleHQ6ICdGb3IgZWFjaCBtZXRob2QsIHlvdSBjYW4gZW50ZXIgYSBjdXN0b20gdGl0bGUgaGVyZS4gSXQgd2lsbCBiZSBkaXNwbGF5ZWQgb24geW91ciB3ZWJzaG9wIGNoZWNrb3V0IHBhZ2UuJyxcblx0fSxcblx0c3RlcEltYWdlVXBsb2FkOiB7XG5cdFx0dGV4dDogJ1RyeSB1cGxvYWRpbmcgYSBjdXN0b20gaW1hZ2UgZm9yIHRoZSBwYXltZW50IG1ldGhvZCBpY29uLiBUaGlzIHdpbGwgYmUgc2hvd24gaW4gdGhlIHdlYnNob3AgY2hlY2tvdXQgcGFnZS4nLFxuXHR9LFxuXHRzdGVwQ291bnRyeVJlc3RyaWN0aW9uOiB7XG5cdFx0dGV4dDogJ0hlcmUgeW91IGNhbiBjcmVhdGUgZmlsdGVycyBmb3IgY291bnRyeSBzcGVjaWZpYyBwYXltZW50IG1ldGhvZHMgLSBmb3IgZXhhbXBsZSwgaWYgeW91IHdhbnQgaURFQUwgb25seSB0byBzaG93IGZvciBOZXRoZXJsYW5kcyBjdXN0b21lcnMgeW91IGNob29zZSBcIlNlbGVjdCBDb3VudHJpZXNcIiBhbmQgc2VsZWN0IE5ldGhlcmxhbmRzLicsXG5cdH0sXG5cdHN0ZXBQYXltZW50TWV0aG9kOiB7XG5cdFx0dGV4dDogJ1BlciBtZXRob2QsIHlvdSBjYW4gc2VsZWN0IHdoaWNoIE1vbGxpZSBBUEkgdG8gdXNlIHRvIGNyZWF0ZSBwYXltZW50cy4gQ2xpY2sgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZG9jcy5tb2xsaWUuY29tL29yZGVycy93aHktdXNlLW9yZGVyc1wiPmhlcmU8L2E+IHRvIHJlYWQgYWJvdXQgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gT3JkZXJzIGFuZCBQYXltZW50cyBBUEkuJyxcblx0fSxcblx0c3RlcE9yZGVyTnVtYmVyOiB7XG5cdFx0dGV4dDogJ1doZW4gdXNpbmcgUGF5bWVudHMgQVBJIHlvdSBtYXkgd2FudCBhZGRpdGlvbmFsIGRldGFpbHMgdG8gaGVscCB5b3UgbWF0Y2ggcGF5bWVudHMgd2l0aCBjdXN0b21lciBvcmRlcnMgLS0geW91IGNhbiBlbnRlciB0aG9zZSB2YWx1ZXMgaGVyZSBidXQgbWFrZSBzdXJlIHRvIHVzZSB0aGUgY29ycmVjdCB0YWdzIHByb3ZpZGVkIGluIHRoZSB0ZXh0IGJlbG93Jyxcblx0fSxcblx0c3RlcE9yZGVyc0FQSToge1xuXHRcdHRleHQ6ICdUaGlzIGlzIE1vbGxpZSBzdWdnZXN0ZWQgQVBJIHRvIHVzZSBmb3Igd2Vic2hvcHMgYmVjYXVzZSBpdCBhbGxvd3MgeW91IHRvIGNyZWF0ZSDigJxvcmRlcnPigJ0uIEFuIG9yZGVyIGNvbnRhaW5zIHRoZSBwZXJzb25hbCBpbmZvcm1hdGlvbiBvZiBhIGN1c3RvbWVyIChlLmcuIGFkZHJlc3MpIGFuZCBwcm9kdWN0cyB0aGF0IHRoZSBjdXN0b21lciBvcmRlcmVkLiBXaGVuIGFuIG9yZGVyIGlzIG1hZGUsIGEgY29ycmVzcG9uZGluZyBwYXltZW50IHdpbGwgYmUgY3JlYXRlZCBhdXRvbWF0aWNhbGx5LicsXG5cdH0sXG5cdHN0ZXBQYXltZW50c0FQSToge1xuXHRcdHRleHQ6ICdQYXltZW50cyBBUEkgPGJyPk5vdGU6IFBheW1lbnRzIEFQSSBjYW4gbm90IGJlIHVzZWQgZm9yIG1ldGhvZHMgc3VjaCBhcyBLbGFybmEnLFxuXHR9LFxuXHRzdGVwRmVlczoge1xuXHRcdHRleHQ6ICdJbiBjYXNlIHlvdSBoYXZlIGZlZXMgdGhhdCB5b3UgYXJlIHBhc3Npbmcgb24gdG8gdGhlIGNvbnN1bWVyLCB5b3UgY2FuIGFkZCB0aGVtIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2hlbHAubW9sbGllLmNvbS9oYy9lbi11cy9hcnRpY2xlcy8zNjAwMTI1NjQ0NTQtQ2FuLUktcGFzcy1vdmVyLXRoZS1jb3N0cy1mb3ItdGhlLXVzZS1vZi1hLXBheW1lbnQtbWV0aG9kLXRvLW15LWN1c3RvbWVycy1cIj5oZXJlPC9hPicsXG5cdH0sXG5cdHN0ZXBTYXZlOiB7XG5cdFx0dGV4dDogJ1JlbWViZXIgdG8gc2F2ZSB5b3VyIGNvbmZpZ3VyYXRpb25zLiAnLFxuXHR9LFxuXHRzdGVwRmluaXNoV2l6YXJkOiB7XG5cdFx0dGl0bGU6ICc8aSBjbGFzcz1cImljb24gY2hlY2sgY2lyY2xlXCI+PC9pPiBZb3VcXCdyZSBhbGwgc2V0IScsXG5cdFx0dGV4dDogXCJZb3UgY2FuIG5vdyBhdHRlbXB0IGEgY3VzdG9tZXIgb3JkZXIgb24geW91ciB3ZWJzaXRlLlwiLFxuXHR9LFxuXHRzdGVwUXVpdENvbmZpcm1hdGlvbjoge1xuXHRcdHRpdGxlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHF1aXQgPycsXG5cdFx0dGV4dDogXCJZb3UncmUgYWxsIGRvbmUsIHlvdSBjYW4gbm93IGF0dGVtcHQgYSBjb25zdW1lciBvcmRlciBvciB5b3VyIHdlYnNpdGVcIixcblx0fSxcblx0c3RlcFBheW1lbnRUeXBlOiB7XG5cdFx0dGV4dDogJ1doZW4gdXNpbmcgUGF5bWVudHMgQVBJIHlvdSBtYXkgd2FudCBhZGRpdGlvbmFsIGRldGFpbHMgdG8gaGVscCB5b3UgbWF0Y2ggcGF5bWVudHMgd2l0aCBjdXN0b21lciBvcmRlcnMgLS0geW91IGNhbiBlbnRlciB0aG9zZSB2YWx1ZXMgaGVyZSBidXQgbWFrZSBzdXJlIHRvIHVzZSB0aGUgY29ycmVjdCB0YWdzIHByb3ZpZGUgaW4gdGhlIHRleHQgYmVsb3cnLFxuXHR9LFxuXHRzdGVwUGF5bWVudERlc2NyaXB0aW9uOiB7XG5cdFx0dGV4dDogJ0Nob29zZSBQYXltZW50cyBBUEkgTGVhcm4gYWJvdXQgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBPcmRlcnMgQVBJIG9yIHRoZSBQYXltZW50cyBBUEknLFxuXHR9LFxuXHRzdGVwT3JkZXJBcGk6IHtcblx0XHR0ZXh0OlxuXHRcdFx0J1NlbGVjdCBPcmRlcnMgQVBJIC0gdGhpcyBpcyBNb2xsaWVcXG4nICtcblx0XHRcdCdzdWdnZXN0ZWQgQVBJIHRvIHVzZSBmb3Igd2Vic2hvcHMgYi9jIGl0IGFsbG93cyB5b3UgdG8gY3JlYXRlIOKAnG9yZGVyc+KAnS4gQW4gb3JkZXIgY29udGFpbnMgdGhlIHBlcnNvbmFsIGluZm9ybWF0aW9uIG9mIGEgY3VzdG9tZXIgKGUuZy4gYWRkcmVzcykgYW5kIHByb2R1Y3RzIHRoYXQgdGhlIGN1c3RvbWVyIG9yZGVyZWQuIFdoZW4gYW4gb3JkZXIgaXMgbWFkZSwgYSBjb3JyZXNwb25kaW5nIHBheW1lbnQgd2lsbCBiZSBjcmVhdGVkIGF1dG9tYXRpY2FsbHkuJyxcblx0fSxcblx0c3RlcEJ1dHRvbnM6IHtcblx0XHRnb0JhY2s6ICdHbyBiYWNrJyxcblx0XHRza2lwV2l6YXJkOiAnU2tpcCB0aGlzLCBJIGtub3cgaG93IGl0IHdvcmtzJyxcblx0XHRzdGFydFdpemFyZDpcblx0XHRcdCdTdGFydCBvbmJvYXJkaW5nIGFzc2lzdGFudCA8aSBjbGFzcz1cImljb24gYW5nbGUgcmlnaHRcIj48L2k+Jyxcblx0XHRsb2dpbk1vbGxpZUFjY291bnQ6ICdMb2dpbiB0byBteSBhY2NvdW50Jyxcblx0XHRuZXh0V2l0aEFycm93OiAnTmV4dCA8aSBjbGFzcz1cImljb24gYW5nbGUgcmlnaHRcIj48L2k+Jyxcblx0XHRuZXh0OiAnTmV4dCcsXG5cdFx0Y3JlYXRlTW9sbGllQWNjb3VudDpcblx0XHRcdCdDcmVhdGUgYSBNb2xsaWUgYWNjb3VudCA8aSBjbGFzcz1cImljb24gYW5nbGUgcmlnaHRcIj48L2k+Jyxcblx0XHRmaW5pc2hXaXphcmQ6XG5cdFx0XHQnU3RhcnQgdXNpbmcgTW9sbGllIDxpIGNsYXNzPVwiaWNvbiBhbmdsZSByaWdodFwiPjwvaT4nLFxuXHRcdHF1aXRDb25maXJtOiAnUXVpdCB0aGUgb25ib2FyZGluZyBhc3Npc3RhbnQnLFxuXHRcdHF1aXRDYW5jZWw6ICdDb250aW51ZSBvbmJvYXJkaW5nIDxpIGNsYXNzPVwiaWNvbiBhbmdsZSByaWdodFwiPjwvaT4nLFxuXHR9LFxuXHRjb21tb246IHtcblx0XHRvcGVuOiAnT3BlbicsXG5cdH0sXG59O1xuIiwiZXhwb3J0IGNvbnN0IHBheW1lbnRUeXBlSW5kaWNhdG9yID0gKGl0ZW0sIGV4cGVjdGVkVmFsdWUpID0+IHtcblx0Y29uc3QgaW5kaWNhdGVkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaXRlbSk7XG5cdGNvbnN0IGluZGljYXRlZEl0ZW1WYWx1ZSA9IGluZGljYXRlZEl0ZW0udmFsdWU7XG5cblx0cmV0dXJuIGluZGljYXRlZEl0ZW1WYWx1ZSA9PT0gZXhwZWN0ZWRWYWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBtZXRob2RMb2FkSW5kaWNhdG9yID0gKGl0ZW0sIG1lc3NhZ2VDb250YWluZXIpID0+IHtcblx0Y29uc3QgaW5kaWNhdGVkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaXRlbSk7XG5cdGNvbnN0IG1lc3NhZ2VXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1lc3NhZ2VDb250YWluZXIpO1xuXG5cdGlmIChpbmRpY2F0ZWRJdGVtKSB7XG5cdFx0bWVzc2FnZVdpbmRvdy5jbGFzc0xpc3QuYWRkKCdzdGVwLW5leHQtZGlzYWJsZWQnKTtcblx0fSBlbHNlIHtcblx0XHRtZXNzYWdlV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3N0ZXAtbmV4dC1kaXNhYmxlZCcpO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgdmFsaWRhdGVGaWVsZHMgPSAoZWxlbWVudHMsIG1lc3NhZ2VDb250YWluZXIpID0+IHtcblx0Y29uc3QgZXJyb3JzID0gW107XG5cblx0ZWxlbWVudHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdGlmICghaXRlbS52YWx1ZSkge1xuXHRcdFx0ZXJyb3JzLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9KTtcblxuXHRpZiAoZXJyb3JzLmV2ZXJ5KChlbCkgPT4gZWwgPT09IG51bGwpKSB7XG5cdFx0bWVzc2FnZUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzdGVwLW5leHQtZGlzYWJsZWQnKTtcblx0fSBlbHNlIHtcblx0XHRtZXNzYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3N0ZXAtbmV4dC1kaXNhYmxlZCcpO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgY3VycmVudFN0ZXBWYWxpZGF0b3IgPSAoZWxlbWVudCwgcG9wdXApID0+IHtcblx0Y29uc3QgdmFsaWRhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG5cdGNvbnN0IHZhbGlkYXRpb25FbGVtZW50cyA9IHZhbGlkYXRpb25Db250YWluZXIucGFyZW50Tm9kZVxuXHRcdC5xdWVyeVNlbGVjdG9yQWxsKGBpbnB1dDpub3QoW3R5cGU9XCJmaWxlXCJdKTpub3QoW3R5cGU9XCJzdWJtaXRcIl0pOm5vdChkaXNhYmxlZCk6bm90KFtzdHlsZSo9XCJkaXNwbGF5OiBub25lXCJdKSxcblx0XHRzZWxlY3Q6bm90KGRpc2FibGVkKTpub3QoW3N0eWxlKj1cImRpc3BsYXk6IG5vbmU7XCJdKWApO1xuXHRjb25zdCBtZXNzYWdlV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cCk7XG5cblx0aWYgKHZhbGlkYXRpb25FbGVtZW50cyAmJiB2YWxpZGF0aW9uRWxlbWVudHMubGVuZ3RoICE9IDApIHtcblx0XHR2YWxpZGF0ZUZpZWxkcyh2YWxpZGF0aW9uRWxlbWVudHMsIG1lc3NhZ2VXaW5kb3cpO1xuXHRcdHZhbGlkYXRpb25FbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG5cdFx0XHRcdHZhbGlkYXRlRmllbGRzKHZhbGlkYXRpb25FbGVtZW50cywgbWVzc2FnZVdpbmRvdyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufTtcbiIsImltcG9ydCBfZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xuXG5pbXBvcnQgeyBzdGVwcyB9IGZyb20gJy4uL2NvbmZpZy9zdGVwcyc7XG5pbXBvcnQgd2l6YXJkVHJhbnNsYXRpb25zIGZyb20gJy4uL2NvbmZpZy93aXphcmRUcmFuc2xhdGlvbnMnO1xuXG5jb25zdCBoYW5kbGVTdGVwQnV0dG9ucyA9IChvbmJvYXJkaW5nV2l6YXJkLCBzdGVwSW5kZXgsIHN0ZXApID0+IHtcblx0aWYgKHN0ZXAuY3VzdG9tQnV0dG9ucykge1xuXHRcdHJldHVybiBzdGVwLmN1c3RvbUJ1dHRvbnMubWFwKChjdXN0b21CdXR0b24pID0+ICh7XG5cdFx0XHQuLi5jdXN0b21CdXR0b24sXG5cdFx0XHR0ZXh0OiBfZ2V0KHdpemFyZFRyYW5zbGF0aW9ucywgY3VzdG9tQnV0dG9uLnRleHQpLFxuXHRcdFx0YWN0aW9uOiAoKSA9PiBjdXN0b21CdXR0b24uYWN0aW9uKG9uYm9hcmRpbmdXaXphcmQsIHN0ZXBJbmRleCksXG5cdFx0fSkpO1xuXHR9XG5cblx0cmV0dXJuIFtcblx0XHR7XG5cdFx0XHR0ZXh0OiAnPGkgY2xhc3M9XCJjbG9zZSBpY29uXCI+PC9pPicsXG5cdFx0XHRhY3Rpb246ICgpID0+IHtcblx0XHRcdFx0b25ib2FyZGluZ1dpemFyZC5oYW5kbGVRdWl0Q29uZmlybWF0aW9uKCk7XG5cdFx0XHR9LFxuXHRcdFx0Y2xhc3NlczogYHNoZXBoZXJkLWJ1dHRvbi0tY2xvc2UgJHtzdGVwLmJ0bkNsb3NlQ2xhc3MgfHwgJyd9YCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6ICc8aSBjbGFzcz1cImFycm93IGRvd24gaWNvblwiPjwvaT4nLFxuXHRcdFx0YWN0aW9uOiAoKSA9PiBvbmJvYXJkaW5nV2l6YXJkLm1vZGFsQ29sbGFwc2VIYW5kbGVyKCksXG5cdFx0XHRjbGFzc2VzOiBgc2hlcGhlcmQtYnV0dG9uLS1jb2xsYXBzZSBqcy10b3VyLWNvbGxhcHNlICR7XG5cdFx0XHRcdHN0ZXAuYnRuQ29sbGFwc2VDbGFzcyB8fCAnJ1xuXHRcdFx0fWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBzdGVwLmJ0bkJhY2tUZXh0XG5cdFx0XHRcdD8gX2dldCh3aXphcmRUcmFuc2xhdGlvbnMsIHN0ZXAuYnRuQmFja1RleHQpXG5cdFx0XHRcdDogX2dldCh3aXphcmRUcmFuc2xhdGlvbnMsICdzdGVwQnV0dG9ucy5nb0JhY2snKSxcblx0XHRcdHNlY29uZGFyeTogdHJ1ZSxcblx0XHRcdGNsYXNzZXM6IGAke3N0ZXAuYnRuQmFja0NsYXNzIHx8ICcnfWAsXG5cdFx0XHRhY3Rpb24oKSB7XG5cdFx0XHRcdGNvbnN0IHRvdXIgPSBvbmJvYXJkaW5nV2l6YXJkLnRvdXI7XG5cblx0XHRcdFx0aWYgKHN0ZXBJbmRleCA9PT0gMCkge1xuXHRcdFx0XHRcdHRvdXIuY29tcGxldGUoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoc3RlcC51cmxNb2xsaWUpIHtcblx0XHRcdFx0XHRcdHdpbmRvdy5vcGVuKGAke3N0ZXAudXJsTW9sbGllfS9zaWduaW5gLCAnX2JsYW5rJyk7XG5cdFx0XHRcdFx0XHR0b3VyLm5leHQoKTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRvdXIuYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogc3RlcC5idG5OZXh0VGV4dFxuXHRcdFx0XHQ/IF9nZXQod2l6YXJkVHJhbnNsYXRpb25zLCBzdGVwLmJ0bk5leHRUZXh0KVxuXHRcdFx0XHQ6IF9nZXQod2l6YXJkVHJhbnNsYXRpb25zLCAnc3RlcEJ1dHRvbnMubmV4dFdpdGhBcnJvdycpLFxuXHRcdFx0Y2xhc3NlczogYCR7c3RlcC5idG5OZXh0Q2xhc3MgfHwgJyd9YCxcblx0XHRcdGFjdGlvbigpIHtcblx0XHRcdFx0Y29uc3QgdG91ciA9IG9uYm9hcmRpbmdXaXphcmQudG91cjtcblxuXHRcdFx0XHRpZiAoc3RlcEluZGV4ID09PSBvbmJvYXJkaW5nV2l6YXJkLnN0ZXBzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHR0b3VyLmNvbXBsZXRlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHN0ZXAudXJsTW9sbGllKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cub3BlbihgJHtzdGVwLnVybE1vbGxpZX0vc2lnbnVwYCwgJ19ibGFuaycpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0b3VyLm5leHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9LFxuXHRdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKHN0ZXBzID0gW10pID0+XG5cdHN0ZXBzLm1hcCgoc3RlcCkgPT4gKHtcblx0XHQuLi5zdGVwLFxuXHRcdHRpdGxlOiBzdGVwLnRpdGxlID8gX2dldCh3aXphcmRUcmFuc2xhdGlvbnMsIHN0ZXAudGl0bGUpIDogbnVsbCxcblx0XHR0ZXh0OiBfZ2V0KHdpemFyZFRyYW5zbGF0aW9ucywgc3RlcC50ZXh0KSxcblx0XHRzdGVwQnV0dG9uczogKG9uYm9hcmRpbmdXaXphcmQsIHN0ZXBJbmRleCkgPT5cblx0XHRcdGhhbmRsZVN0ZXBCdXR0b25zKG9uYm9hcmRpbmdXaXphcmQsIHN0ZXBJbmRleCwgc3RlcCksXG5cdH0pKTtcbiIsImltcG9ydCBPbmJvYXJkaW5nV2l6YXJkIGZyb20gJy4vT25ib2FyZGluZ1dpemFyZCc7XG5jb25zdCB0b3VyID0gbmV3IE9uYm9hcmRpbmdXaXphcmQoKTtcbnRvdXIuaW5pdFRvdXIoKTtcbmNvbnNvbGUubG9nKCdkdXAxMjM0MTIzNGEnKSIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvLFxuICAgIHJlTGVhZGluZ0RvdCA9IC9eXFwuLyxcbiAgICByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcXFxdfFxcXFwuKSo/KVxcMilcXF18KD89KD86XFwufFxcW1xcXSkoPzpcXC58XFxbXFxdfCQpKS9nO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBiYWNrc2xhc2hlcyBpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlLFxuICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sLFxuICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyBkYXRhW2tleV0gIT09IHVuZGVmaW5lZCA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIGdldE1hcERhdGEodGhpcywga2V5KS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5nZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBpc0tleShwYXRoLCBvYmplY3QpID8gW3BhdGhdIDogY2FzdFBhdGgocGF0aCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSAoaXNGdW5jdGlvbih2YWx1ZSkgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSkge1xuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IHN0cmluZ1RvUGF0aCh2YWx1ZSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG52YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZShmdW5jdGlvbihzdHJpbmcpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcblxuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChyZUxlYWRpbmdEb3QudGVzdChzdHJpbmcpKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAmJiB0eXBlb2YgcmVzb2x2ZXIgIT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgdmFyIG1lbW9pemVkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGtleSA9IHJlc29sdmVyID8gcmVzb2x2ZXIuYXBwbHkodGhpcywgYXJncykgOiBhcmdzWzBdLFxuICAgICAgICBjYWNoZSA9IG1lbW9pemVkLmNhY2hlO1xuXG4gICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICByZXR1cm4gY2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIG1lbW9pemVkLmNhY2hlID0gY2FjaGUuc2V0KGtleSwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBtZW1vaXplZC5jYWNoZSA9IG5ldyAobWVtb2l6ZS5DYWNoZSB8fCBNYXBDYWNoZSk7XG4gIHJldHVybiBtZW1vaXplZDtcbn1cblxuLy8gQXNzaWduIGNhY2hlIHRvIGBfLm1lbW9pemVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG4vKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuIElmIHRoZSByZXNvbHZlZCB2YWx1ZSBpc1xuICogYHVuZGVmaW5lZGAsIHRoZSBgZGVmYXVsdFZhbHVlYCBpcyByZXR1cm5lZCBpbiBpdHMgcGxhY2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjcuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gW2RlZmF1bHRWYWx1ZV0gVGhlIHZhbHVlIHJldHVybmVkIGZvciBgdW5kZWZpbmVkYCByZXNvbHZlZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogW3sgJ2InOiB7ICdjJzogMyB9IH1dIH07XG4gKlxuICogXy5nZXQob2JqZWN0LCAnYVswXS5iLmMnKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsIFsnYScsICcwJywgJ2InLCAnYyddKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLmdldChvYmplY3QsICdhLmIuYycsICdkZWZhdWx0Jyk7XG4gKiAvLyA9PiAnZGVmYXVsdCdcbiAqL1xuZnVuY3Rpb24gZ2V0KG9iamVjdCwgcGF0aCwgZGVmYXVsdFZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldDtcbiIsIi8qISBzaGVwaGVyZC5qcyA4LjMuMSAqL1xuXG52YXIgaXNNZXJnZWFibGVPYmplY3QgPSBmdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNOb25OdWxsT2JqZWN0KHZhbHVlKSAmJiAhaXNTcGVjaWFsKHZhbHVlKTtcbn07XG5cbmZ1bmN0aW9uIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWUpIHtcbiAgdmFyIHN0cmluZ1ZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgcmV0dXJuIHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBSZWdFeHBdJyB8fCBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgRGF0ZV0nIHx8IGlzUmVhY3RFbGVtZW50KHZhbHVlKTtcbn0gLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL2I1YWM5NjNmYjc5MWQxMjk4ZTdmMzk2MjM2MzgzYmM5NTVmOTE2YzEvc3JjL2lzb21vcnBoaWMvY2xhc3NpYy9lbGVtZW50L1JlYWN0RWxlbWVudC5qcyNMMjEtTDI1XG5cblxudmFyIGNhblVzZVN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBjYW5Vc2VTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG5cbmZ1bmN0aW9uIGlzUmVhY3RFbGVtZW50KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge307XG59XG5cbmZ1bmN0aW9uIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHZhbHVlLCBvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmNsb25lICE9PSBmYWxzZSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSA/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zKSA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICByZXR1cm4gdGFyZ2V0LmNvbmNhdChzb3VyY2UpLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChlbGVtZW50LCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucy5jdXN0b21NZXJnZSkge1xuICAgIHJldHVybiBkZWVwbWVyZ2U7XG4gIH1cblxuICB2YXIgY3VzdG9tTWVyZ2UgPSBvcHRpb25zLmN1c3RvbU1lcmdlKGtleSk7XG4gIHJldHVybiB0eXBlb2YgY3VzdG9tTWVyZ2UgPT09ICdmdW5jdGlvbicgPyBjdXN0b21NZXJnZSA6IGRlZXBtZXJnZTtcbn1cblxuZnVuY3Rpb24gZ2V0RW51bWVyYWJsZU93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpIHtcbiAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkuZmlsdGVyKGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICByZXR1cm4gdGFyZ2V0LnByb3BlcnR5SXNFbnVtZXJhYmxlKHN5bWJvbCk7XG4gIH0pIDogW107XG59XG5cbmZ1bmN0aW9uIGdldEtleXModGFyZ2V0KSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0YXJnZXQpLmNvbmNhdChnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUlzT25PYmplY3Qob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB0cnkge1xuICAgIHJldHVybiBwcm9wZXJ0eSBpbiBvYmplY3Q7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0gLy8gUHJvdGVjdHMgZnJvbSBwcm90b3R5cGUgcG9pc29uaW5nIGFuZCB1bmV4cGVjdGVkIG1lcmdpbmcgdXAgdGhlIHByb3RvdHlwZSBjaGFpbi5cblxuXG5mdW5jdGlvbiBwcm9wZXJ0eUlzVW5zYWZlKHRhcmdldCwga2V5KSB7XG4gIHJldHVybiBwcm9wZXJ0eUlzT25PYmplY3QodGFyZ2V0LCBrZXkpIC8vIFByb3BlcnRpZXMgYXJlIHNhZmUgdG8gbWVyZ2UgaWYgdGhleSBkb24ndCBleGlzdCBpbiB0aGUgdGFyZ2V0IHlldCxcbiAgJiYgIShPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkgLy8gdW5zYWZlIGlmIHRoZXkgZXhpc3QgdXAgdGhlIHByb3RvdHlwZSBjaGFpbixcbiAgJiYgT2JqZWN0LnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGFyZ2V0LCBrZXkpKTsgLy8gYW5kIGFsc28gdW5zYWZlIGlmIHRoZXkncmUgbm9uZW51bWVyYWJsZS5cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGRlc3RpbmF0aW9uID0ge307XG5cbiAgaWYgKG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuICAgIGdldEtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh0YXJnZXRba2V5XSwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRLZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKHByb3BlcnR5SXNVbnNhZmUodGFyZ2V0LCBrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5SXNPbk9iamVjdCh0YXJnZXQsIGtleSkgJiYgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBnZXRNZXJnZUZ1bmN0aW9uKGtleSwgb3B0aW9ucykodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZVtrZXldLCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGVzdGluYXRpb247XG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuICBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0ID0gb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCB8fCBpc01lcmdlYWJsZU9iamVjdDsgLy8gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQgaXMgYWRkZWQgdG8gYG9wdGlvbnNgIHNvIHRoYXQgY3VzdG9tIGFycmF5TWVyZ2UoKVxuICAvLyBpbXBsZW1lbnRhdGlvbnMgY2FuIHVzZSBpdC4gVGhlIGNhbGxlciBtYXkgbm90IHJlcGxhY2UgaXQuXG5cbiAgb3B0aW9ucy5jbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkO1xuICB2YXIgc291cmNlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgdmFyIHRhcmdldElzQXJyYXkgPSBBcnJheS5pc0FycmF5KHRhcmdldCk7XG4gIHZhciBzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoID0gc291cmNlSXNBcnJheSA9PT0gdGFyZ2V0SXNBcnJheTtcblxuICBpZiAoIXNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2gpIHtcbiAgICByZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlLCBvcHRpb25zKTtcbiAgfSBlbHNlIGlmIChzb3VyY2VJc0FycmF5KSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKTtcbiAgfVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheScpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbiAocHJldiwgbmV4dCkge1xuICAgIHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9ucyk7XG4gIH0sIHt9KTtcbn07XG5cbnZhciBkZWVwbWVyZ2VfMSA9IGRlZXBtZXJnZTtcbnZhciBjanMgPSBkZWVwbWVyZ2VfMTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBFbGVtZW50YC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBhcmFtIHRvIGNoZWNrIGlmIGl0IGlzIGFuIEVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gaXNFbGVtZW50JDEodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRWxlbWVudDtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgSFRNTEVsZW1lbnRgLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcGFyYW0gdG8gY2hlY2sgaWYgaXQgaXMgYW4gSFRNTEVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50JDEodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBhcmFtIHRvIGNoZWNrIGlmIGl0IGlzIGEgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBvYmplY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwYXJhbSB0byBjaGVjayBpZiBpdCBpcyBhIHN0cmluZ1xuICovXG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB1bmRlZmluZWQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwYXJhbSB0byBjaGVjayBpZiBpdCBpcyB1bmRlZmluZWRcbiAqL1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuY2xhc3MgRXZlbnRlZCB7XG4gIG9uKGV2ZW50LCBoYW5kbGVyLCBjdHgsIG9uY2UgPSBmYWxzZSkge1xuICAgIGlmIChpc1VuZGVmaW5lZCh0aGlzLmJpbmRpbmdzKSkge1xuICAgICAgdGhpcy5iaW5kaW5ncyA9IHt9O1xuICAgIH1cblxuICAgIGlmIChpc1VuZGVmaW5lZCh0aGlzLmJpbmRpbmdzW2V2ZW50XSkpIHtcbiAgICAgIHRoaXMuYmluZGluZ3NbZXZlbnRdID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5iaW5kaW5nc1tldmVudF0ucHVzaCh7XG4gICAgICBoYW5kbGVyLFxuICAgICAgY3R4LFxuICAgICAgb25jZVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25jZShldmVudCwgaGFuZGxlciwgY3R4KSB7XG4gICAgcmV0dXJuIHRoaXMub24oZXZlbnQsIGhhbmRsZXIsIGN0eCwgdHJ1ZSk7XG4gIH1cblxuICBvZmYoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICBpZiAoaXNVbmRlZmluZWQodGhpcy5iaW5kaW5ncykgfHwgaXNVbmRlZmluZWQodGhpcy5iaW5kaW5nc1tldmVudF0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmJpbmRpbmdzW2V2ZW50XTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iaW5kaW5nc1tldmVudF0uZm9yRWFjaCgoYmluZGluZywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGJpbmRpbmcuaGFuZGxlciA9PT0gaGFuZGxlcikge1xuICAgICAgICAgIHRoaXMuYmluZGluZ3NbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdHJpZ2dlcihldmVudCwgLi4uYXJncykge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5iaW5kaW5ncykgJiYgdGhpcy5iaW5kaW5nc1tldmVudF0pIHtcbiAgICAgIHRoaXMuYmluZGluZ3NbZXZlbnRdLmZvckVhY2goKGJpbmRpbmcsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBjdHgsXG4gICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICBvbmNlXG4gICAgICAgIH0gPSBiaW5kaW5nO1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gY3R4IHx8IHRoaXM7XG4gICAgICAgIGhhbmRsZXIuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cbiAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICB0aGlzLmJpbmRpbmdzW2V2ZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG5cbi8qKlxuICogQmluZHMgYWxsIHRoZSBtZXRob2RzIG9uIGEgSlMgQ2xhc3MgdG8gdGhlIGB0aGlzYCBjb250ZXh0IG9mIHRoZSBjbGFzcy5cbiAqIEFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL2F1dG8tYmluZFxuICogQHBhcmFtIHtvYmplY3R9IHNlbGYgVGhlIGB0aGlzYCBjb250ZXh0IG9mIHRoZSBjbGFzc1xuICogQHJldHVybiB7b2JqZWN0fSBUaGUgYHRoaXNgIGNvbnRleHQgb2YgdGhlIGNsYXNzXG4gKi9cbmZ1bmN0aW9uIGF1dG9CaW5kKHNlbGYpIHtcbiAgY29uc3Qga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNlbGYuY29uc3RydWN0b3IucHJvdG90eXBlKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgIGNvbnN0IHZhbCA9IHNlbGZba2V5XTtcblxuICAgIGlmIChrZXkgIT09ICdjb25zdHJ1Y3RvcicgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc2VsZltrZXldID0gdmFsLmJpbmQoc2VsZik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbi8qKlxuICogU2V0cyB1cCB0aGUgaGFuZGxlciB0byBkZXRlcm1pbmUgaWYgd2Ugc2hvdWxkIGFkdmFuY2UgdGhlIHRvdXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdGVwfSBzdGVwIFRoZSBzdGVwIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gX3NldHVwQWR2YW5jZU9uSGFuZGxlcihzZWxlY3Rvciwgc3RlcCkge1xuICByZXR1cm4gZXZlbnQgPT4ge1xuICAgIGlmIChzdGVwLmlzT3BlbigpKSB7XG4gICAgICBjb25zdCB0YXJnZXRJc0VsID0gc3RlcC5lbCAmJiBldmVudC5jdXJyZW50VGFyZ2V0ID09PSBzdGVwLmVsO1xuICAgICAgY29uc3QgdGFyZ2V0SXNTZWxlY3RvciA9ICFpc1VuZGVmaW5lZChzZWxlY3RvcikgJiYgZXZlbnQuY3VycmVudFRhcmdldC5tYXRjaGVzKHNlbGVjdG9yKTtcblxuICAgICAgaWYgKHRhcmdldElzU2VsZWN0b3IgfHwgdGFyZ2V0SXNFbCkge1xuICAgICAgICBzdGVwLnRvdXIubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbi8qKlxuICogQmluZCB0aGUgZXZlbnQgaGFuZGxlciBmb3IgYWR2YW5jZU9uXG4gKiBAcGFyYW0ge1N0ZXB9IHN0ZXAgVGhlIHN0ZXAgaW5zdGFuY2VcbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmRBZHZhbmNlKHN0ZXApIHtcbiAgLy8gQW4gZW1wdHkgc2VsZWN0b3IgbWF0Y2hlcyB0aGUgc3RlcCBlbGVtZW50XG4gIGNvbnN0IHtcbiAgICBldmVudCxcbiAgICBzZWxlY3RvclxuICB9ID0gc3RlcC5vcHRpb25zLmFkdmFuY2VPbiB8fCB7fTtcblxuICBpZiAoZXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVyID0gX3NldHVwQWR2YW5jZU9uSGFuZGxlcihzZWxlY3Rvciwgc3RlcCk7IC8vIFRPRE86IHRoaXMgc2hvdWxkIGFsc28gYmluZC91bmJpbmQgb24gc2hvdy9oaWRlXG5cblxuICAgIGxldCBlbDtcblxuICAgIHRyeSB7XG4gICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIH0gY2F0Y2ggKGUpIHsvLyBUT0RPXG4gICAgfVxuXG4gICAgaWYgKCFpc1VuZGVmaW5lZChzZWxlY3RvcikgJiYgIWVsKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcihgTm8gZWxlbWVudCB3YXMgZm91bmQgZm9yIHRoZSBzZWxlY3RvciBzdXBwbGllZCB0byBhZHZhbmNlT246ICR7c2VsZWN0b3J9YCk7XG4gICAgfSBlbHNlIGlmIChlbCkge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICBzdGVwLm9uKCdkZXN0cm95JywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCB0cnVlKTtcbiAgICAgIHN0ZXAub24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdhZHZhbmNlT24gd2FzIGRlZmluZWQsIGJ1dCBubyBldmVudCBuYW1lIHdhcyBwYXNzZWQuJyk7XG4gIH1cbn1cblxudmFyIHRvcCA9ICd0b3AnO1xudmFyIGJvdHRvbSA9ICdib3R0b20nO1xudmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbnZhciBsZWZ0ID0gJ2xlZnQnO1xudmFyIGF1dG8gPSAnYXV0byc7XG52YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbnZhciBzdGFydCA9ICdzdGFydCc7XG52YXIgZW5kID0gJ2VuZCc7XG52YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG52YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xudmFyIHBvcHBlciA9ICdwb3BwZXInO1xudmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xudmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbnZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbnZhciBiZWZvcmVSZWFkID0gJ2JlZm9yZVJlYWQnO1xudmFyIHJlYWQgPSAncmVhZCc7XG52YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbnZhciBiZWZvcmVNYWluID0gJ2JlZm9yZU1haW4nO1xudmFyIG1haW4gPSAnbWFpbic7XG52YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxudmFyIGJlZm9yZVdyaXRlID0gJ2JlZm9yZVdyaXRlJztcbnZhciB3cml0ZSA9ICd3cml0ZSc7XG52YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbnZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTtcblxuZnVuY3Rpb24gZ2V0Tm9kZU5hbWUoZWxlbWVudCkge1xuICByZXR1cm4gZWxlbWVudCA/IChlbGVtZW50Lm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbi8vIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIEhUTUxFbGVtZW50cyBzdWNoIGFzIHBvcHBlciBhbmQgYXJyb3dcblxuZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdCQyKF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgYXBwbHlTdHlsZXMkMSA9IHtcbiAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBhcHBseVN0eWxlcyxcbiAgZWZmZWN0OiBlZmZlY3QkMixcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59O1xuXG5mdW5jdGlvbiBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG59XG5cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQsXG4gICAgYm90dG9tOiByZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgeDogcmVjdC5sZWZ0LFxuICAgIHk6IHJlY3QudG9wXG4gIH07XG59XG5cbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufVxuXG5mdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ106IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG5cblxuICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgIH0gLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldFdpbmRvdyhlbGVtZW50KS5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbn1cblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICByZXR1cm4gKChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQgOiAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgZWxlbWVudC5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KS5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUoZWxlbWVudCkge1xuICBpZiAoZ2V0Tm9kZU5hbWUoZWxlbWVudCkgPT09ICdodG1sJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuICgvLyB0aGlzIGlzIGEgcXVpY2tlciAoYnV0IGxlc3MgdHlwZSBzYWZlKSB3YXkgdG8gc2F2ZSBxdWl0ZSBzb21lIGJ5dGVzIGZyb20gdGhlIGJ1bmRsZVxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl1cbiAgICAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cbiAgICBlbGVtZW50LmFzc2lnbmVkU2xvdCB8fCAvLyBzdGVwIGludG8gdGhlIHNoYWRvdyBET00gb2YgdGhlIHBhcmVudCBvZiBhIHNsb3R0ZWQgbm9kZVxuICAgIGVsZW1lbnQucGFyZW50Tm9kZSB8fCAoIC8vIERPTSBFbGVtZW50IGRldGVjdGVkXG4gICAgaXNTaGFkb3dSb290KGVsZW1lbnQpID8gZWxlbWVudC5ob3N0IDogbnVsbCkgfHwgLy8gU2hhZG93Um9vdCBkZXRlY3RlZFxuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBIVE1MRWxlbWVudCBpcyBhIE5vZGVcbiAgICBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkgLy8gZmFsbGJhY2tcblxuICApO1xufVxuXG5mdW5jdGlvbiBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvODM3XG4gIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50Lm9mZnNldFBhcmVudDtcbn0gLy8gYC5vZmZzZXRQYXJlbnRgIHJlcG9ydHMgYG51bGxgIGZvciBmaXhlZCBlbGVtZW50cywgd2hpbGUgYWJzb2x1dGUgZWxlbWVudHNcbi8vIHJldHVybiB0aGUgY29udGFpbmluZyBibG9ja1xuXG5cbmZ1bmN0aW9uIGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB7XG4gIHZhciBpc0ZpcmVmb3ggPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMTtcbiAgdmFyIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSAhPT0gLTE7XG5cbiAgaWYgKGlzSUUgJiYgaXNIVE1MRWxlbWVudChlbGVtZW50KSkge1xuICAgIC8vIEluIElFIDksIDEwIGFuZCAxMSBmaXhlZCBlbGVtZW50cyBjb250YWluaW5nIGJsb2NrIGlzIGFsd2F5cyBlc3RhYmxpc2hlZCBieSB0aGUgdmlld3BvcnRcbiAgICB2YXIgZWxlbWVudENzcyA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgICBpZiAoZWxlbWVudENzcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgdmFyIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcblxuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgWydodG1sJywgJ2JvZHknXS5pbmRleE9mKGdldE5vZGVOYW1lKGN1cnJlbnROb2RlKSkgPCAwKSB7XG4gICAgdmFyIGNzcyA9IGdldENvbXB1dGVkU3R5bGUoY3VycmVudE5vZGUpOyAvLyBUaGlzIGlzIG5vbi1leGhhdXN0aXZlIGJ1dCBjb3ZlcnMgdGhlIG1vc3QgY29tbW9uIENTUyBwcm9wZXJ0aWVzIHRoYXRcbiAgICAvLyBjcmVhdGUgYSBjb250YWluaW5nIGJsb2NrLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Db250YWluaW5nX2Jsb2NrI2lkZW50aWZ5aW5nX3RoZV9jb250YWluaW5nX2Jsb2NrXG5cbiAgICBpZiAoY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IGNzcy5jb250YWluID09PSAncGFpbnQnIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJ10uaW5kZXhPZihjc3Mud2lsbENoYW5nZSkgIT09IC0xIHx8IGlzRmlyZWZveCAmJiBjc3Mud2lsbENoYW5nZSA9PT0gJ2ZpbHRlcicgfHwgaXNGaXJlZm94ICYmIGNzcy5maWx0ZXIgJiYgY3NzLmZpbHRlciAhPT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0gLy8gR2V0cyB0aGUgY2xvc2VzdCBhbmNlc3RvciBwb3NpdGlvbmVkIGVsZW1lbnQuIEhhbmRsZXMgc29tZSBlZGdlIGNhc2VzLFxuLy8gc3VjaCBhcyB0YWJsZSBhbmNlc3RvcnMgYW5kIGNyb3NzIGJyb3dzZXIgYnVncy5cblxuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KGVsZW1lbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICB3aGlsZSAob2Zmc2V0UGFyZW50ICYmIGlzVGFibGVFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIGlmIChvZmZzZXRQYXJlbnQgJiYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdodG1sJyB8fCBnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnYm9keScgJiYgZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldFBhcmVudCB8fCBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkgfHwgd2luZG93O1xufVxuXG5mdW5jdGlvbiBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgPj0gMCA/ICd4JyA6ICd5Jztcbn1cblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xudmFyIHJvdW5kID0gTWF0aC5yb3VuZDtcblxuZnVuY3Rpb24gd2l0aGluKG1pbiQxLCB2YWx1ZSwgbWF4JDEpIHtcbiAgcmV0dXJuIG1heChtaW4kMSwgbWluKHZhbHVlLCBtYXgkMSkpO1xufVxuXG5mdW5jdGlvbiBnZXRGcmVzaFNpZGVPYmplY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlUGFkZGluZ09iamVjdChwYWRkaW5nT2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBnZXRGcmVzaFNpZGVPYmplY3QoKSwgcGFkZGluZ09iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFRvSGFzaE1hcCh2YWx1ZSwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGhhc2hNYXAsIGtleSkge1xuICAgIGhhc2hNYXBba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBoYXNoTWFwO1xuICB9LCB7fSk7XG59XG5cbnZhciB0b1BhZGRpbmdPYmplY3QgPSBmdW5jdGlvbiB0b1BhZGRpbmdPYmplY3QocGFkZGluZywgc3RhdGUpIHtcbiAgcGFkZGluZyA9IHR5cGVvZiBwYWRkaW5nID09PSAnZnVuY3Rpb24nID8gcGFkZGluZyhPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHBhZGRpbmc7XG4gIHJldHVybiBtZXJnZVBhZGRpbmdPYmplY3QodHlwZW9mIHBhZGRpbmcgIT09ICdudW1iZXInID8gcGFkZGluZyA6IGV4cGFuZFRvSGFzaE1hcChwYWRkaW5nLCBiYXNlUGxhY2VtZW50cykpO1xufTtcblxuZnVuY3Rpb24gYXJyb3coX3JlZikge1xuICB2YXIgX3N0YXRlJG1vZGlmaWVyc0RhdGEkO1xuXG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciBheGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFtsZWZ0LCByaWdodF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwO1xuICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBpZiAoIWFycm93RWxlbWVudCB8fCAhcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gdG9QYWRkaW5nT2JqZWN0KG9wdGlvbnMucGFkZGluZywgc3RhdGUpO1xuICB2YXIgYXJyb3dSZWN0ID0gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpO1xuICB2YXIgbWluUHJvcCA9IGF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gIHZhciBtYXhQcm9wID0gYXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gIHZhciBlbmREaWZmID0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2xlbl0gKyBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc10gLSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucG9wcGVyW2xlbl07XG4gIHZhciBzdGFydERpZmYgPSBwb3BwZXJPZmZzZXRzW2F4aXNdIC0gc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdO1xuICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoYXJyb3dFbGVtZW50KTtcbiAgdmFyIGNsaWVudFNpemUgPSBhcnJvd09mZnNldFBhcmVudCA/IGF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudEhlaWdodCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggfHwgMCA6IDA7XG4gIHZhciBjZW50ZXJUb1JlZmVyZW5jZSA9IGVuZERpZmYgLyAyIC0gc3RhcnREaWZmIC8gMjsgLy8gTWFrZSBzdXJlIHRoZSBhcnJvdyBkb2Vzbid0IG92ZXJmbG93IHRoZSBwb3BwZXIgaWYgdGhlIGNlbnRlciBwb2ludCBpc1xuICAvLyBvdXRzaWRlIG9mIHRoZSBwb3BwZXIgYm91bmRzXG5cbiAgdmFyIG1pbiA9IHBhZGRpbmdPYmplY3RbbWluUHJvcF07XG4gIHZhciBtYXggPSBjbGllbnRTaXplIC0gYXJyb3dSZWN0W2xlbl0gLSBwYWRkaW5nT2JqZWN0W21heFByb3BdO1xuICB2YXIgY2VudGVyID0gY2xpZW50U2l6ZSAvIDIgLSBhcnJvd1JlY3RbbGVuXSAvIDIgKyBjZW50ZXJUb1JlZmVyZW5jZTtcbiAgdmFyIG9mZnNldCA9IHdpdGhpbihtaW4sIGNlbnRlciwgbWF4KTsgLy8gUHJldmVudHMgYnJlYWtpbmcgc3ludGF4IGhpZ2hsaWdodGluZy4uLlxuXG4gIHZhciBheGlzUHJvcCA9IGF4aXM7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSAoX3N0YXRlJG1vZGlmaWVyc0RhdGEkID0ge30sIF9zdGF0ZSRtb2RpZmllcnNEYXRhJFtheGlzUHJvcF0gPSBvZmZzZXQsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJC5jZW50ZXJPZmZzZXQgPSBvZmZzZXQgLSBjZW50ZXIsIF9zdGF0ZSRtb2RpZmllcnNEYXRhJCk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdCQxKF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYyLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgICAgYXJyb3dFbGVtZW50ID0gX29wdGlvbnMkZWxlbWVudCA9PT0gdm9pZCAwID8gJ1tkYXRhLXBvcHBlci1hcnJvd10nIDogX29wdGlvbnMkZWxlbWVudDtcblxuICBpZiAoYXJyb3dFbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gQ1NTIHNlbGVjdG9yXG5cblxuICBpZiAodHlwZW9mIGFycm93RWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgaWYgKCFhcnJvd0VsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbnRhaW5zKHN0YXRlLmVsZW1lbnRzLnBvcHBlciwgYXJyb3dFbGVtZW50KSkge1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3RhdGUuZWxlbWVudHMuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgYXJyb3ckMSA9IHtcbiAgbmFtZTogJ2Fycm93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGFycm93LFxuICBlZmZlY3Q6IGVmZmVjdCQxLFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J11cbn07XG5cbnZhciB1bnNldFNpZGVzID0ge1xuICB0b3A6ICdhdXRvJyxcbiAgcmlnaHQ6ICdhdXRvJyxcbiAgYm90dG9tOiAnYXV0bycsXG4gIGxlZnQ6ICdhdXRvJ1xufTsgLy8gUm91bmQgdGhlIG9mZnNldHMgdG8gdGhlIG5lYXJlc3Qgc3VpdGFibGUgc3VicGl4ZWwgYmFzZWQgb24gdGhlIERQUi5cbi8vIFpvb21pbmcgY2FuIGNoYW5nZSB0aGUgRFBSLCBidXQgaXQgc2VlbXMgdG8gcmVwb3J0IGEgdmFsdWUgdGhhdCB3aWxsXG4vLyBjbGVhbmx5IGRpdmlkZSB0aGUgdmFsdWVzIGludG8gdGhlIGFwcHJvcHJpYXRlIHN1YnBpeGVscy5cblxuZnVuY3Rpb24gcm91bmRPZmZzZXRzQnlEUFIoX3JlZikge1xuICB2YXIgeCA9IF9yZWYueCxcbiAgICAgIHkgPSBfcmVmLnk7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG4gIHZhciBkcHIgPSB3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICByZXR1cm4ge1xuICAgIHg6IHJvdW5kKHJvdW5kKHggKiBkcHIpIC8gZHByKSB8fCAwLFxuICAgIHk6IHJvdW5kKHJvdW5kKHkgKiBkcHIpIC8gZHByKSB8fCAwXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcFRvU3R5bGVzKF9yZWYyKSB7XG4gIHZhciBfT2JqZWN0JGFzc2lnbjI7XG5cbiAgdmFyIHBvcHBlciA9IF9yZWYyLnBvcHBlcixcbiAgICAgIHBvcHBlclJlY3QgPSBfcmVmMi5wb3BwZXJSZWN0LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZjIucGxhY2VtZW50LFxuICAgICAgb2Zmc2V0cyA9IF9yZWYyLm9mZnNldHMsXG4gICAgICBwb3NpdGlvbiA9IF9yZWYyLnBvc2l0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX3JlZjIuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgYWRhcHRpdmUgPSBfcmVmMi5hZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0cyA9IF9yZWYyLnJvdW5kT2Zmc2V0cztcblxuICB2YXIgX3JlZjMgPSByb3VuZE9mZnNldHMgPT09IHRydWUgPyByb3VuZE9mZnNldHNCeURQUihvZmZzZXRzKSA6IHR5cGVvZiByb3VuZE9mZnNldHMgPT09ICdmdW5jdGlvbicgPyByb3VuZE9mZnNldHMob2Zmc2V0cykgOiBvZmZzZXRzLFxuICAgICAgX3JlZjMkeCA9IF9yZWYzLngsXG4gICAgICB4ID0gX3JlZjMkeCA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHgsXG4gICAgICBfcmVmMyR5ID0gX3JlZjMueSxcbiAgICAgIHkgPSBfcmVmMyR5ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeTtcblxuICB2YXIgaGFzWCA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3gnKTtcbiAgdmFyIGhhc1kgPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd5Jyk7XG4gIHZhciBzaWRlWCA9IGxlZnQ7XG4gIHZhciBzaWRlWSA9IHRvcDtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICBpZiAoYWRhcHRpdmUpIHtcbiAgICB2YXIgb2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KHBvcHBlcik7XG4gICAgdmFyIGhlaWdodFByb3AgPSAnY2xpZW50SGVpZ2h0JztcbiAgICB2YXIgd2lkdGhQcm9wID0gJ2NsaWVudFdpZHRoJztcblxuICAgIGlmIChvZmZzZXRQYXJlbnQgPT09IGdldFdpbmRvdyhwb3BwZXIpKSB7XG4gICAgICBvZmZzZXRQYXJlbnQgPSBnZXREb2N1bWVudEVsZW1lbnQocG9wcGVyKTtcblxuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiAhPT0gJ3N0YXRpYycpIHtcbiAgICAgICAgaGVpZ2h0UHJvcCA9ICdzY3JvbGxIZWlnaHQnO1xuICAgICAgICB3aWR0aFByb3AgPSAnc2Nyb2xsV2lkdGgnO1xuICAgICAgfVxuICAgIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FzdF06IGZvcmNlIHR5cGUgcmVmaW5lbWVudCwgd2UgY29tcGFyZSBvZmZzZXRQYXJlbnQgd2l0aCB3aW5kb3cgYWJvdmUsIGJ1dCBGbG93IGRvZXNuJ3QgZGV0ZWN0IGl0XG5cblxuICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudDtcblxuICAgIGlmIChwbGFjZW1lbnQgPT09IHRvcCkge1xuICAgICAgc2lkZVkgPSBib3R0b207IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuXG4gICAgICB5IC09IG9mZnNldFBhcmVudFtoZWlnaHRQcm9wXSAtIHBvcHBlclJlY3QuaGVpZ2h0O1xuICAgICAgeSAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gbGVmdCkge1xuICAgICAgc2lkZVggPSByaWdodDsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHggLT0gb2Zmc2V0UGFyZW50W3dpZHRoUHJvcF0gLSBwb3BwZXJSZWN0LndpZHRoO1xuICAgICAgeCAqPSBncHVBY2NlbGVyYXRpb24gPyAxIDogLTE7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHBvc2l0aW9uOiBwb3NpdGlvblxuICB9LCBhZGFwdGl2ZSAmJiB1bnNldFNpZGVzKTtcblxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIF9PYmplY3QkYXNzaWduO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduID0ge30sIF9PYmplY3QkYXNzaWduW3NpZGVZXSA9IGhhc1kgPyAnMCcgOiAnJywgX09iamVjdCRhc3NpZ25bc2lkZVhdID0gaGFzWCA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbi50cmFuc2Zvcm0gPSAod2luLmRldmljZVBpeGVsUmF0aW8gfHwgMSkgPCAyID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY0KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY0LnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWY0Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXG4gIHZhciBjb21tb25TdHlsZXMgPSB7XG4gICAgcGxhY2VtZW50OiBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uXG4gIH07XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnN0eWxlcy5wb3BwZXIsIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLFxuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBhZGFwdGl2ZTogYWRhcHRpdmUsXG4gICAgICByb3VuZE9mZnNldHM6IHJvdW5kT2Zmc2V0c1xuICAgIH0pKSk7XG4gIH1cblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyAhPSBudWxsKSB7XG4gICAgc3RhdGUuc3R5bGVzLmFycm93ID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLmFycm93LCBtYXBUb1N0eWxlcyhPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIHtcbiAgICAgIG9mZnNldHM6IHN0YXRlLm1vZGlmaWVyc0RhdGEuYXJyb3csXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGFkYXB0aXZlOiBmYWxzZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcGxhY2VtZW50Jzogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGNvbXB1dGVTdHlsZXMkMSA9IHtcbiAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ2JlZm9yZVdyaXRlJyxcbiAgZm46IGNvbXB1dGVTdHlsZXMsXG4gIGRhdGE6IHt9XG59O1xuXG52YXIgcGFzc2l2ZSA9IHtcbiAgcGFzc2l2ZTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZWZmZWN0KF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRzY3JvbGwgPSBvcHRpb25zLnNjcm9sbCxcbiAgICAgIHNjcm9sbCA9IF9vcHRpb25zJHNjcm9sbCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHNjcm9sbCxcbiAgICAgIF9vcHRpb25zJHJlc2l6ZSA9IG9wdGlvbnMucmVzaXplLFxuICAgICAgcmVzaXplID0gX29wdGlvbnMkcmVzaXplID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcmVzaXplO1xuICB2YXIgd2luZG93ID0gZ2V0V2luZG93KHN0YXRlLmVsZW1lbnRzLnBvcHBlcik7XG4gIHZhciBzY3JvbGxQYXJlbnRzID0gW10uY29uY2F0KHN0YXRlLnNjcm9sbFBhcmVudHMucmVmZXJlbmNlLCBzdGF0ZS5zY3JvbGxQYXJlbnRzLnBvcHBlcik7XG5cbiAgaWYgKHNjcm9sbCkge1xuICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICBzY3JvbGxQYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChyZXNpemUpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgICAgc2Nyb2xsUGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVzaXplKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICB9XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgZXZlbnRMaXN0ZW5lcnMgPSB7XG4gIG5hbWU6ICdldmVudExpc3RlbmVycycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnd3JpdGUnLFxuICBmbjogZnVuY3Rpb24gZm4oKSB7fSxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIGRhdGE6IHt9XG59O1xuXG52YXIgaGFzaCQxID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2gkMVttYXRjaGVkXTtcbiAgfSk7XG59XG5cbnZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93U2Nyb2xsKG5vZGUpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhub2RlKTtcbiAgdmFyIHNjcm9sbExlZnQgPSB3aW4ucGFnZVhPZmZzZXQ7XG4gIHZhciBzY3JvbGxUb3AgPSB3aW4ucGFnZVlPZmZzZXQ7XG4gIHJldHVybiB7XG4gICAgc2Nyb2xsTGVmdDogc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IHNjcm9sbFRvcFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcbiAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAvLyBhbnl3YXkuXG4gIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG4gIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSB7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBodG1sID0gZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpO1xuICB2YXIgdmlzdWFsVmlld3BvcnQgPSB3aW4udmlzdWFsVmlld3BvcnQ7XG4gIHZhciB3aWR0aCA9IGh0bWwuY2xpZW50V2lkdGg7XG4gIHZhciBoZWlnaHQgPSBodG1sLmNsaWVudEhlaWdodDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7IC8vIE5COiBUaGlzIGlzbid0IHN1cHBvcnRlZCBvbiBpT1MgPD0gMTIuIElmIHRoZSBrZXlib2FyZCBpcyBvcGVuLCB0aGUgcG9wcGVyXG4gIC8vIGNhbiBiZSBvYnNjdXJlZCB1bmRlcm5lYXRoIGl0LlxuICAvLyBBbHNvLCBgaHRtbC5jbGllbnRIZWlnaHRgIGFkZHMgdGhlIGJvdHRvbSBiYXIgaGVpZ2h0IGluIFNhZmFyaSBpT1MsIGV2ZW5cbiAgLy8gaWYgaXQgaXNuJ3Qgb3Blbiwgc28gaWYgdGhpcyBpc24ndCBhdmFpbGFibGUsIHRoZSBwb3BwZXIgd2lsbCBiZSBkZXRlY3RlZFxuICAvLyB0byBvdmVyZmxvdyB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4gdG9vIGVhcmx5LlxuXG4gIGlmICh2aXN1YWxWaWV3cG9ydCkge1xuICAgIHdpZHRoID0gdmlzdWFsVmlld3BvcnQud2lkdGg7XG4gICAgaGVpZ2h0ID0gdmlzdWFsVmlld3BvcnQuaGVpZ2h0OyAvLyBVc2VzIExheW91dCBWaWV3cG9ydCAobGlrZSBDaHJvbWU7IFNhZmFyaSBkb2VzIG5vdCBjdXJyZW50bHkpXG4gICAgLy8gSW4gQ2hyb21lLCBpdCByZXR1cm5zIGEgdmFsdWUgdmVyeSBjbG9zZSB0byAwICgrLy0pIGJ1dCBjb250YWlucyByb3VuZGluZ1xuICAgIC8vIGVycm9ycyBkdWUgdG8gZmxvYXRpbmcgcG9pbnQgbnVtYmVycywgc28gd2UgbmVlZCB0byBjaGVjayBwcmVjaXNpb24uXG4gICAgLy8gU2FmYXJpIHJldHVybnMgYSBudW1iZXIgPD0gMCwgdXN1YWxseSA8IC0xIHdoZW4gcGluY2gtem9vbWVkXG4gICAgLy8gRmVhdHVyZSBkZXRlY3Rpb24gZmFpbHMgaW4gbW9iaWxlIGVtdWxhdGlvbiBtb2RlIGluIENocm9tZS5cbiAgICAvLyBNYXRoLmFicyh3aW4uaW5uZXJXaWR0aCAvIHZpc3VhbFZpZXdwb3J0LnNjYWxlIC0gdmlzdWFsVmlld3BvcnQud2lkdGgpIDxcbiAgICAvLyAwLjAwMVxuICAgIC8vIEZhbGxiYWNrIGhlcmU6IFwiTm90IFNhZmFyaVwiIHVzZXJBZ2VudFxuXG4gICAgaWYgKCEvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICB4ID0gdmlzdWFsVmlld3BvcnQub2Zmc2V0TGVmdDtcbiAgICAgIHkgPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgeDogeCArIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCksXG4gICAgeTogeVxuICB9O1xufVxuXG4vLyBvZiB0aGUgYDxodG1sPmAgYW5kIGA8Ym9keT5gIHJlY3QgYm91bmRzIGlmIGhvcml6b250YWxseSBzY3JvbGxhYmxlXG5cbmZ1bmN0aW9uIGdldERvY3VtZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB3aW5TY3JvbGwgPSBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCk7XG4gIHZhciBib2R5ID0gKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5O1xuICB2YXIgd2lkdGggPSBtYXgoaHRtbC5zY3JvbGxXaWR0aCwgaHRtbC5jbGllbnRXaWR0aCwgYm9keSA/IGJvZHkuc2Nyb2xsV2lkdGggOiAwLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApO1xuICB2YXIgaGVpZ2h0ID0gbWF4KGh0bWwuc2Nyb2xsSGVpZ2h0LCBodG1sLmNsaWVudEhlaWdodCwgYm9keSA/IGJvZHkuc2Nyb2xsSGVpZ2h0IDogMCwgYm9keSA/IGJvZHkuY2xpZW50SGVpZ2h0IDogMCk7XG4gIHZhciB4ID0gLXdpblNjcm9sbC5zY3JvbGxMZWZ0ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KTtcbiAgdmFyIHkgPSAtd2luU2Nyb2xsLnNjcm9sbFRvcDtcblxuICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShib2R5IHx8IGh0bWwpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICB4ICs9IG1heChodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5jbGllbnRXaWR0aCA6IDApIC0gd2lkdGg7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4LFxuICAgIHk6IHlcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICAvLyBGaXJlZm94IHdhbnRzIHVzIHRvIGNoZWNrIGAteGAgYW5kIGAteWAgdmFyaWF0aW9ucyBhcyB3ZWxsXG4gIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBvdmVyZmxvdyA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93LFxuICAgICAgb3ZlcmZsb3dYID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xuXG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQobm9kZSkge1xuICBpZiAoWydodG1sJywgJ2JvZHknLCAnI2RvY3VtZW50J10uaW5kZXhPZihnZXROb2RlTmFtZShub2RlKSkgPj0gMCkge1xuICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50LmJvZHk7XG4gIH1cblxuICBpZiAoaXNIVE1MRWxlbWVudChub2RlKSAmJiBpc1Njcm9sbFBhcmVudChub2RlKSkge1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgcmV0dXJuIGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKG5vZGUpKTtcbn1cblxuLypcbmdpdmVuIGEgRE9NIGVsZW1lbnQsIHJldHVybiB0aGUgbGlzdCBvZiBhbGwgc2Nyb2xsIHBhcmVudHMsIHVwIHRoZSBsaXN0IG9mIGFuY2Vzb3JzXG51bnRpbCB3ZSBnZXQgdG8gdGhlIHRvcCB3aW5kb3cgb2JqZWN0LiBUaGlzIGxpc3QgaXMgd2hhdCB3ZSBhdHRhY2ggc2Nyb2xsIGxpc3RlbmVyc1xudG8sIGJlY2F1c2UgaWYgYW55IG9mIHRoZXNlIHBhcmVudCBlbGVtZW50cyBzY3JvbGwsIHdlJ2xsIG5lZWQgdG8gcmUtY2FsY3VsYXRlIHRoZVxucmVmZXJlbmNlIGVsZW1lbnQncyBwb3NpdGlvbi5cbiovXG5cbmZ1bmN0aW9uIGxpc3RTY3JvbGxQYXJlbnRzKGVsZW1lbnQsIGxpc3QpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG5cbiAgdmFyIHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChlbGVtZW50KTtcbiAgdmFyIGlzQm9keSA9IHNjcm9sbFBhcmVudCA9PT0gKChfZWxlbWVudCRvd25lckRvY3VtZW4gPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQpID09IG51bGwgPyB2b2lkIDAgOiBfZWxlbWVudCRvd25lckRvY3VtZW4uYm9keSk7XG4gIHZhciB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsUGFyZW50KTtcbiAgdmFyIHRhcmdldCA9IGlzQm9keSA/IFt3aW5dLmNvbmNhdCh3aW4udmlzdWFsVmlld3BvcnQgfHwgW10sIGlzU2Nyb2xsUGFyZW50KHNjcm9sbFBhcmVudCkgPyBzY3JvbGxQYXJlbnQgOiBbXSkgOiBzY3JvbGxQYXJlbnQ7XG4gIHZhciB1cGRhdGVkTGlzdCA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyB1cGRhdGVkTGlzdCA6IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhbGxdOiBpc0JvZHkgdGVsbHMgdXMgdGFyZ2V0IHdpbGwgYmUgYW4gSFRNTEVsZW1lbnQgaGVyZVxuICB1cGRhdGVkTGlzdC5jb25jYXQobGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZSh0YXJnZXQpKSk7XG59XG5cbmZ1bmN0aW9uIHJlY3RUb0NsaWVudFJlY3QocmVjdCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVjdCwge1xuICAgIGxlZnQ6IHJlY3QueCxcbiAgICB0b3A6IHJlY3QueSxcbiAgICByaWdodDogcmVjdC54ICsgcmVjdC53aWR0aCxcbiAgICBib3R0b206IHJlY3QueSArIHJlY3QuaGVpZ2h0XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpO1xuICByZWN0LnRvcCA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRUb3A7XG4gIHJlY3QubGVmdCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50TGVmdDtcbiAgcmVjdC5ib3R0b20gPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnJpZ2h0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC53aWR0aCA9IGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3QuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QueCA9IHJlY3QubGVmdDtcbiAgcmVjdC55ID0gcmVjdC50b3A7XG4gIHJldHVybiByZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCkge1xuICByZXR1cm4gY2xpcHBpbmdQYXJlbnQgPT09IHZpZXdwb3J0ID8gcmVjdFRvQ2xpZW50UmVjdChnZXRWaWV3cG9ydFJlY3QoZWxlbWVudCkpIDogaXNIVE1MRWxlbWVudChjbGlwcGluZ1BhcmVudCkgPyBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ1BhcmVudCkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbn0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuLy8gYGluaXRpYWxgXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keSc7XG4gIH0pO1xufSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZU9mZnNldHMoX3JlZikge1xuICB2YXIgcmVmZXJlbmNlID0gX3JlZi5yZWZlcmVuY2UsXG4gICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50ID8gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIHZhcmlhdGlvbiA9IHBsYWNlbWVudCA/IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIDogbnVsbDtcbiAgdmFyIGNvbW1vblggPSByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCAvIDIgLSBlbGVtZW50LndpZHRoIC8gMjtcbiAgdmFyIGNvbW1vblkgPSByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHQgLyAyIC0gZWxlbWVudC5oZWlnaHQgLyAyO1xuICB2YXIgb2Zmc2V0cztcblxuICBzd2l0Y2ggKGJhc2VQbGFjZW1lbnQpIHtcbiAgICBjYXNlIHRvcDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55IC0gZWxlbWVudC5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgYm90dG9tOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHJpZ2h0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgbGVmdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54IC0gZWxlbWVudC53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54LFxuICAgICAgICB5OiByZWZlcmVuY2UueVxuICAgICAgfTtcbiAgfVxuXG4gIHZhciBtYWluQXhpcyA9IGJhc2VQbGFjZW1lbnQgPyBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCkgOiBudWxsO1xuXG4gIGlmIChtYWluQXhpcyAhPSBudWxsKSB7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgICBzd2l0Y2ggKHZhcmlhdGlvbikge1xuICAgICAgY2FzZSBzdGFydDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSAtIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgZW5kOlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdICsgKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn1cblxuZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCxcbiAgICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgdmFyIHJlZmVyZW5jZUVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW2FsdEJvdW5kYXJ5ID8gYWx0Q29udGV4dCA6IGVsZW1lbnRDb250ZXh0XTtcbiAgdmFyIGNsaXBwaW5nQ2xpZW50UmVjdCA9IGdldENsaXBwaW5nUmVjdChpc0VsZW1lbnQoZWxlbWVudCkgPyBlbGVtZW50IDogZWxlbWVudC5jb250ZXh0RWxlbWVudCB8fCBnZXREb2N1bWVudEVsZW1lbnQoc3RhdGUuZWxlbWVudHMucG9wcGVyKSwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSk7XG4gIHZhciByZWZlcmVuY2VDbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHJlZmVyZW5jZUVsZW1lbnQpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHJlZmVyZW5jZUNsaWVudFJlY3QsXG4gICAgZWxlbWVudDogcG9wcGVyUmVjdCxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KTtcbiAgdmFyIHBvcHBlckNsaWVudFJlY3QgPSByZWN0VG9DbGllbnRSZWN0KE9iamVjdC5hc3NpZ24oe30sIHBvcHBlclJlY3QsIHBvcHBlck9mZnNldHMpKTtcbiAgdmFyIGVsZW1lbnRDbGllbnRSZWN0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHBvcHBlckNsaWVudFJlY3QgOiByZWZlcmVuY2VDbGllbnRSZWN0OyAvLyBwb3NpdGl2ZSA9IG92ZXJmbG93aW5nIHRoZSBjbGlwcGluZyByZWN0XG4gIC8vIDAgb3IgbmVnYXRpdmUgPSB3aXRoaW4gdGhlIGNsaXBwaW5nIHJlY3RcblxuICB2YXIgb3ZlcmZsb3dPZmZzZXRzID0ge1xuICAgIHRvcDogY2xpcHBpbmdDbGllbnRSZWN0LnRvcCAtIGVsZW1lbnRDbGllbnRSZWN0LnRvcCArIHBhZGRpbmdPYmplY3QudG9wLFxuICAgIGJvdHRvbTogZWxlbWVudENsaWVudFJlY3QuYm90dG9tIC0gY2xpcHBpbmdDbGllbnRSZWN0LmJvdHRvbSArIHBhZGRpbmdPYmplY3QuYm90dG9tLFxuICAgIGxlZnQ6IGNsaXBwaW5nQ2xpZW50UmVjdC5sZWZ0IC0gZWxlbWVudENsaWVudFJlY3QubGVmdCArIHBhZGRpbmdPYmplY3QubGVmdCxcbiAgICByaWdodDogZWxlbWVudENsaWVudFJlY3QucmlnaHQgLSBjbGlwcGluZ0NsaWVudFJlY3QucmlnaHQgKyBwYWRkaW5nT2JqZWN0LnJpZ2h0XG4gIH07XG4gIHZhciBvZmZzZXREYXRhID0gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXQ7IC8vIE9mZnNldHMgY2FuIGJlIGFwcGxpZWQgb25seSB0byB0aGUgcG9wcGVyIGVsZW1lbnRcblxuICBpZiAoZWxlbWVudENvbnRleHQgPT09IHBvcHBlciAmJiBvZmZzZXREYXRhKSB7XG4gICAgdmFyIG9mZnNldCA9IG9mZnNldERhdGFbcGxhY2VtZW50XTtcbiAgICBPYmplY3Qua2V5cyhvdmVyZmxvd09mZnNldHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG11bHRpcGx5ID0gW3JpZ2h0LCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gMSA6IC0xO1xuICAgICAgdmFyIGF4aXMgPSBbdG9wLCBib3R0b21dLmluZGV4T2Yoa2V5KSA+PSAwID8gJ3knIDogJ3gnO1xuICAgICAgb3ZlcmZsb3dPZmZzZXRzW2tleV0gKz0gb2Zmc2V0W2F4aXNdICogbXVsdGlwbHk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gb3ZlcmZsb3dPZmZzZXRzO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBfb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMucGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPSBfb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBfb3B0aW9ucyRhbGxvd2VkQXV0b1AgPT09IHZvaWQgMCA/IHBsYWNlbWVudHMgOiBfb3B0aW9ucyRhbGxvd2VkQXV0b1A7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KTtcbiAgdmFyIHBsYWNlbWVudHMkMSA9IHZhcmlhdGlvbiA/IGZsaXBWYXJpYXRpb25zID8gdmFyaWF0aW9uUGxhY2VtZW50cyA6IHZhcmlhdGlvblBsYWNlbWVudHMuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHZhcmlhdGlvbjtcbiAgfSkgOiBiYXNlUGxhY2VtZW50cztcbiAgdmFyIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cyQxLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFsbG93ZWRBdXRvUGxhY2VtZW50cy5pbmRleE9mKHBsYWNlbWVudCkgPj0gMDtcbiAgfSk7XG5cbiAgaWYgKGFsbG93ZWRQbGFjZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGFsbG93ZWRQbGFjZW1lbnRzID0gcGxhY2VtZW50cyQxO1xuICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdOiBGbG93IHNlZW1zIHRvIGhhdmUgcHJvYmxlbXMgd2l0aCB0d28gYXJyYXkgdW5pb25zLi4uXG5cblxuICB2YXIgb3ZlcmZsb3dzID0gYWxsb3dlZFBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSlbZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpXTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvdmVyZmxvd3MpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dzW2FdIC0gb3ZlcmZsb3dzW2JdO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocGxhY2VtZW50KSB7XG4gIGlmIChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICB2YXIgb3Bwb3NpdGVQbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICByZXR1cm4gW2dldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCksIG9wcG9zaXRlUGxhY2VtZW50LCBnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChvcHBvc2l0ZVBsYWNlbWVudCldO1xufVxuXG5mdW5jdGlvbiBmbGlwKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnMsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhbHRBeGlzLFxuICAgICAgc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzID0gb3B0aW9ucy5mYWxsYmFja1BsYWNlbWVudHMsXG4gICAgICBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgYm91bmRhcnkgPSBvcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gb3B0aW9ucy5yb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IG9wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPSBvcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucyRmbGlwVmFyaWF0aW8gPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRmbGlwVmFyaWF0aW8sXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHMgPSBvcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cztcbiAgdmFyIHByZWZlcnJlZFBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9IGJhc2VQbGFjZW1lbnQgPT09IHByZWZlcnJlZFBsYWNlbWVudDtcbiAgdmFyIGZhbGxiYWNrUGxhY2VtZW50cyA9IHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyB8fCAoaXNCYXNlUGxhY2VtZW50IHx8ICFmbGlwVmFyaWF0aW9ucyA/IFtnZXRPcHBvc2l0ZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpXSA6IGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHByZWZlcnJlZFBsYWNlbWVudCkpO1xuICB2YXIgcGxhY2VtZW50cyA9IFtwcmVmZXJyZWRQbGFjZW1lbnRdLmNvbmNhdChmYWxsYmFja1BsYWNlbWVudHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWNjLmNvbmNhdChnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgPT09IGF1dG8gPyBjb21wdXRlQXV0b1BsYWNlbWVudChzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9uczogZmxpcFZhcmlhdGlvbnMsXG4gICAgICBhbGxvd2VkQXV0b1BsYWNlbWVudHM6IGFsbG93ZWRBdXRvUGxhY2VtZW50c1xuICAgIH0pIDogcGxhY2VtZW50KTtcbiAgfSwgW10pO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBjaGVja3NNYXAgPSBuZXcgTWFwKCk7XG4gIHZhciBtYWtlRmFsbGJhY2tDaGVja3MgPSB0cnVlO1xuICB2YXIgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50c1swXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBsYWNlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGxhY2VtZW50ID0gcGxhY2VtZW50c1tpXTtcblxuICAgIHZhciBfYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcblxuICAgIHZhciBpc1N0YXJ0VmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgPT09IHN0YXJ0O1xuICAgIHZhciBpc1ZlcnRpY2FsID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKF9iYXNlUGxhY2VtZW50KSA+PSAwO1xuICAgIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuICAgIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pO1xuICAgIHZhciBtYWluVmFyaWF0aW9uU2lkZSA9IGlzVmVydGljYWwgPyBpc1N0YXJ0VmFyaWF0aW9uID8gcmlnaHQgOiBsZWZ0IDogaXNTdGFydFZhcmlhdGlvbiA/IGJvdHRvbSA6IHRvcDtcblxuICAgIGlmIChyZWZlcmVuY2VSZWN0W2xlbl0gPiBwb3BwZXJSZWN0W2xlbl0pIHtcbiAgICAgIG1haW5WYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIH1cblxuICAgIHZhciBhbHRWYXJpYXRpb25TaWRlID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQobWFpblZhcmlhdGlvblNpZGUpO1xuICAgIHZhciBjaGVja3MgPSBbXTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1tfYmFzZVBsYWNlbWVudF0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbbWFpblZhcmlhdGlvblNpZGVdIDw9IDAsIG92ZXJmbG93W2FsdFZhcmlhdGlvblNpZGVdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja3MuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICByZXR1cm4gY2hlY2s7XG4gICAgfSkpIHtcbiAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudDtcbiAgICAgIG1ha2VGYWxsYmFja0NoZWNrcyA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2hlY2tzTWFwLnNldChwbGFjZW1lbnQsIGNoZWNrcyk7XG4gIH1cblxuICBpZiAobWFrZUZhbGxiYWNrQ2hlY2tzKSB7XG4gICAgLy8gYDJgIG1heSBiZSBkZXNpcmVkIGluIHNvbWUgY2FzZXMg4oCTIHJlc2VhcmNoIGxhdGVyXG4gICAgdmFyIG51bWJlck9mQ2hlY2tzID0gZmxpcFZhcmlhdGlvbnMgPyAzIDogMTtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKF9pKSB7XG4gICAgICB2YXIgZml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHMuZmluZChmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgICAgIHZhciBjaGVja3MgPSBjaGVja3NNYXAuZ2V0KHBsYWNlbWVudCk7XG5cbiAgICAgICAgaWYgKGNoZWNrcykge1xuICAgICAgICAgIHJldHVybiBjaGVja3Muc2xpY2UoMCwgX2kpLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gZml0dGluZ1BsYWNlbWVudDtcbiAgICAgICAgcmV0dXJuIFwiYnJlYWtcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yICh2YXIgX2kgPSBudW1iZXJPZkNoZWNrczsgX2kgPiAwOyBfaS0tKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKF9pKTtcblxuICAgICAgaWYgKF9yZXQgPT09IFwiYnJlYWtcIikgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLnBsYWNlbWVudCAhPT0gZmlyc3RGaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCA9IHRydWU7XG4gICAgc3RhdGUucGxhY2VtZW50ID0gZmlyc3RGaXR0aW5nUGxhY2VtZW50O1xuICAgIHN0YXRlLnJlc2V0ID0gdHJ1ZTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGZsaXAkMSA9IHtcbiAgbmFtZTogJ2ZsaXAnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogZmxpcCxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXSxcbiAgZGF0YToge1xuICAgIF9za2lwOiBmYWxzZVxuICB9XG59O1xuXG5mdW5jdGlvbiBnZXRTaWRlT2Zmc2V0cyhvdmVyZmxvdywgcmVjdCwgcHJldmVudGVkT2Zmc2V0cykge1xuICBpZiAocHJldmVudGVkT2Zmc2V0cyA9PT0gdm9pZCAwKSB7XG4gICAgcHJldmVudGVkT2Zmc2V0cyA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wOiBvdmVyZmxvdy50b3AgLSByZWN0LmhlaWdodCAtIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICByaWdodDogb3ZlcmZsb3cucmlnaHQgLSByZWN0LndpZHRoICsgcHJldmVudGVkT2Zmc2V0cy54LFxuICAgIGJvdHRvbTogb3ZlcmZsb3cuYm90dG9tIC0gcmVjdC5oZWlnaHQgKyBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgbGVmdDogb3ZlcmZsb3cubGVmdCAtIHJlY3Qud2lkdGggLSBwcmV2ZW50ZWRPZmZzZXRzLnhcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKG92ZXJmbG93KSB7XG4gIHJldHVybiBbdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0XS5zb21lKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93W3NpZGVdID49IDA7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHByZXZlbnRlZE9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnByZXZlbnRPdmVyZmxvdztcbiAgdmFyIHJlZmVyZW5jZU92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBlbGVtZW50Q29udGV4dDogJ3JlZmVyZW5jZSdcbiAgfSk7XG4gIHZhciBwb3BwZXJBbHRPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYWx0Qm91bmRhcnk6IHRydWVcbiAgfSk7XG4gIHZhciByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhyZWZlcmVuY2VPdmVyZmxvdywgcmVmZXJlbmNlUmVjdCk7XG4gIHZhciBwb3BwZXJFc2NhcGVPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocG9wcGVyQWx0T3ZlcmZsb3csIHBvcHBlclJlY3QsIHByZXZlbnRlZE9mZnNldHMpO1xuICB2YXIgaXNSZWZlcmVuY2VIaWRkZW4gPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzKTtcbiAgdmFyIGhhc1BvcHBlckVzY2FwZWQgPSBpc0FueVNpZGVGdWxseUNsaXBwZWQocG9wcGVyRXNjYXBlT2Zmc2V0cyk7XG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSB7XG4gICAgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzOiByZWZlcmVuY2VDbGlwcGluZ09mZnNldHMsXG4gICAgcG9wcGVyRXNjYXBlT2Zmc2V0czogcG9wcGVyRXNjYXBlT2Zmc2V0cyxcbiAgICBpc1JlZmVyZW5jZUhpZGRlbjogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgaGFzUG9wcGVyRXNjYXBlZDogaGFzUG9wcGVyRXNjYXBlZFxuICB9O1xuICBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyLCB7XG4gICAgJ2RhdGEtcG9wcGVyLXJlZmVyZW5jZS1oaWRkZW4nOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICAnZGF0YS1wb3BwZXItZXNjYXBlZCc6IGhhc1BvcHBlckVzY2FwZWRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgaGlkZSQxID0ge1xuICBuYW1lOiAnaGlkZScsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsncHJldmVudE92ZXJmbG93J10sXG4gIGZuOiBoaWRlXG59O1xuXG5mdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIG9mZnNldCQxID0ge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59O1xuXG5mdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7IC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiBzdGF0ZS5yZWN0cy5yZWZlcmVuY2UsXG4gICAgZWxlbWVudDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIHBvcHBlck9mZnNldHMkMSA9IHtcbiAgbmFtZTogJ3BvcHBlck9mZnNldHMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3JlYWQnLFxuICBmbjogcG9wcGVyT2Zmc2V0cyxcbiAgZGF0YToge31cbn07XG5cbmZ1bmN0aW9uIGdldEFsdEF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufVxuXG5mdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBfb3B0aW9ucyR0ZXRoZXIgPSBvcHRpb25zLnRldGhlcixcbiAgICAgIHRldGhlciA9IF9vcHRpb25zJHRldGhlciA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHRldGhlcixcbiAgICAgIF9vcHRpb25zJHRldGhlck9mZnNldCA9IG9wdGlvbnMudGV0aGVyT2Zmc2V0LFxuICAgICAgdGV0aGVyT2Zmc2V0ID0gX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkdGV0aGVyT2Zmc2V0O1xuICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeVxuICB9KTtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHN0YXRlLnBsYWNlbWVudCk7XG4gIHZhciB2YXJpYXRpb24gPSBnZXRWYXJpYXRpb24oc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGlzQmFzZVBsYWNlbWVudCA9ICF2YXJpYXRpb247XG4gIHZhciBtYWluQXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGFsdEF4aXMgPSBnZXRBbHRBeGlzKG1haW5BeGlzKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIHRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IHRldGhlck9mZnNldChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5yZWN0cywge1xuICAgIHBsYWNlbWVudDogc3RhdGUucGxhY2VtZW50XG4gIH0pKSA6IHRldGhlck9mZnNldDtcbiAgdmFyIGRhdGEgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKCFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNoZWNrTWFpbkF4aXMgfHwgY2hlY2tBbHRBeGlzKSB7XG4gICAgdmFyIG1haW5TaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IHRvcCA6IGxlZnQ7XG4gICAgdmFyIGFsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gYm90dG9tIDogcmlnaHQ7XG4gICAgdmFyIGxlbiA9IG1haW5BeGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gICAgdmFyIG9mZnNldCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdO1xuICAgIHZhciBtaW4kMSA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgb3ZlcmZsb3dbbWFpblNpZGVdO1xuICAgIHZhciBtYXgkMSA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdIC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSB0ZXRoZXJPZmZzZXRWYWx1ZSA6IG1pbkxlbiAtIGFycm93TGVuIC0gYXJyb3dQYWRkaW5nTWluIC0gdGV0aGVyT2Zmc2V0VmFsdWU7XG4gICAgdmFyIG1heE9mZnNldCA9IGlzQmFzZVBsYWNlbWVudCA/IC1yZWZlcmVuY2VSZWN0W2xlbl0gLyAyICsgYWRkaXRpdmUgKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIHRldGhlck9mZnNldFZhbHVlIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyB0ZXRoZXJPZmZzZXRWYWx1ZTtcbiAgICB2YXIgYXJyb3dPZmZzZXRQYXJlbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdyAmJiBnZXRPZmZzZXRQYXJlbnQoc3RhdGUuZWxlbWVudHMuYXJyb3cpO1xuICAgIHZhciBjbGllbnRPZmZzZXQgPSBhcnJvd09mZnNldFBhcmVudCA/IG1haW5BeGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRUb3AgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudExlZnQgfHwgMCA6IDA7XG4gICAgdmFyIG9mZnNldE1vZGlmaWVyVmFsdWUgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldCA/IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0W3N0YXRlLnBsYWNlbWVudF1bbWFpbkF4aXNdIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBtaW5PZmZzZXQgLSBvZmZzZXRNb2RpZmllclZhbHVlIC0gY2xpZW50T2Zmc2V0O1xuICAgIHZhciB0ZXRoZXJNYXggPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG1heE9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWU7XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgdmFyIHByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtaW4obWluJDEsIHRldGhlck1pbikgOiBtaW4kMSwgb2Zmc2V0LCB0ZXRoZXIgPyBtYXgobWF4JDEsIHRldGhlck1heCkgOiBtYXgkMSk7XG4gICAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0IC0gb2Zmc2V0O1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgICAgdmFyIF9hbHRTaWRlID0gbWFpbkF4aXMgPT09ICd4JyA/IGJvdHRvbSA6IHJpZ2h0O1xuXG4gICAgICB2YXIgX29mZnNldCA9IHBvcHBlck9mZnNldHNbYWx0QXhpc107XG5cbiAgICAgIHZhciBfbWluID0gX29mZnNldCArIG92ZXJmbG93W19tYWluU2lkZV07XG5cbiAgICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgICAgdmFyIF9wcmV2ZW50ZWRPZmZzZXQgPSB3aXRoaW4odGV0aGVyID8gbWluKF9taW4sIHRldGhlck1pbikgOiBfbWluLCBfb2Zmc2V0LCB0ZXRoZXIgPyBtYXgoX21heCwgdGV0aGVyTWF4KSA6IF9tYXgpO1xuXG4gICAgICBwb3BwZXJPZmZzZXRzW2FsdEF4aXNdID0gX3ByZXZlbnRlZE9mZnNldDtcbiAgICAgIGRhdGFbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0IC0gX29mZnNldDtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gZGF0YTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBwcmV2ZW50T3ZlcmZsb3ckMSA9IHtcbiAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBwcmV2ZW50T3ZlcmZsb3csXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J11cbn07XG5cbmZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59XG5cbi8vIENvbXBvc2l0ZSBtZWFucyBpdCB0YWtlcyBpbnRvIGFjY291bnQgdHJhbnNmb3JtcyBhcyB3ZWxsIGFzIGxheW91dC5cblxuZnVuY3Rpb24gZ2V0Q29tcG9zaXRlUmVjdChlbGVtZW50T3JWaXJ0dWFsRWxlbWVudCwgb2Zmc2V0UGFyZW50LCBpc0ZpeGVkKSB7XG4gIGlmIChpc0ZpeGVkID09PSB2b2lkIDApIHtcbiAgICBpc0ZpeGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciByZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50KTtcbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgc2Nyb2xsID0ge1xuICAgIHNjcm9sbExlZnQ6IDAsXG4gICAgc2Nyb2xsVG9wOiAwXG4gIH07XG4gIHZhciBvZmZzZXRzID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmIChpc09mZnNldFBhcmVudEFuRWxlbWVudCB8fCAhaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgJiYgIWlzRml4ZWQpIHtcbiAgICBpZiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSAhPT0gJ2JvZHknIHx8IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3BwZXJqcy9wb3BwZXItY29yZS9pc3N1ZXMvMTA3OFxuICAgIGlzU2Nyb2xsUGFyZW50KGRvY3VtZW50RWxlbWVudCkpIHtcbiAgICAgIHNjcm9sbCA9IGdldE5vZGVTY3JvbGwob2Zmc2V0UGFyZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpKSB7XG4gICAgICBvZmZzZXRzID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KG9mZnNldFBhcmVudCk7XG4gICAgICBvZmZzZXRzLnggKz0gb2Zmc2V0UGFyZW50LmNsaWVudExlZnQ7XG4gICAgICBvZmZzZXRzLnkgKz0gb2Zmc2V0UGFyZW50LmNsaWVudFRvcDtcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgb2Zmc2V0cy54ID0gZ2V0V2luZG93U2Nyb2xsQmFyWChkb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogcmVjdC5sZWZ0ICsgc2Nyb2xsLnNjcm9sbExlZnQgLSBvZmZzZXRzLngsXG4gICAgeTogcmVjdC50b3AgKyBzY3JvbGwuc2Nyb2xsVG9wIC0gb2Zmc2V0cy55LFxuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgfTtcbn1cblxuZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcbiAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgfVxuXG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgc29ydChtb2RpZmllcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIC8vIG9yZGVyIGJhc2VkIG9uIGRlcGVuZGVuY2llc1xuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICB9KSk7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIHBlbmRpbmc7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICBwZW5kaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICByZXNvbHZlKGZuKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn1cblxudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgbW9kaWZpZXJzOiBbXSxcbiAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbn07XG5cbmZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAhKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKTtcbiAgICAgICAgc3RhdGUub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBzdGF0ZS5vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGlzRWxlbWVudChyZWZlcmVuY2UpID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlKSA6IHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCA/IGxpc3RTY3JvbGxQYXJlbnRzKHJlZmVyZW5jZS5jb250ZXh0RWxlbWVudCkgOiBbXSxcbiAgICAgICAgICBwb3BwZXI6IGxpc3RTY3JvbGxQYXJlbnRzKHBvcHBlcilcbiAgICAgICAgfTsgLy8gT3JkZXJzIHRoZSBtb2RpZmllcnMgYmFzZWQgb24gdGhlaXIgZGVwZW5kZW5jaWVzIGFuZCBgcGhhc2VgXG4gICAgICAgIC8vIHByb3BlcnRpZXNcblxuICAgICAgICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyTW9kaWZpZXJzKG1lcmdlQnlOYW1lKFtdLmNvbmNhdChkZWZhdWx0TW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycykpKTsgLy8gU3RyaXAgb3V0IGRpc2FibGVkIG1vZGlmaWVyc1xuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMgPSBvcmRlcmVkTW9kaWZpZXJzLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgIHJldHVybiBtLmVuYWJsZWQ7XG4gICAgICAgIH0pOyAvLyBWYWxpZGF0ZSB0aGUgcHJvdmlkZWQgbW9kaWZpZXJzIHNvIHRoYXQgdGhlIGNvbnN1bWVyIHdpbGwgZ2V0IHdhcm5lZFxuXG4gICAgICAgIHJ1bk1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2UudXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAgLy8gU3luYyB1cGRhdGUg4oCTIGl0IHdpbGwgYWx3YXlzIGJlIGV4ZWN1dGVkLCBldmVuIGlmIG5vdCBuZWNlc3NhcnkuIFRoaXNcbiAgICAgIC8vIGlzIHVzZWZ1bCBmb3IgbG93IGZyZXF1ZW5jeSB1cGRhdGVzIHdoZXJlIHN5bmMgYmVoYXZpb3Igc2ltcGxpZmllcyB0aGVcbiAgICAgIC8vIGxvZ2ljLlxuICAgICAgLy8gRm9yIGhpZ2ggZnJlcXVlbmN5IHVwZGF0ZXMgKGUuZy4gYHJlc2l6ZWAgYW5kIGBzY3JvbGxgIGV2ZW50cyksIGFsd2F5c1xuICAgICAgLy8gcHJlZmVyIHRoZSBhc3luYyBQb3BwZXIjdXBkYXRlIG1ldGhvZFxuICAgICAgZm9yY2VVcGRhdGU6IGZ1bmN0aW9uIGZvcmNlVXBkYXRlKCkge1xuICAgICAgICBpZiAoaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3N0YXRlJGVsZW1lbnRzID0gc3RhdGUuZWxlbWVudHMsXG4gICAgICAgICAgICByZWZlcmVuY2UgPSBfc3RhdGUkZWxlbWVudHMucmVmZXJlbmNlLFxuICAgICAgICAgICAgcG9wcGVyID0gX3N0YXRlJGVsZW1lbnRzLnBvcHBlcjsgLy8gRG9uJ3QgcHJvY2VlZCBpZiBgcmVmZXJlbmNlYCBvciBgcG9wcGVyYCBhcmUgbm90IHZhbGlkIGVsZW1lbnRzXG4gICAgICAgIC8vIGFueW1vcmVcblxuICAgICAgICBpZiAoIWFyZVZhbGlkRWxlbWVudHMocmVmZXJlbmNlLCBwb3BwZXIpKSB7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3RvcmUgdGhlIHJlZmVyZW5jZSBhbmQgcG9wcGVyIHJlY3RzIHRvIGJlIHJlYWQgYnkgbW9kaWZpZXJzXG5cblxuICAgICAgICBzdGF0ZS5yZWN0cyA9IHtcbiAgICAgICAgICByZWZlcmVuY2U6IGdldENvbXBvc2l0ZVJlY3QocmVmZXJlbmNlLCBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKSwgc3RhdGUub3B0aW9ucy5zdHJhdGVneSA9PT0gJ2ZpeGVkJyksXG4gICAgICAgICAgcG9wcGVyOiBnZXRMYXlvdXRSZWN0KHBvcHBlcilcbiAgICAgICAgfTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gcmVzZXQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlLiBUaGVcbiAgICAgICAgLy8gbW9zdCBjb21tb24gdXNlIGNhc2UgZm9yIHRoaXMgaXMgdGhlIGBmbGlwYCBtb2RpZmllciBjaGFuZ2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2VtZW50LCB3aGljaCB0aGVuIG5lZWRzIHRvIHJlLXJ1biBhbGwgdGhlIG1vZGlmaWVycywgYmVjYXVzZSB0aGVcbiAgICAgICAgLy8gbG9naWMgd2FzIHByZXZpb3VzbHkgcmFuIGZvciB0aGUgcHJldmlvdXMgcGxhY2VtZW50IGFuZCBpcyB0aGVyZWZvcmVcbiAgICAgICAgLy8gc3RhbGUvaW5jb3JyZWN0XG5cbiAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7IC8vIE9uIGVhY2ggdXBkYXRlIGN5Y2xlLCB0aGUgYG1vZGlmaWVyc0RhdGFgIHByb3BlcnR5IGZvciBlYWNoIG1vZGlmaWVyXG4gICAgICAgIC8vIGlzIGZpbGxlZCB3aXRoIHRoZSBpbml0aWFsIGRhdGEgc3BlY2lmaWVkIGJ5IHRoZSBtb2RpZmllci4gVGhpcyBtZWFuc1xuICAgICAgICAvLyBpdCBkb2Vzbid0IHBlcnNpc3QgYW5kIGlzIGZyZXNoIG9uIGVhY2ggdXBkYXRlLlxuICAgICAgICAvLyBUbyBlbnN1cmUgcGVyc2lzdGVudCBkYXRhLCB1c2UgYCR7bmFtZX0jcGVyc2lzdGVudGBcblxuICAgICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLm1vZGlmaWVyc0RhdGFbbW9kaWZpZXIubmFtZV0gPSBPYmplY3QuYXNzaWduKHt9LCBtb2RpZmllci5kYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0YXRlLm9yZGVyZWRNb2RpZmllcnMubGVuZ3RoOyBpbmRleCsrKSB7XG5cbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcbiAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RhdGUgPSBmbih7XG4gICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQXN5bmMgYW5kIG9wdGltaXN0aWNhbGx5IG9wdGltaXplZCB1cGRhdGUg4oCTIGl0IHdpbGwgbm90IGJlIGV4ZWN1dGVkIGlmXG4gICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcblxuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGluc3RhbmNlLnNldE9wdGlvbnMob3B0aW9ucykudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgIGlmICghaXNEZXN0cm95ZWQgJiYgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKSB7XG4gICAgICAgIG9wdGlvbnMub25GaXJzdFVwZGF0ZShzdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIGV4ZWN1dGUgYXJiaXRyYXJ5IGNvZGUgYmVmb3JlIHRoZSBmaXJzdFxuICAgIC8vIHVwZGF0ZSBjeWNsZSBydW5zLiBUaGV5IHdpbGwgYmUgZXhlY3V0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIHVwZGF0ZVxuICAgIC8vIGN5Y2xlLiBUaGlzIGlzIHVzZWZ1bCB3aGVuIGEgbW9kaWZpZXIgYWRkcyBzb21lIHBlcnNpc3RlbnQgZGF0YSB0aGF0XG4gICAgLy8gb3RoZXIgbW9kaWZpZXJzIG5lZWQgdG8gdXNlLCBidXQgdGhlIG1vZGlmaWVyIGlzIHJ1biBhZnRlciB0aGUgZGVwZW5kZW50XG4gICAgLy8gb25lLlxuXG4gICAgZnVuY3Rpb24gcnVuTW9kaWZpZXJFZmZlY3RzKCkge1xuICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIgbmFtZSA9IF9yZWYzLm5hbWUsXG4gICAgICAgICAgICBfcmVmMyRvcHRpb25zID0gX3JlZjMub3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnMgPSBfcmVmMyRvcHRpb25zID09PSB2b2lkIDAgPyB7fSA6IF9yZWYzJG9wdGlvbnMsXG4gICAgICAgICAgICBlZmZlY3QgPSBfcmVmMy5lZmZlY3Q7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlZmZlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgY2xlYW51cEZuID0gZWZmZWN0KHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbm9vcEZuID0gZnVuY3Rpb24gbm9vcEZuKCkge307XG5cbiAgICAgICAgICBlZmZlY3RDbGVhbnVwRm5zLnB1c2goY2xlYW51cEZuIHx8IG5vb3BGbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXBNb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zLmZvckVhY2goZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSk7XG4gICAgICBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9O1xufVxuXG52YXIgZGVmYXVsdE1vZGlmaWVycyA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cyQxLCBjb21wdXRlU3R5bGVzJDEsIGFwcGx5U3R5bGVzJDEsIG9mZnNldCQxLCBmbGlwJDEsIHByZXZlbnRPdmVyZmxvdyQxLCBhcnJvdyQxLCBoaWRlJDFdO1xudmFyIGNyZWF0ZVBvcHBlciA9IC8qI19fUFVSRV9fKi9wb3BwZXJHZW5lcmF0b3Ioe1xuICBkZWZhdWx0TW9kaWZpZXJzOiBkZWZhdWx0TW9kaWZpZXJzXG59KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfZ2V0Q2VudGVyZWRTdHlsZVBvcHBlck1vZGlmaWVyKCkge1xuICByZXR1cm4gW3tcbiAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuXG4gICAgZm4oe1xuICAgICAgc3RhdGVcbiAgICB9KSB7XG4gICAgICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKG5hbWUgIT09ICdwb3BwZXInKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcblxuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfSwge1xuICAgIG5hbWU6ICdjb21wdXRlU3R5bGVzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICBhZGFwdGl2ZTogZmFsc2VcbiAgICB9XG4gIH1dO1xufVxuLyoqXG4gKiBHZW5lcmF0ZXMgdGhlIGFycmF5IG9mIG9wdGlvbnMgZm9yIGEgdG9vbHRpcCB0aGF0IGRvZXNuJ3QgaGF2ZSBhXG4gKiB0YXJnZXQgZWxlbWVudCBpbiB0aGUgRE9NIC0tIGFuZCB0aHVzIGlzIHBvc2l0aW9uZWQgaW4gdGhlIGNlbnRlclxuICogb2YgdGhlIHZpZXdcbiAqXG4gKiBAcGFyYW0ge1N0ZXB9IHN0ZXAgVGhlIHN0ZXAgaW5zdGFuY2VcbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGZpbmFsIFBvcHBlciBvcHRpb25zIG9iamVjdFxuICovXG5cblxuZnVuY3Rpb24gbWFrZUNlbnRlcmVkUG9wcGVyKHN0ZXApIHtcbiAgY29uc3QgY2VudGVyZWRTdHlsZVBvcHBlck1vZGlmaWVyID0gX2dldENlbnRlcmVkU3R5bGVQb3BwZXJNb2RpZmllcigpO1xuXG4gIGxldCBwb3BwZXJPcHRpb25zID0ge1xuICAgIHBsYWNlbWVudDogJ3RvcCcsXG4gICAgc3RyYXRlZ3k6ICdmaXhlZCcsXG4gICAgbW9kaWZpZXJzOiBbe1xuICAgICAgbmFtZTogJ2ZvY3VzQWZ0ZXJSZW5kZXInLFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHBoYXNlOiAnYWZ0ZXJXcml0ZScsXG5cbiAgICAgIGZuKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoc3RlcC5lbCkge1xuICAgICAgICAgICAgc3RlcC5lbC5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKTtcbiAgICAgIH1cblxuICAgIH1dXG4gIH07XG4gIHBvcHBlck9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgcG9wcGVyT3B0aW9ucywge1xuICAgIG1vZGlmaWVyczogQXJyYXkuZnJvbShuZXcgU2V0KFsuLi5wb3BwZXJPcHRpb25zLm1vZGlmaWVycywgLi4uY2VudGVyZWRTdHlsZVBvcHBlck1vZGlmaWVyXSkpXG4gIH0pO1xuICByZXR1cm4gcG9wcGVyT3B0aW9ucztcbn1cblxuLyoqXG4gKiBFbnN1cmUgY2xhc3MgcHJlZml4IGVuZHMgaW4gYC1gXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IFRoZSBwcmVmaXggdG8gcHJlcGVuZCB0byB0aGUgY2xhc3MgbmFtZXMgZ2VuZXJhdGVkIGJ5IG5hbm8tY3NzXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBwcmVmaXggZW5kaW5nIGluIGAtYFxuICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByZWZpeChwcmVmaXgpIHtcbiAgaWYgKCFpc1N0cmluZyhwcmVmaXgpIHx8IHByZWZpeCA9PT0gJycpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICByZXR1cm4gcHJlZml4LmNoYXJBdChwcmVmaXgubGVuZ3RoIC0gMSkgIT09ICctJyA/IGAke3ByZWZpeH0tYCA6IHByZWZpeDtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIG9wdGlvbnMuYXR0YWNoVG8uZWxlbWVudCBpcyBhIHN0cmluZywgYW5kIGlmIHNvLCB0cmllcyB0byBmaW5kIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0ZXB9IHN0ZXAgVGhlIHN0ZXAgaW5zdGFuY2VcbiAqIEByZXR1cm5zIHt7ZWxlbWVudCwgb259fVxuICogYGVsZW1lbnRgIGlzIGEgcXVhbGlmaWVkIEhUTUwgRWxlbWVudFxuICogYG9uYCBpcyBhIHN0cmluZyBwb3NpdGlvbiB2YWx1ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlQXR0YWNoVG8oc3RlcCkge1xuICBjb25zdCBvcHRpb25zID0gc3RlcC5vcHRpb25zLmF0dGFjaFRvIHx8IHt9O1xuICBjb25zdCByZXR1cm5PcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XG5cbiAgaWYgKGlzU3RyaW5nKG9wdGlvbnMuZWxlbWVudCkpIHtcbiAgICAvLyBDYW4ndCBvdmVycmlkZSB0aGUgZWxlbWVudCBpbiB1c2VyIG9wdHMgcmVmZXJlbmNlIGJlY2F1c2Ugd2UgY2FuJ3RcbiAgICAvLyBndWFyYW50ZWUgdGhhdCB0aGUgZWxlbWVudCB3aWxsIGV4aXN0IGluIHRoZSBmdXR1cmUuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybk9wdHMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5lbGVtZW50KTtcbiAgICB9IGNhdGNoIChlKSB7Ly8gVE9ET1xuICAgIH1cblxuICAgIGlmICghcmV0dXJuT3B0cy5lbGVtZW50KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBUaGUgZWxlbWVudCBmb3IgdGhpcyBTaGVwaGVyZCBzdGVwIHdhcyBub3QgZm91bmQgJHtvcHRpb25zLmVsZW1lbnR9YCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldHVybk9wdHM7XG59XG4vKipcbiAqIERldGVybWluZXMgb3B0aW9ucyBmb3IgdGhlIHRvb2x0aXAgYW5kIGluaXRpYWxpemVzXG4gKiBgc3RlcC50b29sdGlwYCBhcyBhIFBvcHBlciBpbnN0YW5jZS5cbiAqIEBwYXJhbSB7U3RlcH0gc3RlcCBUaGUgc3RlcCBpbnN0YW5jZVxuICovXG5cbmZ1bmN0aW9uIHNldHVwVG9vbHRpcChzdGVwKSB7XG4gIGlmIChzdGVwLnRvb2x0aXApIHtcbiAgICBzdGVwLnRvb2x0aXAuZGVzdHJveSgpO1xuICB9XG5cbiAgY29uc3QgYXR0YWNoVG9PcHRpb25zID0gcGFyc2VBdHRhY2hUbyhzdGVwKTtcbiAgbGV0IHRhcmdldCA9IGF0dGFjaFRvT3B0aW9ucy5lbGVtZW50O1xuICBjb25zdCBwb3BwZXJPcHRpb25zID0gZ2V0UG9wcGVyT3B0aW9ucyhhdHRhY2hUb09wdGlvbnMsIHN0ZXApO1xuXG4gIGlmIChzdGVwLmlzQ2VudGVyZWQoKSkge1xuICAgIHRhcmdldCA9IGRvY3VtZW50LmJvZHk7XG4gICAgY29uc3QgY29udGVudCA9IHN0ZXAuc2hlcGhlcmRFbGVtZW50Q29tcG9uZW50LmdldEVsZW1lbnQoKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3NoZXBoZXJkLWNlbnRlcmVkJyk7XG4gIH1cblxuICBzdGVwLnRvb2x0aXAgPSBjcmVhdGVQb3BwZXIodGFyZ2V0LCBzdGVwLmVsLCBwb3BwZXJPcHRpb25zKTtcbiAgc3RlcC50YXJnZXQgPSBhdHRhY2hUb09wdGlvbnMuZWxlbWVudDtcbiAgcmV0dXJuIHBvcHBlck9wdGlvbnM7XG59XG4vKipcbiAqIENyZWF0ZSBhIHVuaXF1ZSBpZCBmb3Igc3RlcHMsIHRvdXJzLCBtb2RhbHMsIGV0Y1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHV1aWQoKSB7XG4gIGxldCBkID0gRGF0ZS5ub3coKTtcbiAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgYyA9PiB7XG4gICAgY29uc3QgciA9IChkICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcbiAgICBkID0gTWF0aC5mbG9vcihkIC8gMTYpO1xuICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogciAmIDB4MyB8IDB4OCkudG9TdHJpbmcoMTYpO1xuICB9KTtcbn1cbi8qKlxuICogR2V0cyB0aGUgYFBvcHBlcmAgb3B0aW9ucyBmcm9tIGEgc2V0IG9mIGJhc2UgYGF0dGFjaFRvYCBvcHRpb25zXG4gKiBAcGFyYW0gYXR0YWNoVG9PcHRpb25zXG4gKiBAcGFyYW0ge1N0ZXB9IHN0ZXAgVGhlIHN0ZXAgaW5zdGFuY2VcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZ2V0UG9wcGVyT3B0aW9ucyhhdHRhY2hUb09wdGlvbnMsIHN0ZXApIHtcbiAgbGV0IHBvcHBlck9wdGlvbnMgPSB7XG4gICAgbW9kaWZpZXJzOiBbe1xuICAgICAgbmFtZTogJ3ByZXZlbnRPdmVyZmxvdycsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGFsdEF4aXM6IHRydWUsXG4gICAgICAgIHRldGhlcjogZmFsc2VcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBuYW1lOiAnZm9jdXNBZnRlclJlbmRlcicsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICdhZnRlcldyaXRlJyxcblxuICAgICAgZm4oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChzdGVwLmVsKSB7XG4gICAgICAgICAgICBzdGVwLmVsLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAzMDApO1xuICAgICAgfVxuXG4gICAgfV0sXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbiAgfTtcblxuICBpZiAoc3RlcC5pc0NlbnRlcmVkKCkpIHtcbiAgICBwb3BwZXJPcHRpb25zID0gbWFrZUNlbnRlcmVkUG9wcGVyKHN0ZXApO1xuICB9IGVsc2Uge1xuICAgIHBvcHBlck9wdGlvbnMucGxhY2VtZW50ID0gYXR0YWNoVG9PcHRpb25zLm9uO1xuICB9XG5cbiAgY29uc3QgZGVmYXVsdFN0ZXBPcHRpb25zID0gc3RlcC50b3VyICYmIHN0ZXAudG91ci5vcHRpb25zICYmIHN0ZXAudG91ci5vcHRpb25zLmRlZmF1bHRTdGVwT3B0aW9ucztcblxuICBpZiAoZGVmYXVsdFN0ZXBPcHRpb25zKSB7XG4gICAgcG9wcGVyT3B0aW9ucyA9IF9tZXJnZU1vZGlmaWVycyhkZWZhdWx0U3RlcE9wdGlvbnMsIHBvcHBlck9wdGlvbnMpO1xuICB9XG5cbiAgcG9wcGVyT3B0aW9ucyA9IF9tZXJnZU1vZGlmaWVycyhzdGVwLm9wdGlvbnMsIHBvcHBlck9wdGlvbnMpO1xuICByZXR1cm4gcG9wcGVyT3B0aW9ucztcbn1cblxuZnVuY3Rpb24gX21lcmdlTW9kaWZpZXJzKHN0ZXBPcHRpb25zLCBwb3BwZXJPcHRpb25zKSB7XG4gIGlmIChzdGVwT3B0aW9ucy5wb3BwZXJPcHRpb25zKSB7XG4gICAgbGV0IG1lcmdlZFBvcHBlck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJPcHRpb25zLCBzdGVwT3B0aW9ucy5wb3BwZXJPcHRpb25zKTtcblxuICAgIGlmIChzdGVwT3B0aW9ucy5wb3BwZXJPcHRpb25zLm1vZGlmaWVycyAmJiBzdGVwT3B0aW9ucy5wb3BwZXJPcHRpb25zLm1vZGlmaWVycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBuYW1lcyA9IHN0ZXBPcHRpb25zLnBvcHBlck9wdGlvbnMubW9kaWZpZXJzLm1hcChtb2QgPT4gbW9kLm5hbWUpO1xuICAgICAgY29uc3QgZmlsdGVyZWRNb2RpZmllcnMgPSBwb3BwZXJPcHRpb25zLm1vZGlmaWVycy5maWx0ZXIobW9kID0+ICFuYW1lcy5pbmNsdWRlcyhtb2QubmFtZSkpO1xuICAgICAgbWVyZ2VkUG9wcGVyT3B0aW9ucy5tb2RpZmllcnMgPSBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLmZpbHRlcmVkTW9kaWZpZXJzLCAuLi5zdGVwT3B0aW9ucy5wb3BwZXJPcHRpb25zLm1vZGlmaWVyc10pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkUG9wcGVyT3B0aW9ucztcbiAgfVxuXG4gIHJldHVybiBwb3BwZXJPcHRpb25zO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgZm9yIChjb25zdCBrIGluIHNyYykgdGFyW2tdID0gc3JjW2tdO1xuXG4gIHJldHVybiB0YXI7XG59XG5cbmZ1bmN0aW9uIHJ1bihmbikge1xuICByZXR1cm4gZm4oKTtcbn1cblxuZnVuY3Rpb24gYmxhbmtfb2JqZWN0KCkge1xuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cblxuZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcbiAgZm5zLmZvckVhY2gocnVuKTtcbn1cblxuZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCBhICYmIHR5cGVvZiBhID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNfZW1wdHkob2JqKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kKHRhcmdldCwgbm9kZSkge1xuICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydCh0YXJnZXQsIG5vZGUsIGFuY2hvcikge1xuICB0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcbn1cblxuZnVuY3Rpb24gZGV0YWNoKG5vZGUpIHtcbiAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95X2VhY2goaXRlcmF0aW9ucywgZGV0YWNoaW5nKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChpdGVyYXRpb25zW2ldKSBpdGVyYXRpb25zW2ldLmQoZGV0YWNoaW5nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbGVtZW50KG5hbWUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG59XG5cbmZ1bmN0aW9uIHN2Z19lbGVtZW50KG5hbWUpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gdGV4dChkYXRhKSB7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkYXRhKTtcbn1cblxuZnVuY3Rpb24gc3BhY2UoKSB7XG4gIHJldHVybiB0ZXh0KCcgJyk7XG59XG5cbmZ1bmN0aW9uIGVtcHR5KCkge1xuICByZXR1cm4gdGV4dCgnJyk7XG59XG5cbmZ1bmN0aW9uIGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucykge1xuICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICByZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gYXR0cihub2RlLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO2Vsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKSBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gc2V0X2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IGRlc2NyaXB0b3JzID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobm9kZS5fX3Byb3RvX18pO1xuXG4gIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoYXR0cmlidXRlc1trZXldID09IG51bGwpIHtcbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgIG5vZGUuc3R5bGUuY3NzVGV4dCA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ19fdmFsdWUnKSB7XG4gICAgICBub2RlLnZhbHVlID0gbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRvcnNba2V5XSAmJiBkZXNjcmlwdG9yc1trZXldLnNldCkge1xuICAgICAgbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdHRyKG5vZGUsIGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hpbGRyZW4oZWxlbWVudCkge1xuICByZXR1cm4gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkTm9kZXMpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVfY2xhc3MoZWxlbWVudCwgbmFtZSwgdG9nZ2xlKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0W3RvZ2dsZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xufVxuXG5sZXQgY3VycmVudF9jb21wb25lbnQ7XG5cbmZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgY3VycmVudF9jb21wb25lbnQgPSBjb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldF9jdXJyZW50X2NvbXBvbmVudCgpIHtcbiAgaWYgKCFjdXJyZW50X2NvbXBvbmVudCkgdGhyb3cgbmV3IEVycm9yKCdGdW5jdGlvbiBjYWxsZWQgb3V0c2lkZSBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24nKTtcbiAgcmV0dXJuIGN1cnJlbnRfY29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBvbk1vdW50KGZuKSB7XG4gIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX21vdW50LnB1c2goZm4pO1xufVxuXG5mdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuICBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5hZnRlcl91cGRhdGUucHVzaChmbik7XG59XG5cbmNvbnN0IGRpcnR5X2NvbXBvbmVudHMgPSBbXTtcbmNvbnN0IGJpbmRpbmdfY2FsbGJhY2tzID0gW107XG5jb25zdCByZW5kZXJfY2FsbGJhY2tzID0gW107XG5jb25zdCBmbHVzaF9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlc29sdmVkX3Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbmxldCB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHNjaGVkdWxlX3VwZGF0ZSgpIHtcbiAgaWYgKCF1cGRhdGVfc2NoZWR1bGVkKSB7XG4gICAgdXBkYXRlX3NjaGVkdWxlZCA9IHRydWU7XG4gICAgcmVzb2x2ZWRfcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRfcmVuZGVyX2NhbGxiYWNrKGZuKSB7XG4gIHJlbmRlcl9jYWxsYmFja3MucHVzaChmbik7XG59XG5cbmxldCBmbHVzaGluZyA9IGZhbHNlO1xuY29uc3Qgc2Vlbl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICBpZiAoZmx1c2hpbmcpIHJldHVybjtcbiAgZmx1c2hpbmcgPSB0cnVlO1xuXG4gIGRvIHtcbiAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgLy8gYW5kIHVwZGF0ZSBjb21wb25lbnRzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSBkaXJ0eV9jb21wb25lbnRzW2ldO1xuICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICB9XG5cbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQobnVsbCk7XG4gICAgZGlydHlfY29tcG9uZW50cy5sZW5ndGggPSAwO1xuXG4gICAgd2hpbGUgKGJpbmRpbmdfY2FsbGJhY2tzLmxlbmd0aCkgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTsgLy8gdGhlbiwgb25jZSBjb21wb25lbnRzIGFyZSB1cGRhdGVkLCBjYWxsXG4gICAgLy8gYWZ0ZXJVcGRhdGUgZnVuY3Rpb25zLiBUaGlzIG1heSBjYXVzZVxuICAgIC8vIHN1YnNlcXVlbnQgdXBkYXRlcy4uLlxuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gcmVuZGVyX2NhbGxiYWNrc1tpXTtcblxuICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgIC8vIC4uLnNvIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgbG9vcHNcbiAgICAgICAgc2Vlbl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gIH0gd2hpbGUgKGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKTtcblxuICB3aGlsZSAoZmx1c2hfY2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICB9XG5cbiAgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuICBmbHVzaGluZyA9IGZhbHNlO1xuICBzZWVuX2NhbGxiYWNrcy5jbGVhcigpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUoJCQpIHtcbiAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgJCQudXBkYXRlKCk7XG4gICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICBjb25zdCBkaXJ0eSA9ICQkLmRpcnR5O1xuICAgICQkLmRpcnR5ID0gWy0xXTtcbiAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICQkLmFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuICB9XG59XG5cbmNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xubGV0IG91dHJvcztcblxuZnVuY3Rpb24gZ3JvdXBfb3V0cm9zKCkge1xuICBvdXRyb3MgPSB7XG4gICAgcjogMCxcbiAgICBjOiBbXSxcbiAgICBwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gY2hlY2tfb3V0cm9zKCkge1xuICBpZiAoIW91dHJvcy5yKSB7XG4gICAgcnVuX2FsbChvdXRyb3MuYyk7XG4gIH1cblxuICBvdXRyb3MgPSBvdXRyb3MucDtcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihibG9jaywgbG9jYWwpIHtcbiAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgIGJsb2NrLmkobG9jYWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25fb3V0KGJsb2NrLCBsb2NhbCwgZGV0YWNoLCBjYWxsYmFjaykge1xuICBpZiAoYmxvY2sgJiYgYmxvY2subykge1xuICAgIGlmIChvdXRyb2luZy5oYXMoYmxvY2spKSByZXR1cm47XG4gICAgb3V0cm9pbmcuYWRkKGJsb2NrKTtcbiAgICBvdXRyb3MuYy5wdXNoKCgpID0+IHtcbiAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoZGV0YWNoKSBibG9jay5kKDEpO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGJsb2NrLm8obG9jYWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldF9zcHJlYWRfdXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuICBjb25zdCB1cGRhdGUgPSB7fTtcbiAgY29uc3QgdG9fbnVsbF9vdXQgPSB7fTtcbiAgY29uc3QgYWNjb3VudGVkX2ZvciA9IHtcbiAgICAkJHNjb3BlOiAxXG4gIH07XG4gIGxldCBpID0gbGV2ZWxzLmxlbmd0aDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgY29uc3QgbyA9IGxldmVsc1tpXTtcbiAgICBjb25zdCBuID0gdXBkYXRlc1tpXTtcblxuICAgIGlmIChuKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgIGlmICghKGtleSBpbiBuKSkgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3Qga2V5IGluIG4pIHtcbiAgICAgICAgaWYgKCFhY2NvdW50ZWRfZm9yW2tleV0pIHtcbiAgICAgICAgICB1cGRhdGVba2V5XSA9IG5ba2V5XTtcbiAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldmVsc1tpXSA9IG47XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKGNvbnN0IGtleSBpbiB0b19udWxsX291dCkge1xuICAgIGlmICghKGtleSBpbiB1cGRhdGUpKSB1cGRhdGVba2V5XSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiB1cGRhdGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9jb21wb25lbnQoYmxvY2spIHtcbiAgYmxvY2sgJiYgYmxvY2suYygpO1xufVxuXG5mdW5jdGlvbiBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCB0YXJnZXQsIGFuY2hvciwgY3VzdG9tRWxlbWVudCkge1xuICBjb25zdCB7XG4gICAgZnJhZ21lbnQsXG4gICAgb25fbW91bnQsXG4gICAgb25fZGVzdHJveSxcbiAgICBhZnRlcl91cGRhdGVcbiAgfSA9IGNvbXBvbmVudC4kJDtcbiAgZnJhZ21lbnQgJiYgZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG5cbiAgaWYgKCFjdXN0b21FbGVtZW50KSB7XG4gICAgLy8gb25Nb3VudCBoYXBwZW5zIGJlZm9yZSB0aGUgaW5pdGlhbCBhZnRlclVwZGF0ZVxuICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgICAgY29uc3QgbmV3X29uX2Rlc3Ryb3kgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuXG4gICAgICBpZiAob25fZGVzdHJveSkge1xuICAgICAgICBvbl9kZXN0cm95LnB1c2goLi4ubmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRWRnZSBjYXNlIC0gY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHksXG4gICAgICAgIC8vIG1vc3QgbGlrZWx5IGFzIGEgcmVzdWx0IG9mIGEgYmluZGluZyBpbml0aWFsaXNpbmdcbiAgICAgICAgcnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudC4kJC5vbl9tb3VudCA9IFtdO1xuICAgIH0pO1xuICB9XG5cbiAgYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lfY29tcG9uZW50KGNvbXBvbmVudCwgZGV0YWNoaW5nKSB7XG4gIGNvbnN0ICQkID0gY29tcG9uZW50LiQkO1xuXG4gIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgIHJ1bl9hbGwoJCQub25fZGVzdHJveSk7XG4gICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpOyAvLyBUT0RPIG51bGwgb3V0IG90aGVyIHJlZnMsIGluY2x1ZGluZyBjb21wb25lbnQuJCQgKGJ1dCBuZWVkIHRvXG4gICAgLy8gcHJlc2VydmUgZmluYWwgc3RhdGU/KVxuXG4gICAgJCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAkJC5jdHggPSBbXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSkge1xuICBpZiAoY29tcG9uZW50LiQkLmRpcnR5WzBdID09PSAtMSkge1xuICAgIGRpcnR5X2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgIGNvbXBvbmVudC4kJC5kaXJ0eS5maWxsKDApO1xuICB9XG5cbiAgY29tcG9uZW50LiQkLmRpcnR5W2kgLyAzMSB8IDBdIHw9IDEgPDwgaSAlIDMxO1xufVxuXG5mdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wcywgZGlydHkgPSBbLTFdKSB7XG4gIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gIGNvbnN0ICQkID0gY29tcG9uZW50LiQkID0ge1xuICAgIGZyYWdtZW50OiBudWxsLFxuICAgIGN0eDogbnVsbCxcbiAgICAvLyBzdGF0ZVxuICAgIHByb3BzLFxuICAgIHVwZGF0ZTogbm9vcCxcbiAgICBub3RfZXF1YWwsXG4gICAgYm91bmQ6IGJsYW5rX29iamVjdCgpLFxuICAgIC8vIGxpZmVjeWNsZVxuICAgIG9uX21vdW50OiBbXSxcbiAgICBvbl9kZXN0cm95OiBbXSxcbiAgICBvbl9kaXNjb25uZWN0OiBbXSxcbiAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgIGNvbnRleHQ6IG5ldyBNYXAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IG9wdGlvbnMuY29udGV4dCB8fCBbXSksXG4gICAgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKSxcbiAgICBkaXJ0eSxcbiAgICBza2lwX2JvdW5kOiBmYWxzZVxuICB9O1xuICBsZXQgcmVhZHkgPSBmYWxzZTtcbiAgJCQuY3R4ID0gaW5zdGFuY2UgPyBpbnN0YW5jZShjb21wb25lbnQsIG9wdGlvbnMucHJvcHMgfHwge30sIChpLCByZXQsIC4uLnJlc3QpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHJlc3QubGVuZ3RoID8gcmVzdFswXSA6IHJldDtcblxuICAgIGlmICgkJC5jdHggJiYgbm90X2VxdWFsKCQkLmN0eFtpXSwgJCQuY3R4W2ldID0gdmFsdWUpKSB7XG4gICAgICBpZiAoISQkLnNraXBfYm91bmQgJiYgJCQuYm91bmRbaV0pICQkLmJvdW5kW2ldKHZhbHVlKTtcbiAgICAgIGlmIChyZWFkeSkgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0pIDogW107XG4gICQkLnVwZGF0ZSgpO1xuICByZWFkeSA9IHRydWU7XG4gIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7IC8vIGBmYWxzZWAgYXMgYSBzcGVjaWFsIGNhc2Ugb2Ygbm8gRE9NIGNvbXBvbmVudFxuXG4gICQkLmZyYWdtZW50ID0gY3JlYXRlX2ZyYWdtZW50ID8gY3JlYXRlX2ZyYWdtZW50KCQkLmN0eCkgOiBmYWxzZTtcblxuICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICBpZiAob3B0aW9ucy5oeWRyYXRlKSB7XG4gICAgICBjb25zdCBub2RlcyA9IGNoaWxkcmVuKG9wdGlvbnMudGFyZ2V0KTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cblxuICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQubChub2Rlcyk7XG4gICAgICBub2Rlcy5mb3JFYWNoKGRldGFjaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5jKCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuaW50cm8pIHRyYW5zaXRpb25faW4oY29tcG9uZW50LiQkLmZyYWdtZW50KTtcbiAgICBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IsIG9wdGlvbnMuY3VzdG9tRWxlbWVudCk7XG4gICAgZmx1c2goKTtcbiAgfVxuXG4gIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgU3ZlbHRlIGNvbXBvbmVudHMuIFVzZWQgd2hlbiBkZXY9ZmFsc2UuXG4gKi9cblxuXG5jbGFzcyBTdmVsdGVDb21wb25lbnQge1xuICAkZGVzdHJveSgpIHtcbiAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgfVxuXG4gICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdIHx8ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSA9IFtdKTtcbiAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXG4gICRzZXQoJCRwcm9wcykge1xuICAgIGlmICh0aGlzLiQkc2V0ICYmICFpc19lbXB0eSgkJHByb3BzKSkge1xuICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gdHJ1ZTtcbiAgICAgIHRoaXMuJCRzZXQoJCRwcm9wcyk7XG4gICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxufVxuXG4vKiBzcmMvanMvY29tcG9uZW50cy9zaGVwaGVyZC1idXR0b24uc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuMzcuMCAqL1xuXG5mdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkOChjdHgpIHtcbiAgbGV0IGJ1dHRvbjtcbiAgbGV0IGJ1dHRvbl9hcmlhX2xhYmVsX3ZhbHVlO1xuICBsZXQgYnV0dG9uX2NsYXNzX3ZhbHVlO1xuICBsZXQgbW91bnRlZDtcbiAgbGV0IGRpc3Bvc2U7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGJ1dHRvbiA9IGVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBhdHRyKGJ1dHRvbiwgXCJhcmlhLWxhYmVsXCIsIGJ1dHRvbl9hcmlhX2xhYmVsX3ZhbHVlID1cbiAgICAgIC8qbGFiZWwqL1xuICAgICAgY3R4WzNdID9cbiAgICAgIC8qbGFiZWwqL1xuICAgICAgY3R4WzNdIDogbnVsbCk7XG4gICAgICBhdHRyKGJ1dHRvbiwgXCJjbGFzc1wiLCBidXR0b25fY2xhc3NfdmFsdWUgPSBgJHtcbiAgICAgIC8qY2xhc3NlcyovXG4gICAgICBjdHhbMV0gfHwgXCJcIn0gc2hlcGhlcmQtYnV0dG9uICR7XG4gICAgICAvKnNlY29uZGFyeSovXG4gICAgICBjdHhbNF0gPyBcInNoZXBoZXJkLWJ1dHRvbi1zZWNvbmRhcnlcIiA6IFwiXCJ9YCk7XG4gICAgICBidXR0b24uZGlzYWJsZWQgPVxuICAgICAgLypkaXNhYmxlZCovXG4gICAgICBjdHhbMl07XG4gICAgICBhdHRyKGJ1dHRvbiwgXCJ0YWJpbmRleFwiLCBcIjBcIik7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIGluc2VydCh0YXJnZXQsIGJ1dHRvbiwgYW5jaG9yKTtcbiAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPVxuICAgICAgLyp0ZXh0Ki9cbiAgICAgIGN0eFs1XTtcblxuICAgICAgaWYgKCFtb3VudGVkKSB7XG4gICAgICAgIGRpc3Bvc2UgPSBsaXN0ZW4oYnV0dG9uLCBcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoaXNfZnVuY3Rpb24oXG4gICAgICAgICAgLyphY3Rpb24qL1xuICAgICAgICAgIGN0eFswXSkpXG4gICAgICAgICAgICAvKmFjdGlvbiovXG4gICAgICAgICAgICBjdHhbMF0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1vdW50ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBwKG5ld19jdHgsIFtkaXJ0eV0pIHtcbiAgICAgIGN0eCA9IG5ld19jdHg7XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLyp0ZXh0Ki9cbiAgICAgIDMyKSBidXR0b24uaW5uZXJIVE1MID1cbiAgICAgIC8qdGV4dCovXG4gICAgICBjdHhbNV07XG5cbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKmxhYmVsKi9cbiAgICAgIDggJiYgYnV0dG9uX2FyaWFfbGFiZWxfdmFsdWUgIT09IChidXR0b25fYXJpYV9sYWJlbF92YWx1ZSA9XG4gICAgICAvKmxhYmVsKi9cbiAgICAgIGN0eFszXSA/XG4gICAgICAvKmxhYmVsKi9cbiAgICAgIGN0eFszXSA6IG51bGwpKSB7XG4gICAgICAgIGF0dHIoYnV0dG9uLCBcImFyaWEtbGFiZWxcIiwgYnV0dG9uX2FyaWFfbGFiZWxfdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypjbGFzc2VzLCBzZWNvbmRhcnkqL1xuICAgICAgMTggJiYgYnV0dG9uX2NsYXNzX3ZhbHVlICE9PSAoYnV0dG9uX2NsYXNzX3ZhbHVlID0gYCR7XG4gICAgICAvKmNsYXNzZXMqL1xuICAgICAgY3R4WzFdIHx8IFwiXCJ9IHNoZXBoZXJkLWJ1dHRvbiAke1xuICAgICAgLypzZWNvbmRhcnkqL1xuICAgICAgY3R4WzRdID8gXCJzaGVwaGVyZC1idXR0b24tc2Vjb25kYXJ5XCIgOiBcIlwifWApKSB7XG4gICAgICAgIGF0dHIoYnV0dG9uLCBcImNsYXNzXCIsIGJ1dHRvbl9jbGFzc192YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKmRpc2FibGVkKi9cbiAgICAgIDQpIHtcbiAgICAgICAgYnV0dG9uLmRpc2FibGVkID1cbiAgICAgICAgLypkaXNhYmxlZCovXG4gICAgICAgIGN0eFsyXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaTogbm9vcCxcbiAgICBvOiBub29wLFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGlmIChkZXRhY2hpbmcpIGRldGFjaChidXR0b24pO1xuICAgICAgbW91bnRlZCA9IGZhbHNlO1xuICAgICAgZGlzcG9zZSgpO1xuICAgIH1cblxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZSQ4KCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gIGxldCB7XG4gICAgY29uZmlnXG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIHN0ZXBcbiAgfSA9ICQkcHJvcHM7XG4gIGxldCBhY3Rpb24sIGNsYXNzZXMsIGRpc2FibGVkLCBsYWJlbCwgc2Vjb25kYXJ5LCB0ZXh0O1xuXG4gIGZ1bmN0aW9uIGdldERpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oZGlzYWJsZWQpKSB7XG4gICAgICByZXR1cm4gZGlzYWJsZWQgPSBkaXNhYmxlZC5jYWxsKHN0ZXApO1xuICAgIH1cblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gICQkc2VsZi4kJHNldCA9ICQkcHJvcHMgPT4ge1xuICAgIGlmIChcImNvbmZpZ1wiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSg2LCBjb25maWcgPSAkJHByb3BzLmNvbmZpZyk7XG4gICAgaWYgKFwic3RlcFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSg3LCBzdGVwID0gJCRwcm9wcy5zdGVwKTtcbiAgfTtcblxuICAkJHNlbGYuJCQudXBkYXRlID0gKCkgPT4ge1xuICAgIGlmICgkJHNlbGYuJCQuZGlydHkgJlxuICAgIC8qY29uZmlnLCBzdGVwKi9cbiAgICAxOTIpIHtcbiAgICAgIHtcbiAgICAgICAgJCRpbnZhbGlkYXRlKDAsIGFjdGlvbiA9IGNvbmZpZy5hY3Rpb24gPyBjb25maWcuYWN0aW9uLmJpbmQoc3RlcC50b3VyKSA6IG51bGwpO1xuICAgICAgICAkJGludmFsaWRhdGUoMSwgY2xhc3NlcyA9IGNvbmZpZy5jbGFzc2VzKTtcbiAgICAgICAgJCRpbnZhbGlkYXRlKDIsIGRpc2FibGVkID0gY29uZmlnLmRpc2FibGVkID8gZ2V0RGlzYWJsZWQoY29uZmlnLmRpc2FibGVkKSA6IGZhbHNlKTtcbiAgICAgICAgJCRpbnZhbGlkYXRlKDMsIGxhYmVsID0gY29uZmlnLmxhYmVsKTtcbiAgICAgICAgJCRpbnZhbGlkYXRlKDQsIHNlY29uZGFyeSA9IGNvbmZpZy5zZWNvbmRhcnkpO1xuICAgICAgICAkJGludmFsaWRhdGUoNSwgdGV4dCA9IGNvbmZpZy50ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFthY3Rpb24sIGNsYXNzZXMsIGRpc2FibGVkLCBsYWJlbCwgc2Vjb25kYXJ5LCB0ZXh0LCBjb25maWcsIHN0ZXBdO1xufVxuXG5jbGFzcyBTaGVwaGVyZF9idXR0b24gZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDgsIGNyZWF0ZV9mcmFnbWVudCQ4LCBzYWZlX25vdF9lcXVhbCwge1xuICAgICAgY29uZmlnOiA2LFxuICAgICAgc3RlcDogN1xuICAgIH0pO1xuICB9XG5cbn1cblxuLyogc3JjL2pzL2NvbXBvbmVudHMvc2hlcGhlcmQtZm9vdGVyLnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjM3LjAgKi9cblxuZnVuY3Rpb24gZ2V0X2VhY2hfY29udGV4dChjdHgsIGxpc3QsIGkpIHtcbiAgY29uc3QgY2hpbGRfY3R4ID0gY3R4LnNsaWNlKCk7XG4gIGNoaWxkX2N0eFsyXSA9IGxpc3RbaV07XG4gIHJldHVybiBjaGlsZF9jdHg7XG59IC8vICgyNDo0KSB7I2lmIGJ1dHRvbnN9XG5cblxuZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrJDMoY3R4KSB7XG4gIGxldCBlYWNoXzFfYW5jaG9yO1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGVhY2hfdmFsdWUgPVxuICAvKmJ1dHRvbnMqL1xuICBjdHhbMV07XG4gIGxldCBlYWNoX2Jsb2NrcyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZWFjaF92YWx1ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGVhY2hfYmxvY2tzW2ldID0gY3JlYXRlX2VhY2hfYmxvY2soZ2V0X2VhY2hfY29udGV4dChjdHgsIGVhY2hfdmFsdWUsIGkpKTtcbiAgfVxuXG4gIGNvbnN0IG91dCA9IGkgPT4gdHJhbnNpdGlvbl9vdXQoZWFjaF9ibG9ja3NbaV0sIDEsIDEsICgpID0+IHtcbiAgICBlYWNoX2Jsb2Nrc1tpXSA9IG51bGw7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWFjaF9ibG9ja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgZWFjaF9ibG9ja3NbaV0uYygpO1xuICAgICAgfVxuXG4gICAgICBlYWNoXzFfYW5jaG9yID0gZW1wdHkoKTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlYWNoX2Jsb2Nrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBlYWNoX2Jsb2Nrc1tpXS5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICAgIH1cblxuICAgICAgaW5zZXJ0KHRhcmdldCwgZWFjaF8xX2FuY2hvciwgYW5jaG9yKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBwKGN0eCwgZGlydHkpIHtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKmJ1dHRvbnMsIHN0ZXAqL1xuICAgICAgMykge1xuICAgICAgICBlYWNoX3ZhbHVlID1cbiAgICAgICAgLypidXR0b25zKi9cbiAgICAgICAgY3R4WzFdO1xuICAgICAgICBsZXQgaTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZWFjaF92YWx1ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGNoaWxkX2N0eCA9IGdldF9lYWNoX2NvbnRleHQoY3R4LCBlYWNoX3ZhbHVlLCBpKTtcblxuICAgICAgICAgIGlmIChlYWNoX2Jsb2Nrc1tpXSkge1xuICAgICAgICAgICAgZWFjaF9ibG9ja3NbaV0ucChjaGlsZF9jdHgsIGRpcnR5KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oZWFjaF9ibG9ja3NbaV0sIDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlYWNoX2Jsb2Nrc1tpXSA9IGNyZWF0ZV9lYWNoX2Jsb2NrKGNoaWxkX2N0eCk7XG4gICAgICAgICAgICBlYWNoX2Jsb2Nrc1tpXS5jKCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGVhY2hfYmxvY2tzW2ldLCAxKTtcbiAgICAgICAgICAgIGVhY2hfYmxvY2tzW2ldLm0oZWFjaF8xX2FuY2hvci5wYXJlbnROb2RlLCBlYWNoXzFfYW5jaG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBncm91cF9vdXRyb3MoKTtcblxuICAgICAgICBmb3IgKGkgPSBlYWNoX3ZhbHVlLmxlbmd0aDsgaSA8IGVhY2hfYmxvY2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgb3V0KGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGkobG9jYWwpIHtcbiAgICAgIGlmIChjdXJyZW50KSByZXR1cm47XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWFjaF92YWx1ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB0cmFuc2l0aW9uX2luKGVhY2hfYmxvY2tzW2ldKTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIG8obG9jYWwpIHtcbiAgICAgIGVhY2hfYmxvY2tzID0gZWFjaF9ibG9ja3MuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVhY2hfYmxvY2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRyYW5zaXRpb25fb3V0KGVhY2hfYmxvY2tzW2ldKTtcbiAgICAgIH1cblxuICAgICAgY3VycmVudCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgZGVzdHJveV9lYWNoKGVhY2hfYmxvY2tzLCBkZXRhY2hpbmcpO1xuICAgICAgaWYgKGRldGFjaGluZykgZGV0YWNoKGVhY2hfMV9hbmNob3IpO1xuICAgIH1cblxuICB9O1xufSAvLyAoMjU6OCkgeyNlYWNoIGJ1dHRvbnMgYXMgY29uZmlnfVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZV9lYWNoX2Jsb2NrKGN0eCkge1xuICBsZXQgc2hlcGhlcmRidXR0b247XG4gIGxldCBjdXJyZW50O1xuICBzaGVwaGVyZGJ1dHRvbiA9IG5ldyBTaGVwaGVyZF9idXR0b24oe1xuICAgIHByb3BzOiB7XG4gICAgICBjb25maWc6XG4gICAgICAvKmNvbmZpZyovXG4gICAgICBjdHhbMl0sXG4gICAgICBzdGVwOlxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFswXVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGNyZWF0ZV9jb21wb25lbnQoc2hlcGhlcmRidXR0b24uJCQuZnJhZ21lbnQpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBtb3VudF9jb21wb25lbnQoc2hlcGhlcmRidXR0b24sIHRhcmdldCwgYW5jaG9yKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBwKGN0eCwgZGlydHkpIHtcbiAgICAgIGNvbnN0IHNoZXBoZXJkYnV0dG9uX2NoYW5nZXMgPSB7fTtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKmJ1dHRvbnMqL1xuICAgICAgMikgc2hlcGhlcmRidXR0b25fY2hhbmdlcy5jb25maWcgPVxuICAgICAgLypjb25maWcqL1xuICAgICAgY3R4WzJdO1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qc3RlcCovXG4gICAgICAxKSBzaGVwaGVyZGJ1dHRvbl9jaGFuZ2VzLnN0ZXAgPVxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFswXTtcbiAgICAgIHNoZXBoZXJkYnV0dG9uLiRzZXQoc2hlcGhlcmRidXR0b25fY2hhbmdlcyk7XG4gICAgfSxcblxuICAgIGkobG9jYWwpIHtcbiAgICAgIGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgICB0cmFuc2l0aW9uX2luKHNoZXBoZXJkYnV0dG9uLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgbyhsb2NhbCkge1xuICAgICAgdHJhbnNpdGlvbl9vdXQoc2hlcGhlcmRidXR0b24uJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICAgIGN1cnJlbnQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHNoZXBoZXJkYnV0dG9uLCBkZXRhY2hpbmcpO1xuICAgIH1cblxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkNyhjdHgpIHtcbiAgbGV0IGZvb3RlcjtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBpZl9ibG9jayA9XG4gIC8qYnV0dG9ucyovXG4gIGN0eFsxXSAmJiBjcmVhdGVfaWZfYmxvY2skMyhjdHgpO1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBmb290ZXIgPSBlbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgICAgaWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5jKCk7XG4gICAgICBhdHRyKGZvb3RlciwgXCJjbGFzc1wiLCBcInNoZXBoZXJkLWZvb3RlclwiKTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgaW5zZXJ0KHRhcmdldCwgZm9vdGVyLCBhbmNob3IpO1xuICAgICAgaWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5tKGZvb3RlciwgbnVsbCk7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcChjdHgsIFtkaXJ0eV0pIHtcbiAgICAgIGlmIChcbiAgICAgIC8qYnV0dG9ucyovXG4gICAgICBjdHhbMV0pIHtcbiAgICAgICAgaWYgKGlmX2Jsb2NrKSB7XG4gICAgICAgICAgaWZfYmxvY2sucChjdHgsIGRpcnR5KTtcblxuICAgICAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAgICAgLypidXR0b25zKi9cbiAgICAgICAgICAyKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWZfYmxvY2sgPSBjcmVhdGVfaWZfYmxvY2skMyhjdHgpO1xuICAgICAgICAgIGlmX2Jsb2NrLmMoKTtcbiAgICAgICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrLCAxKTtcbiAgICAgICAgICBpZl9ibG9jay5tKGZvb3RlciwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaWZfYmxvY2spIHtcbiAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgIHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgICAgaWZfYmxvY2sgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGkobG9jYWwpIHtcbiAgICAgIGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBvKGxvY2FsKSB7XG4gICAgICB0cmFuc2l0aW9uX291dChpZl9ibG9jayk7XG4gICAgICBjdXJyZW50ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBpZiAoZGV0YWNoaW5nKSBkZXRhY2goZm9vdGVyKTtcbiAgICAgIGlmIChpZl9ibG9jaykgaWZfYmxvY2suZCgpO1xuICAgIH1cblxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZSQ3KCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gIGxldCBidXR0b25zO1xuICBsZXQge1xuICAgIHN0ZXBcbiAgfSA9ICQkcHJvcHM7XG5cbiAgJCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgaWYgKFwic3RlcFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgwLCBzdGVwID0gJCRwcm9wcy5zdGVwKTtcbiAgfTtcblxuICAkJHNlbGYuJCQudXBkYXRlID0gKCkgPT4ge1xuICAgIGlmICgkJHNlbGYuJCQuZGlydHkgJlxuICAgIC8qc3RlcCovXG4gICAgMSkge1xuICAgICAgJCRpbnZhbGlkYXRlKDEsIGJ1dHRvbnMgPSBzdGVwLm9wdGlvbnMuYnV0dG9ucyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBbc3RlcCwgYnV0dG9uc107XG59XG5cbmNsYXNzIFNoZXBoZXJkX2Zvb3RlciBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UkNywgY3JlYXRlX2ZyYWdtZW50JDcsIHNhZmVfbm90X2VxdWFsLCB7XG4gICAgICBzdGVwOiAwXG4gICAgfSk7XG4gIH1cblxufVxuXG4vKiBzcmMvanMvY29tcG9uZW50cy9zaGVwaGVyZC1jYW5jZWwtaWNvbi5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My4zNy4wICovXG5cbmZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQ2KGN0eCkge1xuICBsZXQgYnV0dG9uO1xuICBsZXQgc3BhbjtcbiAgbGV0IGJ1dHRvbl9hcmlhX2xhYmVsX3ZhbHVlO1xuICBsZXQgbW91bnRlZDtcbiAgbGV0IGRpc3Bvc2U7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGJ1dHRvbiA9IGVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBzcGFuID0gZWxlbWVudChcInNwYW5cIik7XG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gXCLDl1wiO1xuICAgICAgYXR0cihzcGFuLCBcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcbiAgICAgIGF0dHIoYnV0dG9uLCBcImFyaWEtbGFiZWxcIiwgYnV0dG9uX2FyaWFfbGFiZWxfdmFsdWUgPVxuICAgICAgLypjYW5jZWxJY29uKi9cbiAgICAgIGN0eFswXS5sYWJlbCA/XG4gICAgICAvKmNhbmNlbEljb24qL1xuICAgICAgY3R4WzBdLmxhYmVsIDogXCJDbG9zZSBUb3VyXCIpO1xuICAgICAgYXR0cihidXR0b24sIFwiY2xhc3NcIiwgXCJzaGVwaGVyZC1jYW5jZWwtaWNvblwiKTtcbiAgICAgIGF0dHIoYnV0dG9uLCBcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIGluc2VydCh0YXJnZXQsIGJ1dHRvbiwgYW5jaG9yKTtcbiAgICAgIGFwcGVuZChidXR0b24sIHNwYW4pO1xuXG4gICAgICBpZiAoIW1vdW50ZWQpIHtcbiAgICAgICAgZGlzcG9zZSA9IGxpc3RlbihidXR0b24sIFwiY2xpY2tcIixcbiAgICAgICAgLypoYW5kbGVDYW5jZWxDbGljayovXG4gICAgICAgIGN0eFsxXSk7XG4gICAgICAgIG1vdW50ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBwKGN0eCwgW2RpcnR5XSkge1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qY2FuY2VsSWNvbiovXG4gICAgICAxICYmIGJ1dHRvbl9hcmlhX2xhYmVsX3ZhbHVlICE9PSAoYnV0dG9uX2FyaWFfbGFiZWxfdmFsdWUgPVxuICAgICAgLypjYW5jZWxJY29uKi9cbiAgICAgIGN0eFswXS5sYWJlbCA/XG4gICAgICAvKmNhbmNlbEljb24qL1xuICAgICAgY3R4WzBdLmxhYmVsIDogXCJDbG9zZSBUb3VyXCIpKSB7XG4gICAgICAgIGF0dHIoYnV0dG9uLCBcImFyaWEtbGFiZWxcIiwgYnV0dG9uX2FyaWFfbGFiZWxfdmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpOiBub29wLFxuICAgIG86IG5vb3AsXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgaWYgKGRldGFjaGluZykgZGV0YWNoKGJ1dHRvbik7XG4gICAgICBtb3VudGVkID0gZmFsc2U7XG4gICAgICBkaXNwb3NlKCk7XG4gICAgfVxuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGluc3RhbmNlJDYoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgbGV0IHtcbiAgICBjYW5jZWxJY29uXG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIHN0ZXBcbiAgfSA9ICQkcHJvcHM7XG4gIC8qKlxuICAqIEFkZCBhIGNsaWNrIGxpc3RlbmVyIHRvIHRoZSBjYW5jZWwgbGluayB0aGF0IGNhbmNlbHMgdGhlIHRvdXJcbiAgKi9cblxuICBjb25zdCBoYW5kbGVDYW5jZWxDbGljayA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzdGVwLmNhbmNlbCgpO1xuICB9O1xuXG4gICQkc2VsZi4kJHNldCA9ICQkcHJvcHMgPT4ge1xuICAgIGlmIChcImNhbmNlbEljb25cIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMCwgY2FuY2VsSWNvbiA9ICQkcHJvcHMuY2FuY2VsSWNvbik7XG4gICAgaWYgKFwic3RlcFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgyLCBzdGVwID0gJCRwcm9wcy5zdGVwKTtcbiAgfTtcblxuICByZXR1cm4gW2NhbmNlbEljb24sIGhhbmRsZUNhbmNlbENsaWNrLCBzdGVwXTtcbn1cblxuY2xhc3MgU2hlcGhlcmRfY2FuY2VsX2ljb24gZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDYsIGNyZWF0ZV9mcmFnbWVudCQ2LCBzYWZlX25vdF9lcXVhbCwge1xuICAgICAgY2FuY2VsSWNvbjogMCxcbiAgICAgIHN0ZXA6IDJcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qIHNyYy9qcy9jb21wb25lbnRzL3NoZXBoZXJkLXRpdGxlLnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjM3LjAgKi9cblxuZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDUoY3R4KSB7XG4gIGxldCBoMztcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgaDMgPSBlbGVtZW50KFwiaDNcIik7XG4gICAgICBhdHRyKGgzLCBcImlkXCIsXG4gICAgICAvKmxhYmVsSWQqL1xuICAgICAgY3R4WzFdKTtcbiAgICAgIGF0dHIoaDMsIFwiY2xhc3NcIiwgXCJzaGVwaGVyZC10aXRsZVwiKTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgaW5zZXJ0KHRhcmdldCwgaDMsIGFuY2hvcik7XG4gICAgICAvKmgzX2JpbmRpbmcqL1xuXG4gICAgICBjdHhbM10oaDMpO1xuICAgIH0sXG5cbiAgICBwKGN0eCwgW2RpcnR5XSkge1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qbGFiZWxJZCovXG4gICAgICAyKSB7XG4gICAgICAgIGF0dHIoaDMsIFwiaWRcIixcbiAgICAgICAgLypsYWJlbElkKi9cbiAgICAgICAgY3R4WzFdKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaTogbm9vcCxcbiAgICBvOiBub29wLFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGlmIChkZXRhY2hpbmcpIGRldGFjaChoMyk7XG4gICAgICAvKmgzX2JpbmRpbmcqL1xuXG4gICAgICBjdHhbM10obnVsbCk7XG4gICAgfVxuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGluc3RhbmNlJDUoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgbGV0IHtcbiAgICBsYWJlbElkXG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIGVsZW1lbnRcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgdGl0bGVcbiAgfSA9ICQkcHJvcHM7XG4gIGFmdGVyVXBkYXRlKCgpID0+IHtcbiAgICBpZiAoaXNGdW5jdGlvbih0aXRsZSkpIHtcbiAgICAgICQkaW52YWxpZGF0ZSgyLCB0aXRsZSA9IHRpdGxlKCkpO1xuICAgIH1cblxuICAgICQkaW52YWxpZGF0ZSgwLCBlbGVtZW50LmlubmVySFRNTCA9IHRpdGxlLCBlbGVtZW50KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaDNfYmluZGluZygkJHZhbHVlKSB7XG4gICAgYmluZGluZ19jYWxsYmFja3NbJCR2YWx1ZSA/IFwidW5zaGlmdFwiIDogXCJwdXNoXCJdKCgpID0+IHtcbiAgICAgIGVsZW1lbnQgPSAkJHZhbHVlO1xuICAgICAgJCRpbnZhbGlkYXRlKDAsIGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgJCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgaWYgKFwibGFiZWxJZFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgxLCBsYWJlbElkID0gJCRwcm9wcy5sYWJlbElkKTtcbiAgICBpZiAoXCJlbGVtZW50XCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDAsIGVsZW1lbnQgPSAkJHByb3BzLmVsZW1lbnQpO1xuICAgIGlmIChcInRpdGxlXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDIsIHRpdGxlID0gJCRwcm9wcy50aXRsZSk7XG4gIH07XG5cbiAgcmV0dXJuIFtlbGVtZW50LCBsYWJlbElkLCB0aXRsZSwgaDNfYmluZGluZ107XG59XG5cbmNsYXNzIFNoZXBoZXJkX3RpdGxlIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgaW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQ1LCBjcmVhdGVfZnJhZ21lbnQkNSwgc2FmZV9ub3RfZXF1YWwsIHtcbiAgICAgIGxhYmVsSWQ6IDEsXG4gICAgICBlbGVtZW50OiAwLFxuICAgICAgdGl0bGU6IDJcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qIHNyYy9qcy9jb21wb25lbnRzL3NoZXBoZXJkLWhlYWRlci5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My4zNy4wICovXG5cbmZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9ja18xJDEoY3R4KSB7XG4gIGxldCBzaGVwaGVyZHRpdGxlO1xuICBsZXQgY3VycmVudDtcbiAgc2hlcGhlcmR0aXRsZSA9IG5ldyBTaGVwaGVyZF90aXRsZSh7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxhYmVsSWQ6XG4gICAgICAvKmxhYmVsSWQqL1xuICAgICAgY3R4WzBdLFxuICAgICAgdGl0bGU6XG4gICAgICAvKnRpdGxlKi9cbiAgICAgIGN0eFsyXVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGNyZWF0ZV9jb21wb25lbnQoc2hlcGhlcmR0aXRsZS4kJC5mcmFnbWVudCk7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIG1vdW50X2NvbXBvbmVudChzaGVwaGVyZHRpdGxlLCB0YXJnZXQsIGFuY2hvcik7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcChjdHgsIGRpcnR5KSB7XG4gICAgICBjb25zdCBzaGVwaGVyZHRpdGxlX2NoYW5nZXMgPSB7fTtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKmxhYmVsSWQqL1xuICAgICAgMSkgc2hlcGhlcmR0aXRsZV9jaGFuZ2VzLmxhYmVsSWQgPVxuICAgICAgLypsYWJlbElkKi9cbiAgICAgIGN0eFswXTtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKnRpdGxlKi9cbiAgICAgIDQpIHNoZXBoZXJkdGl0bGVfY2hhbmdlcy50aXRsZSA9XG4gICAgICAvKnRpdGxlKi9cbiAgICAgIGN0eFsyXTtcbiAgICAgIHNoZXBoZXJkdGl0bGUuJHNldChzaGVwaGVyZHRpdGxlX2NoYW5nZXMpO1xuICAgIH0sXG5cbiAgICBpKGxvY2FsKSB7XG4gICAgICBpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgICAgdHJhbnNpdGlvbl9pbihzaGVwaGVyZHRpdGxlLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgbyhsb2NhbCkge1xuICAgICAgdHJhbnNpdGlvbl9vdXQoc2hlcGhlcmR0aXRsZS4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgICAgY3VycmVudCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgZGVzdHJveV9jb21wb25lbnQoc2hlcGhlcmR0aXRsZSwgZGV0YWNoaW5nKTtcbiAgICB9XG5cbiAgfTtcbn0gLy8gKDM5OjQpIHsjaWYgY2FuY2VsSWNvbiAmJiBjYW5jZWxJY29uLmVuYWJsZWR9XG5cblxuZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrJDIoY3R4KSB7XG4gIGxldCBzaGVwaGVyZGNhbmNlbGljb247XG4gIGxldCBjdXJyZW50O1xuICBzaGVwaGVyZGNhbmNlbGljb24gPSBuZXcgU2hlcGhlcmRfY2FuY2VsX2ljb24oe1xuICAgIHByb3BzOiB7XG4gICAgICBjYW5jZWxJY29uOlxuICAgICAgLypjYW5jZWxJY29uKi9cbiAgICAgIGN0eFszXSxcbiAgICAgIHN0ZXA6XG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzFdXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgY3JlYXRlX2NvbXBvbmVudChzaGVwaGVyZGNhbmNlbGljb24uJCQuZnJhZ21lbnQpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBtb3VudF9jb21wb25lbnQoc2hlcGhlcmRjYW5jZWxpY29uLCB0YXJnZXQsIGFuY2hvcik7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcChjdHgsIGRpcnR5KSB7XG4gICAgICBjb25zdCBzaGVwaGVyZGNhbmNlbGljb25fY2hhbmdlcyA9IHt9O1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qY2FuY2VsSWNvbiovXG4gICAgICA4KSBzaGVwaGVyZGNhbmNlbGljb25fY2hhbmdlcy5jYW5jZWxJY29uID1cbiAgICAgIC8qY2FuY2VsSWNvbiovXG4gICAgICBjdHhbM107XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypzdGVwKi9cbiAgICAgIDIpIHNoZXBoZXJkY2FuY2VsaWNvbl9jaGFuZ2VzLnN0ZXAgPVxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFsxXTtcbiAgICAgIHNoZXBoZXJkY2FuY2VsaWNvbi4kc2V0KHNoZXBoZXJkY2FuY2VsaWNvbl9jaGFuZ2VzKTtcbiAgICB9LFxuXG4gICAgaShsb2NhbCkge1xuICAgICAgaWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICAgIHRyYW5zaXRpb25faW4oc2hlcGhlcmRjYW5jZWxpY29uLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgbyhsb2NhbCkge1xuICAgICAgdHJhbnNpdGlvbl9vdXQoc2hlcGhlcmRjYW5jZWxpY29uLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgICBjdXJyZW50ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBkZXN0cm95X2NvbXBvbmVudChzaGVwaGVyZGNhbmNlbGljb24sIGRldGFjaGluZyk7XG4gICAgfVxuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQ0KGN0eCkge1xuICBsZXQgaGVhZGVyO1xuICBsZXQgdDtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBpZl9ibG9jazAgPVxuICAvKnRpdGxlKi9cbiAgY3R4WzJdICYmIGNyZWF0ZV9pZl9ibG9ja18xJDEoY3R4KTtcbiAgbGV0IGlmX2Jsb2NrMSA9XG4gIC8qY2FuY2VsSWNvbiovXG4gIGN0eFszXSAmJlxuICAvKmNhbmNlbEljb24qL1xuICBjdHhbM10uZW5hYmxlZCAmJiBjcmVhdGVfaWZfYmxvY2skMihjdHgpO1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBoZWFkZXIgPSBlbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgICAgaWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLmMoKTtcbiAgICAgIHQgPSBzcGFjZSgpO1xuICAgICAgaWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmMoKTtcbiAgICAgIGF0dHIoaGVhZGVyLCBcImNsYXNzXCIsIFwic2hlcGhlcmQtaGVhZGVyXCIpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBpbnNlcnQodGFyZ2V0LCBoZWFkZXIsIGFuY2hvcik7XG4gICAgICBpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAubShoZWFkZXIsIG51bGwpO1xuICAgICAgYXBwZW5kKGhlYWRlciwgdCk7XG4gICAgICBpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEubShoZWFkZXIsIG51bGwpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIHAoY3R4LCBbZGlydHldKSB7XG4gICAgICBpZiAoXG4gICAgICAvKnRpdGxlKi9cbiAgICAgIGN0eFsyXSkge1xuICAgICAgICBpZiAoaWZfYmxvY2swKSB7XG4gICAgICAgICAgaWZfYmxvY2swLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICAgICAgICBpZiAoZGlydHkgJlxuICAgICAgICAgIC8qdGl0bGUqL1xuICAgICAgICAgIDQpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2swLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWZfYmxvY2swID0gY3JlYXRlX2lmX2Jsb2NrXzEkMShjdHgpO1xuICAgICAgICAgIGlmX2Jsb2NrMC5jKCk7XG4gICAgICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazAsIDEpO1xuICAgICAgICAgIGlmX2Jsb2NrMC5tKGhlYWRlciwgdCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaWZfYmxvY2swKSB7XG4gICAgICAgIGdyb3VwX291dHJvcygpO1xuICAgICAgICB0cmFuc2l0aW9uX291dChpZl9ibG9jazAsIDEsIDEsICgpID0+IHtcbiAgICAgICAgICBpZl9ibG9jazAgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgIC8qY2FuY2VsSWNvbiovXG4gICAgICBjdHhbM10gJiZcbiAgICAgIC8qY2FuY2VsSWNvbiovXG4gICAgICBjdHhbM10uZW5hYmxlZCkge1xuICAgICAgICBpZiAoaWZfYmxvY2sxKSB7XG4gICAgICAgICAgaWZfYmxvY2sxLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICAgICAgICBpZiAoZGlydHkgJlxuICAgICAgICAgIC8qY2FuY2VsSWNvbiovXG4gICAgICAgICAgOCkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZl9ibG9jazEgPSBjcmVhdGVfaWZfYmxvY2skMihjdHgpO1xuICAgICAgICAgIGlmX2Jsb2NrMS5jKCk7XG4gICAgICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgICAgICAgIGlmX2Jsb2NrMS5tKGhlYWRlciwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaWZfYmxvY2sxKSB7XG4gICAgICAgIGdyb3VwX291dHJvcygpO1xuICAgICAgICB0cmFuc2l0aW9uX291dChpZl9ibG9jazEsIDEsIDEsICgpID0+IHtcbiAgICAgICAgICBpZl9ibG9jazEgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGkobG9jYWwpIHtcbiAgICAgIGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCk7XG4gICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSk7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgbyhsb2NhbCkge1xuICAgICAgdHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swKTtcbiAgICAgIHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMSk7XG4gICAgICBjdXJyZW50ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBpZiAoZGV0YWNoaW5nKSBkZXRhY2goaGVhZGVyKTtcbiAgICAgIGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5kKCk7XG4gICAgICBpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuZCgpO1xuICAgIH1cblxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZSQ0KCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gIGxldCB7XG4gICAgbGFiZWxJZFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBzdGVwXG4gIH0gPSAkJHByb3BzO1xuICBsZXQgdGl0bGUsIGNhbmNlbEljb247XG5cbiAgJCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgaWYgKFwibGFiZWxJZFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgwLCBsYWJlbElkID0gJCRwcm9wcy5sYWJlbElkKTtcbiAgICBpZiAoXCJzdGVwXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDEsIHN0ZXAgPSAkJHByb3BzLnN0ZXApO1xuICB9O1xuXG4gICQkc2VsZi4kJC51cGRhdGUgPSAoKSA9PiB7XG4gICAgaWYgKCQkc2VsZi4kJC5kaXJ0eSAmXG4gICAgLypzdGVwKi9cbiAgICAyKSB7XG4gICAgICB7XG4gICAgICAgICQkaW52YWxpZGF0ZSgyLCB0aXRsZSA9IHN0ZXAub3B0aW9ucy50aXRsZSk7XG4gICAgICAgICQkaW52YWxpZGF0ZSgzLCBjYW5jZWxJY29uID0gc3RlcC5vcHRpb25zLmNhbmNlbEljb24pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gW2xhYmVsSWQsIHN0ZXAsIHRpdGxlLCBjYW5jZWxJY29uXTtcbn1cblxuY2xhc3MgU2hlcGhlcmRfaGVhZGVyIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgaW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQ0LCBjcmVhdGVfZnJhZ21lbnQkNCwgc2FmZV9ub3RfZXF1YWwsIHtcbiAgICAgIGxhYmVsSWQ6IDAsXG4gICAgICBzdGVwOiAxXG4gICAgfSk7XG4gIH1cblxufVxuXG4vKiBzcmMvanMvY29tcG9uZW50cy9zaGVwaGVyZC10ZXh0LnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjM3LjAgKi9cblxuZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDMoY3R4KSB7XG4gIGxldCBkaXY7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhdHRyKGRpdiwgXCJjbGFzc1wiLCBcInNoZXBoZXJkLXRleHRcIik7XG4gICAgICBhdHRyKGRpdiwgXCJpZFwiLFxuICAgICAgLypkZXNjcmlwdGlvbklkKi9cbiAgICAgIGN0eFsxXSk7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICAgIC8qZGl2X2JpbmRpbmcqL1xuXG4gICAgICBjdHhbM10oZGl2KTtcbiAgICB9LFxuXG4gICAgcChjdHgsIFtkaXJ0eV0pIHtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKmRlc2NyaXB0aW9uSWQqL1xuICAgICAgMikge1xuICAgICAgICBhdHRyKGRpdiwgXCJpZFwiLFxuICAgICAgICAvKmRlc2NyaXB0aW9uSWQqL1xuICAgICAgICBjdHhbMV0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpOiBub29wLFxuICAgIG86IG5vb3AsXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgaWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgICAvKmRpdl9iaW5kaW5nKi9cblxuICAgICAgY3R4WzNdKG51bGwpO1xuICAgIH1cblxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZSQzKCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gIGxldCB7XG4gICAgZGVzY3JpcHRpb25JZFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBlbGVtZW50XG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIHN0ZXBcbiAgfSA9ICQkcHJvcHM7XG4gIGFmdGVyVXBkYXRlKCgpID0+IHtcbiAgICBsZXQge1xuICAgICAgdGV4dFxuICAgIH0gPSBzdGVwLm9wdGlvbnM7XG5cbiAgICBpZiAoaXNGdW5jdGlvbih0ZXh0KSkge1xuICAgICAgdGV4dCA9IHRleHQuY2FsbChzdGVwKTtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudCQxKHRleHQpKSB7XG4gICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkJGludmFsaWRhdGUoMCwgZWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0LCBlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGRpdl9iaW5kaW5nKCQkdmFsdWUpIHtcbiAgICBiaW5kaW5nX2NhbGxiYWNrc1skJHZhbHVlID8gXCJ1bnNoaWZ0XCIgOiBcInB1c2hcIl0oKCkgPT4ge1xuICAgICAgZWxlbWVudCA9ICQkdmFsdWU7XG4gICAgICAkJGludmFsaWRhdGUoMCwgZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICAkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBpZiAoXCJkZXNjcmlwdGlvbklkXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDEsIGRlc2NyaXB0aW9uSWQgPSAkJHByb3BzLmRlc2NyaXB0aW9uSWQpO1xuICAgIGlmIChcImVsZW1lbnRcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMCwgZWxlbWVudCA9ICQkcHJvcHMuZWxlbWVudCk7XG4gICAgaWYgKFwic3RlcFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgyLCBzdGVwID0gJCRwcm9wcy5zdGVwKTtcbiAgfTtcblxuICByZXR1cm4gW2VsZW1lbnQsIGRlc2NyaXB0aW9uSWQsIHN0ZXAsIGRpdl9iaW5kaW5nXTtcbn1cblxuY2xhc3MgU2hlcGhlcmRfdGV4dCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UkMywgY3JlYXRlX2ZyYWdtZW50JDMsIHNhZmVfbm90X2VxdWFsLCB7XG4gICAgICBkZXNjcmlwdGlvbklkOiAxLFxuICAgICAgZWxlbWVudDogMCxcbiAgICAgIHN0ZXA6IDJcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qIHNyYy9qcy9jb21wb25lbnRzL3NoZXBoZXJkLWNvbnRlbnQuc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuMzcuMCAqL1xuXG5mdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMihjdHgpIHtcbiAgbGV0IHNoZXBoZXJkaGVhZGVyO1xuICBsZXQgY3VycmVudDtcbiAgc2hlcGhlcmRoZWFkZXIgPSBuZXcgU2hlcGhlcmRfaGVhZGVyKHtcbiAgICBwcm9wczoge1xuICAgICAgbGFiZWxJZDpcbiAgICAgIC8qbGFiZWxJZCovXG4gICAgICBjdHhbMV0sXG4gICAgICBzdGVwOlxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFsyXVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGNyZWF0ZV9jb21wb25lbnQoc2hlcGhlcmRoZWFkZXIuJCQuZnJhZ21lbnQpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBtb3VudF9jb21wb25lbnQoc2hlcGhlcmRoZWFkZXIsIHRhcmdldCwgYW5jaG9yKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBwKGN0eCwgZGlydHkpIHtcbiAgICAgIGNvbnN0IHNoZXBoZXJkaGVhZGVyX2NoYW5nZXMgPSB7fTtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKmxhYmVsSWQqL1xuICAgICAgMikgc2hlcGhlcmRoZWFkZXJfY2hhbmdlcy5sYWJlbElkID1cbiAgICAgIC8qbGFiZWxJZCovXG4gICAgICBjdHhbMV07XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypzdGVwKi9cbiAgICAgIDQpIHNoZXBoZXJkaGVhZGVyX2NoYW5nZXMuc3RlcCA9XG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzJdO1xuICAgICAgc2hlcGhlcmRoZWFkZXIuJHNldChzaGVwaGVyZGhlYWRlcl9jaGFuZ2VzKTtcbiAgICB9LFxuXG4gICAgaShsb2NhbCkge1xuICAgICAgaWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICAgIHRyYW5zaXRpb25faW4oc2hlcGhlcmRoZWFkZXIuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBvKGxvY2FsKSB7XG4gICAgICB0cmFuc2l0aW9uX291dChzaGVwaGVyZGhlYWRlci4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgICAgY3VycmVudCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgZGVzdHJveV9jb21wb25lbnQoc2hlcGhlcmRoZWFkZXIsIGRldGFjaGluZyk7XG4gICAgfVxuXG4gIH07XG59IC8vICgyODoyKSB7I2lmICFpc1VuZGVmaW5lZChzdGVwLm9wdGlvbnMudGV4dCl9XG5cblxuZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzEoY3R4KSB7XG4gIGxldCBzaGVwaGVyZHRleHQ7XG4gIGxldCBjdXJyZW50O1xuICBzaGVwaGVyZHRleHQgPSBuZXcgU2hlcGhlcmRfdGV4dCh7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRlc2NyaXB0aW9uSWQ6XG4gICAgICAvKmRlc2NyaXB0aW9uSWQqL1xuICAgICAgY3R4WzBdLFxuICAgICAgc3RlcDpcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMl1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBjcmVhdGVfY29tcG9uZW50KHNoZXBoZXJkdGV4dC4kJC5mcmFnbWVudCk7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIG1vdW50X2NvbXBvbmVudChzaGVwaGVyZHRleHQsIHRhcmdldCwgYW5jaG9yKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBwKGN0eCwgZGlydHkpIHtcbiAgICAgIGNvbnN0IHNoZXBoZXJkdGV4dF9jaGFuZ2VzID0ge307XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypkZXNjcmlwdGlvbklkKi9cbiAgICAgIDEpIHNoZXBoZXJkdGV4dF9jaGFuZ2VzLmRlc2NyaXB0aW9uSWQgPVxuICAgICAgLypkZXNjcmlwdGlvbklkKi9cbiAgICAgIGN0eFswXTtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKnN0ZXAqL1xuICAgICAgNCkgc2hlcGhlcmR0ZXh0X2NoYW5nZXMuc3RlcCA9XG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzJdO1xuICAgICAgc2hlcGhlcmR0ZXh0LiRzZXQoc2hlcGhlcmR0ZXh0X2NoYW5nZXMpO1xuICAgIH0sXG5cbiAgICBpKGxvY2FsKSB7XG4gICAgICBpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgICAgdHJhbnNpdGlvbl9pbihzaGVwaGVyZHRleHQuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBvKGxvY2FsKSB7XG4gICAgICB0cmFuc2l0aW9uX291dChzaGVwaGVyZHRleHQuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICAgIGN1cnJlbnQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHNoZXBoZXJkdGV4dCwgZGV0YWNoaW5nKTtcbiAgICB9XG5cbiAgfTtcbn0gLy8gKDM1OjIpIHsjaWYgQXJyYXkuaXNBcnJheShzdGVwLm9wdGlvbnMuYnV0dG9ucykgJiYgc3RlcC5vcHRpb25zLmJ1dHRvbnMubGVuZ3RofVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9jayQxKGN0eCkge1xuICBsZXQgc2hlcGhlcmRmb290ZXI7XG4gIGxldCBjdXJyZW50O1xuICBzaGVwaGVyZGZvb3RlciA9IG5ldyBTaGVwaGVyZF9mb290ZXIoe1xuICAgIHByb3BzOiB7XG4gICAgICBzdGVwOlxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFsyXVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGNyZWF0ZV9jb21wb25lbnQoc2hlcGhlcmRmb290ZXIuJCQuZnJhZ21lbnQpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBtb3VudF9jb21wb25lbnQoc2hlcGhlcmRmb290ZXIsIHRhcmdldCwgYW5jaG9yKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBwKGN0eCwgZGlydHkpIHtcbiAgICAgIGNvbnN0IHNoZXBoZXJkZm9vdGVyX2NoYW5nZXMgPSB7fTtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKnN0ZXAqL1xuICAgICAgNCkgc2hlcGhlcmRmb290ZXJfY2hhbmdlcy5zdGVwID1cbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMl07XG4gICAgICBzaGVwaGVyZGZvb3Rlci4kc2V0KHNoZXBoZXJkZm9vdGVyX2NoYW5nZXMpO1xuICAgIH0sXG5cbiAgICBpKGxvY2FsKSB7XG4gICAgICBpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgICAgdHJhbnNpdGlvbl9pbihzaGVwaGVyZGZvb3Rlci4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIG8obG9jYWwpIHtcbiAgICAgIHRyYW5zaXRpb25fb3V0KHNoZXBoZXJkZm9vdGVyLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgICBjdXJyZW50ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBkZXN0cm95X2NvbXBvbmVudChzaGVwaGVyZGZvb3RlciwgZGV0YWNoaW5nKTtcbiAgICB9XG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDIoY3R4KSB7XG4gIGxldCBkaXY7XG4gIGxldCBzaG93X2lmXzIgPSAhaXNVbmRlZmluZWQoXG4gIC8qc3RlcCovXG4gIGN0eFsyXS5vcHRpb25zLnRpdGxlKSB8fFxuICAvKnN0ZXAqL1xuICBjdHhbMl0ub3B0aW9ucy5jYW5jZWxJY29uICYmXG4gIC8qc3RlcCovXG4gIGN0eFsyXS5vcHRpb25zLmNhbmNlbEljb24uZW5hYmxlZDtcbiAgbGV0IHQwO1xuICBsZXQgc2hvd19pZl8xID0gIWlzVW5kZWZpbmVkKFxuICAvKnN0ZXAqL1xuICBjdHhbMl0ub3B0aW9ucy50ZXh0KTtcbiAgbGV0IHQxO1xuICBsZXQgc2hvd19pZiA9IEFycmF5LmlzQXJyYXkoXG4gIC8qc3RlcCovXG4gIGN0eFsyXS5vcHRpb25zLmJ1dHRvbnMpICYmXG4gIC8qc3RlcCovXG4gIGN0eFsyXS5vcHRpb25zLmJ1dHRvbnMubGVuZ3RoO1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGlmX2Jsb2NrMCA9IHNob3dfaWZfMiAmJiBjcmVhdGVfaWZfYmxvY2tfMihjdHgpO1xuICBsZXQgaWZfYmxvY2sxID0gc2hvd19pZl8xICYmIGNyZWF0ZV9pZl9ibG9ja18xKGN0eCk7XG4gIGxldCBpZl9ibG9jazIgPSBzaG93X2lmICYmIGNyZWF0ZV9pZl9ibG9jayQxKGN0eCk7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAuYygpO1xuICAgICAgdDAgPSBzcGFjZSgpO1xuICAgICAgaWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmMoKTtcbiAgICAgIHQxID0gc3BhY2UoKTtcbiAgICAgIGlmIChpZl9ibG9jazIpIGlmX2Jsb2NrMi5jKCk7XG4gICAgICBhdHRyKGRpdiwgXCJjbGFzc1wiLCBcInNoZXBoZXJkLWNvbnRlbnRcIik7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICAgIGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5tKGRpdiwgbnVsbCk7XG4gICAgICBhcHBlbmQoZGl2LCB0MCk7XG4gICAgICBpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEubShkaXYsIG51bGwpO1xuICAgICAgYXBwZW5kKGRpdiwgdDEpO1xuICAgICAgaWYgKGlmX2Jsb2NrMikgaWZfYmxvY2syLm0oZGl2LCBudWxsKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBwKGN0eCwgW2RpcnR5XSkge1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qc3RlcCovXG4gICAgICA0KSBzaG93X2lmXzIgPSAhaXNVbmRlZmluZWQoXG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzJdLm9wdGlvbnMudGl0bGUpIHx8XG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzJdLm9wdGlvbnMuY2FuY2VsSWNvbiAmJlxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFsyXS5vcHRpb25zLmNhbmNlbEljb24uZW5hYmxlZDtcblxuICAgICAgaWYgKHNob3dfaWZfMikge1xuICAgICAgICBpZiAoaWZfYmxvY2swKSB7XG4gICAgICAgICAgaWZfYmxvY2swLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICAgICAgICBpZiAoZGlydHkgJlxuICAgICAgICAgIC8qc3RlcCovXG4gICAgICAgICAgNCkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazAsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZl9ibG9jazAgPSBjcmVhdGVfaWZfYmxvY2tfMihjdHgpO1xuICAgICAgICAgIGlmX2Jsb2NrMC5jKCk7XG4gICAgICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazAsIDEpO1xuICAgICAgICAgIGlmX2Jsb2NrMC5tKGRpdiwgdDApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlmX2Jsb2NrMCkge1xuICAgICAgICBncm91cF9vdXRyb3MoKTtcbiAgICAgICAgdHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgICAgaWZfYmxvY2swID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypzdGVwKi9cbiAgICAgIDQpIHNob3dfaWZfMSA9ICFpc1VuZGVmaW5lZChcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMl0ub3B0aW9ucy50ZXh0KTtcblxuICAgICAgaWYgKHNob3dfaWZfMSkge1xuICAgICAgICBpZiAoaWZfYmxvY2sxKSB7XG4gICAgICAgICAgaWZfYmxvY2sxLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICAgICAgICBpZiAoZGlydHkgJlxuICAgICAgICAgIC8qc3RlcCovXG4gICAgICAgICAgNCkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZl9ibG9jazEgPSBjcmVhdGVfaWZfYmxvY2tfMShjdHgpO1xuICAgICAgICAgIGlmX2Jsb2NrMS5jKCk7XG4gICAgICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgICAgICAgIGlmX2Jsb2NrMS5tKGRpdiwgdDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlmX2Jsb2NrMSkge1xuICAgICAgICBncm91cF9vdXRyb3MoKTtcbiAgICAgICAgdHJhbnNpdGlvbl9vdXQoaWZfYmxvY2sxLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgICAgaWZfYmxvY2sxID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypzdGVwKi9cbiAgICAgIDQpIHNob3dfaWYgPSBBcnJheS5pc0FycmF5KFxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFsyXS5vcHRpb25zLmJ1dHRvbnMpICYmXG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzJdLm9wdGlvbnMuYnV0dG9ucy5sZW5ndGg7XG5cbiAgICAgIGlmIChzaG93X2lmKSB7XG4gICAgICAgIGlmIChpZl9ibG9jazIpIHtcbiAgICAgICAgICBpZl9ibG9jazIucChjdHgsIGRpcnR5KTtcblxuICAgICAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAgICAgLypzdGVwKi9cbiAgICAgICAgICA0KSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMiwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmX2Jsb2NrMiA9IGNyZWF0ZV9pZl9ibG9jayQxKGN0eCk7XG4gICAgICAgICAgaWZfYmxvY2syLmMoKTtcbiAgICAgICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMiwgMSk7XG4gICAgICAgICAgaWZfYmxvY2syLm0oZGl2LCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpZl9ibG9jazIpIHtcbiAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgIHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMiwgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgIGlmX2Jsb2NrMiA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGVja19vdXRyb3MoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaShsb2NhbCkge1xuICAgICAgaWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2swKTtcbiAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2sxKTtcbiAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2syKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBvKGxvY2FsKSB7XG4gICAgICB0cmFuc2l0aW9uX291dChpZl9ibG9jazApO1xuICAgICAgdHJhbnNpdGlvbl9vdXQoaWZfYmxvY2sxKTtcbiAgICAgIHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMik7XG4gICAgICBjdXJyZW50ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICAgIGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5kKCk7XG4gICAgICBpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuZCgpO1xuICAgICAgaWYgKGlmX2Jsb2NrMikgaWZfYmxvY2syLmQoKTtcbiAgICB9XG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UkMigkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICBsZXQge1xuICAgIGRlc2NyaXB0aW9uSWRcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgbGFiZWxJZFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBzdGVwXG4gIH0gPSAkJHByb3BzO1xuXG4gICQkc2VsZi4kJHNldCA9ICQkcHJvcHMgPT4ge1xuICAgIGlmIChcImRlc2NyaXB0aW9uSWRcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMCwgZGVzY3JpcHRpb25JZCA9ICQkcHJvcHMuZGVzY3JpcHRpb25JZCk7XG4gICAgaWYgKFwibGFiZWxJZFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgxLCBsYWJlbElkID0gJCRwcm9wcy5sYWJlbElkKTtcbiAgICBpZiAoXCJzdGVwXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDIsIHN0ZXAgPSAkJHByb3BzLnN0ZXApO1xuICB9O1xuXG4gIHJldHVybiBbZGVzY3JpcHRpb25JZCwgbGFiZWxJZCwgc3RlcF07XG59XG5cbmNsYXNzIFNoZXBoZXJkX2NvbnRlbnQgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDIsIGNyZWF0ZV9mcmFnbWVudCQyLCBzYWZlX25vdF9lcXVhbCwge1xuICAgICAgZGVzY3JpcHRpb25JZDogMCxcbiAgICAgIGxhYmVsSWQ6IDEsXG4gICAgICBzdGVwOiAyXG4gICAgfSk7XG4gIH1cblxufVxuXG4vKiBzcmMvanMvY29tcG9uZW50cy9zaGVwaGVyZC1lbGVtZW50LnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjM3LjAgKi9cblxuZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrKGN0eCkge1xuICBsZXQgZGl2O1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYXR0cihkaXYsIFwiY2xhc3NcIiwgXCJzaGVwaGVyZC1hcnJvd1wiKTtcbiAgICAgIGF0dHIoZGl2LCBcImRhdGEtcG9wcGVyLWFycm93XCIsIFwiXCIpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgfSxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICB9XG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDEoY3R4KSB7XG4gIGxldCBkaXY7XG4gIGxldCB0O1xuICBsZXQgc2hlcGhlcmRjb250ZW50O1xuICBsZXQgZGl2X2FyaWFfZGVzY3JpYmVkYnlfdmFsdWU7XG4gIGxldCBkaXZfYXJpYV9sYWJlbGxlZGJ5X3ZhbHVlO1xuICBsZXQgY3VycmVudDtcbiAgbGV0IG1vdW50ZWQ7XG4gIGxldCBkaXNwb3NlO1xuICBsZXQgaWZfYmxvY2sgPVxuICAvKnN0ZXAqL1xuICBjdHhbNF0ub3B0aW9ucy5hcnJvdyAmJlxuICAvKnN0ZXAqL1xuICBjdHhbNF0ub3B0aW9ucy5hdHRhY2hUbyAmJlxuICAvKnN0ZXAqL1xuICBjdHhbNF0ub3B0aW9ucy5hdHRhY2hUby5lbGVtZW50ICYmXG4gIC8qc3RlcCovXG4gIGN0eFs0XS5vcHRpb25zLmF0dGFjaFRvLm9uICYmIGNyZWF0ZV9pZl9ibG9jaygpO1xuICBzaGVwaGVyZGNvbnRlbnQgPSBuZXcgU2hlcGhlcmRfY29udGVudCh7XG4gICAgcHJvcHM6IHtcbiAgICAgIGRlc2NyaXB0aW9uSWQ6XG4gICAgICAvKmRlc2NyaXB0aW9uSWQqL1xuICAgICAgY3R4WzJdLFxuICAgICAgbGFiZWxJZDpcbiAgICAgIC8qbGFiZWxJZCovXG4gICAgICBjdHhbM10sXG4gICAgICBzdGVwOlxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFs0XVxuICAgIH1cbiAgfSk7XG4gIGxldCBkaXZfbGV2ZWxzID0gW3tcbiAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogZGl2X2FyaWFfZGVzY3JpYmVkYnlfdmFsdWUgPSAhaXNVbmRlZmluZWQoXG4gICAgLypzdGVwKi9cbiAgICBjdHhbNF0ub3B0aW9ucy50ZXh0KSA/XG4gICAgLypkZXNjcmlwdGlvbklkKi9cbiAgICBjdHhbMl0gOiBudWxsXG4gIH0sIHtcbiAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBkaXZfYXJpYV9sYWJlbGxlZGJ5X3ZhbHVlID1cbiAgICAvKnN0ZXAqL1xuICAgIGN0eFs0XS5vcHRpb25zLnRpdGxlID9cbiAgICAvKmxhYmVsSWQqL1xuICAgIGN0eFszXSA6IG51bGxcbiAgfSxcbiAgLypkYXRhU3RlcElkKi9cbiAgY3R4WzFdLCB7XG4gICAgcm9sZTogXCJkaWFsb2dcIlxuICB9LCB7XG4gICAgdGFiaW5kZXg6IFwiMFwiXG4gIH1dO1xuICBsZXQgZGl2X2RhdGEgPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRpdl9sZXZlbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBkaXZfZGF0YSA9IGFzc2lnbihkaXZfZGF0YSwgZGl2X2xldmVsc1tpXSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5jKCk7XG4gICAgICB0ID0gc3BhY2UoKTtcbiAgICAgIGNyZWF0ZV9jb21wb25lbnQoc2hlcGhlcmRjb250ZW50LiQkLmZyYWdtZW50KTtcbiAgICAgIHNldF9hdHRyaWJ1dGVzKGRpdiwgZGl2X2RhdGEpO1xuICAgICAgdG9nZ2xlX2NsYXNzKGRpdiwgXCJzaGVwaGVyZC1oYXMtY2FuY2VsLWljb25cIixcbiAgICAgIC8qaGFzQ2FuY2VsSWNvbiovXG4gICAgICBjdHhbNV0pO1xuICAgICAgdG9nZ2xlX2NsYXNzKGRpdiwgXCJzaGVwaGVyZC1oYXMtdGl0bGVcIixcbiAgICAgIC8qaGFzVGl0bGUqL1xuICAgICAgY3R4WzZdKTtcbiAgICAgIHRvZ2dsZV9jbGFzcyhkaXYsIFwic2hlcGhlcmQtZWxlbWVudFwiLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgaW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgICAgaWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5tKGRpdiwgbnVsbCk7XG4gICAgICBhcHBlbmQoZGl2LCB0KTtcbiAgICAgIG1vdW50X2NvbXBvbmVudChzaGVwaGVyZGNvbnRlbnQsIGRpdiwgbnVsbCk7XG4gICAgICAvKmRpdl9iaW5kaW5nKi9cblxuICAgICAgY3R4WzEzXShkaXYpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG5cbiAgICAgIGlmICghbW91bnRlZCkge1xuICAgICAgICBkaXNwb3NlID0gbGlzdGVuKGRpdiwgXCJrZXlkb3duXCIsXG4gICAgICAgIC8qaGFuZGxlS2V5RG93biovXG4gICAgICAgIGN0eFs3XSk7XG4gICAgICAgIG1vdW50ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBwKGN0eCwgW2RpcnR5XSkge1xuICAgICAgaWYgKFxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFs0XS5vcHRpb25zLmFycm93ICYmXG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzRdLm9wdGlvbnMuYXR0YWNoVG8gJiZcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbNF0ub3B0aW9ucy5hdHRhY2hUby5lbGVtZW50ICYmXG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzRdLm9wdGlvbnMuYXR0YWNoVG8ub24pIHtcbiAgICAgICAgaWYgKGlmX2Jsb2NrKSA7IGVsc2Uge1xuICAgICAgICAgIGlmX2Jsb2NrID0gY3JlYXRlX2lmX2Jsb2NrKCk7XG4gICAgICAgICAgaWZfYmxvY2suYygpO1xuICAgICAgICAgIGlmX2Jsb2NrLm0oZGl2LCB0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpZl9ibG9jaykge1xuICAgICAgICBpZl9ibG9jay5kKDEpO1xuICAgICAgICBpZl9ibG9jayA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNoZXBoZXJkY29udGVudF9jaGFuZ2VzID0ge307XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypkZXNjcmlwdGlvbklkKi9cbiAgICAgIDQpIHNoZXBoZXJkY29udGVudF9jaGFuZ2VzLmRlc2NyaXB0aW9uSWQgPVxuICAgICAgLypkZXNjcmlwdGlvbklkKi9cbiAgICAgIGN0eFsyXTtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKmxhYmVsSWQqL1xuICAgICAgOCkgc2hlcGhlcmRjb250ZW50X2NoYW5nZXMubGFiZWxJZCA9XG4gICAgICAvKmxhYmVsSWQqL1xuICAgICAgY3R4WzNdO1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qc3RlcCovXG4gICAgICAxNikgc2hlcGhlcmRjb250ZW50X2NoYW5nZXMuc3RlcCA9XG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzRdO1xuICAgICAgc2hlcGhlcmRjb250ZW50LiRzZXQoc2hlcGhlcmRjb250ZW50X2NoYW5nZXMpO1xuICAgICAgc2V0X2F0dHJpYnV0ZXMoZGl2LCBkaXZfZGF0YSA9IGdldF9zcHJlYWRfdXBkYXRlKGRpdl9sZXZlbHMsIFsoIWN1cnJlbnQgfHwgZGlydHkgJlxuICAgICAgLypzdGVwLCBkZXNjcmlwdGlvbklkKi9cbiAgICAgIDIwICYmIGRpdl9hcmlhX2Rlc2NyaWJlZGJ5X3ZhbHVlICE9PSAoZGl2X2FyaWFfZGVzY3JpYmVkYnlfdmFsdWUgPSAhaXNVbmRlZmluZWQoXG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzRdLm9wdGlvbnMudGV4dCkgP1xuICAgICAgLypkZXNjcmlwdGlvbklkKi9cbiAgICAgIGN0eFsyXSA6IG51bGwpKSAmJiB7XG4gICAgICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBkaXZfYXJpYV9kZXNjcmliZWRieV92YWx1ZVxuICAgICAgfSwgKCFjdXJyZW50IHx8IGRpcnR5ICZcbiAgICAgIC8qc3RlcCwgbGFiZWxJZCovXG4gICAgICAyNCAmJiBkaXZfYXJpYV9sYWJlbGxlZGJ5X3ZhbHVlICE9PSAoZGl2X2FyaWFfbGFiZWxsZWRieV92YWx1ZSA9XG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzRdLm9wdGlvbnMudGl0bGUgP1xuICAgICAgLypsYWJlbElkKi9cbiAgICAgIGN0eFszXSA6IG51bGwpKSAmJiB7XG4gICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGRpdl9hcmlhX2xhYmVsbGVkYnlfdmFsdWVcbiAgICAgIH0sIGRpcnR5ICZcbiAgICAgIC8qZGF0YVN0ZXBJZCovXG4gICAgICAyICYmXG4gICAgICAvKmRhdGFTdGVwSWQqL1xuICAgICAgY3R4WzFdLCB7XG4gICAgICAgIHJvbGU6IFwiZGlhbG9nXCJcbiAgICAgIH0sIHtcbiAgICAgICAgdGFiaW5kZXg6IFwiMFwiXG4gICAgICB9XSkpO1xuICAgICAgdG9nZ2xlX2NsYXNzKGRpdiwgXCJzaGVwaGVyZC1oYXMtY2FuY2VsLWljb25cIixcbiAgICAgIC8qaGFzQ2FuY2VsSWNvbiovXG4gICAgICBjdHhbNV0pO1xuICAgICAgdG9nZ2xlX2NsYXNzKGRpdiwgXCJzaGVwaGVyZC1oYXMtdGl0bGVcIixcbiAgICAgIC8qaGFzVGl0bGUqL1xuICAgICAgY3R4WzZdKTtcbiAgICAgIHRvZ2dsZV9jbGFzcyhkaXYsIFwic2hlcGhlcmQtZWxlbWVudFwiLCB0cnVlKTtcbiAgICB9LFxuXG4gICAgaShsb2NhbCkge1xuICAgICAgaWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICAgIHRyYW5zaXRpb25faW4oc2hlcGhlcmRjb250ZW50LiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgbyhsb2NhbCkge1xuICAgICAgdHJhbnNpdGlvbl9vdXQoc2hlcGhlcmRjb250ZW50LiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgICBjdXJyZW50ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICAgIGlmIChpZl9ibG9jaykgaWZfYmxvY2suZCgpO1xuICAgICAgZGVzdHJveV9jb21wb25lbnQoc2hlcGhlcmRjb250ZW50KTtcbiAgICAgIC8qZGl2X2JpbmRpbmcqL1xuXG4gICAgICBjdHhbMTNdKG51bGwpO1xuICAgICAgbW91bnRlZCA9IGZhbHNlO1xuICAgICAgZGlzcG9zZSgpO1xuICAgIH1cblxuICB9O1xufVxuXG5jb25zdCBLRVlfVEFCID0gOTtcbmNvbnN0IEtFWV9FU0MgPSAyNztcbmNvbnN0IExFRlRfQVJST1cgPSAzNztcbmNvbnN0IFJJR0hUX0FSUk9XID0gMzk7XG5cbmZ1bmN0aW9uIGdldENsYXNzZXNBcnJheShjbGFzc2VzKSB7XG4gIHJldHVybiBjbGFzc2VzLnNwbGl0KFwiIFwiKS5maWx0ZXIoY2xhc3NOYW1lID0+ICEhY2xhc3NOYW1lLmxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIGluc3RhbmNlJDEoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgbGV0IHtcbiAgICBjbGFzc1ByZWZpeFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBlbGVtZW50XG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIGRlc2NyaXB0aW9uSWRcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgZmlyc3RGb2N1c2FibGVFbGVtZW50XG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIGZvY3VzYWJsZUVsZW1lbnRzXG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIGxhYmVsSWRcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgbGFzdEZvY3VzYWJsZUVsZW1lbnRcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgc3RlcFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBkYXRhU3RlcElkXG4gIH0gPSAkJHByb3BzO1xuICBsZXQgaGFzQ2FuY2VsSWNvbiwgaGFzVGl0bGUsIGNsYXNzZXM7XG5cbiAgY29uc3QgZ2V0RWxlbWVudCA9ICgpID0+IGVsZW1lbnQ7XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgLy8gR2V0IGFsbCBlbGVtZW50cyB0aGF0IGFyZSBmb2N1c2FibGVcbiAgICAkJGludmFsaWRhdGUoMSwgZGF0YVN0ZXBJZCA9IHtcbiAgICAgIFtgZGF0YS0ke2NsYXNzUHJlZml4fXNoZXBoZXJkLXN0ZXAtaWRgXTogc3RlcC5pZFxuICAgIH0pO1xuICAgICQkaW52YWxpZGF0ZSg5LCBmb2N1c2FibGVFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFbaHJlZl0sIGFyZWFbaHJlZl0sIGlucHV0Om5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSwgdGV4dGFyZWE6bm90KFtkaXNhYmxlZF0pLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCBbdGFiaW5kZXg9XFxcIjBcXFwiXVwiKSk7XG4gICAgJCRpbnZhbGlkYXRlKDgsIGZpcnN0Rm9jdXNhYmxlRWxlbWVudCA9IGZvY3VzYWJsZUVsZW1lbnRzWzBdKTtcbiAgICAkJGludmFsaWRhdGUoMTAsIGxhc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV0pO1xuICB9KTtcbiAgYWZ0ZXJVcGRhdGUoKCkgPT4ge1xuICAgIGlmIChjbGFzc2VzICE9PSBzdGVwLm9wdGlvbnMuY2xhc3Nlcykge1xuICAgICAgdXBkYXRlRHluYW1pY0NsYXNzZXMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUR5bmFtaWNDbGFzc2VzKCkge1xuICAgIHJlbW92ZUNsYXNzZXMoY2xhc3Nlcyk7XG4gICAgY2xhc3NlcyA9IHN0ZXAub3B0aW9ucy5jbGFzc2VzO1xuICAgIGFkZENsYXNzZXMoY2xhc3Nlcyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKGNsYXNzZXMpIHtcbiAgICBpZiAoaXNTdHJpbmcoY2xhc3NlcykpIHtcbiAgICAgIGNvbnN0IG9sZENsYXNzZXMgPSBnZXRDbGFzc2VzQXJyYXkoY2xhc3Nlcyk7XG5cbiAgICAgIGlmIChvbGRDbGFzc2VzLmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoLi4ub2xkQ2xhc3Nlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3NlcyhjbGFzc2VzKSB7XG4gICAgaWYgKGlzU3RyaW5nKGNsYXNzZXMpKSB7XG4gICAgICBjb25zdCBuZXdDbGFzc2VzID0gZ2V0Q2xhc3Nlc0FycmF5KGNsYXNzZXMpO1xuXG4gICAgICBpZiAobmV3Q2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLm5ld0NsYXNzZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgKiBTZXR1cCBrZXlkb3duIGV2ZW50cyB0byBhbGxvdyBjbG9zaW5nIHRoZSBtb2RhbCB3aXRoIEVTQ1xuICAqXG4gICogQm9ycm93ZWQgZnJvbSB0aGlzIGdyZWF0IHBvc3QhIGh0dHBzOi8vYml0c29mY28uZGUvYWNjZXNzaWJsZS1tb2RhbC1kaWFsb2cvXG4gICpcbiAgKiBAcHJpdmF0ZVxuICAqL1xuXG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRvdXJcbiAgICB9ID0gc3RlcDtcblxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIEtFWV9UQUI6XG4gICAgICAgIGlmIChmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gLy8gQmFja3dhcmQgdGFiXG5cblxuICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBmaXJzdEZvY3VzYWJsZUVsZW1lbnQgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGVwaGVyZC1lbGVtZW50XCIpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsYXN0Rm9jdXNhYmxlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdEZvY3VzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGZpcnN0Rm9jdXNhYmxlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEtFWV9FU0M6XG4gICAgICAgIGlmICh0b3VyLm9wdGlvbnMuZXhpdE9uRXNjKSB7XG4gICAgICAgICAgc3RlcC5jYW5jZWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIExFRlRfQVJST1c6XG4gICAgICAgIGlmICh0b3VyLm9wdGlvbnMua2V5Ym9hcmROYXZpZ2F0aW9uKSB7XG4gICAgICAgICAgdG91ci5iYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBSSUdIVF9BUlJPVzpcbiAgICAgICAgaWYgKHRvdXIub3B0aW9ucy5rZXlib2FyZE5hdmlnYXRpb24pIHtcbiAgICAgICAgICB0b3VyLm5leHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBkaXZfYmluZGluZygkJHZhbHVlKSB7XG4gICAgYmluZGluZ19jYWxsYmFja3NbJCR2YWx1ZSA/IFwidW5zaGlmdFwiIDogXCJwdXNoXCJdKCgpID0+IHtcbiAgICAgIGVsZW1lbnQgPSAkJHZhbHVlO1xuICAgICAgJCRpbnZhbGlkYXRlKDAsIGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgJCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgaWYgKFwiY2xhc3NQcmVmaXhcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMTEsIGNsYXNzUHJlZml4ID0gJCRwcm9wcy5jbGFzc1ByZWZpeCk7XG4gICAgaWYgKFwiZWxlbWVudFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgwLCBlbGVtZW50ID0gJCRwcm9wcy5lbGVtZW50KTtcbiAgICBpZiAoXCJkZXNjcmlwdGlvbklkXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDIsIGRlc2NyaXB0aW9uSWQgPSAkJHByb3BzLmRlc2NyaXB0aW9uSWQpO1xuICAgIGlmIChcImZpcnN0Rm9jdXNhYmxlRWxlbWVudFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSg4LCBmaXJzdEZvY3VzYWJsZUVsZW1lbnQgPSAkJHByb3BzLmZpcnN0Rm9jdXNhYmxlRWxlbWVudCk7XG4gICAgaWYgKFwiZm9jdXNhYmxlRWxlbWVudHNcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoOSwgZm9jdXNhYmxlRWxlbWVudHMgPSAkJHByb3BzLmZvY3VzYWJsZUVsZW1lbnRzKTtcbiAgICBpZiAoXCJsYWJlbElkXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDMsIGxhYmVsSWQgPSAkJHByb3BzLmxhYmVsSWQpO1xuICAgIGlmIChcImxhc3RGb2N1c2FibGVFbGVtZW50XCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDEwLCBsYXN0Rm9jdXNhYmxlRWxlbWVudCA9ICQkcHJvcHMubGFzdEZvY3VzYWJsZUVsZW1lbnQpO1xuICAgIGlmIChcInN0ZXBcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoNCwgc3RlcCA9ICQkcHJvcHMuc3RlcCk7XG4gICAgaWYgKFwiZGF0YVN0ZXBJZFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgxLCBkYXRhU3RlcElkID0gJCRwcm9wcy5kYXRhU3RlcElkKTtcbiAgfTtcblxuICAkJHNlbGYuJCQudXBkYXRlID0gKCkgPT4ge1xuICAgIGlmICgkJHNlbGYuJCQuZGlydHkgJlxuICAgIC8qc3RlcCovXG4gICAgMTYpIHtcbiAgICAgIHtcbiAgICAgICAgJCRpbnZhbGlkYXRlKDUsIGhhc0NhbmNlbEljb24gPSBzdGVwLm9wdGlvbnMgJiYgc3RlcC5vcHRpb25zLmNhbmNlbEljb24gJiYgc3RlcC5vcHRpb25zLmNhbmNlbEljb24uZW5hYmxlZCk7XG4gICAgICAgICQkaW52YWxpZGF0ZSg2LCBoYXNUaXRsZSA9IHN0ZXAub3B0aW9ucyAmJiBzdGVwLm9wdGlvbnMudGl0bGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gW2VsZW1lbnQsIGRhdGFTdGVwSWQsIGRlc2NyaXB0aW9uSWQsIGxhYmVsSWQsIHN0ZXAsIGhhc0NhbmNlbEljb24sIGhhc1RpdGxlLCBoYW5kbGVLZXlEb3duLCBmaXJzdEZvY3VzYWJsZUVsZW1lbnQsIGZvY3VzYWJsZUVsZW1lbnRzLCBsYXN0Rm9jdXNhYmxlRWxlbWVudCwgY2xhc3NQcmVmaXgsIGdldEVsZW1lbnQsIGRpdl9iaW5kaW5nXTtcbn1cblxuY2xhc3MgU2hlcGhlcmRfZWxlbWVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UkMSwgY3JlYXRlX2ZyYWdtZW50JDEsIHNhZmVfbm90X2VxdWFsLCB7XG4gICAgICBjbGFzc1ByZWZpeDogMTEsXG4gICAgICBlbGVtZW50OiAwLFxuICAgICAgZGVzY3JpcHRpb25JZDogMixcbiAgICAgIGZpcnN0Rm9jdXNhYmxlRWxlbWVudDogOCxcbiAgICAgIGZvY3VzYWJsZUVsZW1lbnRzOiA5LFxuICAgICAgbGFiZWxJZDogMyxcbiAgICAgIGxhc3RGb2N1c2FibGVFbGVtZW50OiAxMCxcbiAgICAgIHN0ZXA6IDQsXG4gICAgICBkYXRhU3RlcElkOiAxLFxuICAgICAgZ2V0RWxlbWVudDogMTJcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLiQkLmN0eFsxMl07XG4gIH1cblxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxudmFyIHNtb290aHNjcm9sbCA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbiAgLyogc21vb3Roc2Nyb2xsIHYwLjQuNCAtIDIwMTkgLSBEdXN0YW4gS2FzdGVuLCBKZXJlbWlhcyBNZW5pY2hlbGxpIC0gTUlUIExpY2Vuc2UgKi9cbiAgKGZ1bmN0aW9uICgpIHtcblxuICAgIGZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAgICAgLy8gYWxpYXNlc1xuICAgICAgdmFyIHcgPSB3aW5kb3c7XG4gICAgICB2YXIgZCA9IGRvY3VtZW50OyAvLyByZXR1cm4gaWYgc2Nyb2xsIGJlaGF2aW9yIGlzIHN1cHBvcnRlZCBhbmQgcG9seWZpbGwgaXMgbm90IGZvcmNlZFxuXG4gICAgICBpZiAoJ3Njcm9sbEJlaGF2aW9yJyBpbiBkLmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiB3Ll9fZm9yY2VTbW9vdGhTY3JvbGxQb2x5ZmlsbF9fICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gLy8gZ2xvYmFsc1xuXG5cbiAgICAgIHZhciBFbGVtZW50ID0gdy5IVE1MRWxlbWVudCB8fCB3LkVsZW1lbnQ7XG4gICAgICB2YXIgU0NST0xMX1RJTUUgPSA0Njg7IC8vIG9iamVjdCBnYXRoZXJpbmcgb3JpZ2luYWwgc2Nyb2xsIG1ldGhvZHNcblxuICAgICAgdmFyIG9yaWdpbmFsID0ge1xuICAgICAgICBzY3JvbGw6IHcuc2Nyb2xsIHx8IHcuc2Nyb2xsVG8sXG4gICAgICAgIHNjcm9sbEJ5OiB3LnNjcm9sbEJ5LFxuICAgICAgICBlbGVtZW50U2Nyb2xsOiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgfHwgc2Nyb2xsRWxlbWVudCxcbiAgICAgICAgc2Nyb2xsSW50b1ZpZXc6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XG4gICAgICB9OyAvLyBkZWZpbmUgdGltaW5nIG1ldGhvZFxuXG4gICAgICB2YXIgbm93ID0gdy5wZXJmb3JtYW5jZSAmJiB3LnBlcmZvcm1hbmNlLm5vdyA/IHcucGVyZm9ybWFuY2Uubm93LmJpbmQody5wZXJmb3JtYW5jZSkgOiBEYXRlLm5vdztcbiAgICAgIC8qKlxuICAgICAgICogaW5kaWNhdGVzIGlmIGEgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBtYWRlIGJ5IE1pY3Jvc29mdFxuICAgICAgICogQG1ldGhvZCBpc01pY3Jvc29mdEJyb3dzZXJcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnRcbiAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAgICovXG5cbiAgICAgIGZ1bmN0aW9uIGlzTWljcm9zb2Z0QnJvd3Nlcih1c2VyQWdlbnQpIHtcbiAgICAgICAgdmFyIHVzZXJBZ2VudFBhdHRlcm5zID0gWydNU0lFICcsICdUcmlkZW50LycsICdFZGdlLyddO1xuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCh1c2VyQWdlbnRQYXR0ZXJucy5qb2luKCd8JykpLnRlc3QodXNlckFnZW50KTtcbiAgICAgIH1cbiAgICAgIC8qXG4gICAgICAgKiBJRSBoYXMgcm91bmRpbmcgYnVnIHJvdW5kaW5nIGRvd24gY2xpZW50SGVpZ2h0IGFuZCBjbGllbnRXaWR0aCBhbmRcbiAgICAgICAqIHJvdW5kaW5nIHVwIHNjcm9sbEhlaWdodCBhbmQgc2Nyb2xsV2lkdGggY2F1c2luZyBmYWxzZSBwb3NpdGl2ZXNcbiAgICAgICAqIG9uIGhhc1Njcm9sbGFibGVTcGFjZVxuICAgICAgICovXG5cblxuICAgICAgdmFyIFJPVU5ESU5HX1RPTEVSQU5DRSA9IGlzTWljcm9zb2Z0QnJvd3Nlcih3Lm5hdmlnYXRvci51c2VyQWdlbnQpID8gMSA6IDA7XG4gICAgICAvKipcbiAgICAgICAqIGNoYW5nZXMgc2Nyb2xsIHBvc2l0aW9uIGluc2lkZSBhbiBlbGVtZW50XG4gICAgICAgKiBAbWV0aG9kIHNjcm9sbEVsZW1lbnRcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgICAqL1xuXG4gICAgICBmdW5jdGlvbiBzY3JvbGxFbGVtZW50KHgsIHkpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxMZWZ0ID0geDtcbiAgICAgICAgdGhpcy5zY3JvbGxUb3AgPSB5O1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiByZXR1cm5zIHJlc3VsdCBvZiBhcHBseWluZyBlYXNlIG1hdGggZnVuY3Rpb24gdG8gYSBudW1iZXJcbiAgICAgICAqIEBtZXRob2QgZWFzZVxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGtcbiAgICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICAgKi9cblxuXG4gICAgICBmdW5jdGlvbiBlYXNlKGspIHtcbiAgICAgICAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogaW5kaWNhdGVzIGlmIGEgc21vb3RoIGJlaGF2aW9yIHNob3VsZCBiZSBhcHBsaWVkXG4gICAgICAgKiBAbWV0aG9kIHNob3VsZEJhaWxPdXRcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfE9iamVjdH0gZmlyc3RBcmdcbiAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAgICovXG5cblxuICAgICAgZnVuY3Rpb24gc2hvdWxkQmFpbE91dChmaXJzdEFyZykge1xuICAgICAgICBpZiAoZmlyc3RBcmcgPT09IG51bGwgfHwgdHlwZW9mIGZpcnN0QXJnICE9PSAnb2JqZWN0JyB8fCBmaXJzdEFyZy5iZWhhdmlvciA9PT0gdW5kZWZpbmVkIHx8IGZpcnN0QXJnLmJlaGF2aW9yID09PSAnYXV0bycgfHwgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdpbnN0YW50Jykge1xuICAgICAgICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBvYmplY3QvbnVsbFxuICAgICAgICAgIC8vIG9yIGJlaGF2aW9yIGlzIGF1dG8sIGluc3RhbnQgb3IgdW5kZWZpbmVkXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGZpcnN0QXJnID09PSAnb2JqZWN0JyAmJiBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ3Ntb290aCcpIHtcbiAgICAgICAgICAvLyBmaXJzdCBhcmd1bWVudCBpcyBhbiBvYmplY3QgYW5kIGJlaGF2aW9yIGlzIHNtb290aFxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSAvLyB0aHJvdyBlcnJvciB3aGVuIGJlaGF2aW9yIGlzIG5vdCBzdXBwb3J0ZWRcblxuXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2JlaGF2aW9yIG1lbWJlciBvZiBTY3JvbGxPcHRpb25zICcgKyBmaXJzdEFyZy5iZWhhdmlvciArICcgaXMgbm90IGEgdmFsaWQgdmFsdWUgZm9yIGVudW1lcmF0aW9uIFNjcm9sbEJlaGF2aW9yLicpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgc2Nyb2xsYWJsZSBzcGFjZSBpbiB0aGUgcHJvdmlkZWQgYXhpc1xuICAgICAgICogQG1ldGhvZCBoYXNTY3JvbGxhYmxlU3BhY2VcbiAgICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgICAqL1xuXG5cbiAgICAgIGZ1bmN0aW9uIGhhc1Njcm9sbGFibGVTcGFjZShlbCwgYXhpcykge1xuICAgICAgICBpZiAoYXhpcyA9PT0gJ1knKSB7XG4gICAgICAgICAgcmV0dXJuIGVsLmNsaWVudEhlaWdodCArIFJPVU5ESU5HX1RPTEVSQU5DRSA8IGVsLnNjcm9sbEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChheGlzID09PSAnWCcpIHtcbiAgICAgICAgICByZXR1cm4gZWwuY2xpZW50V2lkdGggKyBST1VORElOR19UT0xFUkFOQ0UgPCBlbC5zY3JvbGxXaWR0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgYSBzY3JvbGxhYmxlIG92ZXJmbG93IHByb3BlcnR5IGluIHRoZSBheGlzXG4gICAgICAgKiBAbWV0aG9kIGNhbk92ZXJmbG93XG4gICAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICAgKi9cblxuXG4gICAgICBmdW5jdGlvbiBjYW5PdmVyZmxvdyhlbCwgYXhpcykge1xuICAgICAgICB2YXIgb3ZlcmZsb3dWYWx1ZSA9IHcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbClbJ292ZXJmbG93JyArIGF4aXNdO1xuICAgICAgICByZXR1cm4gb3ZlcmZsb3dWYWx1ZSA9PT0gJ2F1dG8nIHx8IG92ZXJmbG93VmFsdWUgPT09ICdzY3JvbGwnO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBjYW4gYmUgc2Nyb2xsZWQgaW4gZWl0aGVyIGF4aXNcbiAgICAgICAqIEBtZXRob2QgaXNTY3JvbGxhYmxlXG4gICAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICAgKi9cblxuXG4gICAgICBmdW5jdGlvbiBpc1Njcm9sbGFibGUoZWwpIHtcbiAgICAgICAgdmFyIGlzU2Nyb2xsYWJsZVkgPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdZJykgJiYgY2FuT3ZlcmZsb3coZWwsICdZJyk7XG4gICAgICAgIHZhciBpc1Njcm9sbGFibGVYID0gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCAnWCcpICYmIGNhbk92ZXJmbG93KGVsLCAnWCcpO1xuICAgICAgICByZXR1cm4gaXNTY3JvbGxhYmxlWSB8fCBpc1Njcm9sbGFibGVYO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBmaW5kcyBzY3JvbGxhYmxlIHBhcmVudCBvZiBhbiBlbGVtZW50XG4gICAgICAgKiBAbWV0aG9kIGZpbmRTY3JvbGxhYmxlUGFyZW50XG4gICAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICAgKiBAcmV0dXJucyB7Tm9kZX0gZWxcbiAgICAgICAqL1xuXG5cbiAgICAgIGZ1bmN0aW9uIGZpbmRTY3JvbGxhYmxlUGFyZW50KGVsKSB7XG4gICAgICAgIHdoaWxlIChlbCAhPT0gZC5ib2R5ICYmIGlzU2Nyb2xsYWJsZShlbCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgZWwgPSBlbC5wYXJlbnROb2RlIHx8IGVsLmhvc3Q7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIHNlbGYgaW52b2tlZCBmdW5jdGlvbiB0aGF0LCBnaXZlbiBhIGNvbnRleHQsIHN0ZXBzIHRocm91Z2ggc2Nyb2xsaW5nXG4gICAgICAgKiBAbWV0aG9kIHN0ZXBcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAgICovXG5cblxuICAgICAgZnVuY3Rpb24gc3RlcChjb250ZXh0KSB7XG4gICAgICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgdmFyIGN1cnJlbnRYO1xuICAgICAgICB2YXIgY3VycmVudFk7XG4gICAgICAgIHZhciBlbGFwc2VkID0gKHRpbWUgLSBjb250ZXh0LnN0YXJ0VGltZSkgLyBTQ1JPTExfVElNRTsgLy8gYXZvaWQgZWxhcHNlZCB0aW1lcyBoaWdoZXIgdGhhbiBvbmVcblxuICAgICAgICBlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDsgLy8gYXBwbHkgZWFzaW5nIHRvIGVsYXBzZWQgdGltZVxuXG4gICAgICAgIHZhbHVlID0gZWFzZShlbGFwc2VkKTtcbiAgICAgICAgY3VycmVudFggPSBjb250ZXh0LnN0YXJ0WCArIChjb250ZXh0LnggLSBjb250ZXh0LnN0YXJ0WCkgKiB2YWx1ZTtcbiAgICAgICAgY3VycmVudFkgPSBjb250ZXh0LnN0YXJ0WSArIChjb250ZXh0LnkgLSBjb250ZXh0LnN0YXJ0WSkgKiB2YWx1ZTtcbiAgICAgICAgY29udGV4dC5tZXRob2QuY2FsbChjb250ZXh0LnNjcm9sbGFibGUsIGN1cnJlbnRYLCBjdXJyZW50WSk7IC8vIHNjcm9sbCBtb3JlIGlmIHdlIGhhdmUgbm90IHJlYWNoZWQgb3VyIGRlc3RpbmF0aW9uXG5cbiAgICAgICAgaWYgKGN1cnJlbnRYICE9PSBjb250ZXh0LnggfHwgY3VycmVudFkgIT09IGNvbnRleHQueSkge1xuICAgICAgICAgIHcucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXAuYmluZCh3LCBjb250ZXh0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogc2Nyb2xscyB3aW5kb3cgb3IgZWxlbWVudCB3aXRoIGEgc21vb3RoIGJlaGF2aW9yXG4gICAgICAgKiBAbWV0aG9kIHNtb290aFNjcm9sbFxuICAgICAgICogQHBhcmFtIHtPYmplY3R8Tm9kZX0gZWxcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgICAqL1xuXG5cbiAgICAgIGZ1bmN0aW9uIHNtb290aFNjcm9sbChlbCwgeCwgeSkge1xuICAgICAgICB2YXIgc2Nyb2xsYWJsZTtcbiAgICAgICAgdmFyIHN0YXJ0WDtcbiAgICAgICAgdmFyIHN0YXJ0WTtcbiAgICAgICAgdmFyIG1ldGhvZDtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IG5vdygpOyAvLyBkZWZpbmUgc2Nyb2xsIGNvbnRleHRcblxuICAgICAgICBpZiAoZWwgPT09IGQuYm9keSkge1xuICAgICAgICAgIHNjcm9sbGFibGUgPSB3O1xuICAgICAgICAgIHN0YXJ0WCA9IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICAgIHN0YXJ0WSA9IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgIG1ldGhvZCA9IG9yaWdpbmFsLnNjcm9sbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY3JvbGxhYmxlID0gZWw7XG4gICAgICAgICAgc3RhcnRYID0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgICBzdGFydFkgPSBlbC5zY3JvbGxUb3A7XG4gICAgICAgICAgbWV0aG9kID0gc2Nyb2xsRWxlbWVudDtcbiAgICAgICAgfSAvLyBzY3JvbGwgbG9vcGluZyBvdmVyIGEgZnJhbWVcblxuXG4gICAgICAgIHN0ZXAoe1xuICAgICAgICAgIHNjcm9sbGFibGU6IHNjcm9sbGFibGUsXG4gICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWUsXG4gICAgICAgICAgc3RhcnRYOiBzdGFydFgsXG4gICAgICAgICAgc3RhcnRZOiBzdGFydFksXG4gICAgICAgICAgeDogeCxcbiAgICAgICAgICB5OiB5XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBPUklHSU5BTCBNRVRIT0RTIE9WRVJSSURFU1xuICAgICAgLy8gdy5zY3JvbGwgYW5kIHcuc2Nyb2xsVG9cblxuXG4gICAgICB3LnNjcm9sbCA9IHcuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG5cblxuICAgICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgICAgb3JpZ2luYWwuc2Nyb2xsLmNhbGwodywgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXS5sZWZ0IDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyBhcmd1bWVudHNbMF0gOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCwgLy8gdXNlIHRvcCBwcm9wLCBzZWNvbmQgYXJndW1lbnQgaWYgcHJlc2VudCBvciBmYWxsYmFjayB0byBzY3JvbGxZXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdLnRvcCA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXQpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG5cblxuICAgICAgICBzbW9vdGhTY3JvbGwuY2FsbCh3LCBkLmJvZHksIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1swXS5sZWZ0IDogdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQsIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZCA/IH5+YXJndW1lbnRzWzBdLnRvcCA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0KTtcbiAgICAgIH07IC8vIHcuc2Nyb2xsQnlcblxuXG4gICAgICB3LnNjcm9sbEJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuXG5cbiAgICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICAgIG9yaWdpbmFsLnNjcm9sbEJ5LmNhbGwodywgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXS5sZWZ0IDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyBhcmd1bWVudHNbMF0gOiAwLCBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0udG9wIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAwKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuXG5cbiAgICAgICAgc21vb3RoU2Nyb2xsLmNhbGwodywgZC5ib2R5LCB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgKHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0KSwgfn5hcmd1bWVudHNbMF0udG9wICsgKHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0KSk7XG4gICAgICB9OyAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgYW5kIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbFRvXG5cblxuICAgICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsID0gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG5cblxuICAgICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gaWYgb25lIG51bWJlciBpcyBwYXNzZWQsIHRocm93IGVycm9yIHRvIG1hdGNoIEZpcmVmb3ggaW1wbGVtZW50YXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ251bWJlcicgJiYgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignVmFsdWUgY291bGQgbm90IGJlIGNvbnZlcnRlZCcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG9yaWdpbmFsLmVsZW1lbnRTY3JvbGwuY2FsbCh0aGlzLCAvLyB1c2UgbGVmdCBwcm9wLCBmaXJzdCBudW1iZXIgYXJndW1lbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsTGVmdFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1swXS5sZWZ0IDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyB+fmFyZ3VtZW50c1swXSA6IHRoaXMuc2Nyb2xsTGVmdCwgLy8gdXNlIHRvcCBwcm9wLCBzZWNvbmQgYXJndW1lbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsVG9wXG4gICAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkID8gfn5hcmd1bWVudHNbMF0udG9wIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1sxXSA6IHRoaXMuc2Nyb2xsVG9wKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVmdCA9IGFyZ3VtZW50c1swXS5sZWZ0O1xuICAgICAgICB2YXIgdG9wID0gYXJndW1lbnRzWzBdLnRvcDsgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuXG4gICAgICAgIHNtb290aFNjcm9sbC5jYWxsKHRoaXMsIHRoaXMsIHR5cGVvZiBsZWZ0ID09PSAndW5kZWZpbmVkJyA/IHRoaXMuc2Nyb2xsTGVmdCA6IH5+bGVmdCwgdHlwZW9mIHRvcCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjcm9sbFRvcCA6IH5+dG9wKTtcbiAgICAgIH07IC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEJ5XG5cblxuICAgICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG5cblxuICAgICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKHRoaXMsIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgdGhpcy5zY3JvbGxMZWZ0IDogfn5hcmd1bWVudHNbMF0gKyB0aGlzLnNjcm9sbExlZnQsIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZCA/IH5+YXJndW1lbnRzWzBdLnRvcCArIHRoaXMuc2Nyb2xsVG9wIDogfn5hcmd1bWVudHNbMV0gKyB0aGlzLnNjcm9sbFRvcCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY3JvbGwoe1xuICAgICAgICAgIGxlZnQ6IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgICAgdG9wOiB+fmFyZ3VtZW50c1swXS50b3AgKyB0aGlzLnNjcm9sbFRvcCxcbiAgICAgICAgICBiZWhhdmlvcjogYXJndW1lbnRzWzBdLmJlaGF2aW9yXG4gICAgICAgIH0pO1xuICAgICAgfTsgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXdcblxuXG4gICAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgICAgb3JpZ2luYWwuc2Nyb2xsSW50b1ZpZXcuY2FsbCh0aGlzLCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG5cblxuICAgICAgICB2YXIgc2Nyb2xsYWJsZVBhcmVudCA9IGZpbmRTY3JvbGxhYmxlUGFyZW50KHRoaXMpO1xuICAgICAgICB2YXIgcGFyZW50UmVjdHMgPSBzY3JvbGxhYmxlUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgY2xpZW50UmVjdHMgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmIChzY3JvbGxhYmxlUGFyZW50ICE9PSBkLmJvZHkpIHtcbiAgICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbnNpZGUgcGFyZW50XG4gICAgICAgICAgc21vb3RoU2Nyb2xsLmNhbGwodGhpcywgc2Nyb2xsYWJsZVBhcmVudCwgc2Nyb2xsYWJsZVBhcmVudC5zY3JvbGxMZWZ0ICsgY2xpZW50UmVjdHMubGVmdCAtIHBhcmVudFJlY3RzLmxlZnQsIHNjcm9sbGFibGVQYXJlbnQuc2Nyb2xsVG9wICsgY2xpZW50UmVjdHMudG9wIC0gcGFyZW50UmVjdHMudG9wKTsgLy8gcmV2ZWFsIHBhcmVudCBpbiB2aWV3cG9ydCB1bmxlc3MgaXMgZml4ZWRcblxuICAgICAgICAgIGlmICh3LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsYWJsZVBhcmVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIHcuc2Nyb2xsQnkoe1xuICAgICAgICAgICAgICBsZWZ0OiBwYXJlbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgICAgICB0b3A6IHBhcmVudFJlY3RzLnRvcCxcbiAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gcmV2ZWFsIGVsZW1lbnQgaW4gdmlld3BvcnRcbiAgICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICAgIGxlZnQ6IGNsaWVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgICB0b3A6IGNsaWVudFJlY3RzLnRvcCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIHtcbiAgICAgIC8vIGNvbW1vbmpzXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgcG9seWZpbGw6IHBvbHlmaWxsXG4gICAgICB9O1xuICAgIH1cbiAgfSkoKTtcbn0pO1xuc21vb3Roc2Nyb2xsLnBvbHlmaWxsO1xuXG5zbW9vdGhzY3JvbGwucG9seWZpbGwoKTtcbi8qKlxuICogQSBjbGFzcyByZXByZXNlbnRpbmcgc3RlcHMgdG8gYmUgYWRkZWQgdG8gYSB0b3VyLlxuICogQGV4dGVuZHMge0V2ZW50ZWR9XG4gKi9cblxuY2xhc3MgU3RlcCBleHRlbmRzIEV2ZW50ZWQge1xuICAvKipcbiAgICogQ3JlYXRlIGEgc3RlcFxuICAgKiBAcGFyYW0ge1RvdXJ9IHRvdXIgVGhlIHRvdXIgZm9yIHRoZSBzdGVwXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIGZvciB0aGUgc3RlcFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuYXJyb3cgV2hldGhlciB0byBkaXNwbGF5IHRoZSBhcnJvdyBmb3IgdGhlIHRvb2x0aXAgb3Igbm90LiBEZWZhdWx0cyB0byBgdHJ1ZWAuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLmF0dGFjaFRvIFRoZSBlbGVtZW50IHRoZSBzdGVwIHNob3VsZCBiZSBhdHRhY2hlZCB0byBvbiB0aGUgcGFnZS5cbiAgICogQW4gb2JqZWN0IHdpdGggcHJvcGVydGllcyBgZWxlbWVudGAgYW5kIGBvbmAuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IHN0ZXAgPSBuZXcgU3RlcCh0b3VyLCB7XG4gICAqICAgYXR0YWNoVG86IHsgZWxlbWVudDogJy5zb21lIC5zZWxlY3Rvci1wYXRoJywgb246ICdsZWZ0JyB9LFxuICAgKiAgIC4uLm1vcmVPcHRpb25zXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogSWYgeW91IGRvbuKAmXQgc3BlY2lmeSBhbiBhdHRhY2hUbyB0aGUgZWxlbWVudCB3aWxsIGFwcGVhciBpbiB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4uXG4gICAqIElmIHlvdSBvbWl0IHRoZSBgb25gIHBvcnRpb24gb2YgYGF0dGFjaFRvYCwgdGhlIGVsZW1lbnQgd2lsbCBzdGlsbCBiZSBoaWdobGlnaHRlZCwgYnV0IHRoZSB0b29sdGlwIHdpbGwgYXBwZWFyXG4gICAqIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbiwgd2l0aG91dCBhbiBhcnJvdyBwb2ludGluZyB0byB0aGUgdGFyZ2V0LlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fHN0cmluZ30gb3B0aW9ucy5hdHRhY2hUby5lbGVtZW50IEFuIGVsZW1lbnQgc2VsZWN0b3Igc3RyaW5nIG9yIGEgRE9NIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmF0dGFjaFRvLm9uIFRoZSBvcHRpb25hbCBkaXJlY3Rpb24gdG8gcGxhY2UgdGhlIFBvcHBlciB0b29sdGlwIHJlbGF0aXZlIHRvIHRoZSBlbGVtZW50LlxuICAgKiAgIC0gUG9zc2libGUgc3RyaW5nIHZhbHVlczogJ2F1dG8nLCAnYXV0by1zdGFydCcsICdhdXRvLWVuZCcsICd0b3AnLCAndG9wLXN0YXJ0JywgJ3RvcC1lbmQnLCAnYm90dG9tJywgJ2JvdHRvbS1zdGFydCcsICdib3R0b20tZW5kJywgJ3JpZ2h0JywgJ3JpZ2h0LXN0YXJ0JywgJ3JpZ2h0LWVuZCcsICdsZWZ0JywgJ2xlZnQtc3RhcnQnLCAnbGVmdC1lbmQnXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLmFkdmFuY2VPbiBBbiBhY3Rpb24gb24gdGhlIHBhZ2Ugd2hpY2ggc2hvdWxkIGFkdmFuY2Ugc2hlcGhlcmQgdG8gdGhlIG5leHQgc3RlcC5cbiAgICogSXQgc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIGEgc3RyaW5nIGBzZWxlY3RvcmAgYW5kIGFuIGBldmVudGAgbmFtZVxuICAgKiBgYGBqc1xuICAgKiBjb25zdCBzdGVwID0gbmV3IFN0ZXAodG91ciwge1xuICAgKiAgIGFkdmFuY2VPbjogeyBzZWxlY3RvcjogJy5zb21lIC5zZWxlY3Rvci1wYXRoJywgZXZlbnQ6ICdjbGljaycgfSxcbiAgICogICAuLi5tb3JlT3B0aW9uc1xuICAgKiB9KTtcbiAgICogYGBgXG4gICAqIGBldmVudGAgZG9lc27igJl0IGhhdmUgdG8gYmUgYW4gZXZlbnQgaW5zaWRlIHRoZSB0b3VyLCBpdCBjYW4gYmUgYW55IGV2ZW50IGZpcmVkIG9uIGFueSBlbGVtZW50IG9uIHRoZSBwYWdlLlxuICAgKiBZb3UgY2FuIGFsc28gYWx3YXlzIG1hbnVhbGx5IGFkdmFuY2UgdGhlIFRvdXIgYnkgY2FsbGluZyBgbXlUb3VyLm5leHQoKWAuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuYmVmb3JlU2hvd1Byb21pc2UgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwcm9taXNlLlxuICAgKiBXaGVuIHRoZSBwcm9taXNlIHJlc29sdmVzLCB0aGUgcmVzdCBvZiB0aGUgYHNob3dgIGNvZGUgZm9yIHRoZSBzdGVwIHdpbGwgZXhlY3V0ZS5cbiAgICogQHBhcmFtIHtPYmplY3RbXX0gb3B0aW9ucy5idXR0b25zIEFuIGFycmF5IG9mIGJ1dHRvbnMgdG8gYWRkIHRvIHRoZSBzdGVwLiBUaGVzZSB3aWxsIGJlIHJlbmRlcmVkIGluIGFcbiAgICogZm9vdGVyIGJlbG93IHRoZSBtYWluIGJvZHkgdGV4dC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5idXR0b25zLmJ1dHRvbi5hY3Rpb24gQSBmdW5jdGlvbiBleGVjdXRlZCB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZCBvbi5cbiAgICogSXQgaXMgYXV0b21hdGljYWxseSBib3VuZCB0byB0aGUgYHRvdXJgIHRoZSBzdGVwIGlzIGFzc29jaWF0ZWQgd2l0aCwgc28gdGhpbmdzIGxpa2UgYHRoaXMubmV4dGAgd2lsbFxuICAgKiB3b3JrIGluc2lkZSB0aGUgYWN0aW9uLlxuICAgKiBZb3UgY2FuIHVzZSBhY3Rpb24gdG8gc2tpcCBzdGVwcyBvciBuYXZpZ2F0ZSB0byBzcGVjaWZpYyBzdGVwcywgd2l0aCBzb21ldGhpbmcgbGlrZTpcbiAgICogYGBganNcbiAgICogYWN0aW9uKCkge1xuICAgKiAgIHJldHVybiB0aGlzLnNob3coJ3NvbWVfc3RlcF9uYW1lJyk7XG4gICAqIH1cbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmJ1dHRvbnMuYnV0dG9uLmNsYXNzZXMgRXh0cmEgY2xhc3NlcyB0byBhcHBseSB0byB0aGUgYDxhPmBcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmJ1dHRvbnMuYnV0dG9uLmRpc2FibGVkIFNob3VsZCB0aGUgYnV0dG9uIGJlIGRpc2FibGVkP1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5idXR0b25zLmJ1dHRvbi5sYWJlbCBUaGUgYXJpYS1sYWJlbCB0ZXh0IG9mIHRoZSBidXR0b25cbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmJ1dHRvbnMuYnV0dG9uLnNlY29uZGFyeSBJZiB0cnVlLCBhIHNoZXBoZXJkLWJ1dHRvbi1zZWNvbmRhcnkgY2xhc3MgaXMgYXBwbGllZCB0byB0aGUgYnV0dG9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmJ1dHRvbnMuYnV0dG9uLnRleHQgVGhlIEhUTUwgdGV4dCBvZiB0aGUgYnV0dG9uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5jYW5DbGlja1RhcmdldCBBIGJvb2xlYW4sIHRoYXQgd2hlbiBzZXQgdG8gZmFsc2UsIHdpbGwgc2V0IGBwb2ludGVyLWV2ZW50czogbm9uZWAgb24gdGhlIHRhcmdldFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5jYW5jZWxJY29uIE9wdGlvbnMgZm9yIHRoZSBjYW5jZWwgaWNvblxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuY2FuY2VsSWNvbi5lbmFibGVkIFNob3VsZCBhIGNhbmNlbCDigJzinJXigJ0gYmUgc2hvd24gaW4gdGhlIGhlYWRlciBvZiB0aGUgc3RlcD9cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2FuY2VsSWNvbi5sYWJlbCBUaGUgbGFiZWwgdG8gYWRkIGZvciBgYXJpYS1sYWJlbGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuY2xhc3NlcyBBIHN0cmluZyBvZiBleHRyYSBjbGFzc2VzIHRvIGFkZCB0byB0aGUgc3RlcCdzIGNvbnRlbnQgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaGlnaGxpZ2h0Q2xhc3MgQW4gZXh0cmEgY2xhc3MgdG8gYXBwbHkgdG8gdGhlIGBhdHRhY2hUb2AgZWxlbWVudCB3aGVuIGl0IGlzXG4gICAqIGhpZ2hsaWdodGVkICh0aGF0IGlzLCB3aGVuIGl0cyBzdGVwIGlzIGFjdGl2ZSkuIFlvdSBjYW4gdGhlbiB0YXJnZXQgdGhhdCBzZWxlY3RvciBpbiB5b3VyIENTUy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuaWQgVGhlIHN0cmluZyB0byB1c2UgYXMgdGhlIGBpZGAgZm9yIHRoZSBzdGVwLlxuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5tb2RhbE92ZXJsYXlPcGVuaW5nUGFkZGluZyBBbiBhbW91bnQgb2YgcGFkZGluZyB0byBhZGQgYXJvdW5kIHRoZSBtb2RhbCBvdmVybGF5IG9wZW5pbmdcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubW9kYWxPdmVybGF5T3BlbmluZ1JhZGl1cyBBbiBhbW91bnQgb2YgYm9yZGVyIHJhZGl1cyB0byBhZGQgYXJvdW5kIHRoZSBtb2RhbCBvdmVybGF5IG9wZW5pbmdcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMucG9wcGVyT3B0aW9ucyBFeHRyYSBvcHRpb25zIHRvIHBhc3MgdG8gUG9wcGVyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbnxPYmplY3R9IG9wdGlvbnMuc2Nyb2xsVG8gU2hvdWxkIHRoZSBlbGVtZW50IGJlIHNjcm9sbGVkIHRvIHdoZW4gdGhpcyBzdGVwIGlzIHNob3duPyBJZiB0cnVlLCB1c2VzIHRoZSBkZWZhdWx0IGBzY3JvbGxJbnRvVmlld2AsXG4gICAqIGlmIGFuIG9iamVjdCwgcGFzc2VzIHRoYXQgb2JqZWN0IGFzIHRoZSBwYXJhbXMgdG8gYHNjcm9sbEludG9WaWV3YCBpLmUuIGB7YmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcid9YFxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnNjcm9sbFRvSGFuZGxlciBBIGZ1bmN0aW9uIHRoYXQgbGV0cyB5b3Ugb3ZlcnJpZGUgdGhlIGRlZmF1bHQgc2Nyb2xsVG8gYmVoYXZpb3IgYW5kXG4gICAqIGRlZmluZSBhIGN1c3RvbSBhY3Rpb24gdG8gZG8gdGhlIHNjcm9sbGluZywgYW5kIHBvc3NpYmx5IG90aGVyIGxvZ2ljLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLnNob3dPbiBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gaXQgcmV0dXJucyBgdHJ1ZWAsIHdpbGwgc2hvdyB0aGUgc3RlcC5cbiAgICogSWYgaXQgcmV0dXJucyBmYWxzZSwgdGhlIHN0ZXAgd2lsbCBiZSBza2lwcGVkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50ZXh0IFRoZSB0ZXh0IGluIHRoZSBib2R5IG9mIHRoZSBzdGVwLiBJdCBjYW4gYmUgb25lIG9mIHRocmVlIHR5cGVzOlxuICAgKiBgYGBcbiAgICogLSBIVE1MIHN0cmluZ1xuICAgKiAtIGBIVE1MRWxlbWVudGAgb2JqZWN0XG4gICAqIC0gYEZ1bmN0aW9uYCB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSBzdGVwIGlzIGJ1aWx0LiBJdCBtdXN0IHJldHVybiBvbmUgdGhlIHR3byBvcHRpb25zIGFib3ZlLlxuICAgKiBgYGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudGl0bGUgVGhlIHN0ZXAncyB0aXRsZS4gSXQgYmVjb21lcyBhbiBgaDNgIGF0IHRoZSB0b3Agb2YgdGhlIHN0ZXAuIEl0IGNhbiBiZSBvbmUgb2YgdHdvIHR5cGVzOlxuICAgKiBgYGBcbiAgICogLSBIVE1MIHN0cmluZ1xuICAgKiAtIGBGdW5jdGlvbmAgdG8gYmUgZXhlY3V0ZWQgd2hlbiB0aGUgc3RlcCBpcyBidWlsdC4gSXQgbXVzdCByZXR1cm4gSFRNTCBzdHJpbmcuXG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy53aGVuIFlvdSBjYW4gZGVmaW5lIGBzaG93YCwgYGhpZGVgLCBldGMgZXZlbnRzIGluc2lkZSBgd2hlbmAuIEZvciBleGFtcGxlOlxuICAgKiBgYGBqc1xuICAgKiB3aGVuOiB7XG4gICAqICAgc2hvdzogZnVuY3Rpb24oKSB7XG4gICAqICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAqICAgfVxuICAgKiB9XG4gICAqIGBgYFxuICAgKiBAcmV0dXJuIHtTdGVwfSBUaGUgbmV3bHkgY3JlYXRlZCBTdGVwIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0b3VyLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlcih0b3VyLCBvcHRpb25zKTtcbiAgICB0aGlzLnRvdXIgPSB0b3VyO1xuICAgIHRoaXMuY2xhc3NQcmVmaXggPSB0aGlzLnRvdXIub3B0aW9ucyA/IG5vcm1hbGl6ZVByZWZpeCh0aGlzLnRvdXIub3B0aW9ucy5jbGFzc1ByZWZpeCkgOiAnJztcbiAgICB0aGlzLnN0eWxlcyA9IHRvdXIuc3R5bGVzO1xuICAgIGF1dG9CaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5fc2V0T3B0aW9ucyhvcHRpb25zKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBDYW5jZWwgdGhlIHRvdXJcbiAgICogVHJpZ2dlcnMgdGhlIGBjYW5jZWxgIGV2ZW50XG4gICAqL1xuXG5cbiAgY2FuY2VsKCkge1xuICAgIHRoaXMudG91ci5jYW5jZWwoKTtcbiAgICB0aGlzLnRyaWdnZXIoJ2NhbmNlbCcpO1xuICB9XG4gIC8qKlxuICAgKiBDb21wbGV0ZSB0aGUgdG91clxuICAgKiBUcmlnZ2VycyB0aGUgYGNvbXBsZXRlYCBldmVudFxuICAgKi9cblxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHRoaXMudG91ci5jb21wbGV0ZSgpO1xuICAgIHRoaXMudHJpZ2dlcignY29tcGxldGUnKTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBzdGVwLCBkZWxldGUgdGhlIHN0ZXAncyBlbGVtZW50LCBhbmQgZGVzdHJveSB0aGUgUG9wcGVyIGluc3RhbmNlIGZvciB0aGUgc3RlcC5cbiAgICogVHJpZ2dlcnMgYGRlc3Ryb3lgIGV2ZW50XG4gICAqL1xuXG5cbiAgZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy50b29sdGlwKSB7XG4gICAgICB0aGlzLnRvb2x0aXAuZGVzdHJveSgpO1xuICAgICAgdGhpcy50b29sdGlwID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudCQxKHRoaXMuZWwpICYmIHRoaXMuZWwucGFyZW50Tm9kZSkge1xuICAgICAgdGhpcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xuICAgICAgdGhpcy5lbCA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlU3RlcFRhcmdldE9uSGlkZSgpO1xuXG4gICAgdGhpcy50cmlnZ2VyKCdkZXN0cm95Jyk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRvdXIgZm9yIHRoZSBzdGVwXG4gICAqIEByZXR1cm4ge1RvdXJ9IFRoZSB0b3VyIGluc3RhbmNlXG4gICAqL1xuXG5cbiAgZ2V0VG91cigpIHtcbiAgICByZXR1cm4gdGhpcy50b3VyO1xuICB9XG4gIC8qKlxuICAgKiBIaWRlIHRoZSBzdGVwXG4gICAqL1xuXG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnRvdXIubW9kYWwuaGlkZSgpO1xuICAgIHRoaXMudHJpZ2dlcignYmVmb3JlLWhpZGUnKTtcblxuICAgIGlmICh0aGlzLmVsKSB7XG4gICAgICB0aGlzLmVsLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlU3RlcFRhcmdldE9uSGlkZSgpO1xuXG4gICAgdGhpcy50cmlnZ2VyKCdoaWRlJyk7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgc3RlcCBzaG91bGQgYmUgY2VudGVyZWQgb3Igbm90XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHN0ZXAgaXMgY2VudGVyZWRcbiAgICovXG5cblxuICBpc0NlbnRlcmVkKCkge1xuICAgIGNvbnN0IGF0dGFjaFRvT3B0aW9ucyA9IHBhcnNlQXR0YWNoVG8odGhpcyk7XG4gICAgcmV0dXJuICFhdHRhY2hUb09wdGlvbnMuZWxlbWVudCB8fCAhYXR0YWNoVG9PcHRpb25zLm9uO1xuICB9XG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgc3RlcCBpcyBvcGVuIGFuZCB2aXNpYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHN0ZXAgaXMgb3BlbiBhbmQgdmlzaWJsZVxuICAgKi9cblxuXG4gIGlzT3BlbigpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLmVsICYmICF0aGlzLmVsLmhpZGRlbik7XG4gIH1cbiAgLyoqXG4gICAqIFdyYXBzIGBfc2hvd2AgYW5kIGVuc3VyZXMgYGJlZm9yZVNob3dQcm9taXNlYCByZXNvbHZlcyBiZWZvcmUgY2FsbGluZyBzaG93XG4gICAqIEByZXR1cm4geyp8UHJvbWlzZX1cbiAgICovXG5cblxuICBzaG93KCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMub3B0aW9ucy5iZWZvcmVTaG93UHJvbWlzZSkpIHtcbiAgICAgIGNvbnN0IGJlZm9yZVNob3dQcm9taXNlID0gdGhpcy5vcHRpb25zLmJlZm9yZVNob3dQcm9taXNlKCk7XG5cbiAgICAgIGlmICghaXNVbmRlZmluZWQoYmVmb3JlU2hvd1Byb21pc2UpKSB7XG4gICAgICAgIHJldHVybiBiZWZvcmVTaG93UHJvbWlzZS50aGVuKCgpID0+IHRoaXMuX3Nob3coKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc2hvdygpO1xuICB9XG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBvcHRpb25zIG9mIHRoZSBzdGVwLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIHN0ZXBcbiAgICovXG5cblxuICB1cGRhdGVTdGVwT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMuc2hlcGhlcmRFbGVtZW50Q29tcG9uZW50KSB7XG4gICAgICB0aGlzLnNoZXBoZXJkRWxlbWVudENvbXBvbmVudC4kc2V0KHtcbiAgICAgICAgc3RlcDogdGhpc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IGZvciB0aGUgc3RlcFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudHxudWxsfHVuZGVmaW5lZH0gVGhlIGVsZW1lbnQgaW5zdGFuY2UuIHVuZGVmaW5lZCBpZiBpdCBoYXMgbmV2ZXIgYmVlbiBzaG93biwgbnVsbCBpZiBpdCBoYXMgYmVlbiBkZXN0cm95ZWRcbiAgICovXG5cblxuICBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0YXJnZXQgZm9yIHRoZSBzdGVwXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fG51bGx8dW5kZWZpbmVkfSBUaGUgZWxlbWVudCBpbnN0YW5jZS4gdW5kZWZpbmVkIGlmIGl0IGhhcyBuZXZlciBiZWVuIHNob3duLCBudWxsIGlmIHF1ZXJ5IHN0cmluZyBoYXMgbm90IGJlZW4gZm91bmRcbiAgICovXG5cblxuICBnZXRUYXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0O1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIFNoZXBoZXJkIGVsZW1lbnQgZm9yIHN0ZXAgYmFzZWQgb24gb3B0aW9uc1xuICAgKlxuICAgKiBAcmV0dXJuIHtFbGVtZW50fSBUaGUgRE9NIGVsZW1lbnQgZm9yIHRoZSBzdGVwIHRvb2x0aXBcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfY3JlYXRlVG9vbHRpcENvbnRlbnQoKSB7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JZCA9IGAke3RoaXMuaWR9LWRlc2NyaXB0aW9uYDtcbiAgICBjb25zdCBsYWJlbElkID0gYCR7dGhpcy5pZH0tbGFiZWxgO1xuICAgIHRoaXMuc2hlcGhlcmRFbGVtZW50Q29tcG9uZW50ID0gbmV3IFNoZXBoZXJkX2VsZW1lbnQoe1xuICAgICAgdGFyZ2V0OiB0aGlzLnRvdXIub3B0aW9ucy5zdGVwc0NvbnRhaW5lciB8fCBkb2N1bWVudC5ib2R5LFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgY2xhc3NQcmVmaXg6IHRoaXMuY2xhc3NQcmVmaXgsXG4gICAgICAgIGRlc2NyaXB0aW9uSWQsXG4gICAgICAgIGxhYmVsSWQsXG4gICAgICAgIHN0ZXA6IHRoaXMsXG4gICAgICAgIHN0eWxlczogdGhpcy5zdHlsZXNcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5zaGVwaGVyZEVsZW1lbnRDb21wb25lbnQuZ2V0RWxlbWVudCgpO1xuICB9XG4gIC8qKlxuICAgKiBJZiBhIGN1c3RvbSBzY3JvbGxUb0hhbmRsZXIgaXMgZGVmaW5lZCwgY2FsbCB0aGF0LCBvdGhlcndpc2UgZG8gdGhlIGdlbmVyaWNcbiAgICogc2Nyb2xsSW50b1ZpZXcgY2FsbC5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufE9iamVjdH0gc2Nyb2xsVG9PcHRpb25zIElmIHRydWUsIHVzZXMgdGhlIGRlZmF1bHQgYHNjcm9sbEludG9WaWV3YCxcbiAgICogaWYgYW4gb2JqZWN0LCBwYXNzZXMgdGhhdCBvYmplY3QgYXMgdGhlIHBhcmFtcyB0byBgc2Nyb2xsSW50b1ZpZXdgIGkuZS4gYHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ2NlbnRlcicgfWBcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfc2Nyb2xsVG8oc2Nyb2xsVG9PcHRpb25zKSB7XG4gICAgY29uc3Qge1xuICAgICAgZWxlbWVudFxuICAgIH0gPSBwYXJzZUF0dGFjaFRvKHRoaXMpO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRpb25zLnNjcm9sbFRvSGFuZGxlcikpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5zY3JvbGxUb0hhbmRsZXIoZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChpc0VsZW1lbnQkMShlbGVtZW50KSAmJiB0eXBlb2YgZWxlbWVudC5zY3JvbGxJbnRvVmlldyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldyhzY3JvbGxUb09wdGlvbnMpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogX2dldENsYXNzT3B0aW9ucyBnZXRzIGFsbCBwb3NzaWJsZSBjbGFzc2VzIGZvciB0aGUgc3RlcFxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RlcE9wdGlvbnMgVGhlIHN0ZXAgc3BlY2lmaWMgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7U3RyaW5nfSB1bmlxdWUgc3RyaW5nIGZyb20gYXJyYXkgb2YgY2xhc3Nlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuXG4gIF9nZXRDbGFzc09wdGlvbnMoc3RlcE9wdGlvbnMpIHtcbiAgICBjb25zdCBkZWZhdWx0U3RlcE9wdGlvbnMgPSB0aGlzLnRvdXIgJiYgdGhpcy50b3VyLm9wdGlvbnMgJiYgdGhpcy50b3VyLm9wdGlvbnMuZGVmYXVsdFN0ZXBPcHRpb25zO1xuICAgIGNvbnN0IHN0ZXBDbGFzc2VzID0gc3RlcE9wdGlvbnMuY2xhc3NlcyA/IHN0ZXBPcHRpb25zLmNsYXNzZXMgOiAnJztcbiAgICBjb25zdCBkZWZhdWx0U3RlcE9wdGlvbnNDbGFzc2VzID0gZGVmYXVsdFN0ZXBPcHRpb25zICYmIGRlZmF1bHRTdGVwT3B0aW9ucy5jbGFzc2VzID8gZGVmYXVsdFN0ZXBPcHRpb25zLmNsYXNzZXMgOiAnJztcbiAgICBjb25zdCBhbGxDbGFzc2VzID0gWy4uLnN0ZXBDbGFzc2VzLnNwbGl0KCcgJyksIC4uLmRlZmF1bHRTdGVwT3B0aW9uc0NsYXNzZXMuc3BsaXQoJyAnKV07XG4gICAgY29uc3QgdW5pcUNsYXNzZXMgPSBuZXcgU2V0KGFsbENsYXNzZXMpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHVuaXFDbGFzc2VzKS5qb2luKCcgJykudHJpbSgpO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBvcHRpb25zIGZvciB0aGUgc3RlcCwgbWFwcyBgd2hlbmAgdG8gZXZlbnRzLCBzZXRzIHVwIGJ1dHRvbnNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSBzdGVwXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgX3NldE9wdGlvbnMob3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IHRvdXJPcHRpb25zID0gdGhpcy50b3VyICYmIHRoaXMudG91ci5vcHRpb25zICYmIHRoaXMudG91ci5vcHRpb25zLmRlZmF1bHRTdGVwT3B0aW9ucztcbiAgICB0b3VyT3B0aW9ucyA9IGNqcyh7fSwgdG91ck9wdGlvbnMgfHwge30pO1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgYXJyb3c6IHRydWVcbiAgICB9LCB0b3VyT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgY29uc3Qge1xuICAgICAgd2hlblxuICAgIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgdGhpcy5vcHRpb25zLmNsYXNzZXMgPSB0aGlzLl9nZXRDbGFzc09wdGlvbnMob3B0aW9ucyk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgdGhpcy5pZCA9IHRoaXMub3B0aW9ucy5pZCB8fCBgc3RlcC0ke3V1aWQoKX1gO1xuXG4gICAgaWYgKHdoZW4pIHtcbiAgICAgIE9iamVjdC5rZXlzKHdoZW4pLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLm9uKGV2ZW50LCB3aGVuW2V2ZW50XSwgdGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgZWxlbWVudCBhbmQgc2V0IHVwIHRoZSBQb3BwZXIgaW5zdGFuY2VcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfc2V0dXBFbGVtZW50cygpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuZWwpKSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsID0gdGhpcy5fY3JlYXRlVG9vbHRpcENvbnRlbnQoKTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuYWR2YW5jZU9uKSB7XG4gICAgICBiaW5kQWR2YW5jZSh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXR1cFRvb2x0aXAodGhpcyk7XG4gIH1cbiAgLyoqXG4gICAqIFRyaWdnZXJzIGBiZWZvcmUtc2hvd2AsIGdlbmVyYXRlcyB0aGUgdG9vbHRpcCBET00gY29udGVudCxcbiAgICogc2V0cyB1cCBhIFBvcHBlciBpbnN0YW5jZSBmb3IgdGhlIHRvb2x0aXAsIHRoZW4gdHJpZ2dlcnMgYHNob3dgLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuXG4gIF9zaG93KCkge1xuICAgIHRoaXMudHJpZ2dlcignYmVmb3JlLXNob3cnKTtcblxuICAgIHRoaXMuX3NldHVwRWxlbWVudHMoKTtcblxuICAgIGlmICghdGhpcy50b3VyLm1vZGFsKSB7XG4gICAgICB0aGlzLnRvdXIuX3NldHVwTW9kYWwoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRvdXIubW9kYWwuc2V0dXBGb3JTdGVwKHRoaXMpO1xuXG4gICAgdGhpcy5fc3R5bGVUYXJnZXRFbGVtZW50Rm9yU3RlcCh0aGlzKTtcblxuICAgIHRoaXMuZWwuaGlkZGVuID0gZmFsc2U7IC8vIHN0YXJ0IHNjcm9sbGluZyB0byB0YXJnZXQgYmVmb3JlIHNob3dpbmcgdGhlIHN0ZXBcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuc2Nyb2xsVG8pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zY3JvbGxUbyh0aGlzLm9wdGlvbnMuc2Nyb2xsVG8pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5lbC5oaWRkZW4gPSBmYWxzZTtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5zaGVwaGVyZEVsZW1lbnRDb21wb25lbnQuZ2V0RWxlbWVudCgpO1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudGFyZ2V0IHx8IGRvY3VtZW50LmJvZHk7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5jbGFzc1ByZWZpeH1zaGVwaGVyZC1lbmFibGVkYCk7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5jbGFzc1ByZWZpeH1zaGVwaGVyZC10YXJnZXRgKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ3NoZXBoZXJkLWVuYWJsZWQnKTtcbiAgICB0aGlzLnRyaWdnZXIoJ3Nob3cnKTtcbiAgfVxuICAvKipcbiAgICogTW9kdWxhdGVzIHRoZSBzdHlsZXMgb2YgdGhlIHBhc3NlZCBzdGVwJ3MgdGFyZ2V0IGVsZW1lbnQsIGJhc2VkIG9uIHRoZSBzdGVwJ3Mgb3B0aW9ucyBhbmRcbiAgICogdGhlIHRvdXIncyBgbW9kYWxgIG9wdGlvbiwgdG8gdmlzdWFsbHkgZW1waGFzaXplIHRoZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSBzdGVwIFRoZSBzdGVwIG9iamVjdCB0aGF0IGF0dGFjaGVzIHRvIHRoZSBlbGVtZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgX3N0eWxlVGFyZ2V0RWxlbWVudEZvclN0ZXAoc3RlcCkge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBzdGVwLnRhcmdldDtcblxuICAgIGlmICghdGFyZ2V0RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzdGVwLm9wdGlvbnMuaGlnaGxpZ2h0Q2xhc3MpIHtcbiAgICAgIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdGVwLm9wdGlvbnMuaGlnaGxpZ2h0Q2xhc3MpO1xuICAgIH1cblxuICAgIGlmIChzdGVwLm9wdGlvbnMuY2FuQ2xpY2tUYXJnZXQgPT09IGZhbHNlKSB7XG4gICAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoZXBoZXJkLXRhcmdldC1jbGljay1kaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogV2hlbiBhIHN0ZXAgaXMgaGlkZGVuLCByZW1vdmUgdGhlIGhpZ2hsaWdodENsYXNzIGFuZCAnc2hlcGhlcmQtZW5hYmxlZCdcbiAgICogYW5kICdzaGVwaGVyZC10YXJnZXQnIGNsYXNzZXNcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfdXBkYXRlU3RlcFRhcmdldE9uSGlkZSgpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldCB8fCBkb2N1bWVudC5ib2R5O1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5oaWdobGlnaHRDbGFzcykge1xuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcHRpb25zLmhpZ2hsaWdodENsYXNzKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hlcGhlcmQtdGFyZ2V0LWNsaWNrLWRpc2FibGVkJywgYCR7dGhpcy5jbGFzc1ByZWZpeH1zaGVwaGVyZC1lbmFibGVkYCwgYCR7dGhpcy5jbGFzc1ByZWZpeH1zaGVwaGVyZC10YXJnZXRgKTtcbiAgfVxuXG59XG5cbi8qKlxuICogQ2xlYW51cCB0aGUgc3RlcHMgYW5kIHNldCBwb2ludGVyRXZlbnRzIGJhY2sgdG8gJ2F1dG8nXG4gKiBAcGFyYW0gdG91ciBUaGUgdG91ciBvYmplY3RcbiAqL1xuZnVuY3Rpb24gY2xlYW51cFN0ZXBzKHRvdXIpIHtcbiAgaWYgKHRvdXIpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdGVwc1xuICAgIH0gPSB0b3VyO1xuICAgIHN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBpZiAoc3RlcC5vcHRpb25zICYmIHN0ZXAub3B0aW9ucy5jYW5DbGlja1RhcmdldCA9PT0gZmFsc2UgJiYgc3RlcC5vcHRpb25zLmF0dGFjaFRvKSB7XG4gICAgICAgIGlmIChzdGVwLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgc3RlcC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hlcGhlcmQtdGFyZ2V0LWNsaWNrLWRpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyB0aGUgc3ZnIHBhdGggZGF0YSBmb3IgYSByb3VuZGVkIHJlY3RhbmdsZSBvdmVybGF5XG4gKiBAcGFyYW0ge09iamVjdH0gZGltZW5zaW9uIC0gRGltZW5zaW9ucyBvZiByZWN0YW5nbGUuXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggLSBXaWR0aC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBIZWlnaHQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3g9MF0gLSBPZmZzZXQgZnJvbSB0b3AgbGVmdCBjb3JuZXIgaW4geCBheGlzLiBkZWZhdWx0IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW3k9MF0gLSBPZmZzZXQgZnJvbSB0b3AgbGVmdCBjb3JuZXIgaW4geSBheGlzLiBkZWZhdWx0IDAuXG4gKiBAcGFyYW0ge251bWJlcn0gW3I9MF0gLSBDb3JuZXIgUmFkaXVzLiBLZWVwIHRoaXMgc21hbGxlciB0aGFuICBoYWxmIG9mIHdpZHRoIG9yIGhlaWdodC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IC0gUm91bmRlZCByZWN0YW5nbGUgb3ZlcmxheSBwYXRoIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIG1ha2VPdmVybGF5UGF0aCh7XG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIHggPSAwLFxuICB5ID0gMCxcbiAgciA9IDBcbn0pIHtcbiAgY29uc3Qge1xuICAgIGlubmVyV2lkdGg6IHcsXG4gICAgaW5uZXJIZWlnaHQ6IGhcbiAgfSA9IHdpbmRvdztcbiAgcmV0dXJuIGBNJHt3fSwke2h9XFxcbkgwXFxcblYwXFxcbkgke3d9XFxcblYke2h9XFxcblpcXFxuTSR7eCArIHJ9LCR7eX1cXFxuYSR7cn0sJHtyfSwwLDAsMC0ke3J9LCR7cn1cXFxuViR7aGVpZ2h0ICsgeSAtIHJ9XFxcbmEke3J9LCR7cn0sMCwwLDAsJHtyfSwke3J9XFxcbkgke3dpZHRoICsgeCAtIHJ9XFxcbmEke3J9LCR7cn0sMCwwLDAsJHtyfS0ke3J9XFxcblYke3kgKyByfVxcXG5hJHtyfSwke3J9LDAsMCwwLSR7cn0tJHtyfVxcXG5aYDtcbn1cblxuLyogc3JjL2pzL2NvbXBvbmVudHMvc2hlcGhlcmQtbW9kYWwuc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuMzcuMCAqL1xuXG5mdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQoY3R4KSB7XG4gIGxldCBzdmc7XG4gIGxldCBwYXRoO1xuICBsZXQgc3ZnX2NsYXNzX3ZhbHVlO1xuICBsZXQgbW91bnRlZDtcbiAgbGV0IGRpc3Bvc2U7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIHN2ZyA9IHN2Z19lbGVtZW50KFwic3ZnXCIpO1xuICAgICAgcGF0aCA9IHN2Z19lbGVtZW50KFwicGF0aFwiKTtcbiAgICAgIGF0dHIocGF0aCwgXCJkXCIsXG4gICAgICAvKnBhdGhEZWZpbml0aW9uKi9cbiAgICAgIGN0eFsyXSk7XG4gICAgICBhdHRyKHN2ZywgXCJjbGFzc1wiLCBzdmdfY2xhc3NfdmFsdWUgPSBgJHtcbiAgICAgIC8qbW9kYWxJc1Zpc2libGUqL1xuICAgICAgY3R4WzFdID8gXCJzaGVwaGVyZC1tb2RhbC1pcy12aXNpYmxlXCIgOiBcIlwifSBzaGVwaGVyZC1tb2RhbC1vdmVybGF5LWNvbnRhaW5lcmApO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBpbnNlcnQodGFyZ2V0LCBzdmcsIGFuY2hvcik7XG4gICAgICBhcHBlbmQoc3ZnLCBwYXRoKTtcbiAgICAgIC8qc3ZnX2JpbmRpbmcqL1xuXG4gICAgICBjdHhbMTFdKHN2Zyk7XG5cbiAgICAgIGlmICghbW91bnRlZCkge1xuICAgICAgICBkaXNwb3NlID0gbGlzdGVuKHN2ZywgXCJ0b3VjaG1vdmVcIixcbiAgICAgICAgLypfcHJldmVudE1vZGFsT3ZlcmxheVRvdWNoKi9cbiAgICAgICAgY3R4WzNdKTtcbiAgICAgICAgbW91bnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHAoY3R4LCBbZGlydHldKSB7XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypwYXRoRGVmaW5pdGlvbiovXG4gICAgICA0KSB7XG4gICAgICAgIGF0dHIocGF0aCwgXCJkXCIsXG4gICAgICAgIC8qcGF0aERlZmluaXRpb24qL1xuICAgICAgICBjdHhbMl0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLyptb2RhbElzVmlzaWJsZSovXG4gICAgICAyICYmIHN2Z19jbGFzc192YWx1ZSAhPT0gKHN2Z19jbGFzc192YWx1ZSA9IGAke1xuICAgICAgLyptb2RhbElzVmlzaWJsZSovXG4gICAgICBjdHhbMV0gPyBcInNoZXBoZXJkLW1vZGFsLWlzLXZpc2libGVcIiA6IFwiXCJ9IHNoZXBoZXJkLW1vZGFsLW92ZXJsYXktY29udGFpbmVyYCkpIHtcbiAgICAgICAgYXR0cihzdmcsIFwiY2xhc3NcIiwgc3ZnX2NsYXNzX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaTogbm9vcCxcbiAgICBvOiBub29wLFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGlmIChkZXRhY2hpbmcpIGRldGFjaChzdmcpO1xuICAgICAgLypzdmdfYmluZGluZyovXG5cbiAgICAgIGN0eFsxMV0obnVsbCk7XG4gICAgICBtb3VudGVkID0gZmFsc2U7XG4gICAgICBkaXNwb3NlKCk7XG4gICAgfVxuXG4gIH07XG59XG5cbmZ1bmN0aW9uIF9nZXRTY3JvbGxQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGlzSHRtbEVsZW1lbnQgPSBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG4gIGNvbnN0IG92ZXJmbG93WSA9IGlzSHRtbEVsZW1lbnQgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkub3ZlcmZsb3dZO1xuICBjb25zdCBpc1Njcm9sbGFibGUgPSBvdmVyZmxvd1kgIT09IFwiaGlkZGVuXCIgJiYgb3ZlcmZsb3dZICE9PSBcInZpc2libGVcIjtcblxuICBpZiAoaXNTY3JvbGxhYmxlICYmIGVsZW1lbnQuc2Nyb2xsSGVpZ2h0ID49IGVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gX2dldFNjcm9sbFBhcmVudChlbGVtZW50LnBhcmVudEVsZW1lbnQpO1xufVxuLyoqXG4gKiBHZXQgdGhlIHZpc2libGUgaGVpZ2h0IG9mIHRoZSB0YXJnZXQgZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgc2Nyb2xsUGFyZW50LlxuICogSWYgdGhlcmUgaXMgbm8gc2Nyb2xsIHBhcmVudCwgdGhlIGhlaWdodCBvZiB0aGUgZWxlbWVudCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSB0YXJnZXQgZWxlbWVudFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW3Njcm9sbFBhcmVudF0gVGhlIHNjcm9sbGFibGUgcGFyZW50IGVsZW1lbnRcbiAqIEByZXR1cm5zIHt7eTogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcn19XG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gX2dldFZpc2libGVIZWlnaHQoZWxlbWVudCwgc2Nyb2xsUGFyZW50KSB7XG4gIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgbGV0IHRvcCA9IGVsZW1lbnRSZWN0LnkgfHwgZWxlbWVudFJlY3QudG9wO1xuICBsZXQgYm90dG9tID0gZWxlbWVudFJlY3QuYm90dG9tIHx8IHRvcCArIGVsZW1lbnRSZWN0LmhlaWdodDtcblxuICBpZiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgY29uc3Qgc2Nyb2xsUmVjdCA9IHNjcm9sbFBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSBzY3JvbGxSZWN0LnkgfHwgc2Nyb2xsUmVjdC50b3A7XG4gICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gc2Nyb2xsUmVjdC5ib3R0b20gfHwgc2Nyb2xsVG9wICsgc2Nyb2xsUmVjdC5oZWlnaHQ7XG4gICAgdG9wID0gTWF0aC5tYXgodG9wLCBzY3JvbGxUb3ApO1xuICAgIGJvdHRvbSA9IE1hdGgubWluKGJvdHRvbSwgc2Nyb2xsQm90dG9tKTtcbiAgfVxuXG4gIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KGJvdHRvbSAtIHRvcCwgMCk7IC8vIERlZmF1bHQgdG8gMCBpZiBoZWlnaHQgaXMgbmVnYXRpdmVcblxuICByZXR1cm4ge1xuICAgIHk6IHRvcCxcbiAgICBoZWlnaHRcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgbGV0IHtcbiAgICBlbGVtZW50XG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIG9wZW5pbmdQcm9wZXJ0aWVzXG4gIH0gPSAkJHByb3BzO1xuICB1dWlkKCk7XG4gIGxldCBtb2RhbElzVmlzaWJsZSA9IGZhbHNlO1xuICBsZXQgcmFmSWQgPSB1bmRlZmluZWQ7XG4gIGxldCBwYXRoRGVmaW5pdGlvbjtcbiAgY2xvc2VNb2RhbE9wZW5pbmcoKTtcblxuICBjb25zdCBnZXRFbGVtZW50ID0gKCkgPT4gZWxlbWVudDtcblxuICBmdW5jdGlvbiBjbG9zZU1vZGFsT3BlbmluZygpIHtcbiAgICAkJGludmFsaWRhdGUoNCwgb3BlbmluZ1Byb3BlcnRpZXMgPSB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMCxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgcjogMFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAkJGludmFsaWRhdGUoMSwgbW9kYWxJc1Zpc2libGUgPSBmYWxzZSk7IC8vIEVuc3VyZSB3ZSBjbGVhbnVwIGFsbCBldmVudCBsaXN0ZW5lcnMgd2hlbiB3ZSBoaWRlIHRoZSBtb2RhbFxuXG4gICAgX2NsZWFudXBTdGVwRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvc2l0aW9uTW9kYWwobW9kYWxPdmVybGF5T3BlbmluZ1BhZGRpbmcgPSAwLCBtb2RhbE92ZXJsYXlPcGVuaW5nUmFkaXVzID0gMCwgc2Nyb2xsUGFyZW50LCB0YXJnZXRFbGVtZW50KSB7XG4gICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgeSxcbiAgICAgICAgaGVpZ2h0XG4gICAgICB9ID0gX2dldFZpc2libGVIZWlnaHQodGFyZ2V0RWxlbWVudCwgc2Nyb2xsUGFyZW50KTtcblxuICAgICAgY29uc3Qge1xuICAgICAgICB4LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgbGVmdFxuICAgICAgfSA9IHRhcmdldEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7IC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpcyBub3QgY29uc2lzdGVudC4gU29tZSBicm93c2VycyB1c2UgeCBhbmQgeSwgd2hpbGUgb3RoZXJzIHVzZSBsZWZ0IGFuZCB0b3BcblxuICAgICAgJCRpbnZhbGlkYXRlKDQsIG9wZW5pbmdQcm9wZXJ0aWVzID0ge1xuICAgICAgICB3aWR0aDogd2lkdGggKyBtb2RhbE92ZXJsYXlPcGVuaW5nUGFkZGluZyAqIDIsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0ICsgbW9kYWxPdmVybGF5T3BlbmluZ1BhZGRpbmcgKiAyLFxuICAgICAgICB4OiAoeCB8fCBsZWZ0KSAtIG1vZGFsT3ZlcmxheU9wZW5pbmdQYWRkaW5nLFxuICAgICAgICB5OiB5IC0gbW9kYWxPdmVybGF5T3BlbmluZ1BhZGRpbmcsXG4gICAgICAgIHI6IG1vZGFsT3ZlcmxheU9wZW5pbmdSYWRpdXNcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZU1vZGFsT3BlbmluZygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldHVwRm9yU3RlcChzdGVwKSB7XG4gICAgLy8gRW5zdXJlIHdlIG1vdmUgbGlzdGVuZXJzIGZyb20gdGhlIHByZXZpb3VzIHN0ZXAsIGJlZm9yZSB3ZSBzZXR1cCBuZXcgb25lc1xuICAgIF9jbGVhbnVwU3RlcEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICBpZiAoc3RlcC50b3VyLm9wdGlvbnMudXNlTW9kYWxPdmVybGF5KSB7XG4gICAgICBfc3R5bGVGb3JTdGVwKHN0ZXApO1xuXG4gICAgICBzaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG93KCkge1xuICAgICQkaW52YWxpZGF0ZSgxLCBtb2RhbElzVmlzaWJsZSA9IHRydWUpO1xuICB9XG5cbiAgY29uc3QgX3ByZXZlbnRNb2RhbEJvZHlUb3VjaCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBjb25zdCBfcHJldmVudE1vZGFsT3ZlcmxheVRvdWNoID0gZSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfTtcbiAgLyoqXG4gICogQWRkIHRvdWNobW92ZSBldmVudCBsaXN0ZW5lclxuICAqIEBwcml2YXRlXG4gICovXG5cblxuICBmdW5jdGlvbiBfYWRkU3RlcEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8vIFByZXZlbnRzIHdpbmRvdyBmcm9tIG1vdmluZyBvbiB0b3VjaC5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBfcHJldmVudE1vZGFsQm9keVRvdWNoLCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAqIENhbmNlbCB0aGUgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGxvb3AgYW5kIHJlbW92ZSB0b3VjaG1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gICogQHByaXZhdGVcbiAgKi9cblxuXG4gIGZ1bmN0aW9uIF9jbGVhbnVwU3RlcEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmIChyYWZJZCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSWQpO1xuICAgICAgcmFmSWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgX3ByZXZlbnRNb2RhbEJvZHlUb3VjaCwge1xuICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgKiBTdHlsZSB0aGUgbW9kYWwgZm9yIHRoZSBzdGVwXG4gICogQHBhcmFtIHtTdGVwfSBzdGVwIFRoZSBzdGVwIHRvIHN0eWxlIHRoZSBvcGVuaW5nIGZvclxuICAqIEBwcml2YXRlXG4gICovXG5cblxuICBmdW5jdGlvbiBfc3R5bGVGb3JTdGVwKHN0ZXApIHtcbiAgICBjb25zdCB7XG4gICAgICBtb2RhbE92ZXJsYXlPcGVuaW5nUGFkZGluZyxcbiAgICAgIG1vZGFsT3ZlcmxheU9wZW5pbmdSYWRpdXNcbiAgICB9ID0gc3RlcC5vcHRpb25zO1xuXG4gICAgY29uc3Qgc2Nyb2xsUGFyZW50ID0gX2dldFNjcm9sbFBhcmVudChzdGVwLnRhcmdldCk7IC8vIFNldHVwIHJlY3Vyc2l2ZSBmdW5jdGlvbiB0byBjYWxsIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0byB1cGRhdGUgdGhlIG1vZGFsIG9wZW5pbmcgcG9zaXRpb25cblxuXG4gICAgY29uc3QgcmFmTG9vcCA9ICgpID0+IHtcbiAgICAgIHJhZklkID0gdW5kZWZpbmVkO1xuICAgICAgcG9zaXRpb25Nb2RhbChtb2RhbE92ZXJsYXlPcGVuaW5nUGFkZGluZywgbW9kYWxPdmVybGF5T3BlbmluZ1JhZGl1cywgc2Nyb2xsUGFyZW50LCBzdGVwLnRhcmdldCk7XG4gICAgICByYWZJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZMb29wKTtcbiAgICB9O1xuXG4gICAgcmFmTG9vcCgpO1xuXG4gICAgX2FkZFN0ZXBFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3ZnX2JpbmRpbmcoJCR2YWx1ZSkge1xuICAgIGJpbmRpbmdfY2FsbGJhY2tzWyQkdmFsdWUgPyBcInVuc2hpZnRcIiA6IFwicHVzaFwiXSgoKSA9PiB7XG4gICAgICBlbGVtZW50ID0gJCR2YWx1ZTtcbiAgICAgICQkaW52YWxpZGF0ZSgwLCBlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gICQkc2VsZi4kJHNldCA9ICQkcHJvcHMgPT4ge1xuICAgIGlmIChcImVsZW1lbnRcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMCwgZWxlbWVudCA9ICQkcHJvcHMuZWxlbWVudCk7XG4gICAgaWYgKFwib3BlbmluZ1Byb3BlcnRpZXNcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoNCwgb3BlbmluZ1Byb3BlcnRpZXMgPSAkJHByb3BzLm9wZW5pbmdQcm9wZXJ0aWVzKTtcbiAgfTtcblxuICAkJHNlbGYuJCQudXBkYXRlID0gKCkgPT4ge1xuICAgIGlmICgkJHNlbGYuJCQuZGlydHkgJlxuICAgIC8qb3BlbmluZ1Byb3BlcnRpZXMqL1xuICAgIDE2KSB7XG4gICAgICAkJGludmFsaWRhdGUoMiwgcGF0aERlZmluaXRpb24gPSBtYWtlT3ZlcmxheVBhdGgob3BlbmluZ1Byb3BlcnRpZXMpKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFtlbGVtZW50LCBtb2RhbElzVmlzaWJsZSwgcGF0aERlZmluaXRpb24sIF9wcmV2ZW50TW9kYWxPdmVybGF5VG91Y2gsIG9wZW5pbmdQcm9wZXJ0aWVzLCBnZXRFbGVtZW50LCBjbG9zZU1vZGFsT3BlbmluZywgaGlkZSwgcG9zaXRpb25Nb2RhbCwgc2V0dXBGb3JTdGVwLCBzaG93LCBzdmdfYmluZGluZ107XG59XG5cbmNsYXNzIFNoZXBoZXJkX21vZGFsIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgaW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSwgY3JlYXRlX2ZyYWdtZW50LCBzYWZlX25vdF9lcXVhbCwge1xuICAgICAgZWxlbWVudDogMCxcbiAgICAgIG9wZW5pbmdQcm9wZXJ0aWVzOiA0LFxuICAgICAgZ2V0RWxlbWVudDogNSxcbiAgICAgIGNsb3NlTW9kYWxPcGVuaW5nOiA2LFxuICAgICAgaGlkZTogNyxcbiAgICAgIHBvc2l0aW9uTW9kYWw6IDgsXG4gICAgICBzZXR1cEZvclN0ZXA6IDksXG4gICAgICBzaG93OiAxMFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJCQuY3R4WzVdO1xuICB9XG5cbiAgZ2V0IGNsb3NlTW9kYWxPcGVuaW5nKCkge1xuICAgIHJldHVybiB0aGlzLiQkLmN0eFs2XTtcbiAgfVxuXG4gIGdldCBoaWRlKCkge1xuICAgIHJldHVybiB0aGlzLiQkLmN0eFs3XTtcbiAgfVxuXG4gIGdldCBwb3NpdGlvbk1vZGFsKCkge1xuICAgIHJldHVybiB0aGlzLiQkLmN0eFs4XTtcbiAgfVxuXG4gIGdldCBzZXR1cEZvclN0ZXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuJCQuY3R4WzldO1xuICB9XG5cbiAgZ2V0IHNob3coKSB7XG4gICAgcmV0dXJuIHRoaXMuJCQuY3R4WzEwXTtcbiAgfVxuXG59XG5cbmNvbnN0IFNoZXBoZXJkID0gbmV3IEV2ZW50ZWQoKTtcbi8qKlxuICogQ2xhc3MgcmVwcmVzZW50aW5nIHRoZSBzaXRlIHRvdXJcbiAqIEBleHRlbmRzIHtFdmVudGVkfVxuICovXG5cbmNsYXNzIFRvdXIgZXh0ZW5kcyBFdmVudGVkIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIGZvciB0aGUgdG91clxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuY29uZmlybUNhbmNlbCBJZiB0cnVlLCB3aWxsIGlzc3VlIGEgYHdpbmRvdy5jb25maXJtYCBiZWZvcmUgY2FuY2VsbGluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jb25maXJtQ2FuY2VsTWVzc2FnZSBUaGUgbWVzc2FnZSB0byBkaXNwbGF5IGluIHRoZSBjb25maXJtIGRpYWxvZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jbGFzc1ByZWZpeCBUaGUgcHJlZml4IHRvIGFkZCB0byB0aGUgYHNoZXBoZXJkLWVuYWJsZWRgIGFuZCBgc2hlcGhlcmQtdGFyZ2V0YCBjbGFzcyBuYW1lcyBhcyB3ZWxsIGFzIHRoZSBgZGF0YS1zaGVwaGVyZC1zdGVwLWlkYC5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuZGVmYXVsdFN0ZXBPcHRpb25zIERlZmF1bHQgb3B0aW9ucyBmb3IgU3RlcHMgKHtAbGluayBTdGVwI2NvbnN0cnVjdG9yfSksIGNyZWF0ZWQgdGhyb3VnaCBgYWRkU3RlcGBcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmV4aXRPbkVzYyBFeGl0aW5nIHRoZSB0b3VyIHdpdGggdGhlIGVzY2FwZSBrZXkgd2lsbCBiZSBlbmFibGVkIHVubGVzcyB0aGlzIGlzIGV4cGxpY2l0bHlcbiAgICogc2V0IHRvIGZhbHNlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMua2V5Ym9hcmROYXZpZ2F0aW9uIE5hdmlnYXRpbmcgdGhlIHRvdXIgdmlhIGxlZnQgYW5kIHJpZ2h0IGFycm93IGtleXMgd2lsbCBiZSBlbmFibGVkXG4gICAqIHVubGVzcyB0aGlzIGlzIGV4cGxpY2l0bHkgc2V0IHRvIGZhbHNlLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBvcHRpb25zLnN0ZXBzQ29udGFpbmVyIEFuIG9wdGlvbmFsIGNvbnRhaW5lciBlbGVtZW50IGZvciB0aGUgc3RlcHMuXG4gICAqIElmIG5vdCBzZXQsIHRoZSBzdGVwcyB3aWxsIGJlIGFwcGVuZGVkIHRvIGBkb2N1bWVudC5ib2R5YC5cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb3B0aW9ucy5tb2RhbENvbnRhaW5lciBBbiBvcHRpb25hbCBjb250YWluZXIgZWxlbWVudCBmb3IgdGhlIG1vZGFsLlxuICAgKiBJZiBub3Qgc2V0LCB0aGUgbW9kYWwgd2lsbCBiZSBhcHBlbmRlZCB0byBgZG9jdW1lbnQuYm9keWAuXG4gICAqIEBwYXJhbSB7b2JqZWN0W10gfCBTdGVwW119IG9wdGlvbnMuc3RlcHMgQW4gYXJyYXkgb2Ygc3RlcCBvcHRpb25zIG9iamVjdHMgb3IgU3RlcCBpbnN0YW5jZXMgdG8gaW5pdGlhbGl6ZSB0aGUgdG91ciB3aXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRvdXJOYW1lIEFuIG9wdGlvbmFsIFwibmFtZVwiIGZvciB0aGUgdG91ci4gVGhpcyB3aWxsIGJlIGFwcGVuZGVkIHRvIHRoZSB0aGUgdG91cidzXG4gICAqIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBgaWRgIHByb3BlcnR5IC0tIHdoaWNoIGlzIGFsc28gc2V0IG9uIHRoZSBgYm9keWAgZWxlbWVudCBhcyB0aGUgYGRhdGEtc2hlcGhlcmQtYWN0aXZlLXRvdXJgIGF0dHJpYnV0ZVxuICAgKiB3aGVuZXZlciB0aGUgdG91ciBiZWNvbWVzIGFjdGl2ZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnVzZU1vZGFsT3ZlcmxheSBXaGV0aGVyIG9yIG5vdCBzdGVwcyBzaG91bGQgYmUgcGxhY2VkIGFib3ZlIGEgZGFya2VuZWRcbiAgICogbW9kYWwgb3ZlcmxheS4gSWYgdHJ1ZSwgdGhlIG92ZXJsYXkgd2lsbCBjcmVhdGUgYW4gb3BlbmluZyBhcm91bmQgdGhlIHRhcmdldCBlbGVtZW50IHNvIHRoYXQgaXRcbiAgICogY2FuIHJlbWFpbiBpbnRlcmFjdGl2ZVxuICAgKiBAcmV0dXJucyB7VG91cn1cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIGF1dG9CaW5kKHRoaXMpO1xuICAgIGNvbnN0IGRlZmF1bHRUb3VyT3B0aW9ucyA9IHtcbiAgICAgIGV4aXRPbkVzYzogdHJ1ZSxcbiAgICAgIGtleWJvYXJkTmF2aWdhdGlvbjogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFRvdXJPcHRpb25zLCBvcHRpb25zKTtcbiAgICB0aGlzLmNsYXNzUHJlZml4ID0gbm9ybWFsaXplUHJlZml4KHRoaXMub3B0aW9ucy5jbGFzc1ByZWZpeCk7XG4gICAgdGhpcy5zdGVwcyA9IFtdO1xuICAgIHRoaXMuYWRkU3RlcHModGhpcy5vcHRpb25zLnN0ZXBzKTsgLy8gUGFzcyB0aGVzZSBldmVudHMgb250byB0aGUgZ2xvYmFsIFNoZXBoZXJkIG9iamVjdFxuXG4gICAgY29uc3QgZXZlbnRzID0gWydhY3RpdmUnLCAnY2FuY2VsJywgJ2NvbXBsZXRlJywgJ2luYWN0aXZlJywgJ3Nob3cnLCAnc3RhcnQnXTtcbiAgICBldmVudHMubWFwKGV2ZW50ID0+IHtcbiAgICAgIChlID0+IHtcbiAgICAgICAgdGhpcy5vbihlLCBvcHRzID0+IHtcbiAgICAgICAgICBvcHRzID0gb3B0cyB8fCB7fTtcbiAgICAgICAgICBvcHRzLnRvdXIgPSB0aGlzO1xuICAgICAgICAgIFNoZXBoZXJkLnRyaWdnZXIoZSwgb3B0cyk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fc2V0VG91cklEKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIG5ldyBzdGVwIHRvIHRoZSB0b3VyXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0ZXB9IG9wdGlvbnMgQW4gb2JqZWN0IGNvbnRhaW5pbmcgc3RlcCBvcHRpb25zIG9yIGEgU3RlcCBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIG9wdGlvbmFsIGluZGV4IHRvIGluc2VydCB0aGUgc3RlcCBhdC4gSWYgdW5kZWZpbmVkLCB0aGUgc3RlcFxuICAgKiBpcyBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICogQHJldHVybiB7U3RlcH0gVGhlIG5ld2x5IGFkZGVkIHN0ZXBcbiAgICovXG5cblxuICBhZGRTdGVwKG9wdGlvbnMsIGluZGV4KSB7XG4gICAgbGV0IHN0ZXAgPSBvcHRpb25zO1xuXG4gICAgaWYgKCEoc3RlcCBpbnN0YW5jZW9mIFN0ZXApKSB7XG4gICAgICBzdGVwID0gbmV3IFN0ZXAodGhpcywgc3RlcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ZXAudG91ciA9IHRoaXM7XG4gICAgfVxuXG4gICAgaWYgKCFpc1VuZGVmaW5lZChpbmRleCkpIHtcbiAgICAgIHRoaXMuc3RlcHMuc3BsaWNlKGluZGV4LCAwLCBzdGVwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGVwcy5wdXNoKHN0ZXApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgbXVsdGlwbGUgc3RlcHMgdG8gdGhlIHRvdXJcbiAgICogQHBhcmFtIHtBcnJheTxvYmplY3Q+IHwgQXJyYXk8U3RlcD59IHN0ZXBzIFRoZSBzdGVwcyB0byBhZGQgdG8gdGhlIHRvdXJcbiAgICovXG5cblxuICBhZGRTdGVwcyhzdGVwcykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHN0ZXBzKSkge1xuICAgICAgc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgICAgdGhpcy5hZGRTdGVwKHN0ZXApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEdvIHRvIHRoZSBwcmV2aW91cyBzdGVwIGluIHRoZSB0b3VyXG4gICAqL1xuXG5cbiAgYmFjaygpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RlcHMuaW5kZXhPZih0aGlzLmN1cnJlbnRTdGVwKTtcbiAgICB0aGlzLnNob3coaW5kZXggLSAxLCBmYWxzZSk7XG4gIH1cbiAgLyoqXG4gICAqIENhbGxzIF9kb25lKCkgdHJpZ2dlcmluZyB0aGUgJ2NhbmNlbCcgZXZlbnRcbiAgICogSWYgYGNvbmZpcm1DYW5jZWxgIGlzIHRydWUsIHdpbGwgc2hvdyBhIHdpbmRvdy5jb25maXJtIGJlZm9yZSBjYW5jZWxsaW5nXG4gICAqL1xuXG5cbiAgY2FuY2VsKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29uZmlybUNhbmNlbCkge1xuICAgICAgY29uc3QgY2FuY2VsTWVzc2FnZSA9IHRoaXMub3B0aW9ucy5jb25maXJtQ2FuY2VsTWVzc2FnZSB8fCAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHN0b3AgdGhlIHRvdXI/JztcbiAgICAgIGNvbnN0IHN0b3BUb3VyID0gd2luZG93LmNvbmZpcm0oY2FuY2VsTWVzc2FnZSk7XG5cbiAgICAgIGlmIChzdG9wVG91cikge1xuICAgICAgICB0aGlzLl9kb25lKCdjYW5jZWwnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZG9uZSgnY2FuY2VsJyk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDYWxscyBfZG9uZSgpIHRyaWdnZXJpbmcgdGhlIGBjb21wbGV0ZWAgZXZlbnRcbiAgICovXG5cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLl9kb25lKCdjb21wbGV0ZScpO1xuICB9XG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzdGVwIGZyb20gYSBnaXZlbiBpZFxuICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGlkIFRoZSBpZCBvZiB0aGUgc3RlcCB0byByZXRyaWV2ZVxuICAgKiBAcmV0dXJuIHtTdGVwfSBUaGUgc3RlcCBjb3JyZXNwb25kaW5nIHRvIHRoZSBgaWRgXG4gICAqL1xuXG5cbiAgZ2V0QnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBzLmZpbmQoc3RlcCA9PiB7XG4gICAgICByZXR1cm4gc3RlcC5pZCA9PT0gaWQ7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgc3RlcFxuICAgKiBAcmV0dXJucyB7U3RlcHxudWxsfVxuICAgKi9cblxuXG4gIGdldEN1cnJlbnRTdGVwKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGVwO1xuICB9XG4gIC8qKlxuICAgKiBIaWRlIHRoZSBjdXJyZW50IHN0ZXBcbiAgICovXG5cblxuICBoaWRlKCkge1xuICAgIGNvbnN0IGN1cnJlbnRTdGVwID0gdGhpcy5nZXRDdXJyZW50U3RlcCgpO1xuXG4gICAgaWYgKGN1cnJlbnRTdGVwKSB7XG4gICAgICByZXR1cm4gY3VycmVudFN0ZXAuaGlkZSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHRvdXIgaXMgYWN0aXZlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIFNoZXBoZXJkLmFjdGl2ZVRvdXIgPT09IHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIEdvIHRvIHRoZSBuZXh0IHN0ZXAgaW4gdGhlIHRvdXJcbiAgICogSWYgd2UgYXJlIGF0IHRoZSBlbmQsIGNhbGwgYGNvbXBsZXRlYFxuICAgKi9cblxuXG4gIG5leHQoKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnN0ZXBzLmluZGV4T2YodGhpcy5jdXJyZW50U3RlcCk7XG5cbiAgICBpZiAoaW5kZXggPT09IHRoaXMuc3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3coaW5kZXggKyAxLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIHN0ZXAgZnJvbSB0aGUgdG91clxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgaWQgZm9yIHRoZSBzdGVwIHRvIHJlbW92ZVxuICAgKi9cblxuXG4gIHJlbW92ZVN0ZXAobmFtZSkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldEN1cnJlbnRTdGVwKCk7IC8vIEZpbmQgdGhlIHN0ZXAsIGRlc3Ryb3kgaXQgYW5kIHJlbW92ZSBpdCBmcm9tIHRoaXMuc3RlcHNcblxuICAgIHRoaXMuc3RlcHMuc29tZSgoc3RlcCwgaSkgPT4ge1xuICAgICAgaWYgKHN0ZXAuaWQgPT09IG5hbWUpIHtcbiAgICAgICAgaWYgKHN0ZXAuaXNPcGVuKCkpIHtcbiAgICAgICAgICBzdGVwLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0ZXAuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnN0ZXBzLnNwbGljZShpLCAxKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50LmlkID09PSBuYW1lKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGVwID0gdW5kZWZpbmVkOyAvLyBJZiB3ZSBoYXZlIHN0ZXBzIGxlZnQsIHNob3cgdGhlIGZpcnN0IG9uZSwgb3RoZXJ3aXNlIGp1c3QgY2FuY2VsIHRoZSB0b3VyXG5cbiAgICAgIHRoaXMuc3RlcHMubGVuZ3RoID8gdGhpcy5zaG93KDApIDogdGhpcy5jYW5jZWwoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFNob3cgYSBzcGVjaWZpYyBzdGVwIGluIHRoZSB0b3VyXG4gICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5IFRoZSBrZXkgdG8gbG9vayB1cCB0aGUgc3RlcCBieVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZvcndhcmQgVHJ1ZSBpZiB3ZSBhcmUgZ29pbmcgZm9yd2FyZCwgZmFsc2UgaWYgYmFja3dhcmRcbiAgICovXG5cblxuICBzaG93KGtleSA9IDAsIGZvcndhcmQgPSB0cnVlKSB7XG4gICAgY29uc3Qgc3RlcCA9IGlzU3RyaW5nKGtleSkgPyB0aGlzLmdldEJ5SWQoa2V5KSA6IHRoaXMuc3RlcHNba2V5XTtcblxuICAgIGlmIChzdGVwKSB7XG4gICAgICB0aGlzLl91cGRhdGVTdGF0ZUJlZm9yZVNob3coKTtcblxuICAgICAgY29uc3Qgc2hvdWxkU2tpcFN0ZXAgPSBpc0Z1bmN0aW9uKHN0ZXAub3B0aW9ucy5zaG93T24pICYmICFzdGVwLm9wdGlvbnMuc2hvd09uKCk7IC8vIElmIGBzaG93T25gIHJldHVybnMgZmFsc2UsIHdlIHdhbnQgdG8gc2tpcCB0aGUgc3RlcCwgb3RoZXJ3aXNlLCBzaG93IHRoZSBzdGVwIGxpa2Ugbm9ybWFsXG5cbiAgICAgIGlmIChzaG91bGRTa2lwU3RlcCkge1xuICAgICAgICB0aGlzLl9za2lwU3RlcChzdGVwLCBmb3J3YXJkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcignc2hvdycsIHtcbiAgICAgICAgICBzdGVwLFxuICAgICAgICAgIHByZXZpb3VzOiB0aGlzLmN1cnJlbnRTdGVwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gc3RlcDtcbiAgICAgICAgc3RlcC5zaG93KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTdGFydCB0aGUgdG91clxuICAgKi9cblxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMudHJpZ2dlcignc3RhcnQnKTsgLy8gU2F2ZSB0aGUgZm9jdXNlZCBlbGVtZW50IGJlZm9yZSB0aGUgdG91ciBvcGVuc1xuXG4gICAgdGhpcy5mb2N1c2VkRWxCZWZvcmVPcGVuID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gbnVsbDtcblxuICAgIHRoaXMuX3NldHVwTW9kYWwoKTtcblxuICAgIHRoaXMuX3NldHVwQWN0aXZlVG91cigpO1xuXG4gICAgdGhpcy5uZXh0KCk7XG4gIH1cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuZXZlciB0aGUgdG91ciBpcyBjYW5jZWxsZWQgb3IgY29tcGxldGVkLCBiYXNpY2FsbHkgYW55dGltZSB3ZSBleGl0IHRoZSB0b3VyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZSB0byB0cmlnZ2VyXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgX2RvbmUoZXZlbnQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RlcHMuaW5kZXhPZih0aGlzLmN1cnJlbnRTdGVwKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuc3RlcHMpKSB7XG4gICAgICB0aGlzLnN0ZXBzLmZvckVhY2goc3RlcCA9PiBzdGVwLmRlc3Ryb3koKSk7XG4gICAgfVxuXG4gICAgY2xlYW51cFN0ZXBzKHRoaXMpO1xuICAgIHRoaXMudHJpZ2dlcihldmVudCwge1xuICAgICAgaW5kZXhcbiAgICB9KTtcbiAgICBTaGVwaGVyZC5hY3RpdmVUb3VyID0gbnVsbDtcbiAgICB0aGlzLnRyaWdnZXIoJ2luYWN0aXZlJywge1xuICAgICAgdG91cjogdGhpc1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubW9kYWwpIHtcbiAgICAgIHRoaXMubW9kYWwuaGlkZSgpO1xuICAgIH1cblxuICAgIGlmIChldmVudCA9PT0gJ2NhbmNlbCcgfHwgZXZlbnQgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIGlmICh0aGlzLm1vZGFsKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoZXBoZXJkLW1vZGFsLW92ZXJsYXktY29udGFpbmVyJyk7XG5cbiAgICAgICAgaWYgKG1vZGFsQ29udGFpbmVyKSB7XG4gICAgICAgICAgbW9kYWxDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIEZvY3VzIHRoZSBlbGVtZW50IHRoYXQgd2FzIGZvY3VzZWQgYmVmb3JlIHRoZSB0b3VyIHN0YXJ0ZWRcblxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQkMSh0aGlzLmZvY3VzZWRFbEJlZm9yZU9wZW4pKSB7XG4gICAgICB0aGlzLmZvY3VzZWRFbEJlZm9yZU9wZW4uZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIE1ha2UgdGhpcyB0b3VyIFwiYWN0aXZlXCJcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfc2V0dXBBY3RpdmVUb3VyKCkge1xuICAgIHRoaXMudHJpZ2dlcignYWN0aXZlJywge1xuICAgICAgdG91cjogdGhpc1xuICAgIH0pO1xuICAgIFNoZXBoZXJkLmFjdGl2ZVRvdXIgPSB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBfc2V0dXBNb2RhbCBjcmVhdGUgdGhlIG1vZGFsIGNvbnRhaW5lciBhbmQgaW5zdGFuY2VcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfc2V0dXBNb2RhbCgpIHtcbiAgICB0aGlzLm1vZGFsID0gbmV3IFNoZXBoZXJkX21vZGFsKHtcbiAgICAgIHRhcmdldDogdGhpcy5vcHRpb25zLm1vZGFsQ29udGFpbmVyIHx8IGRvY3VtZW50LmJvZHksXG4gICAgICBwcm9wczoge1xuICAgICAgICBjbGFzc1ByZWZpeDogdGhpcy5jbGFzc1ByZWZpeCxcbiAgICAgICAgc3R5bGVzOiB0aGlzLnN0eWxlc1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBgc2hvd09uYCBldmFsdWF0ZXMgdG8gZmFsc2UsIHRvIHNraXAgdGhlIHN0ZXBcbiAgICogQHBhcmFtIHtTdGVwfSBzdGVwIFRoZSBzdGVwIHRvIHNraXBcbiAgICogQHBhcmFtIHtCb29sZWFufSBmb3J3YXJkIFRydWUgaWYgd2UgYXJlIGdvaW5nIGZvcndhcmQsIGZhbHNlIGlmIGJhY2t3YXJkXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgX3NraXBTdGVwKHN0ZXAsIGZvcndhcmQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RlcHMuaW5kZXhPZihzdGVwKTtcbiAgICBjb25zdCBuZXh0SW5kZXggPSBmb3J3YXJkID8gaW5kZXggKyAxIDogaW5kZXggLSAxO1xuICAgIHRoaXMuc2hvdyhuZXh0SW5kZXgsIGZvcndhcmQpO1xuICB9XG4gIC8qKlxuICAgKiBCZWZvcmUgc2hvd2luZywgaGlkZSB0aGUgY3VycmVudCBzdGVwIGFuZCBpZiB0aGUgdG91ciBpcyBub3RcbiAgICogYWxyZWFkeSBhY3RpdmUsIGNhbGwgYHRoaXMuX3NldHVwQWN0aXZlVG91cmAuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgX3VwZGF0ZVN0YXRlQmVmb3JlU2hvdygpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50U3RlcCkge1xuICAgICAgdGhpcy5jdXJyZW50U3RlcC5oaWRlKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHtcbiAgICAgIHRoaXMuX3NldHVwQWN0aXZlVG91cigpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2V0cyB0aGlzLmlkIHRvIGAke3RvdXJOYW1lfS0tJHt1dWlkfWBcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfc2V0VG91cklEKCkge1xuICAgIGNvbnN0IHRvdXJOYW1lID0gdGhpcy5vcHRpb25zLnRvdXJOYW1lIHx8ICd0b3VyJztcbiAgICB0aGlzLmlkID0gYCR7dG91ck5hbWV9LS0ke3V1aWQoKX1gO1xuICB9XG5cbn1cblxuT2JqZWN0LmFzc2lnbihTaGVwaGVyZCwge1xuICBUb3VyLFxuICBTdGVwXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgU2hlcGhlcmQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaGVwaGVyZC5lc20uanMubWFwXG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9