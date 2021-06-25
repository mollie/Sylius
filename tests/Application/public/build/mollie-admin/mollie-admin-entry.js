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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9jc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9qcy9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvbW9sbGllUGF5bWVudHMvYXBwLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvbW9sbGllUGF5bWVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkbWluL0Rlc2t0b3AvUFJBQ0EvU3lsaXVzTW9sbGllUGx1Z2luL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL21vbGxpZVBheW1lbnRzL3Nob3dIaWRlQXBpS2V5cy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkbWluL0Rlc2t0b3AvUFJBQ0EvU3lsaXVzTW9sbGllUGx1Z2luL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL21vbGxpZVBheW1lbnRzL3NvcnRhYmxlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvbW9sbGllUGF5bWVudHMvdGVzdEFwaUtleXMuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9qcy9vbmJvYXJkaW5nV2l6YXJkL09uYm9hcmRpbmdXaXphcmQuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9hZG1pbi9qcy9vbmJvYXJkaW5nV2l6YXJkL2NvbmZpZy9zaGVwaGVyZENvbmZpZy5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkbWluL0Rlc2t0b3AvUFJBQ0EvU3lsaXVzTW9sbGllUGx1Z2luL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL29uYm9hcmRpbmdXaXphcmQvY29uZmlnL3N0ZXBzLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvb25ib2FyZGluZ1dpemFyZC9jb25maWcvd2l6YXJkVHJhbnNsYXRpb25zLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vanMvb25ib2FyZGluZ1dpemFyZC9oZWxwZXJzL2ZpbHRlck1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkbWluL0Rlc2t0b3AvUFJBQ0EvU3lsaXVzTW9sbGllUGx1Z2luL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL29uYm9hcmRpbmdXaXphcmQvaGVscGVycy9zdGVwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FkbWluL0Rlc2t0b3AvUFJBQ0EvU3lsaXVzTW9sbGllUGx1Z2luL3NyYy9SZXNvdXJjZXMvYXNzZXRzL2FkbWluL2pzL29uYm9hcmRpbmdXaXphcmQvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLmdldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2hlcGhlcmQuanMvZGlzdC9qcy9zaGVwaGVyZC5lc20uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyJdLCJuYW1lcyI6WyIkIiwibW9sbGllRm9ybUluY2x1ZGVkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uIiwiZm9ybSIsImFkZENsYXNzIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJkYXRhIiwic3VjY2VzcyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJkcm9wZG93biIsImVhY2giLCJpbmRleCIsInZhbHVlIiwibWV0aG9kIiwicmVtb3ZlQ2xhc3MiLCJjaGFuZ2UiLCJpcyIsInByb3AiLCJzZXRQYXltZW50RGVzY3JpcHRpb24iLCJldmVudCIsInRhcmdldCIsInNlbGVjdCIsIiR0YXJnZXRNZXRob2QiLCJjbG9zZXN0IiwiJGlucHV0T3JkZXJOdW1iZXIiLCJmaW5kIiwiJGRlc2NyaXB0aW9uT3JkZXJOdW1iZXIiLCJ2YWwiLCJzaG93IiwiaGlkZSIsInNldFBheW1lbnRGZWVGaWVsZHMiLCJmaXhlZEFtb3VudCIsInBlcmNlbnRhZ2UiLCJzdXJjaGFyZ2VMaW1pdCIsInNldENvdW50cnlSZXN0cmljdGlvbiIsImV4Y2x1ZGVDb3VudHJpZXMiLCJhbGxvd0NvdW50cmllcyIsInRlc3RBcGlLZXlCdXR0b24iLCJsaXZlQXBpS2V5QnV0dG9uIiwidGVzdEFwaUtleUlucHV0IiwibGl2ZUFwaUtleUlucHV0IiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImRyYWdnYWJsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImRyYWdnYWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJwYXlsb2FkIiwiZ2V0UGF5bWVudE1ldGhvZFBvc2l0aW9ucyIsImNoYW5nZVBvc2l0aW9uQWpheEFjdGlvbiIsInByZXZlbnREZWZhdWx0IiwiYWZ0ZXJFbGVtZW50IiwiZ2V0RHJhZ0FmdGVyRWxlbWVudCIsImNsaWVudFkiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsInVwZGF0ZWRQb3NpdGlvbnMiLCJtYXAiLCJpdGVtIiwicGF5bWVudE1ldGhvZCIsImRhdGFzZXQiLCJwdXNoIiwiaWQiLCJuYW1lIiwieSIsImRyYWdnYWJsZUVsZW1lbnRzIiwicmVkdWNlIiwiY2hpbGQiLCJib3giLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJvZmZzZXQiLCJ0b3AiLCJoZWlnaHQiLCJlbGVtZW50IiwiTnVtYmVyIiwiTkVHQVRJVkVfSU5GSU5JVFkiLCJnZXRBdHRyaWJ1dGUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidGVzdEFwaURhdGFEaXYiLCJ0ZXN0QXBpS2V5IiwibGl2ZUFwaUtleSIsImF0dHIiLCJhcGlfa2V5X3Rlc3QiLCJhcGlfa2V5X2xpdmUiLCJyZW1vdmVBdHRyIiwiaHRtbCIsIm9uYm9hcmRpbmdXaXphcmQiLCJjb25zdHJ1Y3RvciIsInRvdXJTdGVwcyIsInN0ZXBzIiwidG91ckNvbmZpZyIsInNoZXBoZXJkQ29uZmlnIiwidG91clF1aXRDb25maXJtYXRpb24iLCJzdGVwUXVpdENvbmZpcm1hdGlvbiIsInN0ZXBGYWN0b3J5IiwibmF2YmFyIiwibmF2QmFySXRlbXMiLCJwcmV2aW91c1N0ZXBJbmRleCIsIm1vZGFsQ29sbGFwc2VIYW5kbGVyIiwiY3VycmVudFN0ZXAiLCJ0b3VyIiwiZWwiLCJidXR0b25Db2xsYXBzZSIsImlzQ29sbGFwc2VkIiwiaW5jbHVkZXMiLCJleHBhbmRCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJfZ2V0Iiwid2l6YXJkVHJhbnNsYXRpb25zIiwidGV4dE9wZW4iLCJyZW1vdmVDaGlsZCIsInRvZ2dsZSIsInNldEF0dHJpYnV0ZSIsImhhbmRsZVF1aXRDb25maXJtYXRpb24iLCJyZXR1cm5TdGVwSW5kZXgiLCJhZGRTdGVwIiwiYnV0dG9ucyIsInN0ZXBCdXR0b25zIiwibmF2YmFyVmlzaWJpbGl0eUhhbmRsZXIiLCJpc0FjdGl2ZSIsIm5hdmJhclByb2dyZXNzSGFuZGxlciIsImN1cnJlbnRTdGVwUHJvZ3Jlc3MiLCJnZXRDdXJyZW50U3RlcCIsIm9wdGlvbnMiLCJoaWdobGlnaHRDbGFzcyIsIm5hdkJhckl0ZW0iLCJyZXN0YXJ0VG91ckxpc3RlbmVyIiwicmVzdGFydFRvdXJUcmlnZ2VyIiwic3RhcnQiLCJpbml0VG91ciIsIlNoZXBoZXJkIiwiVG91ciIsInN0ZXAiLCJzdGVwSW5kZXgiLCJ3aGVuIiwidXNlTW9kYWxPdmVybGF5IiwiY29uZmlybUNhbmNlbCIsImtleWJvYXJkTmF2aWdhdGlvbiIsImV4aXRPbkVzYyIsImRlZmF1bHRTdGVwT3B0aW9ucyIsImNsYXNzIiwiYXJyb3ciLCJjYW5jZWxJY29uIiwiZW5hYmxlZCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJibG9jayIsIm1vZGFsT3ZlcmxheU9wZW5pbmdSYWRpdXMiLCJwYXltZW50TWV0aG9kUGF5bWVudEFwaSIsInBheW1lbnRNZXRob2RPcmRlckFwaSIsImVudmlyb21lbnRUZXN0IiwiZW52aXJvbWVudExpdmUiLCJzdGVwUGF5bWVudFR5cGUiLCJ0ZXh0IiwiY2xhc3NlcyIsImF0dGFjaFRvIiwiYnRuTmV4dENsYXNzIiwic3RlcFBheW1lbnREZXNjcmlwdGlvbiIsInN0ZXBPcmRlckFwaSIsInRpdGxlIiwiY3VzdG9tQnV0dG9ucyIsImFjdGlvbiIsInJlbW92ZVN0ZXAiLCJjb21wbGV0ZSIsInNlY29uZGFyeSIsImJ0bkJhY2tUZXh0IiwiYnRuTmV4dFRleHQiLCJidG5Db2xsYXBzZUNsYXNzIiwiYnRuQ2xvc2VDbGFzcyIsInVybE1vbGxpZSIsInNob3dPbiIsImN1cnJlbnRTdGVwVmFsaWRhdG9yIiwicGF5bWVudFR5cGVJbmRpY2F0b3IiLCJtZXRob2RMb2FkSW5kaWNhdG9yIiwiYnRuQmFja0NsYXNzIiwic3RlcFN0YXJ0Iiwic3RlcE1vbGxpZUNvbm5lY3QiLCJzdGVwRW52Iiwic3RlcEFwaUtleSIsInN0ZXBDaGVja291dENvbmZpZyIsInN0ZXBNb2xsaWVDb21wb25lbnRzIiwic3RlcE1vbGxpZVBheW1lbnRzIiwic3RlcE1ldGhvZENvbmZpZyIsInN0ZXBNZXRob2RSZXF1aXJlZCIsInN0ZXBFcnJvclRpdGxlIiwic3RlcEVycm9yRGVzY3JpcHRpb24iLCJzdGVwUGF5bWVudFRpdGxlIiwic3RlcEltYWdlVXBsb2FkIiwic3RlcENvdW50cnlSZXN0cmljdGlvbiIsInN0ZXBQYXltZW50TWV0aG9kIiwic3RlcE9yZGVyTnVtYmVyIiwic3RlcE9yZGVyc0FQSSIsInN0ZXBQYXltZW50c0FQSSIsInN0ZXBGZWVzIiwic3RlcFNhdmUiLCJzdGVwRmluaXNoV2l6YXJkIiwiZ29CYWNrIiwic2tpcFdpemFyZCIsInN0YXJ0V2l6YXJkIiwibG9naW5Nb2xsaWVBY2NvdW50IiwibmV4dFdpdGhBcnJvdyIsIm5leHQiLCJjcmVhdGVNb2xsaWVBY2NvdW50IiwiZmluaXNoV2l6YXJkIiwicXVpdENvbmZpcm0iLCJxdWl0Q2FuY2VsIiwiY29tbW9uIiwib3BlbiIsImV4cGVjdGVkVmFsdWUiLCJpbmRpY2F0ZWRJdGVtIiwiaW5kaWNhdGVkSXRlbVZhbHVlIiwibWVzc2FnZUNvbnRhaW5lciIsIm1lc3NhZ2VXaW5kb3ciLCJ2YWxpZGF0ZUZpZWxkcyIsImVsZW1lbnRzIiwiZXJyb3JzIiwiZXZlcnkiLCJwb3B1cCIsInZhbGlkYXRpb25Db250YWluZXIiLCJ2YWxpZGF0aW9uRWxlbWVudHMiLCJwYXJlbnROb2RlIiwibGVuZ3RoIiwiaGFuZGxlU3RlcEJ1dHRvbnMiLCJjdXN0b21CdXR0b24iLCJ3aW5kb3ciLCJiYWNrIiwiT25ib2FyZGluZ1dpemFyZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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TztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsS0FBSztBQUNoQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQUs7QUFDaEI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsMkRBQTJEOzs7QUFHM0Q7O0FBRUE7QUFDQTtBQUNBLEtBQUssWUFBWTtBQUNqQjs7QUFFQTtBQUNBLDJGQUEyRixTQUFTO0FBQ3BHLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQyxNQUFNOztBQUVQO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNIQUFzSDs7QUFFdEg7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUFJLEVBQUU7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOzs7QUFHVDtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUDs7QUFFQTtBQUNBLG9FQUFvRTtBQUNwRTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qzs7QUFFeEM7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBLDJCQUEyQixvQ0FBb0M7QUFDL0Q7O0FBRUEseUJBQXlCLHFDQUFxQztBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLG1EQUFtRDtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHlDQUF5QyxrREFBa0Q7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsNENBQTRDO0FBQzVDO0FBQ0EsR0FBRztBQUNILENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxzQ0FBc0M7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsMERBQTBEO0FBQzFELDZGQUE2RjtBQUM3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUcsSUFBSTtBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLFFBQVE7QUFDekM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1FQUFtRTtBQUNuRTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEY7QUFDNUY7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RTtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQsK0JBQStCO0FBQy9CLDRCQUE0QjtBQUM1QixLQUFLO0FBQ0w7QUFDQSxHQUFHLElBQUksRUFBRTs7QUFFVDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxRUFBcUUsYUFBYTtBQUNsRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQix1QkFBdUI7QUFDdkI7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxLQUFLO0FBQ2hCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkJBQTZCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0RBQStEO0FBQy9EO0FBQ0E7OztBQUdBLG1CQUFtQiw2QkFBNkI7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsWUFBWTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxxQkFBcUIsd0JBQXdCO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHVCQUF1QjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1DQUFtQyx3QkFBd0I7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxxQkFBcUIsd0JBQXdCO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxZQUFZOzs7QUFHYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLFlBQVk7OztBQUdiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLFlBQVk7OztBQUdiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsWUFBWTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7OztBQUdUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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ZSI6Im1vbGxpZS1hZG1pbi1lbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL21vbGxpZS1hZG1pbi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvYWRtaW4vZW50cnkuanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vY3NzL21haW4uc2Nzcyc7XG5pbXBvcnQgJy4vanMvbWFpbic7XG4iLCJpbXBvcnQgJy4vbW9sbGllUGF5bWVudHMvbWFpbic7XG5pbXBvcnQgJy4vb25ib2FyZGluZ1dpemFyZC9tYWluJztcbiIsIlxuJChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbW9sbGllRm9ybUluY2x1ZGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2xsaWUtcGF5bWVudC1mb3JtXCIpO1xuXG4gICAgaWYgKCFtb2xsaWVGb3JtSW5jbHVkZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICQoXCIjZ2V0X21ldGhvZHNcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZm9ybSA9ICQoXCIudWkuZm9ybVwiKTtcbiAgICAgICAgZm9ybS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgdXJsOiAkKHRoaXMpLmRhdGEoJ3VybCcpLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICQoJy51aS5kcm9wZG93bicpLmRyb3Bkb3duKCk7XG5cbiAgICAkKFwiLmZvcm1fYnV0dG9uLS1kZWxldGUtaW1nXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBmb3JtID0gJChcIi51aS5mb3JtXCIpO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xuICAgICAgICAgICAgZm9ybS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHttZXRob2Q6IHZhbHVlfSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgICAgIHVybDogJCh0aGlzKS5kYXRhKCd1cmwnKSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0ucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgICQoXCIuYml0YmFnLW1vbGxpZS1jb21wb25lbnRzXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKCcuYml0YmFnLXNpbmdsZS1jbGljay1wYXltZW50JykucHJvcCgnY2hlY2tlZCcsICEkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAkKFwiLmJpdGJhZy1zaW5nbGUtY2xpY2stcGF5bWVudFwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgJCgnLmJpdGJhZy1tb2xsaWUtY29tcG9uZW50cycpLnByb3AoJ2NoZWNrZWQnLCAhJCh0aGlzKS5pcygnOmNoZWNrZWQnKSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgJCgnW2lkJD1cIl9wYXltZW50VHlwZVwiXScpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHNldFBheW1lbnREZXNjcmlwdGlvbigkKHRoaXMpLCBpbmRleCk7XG5cbiAgICAgICAgJCh0aGlzKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBzZXRQYXltZW50RGVzY3JpcHRpb24oJChldmVudC50YXJnZXQpLCBpbmRleCk7XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzZXRQYXltZW50RGVzY3JpcHRpb24oc2VsZWN0KSB7XG4gICAgICAgIGNvbnN0ICR0YXJnZXRNZXRob2QgPSBzZWxlY3QuY2xvc2VzdCgnLmpzLWRyYWdnYWJsZScpO1xuICAgICAgICBjb25zdCAkaW5wdXRPcmRlck51bWJlciA9ICR0YXJnZXRNZXRob2QuZmluZCgnW2lkJD1cIl9wYXltZW50RGVzY3JpcHRpb25cIl0nKTtcbiAgICAgICAgY29uc3QgJGRlc2NyaXB0aW9uT3JkZXJOdW1iZXIgPSAkdGFyZ2V0TWV0aG9kLmZpbmQoJ1tpZF49XCJwYXltZW50X2Rlc2NyaXB0aW9uX1wiXScpO1xuXG4gICAgICAgIGlmIChzZWxlY3QuZmluZCgnOnNlbGVjdGVkJykudmFsKCkgPT09ICdQQVlNRU5UX0FQSScpIHtcbiAgICAgICAgICAgICRpbnB1dE9yZGVyTnVtYmVyLnNob3coKTtcbiAgICAgICAgICAgICRkZXNjcmlwdGlvbk9yZGVyTnVtYmVyLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRpbnB1dE9yZGVyTnVtYmVyLmhpZGUoKTtcbiAgICAgICAgICAgICRkZXNjcmlwdGlvbk9yZGVyTnVtYmVyLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgJCgnW2lkJD1cIl9wYXltZW50U3VyY2hhcmdlRmVlX3R5cGVcIl0nKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9ICQodGhpcykuZmluZChcIjpzZWxlY3RlZFwiKS52YWwoKTtcbiAgICAgICAgc2V0UGF5bWVudEZlZUZpZWxkcyh2YWx1ZSwgaW5kZXgpO1xuXG4gICAgICAgICQodGhpcykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIHNldFBheW1lbnRGZWVGaWVsZHModmFsdWUsIGluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHNldFBheW1lbnRGZWVGaWVsZHModmFsdWUsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGZpeGVkQW1vdW50ID0gJ3N5bGl1c19wYXltZW50X21ldGhvZF9nYXRld2F5Q29uZmlnX21vbGxpZUdhdGV3YXlDb25maWdfJysgaW5kZXggKydfcGF5bWVudFN1cmNoYXJnZUZlZV9maXhlZEFtb3VudCc7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSAnc3lsaXVzX3BheW1lbnRfbWV0aG9kX2dhdGV3YXlDb25maWdfbW9sbGllR2F0ZXdheUNvbmZpZ18nKyBpbmRleCArJ19wYXltZW50U3VyY2hhcmdlRmVlX3BlcmNlbnRhZ2UnO1xuICAgICAgICBjb25zdCBzdXJjaGFyZ2VMaW1pdCA9ICdzeWxpdXNfcGF5bWVudF9tZXRob2RfZ2F0ZXdheUNvbmZpZ19tb2xsaWVHYXRld2F5Q29uZmlnXycrIGluZGV4ICsnX3BheW1lbnRTdXJjaGFyZ2VGZWVfc3VyY2hhcmdlTGltaXQnO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ25vX2ZlZScpIHtcbiAgICAgICAgICAgICQoJ2xhYmVsW2Zvcj0nK2ZpeGVkQW1vdW50KyddLCBpbnB1dCMnK2ZpeGVkQW1vdW50KycnKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCdsYWJlbFtmb3I9JytwZXJjZW50YWdlKyddLCBpbnB1dCMnK3BlcmNlbnRhZ2UrJycpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJ2xhYmVsW2Zvcj0nK3N1cmNoYXJnZUxpbWl0KyddLCBpbnB1dCMnK3N1cmNoYXJnZUxpbWl0KycnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAncGVyY2VudGFnZScpIHtcbiAgICAgICAgICAgICQoJ2xhYmVsW2Zvcj0nK3BlcmNlbnRhZ2UrJ10sIGlucHV0IycrcGVyY2VudGFnZSsnJykuc2hvdygpO1xuICAgICAgICAgICAgJCgnbGFiZWxbZm9yPScrc3VyY2hhcmdlTGltaXQrJ10sIGlucHV0Iycrc3VyY2hhcmdlTGltaXQrJycpLnNob3coKTtcbiAgICAgICAgICAgICQoJ2xhYmVsW2Zvcj0nK2ZpeGVkQW1vdW50KyddLCBpbnB1dCMnK2ZpeGVkQW1vdW50KycnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSAnZml4ZWRfZmVlJykge1xuICAgICAgICAgICAgJCgnbGFiZWxbZm9yPScrZml4ZWRBbW91bnQrJ10sIGlucHV0IycrZml4ZWRBbW91bnQrJycpLnNob3coKTtcbiAgICAgICAgICAgICQoJ2xhYmVsW2Zvcj0nK3BlcmNlbnRhZ2UrJ10sIGlucHV0IycrcGVyY2VudGFnZSsnJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnbGFiZWxbZm9yPScrc3VyY2hhcmdlTGltaXQrJ10sIGlucHV0Iycrc3VyY2hhcmdlTGltaXQrJycpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09ICdmaXhlZF9mZWVfYW5kX3BlcmNlbnRhZ2UnKSB7XG4gICAgICAgICAgICAkKCdsYWJlbFtmb3I9JytmaXhlZEFtb3VudCsnXSwgaW5wdXQjJytmaXhlZEFtb3VudCsnJykuc2hvdygpO1xuICAgICAgICAgICAgJCgnbGFiZWxbZm9yPScrcGVyY2VudGFnZSsnXSwgaW5wdXQjJytwZXJjZW50YWdlKycnKS5zaG93KCk7XG4gICAgICAgICAgICAkKCdsYWJlbFtmb3I9JytzdXJjaGFyZ2VMaW1pdCsnXSwgaW5wdXQjJytzdXJjaGFyZ2VMaW1pdCsnJykuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJCgnW2lkJD1cIl9jb3VudHJ5X3Jlc3RyaWN0aW9uXCJdJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAkKHRoaXMpLmZpbmQoXCI6c2VsZWN0ZWRcIikudmFsKCk7XG4gICAgICAgIHNldENvdW50cnlSZXN0cmljdGlvbih2YWx1ZSwgaW5kZXgpO1xuXG4gICAgICAgICQodGhpcykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgICAgIHNldENvdW50cnlSZXN0cmljdGlvbih2YWx1ZSwgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHNldENvdW50cnlSZXN0cmljdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgZXhjbHVkZUNvdW50cmllcyA9ICQoJyNjb3VudHJ5LWV4Y2x1ZGVkXycgKyBpbmRleCk7XG4gICAgICAgIGNvbnN0IGFsbG93Q291bnRyaWVzID0gJCgnI2NvdW50cnktYWxsb3dlZF8nICsgaW5kZXgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ0FMTF9DT1VOVFJJRVMnKSB7XG4gICAgICAgICAgICBleGNsdWRlQ291bnRyaWVzLnNob3coKTtcbiAgICAgICAgICAgIGFsbG93Q291bnRyaWVzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWUgPT09ICdTRUxFQ1RFRF9DT1VOVFJJRVMnKSB7XG4gICAgICAgICAgICBleGNsdWRlQ291bnRyaWVzLmhpZGUoKTtcbiAgICAgICAgICAgIGFsbG93Q291bnRyaWVzLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiaW1wb3J0ICcuL2FwcCc7XG5pbXBvcnQgJy4vc2hvd0hpZGVBcGlLZXlzJztcbmltcG9ydCAnLi9zb3J0YWJsZSc7XG5pbXBvcnQgJy4vdGVzdEFwaUtleXMnO1xuIiwiJChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdGVzdEFwaUtleUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBpX2tleV90ZXN0XCIpO1xuICAgIGNvbnN0IGxpdmVBcGlLZXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwaV9rZXlfbGl2ZVwiKTtcblxuICAgICQodGVzdEFwaUtleUJ1dHRvbikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRlc3RBcGlLZXlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3lsaXVzX3BheW1lbnRfbWV0aG9kX2dhdGV3YXlDb25maWdfY29uZmlnX2FwaV9rZXlfdGVzdFwiKTtcblxuICAgICAgICBpZiAodGVzdEFwaUtleUlucHV0LnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgICAgIHRlc3RBcGlLZXlJbnB1dC50eXBlID0gJ3RleHQnO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0ZXN0QXBpS2V5SW5wdXQudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgfSk7XG5cbiAgICAkKGxpdmVBcGlLZXlCdXR0b24pLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCBsaXZlQXBpS2V5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN5bGl1c19wYXltZW50X21ldGhvZF9nYXRld2F5Q29uZmlnX2NvbmZpZ19hcGlfa2V5X2xpdmVcIik7XG5cbiAgICAgICAgaWYgKGxpdmVBcGlLZXlJbnB1dC50eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgICBsaXZlQXBpS2V5SW5wdXQudHlwZSA9ICd0ZXh0JztcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGl2ZUFwaUtleUlucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xuICAgIH0pO1xufSk7XG4iLCIkKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNvcnRhYmxlJyk7XG5cbiAgaWYgKCFjb250YWluZXIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBkcmFnZ2FibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWRyYWdnYWJsZScpO1xuXG4gIGRyYWdnYWJsZXMuZm9yRWFjaChkcmFnZ2FibGUgPT4ge1xuICAgIGRyYWdnYWJsZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcbiAgICB9KVxuXG4gICAgZHJhZ2dhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICBkcmFnZ2FibGUuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICAgIGNvbnN0IHBheWxvYWQgPSBnZXRQYXltZW50TWV0aG9kUG9zaXRpb25zKCk7XG4gICAgICBjaGFuZ2VQb3NpdGlvbkFqYXhBY3Rpb24ocGF5bG9hZCk7XG4gICAgfSk7XG4gIH0pXG5cbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZnRlckVsZW1lbnQgPSBnZXREcmFnQWZ0ZXJFbGVtZW50KGNvbnRhaW5lciwgZXZlbnQuY2xpZW50WSk7XG4gICAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJyk7XG4gICAgaWYgKGFmdGVyRWxlbWVudCA9PSBudWxsKSB7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShkcmFnZ2FibGUsIGFmdGVyRWxlbWVudCk7XG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGdldFBheW1lbnRNZXRob2RQb3NpdGlvbnMgKCkge1xuICAgIGNvbnN0IGRyYWdnYWJsZXMgPSBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1kcmFnZ2FibGUnKV07XG4gICAgY29uc3QgdXBkYXRlZFBvc2l0aW9ucyA9IFtdO1xuXG4gICAgZHJhZ2dhYmxlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB7IHBheW1lbnRNZXRob2QgfSA9IGl0ZW0uZGF0YXNldDtcbiAgICAgIHVwZGF0ZWRQb3NpdGlvbnMucHVzaCh7IGlkOiBpbmRleCwgbmFtZTogcGF5bWVudE1ldGhvZCB9KVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZWRQb3NpdGlvbnM7XG4gIH1cblxuICBmdW5jdGlvbiBnZXREcmFnQWZ0ZXJFbGVtZW50KGNvbnRhaW5lciwgeSkge1xuICAgIGNvbnN0IGRyYWdnYWJsZUVsZW1lbnRzID0gWy4uLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZHJhZ2dhYmxlOm5vdCguZHJhZ2dpbmcpJyldO1xuXG4gICAgcmV0dXJuIGRyYWdnYWJsZUVsZW1lbnRzLnJlZHVjZSgoY2xvc2VzdCwgY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3Qgb2Zmc2V0ID0geSAtIGJveC50b3AgLSBib3guaGVpZ2h0IC8gMjtcbiAgICAgIGlmIChvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3Nlc3Qub2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB7IG9mZnNldDogb2Zmc2V0LCBlbGVtZW50OiBjaGlsZCB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2xvc2VzdDtcbiAgICAgIH1cblxuICAgIH0sIHsgb2Zmc2V0OiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgfSkuZWxlbWVudFxuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlUG9zaXRpb25BamF4QWN0aW9uKGRhdGEpIHtcbiAgICBjb25zdCB1cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBheW1lbnRfbWV0aG9kc1wiKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWpheC11cmwnKTtcblxuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiB7J2RhdGEnOiBkYXRhfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7fSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoKSB7fVxuICAgIH0pO1xuICB9XG59KTtcbiIsIiQoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRlc3RBcGlLZXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiIHRlc3QtYXBpLWtleS1idXR0b25cIik7XG5cbiAgICAkKHRlc3RBcGlLZXlCdXR0b24pLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBjb25zdCB0ZXN0QXBpRGF0YURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0ZXN0LWFwaS1rZXktZGl2XCIpXG4gICAgICAgIGNvbnN0IHRlc3RBcGlLZXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN5bGl1c19wYXltZW50X21ldGhvZF9nYXRld2F5Q29uZmlnX2NvbmZpZ19hcGlfa2V5X3Rlc3RcIilcbiAgICAgICAgY29uc3QgbGl2ZUFwaUtleSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3lsaXVzX3BheW1lbnRfbWV0aG9kX2dhdGV3YXlDb25maWdfY29uZmlnX2FwaV9rZXlfbGl2ZVwiKVxuXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgJCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgdXJsOiAkKHRoaXMpLmRhdGEoJ3VybCcpLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGFwaV9rZXlfdGVzdDogJCh0ZXN0QXBpS2V5KS52YWwoKSxcbiAgICAgICAgICAgICAgICBhcGlfa2V5X2xpdmU6ICQobGl2ZUFwaUtleSkudmFsKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkKHRlc3RBcGlEYXRhRGl2KS5yZW1vdmVDbGFzcygnbWVzc2FnZSByZWQnKTtcblxuICAgICAgICAgICAgICAgICQodGVzdEFwaUtleUJ1dHRvbikucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAkKHRlc3RBcGlLZXlCdXR0b24pLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgJCh0ZXN0QXBpRGF0YURpdikuaHRtbChkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgU2hlcGhlcmQgZnJvbSAnc2hlcGhlcmQuanMnO1xuaW1wb3J0IF9nZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5cbmltcG9ydCB7c3RlcHMsIHN0ZXBRdWl0Q29uZmlybWF0aW9ufSBmcm9tICcuL2NvbmZpZy9zdGVwcyc7XG5pbXBvcnQgc2hlcGhlcmRDb25maWcgZnJvbSAnLi9jb25maWcvc2hlcGhlcmRDb25maWcnO1xuaW1wb3J0IHN0ZXBGYWN0b3J5IGZyb20gJy4vaGVscGVycy9zdGVwRmFjdG9yeSc7XG5pbXBvcnQgd2l6YXJkVHJhbnNsYXRpb25zIGZyb20gJy4vY29uZmlnL3dpemFyZFRyYW5zbGF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG9uYm9hcmRpbmdXaXphcmQge1xuXHRjb25zdHJ1Y3Rvcihcblx0XHR0b3VyU3RlcHMgPSBzdGVwcyxcblx0XHR0b3VyQ29uZmlnID0gc2hlcGhlcmRDb25maWcsXG5cdFx0dG91clF1aXRDb25maXJtYXRpb24gPSBzdGVwUXVpdENvbmZpcm1hdGlvblxuXHQpIHtcblx0XHR0aGlzLnN0ZXBzID0gc3RlcEZhY3RvcnkodG91clN0ZXBzKTtcblx0XHR0aGlzLnN0ZXBRdWl0Q29uZmlybWF0aW9uID0gc3RlcEZhY3RvcnkodG91clF1aXRDb25maXJtYXRpb24pWzBdO1xuXHRcdHRoaXMudG91ckNvbmZpZyA9IHRvdXJDb25maWc7XG5cdFx0dGhpcy5uYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtb25ib2FyZGluZy13aXphcmQnKTtcblx0XHR0aGlzLm5hdkJhckl0ZW1zID0gW1xuXHRcdFx0Li4udGhpcy5uYXZiYXIucXVlcnlTZWxlY3RvckFsbCgnLmpzLW9uYm9hcmRpbmctd2l6YXJkLXByb2dyZXNzJyksXG5cdFx0XTtcblx0XHR0aGlzLnByZXZpb3VzU3RlcEluZGV4ID0gMDtcblx0fVxuXG5cdG1vZGFsQ29sbGFwc2VIYW5kbGVyKCkge1xuXHRcdGNvbnN0IGN1cnJlbnRTdGVwID0gdGhpcy50b3VyLmN1cnJlbnRTdGVwLmVsO1xuXHRcdGNvbnN0IGJ1dHRvbkNvbGxhcHNlID0gY3VycmVudFN0ZXAucXVlcnlTZWxlY3RvcignLmpzLXRvdXItY29sbGFwc2UnKTtcblx0XHRjb25zdCBpc0NvbGxhcHNlZCA9IFsuLi5jdXJyZW50U3RlcC5jbGFzc0xpc3RdLmluY2x1ZGVzKFxuXHRcdFx0J3NoZXBoZXJkLWVsZW1lbnQtLWNvbGxhcHNlZCdcblx0XHQpO1xuXG5cdFx0Y29uc3QgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzaGVwaGVyZC1idXR0b25fX29wZW4nKTtcblx0XHRleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnanMtc2hlcGhlcmQtZXhwYW5kJyk7XG5cdFx0ZXhwYW5kQnV0dG9uLnRleHRDb250ZW50ID0gX2dldCh3aXphcmRUcmFuc2xhdGlvbnMsICdjb21tb24ub3BlbicpO1xuXG5cdFx0Y29uc3QgdGV4dE9wZW4gPSBidXR0b25Db2xsYXBzZS5xdWVyeVNlbGVjdG9yKCcuanMtc2hlcGhlcmQtZXhwYW5kJyk7XG5cblx0XHRpZiAoaXNDb2xsYXBzZWQpIHtcblx0XHRcdGJ1dHRvbkNvbGxhcHNlLnJlbW92ZUNoaWxkKHRleHRPcGVuKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YnV0dG9uQ29sbGFwc2UuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKTtcblx0XHR9XG5cblx0XHRjdXJyZW50U3RlcC5jbGFzc0xpc3QudG9nZ2xlKFxuXHRcdFx0J3NoZXBoZXJkLWVsZW1lbnQtLWNvbGxhcHNlZCcsXG5cdFx0XHQhaXNDb2xsYXBzZWRcblx0XHQpO1xuXHRcdGN1cnJlbnRTdGVwLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAhaXNDb2xsYXBzZWQpO1xuXHR9O1xuXG5cdGhhbmRsZVF1aXRDb25maXJtYXRpb24oKSB7XG5cdFx0Y29uc3QgcmV0dXJuU3RlcEluZGV4ID0gdGhpcy5wcmV2aW91c1N0ZXBJbmRleDtcblxuXHRcdHRoaXMudG91ci5hZGRTdGVwKHtcblx0XHRcdC4uLnRoaXMuc3RlcFF1aXRDb25maXJtYXRpb24sXG5cdFx0XHRidXR0b25zOiB0aGlzLnN0ZXBRdWl0Q29uZmlybWF0aW9uLnN0ZXBCdXR0b25zKFxuXHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRyZXR1cm5TdGVwSW5kZXhcblx0XHRcdCksXG5cdFx0fSk7XG5cblx0XHR0aGlzLnRvdXIuc2hvdygnc3RlcC1xdWl0LWNvbmZpcm1hdGlvbicsIHRydWUpO1xuXHR9O1xuXG5cdG5hdmJhclZpc2liaWxpdHlIYW5kbGVyKGlzQWN0aXZlKSB7XG5cdFx0dGhpcy5uYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJywgIWlzQWN0aXZlKTtcblx0XHR0aGlzLm5hdmJhci5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgIWlzQWN0aXZlKTtcblx0fTtcblxuXHRuYXZiYXJQcm9ncmVzc0hhbmRsZXIoKSB7XG5cdFx0Y29uc3QgY3VycmVudFN0ZXBQcm9ncmVzcyA9XG5cdFx0XHR0aGlzLnRvdXIuZ2V0Q3VycmVudFN0ZXAoKS5vcHRpb25zLmhpZ2hsaWdodENsYXNzO1xuXG5cdFx0dGhpcy5uYXZCYXJJdGVtcy5mb3JFYWNoKChuYXZCYXJJdGVtKSA9PiB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5hdkJhckl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLW5hdmlnYXRpb24tc3RlcCcpID09PVxuXHRcdFx0XHRjdXJyZW50U3RlcFByb2dyZXNzXG5cdFx0XHQpIHtcblx0XHRcdFx0bmF2QmFySXRlbS5jbGFzc0xpc3QuYWRkKCdvbmJvYXJkaW5nLXdpemFyZF9fc3RlcC0tY3VycmVudCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bmF2QmFySXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdvbmJvYXJkaW5nLXdpemFyZF9fc3RlcC0tY3VycmVudCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdHJlc3RhcnRUb3VyTGlzdGVuZXIoKSB7XG5cdFx0Y29uc3QgcmVzdGFydFRvdXJUcmlnZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXJlc3RhcnQtdG91cicpO1xuXG5cdFx0cmVzdGFydFRvdXJUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy50b3VyLnN0YXJ0KCk7XG5cdFx0XHR0aGlzLm5hdmJhci5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcblx0XHR9KTtcblx0fTtcblxuXHRpbml0VG91cigpIHtcblx0XHRpZiAodGhpcy5uYXZiYXIpIHtcblx0XHRcdHRoaXMudG91ciA9IG5ldyBTaGVwaGVyZC5Ub3VyKHtcblx0XHRcdFx0Li4udGhpcy50b3VyQ29uZmlnLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcCwgc3RlcEluZGV4KSA9PiB7XG5cdFx0XHRcdHRoaXMudG91ci5hZGRTdGVwKHtcblx0XHRcdFx0XHQuLi5zdGVwLFxuXHRcdFx0XHRcdGJ1dHRvbnM6IHN0ZXAuc3RlcEJ1dHRvbnModGhpcywgc3RlcEluZGV4KSxcblx0XHRcdFx0XHR3aGVuOiB7XG5cdFx0XHRcdFx0XHRzaG93OiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRoaXMucHJldmlvdXNTdGVwSW5kZXggPVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMudG91ci5nZXRDdXJyZW50U3RlcCgpLmlkO1xuXHRcdFx0XHRcdFx0XHR0aGlzLm5hdmJhclByb2dyZXNzSGFuZGxlcigpO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnRvdXIub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm5hdmJhclZpc2liaWxpdHlIYW5kbGVyKGZhbHNlKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnRvdXIuc3RhcnQoKTtcblxuXHRcdFx0dGhpcy5yZXN0YXJ0VG91ckxpc3RlbmVyKCk7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdHVzZU1vZGFsT3ZlcmxheTogdHJ1ZSxcblx0Y29uZmlybUNhbmNlbDogZmFsc2UsXG5cdGtleWJvYXJkTmF2aWdhdGlvbjogZmFsc2UsXG5cdGV4aXRPbkVzYzogZmFsc2UsXG5cdGRlZmF1bHRTdGVwT3B0aW9uczoge1xuXHRcdGNsYXNzOiAnb25ib2FyZGluZ1dpemFyZC1wb3B1cCcsXG5cdFx0YXJyb3c6IGZhbHNlLFxuXHRcdGNhbmNlbEljb246IHtcblx0XHRcdGVuYWJsZWQ6IGZhbHNlLFxuXHRcdH0sXG5cdFx0c2Nyb2xsVG86IHtiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJ30sXG5cdFx0bW9kYWxPdmVybGF5T3BlbmluZ1JhZGl1czogNCxcblx0fSxcbn07XG4iLCJpbXBvcnQge1xuXHRwYXltZW50VHlwZUluZGljYXRvcixcblx0bWV0aG9kTG9hZEluZGljYXRvcixcblx0Y3VycmVudFN0ZXBWYWxpZGF0b3IsXG59IGZyb20gJy4uL2hlbHBlcnMvZmlsdGVyTWV0aG9kJztcblxuY29uc3QgcGF5bWVudE1ldGhvZFBheW1lbnRBcGkgPSAnUEFZTUVOVF9BUEknO1xuY29uc3QgcGF5bWVudE1ldGhvZE9yZGVyQXBpID0gJ09SREVSX0FQSSc7XG5jb25zdCBlbnZpcm9tZW50VGVzdCA9ICcwJztcbmNvbnN0IGVudmlyb21lbnRMaXZlID0gJzEnO1xuXG5leHBvcnQgY29uc3Qgc3RlcFBheW1lbnRUeXBlID0ge1xuXHRpZDogJ3N0ZXAtcGF5bWVudC10eXBlJyxcblx0dGV4dDogJ3N0ZXBQYXltZW50VHlwZS50ZXh0Jyxcblx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0aGlnaGxpZ2h0Q2xhc3M6ICdwYXltZW50LXNldHRpbmdzJyxcblx0YXR0YWNoVG86IHtcblx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtcGF5bWVudFR5cGUnLFxuXHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0fSxcblx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzdGVwUGF5bWVudERlc2NyaXB0aW9uID0ge1xuXHRpZDogJ3N0ZXAtcGF5bWVudC1kZXNjcmlwdGlvbicsXG5cdHRleHQ6ICdzdGVwUGF5bWVudERlc2NyaXB0aW9uLnRleHQnLFxuXHRjbGFzc2VzOiAnc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHRhdHRhY2hUbzoge1xuXHRcdGVsZW1lbnQ6ICcuanMtb25ib2FyZGluZ1dpemFyZC1wYXltZW50RGVzY3JpcHRpb24nLFxuXHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0fSxcblx0aGlnaGxpZ2h0Q2xhc3M6ICdwYXltZW50LXNldHRpbmdzJyxcblx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcbn07XG5cbmV4cG9ydCBjb25zdCBzdGVwT3JkZXJBcGkgPSB7XG5cdGlkOiAnc3RlcC1vcmRlci1hcGknLFxuXHRoaWdobGlnaHRDbGFzczogJ3BheW1lbnQtc2V0dGluZ3MnLFxuXHRjbGFzc2VzOiAnc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHR0ZXh0OiAnc3RlcE9yZGVyQXBpLnRleHQnLFxuXHRhdHRhY2hUbzoge1xuXHRcdGVsZW1lbnQ6ICcuanMtb25ib2FyZGluZ1dpemFyZC1wYXltZW50VHlwZScsXG5cdFx0b246ICd0b3Atc3RhcnQnLFxuXHR9LFxuXHRidG5OZXh0Q2xhc3M6ICdzaGVwaGVyZC1idXR0b24tLWFycm93LWRvd24nLFxufTtcblxuZXhwb3J0IGNvbnN0IHN0ZXBRdWl0Q29uZmlybWF0aW9uID0gW1xuXHR7XG5cdFx0aWQ6ICdzdGVwLXF1aXQtY29uZmlybWF0aW9uJyxcblx0XHR0aXRsZTogJ3N0ZXBRdWl0Q29uZmlybWF0aW9uLnRpdGxlJyxcblx0XHR0ZXh0OiAnc3RlcFF1aXRDb25maXJtYXRpb24udGV4dCcsXG5cdFx0aGlnaGxpZ2h0Q2xhc3M6ICdpbnRybycsXG5cdFx0Y3VzdG9tQnV0dG9uczogW1xuXHRcdFx0e1xuXHRcdFx0XHR0ZXh0OiAnc3RlcEJ1dHRvbnMucXVpdENvbmZpcm0nLFxuXHRcdFx0XHRhY3Rpb246IChvbmJvYXJkaW5nV2l6YXJkKSA9PiB7XG5cdFx0XHRcdFx0b25ib2FyZGluZ1dpemFyZC50b3VyLnJlbW92ZVN0ZXAoJ3N0ZXAtcXVpdC1jb25maXJtYXRpb24nKTtcblx0XHRcdFx0XHRvbmJvYXJkaW5nV2l6YXJkLnRvdXIuY29tcGxldGUoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c2Vjb25kYXJ5OiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dGV4dDogJ3N0ZXBCdXR0b25zLnF1aXRDYW5jZWwnLFxuXHRcdFx0XHRhY3Rpb246IChvbmJvYXJkaW5nV2l6YXJkLCBzdGVwSW5kZXgpID0+IHtcblx0XHRcdFx0XHRvbmJvYXJkaW5nV2l6YXJkLnRvdXIuc2hvdyhzdGVwSW5kZXgsIHRydWUpO1xuXHRcdFx0XHRcdG9uYm9hcmRpbmdXaXphcmQudG91ci5yZW1vdmVTdGVwKCdzdGVwLXF1aXQtY29uZmlybWF0aW9uJyk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc3RlcHMgPSBbXG5cdHtcblx0XHRpZDogJ3N0ZXAtc3RhcnQnLFxuXHRcdHRpdGxlOiAnc3RlcFN0YXJ0LnRpdGxlJyxcblx0XHR0ZXh0OiAnc3RlcFN0YXJ0LnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzaGVwaGVyZC1lbGVtZW50LS1maXJzdCcsXG5cdFx0aGlnaGxpZ2h0Q2xhc3M6ICdpbnRybycsXG5cdFx0YnRuQmFja1RleHQ6ICdzdGVwQnV0dG9ucy5za2lwV2l6YXJkJyxcblx0XHRidG5OZXh0VGV4dDogJ3N0ZXBCdXR0b25zLnN0YXJ0V2l6YXJkJyxcblx0XHRidG5Db2xsYXBzZUNsYXNzOiAnZC1ub25lJyxcblx0XHRidG5DbG9zZUNsYXNzOiAnZC1ub25lJyxcblx0fSxcblx0e1xuXHRcdGlkOiAnc3RlcC1tb2xsaWUtY29ubmVjdCcsXG5cdFx0dGl0bGU6ICdzdGVwTW9sbGllQ29ubmVjdC50aXRsZScsXG5cdFx0dGV4dDogJ3N0ZXBNb2xsaWVDb25uZWN0LnRleHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAnaW50cm8nLFxuXHRcdGJ0bkJhY2tUZXh0OiAnc3RlcEJ1dHRvbnMubG9naW5Nb2xsaWVBY2NvdW50Jyxcblx0XHRidG5OZXh0VGV4dDogJ3N0ZXBCdXR0b25zLmNyZWF0ZU1vbGxpZUFjY291bnQnLFxuXHRcdGJ0bkNvbGxhcHNlQ2xhc3M6ICdkLW5vbmUnLFxuXHRcdHVybE1vbGxpZTogJ2h0dHBzOi8vd3d3Lm1vbGxpZS5jb20vZGFzaGJvYXJkJyxcblx0fSxcblx0e1xuXHRcdHNob3dPbjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFN0ZXBWYWxpZGF0b3IoXG5cdFx0XHRcdCcuanMtb25ib2FyZGluZ1dpemFyZC1lbnZpcm9ubWVudCcsXG5cdFx0XHRcdCcucHVzaGFibGUnXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHRpZDogJ3N0ZXAtZW52Jyxcblx0XHR0ZXh0OiAnc3RlcEVudi50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAnYXBpLXNldHRpbmdzJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLWVudmlyb25tZW50Jyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHRcdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG5cdH0sXG5cdHtcblx0XHRzaG93T246IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRTdGVwVmFsaWRhdG9yKFxuXHRcdFx0XHQnLmpzLXR3by1maWVsZHMtdGVzdCAucmVxdWlyZWQuZmllbGQnLFxuXHRcdFx0XHQnLnB1c2hhYmxlJ1xuXHRcdFx0KTtcblx0XHRcdHJldHVybiBwYXltZW50VHlwZUluZGljYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLWVudmlyb25tZW50Jyxcblx0XHRcdFx0ZW52aXJvbWVudFRlc3Rcblx0XHRcdCk7XG5cdFx0fSxcblx0XHRpZDogJ3N0ZXAtYXBpLWtleS10ZXN0Jyxcblx0XHR0ZXh0OiAnc3RlcEFwaUtleS50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAnYXBpLXNldHRpbmdzJyxcblx0XHRidG5OZXh0Q2xhc3M6ICdzaGVwaGVyZC1idXR0b24tLWFycm93LWRvd24nLFxuXHRcdGF0dGFjaFRvOiB7XG5cdFx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtcHJvZmlsZS1hcGknLFxuXHRcdFx0b246ICd0b3Atc3RhcnQnLFxuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHRzaG93T246IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRTdGVwVmFsaWRhdG9yKFxuXHRcdFx0XHQnLmpzLW9uYm9hcmRpbmdXaXphcmQtcHJvZmlsZS1hcGknLFxuXHRcdFx0XHQnLnB1c2hhYmxlJ1xuXHRcdFx0KTtcblx0XHRcdHJldHVybiBwYXltZW50VHlwZUluZGljYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLWVudmlyb25tZW50Jyxcblx0XHRcdFx0ZW52aXJvbWVudExpdmVcblx0XHRcdCk7XG5cdFx0fSxcblx0XHRpZDogJ3N0ZXAtYXBpLWtleS1saXZlJyxcblx0XHR0ZXh0OiAnc3RlcEFwaUtleS50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAnYXBpLXNldHRpbmdzJyxcblx0XHRidG5OZXh0Q2xhc3M6ICdzaGVwaGVyZC1idXR0b24tLWFycm93LWRvd24nLFxuXHRcdGF0dGFjaFRvOiB7XG5cdFx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtcHJvZmlsZS1hcGknLFxuXHRcdFx0b246ICd0b3Atc3RhcnQnLFxuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHRpZDogJ3N0ZXAtY2hlY2tvdXQtY29uZmlnJyxcblx0XHR0ZXh0OiAnc3RlcENoZWNrb3V0Q29uZmlnLnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzdGVwLTYgc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAnc3RvcmUtc2V0dGluZ3MnLFxuXHRcdGJ0bk5leHRUZXh0OiAnc3RlcEJ1dHRvbnMubmV4dCcsXG5cdH0sXG5cdHtcblx0XHRzaG93T246IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRTdGVwVmFsaWRhdG9yKFxuXHRcdFx0XHQnLmpzLW9uYm9hcmRpbmdXaXphcmQtbW9sbGllQ29tcG9uZW50cycsXG5cdFx0XHRcdCcucHVzaGFibGUnXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHRpZDogJ3N0ZXAtbW9sbGllLWNvbXBvbmVudHMnLFxuXHRcdHRleHQ6ICdzdGVwTW9sbGllQ29tcG9uZW50cy50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAnc3RvcmUtc2V0dGluZ3MnLFxuXHRcdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG5cdFx0YXR0YWNoVG86IHtcblx0XHRcdGVsZW1lbnQ6ICcuanMtb25ib2FyZGluZ1dpemFyZC1tb2xsaWVDb21wb25lbnRzJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLXNpbmdsZUNsaWNrJyxcblx0XHRcdFx0Jy5wdXNoYWJsZSdcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdGlkOiAnc3RlcC1tb2xsaWUtcGF5bWVudHMnLFxuXHRcdHRleHQ6ICdzdGVwTW9sbGllUGF5bWVudHMudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3N0b3JlLXNldHRpbmdzJyxcblx0XHRidG5OZXh0Q2xhc3M6ICdzaGVwaGVyZC1idXR0b24tLWFycm93LWRvd24nLFxuXHRcdGF0dGFjaFRvOiB7XG5cdFx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtc2luZ2xlQ2xpY2snLFxuXHRcdFx0b246ICd0b3Atc3RhcnQnLFxuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHRzaG93T246IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRTdGVwVmFsaWRhdG9yKFxuXHRcdFx0XHQnLmpzLW9uYm9hcmRpbmdXaXphcmQtbG9hZC1tZXRob2RzJyxcblx0XHRcdFx0Jy5wdXNoYWJsZSdcblx0XHRcdCk7XG5cdFx0XHRtZXRob2RMb2FkSW5kaWNhdG9yKCcuanMtcGF5bWVudC1tZXRob2Qtbm90LWxvYWRlZCcsICcucHVzaGFibGUnKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLXBheW1lbnRzLWFwaScsXG5cdFx0dGV4dDogJ3N0ZXBNZXRob2RDb25maWcudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3NoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3BheW1lbnQtc2V0dGluZ3MnLFxuXHRcdGJ0bk5leHRUZXh0OiAnc3RlcEJ1dHRvbnMubmV4dCcsXG5cdFx0YXR0YWNoVG86IHtcblx0XHRcdGVsZW1lbnQ6ICcuanMtb25ib2FyZGluZ1dpemFyZC1sb2FkLW1ldGhvZHMnLFxuXHRcdFx0b246ICd0b3Atc3RhcnQnLFxuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHRzaG93T246IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRTdGVwVmFsaWRhdG9yKFxuXHRcdFx0XHQnLmpzLW9uYm9hcmRpbmdXaXphcmQtcGF5bWVudE5hbWUnLFxuXHRcdFx0XHQnLnB1c2hhYmxlJ1xuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLXBheW1lbnQtdGl0bGUnLFxuXHRcdHRleHQ6ICdzdGVwUGF5bWVudFRpdGxlLnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzdGVwLTkgc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAncGF5bWVudC1zZXR0aW5ncycsXG5cdFx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLXBheW1lbnROYW1lJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLWN1c3RvbWl6ZU1ldGhvZEltYWdlJyxcblx0XHRcdFx0Jy5wdXNoYWJsZSdcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9LFxuXHRcdGlkOiAnc3RlcC1pbWFnZS11cGxvYWQnLFxuXHRcdHRleHQ6ICdzdGVwSW1hZ2VVcGxvYWQudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3N0ZXAtMTQgc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAncGF5bWVudC1zZXR0aW5ncycsXG5cdFx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLWN1c3RvbWl6ZU1ldGhvZEltYWdlIGlucHV0Jyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLWNvdW50cnlSZXN0cmljdGlvbicsXG5cdFx0XHRcdCcucHVzaGFibGUnXG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblx0XHRpZDogJ3N0ZXAtY291bnRyeS1yZXN0cmljdGlvbicsXG5cdFx0dGV4dDogJ3N0ZXBDb3VudHJ5UmVzdHJpY3Rpb24udGV4dCcsXG5cdFx0Y2xhc3NlczogJ3N0ZXAtMTIgc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAncGF5bWVudC1zZXR0aW5ncycsXG5cdFx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1jb3VudHJ5UmVzdHJpY3Rpb25zJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0c2hvd09uOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50U3RlcFZhbGlkYXRvcihcblx0XHRcdFx0Jy5qcy1vbmJvYXJkaW5nV2l6YXJkLVBheW1lbnRNZXRob2QnLFxuXHRcdFx0XHQnLnB1c2hhYmxlJ1xuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cdFx0aWQ6ICdzdGVwLXBheW1lbnQtbWV0aG9kJyxcblx0XHR0ZXh0OiAnc3RlcFBheW1lbnRNZXRob2QudGV4dCcsXG5cdFx0Y2xhc3NlczogJ3N0ZXAtMTIgc2hlcGhlcmQtZWxlbWVudC0tYWxpZ24tcmlnaHQnLFxuXHRcdGhpZ2hsaWdodENsYXNzOiAncGF5bWVudC1zZXR0aW5ncycsXG5cdFx0YnRuTmV4dENsYXNzOiAnc2hlcGhlcmQtYnV0dG9uLS1hcnJvdy1kb3duJyxcblx0XHRhdHRhY2hUbzoge1xuXHRcdFx0ZWxlbWVudDogJy5qcy1vbmJvYXJkaW5nV2l6YXJkLVBheW1lbnRNZXRob2QnLFxuXHRcdFx0b246ICd0b3Atc3RhcnQnLFxuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHRzaG93T246IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRTdGVwVmFsaWRhdG9yKFxuXHRcdFx0XHQnLmpzLW9uYm9hcmRpbmdXaXphcmQtb3JkZXItbnVtYmVyJyxcblx0XHRcdFx0Jy5wdXNoYWJsZSdcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gcGF5bWVudFR5cGVJbmRpY2F0b3IoXG5cdFx0XHRcdCcjc3lsaXVzX3BheW1lbnRfbWV0aG9kX2dhdGV3YXlDb25maWdfbW9sbGllR2F0ZXdheUNvbmZpZ18wX3BheW1lbnRUeXBlJyxcblx0XHRcdFx0cGF5bWVudE1ldGhvZFBheW1lbnRBcGlcblx0XHRcdCk7XG5cdFx0fSxcblx0XHRpZDogJ3N0ZXAtb3JkZXItbnVtYmVyJyxcblx0XHR0ZXh0OiAnc3RlcE9yZGVyTnVtYmVyLnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzdGVwLTEyIHNoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3BheW1lbnQtc2V0dGluZ3MnLFxuXHRcdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG5cdFx0YXR0YWNoVG86IHtcblx0XHRcdGVsZW1lbnQ6ICcuanMtb25ib2FyZGluZ1dpemFyZC1vcmRlci1udW1iZXInLFxuXHRcdFx0b246ICd0b3Atc3RhcnQnLFxuXHRcdH0sXG5cdH0sXG5cdHtcblx0XHRzaG93T246IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBwYXltZW50VHlwZUluZGljYXRvcihcblx0XHRcdFx0JyNzeWxpdXNfcGF5bWVudF9tZXRob2RfZ2F0ZXdheUNvbmZpZ19tb2xsaWVHYXRld2F5Q29uZmlnXzBfcGF5bWVudFR5cGUnLFxuXHRcdFx0XHRwYXltZW50TWV0aG9kT3JkZXJBcGlcblx0XHRcdCk7XG5cdFx0fSxcblx0XHRpZDogJ3N0ZXAtb3JkZXItYXBpJyxcblx0XHR0ZXh0OiAnc3RlcE9yZGVyc0FQSS50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc3RlcC0xMiBzaGVwaGVyZC1lbGVtZW50LS1hbGlnbi1yaWdodCcsXG5cdFx0aGlnaGxpZ2h0Q2xhc3M6ICdwYXltZW50LXNldHRpbmdzJyxcblx0XHRidG5OZXh0Q2xhc3M6ICdzaGVwaGVyZC1idXR0b24tLWFycm93LWRvd24nLFxuXHRcdGF0dGFjaFRvOiB7XG5cdFx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtUGF5bWVudE1ldGhvZCcsXG5cdFx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdFx0fSxcblx0fSxcblxuXHR7XG5cdFx0aWQ6ICdzdGVwLWZlZXMnLFxuXHRcdHRleHQ6ICdzdGVwRmVlcy50ZXh0Jyxcblx0XHRjbGFzc2VzOiAnc3RlcC0xMyBzaGVwaGVyZC1lbGVtZW50LS1hbGlnbi1yaWdodCcsXG5cdFx0aGlnaGxpZ2h0Q2xhc3M6ICdwYXltZW50LXNldHRpbmdzJyxcblx0XHRidG5OZXh0Q2xhc3M6ICdzaGVwaGVyZC1idXR0b24tLWFycm93LWRvd24nLFxuXHRcdGF0dGFjaFRvOiB7XG5cdFx0XHRlbGVtZW50OiAnLmpzLW9uYm9hcmRpbmdXaXphcmQtcGF5bWVudEZlZScsXG5cdFx0XHRvbjogJ3RvcC1zdGFydCcsXG5cdFx0fSxcblx0fSxcblx0e1xuXHRcdGlkOiAnc2F2ZScsXG5cdFx0dGV4dDogJ3N0ZXBTYXZlLnRleHQnLFxuXHRcdGNsYXNzZXM6ICdzdGVwLTEzIHNoZXBoZXJkLWVsZW1lbnQtLWFsaWduLXJpZ2h0Jyxcblx0XHRoaWdobGlnaHRDbGFzczogJ3BheW1lbnQtc2V0dGluZ3MnLFxuXHRcdGJ0bk5leHRDbGFzczogJ3NoZXBoZXJkLWJ1dHRvbi0tYXJyb3ctZG93bicsXG5cdFx0YXR0YWNoVG86IHtcblx0XHRcdGVsZW1lbnQ6ICcudWkuYnV0dG9uczpub3QoLmpzLWhlYWRlci1idG4pJyxcblx0XHRcdG9uOiAndG9wLXN0YXJ0Jyxcblx0XHR9LFxuXHR9LFxuXHR7XG5cdFx0aWQ6ICdzdGVwLWZpbmlzaC13aXphcmQnLFxuXHRcdHRpdGxlOiAnc3RlcEZpbmlzaFdpemFyZC50aXRsZScsXG5cdFx0dGV4dDogJ3N0ZXBGaW5pc2hXaXphcmQudGV4dCcsXG5cdFx0aGlnaGxpZ2h0Q2xhc3M6ICdwYXltZW50LXNldHRpbmdzJyxcblx0XHRidG5CYWNrQ2xhc3M6ICdkLW5vbmUnLFxuXHRcdGJ0bk5leHRDbGFzczogJ21yLWF1dG8nLFxuXHRcdGJ0bk5leHRUZXh0OiAnc3RlcEJ1dHRvbnMuZmluaXNoV2l6YXJkJyxcblx0XHRidG5Db2xsYXBzZUNsYXNzOiAnZC1ub25lJyxcblx0XHRidG5DbG9zZUNsYXNzOiAnZC1ub25lJyxcblx0fSxcbl07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cdHN0ZXBTdGFydDoge1xuXHRcdHRpdGxlOiAnTGV0IG1lIGhlbHAgeW91Jyxcblx0XHR0ZXh0OiAnVGhhbmsgeW91IGZvciBpbnN0YWxsaW5nIE1vbGxpZSBmb3IgcGF5bWVudCBzZXJ2aWNlcy4gVGhpcyBndWlkZSB3aWxsIHRha2UgeW91IHRocm91Z2ggdGhlIGNvbmZpZ3VyYXRpb24gc2V0LXVwLicsXG5cdH0sXG5cdHN0ZXBNb2xsaWVDb25uZWN0OiB7XG5cdFx0dGl0bGU6ICdDb25uZWN0IHRvIHlvdXIgTW9sbGllIGFjY291bnQnLFxuXHRcdHRleHQ6IFwiVG8gc3luYyB0aGUgTW9sbGllIHBsdWdpbiB0byB5b3VyIHdlYnNob3AgeW91J2xsIG5lZWQgTW9sbGllIEFQSSBrZXlzIGFuZCBQcm9maWxlIElELlwiLFxuXHR9LFxuXHRzdGVwRW52OiB7XG5cdFx0dGV4dDogXCJOb3cgdGhhdCB5b3UncmUgY29ubmVjdGVkIHRvIE1vbGxpZSB3ZSB3aWxsIGNvbmZpZ3VyZSB0aGUgZW52aXJvbm1lbnQgYW5kIGNyZWRlbnRpYWxzLjxicj48YnI+VGVzdCB3aWxsIGJlIHRoZSBkZWZhdWx0IGVudmlyb25tZW50IGluIHRoZSBwbHVnaW4uPGJyPjxicj5Zb3Ugb25seSBuZWVkIHRvIGRvIHRoZSBjb25maWd1cmF0aW9uIG9uY2UgdG8gaGF2ZSBURVNUICsgTElWRSBlbnZpcm9ubWVudHMgYXZhaWxhYmxlLiBUcnkgZWFzaWx5IHRvZ2dpbmcgYmV0d2VlbiB0aGUgdHdvLlwiLFxuXHR9LFxuXHRzdGVwQXBpS2V5OiB7XG5cdFx0dGV4dDogJ0ZpbGwgaW4geW91ciBjb3JyZWN0IGRldGFpbHMgYW5kIGNsaWNrIFwiVEVTVCBBUEkgS2V5XCIgdGhpcyB3aWxsIHJldHVybiBhIHN1Y2Nlc3NmdWwgb3IgZmFpbGVkIHJlc3VsdCBmb3IgYm90aCB0aGUgTElWRSBhbmQgVEVTVCBlbnZpcm9ubWVudHMnLFxuXHR9LFxuXHRzdGVwQ2hlY2tvdXRDb25maWc6IHtcblx0XHR0ZXh0OiBcIk5leHQsIHdlJ2xsIHNldC11cCBrZXkgc2V0dGluZ3MgZm9yIHRoZSBjaGVja291dCBzY3JlZW4gZGlzcGxheSBvbiB5b3VyIHdlYnNob3AuXCIsXG5cdH0sXG5cdHN0ZXBNb2xsaWVDb21wb25lbnRzOiB7XG5cdFx0dGV4dDogYEVuYWJsaW5nIGNvbXBvbmVudHMsIGFsbG93cyB5b3UgdG8gYWRkIHRoZSBmaWVsZHMgbmVlZGVkIGZvciBjcmVkaXQgY2FyZCBob2xkZXIgZGF0YSB0byB5b3VyIG93biBjaGVja291dC48YnI+PGJyPklmIHlvdSBzZWxlY3QgTk8sIGN1c3RvbWVycyB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gdGhlIE1vbGxpZSBjaGVja291dCBwYWdlLjxicj48YnI+TGVhcm4gbW9yZSBhYm91dCBNb2xsaWUgY29tcG9uZW50cyA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubW9sbGllLmNvbS9lbi9uZXdzL3Bvc3QvYmV0dGVyLWNoZWNrb3V0LWZsb3dzLXdpdGgtbW9sbGllLWNvbXBvbmVudHNcIj5oZXJlPC9hPi5gLFxuXHR9LFxuXHRzdGVwTW9sbGllUGF5bWVudHM6IHtcblx0XHR0ZXh0OiBgRW5hYmxpbmcgc2luZ2xlIGNsaWNrIHBheW1lbnRzIHJlbWVtYmVycyB5b3VyIGNvbnN1bWVyJ3MgcGF5bWVudCBwcmVmZXJlbmNlcyBpbiBvcmRlciB0byBleHBlZGl0ZSBmb2xsb3ctdXAgcGF5bWVudHMuIFlvdXIgY29uc3VtZXIgZG9lcyBub3QgaGF2ZSB0byBwZXJmb3JtIGFueSBhZGRpdGlvbmFsIGFjdGlvbnMgdG8gZW5qb3kgcXVpY2sgYW5kIGVhc3kgcGF5bWVudHMuPGJyPjxicj5MZWFybiBtb3JlIGFib3V0IHNpbmdsZSBjbGljayBwYXltZW50cyA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9oZWxwLm1vbGxpZS5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMTE1MDAwNjcxMjQ5LVdoYXQtYXJlLXNpbmdsZS1jbGljay1wYXltZW50cy1hbmQtaG93LWRvZXMtaXQtd29yay1cIj5oZXJlPC9hPi5gLFxuXHR9LFxuXHRzdGVwTWV0aG9kQ29uZmlnOiB7XG5cdFx0dGV4dDogXCJOb3cgaXQncyB0aW1lIHRvIGN1c3RvbWl6ZSBmZWF0dXJlcyBmb3IgaW5kaXZpZHVhbCBwYXltZW50IG1ldGhvZHMuPGJyPjxicj5GaXJzdCwgc2VsZWN0IHRoZSBsb2FkIG1ldGhvZHMgYnV0dG9uLiBPbmx5IHRoZSBtZXRob2RzIHRoYXQgYXJlIGVuYWJsZWQgaW4geW91ciBNb2xsaWUgYWNjb3VudCB3aWxsIGRpc3BsYXkgaGVyZS48YnI+PGJyPlRoZW4geW91IHVzZSB0aGUgZW5hYmxlL2Rpc2FibGUgc2VsZWN0b3IgdG8gY29udHJvbCB3aGljaCB3aWxsIHNob3cgb24geW91ciB3ZWJzaG9wIGNoZWNrb3V0Ljxicj48YnI+Tk9URTogSXQgaXMgbm90IHBvc3NpYmxlIHRvIGNvbnRpbnVlIHRoZSBndWlkZWQgb25ib2FyZGluZyB3aXRob3V0IGxvYWRpbmcgcGF5bWVudCBtZXRob2RzLiBcIixcblx0fSxcblx0c3RlcE1ldGhvZFJlcXVpcmVkOiB7XG5cdFx0dGV4dDogJ1RoZSBsb2FkZWQgbWV0aG9kcyBhcmUgcmVxdWlyZWQgdG8gY29tcGxldGUgb25ib2FyZCB3aXphcmQgYW5kIG1vdmUgZm9yd2FyZCwgcGxlYXNlIGxvYWQgbWV0aG9kcyBieSBjbGlja2luZyBcIkxvYWQgTWV0aG9kc1wiIGJ1dHRvbiBhbmQgY29tZSBiYWNrIHRvIGNvbXBsZXRlIHRoaXMgdHV0b3JpYWwnLFxuXHR9LFxuXHRzdGVwRXJyb3JUaXRsZToge1xuXHRcdHRleHQ6ICdPbmJvYXJkaW5nIEFzc2lzdGFudCBXaXphcmQgLSBFbmRlZCBVcCcsXG5cdH0sXG5cdHN0ZXBFcnJvckRlc2NyaXB0aW9uOiB7XG5cdFx0dGV4dDogJ1RoZSByZXF1aXJlZCBhY3Rpb24gd2FzIG5vdCBwZXJmb3JtZWQnLFxuXHR9LFxuXHRzdGVwUGF5bWVudFRpdGxlOiB7XG5cdFx0dGV4dDogJ0ZvciBlYWNoIG1ldGhvZCwgeW91IGNhbiBlbnRlciBhIGN1c3RvbSB0aXRsZSBoZXJlLiBJdCB3aWxsIGJlIGRpc3BsYXllZCBvbiB5b3VyIHdlYnNob3AgY2hlY2tvdXQgcGFnZS4nLFxuXHR9LFxuXHRzdGVwSW1hZ2VVcGxvYWQ6IHtcblx0XHR0ZXh0OiAnVHJ5IHVwbG9hZGluZyBhIGN1c3RvbSBpbWFnZSBmb3IgdGhlIHBheW1lbnQgbWV0aG9kIGljb24uIFRoaXMgd2lsbCBiZSBzaG93biBpbiB0aGUgd2Vic2hvcCBjaGVja291dCBwYWdlLicsXG5cdH0sXG5cdHN0ZXBDb3VudHJ5UmVzdHJpY3Rpb246IHtcblx0XHR0ZXh0OiAnSGVyZSB5b3UgY2FuIGNyZWF0ZSBmaWx0ZXJzIGZvciBjb3VudHJ5IHNwZWNpZmljIHBheW1lbnQgbWV0aG9kcyAtIGZvciBleGFtcGxlLCBpZiB5b3Ugd2FudCBpREVBTCBvbmx5IHRvIHNob3cgZm9yIE5ldGhlcmxhbmRzIGN1c3RvbWVycyB5b3UgY2hvb3NlIFwiU2VsZWN0IENvdW50cmllc1wiIGFuZCBzZWxlY3QgTmV0aGVybGFuZHMuJyxcblx0fSxcblx0c3RlcFBheW1lbnRNZXRob2Q6IHtcblx0XHR0ZXh0OiAnUGVyIG1ldGhvZCwgeW91IGNhbiBzZWxlY3Qgd2hpY2ggTW9sbGllIEFQSSB0byB1c2UgdG8gY3JlYXRlIHBheW1lbnRzLiBDbGljayA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9kb2NzLm1vbGxpZS5jb20vb3JkZXJzL3doeS11c2Utb3JkZXJzXCI+aGVyZTwvYT4gdG8gcmVhZCBhYm91dCB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBPcmRlcnMgYW5kIFBheW1lbnRzIEFQSS4nLFxuXHR9LFxuXHRzdGVwT3JkZXJOdW1iZXI6IHtcblx0XHR0ZXh0OiAnV2hlbiB1c2luZyBQYXltZW50cyBBUEkgeW91IG1heSB3YW50IGFkZGl0aW9uYWwgZGV0YWlscyB0byBoZWxwIHlvdSBtYXRjaCBwYXltZW50cyB3aXRoIGN1c3RvbWVyIG9yZGVycyAtLSB5b3UgY2FuIGVudGVyIHRob3NlIHZhbHVlcyBoZXJlIGJ1dCBtYWtlIHN1cmUgdG8gdXNlIHRoZSBjb3JyZWN0IHRhZ3MgcHJvdmlkZWQgaW4gdGhlIHRleHQgYmVsb3cnLFxuXHR9LFxuXHRzdGVwT3JkZXJzQVBJOiB7XG5cdFx0dGV4dDogJ1RoaXMgaXMgTW9sbGllIHN1Z2dlc3RlZCBBUEkgdG8gdXNlIGZvciB3ZWJzaG9wcyBiZWNhdXNlIGl0IGFsbG93cyB5b3UgdG8gY3JlYXRlIOKAnG9yZGVyc+KAnS4gQW4gb3JkZXIgY29udGFpbnMgdGhlIHBlcnNvbmFsIGluZm9ybWF0aW9uIG9mIGEgY3VzdG9tZXIgKGUuZy4gYWRkcmVzcykgYW5kIHByb2R1Y3RzIHRoYXQgdGhlIGN1c3RvbWVyIG9yZGVyZWQuIFdoZW4gYW4gb3JkZXIgaXMgbWFkZSwgYSBjb3JyZXNwb25kaW5nIHBheW1lbnQgd2lsbCBiZSBjcmVhdGVkIGF1dG9tYXRpY2FsbHkuJyxcblx0fSxcblx0c3RlcFBheW1lbnRzQVBJOiB7XG5cdFx0dGV4dDogJ1BheW1lbnRzIEFQSSA8YnI+Tm90ZTogUGF5bWVudHMgQVBJIGNhbiBub3QgYmUgdXNlZCBmb3IgbWV0aG9kcyBzdWNoIGFzIEtsYXJuYScsXG5cdH0sXG5cdHN0ZXBGZWVzOiB7XG5cdFx0dGV4dDogJ0luIGNhc2UgeW91IGhhdmUgZmVlcyB0aGF0IHlvdSBhcmUgcGFzc2luZyBvbiB0byB0aGUgY29uc3VtZXIsIHlvdSBjYW4gYWRkIHRoZW0gPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vaGVscC5tb2xsaWUuY29tL2hjL2VuLXVzL2FydGljbGVzLzM2MDAxMjU2NDQ1NC1DYW4tSS1wYXNzLW92ZXItdGhlLWNvc3RzLWZvci10aGUtdXNlLW9mLWEtcGF5bWVudC1tZXRob2QtdG8tbXktY3VzdG9tZXJzLVwiPmhlcmU8L2E+Jyxcblx0fSxcblx0c3RlcFNhdmU6IHtcblx0XHR0ZXh0OiAnUmVtZWJlciB0byBzYXZlIHlvdXIgY29uZmlndXJhdGlvbnMuICcsXG5cdH0sXG5cdHN0ZXBGaW5pc2hXaXphcmQ6IHtcblx0XHR0aXRsZTogJzxpIGNsYXNzPVwiaWNvbiBjaGVjayBjaXJjbGVcIj48L2k+IFlvdVxcJ3JlIGFsbCBzZXQhJyxcblx0XHR0ZXh0OiBcIllvdSBjYW4gbm93IGF0dGVtcHQgYSBjdXN0b21lciBvcmRlciBvbiB5b3VyIHdlYnNpdGUuXCIsXG5cdH0sXG5cdHN0ZXBRdWl0Q29uZmlybWF0aW9uOiB7XG5cdFx0dGl0bGU6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcXVpdCA/Jyxcblx0XHR0ZXh0OiBcIllvdSdyZSBhbGwgZG9uZSwgeW91IGNhbiBub3cgYXR0ZW1wdCBhIGNvbnN1bWVyIG9yZGVyIG9yIHlvdXIgd2Vic2l0ZVwiLFxuXHR9LFxuXHRzdGVwUGF5bWVudFR5cGU6IHtcblx0XHR0ZXh0OiAnV2hlbiB1c2luZyBQYXltZW50cyBBUEkgeW91IG1heSB3YW50IGFkZGl0aW9uYWwgZGV0YWlscyB0byBoZWxwIHlvdSBtYXRjaCBwYXltZW50cyB3aXRoIGN1c3RvbWVyIG9yZGVycyAtLSB5b3UgY2FuIGVudGVyIHRob3NlIHZhbHVlcyBoZXJlIGJ1dCBtYWtlIHN1cmUgdG8gdXNlIHRoZSBjb3JyZWN0IHRhZ3MgcHJvdmlkZSBpbiB0aGUgdGV4dCBiZWxvdycsXG5cdH0sXG5cdHN0ZXBQYXltZW50RGVzY3JpcHRpb246IHtcblx0XHR0ZXh0OiAnQ2hvb3NlIFBheW1lbnRzIEFQSSBMZWFybiBhYm91dCB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIE9yZGVycyBBUEkgb3IgdGhlIFBheW1lbnRzIEFQSScsXG5cdH0sXG5cdHN0ZXBPcmRlckFwaToge1xuXHRcdHRleHQ6XG5cdFx0XHQnU2VsZWN0IE9yZGVycyBBUEkgLSB0aGlzIGlzIE1vbGxpZVxcbicgK1xuXHRcdFx0J3N1Z2dlc3RlZCBBUEkgdG8gdXNlIGZvciB3ZWJzaG9wcyBiL2MgaXQgYWxsb3dzIHlvdSB0byBjcmVhdGUg4oCcb3JkZXJz4oCdLiBBbiBvcmRlciBjb250YWlucyB0aGUgcGVyc29uYWwgaW5mb3JtYXRpb24gb2YgYSBjdXN0b21lciAoZS5nLiBhZGRyZXNzKSBhbmQgcHJvZHVjdHMgdGhhdCB0aGUgY3VzdG9tZXIgb3JkZXJlZC4gV2hlbiBhbiBvcmRlciBpcyBtYWRlLCBhIGNvcnJlc3BvbmRpbmcgcGF5bWVudCB3aWxsIGJlIGNyZWF0ZWQgYXV0b21hdGljYWxseS4nLFxuXHR9LFxuXHRzdGVwQnV0dG9uczoge1xuXHRcdGdvQmFjazogJ0dvIGJhY2snLFxuXHRcdHNraXBXaXphcmQ6ICdTa2lwIHRoaXMsIEkga25vdyBob3cgaXQgd29ya3MnLFxuXHRcdHN0YXJ0V2l6YXJkOlxuXHRcdFx0J1N0YXJ0IG9uYm9hcmRpbmcgYXNzaXN0YW50IDxpIGNsYXNzPVwiaWNvbiBhbmdsZSByaWdodFwiPjwvaT4nLFxuXHRcdGxvZ2luTW9sbGllQWNjb3VudDogJ0xvZ2luIHRvIG15IGFjY291bnQnLFxuXHRcdG5leHRXaXRoQXJyb3c6ICdOZXh0IDxpIGNsYXNzPVwiaWNvbiBhbmdsZSByaWdodFwiPjwvaT4nLFxuXHRcdG5leHQ6ICdOZXh0Jyxcblx0XHRjcmVhdGVNb2xsaWVBY2NvdW50OlxuXHRcdFx0J0NyZWF0ZSBhIE1vbGxpZSBhY2NvdW50IDxpIGNsYXNzPVwiaWNvbiBhbmdsZSByaWdodFwiPjwvaT4nLFxuXHRcdGZpbmlzaFdpemFyZDpcblx0XHRcdCdTdGFydCB1c2luZyBNb2xsaWUgPGkgY2xhc3M9XCJpY29uIGFuZ2xlIHJpZ2h0XCI+PC9pPicsXG5cdFx0cXVpdENvbmZpcm06ICdRdWl0IHRoZSBvbmJvYXJkaW5nIGFzc2lzdGFudCcsXG5cdFx0cXVpdENhbmNlbDogJ0NvbnRpbnVlIG9uYm9hcmRpbmcgPGkgY2xhc3M9XCJpY29uIGFuZ2xlIHJpZ2h0XCI+PC9pPicsXG5cdH0sXG5cdGNvbW1vbjoge1xuXHRcdG9wZW46ICdPcGVuJyxcblx0fSxcbn07XG4iLCJleHBvcnQgY29uc3QgcGF5bWVudFR5cGVJbmRpY2F0b3IgPSAoaXRlbSwgZXhwZWN0ZWRWYWx1ZSkgPT4ge1xuXHRjb25zdCBpbmRpY2F0ZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpdGVtKTtcblx0Y29uc3QgaW5kaWNhdGVkSXRlbVZhbHVlID0gaW5kaWNhdGVkSXRlbS52YWx1ZTtcblxuXHRyZXR1cm4gaW5kaWNhdGVkSXRlbVZhbHVlID09PSBleHBlY3RlZFZhbHVlO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ldGhvZExvYWRJbmRpY2F0b3IgPSAoaXRlbSwgbWVzc2FnZUNvbnRhaW5lcikgPT4ge1xuXHRjb25zdCBpbmRpY2F0ZWRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpdGVtKTtcblx0Y29uc3QgbWVzc2FnZVdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVzc2FnZUNvbnRhaW5lcik7XG5cblx0aWYgKGluZGljYXRlZEl0ZW0pIHtcblx0XHRtZXNzYWdlV2luZG93LmNsYXNzTGlzdC5hZGQoJ3N0ZXAtbmV4dC1kaXNhYmxlZCcpO1xuXHR9IGVsc2Uge1xuXHRcdG1lc3NhZ2VXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnc3RlcC1uZXh0LWRpc2FibGVkJyk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUZpZWxkcyA9IChlbGVtZW50cywgbWVzc2FnZUNvbnRhaW5lcikgPT4ge1xuXHRjb25zdCBlcnJvcnMgPSBbXTtcblxuXHRlbGVtZW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0aWYgKCFpdGVtLnZhbHVlKSB7XG5cdFx0XHRlcnJvcnMucHVzaChpdGVtKTtcblx0XHR9XG5cdH0pO1xuXG5cdGlmIChlcnJvcnMuZXZlcnkoKGVsKSA9PiBlbCA9PT0gbnVsbCkpIHtcblx0XHRtZXNzYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3N0ZXAtbmV4dC1kaXNhYmxlZCcpO1xuXHR9IGVsc2Uge1xuXHRcdG1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc3RlcC1uZXh0LWRpc2FibGVkJyk7XG5cdH1cbn07XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50U3RlcFZhbGlkYXRvciA9IChlbGVtZW50LCBwb3B1cCkgPT4ge1xuXHRjb25zdCB2YWxpZGF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcblx0Y29uc3QgdmFsaWRhdGlvbkVsZW1lbnRzID0gdmFsaWRhdGlvbkNvbnRhaW5lci5wYXJlbnROb2RlXG5cdFx0LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0Om5vdChbdHlwZT1cImZpbGVcIl0pOm5vdChbdHlwZT1cInN1Ym1pdFwiXSk6bm90KGRpc2FibGVkKTpub3QoW3N0eWxlKj1cImRpc3BsYXk6IG5vbmVcIl0pLFxuXHRcdHNlbGVjdDpub3QoZGlzYWJsZWQpOm5vdChbc3R5bGUqPVwiZGlzcGxheTogbm9uZTtcIl0pYCk7XG5cdGNvbnN0IG1lc3NhZ2VXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwKTtcblxuXHRpZiAodmFsaWRhdGlvbkVsZW1lbnRzICYmIHZhbGlkYXRpb25FbGVtZW50cy5sZW5ndGggIT0gMCkge1xuXHRcdHZhbGlkYXRlRmllbGRzKHZhbGlkYXRpb25FbGVtZW50cywgbWVzc2FnZVdpbmRvdyk7XG5cdFx0dmFsaWRhdGlvbkVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcblx0XHRcdFx0dmFsaWRhdGVGaWVsZHModmFsaWRhdGlvbkVsZW1lbnRzLCBtZXNzYWdlV2luZG93KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59O1xuIiwiaW1wb3J0IF9nZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5cbmltcG9ydCB7IHN0ZXBzIH0gZnJvbSAnLi4vY29uZmlnL3N0ZXBzJztcbmltcG9ydCB3aXphcmRUcmFuc2xhdGlvbnMgZnJvbSAnLi4vY29uZmlnL3dpemFyZFRyYW5zbGF0aW9ucyc7XG5cbmNvbnN0IGhhbmRsZVN0ZXBCdXR0b25zID0gKG9uYm9hcmRpbmdXaXphcmQsIHN0ZXBJbmRleCwgc3RlcCkgPT4ge1xuXHRpZiAoc3RlcC5jdXN0b21CdXR0b25zKSB7XG5cdFx0cmV0dXJuIHN0ZXAuY3VzdG9tQnV0dG9ucy5tYXAoKGN1c3RvbUJ1dHRvbikgPT4gKHtcblx0XHRcdC4uLmN1c3RvbUJ1dHRvbixcblx0XHRcdHRleHQ6IF9nZXQod2l6YXJkVHJhbnNsYXRpb25zLCBjdXN0b21CdXR0b24udGV4dCksXG5cdFx0XHRhY3Rpb246ICgpID0+IGN1c3RvbUJ1dHRvbi5hY3Rpb24ob25ib2FyZGluZ1dpemFyZCwgc3RlcEluZGV4KSxcblx0XHR9KSk7XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdHtcblx0XHRcdHRleHQ6ICc8aSBjbGFzcz1cImNsb3NlIGljb25cIj48L2k+Jyxcblx0XHRcdGFjdGlvbjogKCkgPT4ge1xuXHRcdFx0XHRvbmJvYXJkaW5nV2l6YXJkLmhhbmRsZVF1aXRDb25maXJtYXRpb24oKTtcblx0XHRcdH0sXG5cdFx0XHRjbGFzc2VzOiBgc2hlcGhlcmQtYnV0dG9uLS1jbG9zZSAke3N0ZXAuYnRuQ2xvc2VDbGFzcyB8fCAnJ31gLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogJzxpIGNsYXNzPVwiYXJyb3cgZG93biBpY29uXCI+PC9pPicsXG5cdFx0XHRhY3Rpb246ICgpID0+IG9uYm9hcmRpbmdXaXphcmQubW9kYWxDb2xsYXBzZUhhbmRsZXIoKSxcblx0XHRcdGNsYXNzZXM6IGBzaGVwaGVyZC1idXR0b24tLWNvbGxhcHNlIGpzLXRvdXItY29sbGFwc2UgJHtcblx0XHRcdFx0c3RlcC5idG5Db2xsYXBzZUNsYXNzIHx8ICcnXG5cdFx0XHR9YCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IHN0ZXAuYnRuQmFja1RleHRcblx0XHRcdFx0PyBfZ2V0KHdpemFyZFRyYW5zbGF0aW9ucywgc3RlcC5idG5CYWNrVGV4dClcblx0XHRcdFx0OiBfZ2V0KHdpemFyZFRyYW5zbGF0aW9ucywgJ3N0ZXBCdXR0b25zLmdvQmFjaycpLFxuXHRcdFx0c2Vjb25kYXJ5OiB0cnVlLFxuXHRcdFx0Y2xhc3NlczogYCR7c3RlcC5idG5CYWNrQ2xhc3MgfHwgJyd9YCxcblx0XHRcdGFjdGlvbigpIHtcblx0XHRcdFx0Y29uc3QgdG91ciA9IG9uYm9hcmRpbmdXaXphcmQudG91cjtcblxuXHRcdFx0XHRpZiAoc3RlcEluZGV4ID09PSAwKSB7XG5cdFx0XHRcdFx0dG91ci5jb21wbGV0ZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChzdGVwLnVybE1vbGxpZSkge1xuXHRcdFx0XHRcdFx0d2luZG93Lm9wZW4oYCR7c3RlcC51cmxNb2xsaWV9L3NpZ25pbmAsICdfYmxhbmsnKTtcblx0XHRcdFx0XHRcdHRvdXIubmV4dCgpO1xuXG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dG91ci5iYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBzdGVwLmJ0bk5leHRUZXh0XG5cdFx0XHRcdD8gX2dldCh3aXphcmRUcmFuc2xhdGlvbnMsIHN0ZXAuYnRuTmV4dFRleHQpXG5cdFx0XHRcdDogX2dldCh3aXphcmRUcmFuc2xhdGlvbnMsICdzdGVwQnV0dG9ucy5uZXh0V2l0aEFycm93JyksXG5cdFx0XHRjbGFzc2VzOiBgJHtzdGVwLmJ0bk5leHRDbGFzcyB8fCAnJ31gLFxuXHRcdFx0YWN0aW9uKCkge1xuXHRcdFx0XHRjb25zdCB0b3VyID0gb25ib2FyZGluZ1dpemFyZC50b3VyO1xuXG5cdFx0XHRcdGlmIChzdGVwSW5kZXggPT09IG9uYm9hcmRpbmdXaXphcmQuc3RlcHMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdHRvdXIuY29tcGxldGUoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoc3RlcC51cmxNb2xsaWUpIHtcblx0XHRcdFx0XHRcdHdpbmRvdy5vcGVuKGAke3N0ZXAudXJsTW9sbGllfS9zaWdudXBgLCAnX2JsYW5rJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRvdXIubmV4dCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0sXG5cdF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoc3RlcHMgPSBbXSkgPT5cblx0c3RlcHMubWFwKChzdGVwKSA9PiAoe1xuXHRcdC4uLnN0ZXAsXG5cdFx0dGl0bGU6IHN0ZXAudGl0bGUgPyBfZ2V0KHdpemFyZFRyYW5zbGF0aW9ucywgc3RlcC50aXRsZSkgOiBudWxsLFxuXHRcdHRleHQ6IF9nZXQod2l6YXJkVHJhbnNsYXRpb25zLCBzdGVwLnRleHQpLFxuXHRcdHN0ZXBCdXR0b25zOiAob25ib2FyZGluZ1dpemFyZCwgc3RlcEluZGV4KSA9PlxuXHRcdFx0aGFuZGxlU3RlcEJ1dHRvbnMob25ib2FyZGluZ1dpemFyZCwgc3RlcEluZGV4LCBzdGVwKSxcblx0fSkpO1xuIiwiaW1wb3J0IE9uYm9hcmRpbmdXaXphcmQgZnJvbSAnLi9PbmJvYXJkaW5nV2l6YXJkJztcbmNvbnN0IHRvdXIgPSBuZXcgT25ib2FyZGluZ1dpemFyZCgpO1xudG91ci5pbml0VG91cigpO1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC8sXG4gICAgcmVMZWFkaW5nRG90ID0gL15cXC4vLFxuICAgIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGUsXG4gICAgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFRvU3RyaW5nID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by50b1N0cmluZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGlzS2V5KHBhdGgsIG9iamVjdCkgPyBbcGF0aF0gOiBjYXN0UGF0aChwYXRoKTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSA/IHZhbHVlIDogc3RyaW5nVG9QYXRoKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplKGZ1bmN0aW9uKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHJlTGVhZGluZ0RvdC50ZXN0KHN0cmluZykpIHtcbiAgICByZXN1bHQucHVzaCgnJyk7XG4gIH1cbiAgc3RyaW5nLnJlcGxhY2UocmVQcm9wTmFtZSwgZnVuY3Rpb24obWF0Y2gsIG51bWJlciwgcXVvdGUsIHN0cmluZykge1xuICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBBc3NpZ24gY2FjaGUgdG8gYF8ubWVtb2l6ZWAuXG5tZW1vaXplLkNhY2hlID0gTWFwQ2FjaGU7XG5cbi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA4LTkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXkgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvU3RyaW5nKG51bGwpO1xuICogLy8gPT4gJydcbiAqXG4gKiBfLnRvU3RyaW5nKC0wKTtcbiAqIC8vID0+ICctMCdcbiAqXG4gKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAnMSwyLDMnXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiBiYXNlVG9TdHJpbmcodmFsdWUpO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuIiwiLyohIHNoZXBoZXJkLmpzIDguMy4xICovXG5cbnZhciBpc01lcmdlYWJsZU9iamVjdCA9IGZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc05vbk51bGxPYmplY3QodmFsdWUpICYmICFpc1NwZWNpYWwodmFsdWUpO1xufTtcblxuZnVuY3Rpb24gaXNOb25OdWxsT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzU3BlY2lhbCh2YWx1ZSkge1xuICB2YXIgc3RyaW5nVmFsdWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICByZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nIHx8IHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBEYXRlXScgfHwgaXNSZWFjdEVsZW1lbnQodmFsdWUpO1xufSAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjVhYzk2M2ZiNzkxZDEyOThlN2YzOTYyMzYzODNiYzk1NWY5MTZjMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMS1MMjVcblxuXG52YXIgY2FuVXNlU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcblxuZnVuY3Rpb24gaXNSZWFjdEVsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fTtcbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuY2xvbmUgIT09IGZhbHNlICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodmFsdWUpID8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnMpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gIHJldHVybiB0YXJnZXQuY29uY2F0KHNvdXJjZSkubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TWVyZ2VGdW5jdGlvbihrZXksIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLmN1c3RvbU1lcmdlKSB7XG4gICAgcmV0dXJuIGRlZXBtZXJnZTtcbiAgfVxuXG4gIHZhciBjdXN0b21NZXJnZSA9IG9wdGlvbnMuY3VzdG9tTWVyZ2Uoa2V5KTtcbiAgcmV0dXJuIHR5cGVvZiBjdXN0b21NZXJnZSA9PT0gJ2Z1bmN0aW9uJyA/IGN1c3RvbU1lcmdlIDogZGVlcG1lcmdlO1xufVxuXG5mdW5jdGlvbiBnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkge1xuICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KS5maWx0ZXIoZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgIHJldHVybiB0YXJnZXQucHJvcGVydHlJc0VudW1lcmFibGUoc3ltYm9sKTtcbiAgfSkgOiBbXTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5cyh0YXJnZXQpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRhcmdldCkuY29uY2F0KGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5SXNPbk9iamVjdChvYmplY3QsIHByb3BlcnR5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHByb3BlcnR5IGluIG9iamVjdDtcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSAvLyBQcm90ZWN0cyBmcm9tIHByb3RvdHlwZSBwb2lzb25pbmcgYW5kIHVuZXhwZWN0ZWQgbWVyZ2luZyB1cCB0aGUgcHJvdG90eXBlIGNoYWluLlxuXG5cbmZ1bmN0aW9uIHByb3BlcnR5SXNVbnNhZmUodGFyZ2V0LCBrZXkpIHtcbiAgcmV0dXJuIHByb3BlcnR5SXNPbk9iamVjdCh0YXJnZXQsIGtleSkgLy8gUHJvcGVydGllcyBhcmUgc2FmZSB0byBtZXJnZSBpZiB0aGV5IGRvbid0IGV4aXN0IGluIHRoZSB0YXJnZXQgeWV0LFxuICAmJiAhKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSAvLyB1bnNhZmUgaWYgdGhleSBleGlzdCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLFxuICAmJiBPYmplY3QucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0YXJnZXQsIGtleSkpOyAvLyBhbmQgYWxzbyB1bnNhZmUgaWYgdGhleSdyZSBub25lbnVtZXJhYmxlLlxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZGVzdGluYXRpb24gPSB7fTtcblxuICBpZiAob3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgZ2V0S2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHRhcmdldFtrZXldLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAocHJvcGVydHlJc1Vuc2FmZSh0YXJnZXQsIGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlJc09uT2JqZWN0KHRhcmdldCwga2V5KSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlW2tleV0sIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG4gIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgPSBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0IHx8IGlzTWVyZ2VhYmxlT2JqZWN0OyAvLyBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCBpcyBhZGRlZCB0byBgb3B0aW9uc2Agc28gdGhhdCBjdXN0b20gYXJyYXlNZXJnZSgpXG4gIC8vIGltcGxlbWVudGF0aW9ucyBjYW4gdXNlIGl0LiBUaGUgY2FsbGVyIG1heSBub3QgcmVwbGFjZSBpdC5cblxuICBvcHRpb25zLmNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQ7XG4gIHZhciBzb3VyY2VJc0FycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuICB2YXIgdGFyZ2V0SXNBcnJheSA9IEFycmF5LmlzQXJyYXkodGFyZ2V0KTtcbiAgdmFyIHNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2ggPSBzb3VyY2VJc0FycmF5ID09PSB0YXJnZXRJc0FycmF5O1xuXG4gIGlmICghc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCkge1xuICAgIHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2UsIG9wdGlvbnMpO1xuICB9IGVsc2UgaWYgKHNvdXJjZUlzQXJyYXkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5hcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpO1xuICB9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5Jyk7XG4gIH1cblxuICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBuZXh0KSB7XG4gICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zKTtcbiAgfSwge30pO1xufTtcblxudmFyIGRlZXBtZXJnZV8xID0gZGVlcG1lcmdlO1xudmFyIGNqcyA9IGRlZXBtZXJnZV8xO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEVsZW1lbnRgLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcGFyYW0gdG8gY2hlY2sgaWYgaXQgaXMgYW4gRWxlbWVudFxuICovXG5mdW5jdGlvbiBpc0VsZW1lbnQkMSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBIVE1MRWxlbWVudGAuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwYXJhbSB0byBjaGVjayBpZiBpdCBpcyBhbiBIVE1MRWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQkMSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgcGFyYW0gdG8gY2hlY2sgaWYgaXQgaXMgYSBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTdHJpbmdgIG9iamVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBhcmFtIHRvIGNoZWNrIGlmIGl0IGlzIGEgc3RyaW5nXG4gKi9cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHVuZGVmaW5lZC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBhcmFtIHRvIGNoZWNrIGlmIGl0IGlzIHVuZGVmaW5lZFxuICovXG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5jbGFzcyBFdmVudGVkIHtcbiAgb24oZXZlbnQsIGhhbmRsZXIsIGN0eCwgb25jZSA9IGZhbHNlKSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHRoaXMuYmluZGluZ3MpKSB7XG4gICAgICB0aGlzLmJpbmRpbmdzID0ge307XG4gICAgfVxuXG4gICAgaWYgKGlzVW5kZWZpbmVkKHRoaXMuYmluZGluZ3NbZXZlbnRdKSkge1xuICAgICAgdGhpcy5iaW5kaW5nc1tldmVudF0gPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRpbmdzW2V2ZW50XS5wdXNoKHtcbiAgICAgIGhhbmRsZXIsXG4gICAgICBjdHgsXG4gICAgICBvbmNlXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvbmNlKGV2ZW50LCBoYW5kbGVyLCBjdHgpIHtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudCwgaGFuZGxlciwgY3R4LCB0cnVlKTtcbiAgfVxuXG4gIG9mZihldmVudCwgaGFuZGxlcikge1xuICAgIGlmIChpc1VuZGVmaW5lZCh0aGlzLmJpbmRpbmdzKSB8fCBpc1VuZGVmaW5lZCh0aGlzLmJpbmRpbmdzW2V2ZW50XSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmIChpc1VuZGVmaW5lZChoYW5kbGVyKSkge1xuICAgICAgZGVsZXRlIHRoaXMuYmluZGluZ3NbZXZlbnRdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJpbmRpbmdzW2V2ZW50XS5mb3JFYWNoKChiaW5kaW5nLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoYmluZGluZy5oYW5kbGVyID09PSBoYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5iaW5kaW5nc1tldmVudF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0cmlnZ2VyKGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLmJpbmRpbmdzKSAmJiB0aGlzLmJpbmRpbmdzW2V2ZW50XSkge1xuICAgICAgdGhpcy5iaW5kaW5nc1tldmVudF0uZm9yRWFjaCgoYmluZGluZywgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGN0eCxcbiAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgIG9uY2VcbiAgICAgICAgfSA9IGJpbmRpbmc7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjdHggfHwgdGhpcztcbiAgICAgICAgaGFuZGxlci5hcHBseShjb250ZXh0LCBhcmdzKTtcblxuICAgICAgICBpZiAob25jZSkge1xuICAgICAgICAgIHRoaXMuYmluZGluZ3NbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cblxuLyoqXG4gKiBCaW5kcyBhbGwgdGhlIG1ldGhvZHMgb24gYSBKUyBDbGFzcyB0byB0aGUgYHRoaXNgIGNvbnRleHQgb2YgdGhlIGNsYXNzLlxuICogQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvYXV0by1iaW5kXG4gKiBAcGFyYW0ge29iamVjdH0gc2VsZiBUaGUgYHRoaXNgIGNvbnRleHQgb2YgdGhlIGNsYXNzXG4gKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBgdGhpc2AgY29udGV4dCBvZiB0aGUgY2xhc3NcbiAqL1xuZnVuY3Rpb24gYXV0b0JpbmQoc2VsZikge1xuICBjb25zdCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc2VsZi5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgY29uc3QgdmFsID0gc2VsZltrZXldO1xuXG4gICAgaWYgKGtleSAhPT0gJ2NvbnN0cnVjdG9yJyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzZWxmW2tleV0gPSB2YWwuYmluZChzZWxmKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuLyoqXG4gKiBTZXRzIHVwIHRoZSBoYW5kbGVyIHRvIGRldGVybWluZSBpZiB3ZSBzaG91bGQgYWR2YW5jZSB0aGUgdG91clxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gKiBAcGFyYW0ge1N0ZXB9IHN0ZXAgVGhlIHN0ZXAgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBfc2V0dXBBZHZhbmNlT25IYW5kbGVyKHNlbGVjdG9yLCBzdGVwKSB7XG4gIHJldHVybiBldmVudCA9PiB7XG4gICAgaWYgKHN0ZXAuaXNPcGVuKCkpIHtcbiAgICAgIGNvbnN0IHRhcmdldElzRWwgPSBzdGVwLmVsICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQgPT09IHN0ZXAuZWw7XG4gICAgICBjb25zdCB0YXJnZXRJc1NlbGVjdG9yID0gIWlzVW5kZWZpbmVkKHNlbGVjdG9yKSAmJiBldmVudC5jdXJyZW50VGFyZ2V0Lm1hdGNoZXMoc2VsZWN0b3IpO1xuXG4gICAgICBpZiAodGFyZ2V0SXNTZWxlY3RvciB8fCB0YXJnZXRJc0VsKSB7XG4gICAgICAgIHN0ZXAudG91ci5uZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuLyoqXG4gKiBCaW5kIHRoZSBldmVudCBoYW5kbGVyIGZvciBhZHZhbmNlT25cbiAqIEBwYXJhbSB7U3RlcH0gc3RlcCBUaGUgc3RlcCBpbnN0YW5jZVxuICovXG5cblxuZnVuY3Rpb24gYmluZEFkdmFuY2Uoc3RlcCkge1xuICAvLyBBbiBlbXB0eSBzZWxlY3RvciBtYXRjaGVzIHRoZSBzdGVwIGVsZW1lbnRcbiAgY29uc3Qge1xuICAgIGV2ZW50LFxuICAgIHNlbGVjdG9yXG4gIH0gPSBzdGVwLm9wdGlvbnMuYWR2YW5jZU9uIHx8IHt9O1xuXG4gIGlmIChldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBfc2V0dXBBZHZhbmNlT25IYW5kbGVyKHNlbGVjdG9yLCBzdGVwKTsgLy8gVE9ETzogdGhpcyBzaG91bGQgYWxzbyBiaW5kL3VuYmluZCBvbiBzaG93L2hpZGVcblxuXG4gICAgbGV0IGVsO1xuXG4gICAgdHJ5IHtcbiAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgfSBjYXRjaCAoZSkgey8vIFRPRE9cbiAgICB9XG5cbiAgICBpZiAoIWlzVW5kZWZpbmVkKHNlbGVjdG9yKSAmJiAhZWwpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGBObyBlbGVtZW50IHdhcyBmb3VuZCBmb3IgdGhlIHNlbGVjdG9yIHN1cHBsaWVkIHRvIGFkdmFuY2VPbjogJHtzZWxlY3Rvcn1gKTtcbiAgICB9IGVsc2UgaWYgKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgIHN0ZXAub24oJ2Rlc3Ryb3knLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHRydWUpO1xuICAgICAgc3RlcC5vbignZGVzdHJveScsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgdHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ2FkdmFuY2VPbiB3YXMgZGVmaW5lZCwgYnV0IG5vIGV2ZW50IG5hbWUgd2FzIHBhc3NlZC4nKTtcbiAgfVxufVxuXG52YXIgdG9wID0gJ3RvcCc7XG52YXIgYm90dG9tID0gJ2JvdHRvbSc7XG52YXIgcmlnaHQgPSAncmlnaHQnO1xudmFyIGxlZnQgPSAnbGVmdCc7XG52YXIgYXV0byA9ICdhdXRvJztcbnZhciBiYXNlUGxhY2VtZW50cyA9IFt0b3AsIGJvdHRvbSwgcmlnaHQsIGxlZnRdO1xudmFyIHN0YXJ0ID0gJ3N0YXJ0JztcbnZhciBlbmQgPSAnZW5kJztcbnZhciBjbGlwcGluZ1BhcmVudHMgPSAnY2xpcHBpbmdQYXJlbnRzJztcbnZhciB2aWV3cG9ydCA9ICd2aWV3cG9ydCc7XG52YXIgcG9wcGVyID0gJ3BvcHBlcic7XG52YXIgcmVmZXJlbmNlID0gJ3JlZmVyZW5jZSc7XG52YXIgdmFyaWF0aW9uUGxhY2VtZW50cyA9IC8qI19fUFVSRV9fKi9iYXNlUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQgKyBcIi1cIiArIHN0YXJ0LCBwbGFjZW1lbnQgKyBcIi1cIiArIGVuZF0pO1xufSwgW10pO1xudmFyIHBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovW10uY29uY2F0KGJhc2VQbGFjZW1lbnRzLCBbYXV0b10pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIGFjYy5jb25jYXQoW3BsYWNlbWVudCwgcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTsgLy8gbW9kaWZpZXJzIHRoYXQgbmVlZCB0byByZWFkIHRoZSBET01cblxudmFyIGJlZm9yZVJlYWQgPSAnYmVmb3JlUmVhZCc7XG52YXIgcmVhZCA9ICdyZWFkJztcbnZhciBhZnRlclJlYWQgPSAnYWZ0ZXJSZWFkJzsgLy8gcHVyZS1sb2dpYyBtb2RpZmllcnNcblxudmFyIGJlZm9yZU1haW4gPSAnYmVmb3JlTWFpbic7XG52YXIgbWFpbiA9ICdtYWluJztcbnZhciBhZnRlck1haW4gPSAnYWZ0ZXJNYWluJzsgLy8gbW9kaWZpZXIgd2l0aCB0aGUgcHVycG9zZSB0byB3cml0ZSB0byB0aGUgRE9NIChvciB3cml0ZSBpbnRvIGEgZnJhbWV3b3JrIHN0YXRlKVxuXG52YXIgYmVmb3JlV3JpdGUgPSAnYmVmb3JlV3JpdGUnO1xudmFyIHdyaXRlID0gJ3dyaXRlJztcbnZhciBhZnRlcldyaXRlID0gJ2FmdGVyV3JpdGUnO1xudmFyIG1vZGlmaWVyUGhhc2VzID0gW2JlZm9yZVJlYWQsIHJlYWQsIGFmdGVyUmVhZCwgYmVmb3JlTWFpbiwgbWFpbiwgYWZ0ZXJNYWluLCBiZWZvcmVXcml0ZSwgd3JpdGUsIGFmdGVyV3JpdGVdO1xuXG5mdW5jdGlvbiBnZXROb2RlTmFtZShlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50ID8gKGVsZW1lbnQubm9kZU5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3cobm9kZSkge1xuICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIGlmIChub2RlLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IFdpbmRvd10nKSB7XG4gICAgdmFyIG93bmVyRG9jdW1lbnQgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgcmV0dXJuIG93bmVyRG9jdW1lbnQgPyBvd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdyA6IHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5FbGVtZW50O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQobm9kZSkge1xuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5IVE1MRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNTaGFkb3dSb290KG5vZGUpIHtcbiAgLy8gSUUgMTEgaGFzIG5vIFNoYWRvd1Jvb3RcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBPd25FbGVtZW50ID0gZ2V0V2luZG93KG5vZGUpLlNoYWRvd1Jvb3Q7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgU2hhZG93Um9vdDtcbn1cblxuLy8gYW5kIGFwcGxpZXMgdGhlbSB0byB0aGUgSFRNTEVsZW1lbnRzIHN1Y2ggYXMgcG9wcGVyIGFuZCBhcnJvd1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlcyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHN0eWxlID0gc3RhdGUuc3R5bGVzW25hbWVdIHx8IHt9O1xuICAgIHZhciBhdHRyaWJ1dGVzID0gc3RhdGUuYXR0cmlidXRlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEZsb3cgZG9lc24ndCBzdXBwb3J0IHRvIGV4dGVuZCB0aGlzIHByb3BlcnR5LCBidXQgaXQncyB0aGUgbW9zdFxuICAgIC8vIGVmZmVjdGl2ZSB3YXkgdG8gYXBwbHkgc3R5bGVzIHRvIGFuIEhUTUxFbGVtZW50XG4gICAgLy8gJEZsb3dGaXhNZVtjYW5ub3Qtd3JpdGVdXG5cblxuICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbbmFtZV07XG5cbiAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0JDIoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGU7XG4gIHZhciBpbml0aWFsU3R5bGVzID0ge1xuICAgIHBvcHBlcjoge1xuICAgICAgcG9zaXRpb246IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3ksXG4gICAgICBsZWZ0OiAnMCcsXG4gICAgICB0b3A6ICcwJyxcbiAgICAgIG1hcmdpbjogJzAnXG4gICAgfSxcbiAgICBhcnJvdzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9LFxuICAgIHJlZmVyZW5jZToge31cbiAgfTtcbiAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5wb3BwZXIuc3R5bGUsIGluaXRpYWxTdHlsZXMucG9wcGVyKTtcbiAgc3RhdGUuc3R5bGVzID0gaW5pdGlhbFN0eWxlcztcblxuICBpZiAoc3RhdGUuZWxlbWVudHMuYXJyb3cpIHtcbiAgICBPYmplY3QuYXNzaWduKHN0YXRlLmVsZW1lbnRzLmFycm93LnN0eWxlLCBpbml0aWFsU3R5bGVzLmFycm93KTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbbmFtZV07XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICB2YXIgc3R5bGVQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoc3RhdGUuc3R5bGVzLmhhc093blByb3BlcnR5KG5hbWUpID8gc3RhdGUuc3R5bGVzW25hbWVdIDogaW5pdGlhbFN0eWxlc1tuYW1lXSk7IC8vIFNldCBhbGwgdmFsdWVzIHRvIGFuIGVtcHR5IHN0cmluZyB0byB1bnNldCB0aGVtXG5cbiAgICAgIHZhciBzdHlsZSA9IHN0eWxlUHJvcGVydGllcy5yZWR1Y2UoZnVuY3Rpb24gKHN0eWxlLCBwcm9wZXJ0eSkge1xuICAgICAgICBzdHlsZVtwcm9wZXJ0eV0gPSAnJztcbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfSwge30pOyAvLyBhcnJvdyBpcyBvcHRpb25hbCArIHZpcnR1YWwgZWxlbWVudHNcblxuICAgICAgaWYgKCFpc0hUTUxFbGVtZW50KGVsZW1lbnQpIHx8ICFnZXROb2RlTmFtZShlbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5zdHlsZSwgc3R5bGUpO1xuICAgICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBhcHBseVN0eWxlcyQxID0ge1xuICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGFwcGx5U3R5bGVzLFxuICBlZmZlY3Q6IGVmZmVjdCQyLFxuICByZXF1aXJlczogWydjb21wdXRlU3R5bGVzJ11cbn07XG5cbmZ1bmN0aW9uIGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4ge1xuICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgdG9wOiByZWN0LnRvcCxcbiAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICBib3R0b206IHJlY3QuYm90dG9tLFxuICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICB4OiByZWN0LmxlZnQsXG4gICAgeTogcmVjdC50b3BcbiAgfTtcbn1cblxuLy8gbWVhbnMgaXQgZG9lc24ndCB0YWtlIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zLlxuXG5mdW5jdGlvbiBnZXRMYXlvdXRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIGNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7IC8vIFVzZSB0aGUgY2xpZW50UmVjdCBzaXplcyBpZiBpdCdzIG5vdCBiZWVuIHRyYW5zZm9ybWVkLlxuICAvLyBGaXhlcyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEyMjNcblxuICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgaWYgKE1hdGguYWJzKGNsaWVudFJlY3Qud2lkdGggLSB3aWR0aCkgPD0gMSkge1xuICAgIHdpZHRoID0gY2xpZW50UmVjdC53aWR0aDtcbiAgfVxuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LmhlaWdodCAtIGhlaWdodCkgPD0gMSkge1xuICAgIGhlaWdodCA9IGNsaWVudFJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgeTogZWxlbWVudC5vZmZzZXRUb3AsXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKHBhcmVudCwgY2hpbGQpIHtcbiAgdmFyIHJvb3ROb2RlID0gY2hpbGQuZ2V0Um9vdE5vZGUgJiYgY2hpbGQuZ2V0Um9vdE5vZGUoKTsgLy8gRmlyc3QsIGF0dGVtcHQgd2l0aCBmYXN0ZXIgbmF0aXZlIG1ldGhvZFxuXG4gIGlmIChwYXJlbnQuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gdGhlbiBmYWxsYmFjayB0byBjdXN0b20gaW1wbGVtZW50YXRpb24gd2l0aCBTaGFkb3cgRE9NIHN1cHBvcnRcbiAgZWxzZSBpZiAocm9vdE5vZGUgJiYgaXNTaGFkb3dSb290KHJvb3ROb2RlKSkge1xuICAgICAgdmFyIG5leHQgPSBjaGlsZDtcblxuICAgICAgZG8ge1xuICAgICAgICBpZiAobmV4dCAmJiBwYXJlbnQuaXNTYW1lTm9kZShuZXh0KSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXTogbmVlZCBhIGJldHRlciB3YXkgdG8gaGFuZGxlIHRoaXMuLi5cblxuXG4gICAgICAgIG5leHQgPSBuZXh0LnBhcmVudE5vZGUgfHwgbmV4dC5ob3N0O1xuICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgfSAvLyBHaXZlIHVwLCB0aGUgcmVzdWx0IGlzIGZhbHNlXG5cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGlzVGFibGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgcmV0dXJuIFsndGFibGUnLCAndGQnLCAndGgnXS5pbmRleE9mKGdldE5vZGVOYW1lKGVsZW1lbnQpKSA+PSAwO1xufVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkge1xuICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gIHJldHVybiAoKGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQub3duZXJEb2N1bWVudCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICBlbGVtZW50LmRvY3VtZW50KSB8fCB3aW5kb3cuZG9jdW1lbnQpLmRvY3VtZW50RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50KSB7XG4gIGlmIChnZXROb2RlTmFtZShlbGVtZW50KSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICByZXR1cm4gKC8vIHRoaXMgaXMgYSBxdWlja2VyIChidXQgbGVzcyB0eXBlIHNhZmUpIHdheSB0byBzYXZlIHF1aXRlIHNvbWUgYnl0ZXMgZnJvbSB0aGUgYnVuZGxlXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXVxuICAgIC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgIGVsZW1lbnQuYXNzaWduZWRTbG90IHx8IC8vIHN0ZXAgaW50byB0aGUgc2hhZG93IERPTSBvZiB0aGUgcGFyZW50IG9mIGEgc2xvdHRlZCBub2RlXG4gICAgZWxlbWVudC5wYXJlbnROb2RlIHx8ICggLy8gRE9NIEVsZW1lbnQgZGV0ZWN0ZWRcbiAgICBpc1NoYWRvd1Jvb3QoZWxlbWVudCkgPyBlbGVtZW50Lmhvc3QgOiBudWxsKSB8fCAvLyBTaGFkb3dSb290IGRldGVjdGVkXG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IEhUTUxFbGVtZW50IGlzIGEgTm9kZVxuICAgIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSAvLyBmYWxsYmFja1xuXG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy84MzdcbiAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQub2Zmc2V0UGFyZW50O1xufSAvLyBgLm9mZnNldFBhcmVudGAgcmVwb3J0cyBgbnVsbGAgZm9yIGZpeGVkIGVsZW1lbnRzLCB3aGlsZSBhYnNvbHV0ZSBlbGVtZW50c1xuLy8gcmV0dXJuIHRoZSBjb250YWluaW5nIGJsb2NrXG5cblxuZnVuY3Rpb24gZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHtcbiAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgIT09IC0xO1xuICB2YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpICE9PSAtMTtcblxuICBpZiAoaXNJRSAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgLy8gSW4gSUUgOSwgMTAgYW5kIDExIGZpeGVkIGVsZW1lbnRzIGNvbnRhaW5pbmcgYmxvY2sgaXMgYWx3YXlzIGVzdGFibGlzaGVkIGJ5IHRoZSB2aWV3cG9ydFxuICAgIHZhciBlbGVtZW50Q3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcblxuICAgIGlmIChlbGVtZW50Q3NzLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuXG4gIHdoaWxlIChpc0hUTUxFbGVtZW50KGN1cnJlbnROb2RlKSAmJiBbJ2h0bWwnLCAnYm9keSddLmluZGV4T2YoZ2V0Tm9kZU5hbWUoY3VycmVudE5vZGUpKSA8IDApIHtcbiAgICB2YXIgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSk7IC8vIFRoaXMgaXMgbm9uLWV4aGF1c3RpdmUgYnV0IGNvdmVycyB0aGUgbW9zdCBjb21tb24gQ1NTIHByb3BlcnRpZXMgdGhhdFxuICAgIC8vIGNyZWF0ZSBhIGNvbnRhaW5pbmcgYmxvY2suXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0NvbnRhaW5pbmdfYmxvY2sjaWRlbnRpZnlpbmdfdGhlX2NvbnRhaW5pbmdfYmxvY2tcblxuICAgIGlmIChjc3MudHJhbnNmb3JtICE9PSAnbm9uZScgfHwgY3NzLnBlcnNwZWN0aXZlICE9PSAnbm9uZScgfHwgY3NzLmNvbnRhaW4gPT09ICdwYWludCcgfHwgWyd0cmFuc2Zvcm0nLCAncGVyc3BlY3RpdmUnXS5pbmRleE9mKGNzcy53aWxsQ2hhbmdlKSAhPT0gLTEgfHwgaXNGaXJlZm94ICYmIGNzcy53aWxsQ2hhbmdlID09PSAnZmlsdGVyJyB8fCBpc0ZpcmVmb3ggJiYgY3NzLmZpbHRlciAmJiBjc3MuZmlsdGVyICE9PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSAvLyBHZXRzIHRoZSBjbG9zZXN0IGFuY2VzdG9yIHBvc2l0aW9uZWQgZWxlbWVudC4gSGFuZGxlcyBzb21lIGVkZ2UgY2FzZXMsXG4vLyBzdWNoIGFzIHRhYmxlIGFuY2VzdG9ycyBhbmQgY3Jvc3MgYnJvd3NlciBidWdzLlxuXG5cbmZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coZWxlbWVudCk7XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KGVsZW1lbnQpO1xuXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgJiYgaXNUYWJsZUVsZW1lbnQob2Zmc2V0UGFyZW50KSAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgb2Zmc2V0UGFyZW50ID0gZ2V0VHJ1ZU9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xuICB9XG5cbiAgaWYgKG9mZnNldFBhcmVudCAmJiAoZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2h0bWwnIHx8IGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgPT09ICdib2R5JyAmJiBnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gPT09ICdzdGF0aWMnKSkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGdldENvbnRhaW5pbmdCbG9jayhlbGVtZW50KSB8fCB3aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSA+PSAwID8gJ3gnIDogJ3knO1xufVxuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xuXG5mdW5jdGlvbiB3aXRoaW4obWluJDEsIHZhbHVlLCBtYXgkMSkge1xuICByZXR1cm4gbWF4KG1pbiQxLCBtaW4odmFsdWUsIG1heCQxKSk7XG59XG5cbmZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn1cblxudmFyIHRvUGFkZGluZ09iamVjdCA9IGZ1bmN0aW9uIHRvUGFkZGluZ09iamVjdChwYWRkaW5nLCBzdGF0ZSkge1xuICBwYWRkaW5nID0gdHlwZW9mIHBhZGRpbmcgPT09ICdmdW5jdGlvbicgPyBwYWRkaW5nKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogcGFkZGluZztcbiAgcmV0dXJuIG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG59O1xuXG5mdW5jdGlvbiBhcnJvdyhfcmVmKSB7XG4gIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIGF4aXMgPSBnZXRNYWluQXhpc0Zyb21QbGFjZW1lbnQoYmFzZVBsYWNlbWVudCk7XG4gIHZhciBpc1ZlcnRpY2FsID0gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDA7XG4gIHZhciBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gIGlmICghYXJyb3dFbGVtZW50IHx8ICFwb3BwZXJPZmZzZXRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhZGRpbmdPYmplY3QgPSB0b1BhZGRpbmdPYmplY3Qob3B0aW9ucy5wYWRkaW5nLCBzdGF0ZSk7XG4gIHZhciBhcnJvd1JlY3QgPSBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCk7XG4gIHZhciBtaW5Qcm9wID0gYXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgdmFyIG1heFByb3AgPSBheGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgdmFyIGVuZERpZmYgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbbGVuXSArIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXSAtIHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5wb3BwZXJbbGVuXTtcbiAgdmFyIHN0YXJ0RGlmZiA9IHBvcHBlck9mZnNldHNbYXhpc10gLSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2VbYXhpc107XG4gIHZhciBhcnJvd09mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChhcnJvd0VsZW1lbnQpO1xuICB2YXIgY2xpZW50U2l6ZSA9IGFycm93T2Zmc2V0UGFyZW50ID8gYXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0IHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRXaWR0aCB8fCAwIDogMDtcbiAgdmFyIGNlbnRlclRvUmVmZXJlbmNlID0gZW5kRGlmZiAvIDIgLSBzdGFydERpZmYgLyAyOyAvLyBNYWtlIHN1cmUgdGhlIGFycm93IGRvZXNuJ3Qgb3ZlcmZsb3cgdGhlIHBvcHBlciBpZiB0aGUgY2VudGVyIHBvaW50IGlzXG4gIC8vIG91dHNpZGUgb2YgdGhlIHBvcHBlciBib3VuZHNcblxuICB2YXIgbWluID0gcGFkZGluZ09iamVjdFttaW5Qcm9wXTtcbiAgdmFyIG1heCA9IGNsaWVudFNpemUgLSBhcnJvd1JlY3RbbGVuXSAtIHBhZGRpbmdPYmplY3RbbWF4UHJvcF07XG4gIHZhciBjZW50ZXIgPSBjbGllbnRTaXplIC8gMiAtIGFycm93UmVjdFtsZW5dIC8gMiArIGNlbnRlclRvUmVmZXJlbmNlO1xuICB2YXIgb2Zmc2V0ID0gd2l0aGluKG1pbiwgY2VudGVyLCBtYXgpOyAvLyBQcmV2ZW50cyBicmVha2luZyBzeW50YXggaGlnaGxpZ2h0aW5nLi4uXG5cbiAgdmFyIGF4aXNQcm9wID0gYXhpcztcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSB7fSwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkW2F4aXNQcm9wXSA9IG9mZnNldCwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkLmNlbnRlck9mZnNldCA9IG9mZnNldCAtIGNlbnRlciwgX3N0YXRlJG1vZGlmaWVyc0RhdGEkKTtcbn1cblxuZnVuY3Rpb24gZWZmZWN0JDEoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBzdGF0ZS5lbGVtZW50cy5hcnJvdyA9IGFycm93RWxlbWVudDtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBhcnJvdyQxID0ge1xuICBuYW1lOiAnYXJyb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogYXJyb3csXG4gIGVmZmVjdDogZWZmZWN0JDEsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTtcblxudmFyIHVuc2V0U2lkZXMgPSB7XG4gIHRvcDogJ2F1dG8nLFxuICByaWdodDogJ2F1dG8nLFxuICBib3R0b206ICdhdXRvJyxcbiAgbGVmdDogJ2F1dG8nXG59OyAvLyBSb3VuZCB0aGUgb2Zmc2V0cyB0byB0aGUgbmVhcmVzdCBzdWl0YWJsZSBzdWJwaXhlbCBiYXNlZCBvbiB0aGUgRFBSLlxuLy8gWm9vbWluZyBjYW4gY2hhbmdlIHRoZSBEUFIsIGJ1dCBpdCBzZWVtcyB0byByZXBvcnQgYSB2YWx1ZSB0aGF0IHdpbGxcbi8vIGNsZWFubHkgZGl2aWRlIHRoZSB2YWx1ZXMgaW50byB0aGUgYXBwcm9wcmlhdGUgc3VicGl4ZWxzLlxuXG5mdW5jdGlvbiByb3VuZE9mZnNldHNCeURQUihfcmVmKSB7XG4gIHZhciB4ID0gX3JlZi54LFxuICAgICAgeSA9IF9yZWYueTtcbiAgdmFyIHdpbiA9IHdpbmRvdztcbiAgdmFyIGRwciA9IHdpbi5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gIHJldHVybiB7XG4gICAgeDogcm91bmQocm91bmQoeCAqIGRwcikgLyBkcHIpIHx8IDAsXG4gICAgeTogcm91bmQocm91bmQoeSAqIGRwcikgLyBkcHIpIHx8IDBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzO1xuXG4gIHZhciBfcmVmMyA9IHJvdW5kT2Zmc2V0cyA9PT0gdHJ1ZSA/IHJvdW5kT2Zmc2V0c0J5RFBSKG9mZnNldHMpIDogdHlwZW9mIHJvdW5kT2Zmc2V0cyA9PT0gJ2Z1bmN0aW9uJyA/IHJvdW5kT2Zmc2V0cyhvZmZzZXRzKSA6IG9mZnNldHMsXG4gICAgICBfcmVmMyR4ID0gX3JlZjMueCxcbiAgICAgIHggPSBfcmVmMyR4ID09PSB2b2lkIDAgPyAwIDogX3JlZjMkeCxcbiAgICAgIF9yZWYzJHkgPSBfcmVmMy55LFxuICAgICAgeSA9IF9yZWYzJHkgPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR5O1xuXG4gIHZhciBoYXNYID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneCcpO1xuICB2YXIgaGFzWSA9IG9mZnNldHMuaGFzT3duUHJvcGVydHkoJ3knKTtcbiAgdmFyIHNpZGVYID0gbGVmdDtcbiAgdmFyIHNpZGVZID0gdG9wO1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIGlmIChhZGFwdGl2ZSkge1xuICAgIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQocG9wcGVyKTtcbiAgICB2YXIgaGVpZ2h0UHJvcCA9ICdjbGllbnRIZWlnaHQnO1xuICAgIHZhciB3aWR0aFByb3AgPSAnY2xpZW50V2lkdGgnO1xuXG4gICAgaWYgKG9mZnNldFBhcmVudCA9PT0gZ2V0V2luZG93KHBvcHBlcikpIHtcbiAgICAgIG9mZnNldFBhcmVudCA9IGdldERvY3VtZW50RWxlbWVudChwb3BwZXIpO1xuXG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShvZmZzZXRQYXJlbnQpLnBvc2l0aW9uICE9PSAnc3RhdGljJykge1xuICAgICAgICBoZWlnaHRQcm9wID0gJ3Njcm9sbEhlaWdodCc7XG4gICAgICAgIHdpZHRoUHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgICB9XG4gICAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYXN0XTogZm9yY2UgdHlwZSByZWZpbmVtZW50LCB3ZSBjb21wYXJlIG9mZnNldFBhcmVudCB3aXRoIHdpbmRvdyBhYm92ZSwgYnV0IEZsb3cgZG9lc24ndCBkZXRlY3QgaXRcblxuXG4gICAgb2Zmc2V0UGFyZW50ID0gb2Zmc2V0UGFyZW50O1xuXG4gICAgaWYgKHBsYWNlbWVudCA9PT0gdG9wKSB7XG4gICAgICBzaWRlWSA9IGJvdHRvbTsgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG5cbiAgICAgIHkgLT0gb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0KSB7XG4gICAgICBzaWRlWCA9IHJpZ2h0OyAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ11cblxuICAgICAgeCAtPSBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXSAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8IDIgPyBcInRyYW5zbGF0ZShcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4KVwiIDogXCJ0cmFuc2xhdGUzZChcIiArIHggKyBcInB4LCBcIiArIHkgKyBcInB4LCAwKVwiLCBfT2JqZWN0JGFzc2lnbikpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywgKF9PYmplY3QkYXNzaWduMiA9IHt9LCBfT2JqZWN0JGFzc2lnbjJbc2lkZVldID0gaGFzWSA/IHkgKyBcInB4XCIgOiAnJywgX09iamVjdCRhc3NpZ24yW3NpZGVYXSA9IGhhc1ggPyB4ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMi50cmFuc2Zvcm0gPSAnJywgX09iamVjdCRhc3NpZ24yKSk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZXMoX3JlZjQpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjQuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjQub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uLFxuICAgICAgZ3B1QWNjZWxlcmF0aW9uID0gX29wdGlvbnMkZ3B1QWNjZWxlcmF0ID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZ3B1QWNjZWxlcmF0LFxuICAgICAgX29wdGlvbnMkYWRhcHRpdmUgPSBvcHRpb25zLmFkYXB0aXZlLFxuICAgICAgYWRhcHRpdmUgPSBfb3B0aW9ucyRhZGFwdGl2ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFkYXB0aXZlLFxuICAgICAgX29wdGlvbnMkcm91bmRPZmZzZXRzID0gb3B0aW9ucy5yb3VuZE9mZnNldHMsXG4gICAgICByb3VuZE9mZnNldHMgPSBfb3B0aW9ucyRyb3VuZE9mZnNldHMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyb3VuZE9mZnNldHM7XG5cbiAgdmFyIGNvbW1vblN0eWxlcyA9IHtcbiAgICBwbGFjZW1lbnQ6IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KSxcbiAgICBwb3BwZXI6IHN0YXRlLmVsZW1lbnRzLnBvcHBlcixcbiAgICBwb3BwZXJSZWN0OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiBncHVBY2NlbGVyYXRpb25cbiAgfTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYWRhcHRpdmU6IGZhbHNlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgY29tcHV0ZVN0eWxlcyQxID0ge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07XG5cbnZhciBwYXNzaXZlID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgaW5zdGFuY2UgPSBfcmVmLmluc3RhbmNlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJHNjcm9sbCA9IG9wdGlvbnMuc2Nyb2xsLFxuICAgICAgc2Nyb2xsID0gX29wdGlvbnMkc2Nyb2xsID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkc2Nyb2xsLFxuICAgICAgX29wdGlvbnMkcmVzaXplID0gb3B0aW9ucy5yZXNpemUsXG4gICAgICByZXNpemUgPSBfb3B0aW9ucyRyZXNpemUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRyZXNpemU7XG4gIHZhciB3aW5kb3cgPSBnZXRXaW5kb3coc3RhdGUuZWxlbWVudHMucG9wcGVyKTtcbiAgdmFyIHNjcm9sbFBhcmVudHMgPSBbXS5jb25jYXQoc3RhdGUuc2Nyb2xsUGFyZW50cy5yZWZlcmVuY2UsIHN0YXRlLnNjcm9sbFBhcmVudHMucG9wcGVyKTtcblxuICBpZiAoc2Nyb2xsKSB7XG4gICAgc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzY3JvbGxQYXJlbnQpIHtcbiAgICAgIHNjcm9sbFBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHJlc2l6ZSkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgICBzY3JvbGxQYXJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2UudXBkYXRlLCBwYXNzaXZlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXNpemUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgIH1cbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBldmVudExpc3RlbmVycyA9IHtcbiAgbmFtZTogJ2V2ZW50TGlzdGVuZXJzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBmdW5jdGlvbiBmbigpIHt9LFxuICBlZmZlY3Q6IGVmZmVjdCxcbiAgZGF0YToge31cbn07XG5cbnZhciBoYXNoJDEgPSB7XG4gIGxlZnQ6ICdyaWdodCcsXG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGJvdHRvbTogJ3RvcCcsXG4gIHRvcDogJ2JvdHRvbSdcbn07XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaCQxW21hdGNoZWRdO1xuICB9KTtcbn1cblxudmFyIGhhc2ggPSB7XG4gIHN0YXJ0OiAnZW5kJyxcbiAgZW5kOiAnc3RhcnQnXG59O1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvc3RhcnR8ZW5kL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2hbbWF0Y2hlZF07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1Njcm9sbEJhclgoZWxlbWVudCkge1xuICAvLyBJZiA8aHRtbD4gaGFzIGEgQ1NTIHdpZHRoIGdyZWF0ZXIgdGhhbiB0aGUgdmlld3BvcnQsIHRoZW4gdGhpcyB3aWxsIGJlXG4gIC8vIGluY29ycmVjdCBmb3IgUlRMLlxuICAvLyBQb3BwZXIgMSBpcyBicm9rZW4gaW4gdGhpcyBjYXNlIGFuZCBuZXZlciBoYWQgYSBidWcgcmVwb3J0IHNvIGxldCdzIGFzc3VtZVxuICAvLyBpdCdzIG5vdCBhbiBpc3N1ZS4gSSBkb24ndCB0aGluayBhbnlvbmUgZXZlciBzcGVjaWZpZXMgd2lkdGggb24gPGh0bWw+XG4gIC8vIGFueXdheS5cbiAgLy8gQnJvd3NlcnMgd2hlcmUgdGhlIGxlZnQgc2Nyb2xsYmFyIGRvZXNuJ3QgY2F1c2UgYW4gaXNzdWUgcmVwb3J0IGAwYCBmb3JcbiAgLy8gdGhpcyAoZS5nLiBFZGdlIDIwMTksIElFMTEsIFNhZmFyaSlcbiAgcmV0dXJuIGdldEJvdW5kaW5nQ2xpZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpLmxlZnQgKyBnZXRXaW5kb3dTY3JvbGwoZWxlbWVudCkuc2Nyb2xsTGVmdDtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDsgLy8gTkI6IFRoaXMgaXNuJ3Qgc3VwcG9ydGVkIG9uIGlPUyA8PSAxMi4gSWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sIHRoZSBwb3BwZXJcbiAgLy8gY2FuIGJlIG9ic2N1cmVkIHVuZGVybmVhdGggaXQuXG4gIC8vIEFsc28sIGBodG1sLmNsaWVudEhlaWdodGAgYWRkcyB0aGUgYm90dG9tIGJhciBoZWlnaHQgaW4gU2FmYXJpIGlPUywgZXZlblxuICAvLyBpZiBpdCBpc24ndCBvcGVuLCBzbyBpZiB0aGlzIGlzbid0IGF2YWlsYWJsZSwgdGhlIHBvcHBlciB3aWxsIGJlIGRldGVjdGVkXG4gIC8vIHRvIG92ZXJmbG93IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiB0b28gZWFybHkuXG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7IC8vIFVzZXMgTGF5b3V0IFZpZXdwb3J0IChsaWtlIENocm9tZTsgU2FmYXJpIGRvZXMgbm90IGN1cnJlbnRseSlcbiAgICAvLyBJbiBDaHJvbWUsIGl0IHJldHVybnMgYSB2YWx1ZSB2ZXJ5IGNsb3NlIHRvIDAgKCsvLSkgYnV0IGNvbnRhaW5zIHJvdW5kaW5nXG4gICAgLy8gZXJyb3JzIGR1ZSB0byBmbG9hdGluZyBwb2ludCBudW1iZXJzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHByZWNpc2lvbi5cbiAgICAvLyBTYWZhcmkgcmV0dXJucyBhIG51bWJlciA8PSAwLCB1c3VhbGx5IDwgLTEgd2hlbiBwaW5jaC16b29tZWRcbiAgICAvLyBGZWF0dXJlIGRldGVjdGlvbiBmYWlscyBpbiBtb2JpbGUgZW11bGF0aW9uIG1vZGUgaW4gQ2hyb21lLlxuICAgIC8vIE1hdGguYWJzKHdpbi5pbm5lcldpZHRoIC8gdmlzdWFsVmlld3BvcnQuc2NhbGUgLSB2aXN1YWxWaWV3cG9ydC53aWR0aCkgPFxuICAgIC8vIDAuMDAxXG4gICAgLy8gRmFsbGJhY2sgaGVyZTogXCJOb3QgU2FmYXJpXCIgdXNlckFnZW50XG5cbiAgICBpZiAoIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59XG5cbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSAoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHk7XG4gIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgdmFyIHggPSAtd2luU2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGJvZHkgfHwgaHRtbCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBpc1Njcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIC8vIEZpcmVmb3ggd2FudHMgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcbiAgdmFyIF9nZXRDb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSxcbiAgICAgIG92ZXJmbG93ID0gX2dldENvbXB1dGVkU3R5bGUub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1gsXG4gICAgICBvdmVyZmxvd1kgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvd1k7XG5cbiAgcmV0dXJuIC9hdXRvfHNjcm9sbHxvdmVybGF5fGhpZGRlbi8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCk7XG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFBhcmVudChub2RlKSB7XG4gIGlmIChbJ2h0bWwnLCAnYm9keScsICcjZG9jdW1lbnQnXS5pbmRleE9mKGdldE5vZGVOYW1lKG5vZGUpKSA+PSAwKSB7XG4gICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogYXNzdW1lIGJvZHkgaXMgYWx3YXlzIGF2YWlsYWJsZVxuICAgIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgfVxuXG4gIGlmIChpc0hUTUxFbGVtZW50KG5vZGUpICYmIGlzU2Nyb2xsUGFyZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUobm9kZSkpO1xufVxuXG4vKlxuZ2l2ZW4gYSBET00gZWxlbWVudCwgcmV0dXJuIHRoZSBsaXN0IG9mIGFsbCBzY3JvbGwgcGFyZW50cywgdXAgdGhlIGxpc3Qgb2YgYW5jZXNvcnNcbnVudGlsIHdlIGdldCB0byB0aGUgdG9wIHdpbmRvdyBvYmplY3QuIFRoaXMgbGlzdCBpcyB3aGF0IHdlIGF0dGFjaCBzY3JvbGwgbGlzdGVuZXJzXG50bywgYmVjYXVzZSBpZiBhbnkgb2YgdGhlc2UgcGFyZW50IGVsZW1lbnRzIHNjcm9sbCwgd2UnbGwgbmVlZCB0byByZS1jYWxjdWxhdGUgdGhlXG5yZWZlcmVuY2UgZWxlbWVudCdzIHBvc2l0aW9uLlxuKi9cblxuZnVuY3Rpb24gbGlzdFNjcm9sbFBhcmVudHMoZWxlbWVudCwgbGlzdCkge1xuICB2YXIgX2VsZW1lbnQkb3duZXJEb2N1bWVuO1xuXG4gIGlmIChsaXN0ID09PSB2b2lkIDApIHtcbiAgICBsaXN0ID0gW107XG4gIH1cblxuICB2YXIgc2Nyb2xsUGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50ID09PSAoKF9lbGVtZW50JG93bmVyRG9jdW1lbiA9IGVsZW1lbnQub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9lbGVtZW50JG93bmVyRG9jdW1lbi5ib2R5KTtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhzY3JvbGxQYXJlbnQpO1xuICB2YXIgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQoc2Nyb2xsUGFyZW50KSA/IHNjcm9sbFBhcmVudCA6IFtdKSA6IHNjcm9sbFBhcmVudDtcbiAgdmFyIHVwZGF0ZWRMaXN0ID0gbGlzdC5jb25jYXQodGFyZ2V0KTtcbiAgcmV0dXJuIGlzQm9keSA/IHVwZGF0ZWRMaXN0IDogLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtY2FsbF06IGlzQm9keSB0ZWxscyB1cyB0YXJnZXQgd2lsbCBiZSBhbiBIVE1MRWxlbWVudCBoZXJlXG4gIHVwZGF0ZWRMaXN0LmNvbmNhdChsaXN0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnROb2RlKHRhcmdldCkpKTtcbn1cblxuZnVuY3Rpb24gcmVjdFRvQ2xpZW50UmVjdChyZWN0KSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByZWN0LCB7XG4gICAgbGVmdDogcmVjdC54LFxuICAgIHRvcDogcmVjdC55LFxuICAgIHJpZ2h0OiByZWN0LnggKyByZWN0LndpZHRoLFxuICAgIGJvdHRvbTogcmVjdC55ICsgcmVjdC5oZWlnaHRcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCk7XG4gIHJlY3QudG9wID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudFRvcDtcbiAgcmVjdC5sZWZ0ID0gcmVjdC5sZWZ0ICsgZWxlbWVudC5jbGllbnRMZWZ0O1xuICByZWN0LmJvdHRvbSA9IHJlY3QudG9wICsgZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gIHJlY3QucmlnaHQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LndpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgcmVjdC5oZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC54ID0gcmVjdC5sZWZ0O1xuICByZWN0LnkgPSByZWN0LnRvcDtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGNsaXBwaW5nUGFyZW50KSB7XG4gIHJldHVybiBjbGlwcGluZ1BhcmVudCA9PT0gdmlld3BvcnQgPyByZWN0VG9DbGllbnRSZWN0KGdldFZpZXdwb3J0UmVjdChlbGVtZW50KSkgOiBpc0hUTUxFbGVtZW50KGNsaXBwaW5nUGFyZW50KSA/IGdldElubmVyQm91bmRpbmdDbGllbnRSZWN0KGNsaXBwaW5nUGFyZW50KSA6IHJlY3RUb0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRSZWN0KGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSkpO1xufSAvLyBBIFwiY2xpcHBpbmcgcGFyZW50XCIgaXMgYW4gb3ZlcmZsb3dhYmxlIGNvbnRhaW5lciB3aXRoIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZlxuLy8gY2xpcHBpbmcgKG9yIGhpZGluZykgb3ZlcmZsb3dpbmcgZWxlbWVudHMgd2l0aCBhIHBvc2l0aW9uIGRpZmZlcmVudCBmcm9tXG4vLyBgaW5pdGlhbGBcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkge1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gbGlzdFNjcm9sbFBhcmVudHMoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG4gIHZhciBjYW5Fc2NhcGVDbGlwcGluZyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24pID49IDA7XG4gIHZhciBjbGlwcGVyRWxlbWVudCA9IGNhbkVzY2FwZUNsaXBwaW5nICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkgPyBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkgOiBlbGVtZW50O1xuXG4gIGlmICghaXNFbGVtZW50KGNsaXBwZXJFbGVtZW50KSkge1xuICAgIHJldHVybiBbXTtcbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMTQxNFxuXG5cbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50cy5maWx0ZXIoZnVuY3Rpb24gKGNsaXBwaW5nUGFyZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgJiYgY29udGFpbnMoY2xpcHBpbmdQYXJlbnQsIGNsaXBwZXJFbGVtZW50KSAmJiBnZXROb2RlTmFtZShjbGlwcGluZ1BhcmVudCkgIT09ICdib2R5JztcbiAgfSk7XG59IC8vIEdldHMgdGhlIG1heGltdW0gYXJlYSB0aGF0IHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gZHVlIHRvIGFueSBudW1iZXIgb2Zcbi8vIGNsaXBwaW5nIHBhcmVudHNcblxuXG5mdW5jdGlvbiBnZXRDbGlwcGluZ1JlY3QoZWxlbWVudCwgYm91bmRhcnksIHJvb3RCb3VuZGFyeSkge1xuICB2YXIgbWFpbkNsaXBwaW5nUGFyZW50cyA9IGJvdW5kYXJ5ID09PSAnY2xpcHBpbmdQYXJlbnRzJyA/IGdldENsaXBwaW5nUGFyZW50cyhlbGVtZW50KSA6IFtdLmNvbmNhdChib3VuZGFyeSk7XG4gIHZhciBjbGlwcGluZ1BhcmVudHMgPSBbXS5jb25jYXQobWFpbkNsaXBwaW5nUGFyZW50cywgW3Jvb3RCb3VuZGFyeV0pO1xuICB2YXIgZmlyc3RDbGlwcGluZ1BhcmVudCA9IGNsaXBwaW5nUGFyZW50c1swXTtcbiAgdmFyIGNsaXBwaW5nUmVjdCA9IGNsaXBwaW5nUGFyZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjY1JlY3QsIGNsaXBwaW5nUGFyZW50KSB7XG4gICAgdmFyIHJlY3QgPSBnZXRDbGllbnRSZWN0RnJvbU1peGVkVHlwZShlbGVtZW50LCBjbGlwcGluZ1BhcmVudCk7XG4gICAgYWNjUmVjdC50b3AgPSBtYXgocmVjdC50b3AsIGFjY1JlY3QudG9wKTtcbiAgICBhY2NSZWN0LnJpZ2h0ID0gbWluKHJlY3QucmlnaHQsIGFjY1JlY3QucmlnaHQpO1xuICAgIGFjY1JlY3QuYm90dG9tID0gbWluKHJlY3QuYm90dG9tLCBhY2NSZWN0LmJvdHRvbSk7XG4gICAgYWNjUmVjdC5sZWZ0ID0gbWF4KHJlY3QubGVmdCwgYWNjUmVjdC5sZWZ0KTtcbiAgICByZXR1cm4gYWNjUmVjdDtcbiAgfSwgZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgZmlyc3RDbGlwcGluZ1BhcmVudCkpO1xuICBjbGlwcGluZ1JlY3Qud2lkdGggPSBjbGlwcGluZ1JlY3QucmlnaHQgLSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LmhlaWdodCA9IGNsaXBwaW5nUmVjdC5ib3R0b20gLSBjbGlwcGluZ1JlY3QudG9wO1xuICBjbGlwcGluZ1JlY3QueCA9IGNsaXBwaW5nUmVjdC5sZWZ0O1xuICBjbGlwcGluZ1JlY3QueSA9IGNsaXBwaW5nUmVjdC50b3A7XG4gIHJldHVybiBjbGlwcGluZ1JlY3Q7XG59XG5cbmZ1bmN0aW9uIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlT2Zmc2V0cyhfcmVmKSB7XG4gIHZhciByZWZlcmVuY2UgPSBfcmVmLnJlZmVyZW5jZSxcbiAgICAgIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQgPyBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50ID8gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCkgOiBudWxsO1xuICB2YXIgY29tbW9uWCA9IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoIC8gMiAtIGVsZW1lbnQud2lkdGggLyAyO1xuICB2YXIgY29tbW9uWSA9IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodCAvIDIgLSBlbGVtZW50LmhlaWdodCAvIDI7XG4gIHZhciBvZmZzZXRzO1xuXG4gIHN3aXRjaCAoYmFzZVBsYWNlbWVudCkge1xuICAgIGNhc2UgdG9wOlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogY29tbW9uWCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnkgLSBlbGVtZW50LmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBib3R0b206XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSArIHJlZmVyZW5jZS5oZWlnaHRcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcmlnaHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCArIHJlZmVyZW5jZS53aWR0aCxcbiAgICAgICAgeTogY29tbW9uWVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBsZWZ0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLnggLSBlbGVtZW50LndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgb2Zmc2V0cyA9IHtcbiAgICAgICAgeDogcmVmZXJlbmNlLngsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55XG4gICAgICB9O1xuICB9XG5cbiAgdmFyIG1haW5BeGlzID0gYmFzZVBsYWNlbWVudCA/IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KSA6IG51bGw7XG5cbiAgaWYgKG1haW5BeGlzICE9IG51bGwpIHtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICAgIHN3aXRjaCAodmFyaWF0aW9uKSB7XG4gICAgICBjYXNlIHN0YXJ0OlxuICAgICAgICBvZmZzZXRzW21haW5BeGlzXSA9IG9mZnNldHNbbWFpbkF4aXNdIC0gKHJlZmVyZW5jZVtsZW5dIC8gMiAtIGVsZW1lbnRbbGVuXSAvIDIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBlbmQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gKyAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXRzO1xufVxuXG5mdW5jdGlvbiBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJHBsYWNlbWVudCA9IF9vcHRpb25zLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9vcHRpb25zJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gc3RhdGUucGxhY2VtZW50IDogX29wdGlvbnMkcGxhY2VtZW50LFxuICAgICAgX29wdGlvbnMkYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIGJvdW5kYXJ5ID0gX29wdGlvbnMkYm91bmRhcnkgPT09IHZvaWQgMCA/IGNsaXBwaW5nUGFyZW50cyA6IF9vcHRpb25zJGJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMkcm9vdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyB2aWV3cG9ydCA6IF9vcHRpb25zJHJvb3RCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGVsZW1lbnRDb250ZSA9IF9vcHRpb25zLmVsZW1lbnRDb250ZXh0LFxuICAgICAgZWxlbWVudENvbnRleHQgPSBfb3B0aW9ucyRlbGVtZW50Q29udGUgPT09IHZvaWQgMCA/IHBvcHBlciA6IF9vcHRpb25zJGVsZW1lbnRDb250ZSxcbiAgICAgIF9vcHRpb25zJGFsdEJvdW5kYXJ5ID0gX29wdGlvbnMuYWx0Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeSA9IF9vcHRpb25zJGFsdEJvdW5kYXJ5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJGFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBwYWRkaW5nID0gX29wdGlvbnMkcGFkZGluZyA9PT0gdm9pZCAwID8gMCA6IF9vcHRpb25zJHBhZGRpbmc7XG4gIHZhciBwYWRkaW5nT2JqZWN0ID0gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbiAgdmFyIGFsdENvbnRleHQgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcmVmZXJlbmNlIDogcG9wcGVyO1xuICB2YXIgcmVmZXJlbmNlRWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocmVmZXJlbmNlRWxlbWVudCk7XG4gIHZhciBwb3BwZXJPZmZzZXRzID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlQ2xpZW50UmVjdCxcbiAgICBlbGVtZW50OiBwb3BwZXJSZWN0LFxuICAgIHN0cmF0ZWd5OiAnYWJzb2x1dGUnLFxuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pO1xuICB2YXIgcG9wcGVyQ2xpZW50UmVjdCA9IHJlY3RUb0NsaWVudFJlY3QoT2JqZWN0LmFzc2lnbih7fSwgcG9wcGVyUmVjdCwgcG9wcGVyT2Zmc2V0cykpO1xuICB2YXIgZWxlbWVudENsaWVudFJlY3QgPSBlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyID8gcG9wcGVyQ2xpZW50UmVjdCA6IHJlZmVyZW5jZUNsaWVudFJlY3Q7IC8vIHBvc2l0aXZlID0gb3ZlcmZsb3dpbmcgdGhlIGNsaXBwaW5nIHJlY3RcbiAgLy8gMCBvciBuZWdhdGl2ZSA9IHdpdGhpbiB0aGUgY2xpcHBpbmcgcmVjdFxuXG4gIHZhciBvdmVyZmxvd09mZnNldHMgPSB7XG4gICAgdG9wOiBjbGlwcGluZ0NsaWVudFJlY3QudG9wIC0gZWxlbWVudENsaWVudFJlY3QudG9wICsgcGFkZGluZ09iamVjdC50b3AsXG4gICAgYm90dG9tOiBlbGVtZW50Q2xpZW50UmVjdC5ib3R0b20gLSBjbGlwcGluZ0NsaWVudFJlY3QuYm90dG9tICsgcGFkZGluZ09iamVjdC5ib3R0b20sXG4gICAgbGVmdDogY2xpcHBpbmdDbGllbnRSZWN0LmxlZnQgLSBlbGVtZW50Q2xpZW50UmVjdC5sZWZ0ICsgcGFkZGluZ09iamVjdC5sZWZ0LFxuICAgIHJpZ2h0OiBlbGVtZW50Q2xpZW50UmVjdC5yaWdodCAtIGNsaXBwaW5nQ2xpZW50UmVjdC5yaWdodCArIHBhZGRpbmdPYmplY3QucmlnaHRcbiAgfTtcbiAgdmFyIG9mZnNldERhdGEgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLm9mZnNldDsgLy8gT2Zmc2V0cyBjYW4gYmUgYXBwbGllZCBvbmx5IHRvIHRoZSBwb3BwZXIgZWxlbWVudFxuXG4gIGlmIChlbGVtZW50Q29udGV4dCA9PT0gcG9wcGVyICYmIG9mZnNldERhdGEpIHtcbiAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0RGF0YVtwbGFjZW1lbnRdO1xuICAgIE9iamVjdC5rZXlzKG92ZXJmbG93T2Zmc2V0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbXVsdGlwbHkgPSBbcmlnaHQsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAxIDogLTE7XG4gICAgICB2YXIgYXhpcyA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihrZXkpID49IDAgPyAneScgOiAneCc7XG4gICAgICBvdmVyZmxvd09mZnNldHNba2V5XSArPSBvZmZzZXRbYXhpc10gKiBtdWx0aXBseTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdmVyZmxvd09mZnNldHM7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgcGxhY2VtZW50ID0gX29wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm91bmRhcnkgPSBfb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnMgPSBfb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9IF9vcHRpb25zLmFsbG93ZWRBdXRvUGxhY2VtZW50cyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IF9vcHRpb25zJGFsbG93ZWRBdXRvUCA9PT0gdm9pZCAwID8gcGxhY2VtZW50cyA6IF9vcHRpb25zJGFsbG93ZWRBdXRvUDtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpO1xuICB2YXIgcGxhY2VtZW50cyQxID0gdmFyaWF0aW9uID8gZmxpcFZhcmlhdGlvbnMgPyB2YXJpYXRpb25QbGFjZW1lbnRzIDogdmFyaWF0aW9uUGxhY2VtZW50cy5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gdmFyaWF0aW9uO1xuICB9KSA6IGJhc2VQbGFjZW1lbnRzO1xuICB2YXIgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzJDEuZmlsdGVyKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gYWxsb3dlZEF1dG9QbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KSA+PSAwO1xuICB9KTtcblxuICBpZiAoYWxsb3dlZFBsYWNlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgYWxsb3dlZFBsYWNlbWVudHMgPSBwbGFjZW1lbnRzJDE7XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV06IEZsb3cgc2VlbXMgdG8gaGF2ZSBwcm9ibGVtcyB3aXRoIHR3byBhcnJheSB1bmlvbnMuLi5cblxuXG4gIHZhciBvdmVyZmxvd3MgPSBhbGxvd2VkUGxhY2VtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgYWNjW3BsYWNlbWVudF0gPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KVtnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCldO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG92ZXJmbG93cykuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBvdmVyZmxvd3NbYV0gLSBvdmVyZmxvd3NbYl07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwbGFjZW1lbnQpIHtcbiAgaWYgKGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0bykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBvcHBvc2l0ZVBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHJldHVybiBbZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG59XG5cbmZ1bmN0aW9uIGZsaXAoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgX29wdGlvbnMkbWFpbkF4aXMgPSBvcHRpb25zLm1haW5BeGlzLFxuICAgICAgY2hlY2tNYWluQXhpcyA9IF9vcHRpb25zJG1haW5BeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkbWFpbkF4aXMsXG4gICAgICBfb3B0aW9ucyRhbHRBeGlzID0gb3B0aW9ucy5hbHRBeGlzLFxuICAgICAgY2hlY2tBbHRBeGlzID0gX29wdGlvbnMkYWx0QXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGFsdEF4aXMsXG4gICAgICBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgPSBvcHRpb25zLmZhbGxiYWNrUGxhY2VtZW50cyxcbiAgICAgIHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcsXG4gICAgICBib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnkgPSBvcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5ID0gb3B0aW9ucy5hbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9IG9wdGlvbnMuZmxpcFZhcmlhdGlvbnMsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zJGZsaXBWYXJpYXRpbyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGZsaXBWYXJpYXRpbyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50cyA9IG9wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzO1xuICB2YXIgcHJlZmVycmVkUGxhY2VtZW50ID0gc3RhdGUub3B0aW9ucy5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwcmVmZXJyZWRQbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gYmFzZVBsYWNlbWVudCA9PT0gcHJlZmVycmVkUGxhY2VtZW50O1xuICB2YXIgZmFsbGJhY2tQbGFjZW1lbnRzID0gc3BlY2lmaWVkRmFsbGJhY2tQbGFjZW1lbnRzIHx8IChpc0Jhc2VQbGFjZW1lbnQgfHwgIWZsaXBWYXJpYXRpb25zID8gW2dldE9wcG9zaXRlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCldIDogZ2V0RXhwYW5kZWRGYWxsYmFja1BsYWNlbWVudHMocHJlZmVycmVkUGxhY2VtZW50KSk7XG4gIHZhciBwbGFjZW1lbnRzID0gW3ByZWZlcnJlZFBsYWNlbWVudF0uY29uY2F0KGZhbGxiYWNrUGxhY2VtZW50cykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA9PT0gYXV0byA/IGNvbXB1dGVBdXRvUGxhY2VtZW50KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgIGZsaXBWYXJpYXRpb25zOiBmbGlwVmFyaWF0aW9ucyxcbiAgICAgIGFsbG93ZWRBdXRvUGxhY2VtZW50czogYWxsb3dlZEF1dG9QbGFjZW1lbnRzXG4gICAgfSkgOiBwbGFjZW1lbnQpO1xuICB9LCBbXSk7XG4gIHZhciByZWZlcmVuY2VSZWN0ID0gc3RhdGUucmVjdHMucmVmZXJlbmNlO1xuICB2YXIgcG9wcGVyUmVjdCA9IHN0YXRlLnJlY3RzLnBvcHBlcjtcbiAgdmFyIGNoZWNrc01hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIG1ha2VGYWxsYmFja0NoZWNrcyA9IHRydWU7XG4gIHZhciBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzWzBdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGxhY2VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwbGFjZW1lbnQgPSBwbGFjZW1lbnRzW2ldO1xuXG4gICAgdmFyIF9iYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuXG4gICAgdmFyIGlzU3RhcnRWYXJpYXRpb24gPSBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA9PT0gc3RhcnQ7XG4gICAgdmFyIGlzVmVydGljYWwgPSBbdG9wLCBib3R0b21dLmluZGV4T2YoX2Jhc2VQbGFjZW1lbnQpID49IDA7XG4gICAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XG4gICAgdmFyIG92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBhbHRCb3VuZGFyeTogYWx0Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nXG4gICAgfSk7XG4gICAgdmFyIG1haW5WYXJpYXRpb25TaWRlID0gaXNWZXJ0aWNhbCA/IGlzU3RhcnRWYXJpYXRpb24gPyByaWdodCA6IGxlZnQgOiBpc1N0YXJ0VmFyaWF0aW9uID8gYm90dG9tIDogdG9wO1xuXG4gICAgaWYgKHJlZmVyZW5jZVJlY3RbbGVuXSA+IHBvcHBlclJlY3RbbGVuXSkge1xuICAgICAgbWFpblZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgfVxuXG4gICAgdmFyIGFsdFZhcmlhdGlvblNpZGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluVmFyaWF0aW9uU2lkZSk7XG4gICAgdmFyIGNoZWNrcyA9IFtdO1xuXG4gICAgaWYgKGNoZWNrTWFpbkF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W19iYXNlUGxhY2VtZW50XSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tBbHRBeGlzKSB7XG4gICAgICBjaGVja3MucHVzaChvdmVyZmxvd1ttYWluVmFyaWF0aW9uU2lkZV0gPD0gMCwgb3ZlcmZsb3dbYWx0VmFyaWF0aW9uU2lkZV0gPD0gMCk7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrcy5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgIHJldHVybiBjaGVjaztcbiAgICB9KSkge1xuICAgICAgZmlyc3RGaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgICAgbWFrZUZhbGxiYWNrQ2hlY2tzID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjaGVja3NNYXAuc2V0KHBsYWNlbWVudCwgY2hlY2tzKTtcbiAgfVxuXG4gIGlmIChtYWtlRmFsbGJhY2tDaGVja3MpIHtcbiAgICAvLyBgMmAgbWF5IGJlIGRlc2lyZWQgaW4gc29tZSBjYXNlcyDigJMgcmVzZWFyY2ggbGF0ZXJcbiAgICB2YXIgbnVtYmVyT2ZDaGVja3MgPSBmbGlwVmFyaWF0aW9ucyA/IDMgOiAxO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcbiAgICAgIHZhciBmaXR0aW5nUGxhY2VtZW50ID0gcGxhY2VtZW50cy5maW5kKGZ1bmN0aW9uIChwbGFjZW1lbnQpIHtcbiAgICAgICAgdmFyIGNoZWNrcyA9IGNoZWNrc01hcC5nZXQocGxhY2VtZW50KTtcblxuICAgICAgICBpZiAoY2hlY2tzKSB7XG4gICAgICAgICAgcmV0dXJuIGNoZWNrcy5zbGljZSgwLCBfaSkuZXZlcnkoZnVuY3Rpb24gKGNoZWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZml0dGluZ1BsYWNlbWVudCkge1xuICAgICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBmaXR0aW5nUGxhY2VtZW50O1xuICAgICAgICByZXR1cm4gXCJicmVha1wiO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBfaSA9IG51bWJlck9mQ2hlY2tzOyBfaSA+IDA7IF9pLS0pIHtcbiAgICAgIHZhciBfcmV0ID0gX2xvb3AoX2kpO1xuXG4gICAgICBpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUucGxhY2VtZW50ICE9PSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQpIHtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdLl9za2lwID0gdHJ1ZTtcbiAgICBzdGF0ZS5wbGFjZW1lbnQgPSBmaXJzdEZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgc3RhdGUucmVzZXQgPSB0cnVlO1xuICB9XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgZmxpcCQxID0ge1xuICBuYW1lOiAnZmxpcCcsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBmbGlwLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddLFxuICBkYXRhOiB7XG4gICAgX3NraXA6IGZhbHNlXG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldFNpZGVPZmZzZXRzKG92ZXJmbG93LCByZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKSB7XG4gIGlmIChwcmV2ZW50ZWRPZmZzZXRzID09PSB2b2lkIDApIHtcbiAgICBwcmV2ZW50ZWRPZmZzZXRzID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IG92ZXJmbG93LnRvcCAtIHJlY3QuaGVpZ2h0IC0gcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIHJpZ2h0OiBvdmVyZmxvdy5yaWdodCAtIHJlY3Qud2lkdGggKyBwcmV2ZW50ZWRPZmZzZXRzLngsXG4gICAgYm90dG9tOiBvdmVyZmxvdy5ib3R0b20gLSByZWN0LmhlaWdodCArIHByZXZlbnRlZE9mZnNldHMueSxcbiAgICBsZWZ0OiBvdmVyZmxvdy5sZWZ0IC0gcmVjdC53aWR0aCAtIHByZXZlbnRlZE9mZnNldHMueFxuICB9O1xufVxuXG5mdW5jdGlvbiBpc0FueVNpZGVGdWxseUNsaXBwZWQob3ZlcmZsb3cpIHtcbiAgcmV0dXJuIFt0b3AsIHJpZ2h0LCBib3R0b20sIGxlZnRdLnNvbWUoZnVuY3Rpb24gKHNpZGUpIHtcbiAgICByZXR1cm4gb3ZlcmZsb3dbc2lkZV0gPj0gMDtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgcHJldmVudGVkT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucHJldmVudE92ZXJmbG93O1xuICB2YXIgcmVmZXJlbmNlT3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGVsZW1lbnRDb250ZXh0OiAncmVmZXJlbmNlJ1xuICB9KTtcbiAgdmFyIHBvcHBlckFsdE92ZXJmbG93ID0gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIHtcbiAgICBhbHRCb3VuZGFyeTogdHJ1ZVxuICB9KTtcbiAgdmFyIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHJlZmVyZW5jZU92ZXJmbG93LCByZWZlcmVuY2VSZWN0KTtcbiAgdmFyIHBvcHBlckVzY2FwZU9mZnNldHMgPSBnZXRTaWRlT2Zmc2V0cyhwb3BwZXJBbHRPdmVyZmxvdywgcG9wcGVyUmVjdCwgcHJldmVudGVkT2Zmc2V0cyk7XG4gIHZhciBpc1JlZmVyZW5jZUhpZGRlbiA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChyZWZlcmVuY2VDbGlwcGluZ09mZnNldHMpO1xuICB2YXIgaGFzUG9wcGVyRXNjYXBlZCA9IGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChwb3BwZXJFc2NhcGVPZmZzZXRzKTtcbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IHtcbiAgICByZWZlcmVuY2VDbGlwcGluZ09mZnNldHM6IHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyxcbiAgICBwb3BwZXJFc2NhcGVPZmZzZXRzOiBwb3BwZXJFc2NhcGVPZmZzZXRzLFxuICAgIGlzUmVmZXJlbmNlSGlkZGVuOiBpc1JlZmVyZW5jZUhpZGRlbixcbiAgICBoYXNQb3BwZXJFc2NhcGVkOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH07XG4gIHN0YXRlLmF0dHJpYnV0ZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIsIHtcbiAgICAnZGF0YS1wb3BwZXItcmVmZXJlbmNlLWhpZGRlbic6IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgICdkYXRhLXBvcHBlci1lc2NhcGVkJzogaGFzUG9wcGVyRXNjYXBlZFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBoaWRlJDEgPSB7XG4gIG5hbWU6ICdoaWRlJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXSxcbiAgZm46IGhpZGVcbn07XG5cbmZ1bmN0aW9uIGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgcmVjdHMsIG9mZnNldCkge1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgdmFyIGludmVydERpc3RhbmNlID0gW2xlZnQsIHRvcF0uaW5kZXhPZihiYXNlUGxhY2VtZW50KSA+PSAwID8gLTEgOiAxO1xuXG4gIHZhciBfcmVmID0gdHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJyA/IG9mZnNldChPYmplY3QuYXNzaWduKHt9LCByZWN0cywge1xuICAgIHBsYWNlbWVudDogcGxhY2VtZW50XG4gIH0pKSA6IG9mZnNldCxcbiAgICAgIHNraWRkaW5nID0gX3JlZlswXSxcbiAgICAgIGRpc3RhbmNlID0gX3JlZlsxXTtcblxuICBza2lkZGluZyA9IHNraWRkaW5nIHx8IDA7XG4gIGRpc3RhbmNlID0gKGRpc3RhbmNlIHx8IDApICogaW52ZXJ0RGlzdGFuY2U7XG4gIHJldHVybiBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IHtcbiAgICB4OiBkaXN0YW5jZSxcbiAgICB5OiBza2lkZGluZ1xuICB9IDoge1xuICAgIHg6IHNraWRkaW5nLFxuICAgIHk6IGRpc3RhbmNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIG9mZnNldChfcmVmMikge1xuICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmMi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYyLm5hbWU7XG4gIHZhciBfb3B0aW9ucyRvZmZzZXQgPSBvcHRpb25zLm9mZnNldCxcbiAgICAgIG9mZnNldCA9IF9vcHRpb25zJG9mZnNldCA9PT0gdm9pZCAwID8gWzAsIDBdIDogX29wdGlvbnMkb2Zmc2V0O1xuICB2YXIgZGF0YSA9IHBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICAgIGFjY1twbGFjZW1lbnRdID0gZGlzdGFuY2VBbmRTa2lkZGluZ1RvWFkocGxhY2VtZW50LCBzdGF0ZS5yZWN0cywgb2Zmc2V0KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciBfZGF0YSRzdGF0ZSRwbGFjZW1lbnQgPSBkYXRhW3N0YXRlLnBsYWNlbWVudF0sXG4gICAgICB4ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50LngsXG4gICAgICB5ID0gX2RhdGEkc3RhdGUkcGxhY2VtZW50Lnk7XG5cbiAgaWYgKHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cyAhPSBudWxsKSB7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnggKz0geDtcbiAgICBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMueSArPSB5O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgb2Zmc2V0JDEgPSB7XG4gIG5hbWU6ICdvZmZzZXQnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlczogWydwb3BwZXJPZmZzZXRzJ10sXG4gIGZuOiBvZmZzZXRcbn07XG5cbmZ1bmN0aW9uIHBvcHBlck9mZnNldHMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTsgLy8gT2Zmc2V0cyBhcmUgdGhlIGFjdHVhbCBwb3NpdGlvbiB0aGUgcG9wcGVyIG5lZWRzIHRvIGhhdmUgdG8gYmVcbiAgLy8gcHJvcGVybHkgcG9zaXRpb25lZCBuZWFyIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIHBsYWNlbWVudCwgYW5kIHdpbGwgYmUgYWRqdXN0ZWQgYnlcbiAgLy8gdGhlIG1vZGlmaWVycyBpbiB0aGUgbmV4dCBzdGVwXG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGNvbXB1dGVPZmZzZXRzKHtcbiAgICByZWZlcmVuY2U6IHN0YXRlLnJlY3RzLnJlZmVyZW5jZSxcbiAgICBlbGVtZW50OiBzdGF0ZS5yZWN0cy5wb3BwZXIsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgcG9wcGVyT2Zmc2V0cyQxID0ge1xuICBuYW1lOiAncG9wcGVyT2Zmc2V0cycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAncmVhZCcsXG4gIGZuOiBwb3BwZXJPZmZzZXRzLFxuICBkYXRhOiB7fVxufTtcblxuZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgZGF0YSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY2hlY2tNYWluQXhpcyB8fCBjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3knID8gdG9wIDogbGVmdDtcbiAgICB2YXIgYWx0U2lkZSA9IG1haW5BeGlzID09PSAneScgPyBib3R0b20gOiByaWdodDtcbiAgICB2YXIgbGVuID0gbWFpbkF4aXMgPT09ICd5JyA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc107XG4gICAgdmFyIG1pbiQxID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCQxID0gcG9wcGVyT2Zmc2V0c1ttYWluQXhpc10gLSBvdmVyZmxvd1thbHRTaWRlXTtcbiAgICB2YXIgYWRkaXRpdmUgPSB0ZXRoZXIgPyAtcG9wcGVyUmVjdFtsZW5dIC8gMiA6IDA7XG4gICAgdmFyIG1pbkxlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gOiBwb3BwZXJSZWN0W2xlbl07XG4gICAgdmFyIG1heExlbiA9IHZhcmlhdGlvbiA9PT0gc3RhcnQgPyAtcG9wcGVyUmVjdFtsZW5dIDogLXJlZmVyZW5jZVJlY3RbbGVuXTsgLy8gV2UgbmVlZCB0byBpbmNsdWRlIHRoZSBhcnJvdyBpbiB0aGUgY2FsY3VsYXRpb24gc28gdGhlIGFycm93IGRvZXNuJ3QgZ29cbiAgICAvLyBvdXRzaWRlIHRoZSByZWZlcmVuY2UgYm91bmRzXG5cbiAgICB2YXIgYXJyb3dFbGVtZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3c7XG4gICAgdmFyIGFycm93UmVjdCA9IHRldGhlciAmJiBhcnJvd0VsZW1lbnQgPyBnZXRMYXlvdXRSZWN0KGFycm93RWxlbWVudCkgOiB7XG4gICAgICB3aWR0aDogMCxcbiAgICAgIGhlaWdodDogMFxuICAgIH07XG4gICAgdmFyIGFycm93UGFkZGluZ09iamVjdCA9IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXSA/IHN0YXRlLm1vZGlmaWVyc0RhdGFbJ2Fycm93I3BlcnNpc3RlbnQnXS5wYWRkaW5nIDogZ2V0RnJlc2hTaWRlT2JqZWN0KCk7XG4gICAgdmFyIGFycm93UGFkZGluZ01pbiA9IGFycm93UGFkZGluZ09iamVjdFttYWluU2lkZV07XG4gICAgdmFyIGFycm93UGFkZGluZ01heCA9IGFycm93UGFkZGluZ09iamVjdFthbHRTaWRlXTsgLy8gSWYgdGhlIHJlZmVyZW5jZSBsZW5ndGggaXMgc21hbGxlciB0aGFuIHRoZSBhcnJvdyBsZW5ndGgsIHdlIGRvbid0IHdhbnRcbiAgICAvLyB0byBpbmNsdWRlIGl0cyBmdWxsIHNpemUgaW4gdGhlIGNhbGN1bGF0aW9uLiBJZiB0aGUgcmVmZXJlbmNlIGlzIHNtYWxsXG4gICAgLy8gYW5kIG5lYXIgdGhlIGVkZ2Ugb2YgYSBib3VuZGFyeSwgdGhlIHBvcHBlciBjYW4gb3ZlcmZsb3cgZXZlbiBpZiB0aGVcbiAgICAvLyByZWZlcmVuY2UgaXMgbm90IG92ZXJmbG93aW5nIGFzIHdlbGwgKGUuZy4gdmlydHVhbCBlbGVtZW50cyB3aXRoIG5vXG4gICAgLy8gd2lkdGggb3IgaGVpZ2h0KVxuXG4gICAgdmFyIGFycm93TGVuID0gd2l0aGluKDAsIHJlZmVyZW5jZVJlY3RbbGVuXSwgYXJyb3dSZWN0W2xlbl0pO1xuICAgIHZhciBtaW5PZmZzZXQgPSBpc0Jhc2VQbGFjZW1lbnQgPyByZWZlcmVuY2VSZWN0W2xlbl0gLyAyIC0gYWRkaXRpdmUgLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIHRldGhlck9mZnNldFZhbHVlIDogbWluTGVuIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSB0ZXRoZXJPZmZzZXRWYWx1ZTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gLXJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgKyBhZGRpdGl2ZSArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgdGV0aGVyT2Zmc2V0VmFsdWUgOiBtYXhMZW4gKyBhcnJvd0xlbiArIGFycm93UGFkZGluZ01heCArIHRldGhlck9mZnNldFZhbHVlO1xuICAgIHZhciBhcnJvd09mZnNldFBhcmVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93ICYmIGdldE9mZnNldFBhcmVudChzdGF0ZS5lbGVtZW50cy5hcnJvdyk7XG4gICAgdmFyIGNsaWVudE9mZnNldCA9IGFycm93T2Zmc2V0UGFyZW50ID8gbWFpbkF4aXMgPT09ICd5JyA/IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFRvcCB8fCAwIDogYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50TGVmdCB8fCAwIDogMDtcbiAgICB2YXIgb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0ID8gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXRbc3RhdGUucGxhY2VtZW50XVttYWluQXhpc10gOiAwO1xuICAgIHZhciB0ZXRoZXJNaW4gPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSArIG1pbk9mZnNldCAtIG9mZnNldE1vZGlmaWVyVmFsdWUgLSBjbGllbnRPZmZzZXQ7XG4gICAgdmFyIHRldGhlck1heCA9IHBvcHBlck9mZnNldHNbbWFpbkF4aXNdICsgbWF4T2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZTtcblxuICAgIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgICB2YXIgcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1pbihtaW4kMSwgdGV0aGVyTWluKSA6IG1pbiQxLCBvZmZzZXQsIHRldGhlciA/IG1heChtYXgkMSwgdGV0aGVyTWF4KSA6IG1heCQxKTtcbiAgICAgIHBvcHBlck9mZnNldHNbbWFpbkF4aXNdID0gcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVttYWluQXhpc10gPSBwcmV2ZW50ZWRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrQWx0QXhpcykge1xuICAgICAgdmFyIF9tYWluU2lkZSA9IG1haW5BeGlzID09PSAneCcgPyB0b3AgOiBsZWZ0O1xuXG4gICAgICB2YXIgX2FsdFNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gYm90dG9tIDogcmlnaHQ7XG5cbiAgICAgIHZhciBfb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1thbHRBeGlzXTtcblxuICAgICAgdmFyIF9taW4gPSBfb2Zmc2V0ICsgb3ZlcmZsb3dbX21haW5TaWRlXTtcblxuICAgICAgdmFyIF9tYXggPSBfb2Zmc2V0IC0gb3ZlcmZsb3dbX2FsdFNpZGVdO1xuXG4gICAgICB2YXIgX3ByZXZlbnRlZE9mZnNldCA9IHdpdGhpbih0ZXRoZXIgPyBtaW4oX21pbiwgdGV0aGVyTWluKSA6IF9taW4sIF9vZmZzZXQsIHRldGhlciA/IG1heChfbWF4LCB0ZXRoZXJNYXgpIDogX21heCk7XG5cbiAgICAgIHBvcHBlck9mZnNldHNbYWx0QXhpc10gPSBfcHJldmVudGVkT2Zmc2V0O1xuICAgICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIHByZXZlbnRPdmVyZmxvdyQxID0ge1xuICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IHByZXZlbnRPdmVyZmxvdyxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydvZmZzZXQnXVxufTtcblxuZnVuY3Rpb24gZ2V0SFRNTEVsZW1lbnRTY3JvbGwoZWxlbWVudCkge1xuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldE5vZGVTY3JvbGwobm9kZSkge1xuICBpZiAobm9kZSA9PT0gZ2V0V2luZG93KG5vZGUpIHx8ICFpc0hUTUxFbGVtZW50KG5vZGUpKSB7XG4gICAgcmV0dXJuIGdldFdpbmRvd1Njcm9sbChub2RlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0SFRNTEVsZW1lbnRTY3JvbGwobm9kZSk7XG4gIH1cbn1cblxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5mdW5jdGlvbiBnZXRDb21wb3NpdGVSZWN0KGVsZW1lbnRPclZpcnR1YWxFbGVtZW50LCBvZmZzZXRQYXJlbnQsIGlzRml4ZWQpIHtcbiAgaWYgKGlzRml4ZWQgPT09IHZvaWQgMCkge1xuICAgIGlzRml4ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQpO1xuICB2YXIgaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCk7XG4gIHZhciBzY3JvbGwgPSB7XG4gICAgc2Nyb2xsTGVmdDogMCxcbiAgICBzY3JvbGxUb3A6IDBcbiAgfTtcbiAgdmFyIG9mZnNldHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwXG4gIH07XG5cbiAgaWYgKGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50IHx8ICFpc09mZnNldFBhcmVudEFuRWxlbWVudCAmJiAhaXNGaXhlZCkge1xuICAgIGlmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpICE9PSAnYm9keScgfHwgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMDc4XG4gICAgaXNTY3JvbGxQYXJlbnQoZG9jdW1lbnRFbGVtZW50KSkge1xuICAgICAgc2Nyb2xsID0gZ2V0Tm9kZVNjcm9sbChvZmZzZXRQYXJlbnQpO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkpIHtcbiAgICAgIG9mZnNldHMgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qob2Zmc2V0UGFyZW50KTtcbiAgICAgIG9mZnNldHMueCArPSBvZmZzZXRQYXJlbnQuY2xpZW50TGVmdDtcbiAgICAgIG9mZnNldHMueSArPSBvZmZzZXRQYXJlbnQuY2xpZW50VG9wO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBvZmZzZXRzLnggPSBnZXRXaW5kb3dTY3JvbGxCYXJYKGRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZWN0LmxlZnQgKyBzY3JvbGwuc2Nyb2xsTGVmdCAtIG9mZnNldHMueCxcbiAgICB5OiByZWN0LnRvcCArIHNjcm9sbC5zY3JvbGxUb3AgLSBvZmZzZXRzLnksXG4gICAgd2lkdGg6IHJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICB9O1xufVxuXG5mdW5jdGlvbiBvcmRlcihtb2RpZmllcnMpIHtcbiAgdmFyIG1hcCA9IG5ldyBNYXAoKTtcbiAgdmFyIHZpc2l0ZWQgPSBuZXcgU2V0KCk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgbWFwLnNldChtb2RpZmllci5uYW1lLCBtb2RpZmllcik7XG4gIH0pOyAvLyBPbiB2aXNpdGluZyBvYmplY3QsIGNoZWNrIGZvciBpdHMgZGVwZW5kZW5jaWVzIGFuZCB2aXNpdCB0aGVtIHJlY3Vyc2l2ZWx5XG5cbiAgZnVuY3Rpb24gc29ydChtb2RpZmllcikge1xuICAgIHZpc2l0ZWQuYWRkKG1vZGlmaWVyLm5hbWUpO1xuICAgIHZhciByZXF1aXJlcyA9IFtdLmNvbmNhdChtb2RpZmllci5yZXF1aXJlcyB8fCBbXSwgbW9kaWZpZXIucmVxdWlyZXNJZkV4aXN0cyB8fCBbXSk7XG4gICAgcmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBpZiAoIXZpc2l0ZWQuaGFzKGRlcCkpIHtcbiAgICAgICAgdmFyIGRlcE1vZGlmaWVyID0gbWFwLmdldChkZXApO1xuXG4gICAgICAgIGlmIChkZXBNb2RpZmllcikge1xuICAgICAgICAgIHNvcnQoZGVwTW9kaWZpZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmVzdWx0LnB1c2gobW9kaWZpZXIpO1xuICB9XG5cbiAgbW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgaWYgKCF2aXNpdGVkLmhhcyhtb2RpZmllci5uYW1lKSkge1xuICAgICAgLy8gY2hlY2sgZm9yIHZpc2l0ZWQgb2JqZWN0XG4gICAgICBzb3J0KG1vZGlmaWVyKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBvcmRlck1vZGlmaWVycyhtb2RpZmllcnMpIHtcbiAgLy8gb3JkZXIgYmFzZWQgb24gZGVwZW5kZW5jaWVzXG4gIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXIobW9kaWZpZXJzKTsgLy8gb3JkZXIgYmFzZWQgb24gcGhhc2VcblxuICByZXR1cm4gbW9kaWZpZXJQaGFzZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBoYXNlKSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQob3JkZXJlZE1vZGlmaWVycy5maWx0ZXIoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgICByZXR1cm4gbW9kaWZpZXIucGhhc2UgPT09IHBoYXNlO1xuICAgIH0pKTtcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICB2YXIgcGVuZGluZztcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXBlbmRpbmcpIHtcbiAgICAgIHBlbmRpbmcgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBwZW5kaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgIHJlc29sdmUoZm4oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBlbmRpbmc7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlQnlOYW1lKG1vZGlmaWVycykge1xuICB2YXIgbWVyZ2VkID0gbW9kaWZpZXJzLnJlZHVjZShmdW5jdGlvbiAobWVyZ2VkLCBjdXJyZW50KSB7XG4gICAgdmFyIGV4aXN0aW5nID0gbWVyZ2VkW2N1cnJlbnQubmFtZV07XG4gICAgbWVyZ2VkW2N1cnJlbnQubmFtZV0gPSBleGlzdGluZyA/IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLCBjdXJyZW50LCB7XG4gICAgICBvcHRpb25zOiBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZy5vcHRpb25zLCBjdXJyZW50Lm9wdGlvbnMpLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3RpbmcuZGF0YSwgY3VycmVudC5kYXRhKVxuICAgIH0pIDogY3VycmVudDtcbiAgICByZXR1cm4gbWVyZ2VkO1xuICB9LCB7fSk7IC8vIElFMTEgZG9lcyBub3Qgc3VwcG9ydCBPYmplY3QudmFsdWVzXG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKG1lcmdlZCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbWVyZ2VkW2tleV07XG4gIH0pO1xufVxuXG52YXIgREVGQVVMVF9PUFRJT05TID0ge1xuICBwbGFjZW1lbnQ6ICdib3R0b20nLFxuICBtb2RpZmllcnM6IFtdLFxuICBzdHJhdGVneTogJ2Fic29sdXRlJ1xufTtcblxuZnVuY3Rpb24gYXJlVmFsaWRFbGVtZW50cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiAhYXJncy5zb21lKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEoZWxlbWVudCAmJiB0eXBlb2YgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPT09ICdmdW5jdGlvbicpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcG9wcGVyR2VuZXJhdG9yKGdlbmVyYXRvck9wdGlvbnMpIHtcbiAgaWYgKGdlbmVyYXRvck9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIGdlbmVyYXRvck9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfZ2VuZXJhdG9yT3B0aW9ucyA9IGdlbmVyYXRvck9wdGlvbnMsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPSBfZ2VuZXJhdG9yT3B0aW9ucy5kZWZhdWx0TW9kaWZpZXJzLFxuICAgICAgZGVmYXVsdE1vZGlmaWVycyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZiA9PT0gdm9pZCAwID8gW10gOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYsXG4gICAgICBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE9wdGlvbnMsXG4gICAgICBkZWZhdWx0T3B0aW9ucyA9IF9nZW5lcmF0b3JPcHRpb25zJGRlZjIgPT09IHZvaWQgMCA/IERFRkFVTFRfT1BUSU9OUyA6IF9nZW5lcmF0b3JPcHRpb25zJGRlZjI7XG4gIHJldHVybiBmdW5jdGlvbiBjcmVhdGVQb3BwZXIocmVmZXJlbmNlLCBwb3BwZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgICAgIG9yZGVyZWRNb2RpZmllcnM6IFtdLFxuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9PUFRJT05TLCBkZWZhdWx0T3B0aW9ucyksXG4gICAgICBtb2RpZmllcnNEYXRhOiB7fSxcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHJlZmVyZW5jZTogcmVmZXJlbmNlLFxuICAgICAgICBwb3BwZXI6IHBvcHBlclxuICAgICAgfSxcbiAgICAgIGF0dHJpYnV0ZXM6IHt9LFxuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gICAgdmFyIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB2YXIgaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBzZXRPcHRpb25zOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgfSk7IC8vIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBtb2RpZmllcnMgc28gdGhhdCB0aGUgY29uc3VtZXIgd2lsbCBnZXQgd2FybmVkXG5cbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICAvLyBTeW5jIHVwZGF0ZSDigJMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgLy8gbG9naWMuXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBTdG9yZSB0aGUgcmVmZXJlbmNlIGFuZCBwb3BwZXIgcmVjdHMgdG8gYmUgcmVhZCBieSBtb2RpZmllcnNcblxuXG4gICAgICAgIHN0YXRlLnJlY3RzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogZ2V0Q29tcG9zaXRlUmVjdChyZWZlcmVuY2UsIGdldE9mZnNldFBhcmVudChwb3BwZXIpLCBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5ID09PSAnZml4ZWQnKSxcbiAgICAgICAgICBwb3BwZXI6IGdldExheW91dFJlY3QocG9wcGVyKVxuICAgICAgICB9OyAvLyBNb2RpZmllcnMgaGF2ZSB0aGUgYWJpbGl0eSB0byByZXNldCB0aGUgY3VycmVudCB1cGRhdGUgY3ljbGUuIFRoZVxuICAgICAgICAvLyBtb3N0IGNvbW1vbiB1c2UgY2FzZSBmb3IgdGhpcyBpcyB0aGUgYGZsaXBgIG1vZGlmaWVyIGNoYW5naW5nIHRoZVxuICAgICAgICAvLyBwbGFjZW1lbnQsIHdoaWNoIHRoZW4gbmVlZHMgdG8gcmUtcnVuIGFsbCB0aGUgbW9kaWZpZXJzLCBiZWNhdXNlIHRoZVxuICAgICAgICAvLyBsb2dpYyB3YXMgcHJldmlvdXNseSByYW4gZm9yIHRoZSBwcmV2aW91cyBwbGFjZW1lbnQgYW5kIGlzIHRoZXJlZm9yZVxuICAgICAgICAvLyBzdGFsZS9pbmNvcnJlY3RcblxuICAgICAgICBzdGF0ZS5yZXNldCA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDsgLy8gT24gZWFjaCB1cGRhdGUgY3ljbGUsIHRoZSBgbW9kaWZpZXJzRGF0YWAgcHJvcGVydHkgZm9yIGVhY2ggbW9kaWZpZXJcbiAgICAgICAgLy8gaXMgZmlsbGVkIHdpdGggdGhlIGluaXRpYWwgZGF0YSBzcGVjaWZpZWQgYnkgdGhlIG1vZGlmaWVyLiBUaGlzIG1lYW5zXG4gICAgICAgIC8vIGl0IGRvZXNuJ3QgcGVyc2lzdCBhbmQgaXMgZnJlc2ggb24gZWFjaCB1cGRhdGUuXG4gICAgICAgIC8vIFRvIGVuc3VyZSBwZXJzaXN0ZW50IGRhdGEsIHVzZSBgJHtuYW1lfSNwZXJzaXN0ZW50YFxuXG4gICAgICAgIHN0YXRlLm9yZGVyZWRNb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubW9kaWZpZXJzRGF0YVttb2RpZmllci5uYW1lXSA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGlmaWVyLmRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcblxuICAgICAgICAgIGlmIChzdGF0ZS5yZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RhdGUucmVzZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgX3N0YXRlJG9yZGVyZWRNb2RpZmllID0gc3RhdGUub3JkZXJlZE1vZGlmaWVyc1tpbmRleF0sXG4gICAgICAgICAgICAgIGZuID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLmZuLFxuICAgICAgICAgICAgICBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm9wdGlvbnMsXG4gICAgICAgICAgICAgIF9vcHRpb25zID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9PT0gdm9pZCAwID8ge30gOiBfc3RhdGUkb3JkZXJlZE1vZGlmaWUyLFxuICAgICAgICAgICAgICBuYW1lID0gX3N0YXRlJG9yZGVyZWRNb2RpZmllLm5hbWU7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IGZuKHtcbiAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBfb3B0aW9ucyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgaW5zdGFuY2U6IGluc3RhbmNlXG4gICAgICAgICAgICB9KSB8fCBzdGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBBc3luYyBhbmQgb3B0aW1pc3RpY2FsbHkgb3B0aW1pemVkIHVwZGF0ZSDigJMgaXQgd2lsbCBub3QgYmUgZXhlY3V0ZWQgaWZcbiAgICAgIC8vIG5vdCBuZWNlc3NhcnkgKGRlYm91bmNlZCB0byBydW4gYXQgbW9zdCBvbmNlLXBlci10aWNrKVxuICAgICAgdXBkYXRlOiBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIGluc3RhbmNlLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgcmVzb2x2ZShzdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSksXG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBjbGVhbnVwTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIGlzRGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFhcmVWYWxpZEVsZW1lbnRzKHJlZmVyZW5jZSwgcG9wcGVyKSkge1xuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAvLyBvbmUuXG5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgICAgIF9yZWYzJG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkb3B0aW9ucyxcbiAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5cbnZhciBkZWZhdWx0TW9kaWZpZXJzID0gW2V2ZW50TGlzdGVuZXJzLCBwb3BwZXJPZmZzZXRzJDEsIGNvbXB1dGVTdHlsZXMkMSwgYXBwbHlTdHlsZXMkMSwgb2Zmc2V0JDEsIGZsaXAkMSwgcHJldmVudE92ZXJmbG93JDEsIGFycm93JDEsIGhpZGUkMV07XG52YXIgY3JlYXRlUG9wcGVyID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnNcbn0pOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9nZXRDZW50ZXJlZFN0eWxlUG9wcGVyTW9kaWZpZXIoKSB7XG4gIHJldHVybiBbe1xuICAgIG5hbWU6ICdhcHBseVN0eWxlcycsXG5cbiAgICBmbih7XG4gICAgICBzdGF0ZVxuICAgIH0pIHtcbiAgICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAobmFtZSAhPT0gJ3BvcHBlcicpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSdcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LnN0eWxlLCBzdHlsZSk7XG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9LCB7XG4gICAgbmFtZTogJ2NvbXB1dGVTdHlsZXMnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGFkYXB0aXZlOiBmYWxzZVxuICAgIH1cbiAgfV07XG59XG4vKipcbiAqIEdlbmVyYXRlcyB0aGUgYXJyYXkgb2Ygb3B0aW9ucyBmb3IgYSB0b29sdGlwIHRoYXQgZG9lc24ndCBoYXZlIGFcbiAqIHRhcmdldCBlbGVtZW50IGluIHRoZSBET00gLS0gYW5kIHRodXMgaXMgcG9zaXRpb25lZCBpbiB0aGUgY2VudGVyXG4gKiBvZiB0aGUgdmlld1xuICpcbiAqIEBwYXJhbSB7U3RlcH0gc3RlcCBUaGUgc3RlcCBpbnN0YW5jZVxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZmluYWwgUG9wcGVyIG9wdGlvbnMgb2JqZWN0XG4gKi9cblxuXG5mdW5jdGlvbiBtYWtlQ2VudGVyZWRQb3BwZXIoc3RlcCkge1xuICBjb25zdCBjZW50ZXJlZFN0eWxlUG9wcGVyTW9kaWZpZXIgPSBfZ2V0Q2VudGVyZWRTdHlsZVBvcHBlck1vZGlmaWVyKCk7XG5cbiAgbGV0IHBvcHBlck9wdGlvbnMgPSB7XG4gICAgcGxhY2VtZW50OiAndG9wJyxcbiAgICBzdHJhdGVneTogJ2ZpeGVkJyxcbiAgICBtb2RpZmllcnM6IFt7XG4gICAgICBuYW1lOiAnZm9jdXNBZnRlclJlbmRlcicsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgcGhhc2U6ICdhZnRlcldyaXRlJyxcblxuICAgICAgZm4oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChzdGVwLmVsKSB7XG4gICAgICAgICAgICBzdGVwLmVsLmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAzMDApO1xuICAgICAgfVxuXG4gICAgfV1cbiAgfTtcbiAgcG9wcGVyT3B0aW9ucyA9IF9leHRlbmRzKHt9LCBwb3BwZXJPcHRpb25zLCB7XG4gICAgbW9kaWZpZXJzOiBBcnJheS5mcm9tKG5ldyBTZXQoWy4uLnBvcHBlck9wdGlvbnMubW9kaWZpZXJzLCAuLi5jZW50ZXJlZFN0eWxlUG9wcGVyTW9kaWZpZXJdKSlcbiAgfSk7XG4gIHJldHVybiBwb3BwZXJPcHRpb25zO1xufVxuXG4vKipcbiAqIEVuc3VyZSBjbGFzcyBwcmVmaXggZW5kcyBpbiBgLWBcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggVGhlIHByZWZpeCB0byBwcmVwZW5kIHRvIHRoZSBjbGFzcyBuYW1lcyBnZW5lcmF0ZWQgYnkgbmFuby1jc3NcbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHByZWZpeCBlbmRpbmcgaW4gYC1gXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplUHJlZml4KHByZWZpeCkge1xuICBpZiAoIWlzU3RyaW5nKHByZWZpeCkgfHwgcHJlZml4ID09PSAnJykge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBwcmVmaXguY2hhckF0KHByZWZpeC5sZW5ndGggLSAxKSAhPT0gJy0nID8gYCR7cHJlZml4fS1gIDogcHJlZml4O1xufVxuLyoqXG4gKiBDaGVja3MgaWYgb3B0aW9ucy5hdHRhY2hUby5lbGVtZW50IGlzIGEgc3RyaW5nLCBhbmQgaWYgc28sIHRyaWVzIHRvIGZpbmQgdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RlcH0gc3RlcCBUaGUgc3RlcCBpbnN0YW5jZVxuICogQHJldHVybnMge3tlbGVtZW50LCBvbn19XG4gKiBgZWxlbWVudGAgaXMgYSBxdWFsaWZpZWQgSFRNTCBFbGVtZW50XG4gKiBgb25gIGlzIGEgc3RyaW5nIHBvc2l0aW9uIHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VBdHRhY2hUbyhzdGVwKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSBzdGVwLm9wdGlvbnMuYXR0YWNoVG8gfHwge307XG4gIGNvbnN0IHJldHVybk9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblxuICBpZiAoaXNTdHJpbmcob3B0aW9ucy5lbGVtZW50KSkge1xuICAgIC8vIENhbid0IG92ZXJyaWRlIHRoZSBlbGVtZW50IGluIHVzZXIgb3B0cyByZWZlcmVuY2UgYmVjYXVzZSB3ZSBjYW4ndFxuICAgIC8vIGd1YXJhbnRlZSB0aGF0IHRoZSBlbGVtZW50IHdpbGwgZXhpc3QgaW4gdGhlIGZ1dHVyZS5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuT3B0cy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmVsZW1lbnQpO1xuICAgIH0gY2F0Y2ggKGUpIHsvLyBUT0RPXG4gICAgfVxuXG4gICAgaWYgKCFyZXR1cm5PcHRzLmVsZW1lbnQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFRoZSBlbGVtZW50IGZvciB0aGlzIFNoZXBoZXJkIHN0ZXAgd2FzIG5vdCBmb3VuZCAke29wdGlvbnMuZWxlbWVudH1gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0dXJuT3B0cztcbn1cbi8qKlxuICogRGV0ZXJtaW5lcyBvcHRpb25zIGZvciB0aGUgdG9vbHRpcCBhbmQgaW5pdGlhbGl6ZXNcbiAqIGBzdGVwLnRvb2x0aXBgIGFzIGEgUG9wcGVyIGluc3RhbmNlLlxuICogQHBhcmFtIHtTdGVwfSBzdGVwIFRoZSBzdGVwIGluc3RhbmNlXG4gKi9cblxuZnVuY3Rpb24gc2V0dXBUb29sdGlwKHN0ZXApIHtcbiAgaWYgKHN0ZXAudG9vbHRpcCkge1xuICAgIHN0ZXAudG9vbHRpcC5kZXN0cm95KCk7XG4gIH1cblxuICBjb25zdCBhdHRhY2hUb09wdGlvbnMgPSBwYXJzZUF0dGFjaFRvKHN0ZXApO1xuICBsZXQgdGFyZ2V0ID0gYXR0YWNoVG9PcHRpb25zLmVsZW1lbnQ7XG4gIGNvbnN0IHBvcHBlck9wdGlvbnMgPSBnZXRQb3BwZXJPcHRpb25zKGF0dGFjaFRvT3B0aW9ucywgc3RlcCk7XG5cbiAgaWYgKHN0ZXAuaXNDZW50ZXJlZCgpKSB7XG4gICAgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcbiAgICBjb25zdCBjb250ZW50ID0gc3RlcC5zaGVwaGVyZEVsZW1lbnRDb21wb25lbnQuZ2V0RWxlbWVudCgpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2hlcGhlcmQtY2VudGVyZWQnKTtcbiAgfVxuXG4gIHN0ZXAudG9vbHRpcCA9IGNyZWF0ZVBvcHBlcih0YXJnZXQsIHN0ZXAuZWwsIHBvcHBlck9wdGlvbnMpO1xuICBzdGVwLnRhcmdldCA9IGF0dGFjaFRvT3B0aW9ucy5lbGVtZW50O1xuICByZXR1cm4gcG9wcGVyT3B0aW9ucztcbn1cbi8qKlxuICogQ3JlYXRlIGEgdW5pcXVlIGlkIGZvciBzdGVwcywgdG91cnMsIG1vZGFscywgZXRjXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gdXVpZCgpIHtcbiAgbGV0IGQgPSBEYXRlLm5vdygpO1xuICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBjID0+IHtcbiAgICBjb25zdCByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgIGQgPSBNYXRoLmZsb29yKGQgLyAxNik7XG4gICAgcmV0dXJuIChjID09ICd4JyA/IHIgOiByICYgMHgzIHwgMHg4KS50b1N0cmluZygxNik7XG4gIH0pO1xufVxuLyoqXG4gKiBHZXRzIHRoZSBgUG9wcGVyYCBvcHRpb25zIGZyb20gYSBzZXQgb2YgYmFzZSBgYXR0YWNoVG9gIG9wdGlvbnNcbiAqIEBwYXJhbSBhdHRhY2hUb09wdGlvbnNcbiAqIEBwYXJhbSB7U3RlcH0gc3RlcCBUaGUgc3RlcCBpbnN0YW5jZVxuICogQHJldHVybiB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRQb3BwZXJPcHRpb25zKGF0dGFjaFRvT3B0aW9ucywgc3RlcCkge1xuICBsZXQgcG9wcGVyT3B0aW9ucyA9IHtcbiAgICBtb2RpZmllcnM6IFt7XG4gICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYWx0QXhpczogdHJ1ZSxcbiAgICAgICAgdGV0aGVyOiBmYWxzZVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdmb2N1c0FmdGVyUmVuZGVyJyxcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBwaGFzZTogJ2FmdGVyV3JpdGUnLFxuXG4gICAgICBmbigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHN0ZXAuZWwpIHtcbiAgICAgICAgICAgIHN0ZXAuZWwuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDMwMCk7XG4gICAgICB9XG5cbiAgICB9XSxcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJ1xuICB9O1xuXG4gIGlmIChzdGVwLmlzQ2VudGVyZWQoKSkge1xuICAgIHBvcHBlck9wdGlvbnMgPSBtYWtlQ2VudGVyZWRQb3BwZXIoc3RlcCk7XG4gIH0gZWxzZSB7XG4gICAgcG9wcGVyT3B0aW9ucy5wbGFjZW1lbnQgPSBhdHRhY2hUb09wdGlvbnMub247XG4gIH1cblxuICBjb25zdCBkZWZhdWx0U3RlcE9wdGlvbnMgPSBzdGVwLnRvdXIgJiYgc3RlcC50b3VyLm9wdGlvbnMgJiYgc3RlcC50b3VyLm9wdGlvbnMuZGVmYXVsdFN0ZXBPcHRpb25zO1xuXG4gIGlmIChkZWZhdWx0U3RlcE9wdGlvbnMpIHtcbiAgICBwb3BwZXJPcHRpb25zID0gX21lcmdlTW9kaWZpZXJzKGRlZmF1bHRTdGVwT3B0aW9ucywgcG9wcGVyT3B0aW9ucyk7XG4gIH1cblxuICBwb3BwZXJPcHRpb25zID0gX21lcmdlTW9kaWZpZXJzKHN0ZXAub3B0aW9ucywgcG9wcGVyT3B0aW9ucyk7XG4gIHJldHVybiBwb3BwZXJPcHRpb25zO1xufVxuXG5mdW5jdGlvbiBfbWVyZ2VNb2RpZmllcnMoc3RlcE9wdGlvbnMsIHBvcHBlck9wdGlvbnMpIHtcbiAgaWYgKHN0ZXBPcHRpb25zLnBvcHBlck9wdGlvbnMpIHtcbiAgICBsZXQgbWVyZ2VkUG9wcGVyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHBvcHBlck9wdGlvbnMsIHN0ZXBPcHRpb25zLnBvcHBlck9wdGlvbnMpO1xuXG4gICAgaWYgKHN0ZXBPcHRpb25zLnBvcHBlck9wdGlvbnMubW9kaWZpZXJzICYmIHN0ZXBPcHRpb25zLnBvcHBlck9wdGlvbnMubW9kaWZpZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gc3RlcE9wdGlvbnMucG9wcGVyT3B0aW9ucy5tb2RpZmllcnMubWFwKG1vZCA9PiBtb2QubmFtZSk7XG4gICAgICBjb25zdCBmaWx0ZXJlZE1vZGlmaWVycyA9IHBvcHBlck9wdGlvbnMubW9kaWZpZXJzLmZpbHRlcihtb2QgPT4gIW5hbWVzLmluY2x1ZGVzKG1vZC5uYW1lKSk7XG4gICAgICBtZXJnZWRQb3BwZXJPcHRpb25zLm1vZGlmaWVycyA9IEFycmF5LmZyb20obmV3IFNldChbLi4uZmlsdGVyZWRNb2RpZmllcnMsIC4uLnN0ZXBPcHRpb25zLnBvcHBlck9wdGlvbnMubW9kaWZpZXJzXSkpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRQb3BwZXJPcHRpb25zO1xuICB9XG5cbiAgcmV0dXJuIHBvcHBlck9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBhc3NpZ24odGFyLCBzcmMpIHtcbiAgLy8gQHRzLWlnbm9yZVxuICBmb3IgKGNvbnN0IGsgaW4gc3JjKSB0YXJba10gPSBzcmNba107XG5cbiAgcmV0dXJuIHRhcjtcbn1cblxuZnVuY3Rpb24gcnVuKGZuKSB7XG4gIHJldHVybiBmbigpO1xufVxuXG5mdW5jdGlvbiBibGFua19vYmplY3QoKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuXG5mdW5jdGlvbiBydW5fYWxsKGZucykge1xuICBmbnMuZm9yRWFjaChydW4pO1xufVxuXG5mdW5jdGlvbiBpc19mdW5jdGlvbih0aGluZykge1xuICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBzYWZlX25vdF9lcXVhbChhLCBiKSB7XG4gIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8IGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc19lbXB0eShvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuXG5mdW5jdGlvbiBhcHBlbmQodGFyZ2V0LCBub2RlKSB7XG4gIHRhcmdldC5hcHBlbmRDaGlsZChub2RlKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gIHRhcmdldC5pbnNlcnRCZWZvcmUobm9kZSwgYW5jaG9yIHx8IG51bGwpO1xufVxuXG5mdW5jdGlvbiBkZXRhY2gobm9kZSkge1xuICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3lfZWFjaChpdGVyYXRpb25zLCBkZXRhY2hpbmcpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGl0ZXJhdGlvbnNbaV0pIGl0ZXJhdGlvbnNbaV0uZChkZXRhY2hpbmcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnQobmFtZSkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbn1cblxuZnVuY3Rpb24gc3ZnX2VsZW1lbnQobmFtZSkge1xuICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIG5hbWUpO1xufVxuXG5mdW5jdGlvbiB0ZXh0KGRhdGEpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xufVxuXG5mdW5jdGlvbiBzcGFjZSgpIHtcbiAgcmV0dXJuIHRleHQoJyAnKTtcbn1cblxuZnVuY3Rpb24gZW1wdHkoKSB7XG4gIHJldHVybiB0ZXh0KCcnKTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gIHJldHVybiAoKSA9PiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7ZWxzZSBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSAhPT0gdmFsdWUpIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBzZXRfYXR0cmlidXRlcyhub2RlLCBhdHRyaWJ1dGVzKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXyk7XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgIGlmIChhdHRyaWJ1dGVzW2tleV0gPT0gbnVsbCkge1xuICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoa2V5KTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3N0eWxlJykge1xuICAgICAgbm9kZS5zdHlsZS5jc3NUZXh0ID0gYXR0cmlidXRlc1trZXldO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcbiAgICAgIG5vZGUudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgfSBlbHNlIGlmIChkZXNjcmlwdG9yc1trZXldICYmIGRlc2NyaXB0b3JzW2tleV0uc2V0KSB7XG4gICAgICBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dHIobm9kZSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGlsZHJlbihlbGVtZW50KSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgZWxlbWVudC5jbGFzc0xpc3RbdG9nZ2xlID8gJ2FkZCcgOiAncmVtb3ZlJ10obmFtZSk7XG59XG5cbmxldCBjdXJyZW50X2NvbXBvbmVudDtcblxuZnVuY3Rpb24gc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCkge1xuICBjdXJyZW50X2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkge1xuICBpZiAoIWN1cnJlbnRfY29tcG9uZW50KSB0aHJvdyBuZXcgRXJyb3IoJ0Z1bmN0aW9uIGNhbGxlZCBvdXRzaWRlIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbicpO1xuICByZXR1cm4gY3VycmVudF9jb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIG9uTW91bnQoZm4pIHtcbiAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fbW91bnQucHVzaChmbik7XG59XG5cbmZ1bmN0aW9uIGFmdGVyVXBkYXRlKGZuKSB7XG4gIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmFmdGVyX3VwZGF0ZS5wdXNoKGZuKTtcbn1cblxuY29uc3QgZGlydHlfY29tcG9uZW50cyA9IFtdO1xuY29uc3QgYmluZGluZ19jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlbmRlcl9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IGZsdXNoX2NhbGxiYWNrcyA9IFtdO1xuY29uc3QgcmVzb2x2ZWRfcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xubGV0IHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcblxuZnVuY3Rpb24gc2NoZWR1bGVfdXBkYXRlKCkge1xuICBpZiAoIXVwZGF0ZV9zY2hlZHVsZWQpIHtcbiAgICB1cGRhdGVfc2NoZWR1bGVkID0gdHJ1ZTtcbiAgICByZXNvbHZlZF9wcm9taXNlLnRoZW4oZmx1c2gpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZF9yZW5kZXJfY2FsbGJhY2soZm4pIHtcbiAgcmVuZGVyX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cblxubGV0IGZsdXNoaW5nID0gZmFsc2U7XG5jb25zdCBzZWVuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcblxuZnVuY3Rpb24gZmx1c2goKSB7XG4gIGlmIChmbHVzaGluZykgcmV0dXJuO1xuICBmbHVzaGluZyA9IHRydWU7XG5cbiAgZG8ge1xuICAgIC8vIGZpcnN0LCBjYWxsIGJlZm9yZVVwZGF0ZSBmdW5jdGlvbnNcbiAgICAvLyBhbmQgdXBkYXRlIGNvbXBvbmVudHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGRpcnR5X2NvbXBvbmVudHNbaV07XG4gICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgIHVwZGF0ZShjb21wb25lbnQuJCQpO1xuICAgIH1cblxuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICBkaXJ0eV9jb21wb25lbnRzLmxlbmd0aCA9IDA7XG5cbiAgICB3aGlsZSAoYmluZGluZ19jYWxsYmFja3MubGVuZ3RoKSBiaW5kaW5nX2NhbGxiYWNrcy5wb3AoKSgpOyAvLyB0aGVuLCBvbmNlIGNvbXBvbmVudHMgYXJlIHVwZGF0ZWQsIGNhbGxcbiAgICAvLyBhZnRlclVwZGF0ZSBmdW5jdGlvbnMuIFRoaXMgbWF5IGNhdXNlXG4gICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSByZW5kZXJfY2FsbGJhY2tzW2ldO1xuXG4gICAgICBpZiAoIXNlZW5fY2FsbGJhY2tzLmhhcyhjYWxsYmFjaykpIHtcbiAgICAgICAgLy8gLi4uc28gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBsb29wc1xuICAgICAgICBzZWVuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoID0gMDtcbiAgfSB3aGlsZSAoZGlydHlfY29tcG9uZW50cy5sZW5ndGgpO1xuXG4gIHdoaWxlIChmbHVzaF9jYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgZmx1c2hfY2FsbGJhY2tzLnBvcCgpKCk7XG4gIH1cblxuICB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG4gIGZsdXNoaW5nID0gZmFsc2U7XG4gIHNlZW5fY2FsbGJhY2tzLmNsZWFyKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAkJC51cGRhdGUoKTtcbiAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgIGNvbnN0IGRpcnR5ID0gJCQuZGlydHk7XG4gICAgJCQuZGlydHkgPSBbLTFdO1xuICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LnAoJCQuY3R4LCBkaXJ0eSk7XG4gICAgJCQuYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG4gIH1cbn1cblxuY29uc3Qgb3V0cm9pbmcgPSBuZXcgU2V0KCk7XG5sZXQgb3V0cm9zO1xuXG5mdW5jdGlvbiBncm91cF9vdXRyb3MoKSB7XG4gIG91dHJvcyA9IHtcbiAgICByOiAwLFxuICAgIGM6IFtdLFxuICAgIHA6IG91dHJvcyAvLyBwYXJlbnQgZ3JvdXBcblxuICB9O1xufVxuXG5mdW5jdGlvbiBjaGVja19vdXRyb3MoKSB7XG4gIGlmICghb3V0cm9zLnIpIHtcbiAgICBydW5fYWxsKG91dHJvcy5jKTtcbiAgfVxuXG4gIG91dHJvcyA9IG91dHJvcy5wO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uX2luKGJsb2NrLCBsb2NhbCkge1xuICBpZiAoYmxvY2sgJiYgYmxvY2suaSkge1xuICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgYmxvY2suaShsb2NhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG4gIGlmIChibG9jayAmJiBibG9jay5vKSB7XG4gICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpIHJldHVybjtcbiAgICBvdXRyb2luZy5hZGQoYmxvY2spO1xuICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcblxuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChkZXRhY2gpIGJsb2NrLmQoMSk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYmxvY2subyhsb2NhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0X3NwcmVhZF91cGRhdGUobGV2ZWxzLCB1cGRhdGVzKSB7XG4gIGNvbnN0IHVwZGF0ZSA9IHt9O1xuICBjb25zdCB0b19udWxsX291dCA9IHt9O1xuICBjb25zdCBhY2NvdW50ZWRfZm9yID0ge1xuICAgICQkc2NvcGU6IDFcbiAgfTtcbiAgbGV0IGkgPSBsZXZlbHMubGVuZ3RoO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICBjb25zdCBvID0gbGV2ZWxzW2ldO1xuICAgIGNvbnN0IG4gPSB1cGRhdGVzW2ldO1xuXG4gICAgaWYgKG4pIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIG4pKSB0b19udWxsX291dFtrZXldID0gMTtcbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gbikge1xuICAgICAgICBpZiAoIWFjY291bnRlZF9mb3Jba2V5XSkge1xuICAgICAgICAgIHVwZGF0ZVtrZXldID0gbltrZXldO1xuICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV2ZWxzW2ldID0gbjtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAoY29uc3Qga2V5IGluIHRvX251bGxfb3V0KSB7XG4gICAgaWYgKCEoa2V5IGluIHVwZGF0ZSkpIHVwZGF0ZVtrZXldID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHVwZGF0ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2NvbXBvbmVudChibG9jaykge1xuICBibG9jayAmJiBibG9jay5jKCk7XG59XG5cbmZ1bmN0aW9uIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIHRhcmdldCwgYW5jaG9yLCBjdXN0b21FbGVtZW50KSB7XG4gIGNvbnN0IHtcbiAgICBmcmFnbWVudCxcbiAgICBvbl9tb3VudCxcbiAgICBvbl9kZXN0cm95LFxuICAgIGFmdGVyX3VwZGF0ZVxuICB9ID0gY29tcG9uZW50LiQkO1xuICBmcmFnbWVudCAmJiBmcmFnbWVudC5tKHRhcmdldCwgYW5jaG9yKTtcblxuICBpZiAoIWN1c3RvbUVsZW1lbnQpIHtcbiAgICAvLyBvbk1vdW50IGhhcHBlbnMgYmVmb3JlIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlXG4gICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiB7XG4gICAgICBjb25zdCBuZXdfb25fZGVzdHJveSA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG5cbiAgICAgIGlmIChvbl9kZXN0cm95KSB7XG4gICAgICAgIG9uX2Rlc3Ryb3kucHVzaCguLi5uZXdfb25fZGVzdHJveSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBFZGdlIGNhc2UgLSBjb21wb25lbnQgd2FzIGRlc3Ryb3llZCBpbW1lZGlhdGVseSxcbiAgICAgICAgLy8gbW9zdCBsaWtlbHkgYXMgYSByZXN1bHQgb2YgYSBiaW5kaW5nIGluaXRpYWxpc2luZ1xuICAgICAgICBydW5fYWxsKG5ld19vbl9kZXN0cm95KTtcbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50LiQkLm9uX21vdW50ID0gW107XG4gICAgfSk7XG4gIH1cblxuICBhZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gZGVzdHJveV9jb21wb25lbnQoY29tcG9uZW50LCBkZXRhY2hpbmcpIHtcbiAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQ7XG5cbiAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgcnVuX2FsbCgkJC5vbl9kZXN0cm95KTtcbiAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5kKGRldGFjaGluZyk7IC8vIFRPRE8gbnVsbCBvdXQgb3RoZXIgcmVmcywgaW5jbHVkaW5nIGNvbXBvbmVudC4kJCAoYnV0IG5lZWQgdG9cbiAgICAvLyBwcmVzZXJ2ZSBmaW5hbCBzdGF0ZT8pXG5cbiAgICAkJC5vbl9kZXN0cm95ID0gJCQuZnJhZ21lbnQgPSBudWxsO1xuICAgICQkLmN0eCA9IFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKSB7XG4gIGlmIChjb21wb25lbnQuJCQuZGlydHlbMF0gPT09IC0xKSB7XG4gICAgZGlydHlfY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgY29tcG9uZW50LiQkLmRpcnR5LmZpbGwoMCk7XG4gIH1cblxuICBjb21wb25lbnQuJCQuZGlydHlbaSAvIDMxIHwgMF0gfD0gMSA8PCBpICUgMzE7XG59XG5cbmZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zLCBpbnN0YW5jZSwgY3JlYXRlX2ZyYWdtZW50LCBub3RfZXF1YWwsIHByb3BzLCBkaXJ0eSA9IFstMV0pIHtcbiAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQgPSB7XG4gICAgZnJhZ21lbnQ6IG51bGwsXG4gICAgY3R4OiBudWxsLFxuICAgIC8vIHN0YXRlXG4gICAgcHJvcHMsXG4gICAgdXBkYXRlOiBub29wLFxuICAgIG5vdF9lcXVhbCxcbiAgICBib3VuZDogYmxhbmtfb2JqZWN0KCksXG4gICAgLy8gbGlmZWN5Y2xlXG4gICAgb25fbW91bnQ6IFtdLFxuICAgIG9uX2Rlc3Ryb3k6IFtdLFxuICAgIG9uX2Rpc2Nvbm5lY3Q6IFtdLFxuICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgY29udGV4dDogbmV3IE1hcChwYXJlbnRfY29tcG9uZW50ID8gcGFyZW50X2NvbXBvbmVudC4kJC5jb250ZXh0IDogb3B0aW9ucy5jb250ZXh0IHx8IFtdKSxcbiAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICBjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpLFxuICAgIGRpcnR5LFxuICAgIHNraXBfYm91bmQ6IGZhbHNlXG4gIH07XG4gIGxldCByZWFkeSA9IGZhbHNlO1xuICAkJC5jdHggPSBpbnN0YW5jZSA/IGluc3RhbmNlKGNvbXBvbmVudCwgb3B0aW9ucy5wcm9wcyB8fCB7fSwgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcmVzdC5sZW5ndGggPyByZXN0WzBdIDogcmV0O1xuXG4gICAgaWYgKCQkLmN0eCAmJiBub3RfZXF1YWwoJCQuY3R4W2ldLCAkJC5jdHhbaV0gPSB2YWx1ZSkpIHtcbiAgICAgIGlmICghJCQuc2tpcF9ib3VuZCAmJiAkJC5ib3VuZFtpXSkgJCQuYm91bmRbaV0odmFsdWUpO1xuICAgICAgaWYgKHJlYWR5KSBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfSkgOiBbXTtcbiAgJCQudXBkYXRlKCk7XG4gIHJlYWR5ID0gdHJ1ZTtcbiAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTsgLy8gYGZhbHNlYCBhcyBhIHNwZWNpYWwgY2FzZSBvZiBubyBET00gY29tcG9uZW50XG5cbiAgJCQuZnJhZ21lbnQgPSBjcmVhdGVfZnJhZ21lbnQgPyBjcmVhdGVfZnJhZ21lbnQoJCQuY3R4KSA6IGZhbHNlO1xuXG4gIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgIGlmIChvcHRpb25zLmh5ZHJhdGUpIHtcbiAgICAgIGNvbnN0IG5vZGVzID0gY2hpbGRyZW4ob3B0aW9ucy50YXJnZXQpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuXG4gICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5sKG5vZGVzKTtcbiAgICAgIG5vZGVzLmZvckVhY2goZGV0YWNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmMoKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5pbnRybykgdHJhbnNpdGlvbl9pbihjb21wb25lbnQuJCQuZnJhZ21lbnQpO1xuICAgIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIG9wdGlvbnMudGFyZ2V0LCBvcHRpb25zLmFuY2hvciwgb3B0aW9ucy5jdXN0b21FbGVtZW50KTtcbiAgICBmbHVzaCgpO1xuICB9XG5cbiAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xufVxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBTdmVsdGUgY29tcG9uZW50cy4gVXNlZCB3aGVuIGRldj1mYWxzZS5cbiAqL1xuXG5cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICRkZXN0cm95KCkge1xuICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgIHRoaXMuJGRlc3Ryb3kgPSBub29wO1xuICB9XG5cbiAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pO1xuICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XG5cbiAgJHNldCgkJHByb3BzKSB7XG4gICAgaWYgKHRoaXMuJCRzZXQgJiYgIWlzX2VtcHR5KCQkcHJvcHMpKSB7XG4gICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuICAgICAgdGhpcy4kJHNldCgkJHByb3BzKTtcbiAgICAgIHRoaXMuJCQuc2tpcF9ib3VuZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG59XG5cbi8qIHNyYy9qcy9jb21wb25lbnRzL3NoZXBoZXJkLWJ1dHRvbi5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My4zNy4wICovXG5cbmZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQ4KGN0eCkge1xuICBsZXQgYnV0dG9uO1xuICBsZXQgYnV0dG9uX2FyaWFfbGFiZWxfdmFsdWU7XG4gIGxldCBidXR0b25fY2xhc3NfdmFsdWU7XG4gIGxldCBtb3VudGVkO1xuICBsZXQgZGlzcG9zZTtcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgYnV0dG9uID0gZWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGF0dHIoYnV0dG9uLCBcImFyaWEtbGFiZWxcIiwgYnV0dG9uX2FyaWFfbGFiZWxfdmFsdWUgPVxuICAgICAgLypsYWJlbCovXG4gICAgICBjdHhbM10gP1xuICAgICAgLypsYWJlbCovXG4gICAgICBjdHhbM10gOiBudWxsKTtcbiAgICAgIGF0dHIoYnV0dG9uLCBcImNsYXNzXCIsIGJ1dHRvbl9jbGFzc192YWx1ZSA9IGAke1xuICAgICAgLypjbGFzc2VzKi9cbiAgICAgIGN0eFsxXSB8fCBcIlwifSBzaGVwaGVyZC1idXR0b24gJHtcbiAgICAgIC8qc2Vjb25kYXJ5Ki9cbiAgICAgIGN0eFs0XSA/IFwic2hlcGhlcmQtYnV0dG9uLXNlY29uZGFyeVwiIDogXCJcIn1gKTtcbiAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9XG4gICAgICAvKmRpc2FibGVkKi9cbiAgICAgIGN0eFsyXTtcbiAgICAgIGF0dHIoYnV0dG9uLCBcInRhYmluZGV4XCIsIFwiMFwiKTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgaW5zZXJ0KHRhcmdldCwgYnV0dG9uLCBhbmNob3IpO1xuICAgICAgYnV0dG9uLmlubmVySFRNTCA9XG4gICAgICAvKnRleHQqL1xuICAgICAgY3R4WzVdO1xuXG4gICAgICBpZiAoIW1vdW50ZWQpIHtcbiAgICAgICAgZGlzcG9zZSA9IGxpc3RlbihidXR0b24sIFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChpc19mdW5jdGlvbihcbiAgICAgICAgICAvKmFjdGlvbiovXG4gICAgICAgICAgY3R4WzBdKSlcbiAgICAgICAgICAgIC8qYWN0aW9uKi9cbiAgICAgICAgICAgIGN0eFswXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgbW91bnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHAobmV3X2N0eCwgW2RpcnR5XSkge1xuICAgICAgY3R4ID0gbmV3X2N0eDtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKnRleHQqL1xuICAgICAgMzIpIGJ1dHRvbi5pbm5lckhUTUwgPVxuICAgICAgLyp0ZXh0Ki9cbiAgICAgIGN0eFs1XTtcblxuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qbGFiZWwqL1xuICAgICAgOCAmJiBidXR0b25fYXJpYV9sYWJlbF92YWx1ZSAhPT0gKGJ1dHRvbl9hcmlhX2xhYmVsX3ZhbHVlID1cbiAgICAgIC8qbGFiZWwqL1xuICAgICAgY3R4WzNdID9cbiAgICAgIC8qbGFiZWwqL1xuICAgICAgY3R4WzNdIDogbnVsbCkpIHtcbiAgICAgICAgYXR0cihidXR0b24sIFwiYXJpYS1sYWJlbFwiLCBidXR0b25fYXJpYV9sYWJlbF92YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKmNsYXNzZXMsIHNlY29uZGFyeSovXG4gICAgICAxOCAmJiBidXR0b25fY2xhc3NfdmFsdWUgIT09IChidXR0b25fY2xhc3NfdmFsdWUgPSBgJHtcbiAgICAgIC8qY2xhc3NlcyovXG4gICAgICBjdHhbMV0gfHwgXCJcIn0gc2hlcGhlcmQtYnV0dG9uICR7XG4gICAgICAvKnNlY29uZGFyeSovXG4gICAgICBjdHhbNF0gPyBcInNoZXBoZXJkLWJ1dHRvbi1zZWNvbmRhcnlcIiA6IFwiXCJ9YCkpIHtcbiAgICAgICAgYXR0cihidXR0b24sIFwiY2xhc3NcIiwgYnV0dG9uX2NsYXNzX3ZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qZGlzYWJsZWQqL1xuICAgICAgNCkge1xuICAgICAgICBidXR0b24uZGlzYWJsZWQgPVxuICAgICAgICAvKmRpc2FibGVkKi9cbiAgICAgICAgY3R4WzJdO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpOiBub29wLFxuICAgIG86IG5vb3AsXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgaWYgKGRldGFjaGluZykgZGV0YWNoKGJ1dHRvbik7XG4gICAgICBtb3VudGVkID0gZmFsc2U7XG4gICAgICBkaXNwb3NlKCk7XG4gICAgfVxuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGluc3RhbmNlJDgoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgbGV0IHtcbiAgICBjb25maWdcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgc3RlcFxuICB9ID0gJCRwcm9wcztcbiAgbGV0IGFjdGlvbiwgY2xhc3NlcywgZGlzYWJsZWQsIGxhYmVsLCBzZWNvbmRhcnksIHRleHQ7XG5cbiAgZnVuY3Rpb24gZ2V0RGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihkaXNhYmxlZCkpIHtcbiAgICAgIHJldHVybiBkaXNhYmxlZCA9IGRpc2FibGVkLmNhbGwoc3RlcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgJCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgaWYgKFwiY29uZmlnXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDYsIGNvbmZpZyA9ICQkcHJvcHMuY29uZmlnKTtcbiAgICBpZiAoXCJzdGVwXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDcsIHN0ZXAgPSAkJHByb3BzLnN0ZXApO1xuICB9O1xuXG4gICQkc2VsZi4kJC51cGRhdGUgPSAoKSA9PiB7XG4gICAgaWYgKCQkc2VsZi4kJC5kaXJ0eSAmXG4gICAgLypjb25maWcsIHN0ZXAqL1xuICAgIDE5Mikge1xuICAgICAge1xuICAgICAgICAkJGludmFsaWRhdGUoMCwgYWN0aW9uID0gY29uZmlnLmFjdGlvbiA/IGNvbmZpZy5hY3Rpb24uYmluZChzdGVwLnRvdXIpIDogbnVsbCk7XG4gICAgICAgICQkaW52YWxpZGF0ZSgxLCBjbGFzc2VzID0gY29uZmlnLmNsYXNzZXMpO1xuICAgICAgICAkJGludmFsaWRhdGUoMiwgZGlzYWJsZWQgPSBjb25maWcuZGlzYWJsZWQgPyBnZXREaXNhYmxlZChjb25maWcuZGlzYWJsZWQpIDogZmFsc2UpO1xuICAgICAgICAkJGludmFsaWRhdGUoMywgbGFiZWwgPSBjb25maWcubGFiZWwpO1xuICAgICAgICAkJGludmFsaWRhdGUoNCwgc2Vjb25kYXJ5ID0gY29uZmlnLnNlY29uZGFyeSk7XG4gICAgICAgICQkaW52YWxpZGF0ZSg1LCB0ZXh0ID0gY29uZmlnLnRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gW2FjdGlvbiwgY2xhc3NlcywgZGlzYWJsZWQsIGxhYmVsLCBzZWNvbmRhcnksIHRleHQsIGNvbmZpZywgc3RlcF07XG59XG5cbmNsYXNzIFNoZXBoZXJkX2J1dHRvbiBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UkOCwgY3JlYXRlX2ZyYWdtZW50JDgsIHNhZmVfbm90X2VxdWFsLCB7XG4gICAgICBjb25maWc6IDYsXG4gICAgICBzdGVwOiA3XG4gICAgfSk7XG4gIH1cblxufVxuXG4vKiBzcmMvanMvY29tcG9uZW50cy9zaGVwaGVyZC1mb290ZXIuc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuMzcuMCAqL1xuXG5mdW5jdGlvbiBnZXRfZWFjaF9jb250ZXh0KGN0eCwgbGlzdCwgaSkge1xuICBjb25zdCBjaGlsZF9jdHggPSBjdHguc2xpY2UoKTtcbiAgY2hpbGRfY3R4WzJdID0gbGlzdFtpXTtcbiAgcmV0dXJuIGNoaWxkX2N0eDtcbn0gLy8gKDI0OjQpIHsjaWYgYnV0dG9uc31cblxuXG5mdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2skMyhjdHgpIHtcbiAgbGV0IGVhY2hfMV9hbmNob3I7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgZWFjaF92YWx1ZSA9XG4gIC8qYnV0dG9ucyovXG4gIGN0eFsxXTtcbiAgbGV0IGVhY2hfYmxvY2tzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlYWNoX3ZhbHVlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgZWFjaF9ibG9ja3NbaV0gPSBjcmVhdGVfZWFjaF9ibG9jayhnZXRfZWFjaF9jb250ZXh0KGN0eCwgZWFjaF92YWx1ZSwgaSkpO1xuICB9XG5cbiAgY29uc3Qgb3V0ID0gaSA9PiB0cmFuc2l0aW9uX291dChlYWNoX2Jsb2Nrc1tpXSwgMSwgMSwgKCkgPT4ge1xuICAgIGVhY2hfYmxvY2tzW2ldID0gbnVsbDtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlYWNoX2Jsb2Nrcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBlYWNoX2Jsb2Nrc1tpXS5jKCk7XG4gICAgICB9XG5cbiAgICAgIGVhY2hfMV9hbmNob3IgPSBlbXB0eSgpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVhY2hfYmxvY2tzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGVhY2hfYmxvY2tzW2ldLm0odGFyZ2V0LCBhbmNob3IpO1xuICAgICAgfVxuXG4gICAgICBpbnNlcnQodGFyZ2V0LCBlYWNoXzFfYW5jaG9yLCBhbmNob3IpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIHAoY3R4LCBkaXJ0eSkge1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qYnV0dG9ucywgc3RlcCovXG4gICAgICAzKSB7XG4gICAgICAgIGVhY2hfdmFsdWUgPVxuICAgICAgICAvKmJ1dHRvbnMqL1xuICAgICAgICBjdHhbMV07XG4gICAgICAgIGxldCBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBlYWNoX3ZhbHVlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgY2hpbGRfY3R4ID0gZ2V0X2VhY2hfY29udGV4dChjdHgsIGVhY2hfdmFsdWUsIGkpO1xuXG4gICAgICAgICAgaWYgKGVhY2hfYmxvY2tzW2ldKSB7XG4gICAgICAgICAgICBlYWNoX2Jsb2Nrc1tpXS5wKGNoaWxkX2N0eCwgZGlydHkpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihlYWNoX2Jsb2Nrc1tpXSwgMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVhY2hfYmxvY2tzW2ldID0gY3JlYXRlX2VhY2hfYmxvY2soY2hpbGRfY3R4KTtcbiAgICAgICAgICAgIGVhY2hfYmxvY2tzW2ldLmMoKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oZWFjaF9ibG9ja3NbaV0sIDEpO1xuICAgICAgICAgICAgZWFjaF9ibG9ja3NbaV0ubShlYWNoXzFfYW5jaG9yLnBhcmVudE5vZGUsIGVhY2hfMV9hbmNob3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdyb3VwX291dHJvcygpO1xuXG4gICAgICAgIGZvciAoaSA9IGVhY2hfdmFsdWUubGVuZ3RoOyBpIDwgZWFjaF9ibG9ja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBvdXQoaSk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja19vdXRyb3MoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaShsb2NhbCkge1xuICAgICAgaWYgKGN1cnJlbnQpIHJldHVybjtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlYWNoX3ZhbHVlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRyYW5zaXRpb25faW4oZWFjaF9ibG9ja3NbaV0pO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgbyhsb2NhbCkge1xuICAgICAgZWFjaF9ibG9ja3MgPSBlYWNoX2Jsb2Nrcy5maWx0ZXIoQm9vbGVhbik7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWFjaF9ibG9ja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdHJhbnNpdGlvbl9vdXQoZWFjaF9ibG9ja3NbaV0pO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBkZXN0cm95X2VhY2goZWFjaF9ibG9ja3MsIGRldGFjaGluZyk7XG4gICAgICBpZiAoZGV0YWNoaW5nKSBkZXRhY2goZWFjaF8xX2FuY2hvcik7XG4gICAgfVxuXG4gIH07XG59IC8vICgyNTo4KSB7I2VhY2ggYnV0dG9ucyBhcyBjb25maWd9XG5cblxuZnVuY3Rpb24gY3JlYXRlX2VhY2hfYmxvY2soY3R4KSB7XG4gIGxldCBzaGVwaGVyZGJ1dHRvbjtcbiAgbGV0IGN1cnJlbnQ7XG4gIHNoZXBoZXJkYnV0dG9uID0gbmV3IFNoZXBoZXJkX2J1dHRvbih7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNvbmZpZzpcbiAgICAgIC8qY29uZmlnKi9cbiAgICAgIGN0eFsyXSxcbiAgICAgIHN0ZXA6XG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzBdXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgY3JlYXRlX2NvbXBvbmVudChzaGVwaGVyZGJ1dHRvbi4kJC5mcmFnbWVudCk7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIG1vdW50X2NvbXBvbmVudChzaGVwaGVyZGJ1dHRvbiwgdGFyZ2V0LCBhbmNob3IpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIHAoY3R4LCBkaXJ0eSkge1xuICAgICAgY29uc3Qgc2hlcGhlcmRidXR0b25fY2hhbmdlcyA9IHt9O1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qYnV0dG9ucyovXG4gICAgICAyKSBzaGVwaGVyZGJ1dHRvbl9jaGFuZ2VzLmNvbmZpZyA9XG4gICAgICAvKmNvbmZpZyovXG4gICAgICBjdHhbMl07XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypzdGVwKi9cbiAgICAgIDEpIHNoZXBoZXJkYnV0dG9uX2NoYW5nZXMuc3RlcCA9XG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzBdO1xuICAgICAgc2hlcGhlcmRidXR0b24uJHNldChzaGVwaGVyZGJ1dHRvbl9jaGFuZ2VzKTtcbiAgICB9LFxuXG4gICAgaShsb2NhbCkge1xuICAgICAgaWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICAgIHRyYW5zaXRpb25faW4oc2hlcGhlcmRidXR0b24uJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBvKGxvY2FsKSB7XG4gICAgICB0cmFuc2l0aW9uX291dChzaGVwaGVyZGJ1dHRvbi4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgICAgY3VycmVudCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgZGVzdHJveV9jb21wb25lbnQoc2hlcGhlcmRidXR0b24sIGRldGFjaGluZyk7XG4gICAgfVxuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQ3KGN0eCkge1xuICBsZXQgZm9vdGVyO1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGlmX2Jsb2NrID1cbiAgLypidXR0b25zKi9cbiAgY3R4WzFdICYmIGNyZWF0ZV9pZl9ibG9jayQzKGN0eCk7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGZvb3RlciA9IGVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgICBpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLmMoKTtcbiAgICAgIGF0dHIoZm9vdGVyLCBcImNsYXNzXCIsIFwic2hlcGhlcmQtZm9vdGVyXCIpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBpbnNlcnQodGFyZ2V0LCBmb290ZXIsIGFuY2hvcik7XG4gICAgICBpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLm0oZm9vdGVyLCBudWxsKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBwKGN0eCwgW2RpcnR5XSkge1xuICAgICAgaWYgKFxuICAgICAgLypidXR0b25zKi9cbiAgICAgIGN0eFsxXSkge1xuICAgICAgICBpZiAoaWZfYmxvY2spIHtcbiAgICAgICAgICBpZl9ibG9jay5wKGN0eCwgZGlydHkpO1xuXG4gICAgICAgICAgaWYgKGRpcnR5ICZcbiAgICAgICAgICAvKmJ1dHRvbnMqL1xuICAgICAgICAgIDIpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2ssIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZl9ibG9jayA9IGNyZWF0ZV9pZl9ibG9jayQzKGN0eCk7XG4gICAgICAgICAgaWZfYmxvY2suYygpO1xuICAgICAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2ssIDEpO1xuICAgICAgICAgIGlmX2Jsb2NrLm0oZm9vdGVyLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpZl9ibG9jaykge1xuICAgICAgICBncm91cF9vdXRyb3MoKTtcbiAgICAgICAgdHJhbnNpdGlvbl9vdXQoaWZfYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgICBpZl9ibG9jayA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGVja19vdXRyb3MoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaShsb2NhbCkge1xuICAgICAgaWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2spO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIG8obG9jYWwpIHtcbiAgICAgIHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrKTtcbiAgICAgIGN1cnJlbnQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGlmIChkZXRhY2hpbmcpIGRldGFjaChmb290ZXIpO1xuICAgICAgaWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5kKCk7XG4gICAgfVxuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGluc3RhbmNlJDcoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgbGV0IGJ1dHRvbnM7XG4gIGxldCB7XG4gICAgc3RlcFxuICB9ID0gJCRwcm9wcztcblxuICAkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBpZiAoXCJzdGVwXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDAsIHN0ZXAgPSAkJHByb3BzLnN0ZXApO1xuICB9O1xuXG4gICQkc2VsZi4kJC51cGRhdGUgPSAoKSA9PiB7XG4gICAgaWYgKCQkc2VsZi4kJC5kaXJ0eSAmXG4gICAgLypzdGVwKi9cbiAgICAxKSB7XG4gICAgICAkJGludmFsaWRhdGUoMSwgYnV0dG9ucyA9IHN0ZXAub3B0aW9ucy5idXR0b25zKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFtzdGVwLCBidXR0b25zXTtcbn1cblxuY2xhc3MgU2hlcGhlcmRfZm9vdGVyIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgaW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQ3LCBjcmVhdGVfZnJhZ21lbnQkNywgc2FmZV9ub3RfZXF1YWwsIHtcbiAgICAgIHN0ZXA6IDBcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qIHNyYy9qcy9jb21wb25lbnRzL3NoZXBoZXJkLWNhbmNlbC1pY29uLnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjM3LjAgKi9cblxuZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDYoY3R4KSB7XG4gIGxldCBidXR0b247XG4gIGxldCBzcGFuO1xuICBsZXQgYnV0dG9uX2FyaWFfbGFiZWxfdmFsdWU7XG4gIGxldCBtb3VudGVkO1xuICBsZXQgZGlzcG9zZTtcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgYnV0dG9uID0gZWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHNwYW4gPSBlbGVtZW50KFwic3BhblwiKTtcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIsOXXCI7XG4gICAgICBhdHRyKHNwYW4sIFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgICAgYXR0cihidXR0b24sIFwiYXJpYS1sYWJlbFwiLCBidXR0b25fYXJpYV9sYWJlbF92YWx1ZSA9XG4gICAgICAvKmNhbmNlbEljb24qL1xuICAgICAgY3R4WzBdLmxhYmVsID9cbiAgICAgIC8qY2FuY2VsSWNvbiovXG4gICAgICBjdHhbMF0ubGFiZWwgOiBcIkNsb3NlIFRvdXJcIik7XG4gICAgICBhdHRyKGJ1dHRvbiwgXCJjbGFzc1wiLCBcInNoZXBoZXJkLWNhbmNlbC1pY29uXCIpO1xuICAgICAgYXR0cihidXR0b24sIFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgaW5zZXJ0KHRhcmdldCwgYnV0dG9uLCBhbmNob3IpO1xuICAgICAgYXBwZW5kKGJ1dHRvbiwgc3Bhbik7XG5cbiAgICAgIGlmICghbW91bnRlZCkge1xuICAgICAgICBkaXNwb3NlID0gbGlzdGVuKGJ1dHRvbiwgXCJjbGlja1wiLFxuICAgICAgICAvKmhhbmRsZUNhbmNlbENsaWNrKi9cbiAgICAgICAgY3R4WzFdKTtcbiAgICAgICAgbW91bnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHAoY3R4LCBbZGlydHldKSB7XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypjYW5jZWxJY29uKi9cbiAgICAgIDEgJiYgYnV0dG9uX2FyaWFfbGFiZWxfdmFsdWUgIT09IChidXR0b25fYXJpYV9sYWJlbF92YWx1ZSA9XG4gICAgICAvKmNhbmNlbEljb24qL1xuICAgICAgY3R4WzBdLmxhYmVsID9cbiAgICAgIC8qY2FuY2VsSWNvbiovXG4gICAgICBjdHhbMF0ubGFiZWwgOiBcIkNsb3NlIFRvdXJcIikpIHtcbiAgICAgICAgYXR0cihidXR0b24sIFwiYXJpYS1sYWJlbFwiLCBidXR0b25fYXJpYV9sYWJlbF92YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGk6IG5vb3AsXG4gICAgbzogbm9vcCxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBpZiAoZGV0YWNoaW5nKSBkZXRhY2goYnV0dG9uKTtcbiAgICAgIG1vdW50ZWQgPSBmYWxzZTtcbiAgICAgIGRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UkNigkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICBsZXQge1xuICAgIGNhbmNlbEljb25cbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgc3RlcFxuICB9ID0gJCRwcm9wcztcbiAgLyoqXG4gICogQWRkIGEgY2xpY2sgbGlzdGVuZXIgdG8gdGhlIGNhbmNlbCBsaW5rIHRoYXQgY2FuY2VscyB0aGUgdG91clxuICAqL1xuXG4gIGNvbnN0IGhhbmRsZUNhbmNlbENsaWNrID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHN0ZXAuY2FuY2VsKCk7XG4gIH07XG5cbiAgJCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgaWYgKFwiY2FuY2VsSWNvblwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgwLCBjYW5jZWxJY29uID0gJCRwcm9wcy5jYW5jZWxJY29uKTtcbiAgICBpZiAoXCJzdGVwXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDIsIHN0ZXAgPSAkJHByb3BzLnN0ZXApO1xuICB9O1xuXG4gIHJldHVybiBbY2FuY2VsSWNvbiwgaGFuZGxlQ2FuY2VsQ2xpY2ssIHN0ZXBdO1xufVxuXG5jbGFzcyBTaGVwaGVyZF9jYW5jZWxfaWNvbiBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UkNiwgY3JlYXRlX2ZyYWdtZW50JDYsIHNhZmVfbm90X2VxdWFsLCB7XG4gICAgICBjYW5jZWxJY29uOiAwLFxuICAgICAgc3RlcDogMlxuICAgIH0pO1xuICB9XG5cbn1cblxuLyogc3JjL2pzL2NvbXBvbmVudHMvc2hlcGhlcmQtdGl0bGUuc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuMzcuMCAqL1xuXG5mdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkNShjdHgpIHtcbiAgbGV0IGgzO1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBoMyA9IGVsZW1lbnQoXCJoM1wiKTtcbiAgICAgIGF0dHIoaDMsIFwiaWRcIixcbiAgICAgIC8qbGFiZWxJZCovXG4gICAgICBjdHhbMV0pO1xuICAgICAgYXR0cihoMywgXCJjbGFzc1wiLCBcInNoZXBoZXJkLXRpdGxlXCIpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBpbnNlcnQodGFyZ2V0LCBoMywgYW5jaG9yKTtcbiAgICAgIC8qaDNfYmluZGluZyovXG5cbiAgICAgIGN0eFszXShoMyk7XG4gICAgfSxcblxuICAgIHAoY3R4LCBbZGlydHldKSB7XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypsYWJlbElkKi9cbiAgICAgIDIpIHtcbiAgICAgICAgYXR0cihoMywgXCJpZFwiLFxuICAgICAgICAvKmxhYmVsSWQqL1xuICAgICAgICBjdHhbMV0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpOiBub29wLFxuICAgIG86IG5vb3AsXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgaWYgKGRldGFjaGluZykgZGV0YWNoKGgzKTtcbiAgICAgIC8qaDNfYmluZGluZyovXG5cbiAgICAgIGN0eFszXShudWxsKTtcbiAgICB9XG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UkNSgkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICBsZXQge1xuICAgIGxhYmVsSWRcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgZWxlbWVudFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICB0aXRsZVxuICB9ID0gJCRwcm9wcztcbiAgYWZ0ZXJVcGRhdGUoKCkgPT4ge1xuICAgIGlmIChpc0Z1bmN0aW9uKHRpdGxlKSkge1xuICAgICAgJCRpbnZhbGlkYXRlKDIsIHRpdGxlID0gdGl0bGUoKSk7XG4gICAgfVxuXG4gICAgJCRpbnZhbGlkYXRlKDAsIGVsZW1lbnQuaW5uZXJIVE1MID0gdGl0bGUsIGVsZW1lbnQpO1xuICB9KTtcblxuICBmdW5jdGlvbiBoM19iaW5kaW5nKCQkdmFsdWUpIHtcbiAgICBiaW5kaW5nX2NhbGxiYWNrc1skJHZhbHVlID8gXCJ1bnNoaWZ0XCIgOiBcInB1c2hcIl0oKCkgPT4ge1xuICAgICAgZWxlbWVudCA9ICQkdmFsdWU7XG4gICAgICAkJGludmFsaWRhdGUoMCwgZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICAkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBpZiAoXCJsYWJlbElkXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDEsIGxhYmVsSWQgPSAkJHByb3BzLmxhYmVsSWQpO1xuICAgIGlmIChcImVsZW1lbnRcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMCwgZWxlbWVudCA9ICQkcHJvcHMuZWxlbWVudCk7XG4gICAgaWYgKFwidGl0bGVcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMiwgdGl0bGUgPSAkJHByb3BzLnRpdGxlKTtcbiAgfTtcblxuICByZXR1cm4gW2VsZW1lbnQsIGxhYmVsSWQsIHRpdGxlLCBoM19iaW5kaW5nXTtcbn1cblxuY2xhc3MgU2hlcGhlcmRfdGl0bGUgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDUsIGNyZWF0ZV9mcmFnbWVudCQ1LCBzYWZlX25vdF9lcXVhbCwge1xuICAgICAgbGFiZWxJZDogMSxcbiAgICAgIGVsZW1lbnQ6IDAsXG4gICAgICB0aXRsZTogMlxuICAgIH0pO1xuICB9XG5cbn1cblxuLyogc3JjL2pzL2NvbXBvbmVudHMvc2hlcGhlcmQtaGVhZGVyLnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjM3LjAgKi9cblxuZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzEkMShjdHgpIHtcbiAgbGV0IHNoZXBoZXJkdGl0bGU7XG4gIGxldCBjdXJyZW50O1xuICBzaGVwaGVyZHRpdGxlID0gbmV3IFNoZXBoZXJkX3RpdGxlKHtcbiAgICBwcm9wczoge1xuICAgICAgbGFiZWxJZDpcbiAgICAgIC8qbGFiZWxJZCovXG4gICAgICBjdHhbMF0sXG4gICAgICB0aXRsZTpcbiAgICAgIC8qdGl0bGUqL1xuICAgICAgY3R4WzJdXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgY3JlYXRlX2NvbXBvbmVudChzaGVwaGVyZHRpdGxlLiQkLmZyYWdtZW50KTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgbW91bnRfY29tcG9uZW50KHNoZXBoZXJkdGl0bGUsIHRhcmdldCwgYW5jaG9yKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBwKGN0eCwgZGlydHkpIHtcbiAgICAgIGNvbnN0IHNoZXBoZXJkdGl0bGVfY2hhbmdlcyA9IHt9O1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qbGFiZWxJZCovXG4gICAgICAxKSBzaGVwaGVyZHRpdGxlX2NoYW5nZXMubGFiZWxJZCA9XG4gICAgICAvKmxhYmVsSWQqL1xuICAgICAgY3R4WzBdO1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qdGl0bGUqL1xuICAgICAgNCkgc2hlcGhlcmR0aXRsZV9jaGFuZ2VzLnRpdGxlID1cbiAgICAgIC8qdGl0bGUqL1xuICAgICAgY3R4WzJdO1xuICAgICAgc2hlcGhlcmR0aXRsZS4kc2V0KHNoZXBoZXJkdGl0bGVfY2hhbmdlcyk7XG4gICAgfSxcblxuICAgIGkobG9jYWwpIHtcbiAgICAgIGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgICB0cmFuc2l0aW9uX2luKHNoZXBoZXJkdGl0bGUuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBvKGxvY2FsKSB7XG4gICAgICB0cmFuc2l0aW9uX291dChzaGVwaGVyZHRpdGxlLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgICBjdXJyZW50ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBkZXN0cm95X2NvbXBvbmVudChzaGVwaGVyZHRpdGxlLCBkZXRhY2hpbmcpO1xuICAgIH1cblxuICB9O1xufSAvLyAoMzk6NCkgeyNpZiBjYW5jZWxJY29uICYmIGNhbmNlbEljb24uZW5hYmxlZH1cblxuXG5mdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2skMihjdHgpIHtcbiAgbGV0IHNoZXBoZXJkY2FuY2VsaWNvbjtcbiAgbGV0IGN1cnJlbnQ7XG4gIHNoZXBoZXJkY2FuY2VsaWNvbiA9IG5ldyBTaGVwaGVyZF9jYW5jZWxfaWNvbih7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNhbmNlbEljb246XG4gICAgICAvKmNhbmNlbEljb24qL1xuICAgICAgY3R4WzNdLFxuICAgICAgc3RlcDpcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMV1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGMoKSB7XG4gICAgICBjcmVhdGVfY29tcG9uZW50KHNoZXBoZXJkY2FuY2VsaWNvbi4kJC5mcmFnbWVudCk7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIG1vdW50X2NvbXBvbmVudChzaGVwaGVyZGNhbmNlbGljb24sIHRhcmdldCwgYW5jaG9yKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBwKGN0eCwgZGlydHkpIHtcbiAgICAgIGNvbnN0IHNoZXBoZXJkY2FuY2VsaWNvbl9jaGFuZ2VzID0ge307XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypjYW5jZWxJY29uKi9cbiAgICAgIDgpIHNoZXBoZXJkY2FuY2VsaWNvbl9jaGFuZ2VzLmNhbmNlbEljb24gPVxuICAgICAgLypjYW5jZWxJY29uKi9cbiAgICAgIGN0eFszXTtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKnN0ZXAqL1xuICAgICAgMikgc2hlcGhlcmRjYW5jZWxpY29uX2NoYW5nZXMuc3RlcCA9XG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzFdO1xuICAgICAgc2hlcGhlcmRjYW5jZWxpY29uLiRzZXQoc2hlcGhlcmRjYW5jZWxpY29uX2NoYW5nZXMpO1xuICAgIH0sXG5cbiAgICBpKGxvY2FsKSB7XG4gICAgICBpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgICAgdHJhbnNpdGlvbl9pbihzaGVwaGVyZGNhbmNlbGljb24uJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBvKGxvY2FsKSB7XG4gICAgICB0cmFuc2l0aW9uX291dChzaGVwaGVyZGNhbmNlbGljb24uJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICAgIGN1cnJlbnQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHNoZXBoZXJkY2FuY2VsaWNvbiwgZGV0YWNoaW5nKTtcbiAgICB9XG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDQoY3R4KSB7XG4gIGxldCBoZWFkZXI7XG4gIGxldCB0O1xuICBsZXQgY3VycmVudDtcbiAgbGV0IGlmX2Jsb2NrMCA9XG4gIC8qdGl0bGUqL1xuICBjdHhbMl0gJiYgY3JlYXRlX2lmX2Jsb2NrXzEkMShjdHgpO1xuICBsZXQgaWZfYmxvY2sxID1cbiAgLypjYW5jZWxJY29uKi9cbiAgY3R4WzNdICYmXG4gIC8qY2FuY2VsSWNvbiovXG4gIGN0eFszXS5lbmFibGVkICYmIGNyZWF0ZV9pZl9ibG9jayQyKGN0eCk7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGhlYWRlciA9IGVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgICBpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAuYygpO1xuICAgICAgdCA9IHNwYWNlKCk7XG4gICAgICBpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuYygpO1xuICAgICAgYXR0cihoZWFkZXIsIFwiY2xhc3NcIiwgXCJzaGVwaGVyZC1oZWFkZXJcIik7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIGluc2VydCh0YXJnZXQsIGhlYWRlciwgYW5jaG9yKTtcbiAgICAgIGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5tKGhlYWRlciwgbnVsbCk7XG4gICAgICBhcHBlbmQoaGVhZGVyLCB0KTtcbiAgICAgIGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5tKGhlYWRlciwgbnVsbCk7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgcChjdHgsIFtkaXJ0eV0pIHtcbiAgICAgIGlmIChcbiAgICAgIC8qdGl0bGUqL1xuICAgICAgY3R4WzJdKSB7XG4gICAgICAgIGlmIChpZl9ibG9jazApIHtcbiAgICAgICAgICBpZl9ibG9jazAucChjdHgsIGRpcnR5KTtcblxuICAgICAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAgICAgLyp0aXRsZSovXG4gICAgICAgICAgNCkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazAsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZl9ibG9jazAgPSBjcmVhdGVfaWZfYmxvY2tfMSQxKGN0eCk7XG4gICAgICAgICAgaWZfYmxvY2swLmMoKTtcbiAgICAgICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCwgMSk7XG4gICAgICAgICAgaWZfYmxvY2swLm0oaGVhZGVyLCB0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpZl9ibG9jazApIHtcbiAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgIHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMCwgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgIGlmX2Jsb2NrMCA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGVja19vdXRyb3MoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgLypjYW5jZWxJY29uKi9cbiAgICAgIGN0eFszXSAmJlxuICAgICAgLypjYW5jZWxJY29uKi9cbiAgICAgIGN0eFszXS5lbmFibGVkKSB7XG4gICAgICAgIGlmIChpZl9ibG9jazEpIHtcbiAgICAgICAgICBpZl9ibG9jazEucChjdHgsIGRpcnR5KTtcblxuICAgICAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAgICAgLypjYW5jZWxJY29uKi9cbiAgICAgICAgICA4KSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmX2Jsb2NrMSA9IGNyZWF0ZV9pZl9ibG9jayQyKGN0eCk7XG4gICAgICAgICAgaWZfYmxvY2sxLmMoKTtcbiAgICAgICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgICAgICAgaWZfYmxvY2sxLm0oaGVhZGVyLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpZl9ibG9jazEpIHtcbiAgICAgICAgZ3JvdXBfb3V0cm9zKCk7XG4gICAgICAgIHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMSwgMSwgMSwgKCkgPT4ge1xuICAgICAgICAgIGlmX2Jsb2NrMSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgICBjaGVja19vdXRyb3MoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaShsb2NhbCkge1xuICAgICAgaWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2swKTtcbiAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2sxKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBvKGxvY2FsKSB7XG4gICAgICB0cmFuc2l0aW9uX291dChpZl9ibG9jazApO1xuICAgICAgdHJhbnNpdGlvbl9vdXQoaWZfYmxvY2sxKTtcbiAgICAgIGN1cnJlbnQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGlmIChkZXRhY2hpbmcpIGRldGFjaChoZWFkZXIpO1xuICAgICAgaWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLmQoKTtcbiAgICAgIGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5kKCk7XG4gICAgfVxuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGluc3RhbmNlJDQoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgbGV0IHtcbiAgICBsYWJlbElkXG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIHN0ZXBcbiAgfSA9ICQkcHJvcHM7XG4gIGxldCB0aXRsZSwgY2FuY2VsSWNvbjtcblxuICAkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBpZiAoXCJsYWJlbElkXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDAsIGxhYmVsSWQgPSAkJHByb3BzLmxhYmVsSWQpO1xuICAgIGlmIChcInN0ZXBcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMSwgc3RlcCA9ICQkcHJvcHMuc3RlcCk7XG4gIH07XG5cbiAgJCRzZWxmLiQkLnVwZGF0ZSA9ICgpID0+IHtcbiAgICBpZiAoJCRzZWxmLiQkLmRpcnR5ICZcbiAgICAvKnN0ZXAqL1xuICAgIDIpIHtcbiAgICAgIHtcbiAgICAgICAgJCRpbnZhbGlkYXRlKDIsIHRpdGxlID0gc3RlcC5vcHRpb25zLnRpdGxlKTtcbiAgICAgICAgJCRpbnZhbGlkYXRlKDMsIGNhbmNlbEljb24gPSBzdGVwLm9wdGlvbnMuY2FuY2VsSWNvbik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBbbGFiZWxJZCwgc3RlcCwgdGl0bGUsIGNhbmNlbEljb25dO1xufVxuXG5jbGFzcyBTaGVwaGVyZF9oZWFkZXIgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDQsIGNyZWF0ZV9mcmFnbWVudCQ0LCBzYWZlX25vdF9lcXVhbCwge1xuICAgICAgbGFiZWxJZDogMCxcbiAgICAgIHN0ZXA6IDFcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qIHNyYy9qcy9jb21wb25lbnRzL3NoZXBoZXJkLXRleHQuc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuMzcuMCAqL1xuXG5mdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkMyhjdHgpIHtcbiAgbGV0IGRpdjtcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICAgIGF0dHIoZGl2LCBcImNsYXNzXCIsIFwic2hlcGhlcmQtdGV4dFwiKTtcbiAgICAgIGF0dHIoZGl2LCBcImlkXCIsXG4gICAgICAvKmRlc2NyaXB0aW9uSWQqL1xuICAgICAgY3R4WzFdKTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgaW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgICAgLypkaXZfYmluZGluZyovXG5cbiAgICAgIGN0eFszXShkaXYpO1xuICAgIH0sXG5cbiAgICBwKGN0eCwgW2RpcnR5XSkge1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qZGVzY3JpcHRpb25JZCovXG4gICAgICAyKSB7XG4gICAgICAgIGF0dHIoZGl2LCBcImlkXCIsXG4gICAgICAgIC8qZGVzY3JpcHRpb25JZCovXG4gICAgICAgIGN0eFsxXSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGk6IG5vb3AsXG4gICAgbzogbm9vcCxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICAgIC8qZGl2X2JpbmRpbmcqL1xuXG4gICAgICBjdHhbM10obnVsbCk7XG4gICAgfVxuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGluc3RhbmNlJDMoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgbGV0IHtcbiAgICBkZXNjcmlwdGlvbklkXG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIGVsZW1lbnRcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgc3RlcFxuICB9ID0gJCRwcm9wcztcbiAgYWZ0ZXJVcGRhdGUoKCkgPT4ge1xuICAgIGxldCB7XG4gICAgICB0ZXh0XG4gICAgfSA9IHN0ZXAub3B0aW9ucztcblxuICAgIGlmIChpc0Z1bmN0aW9uKHRleHQpKSB7XG4gICAgICB0ZXh0ID0gdGV4dC5jYWxsKHN0ZXApO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50JDEodGV4dCkpIHtcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQkaW52YWxpZGF0ZSgwLCBlbGVtZW50LmlubmVySFRNTCA9IHRleHQsIGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gZGl2X2JpbmRpbmcoJCR2YWx1ZSkge1xuICAgIGJpbmRpbmdfY2FsbGJhY2tzWyQkdmFsdWUgPyBcInVuc2hpZnRcIiA6IFwicHVzaFwiXSgoKSA9PiB7XG4gICAgICBlbGVtZW50ID0gJCR2YWx1ZTtcbiAgICAgICQkaW52YWxpZGF0ZSgwLCBlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gICQkc2VsZi4kJHNldCA9ICQkcHJvcHMgPT4ge1xuICAgIGlmIChcImRlc2NyaXB0aW9uSWRcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMSwgZGVzY3JpcHRpb25JZCA9ICQkcHJvcHMuZGVzY3JpcHRpb25JZCk7XG4gICAgaWYgKFwiZWxlbWVudFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgwLCBlbGVtZW50ID0gJCRwcm9wcy5lbGVtZW50KTtcbiAgICBpZiAoXCJzdGVwXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDIsIHN0ZXAgPSAkJHByb3BzLnN0ZXApO1xuICB9O1xuXG4gIHJldHVybiBbZWxlbWVudCwgZGVzY3JpcHRpb25JZCwgc3RlcCwgZGl2X2JpbmRpbmddO1xufVxuXG5jbGFzcyBTaGVwaGVyZF90ZXh0IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgaW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQzLCBjcmVhdGVfZnJhZ21lbnQkMywgc2FmZV9ub3RfZXF1YWwsIHtcbiAgICAgIGRlc2NyaXB0aW9uSWQ6IDEsXG4gICAgICBlbGVtZW50OiAwLFxuICAgICAgc3RlcDogMlxuICAgIH0pO1xuICB9XG5cbn1cblxuLyogc3JjL2pzL2NvbXBvbmVudHMvc2hlcGhlcmQtY29udGVudC5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My4zNy4wICovXG5cbmZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9ja18yKGN0eCkge1xuICBsZXQgc2hlcGhlcmRoZWFkZXI7XG4gIGxldCBjdXJyZW50O1xuICBzaGVwaGVyZGhlYWRlciA9IG5ldyBTaGVwaGVyZF9oZWFkZXIoe1xuICAgIHByb3BzOiB7XG4gICAgICBsYWJlbElkOlxuICAgICAgLypsYWJlbElkKi9cbiAgICAgIGN0eFsxXSxcbiAgICAgIHN0ZXA6XG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzJdXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgY3JlYXRlX2NvbXBvbmVudChzaGVwaGVyZGhlYWRlci4kJC5mcmFnbWVudCk7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIG1vdW50X2NvbXBvbmVudChzaGVwaGVyZGhlYWRlciwgdGFyZ2V0LCBhbmNob3IpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIHAoY3R4LCBkaXJ0eSkge1xuICAgICAgY29uc3Qgc2hlcGhlcmRoZWFkZXJfY2hhbmdlcyA9IHt9O1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qbGFiZWxJZCovXG4gICAgICAyKSBzaGVwaGVyZGhlYWRlcl9jaGFuZ2VzLmxhYmVsSWQgPVxuICAgICAgLypsYWJlbElkKi9cbiAgICAgIGN0eFsxXTtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKnN0ZXAqL1xuICAgICAgNCkgc2hlcGhlcmRoZWFkZXJfY2hhbmdlcy5zdGVwID1cbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMl07XG4gICAgICBzaGVwaGVyZGhlYWRlci4kc2V0KHNoZXBoZXJkaGVhZGVyX2NoYW5nZXMpO1xuICAgIH0sXG5cbiAgICBpKGxvY2FsKSB7XG4gICAgICBpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgICAgdHJhbnNpdGlvbl9pbihzaGVwaGVyZGhlYWRlci4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIG8obG9jYWwpIHtcbiAgICAgIHRyYW5zaXRpb25fb3V0KHNoZXBoZXJkaGVhZGVyLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgICBjdXJyZW50ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIGQoZGV0YWNoaW5nKSB7XG4gICAgICBkZXN0cm95X2NvbXBvbmVudChzaGVwaGVyZGhlYWRlciwgZGV0YWNoaW5nKTtcbiAgICB9XG5cbiAgfTtcbn0gLy8gKDI4OjIpIHsjaWYgIWlzVW5kZWZpbmVkKHN0ZXAub3B0aW9ucy50ZXh0KX1cblxuXG5mdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMShjdHgpIHtcbiAgbGV0IHNoZXBoZXJkdGV4dDtcbiAgbGV0IGN1cnJlbnQ7XG4gIHNoZXBoZXJkdGV4dCA9IG5ldyBTaGVwaGVyZF90ZXh0KHtcbiAgICBwcm9wczoge1xuICAgICAgZGVzY3JpcHRpb25JZDpcbiAgICAgIC8qZGVzY3JpcHRpb25JZCovXG4gICAgICBjdHhbMF0sXG4gICAgICBzdGVwOlxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFsyXVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGNyZWF0ZV9jb21wb25lbnQoc2hlcGhlcmR0ZXh0LiQkLmZyYWdtZW50KTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgbW91bnRfY29tcG9uZW50KHNoZXBoZXJkdGV4dCwgdGFyZ2V0LCBhbmNob3IpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIHAoY3R4LCBkaXJ0eSkge1xuICAgICAgY29uc3Qgc2hlcGhlcmR0ZXh0X2NoYW5nZXMgPSB7fTtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKmRlc2NyaXB0aW9uSWQqL1xuICAgICAgMSkgc2hlcGhlcmR0ZXh0X2NoYW5nZXMuZGVzY3JpcHRpb25JZCA9XG4gICAgICAvKmRlc2NyaXB0aW9uSWQqL1xuICAgICAgY3R4WzBdO1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qc3RlcCovXG4gICAgICA0KSBzaGVwaGVyZHRleHRfY2hhbmdlcy5zdGVwID1cbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMl07XG4gICAgICBzaGVwaGVyZHRleHQuJHNldChzaGVwaGVyZHRleHRfY2hhbmdlcyk7XG4gICAgfSxcblxuICAgIGkobG9jYWwpIHtcbiAgICAgIGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgICB0cmFuc2l0aW9uX2luKHNoZXBoZXJkdGV4dC4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIG8obG9jYWwpIHtcbiAgICAgIHRyYW5zaXRpb25fb3V0KHNoZXBoZXJkdGV4dC4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgICAgY3VycmVudCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgZGVzdHJveV9jb21wb25lbnQoc2hlcGhlcmR0ZXh0LCBkZXRhY2hpbmcpO1xuICAgIH1cblxuICB9O1xufSAvLyAoMzU6MikgeyNpZiBBcnJheS5pc0FycmF5KHN0ZXAub3B0aW9ucy5idXR0b25zKSAmJiBzdGVwLm9wdGlvbnMuYnV0dG9ucy5sZW5ndGh9XG5cblxuZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrJDEoY3R4KSB7XG4gIGxldCBzaGVwaGVyZGZvb3RlcjtcbiAgbGV0IGN1cnJlbnQ7XG4gIHNoZXBoZXJkZm9vdGVyID0gbmV3IFNoZXBoZXJkX2Zvb3Rlcih7XG4gICAgcHJvcHM6IHtcbiAgICAgIHN0ZXA6XG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzJdXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgY3JlYXRlX2NvbXBvbmVudChzaGVwaGVyZGZvb3Rlci4kJC5mcmFnbWVudCk7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIG1vdW50X2NvbXBvbmVudChzaGVwaGVyZGZvb3RlciwgdGFyZ2V0LCBhbmNob3IpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIHAoY3R4LCBkaXJ0eSkge1xuICAgICAgY29uc3Qgc2hlcGhlcmRmb290ZXJfY2hhbmdlcyA9IHt9O1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qc3RlcCovXG4gICAgICA0KSBzaGVwaGVyZGZvb3Rlcl9jaGFuZ2VzLnN0ZXAgPVxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFsyXTtcbiAgICAgIHNoZXBoZXJkZm9vdGVyLiRzZXQoc2hlcGhlcmRmb290ZXJfY2hhbmdlcyk7XG4gICAgfSxcblxuICAgIGkobG9jYWwpIHtcbiAgICAgIGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgICB0cmFuc2l0aW9uX2luKHNoZXBoZXJkZm9vdGVyLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgbyhsb2NhbCkge1xuICAgICAgdHJhbnNpdGlvbl9vdXQoc2hlcGhlcmRmb290ZXIuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICAgIGN1cnJlbnQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHNoZXBoZXJkZm9vdGVyLCBkZXRhY2hpbmcpO1xuICAgIH1cblxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkMihjdHgpIHtcbiAgbGV0IGRpdjtcbiAgbGV0IHNob3dfaWZfMiA9ICFpc1VuZGVmaW5lZChcbiAgLypzdGVwKi9cbiAgY3R4WzJdLm9wdGlvbnMudGl0bGUpIHx8XG4gIC8qc3RlcCovXG4gIGN0eFsyXS5vcHRpb25zLmNhbmNlbEljb24gJiZcbiAgLypzdGVwKi9cbiAgY3R4WzJdLm9wdGlvbnMuY2FuY2VsSWNvbi5lbmFibGVkO1xuICBsZXQgdDA7XG4gIGxldCBzaG93X2lmXzEgPSAhaXNVbmRlZmluZWQoXG4gIC8qc3RlcCovXG4gIGN0eFsyXS5vcHRpb25zLnRleHQpO1xuICBsZXQgdDE7XG4gIGxldCBzaG93X2lmID0gQXJyYXkuaXNBcnJheShcbiAgLypzdGVwKi9cbiAgY3R4WzJdLm9wdGlvbnMuYnV0dG9ucykgJiZcbiAgLypzdGVwKi9cbiAgY3R4WzJdLm9wdGlvbnMuYnV0dG9ucy5sZW5ndGg7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgaWZfYmxvY2swID0gc2hvd19pZl8yICYmIGNyZWF0ZV9pZl9ibG9ja18yKGN0eCk7XG4gIGxldCBpZl9ibG9jazEgPSBzaG93X2lmXzEgJiYgY3JlYXRlX2lmX2Jsb2NrXzEoY3R4KTtcbiAgbGV0IGlmX2Jsb2NrMiA9IHNob3dfaWYgJiYgY3JlYXRlX2lmX2Jsb2NrJDEoY3R4KTtcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5jKCk7XG4gICAgICB0MCA9IHNwYWNlKCk7XG4gICAgICBpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuYygpO1xuICAgICAgdDEgPSBzcGFjZSgpO1xuICAgICAgaWYgKGlmX2Jsb2NrMikgaWZfYmxvY2syLmMoKTtcbiAgICAgIGF0dHIoZGl2LCBcImNsYXNzXCIsIFwic2hlcGhlcmQtY29udGVudFwiKTtcbiAgICB9LFxuXG4gICAgbSh0YXJnZXQsIGFuY2hvcikge1xuICAgICAgaW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgICAgaWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLm0oZGl2LCBudWxsKTtcbiAgICAgIGFwcGVuZChkaXYsIHQwKTtcbiAgICAgIGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5tKGRpdiwgbnVsbCk7XG4gICAgICBhcHBlbmQoZGl2LCB0MSk7XG4gICAgICBpZiAoaWZfYmxvY2syKSBpZl9ibG9jazIubShkaXYsIG51bGwpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIHAoY3R4LCBbZGlydHldKSB7XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypzdGVwKi9cbiAgICAgIDQpIHNob3dfaWZfMiA9ICFpc1VuZGVmaW5lZChcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMl0ub3B0aW9ucy50aXRsZSkgfHxcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMl0ub3B0aW9ucy5jYW5jZWxJY29uICYmXG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzJdLm9wdGlvbnMuY2FuY2VsSWNvbi5lbmFibGVkO1xuXG4gICAgICBpZiAoc2hvd19pZl8yKSB7XG4gICAgICAgIGlmIChpZl9ibG9jazApIHtcbiAgICAgICAgICBpZl9ibG9jazAucChjdHgsIGRpcnR5KTtcblxuICAgICAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAgICAgLypzdGVwKi9cbiAgICAgICAgICA0KSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmX2Jsb2NrMCA9IGNyZWF0ZV9pZl9ibG9ja18yKGN0eCk7XG4gICAgICAgICAgaWZfYmxvY2swLmMoKTtcbiAgICAgICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCwgMSk7XG4gICAgICAgICAgaWZfYmxvY2swLm0oZGl2LCB0MCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaWZfYmxvY2swKSB7XG4gICAgICAgIGdyb3VwX291dHJvcygpO1xuICAgICAgICB0cmFuc2l0aW9uX291dChpZl9ibG9jazAsIDEsIDEsICgpID0+IHtcbiAgICAgICAgICBpZl9ibG9jazAgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKnN0ZXAqL1xuICAgICAgNCkgc2hvd19pZl8xID0gIWlzVW5kZWZpbmVkKFxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFsyXS5vcHRpb25zLnRleHQpO1xuXG4gICAgICBpZiAoc2hvd19pZl8xKSB7XG4gICAgICAgIGlmIChpZl9ibG9jazEpIHtcbiAgICAgICAgICBpZl9ibG9jazEucChjdHgsIGRpcnR5KTtcblxuICAgICAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAgICAgLypzdGVwKi9cbiAgICAgICAgICA0KSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmX2Jsb2NrMSA9IGNyZWF0ZV9pZl9ibG9ja18xKGN0eCk7XG4gICAgICAgICAgaWZfYmxvY2sxLmMoKTtcbiAgICAgICAgICB0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgICAgICAgaWZfYmxvY2sxLm0oZGl2LCB0MSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaWZfYmxvY2sxKSB7XG4gICAgICAgIGdyb3VwX291dHJvcygpO1xuICAgICAgICB0cmFuc2l0aW9uX291dChpZl9ibG9jazEsIDEsIDEsICgpID0+IHtcbiAgICAgICAgICBpZl9ibG9jazEgPSBudWxsO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hlY2tfb3V0cm9zKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKnN0ZXAqL1xuICAgICAgNCkgc2hvd19pZiA9IEFycmF5LmlzQXJyYXkoXG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzJdLm9wdGlvbnMuYnV0dG9ucykgJiZcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbMl0ub3B0aW9ucy5idXR0b25zLmxlbmd0aDtcblxuICAgICAgaWYgKHNob3dfaWYpIHtcbiAgICAgICAgaWYgKGlmX2Jsb2NrMikge1xuICAgICAgICAgIGlmX2Jsb2NrMi5wKGN0eCwgZGlydHkpO1xuXG4gICAgICAgICAgaWYgKGRpcnR5ICZcbiAgICAgICAgICAvKnN0ZXAqL1xuICAgICAgICAgIDQpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2syLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWZfYmxvY2syID0gY3JlYXRlX2lmX2Jsb2NrJDEoY3R4KTtcbiAgICAgICAgICBpZl9ibG9jazIuYygpO1xuICAgICAgICAgIHRyYW5zaXRpb25faW4oaWZfYmxvY2syLCAxKTtcbiAgICAgICAgICBpZl9ibG9jazIubShkaXYsIG51bGwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlmX2Jsb2NrMikge1xuICAgICAgICBncm91cF9vdXRyb3MoKTtcbiAgICAgICAgdHJhbnNpdGlvbl9vdXQoaWZfYmxvY2syLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgICAgaWZfYmxvY2syID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpKGxvY2FsKSB7XG4gICAgICBpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazApO1xuICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazEpO1xuICAgICAgdHJhbnNpdGlvbl9pbihpZl9ibG9jazIpO1xuICAgICAgY3VycmVudCA9IHRydWU7XG4gICAgfSxcblxuICAgIG8obG9jYWwpIHtcbiAgICAgIHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMCk7XG4gICAgICB0cmFuc2l0aW9uX291dChpZl9ibG9jazEpO1xuICAgICAgdHJhbnNpdGlvbl9vdXQoaWZfYmxvY2syKTtcbiAgICAgIGN1cnJlbnQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgICAgaWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLmQoKTtcbiAgICAgIGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5kKCk7XG4gICAgICBpZiAoaWZfYmxvY2syKSBpZl9ibG9jazIuZCgpO1xuICAgIH1cblxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZSQyKCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gIGxldCB7XG4gICAgZGVzY3JpcHRpb25JZFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBsYWJlbElkXG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIHN0ZXBcbiAgfSA9ICQkcHJvcHM7XG5cbiAgJCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgaWYgKFwiZGVzY3JpcHRpb25JZFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgwLCBkZXNjcmlwdGlvbklkID0gJCRwcm9wcy5kZXNjcmlwdGlvbklkKTtcbiAgICBpZiAoXCJsYWJlbElkXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDEsIGxhYmVsSWQgPSAkJHByb3BzLmxhYmVsSWQpO1xuICAgIGlmIChcInN0ZXBcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMiwgc3RlcCA9ICQkcHJvcHMuc3RlcCk7XG4gIH07XG5cbiAgcmV0dXJuIFtkZXNjcmlwdGlvbklkLCBsYWJlbElkLCBzdGVwXTtcbn1cblxuY2xhc3MgU2hlcGhlcmRfY29udGVudCBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UkMiwgY3JlYXRlX2ZyYWdtZW50JDIsIHNhZmVfbm90X2VxdWFsLCB7XG4gICAgICBkZXNjcmlwdGlvbklkOiAwLFxuICAgICAgbGFiZWxJZDogMSxcbiAgICAgIHN0ZXA6IDJcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qIHNyYy9qcy9jb21wb25lbnRzL3NoZXBoZXJkLWVsZW1lbnQuc3ZlbHRlIGdlbmVyYXRlZCBieSBTdmVsdGUgdjMuMzcuMCAqL1xuXG5mdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2soY3R4KSB7XG4gIGxldCBkaXY7XG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhdHRyKGRpdiwgXCJjbGFzc1wiLCBcInNoZXBoZXJkLWFycm93XCIpO1xuICAgICAgYXR0cihkaXYsIFwiZGF0YS1wb3BwZXItYXJyb3dcIiwgXCJcIik7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIGluc2VydCh0YXJnZXQsIGRpdiwgYW5jaG9yKTtcbiAgICB9LFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgIH1cblxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkMShjdHgpIHtcbiAgbGV0IGRpdjtcbiAgbGV0IHQ7XG4gIGxldCBzaGVwaGVyZGNvbnRlbnQ7XG4gIGxldCBkaXZfYXJpYV9kZXNjcmliZWRieV92YWx1ZTtcbiAgbGV0IGRpdl9hcmlhX2xhYmVsbGVkYnlfdmFsdWU7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgbW91bnRlZDtcbiAgbGV0IGRpc3Bvc2U7XG4gIGxldCBpZl9ibG9jayA9XG4gIC8qc3RlcCovXG4gIGN0eFs0XS5vcHRpb25zLmFycm93ICYmXG4gIC8qc3RlcCovXG4gIGN0eFs0XS5vcHRpb25zLmF0dGFjaFRvICYmXG4gIC8qc3RlcCovXG4gIGN0eFs0XS5vcHRpb25zLmF0dGFjaFRvLmVsZW1lbnQgJiZcbiAgLypzdGVwKi9cbiAgY3R4WzRdLm9wdGlvbnMuYXR0YWNoVG8ub24gJiYgY3JlYXRlX2lmX2Jsb2NrKCk7XG4gIHNoZXBoZXJkY29udGVudCA9IG5ldyBTaGVwaGVyZF9jb250ZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgZGVzY3JpcHRpb25JZDpcbiAgICAgIC8qZGVzY3JpcHRpb25JZCovXG4gICAgICBjdHhbMl0sXG4gICAgICBsYWJlbElkOlxuICAgICAgLypsYWJlbElkKi9cbiAgICAgIGN0eFszXSxcbiAgICAgIHN0ZXA6XG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzRdXG4gICAgfVxuICB9KTtcbiAgbGV0IGRpdl9sZXZlbHMgPSBbe1xuICAgIFwiYXJpYS1kZXNjcmliZWRieVwiOiBkaXZfYXJpYV9kZXNjcmliZWRieV92YWx1ZSA9ICFpc1VuZGVmaW5lZChcbiAgICAvKnN0ZXAqL1xuICAgIGN0eFs0XS5vcHRpb25zLnRleHQpID9cbiAgICAvKmRlc2NyaXB0aW9uSWQqL1xuICAgIGN0eFsyXSA6IG51bGxcbiAgfSwge1xuICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IGRpdl9hcmlhX2xhYmVsbGVkYnlfdmFsdWUgPVxuICAgIC8qc3RlcCovXG4gICAgY3R4WzRdLm9wdGlvbnMudGl0bGUgP1xuICAgIC8qbGFiZWxJZCovXG4gICAgY3R4WzNdIDogbnVsbFxuICB9LFxuICAvKmRhdGFTdGVwSWQqL1xuICBjdHhbMV0sIHtcbiAgICByb2xlOiBcImRpYWxvZ1wiXG4gIH0sIHtcbiAgICB0YWJpbmRleDogXCIwXCJcbiAgfV07XG4gIGxldCBkaXZfZGF0YSA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGl2X2xldmVscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGRpdl9kYXRhID0gYXNzaWduKGRpdl9kYXRhLCBkaXZfbGV2ZWxzW2ldKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYygpIHtcbiAgICAgIGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLmMoKTtcbiAgICAgIHQgPSBzcGFjZSgpO1xuICAgICAgY3JlYXRlX2NvbXBvbmVudChzaGVwaGVyZGNvbnRlbnQuJCQuZnJhZ21lbnQpO1xuICAgICAgc2V0X2F0dHJpYnV0ZXMoZGl2LCBkaXZfZGF0YSk7XG4gICAgICB0b2dnbGVfY2xhc3MoZGl2LCBcInNoZXBoZXJkLWhhcy1jYW5jZWwtaWNvblwiLFxuICAgICAgLypoYXNDYW5jZWxJY29uKi9cbiAgICAgIGN0eFs1XSk7XG4gICAgICB0b2dnbGVfY2xhc3MoZGl2LCBcInNoZXBoZXJkLWhhcy10aXRsZVwiLFxuICAgICAgLypoYXNUaXRsZSovXG4gICAgICBjdHhbNl0pO1xuICAgICAgdG9nZ2xlX2NsYXNzKGRpdiwgXCJzaGVwaGVyZC1lbGVtZW50XCIsIHRydWUpO1xuICAgIH0sXG5cbiAgICBtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgICBpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgICBpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLm0oZGl2LCBudWxsKTtcbiAgICAgIGFwcGVuZChkaXYsIHQpO1xuICAgICAgbW91bnRfY29tcG9uZW50KHNoZXBoZXJkY29udGVudCwgZGl2LCBudWxsKTtcbiAgICAgIC8qZGl2X2JpbmRpbmcqL1xuXG4gICAgICBjdHhbMTNdKGRpdik7XG4gICAgICBjdXJyZW50ID0gdHJ1ZTtcblxuICAgICAgaWYgKCFtb3VudGVkKSB7XG4gICAgICAgIGRpc3Bvc2UgPSBsaXN0ZW4oZGl2LCBcImtleWRvd25cIixcbiAgICAgICAgLypoYW5kbGVLZXlEb3duKi9cbiAgICAgICAgY3R4WzddKTtcbiAgICAgICAgbW91bnRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHAoY3R4LCBbZGlydHldKSB7XG4gICAgICBpZiAoXG4gICAgICAvKnN0ZXAqL1xuICAgICAgY3R4WzRdLm9wdGlvbnMuYXJyb3cgJiZcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbNF0ub3B0aW9ucy5hdHRhY2hUbyAmJlxuICAgICAgLypzdGVwKi9cbiAgICAgIGN0eFs0XS5vcHRpb25zLmF0dGFjaFRvLmVsZW1lbnQgJiZcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbNF0ub3B0aW9ucy5hdHRhY2hUby5vbikge1xuICAgICAgICBpZiAoaWZfYmxvY2spIDsgZWxzZSB7XG4gICAgICAgICAgaWZfYmxvY2sgPSBjcmVhdGVfaWZfYmxvY2soKTtcbiAgICAgICAgICBpZl9ibG9jay5jKCk7XG4gICAgICAgICAgaWZfYmxvY2subShkaXYsIHQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlmX2Jsb2NrKSB7XG4gICAgICAgIGlmX2Jsb2NrLmQoMSk7XG4gICAgICAgIGlmX2Jsb2NrID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2hlcGhlcmRjb250ZW50X2NoYW5nZXMgPSB7fTtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKmRlc2NyaXB0aW9uSWQqL1xuICAgICAgNCkgc2hlcGhlcmRjb250ZW50X2NoYW5nZXMuZGVzY3JpcHRpb25JZCA9XG4gICAgICAvKmRlc2NyaXB0aW9uSWQqL1xuICAgICAgY3R4WzJdO1xuICAgICAgaWYgKGRpcnR5ICZcbiAgICAgIC8qbGFiZWxJZCovXG4gICAgICA4KSBzaGVwaGVyZGNvbnRlbnRfY2hhbmdlcy5sYWJlbElkID1cbiAgICAgIC8qbGFiZWxJZCovXG4gICAgICBjdHhbM107XG4gICAgICBpZiAoZGlydHkgJlxuICAgICAgLypzdGVwKi9cbiAgICAgIDE2KSBzaGVwaGVyZGNvbnRlbnRfY2hhbmdlcy5zdGVwID1cbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbNF07XG4gICAgICBzaGVwaGVyZGNvbnRlbnQuJHNldChzaGVwaGVyZGNvbnRlbnRfY2hhbmdlcyk7XG4gICAgICBzZXRfYXR0cmlidXRlcyhkaXYsIGRpdl9kYXRhID0gZ2V0X3NwcmVhZF91cGRhdGUoZGl2X2xldmVscywgWyghY3VycmVudCB8fCBkaXJ0eSAmXG4gICAgICAvKnN0ZXAsIGRlc2NyaXB0aW9uSWQqL1xuICAgICAgMjAgJiYgZGl2X2FyaWFfZGVzY3JpYmVkYnlfdmFsdWUgIT09IChkaXZfYXJpYV9kZXNjcmliZWRieV92YWx1ZSA9ICFpc1VuZGVmaW5lZChcbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbNF0ub3B0aW9ucy50ZXh0KSA/XG4gICAgICAvKmRlc2NyaXB0aW9uSWQqL1xuICAgICAgY3R4WzJdIDogbnVsbCkpICYmIHtcbiAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IGRpdl9hcmlhX2Rlc2NyaWJlZGJ5X3ZhbHVlXG4gICAgICB9LCAoIWN1cnJlbnQgfHwgZGlydHkgJlxuICAgICAgLypzdGVwLCBsYWJlbElkKi9cbiAgICAgIDI0ICYmIGRpdl9hcmlhX2xhYmVsbGVkYnlfdmFsdWUgIT09IChkaXZfYXJpYV9sYWJlbGxlZGJ5X3ZhbHVlID1cbiAgICAgIC8qc3RlcCovXG4gICAgICBjdHhbNF0ub3B0aW9ucy50aXRsZSA/XG4gICAgICAvKmxhYmVsSWQqL1xuICAgICAgY3R4WzNdIDogbnVsbCkpICYmIHtcbiAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogZGl2X2FyaWFfbGFiZWxsZWRieV92YWx1ZVxuICAgICAgfSwgZGlydHkgJlxuICAgICAgLypkYXRhU3RlcElkKi9cbiAgICAgIDIgJiZcbiAgICAgIC8qZGF0YVN0ZXBJZCovXG4gICAgICBjdHhbMV0sIHtcbiAgICAgICAgcm9sZTogXCJkaWFsb2dcIlxuICAgICAgfSwge1xuICAgICAgICB0YWJpbmRleDogXCIwXCJcbiAgICAgIH1dKSk7XG4gICAgICB0b2dnbGVfY2xhc3MoZGl2LCBcInNoZXBoZXJkLWhhcy1jYW5jZWwtaWNvblwiLFxuICAgICAgLypoYXNDYW5jZWxJY29uKi9cbiAgICAgIGN0eFs1XSk7XG4gICAgICB0b2dnbGVfY2xhc3MoZGl2LCBcInNoZXBoZXJkLWhhcy10aXRsZVwiLFxuICAgICAgLypoYXNUaXRsZSovXG4gICAgICBjdHhbNl0pO1xuICAgICAgdG9nZ2xlX2NsYXNzKGRpdiwgXCJzaGVwaGVyZC1lbGVtZW50XCIsIHRydWUpO1xuICAgIH0sXG5cbiAgICBpKGxvY2FsKSB7XG4gICAgICBpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgICAgdHJhbnNpdGlvbl9pbihzaGVwaGVyZGNvbnRlbnQuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICAgIGN1cnJlbnQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBvKGxvY2FsKSB7XG4gICAgICB0cmFuc2l0aW9uX291dChzaGVwaGVyZGNvbnRlbnQuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICAgIGN1cnJlbnQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgZChkZXRhY2hpbmcpIHtcbiAgICAgIGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgICAgaWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5kKCk7XG4gICAgICBkZXN0cm95X2NvbXBvbmVudChzaGVwaGVyZGNvbnRlbnQpO1xuICAgICAgLypkaXZfYmluZGluZyovXG5cbiAgICAgIGN0eFsxM10obnVsbCk7XG4gICAgICBtb3VudGVkID0gZmFsc2U7XG4gICAgICBkaXNwb3NlKCk7XG4gICAgfVxuXG4gIH07XG59XG5cbmNvbnN0IEtFWV9UQUIgPSA5O1xuY29uc3QgS0VZX0VTQyA9IDI3O1xuY29uc3QgTEVGVF9BUlJPVyA9IDM3O1xuY29uc3QgUklHSFRfQVJST1cgPSAzOTtcblxuZnVuY3Rpb24gZ2V0Q2xhc3Nlc0FycmF5KGNsYXNzZXMpIHtcbiAgcmV0dXJuIGNsYXNzZXMuc3BsaXQoXCIgXCIpLmZpbHRlcihjbGFzc05hbWUgPT4gISFjbGFzc05hbWUubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UkMSgkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICBsZXQge1xuICAgIGNsYXNzUHJlZml4XG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIGVsZW1lbnRcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgZGVzY3JpcHRpb25JZFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBmaXJzdEZvY3VzYWJsZUVsZW1lbnRcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgZm9jdXNhYmxlRWxlbWVudHNcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgbGFiZWxJZFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBsYXN0Rm9jdXNhYmxlRWxlbWVudFxuICB9ID0gJCRwcm9wcyxcbiAgICAgIHtcbiAgICBzdGVwXG4gIH0gPSAkJHByb3BzLFxuICAgICAge1xuICAgIGRhdGFTdGVwSWRcbiAgfSA9ICQkcHJvcHM7XG4gIGxldCBoYXNDYW5jZWxJY29uLCBoYXNUaXRsZSwgY2xhc3NlcztcblxuICBjb25zdCBnZXRFbGVtZW50ID0gKCkgPT4gZWxlbWVudDtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICAvLyBHZXQgYWxsIGVsZW1lbnRzIHRoYXQgYXJlIGZvY3VzYWJsZVxuICAgICQkaW52YWxpZGF0ZSgxLCBkYXRhU3RlcElkID0ge1xuICAgICAgW2BkYXRhLSR7Y2xhc3NQcmVmaXh9c2hlcGhlcmQtc3RlcC1pZGBdOiBzdGVwLmlkXG4gICAgfSk7XG4gICAgJCRpbnZhbGlkYXRlKDksIGZvY3VzYWJsZUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIFt0YWJpbmRleD1cXFwiMFxcXCJdXCIpKTtcbiAgICAkJGludmFsaWRhdGUoOCwgZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF0pO1xuICAgICQkaW52YWxpZGF0ZSgxMCwgbGFzdEZvY3VzYWJsZUVsZW1lbnQgPSBmb2N1c2FibGVFbGVtZW50c1tmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxXSk7XG4gIH0pO1xuICBhZnRlclVwZGF0ZSgoKSA9PiB7XG4gICAgaWYgKGNsYXNzZXMgIT09IHN0ZXAub3B0aW9ucy5jbGFzc2VzKSB7XG4gICAgICB1cGRhdGVEeW5hbWljQ2xhc3NlcygpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlRHluYW1pY0NsYXNzZXMoKSB7XG4gICAgcmVtb3ZlQ2xhc3NlcyhjbGFzc2VzKTtcbiAgICBjbGFzc2VzID0gc3RlcC5vcHRpb25zLmNsYXNzZXM7XG4gICAgYWRkQ2xhc3NlcyhjbGFzc2VzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMoY2xhc3Nlcykge1xuICAgIGlmIChpc1N0cmluZyhjbGFzc2VzKSkge1xuICAgICAgY29uc3Qgb2xkQ2xhc3NlcyA9IGdldENsYXNzZXNBcnJheShjbGFzc2VzKTtcblxuICAgICAgaWYgKG9sZENsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSguLi5vbGRDbGFzc2VzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzc2VzKGNsYXNzZXMpIHtcbiAgICBpZiAoaXNTdHJpbmcoY2xhc3NlcykpIHtcbiAgICAgIGNvbnN0IG5ld0NsYXNzZXMgPSBnZXRDbGFzc2VzQXJyYXkoY2xhc3Nlcyk7XG5cbiAgICAgIGlmIChuZXdDbGFzc2VzLmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4ubmV3Q2xhc3Nlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAqIFNldHVwIGtleWRvd24gZXZlbnRzIHRvIGFsbG93IGNsb3NpbmcgdGhlIG1vZGFsIHdpdGggRVNDXG4gICpcbiAgKiBCb3Jyb3dlZCBmcm9tIHRoaXMgZ3JlYXQgcG9zdCEgaHR0cHM6Ly9iaXRzb2Zjby5kZS9hY2Nlc3NpYmxlLW1vZGFsLWRpYWxvZy9cbiAgKlxuICAqIEBwcml2YXRlXG4gICovXG5cblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgdG91clxuICAgIH0gPSBzdGVwO1xuXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgS0VZX1RBQjpcbiAgICAgICAgaWYgKGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSAvLyBCYWNrd2FyZCB0YWJcblxuXG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGZpcnN0Rm9jdXNhYmxlRWxlbWVudCB8fCBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInNoZXBoZXJkLWVsZW1lbnRcIikpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxhc3RGb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBsYXN0Rm9jdXNhYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZmlyc3RGb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgS0VZX0VTQzpcbiAgICAgICAgaWYgKHRvdXIub3B0aW9ucy5leGl0T25Fc2MpIHtcbiAgICAgICAgICBzdGVwLmNhbmNlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgTEVGVF9BUlJPVzpcbiAgICAgICAgaWYgKHRvdXIub3B0aW9ucy5rZXlib2FyZE5hdmlnYXRpb24pIHtcbiAgICAgICAgICB0b3VyLmJhY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFJJR0hUX0FSUk9XOlxuICAgICAgICBpZiAodG91ci5vcHRpb25zLmtleWJvYXJkTmF2aWdhdGlvbikge1xuICAgICAgICAgIHRvdXIubmV4dCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGRpdl9iaW5kaW5nKCQkdmFsdWUpIHtcbiAgICBiaW5kaW5nX2NhbGxiYWNrc1skJHZhbHVlID8gXCJ1bnNoaWZ0XCIgOiBcInB1c2hcIl0oKCkgPT4ge1xuICAgICAgZWxlbWVudCA9ICQkdmFsdWU7XG4gICAgICAkJGludmFsaWRhdGUoMCwgZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICAkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBpZiAoXCJjbGFzc1ByZWZpeFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgxMSwgY2xhc3NQcmVmaXggPSAkJHByb3BzLmNsYXNzUHJlZml4KTtcbiAgICBpZiAoXCJlbGVtZW50XCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDAsIGVsZW1lbnQgPSAkJHByb3BzLmVsZW1lbnQpO1xuICAgIGlmIChcImRlc2NyaXB0aW9uSWRcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMiwgZGVzY3JpcHRpb25JZCA9ICQkcHJvcHMuZGVzY3JpcHRpb25JZCk7XG4gICAgaWYgKFwiZmlyc3RGb2N1c2FibGVFbGVtZW50XCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDgsIGZpcnN0Rm9jdXNhYmxlRWxlbWVudCA9ICQkcHJvcHMuZmlyc3RGb2N1c2FibGVFbGVtZW50KTtcbiAgICBpZiAoXCJmb2N1c2FibGVFbGVtZW50c1wiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSg5LCBmb2N1c2FibGVFbGVtZW50cyA9ICQkcHJvcHMuZm9jdXNhYmxlRWxlbWVudHMpO1xuICAgIGlmIChcImxhYmVsSWRcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMywgbGFiZWxJZCA9ICQkcHJvcHMubGFiZWxJZCk7XG4gICAgaWYgKFwibGFzdEZvY3VzYWJsZUVsZW1lbnRcIiBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMTAsIGxhc3RGb2N1c2FibGVFbGVtZW50ID0gJCRwcm9wcy5sYXN0Rm9jdXNhYmxlRWxlbWVudCk7XG4gICAgaWYgKFwic3RlcFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSg0LCBzdGVwID0gJCRwcm9wcy5zdGVwKTtcbiAgICBpZiAoXCJkYXRhU3RlcElkXCIgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDEsIGRhdGFTdGVwSWQgPSAkJHByb3BzLmRhdGFTdGVwSWQpO1xuICB9O1xuXG4gICQkc2VsZi4kJC51cGRhdGUgPSAoKSA9PiB7XG4gICAgaWYgKCQkc2VsZi4kJC5kaXJ0eSAmXG4gICAgLypzdGVwKi9cbiAgICAxNikge1xuICAgICAge1xuICAgICAgICAkJGludmFsaWRhdGUoNSwgaGFzQ2FuY2VsSWNvbiA9IHN0ZXAub3B0aW9ucyAmJiBzdGVwLm9wdGlvbnMuY2FuY2VsSWNvbiAmJiBzdGVwLm9wdGlvbnMuY2FuY2VsSWNvbi5lbmFibGVkKTtcbiAgICAgICAgJCRpbnZhbGlkYXRlKDYsIGhhc1RpdGxlID0gc3RlcC5vcHRpb25zICYmIHN0ZXAub3B0aW9ucy50aXRsZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBbZWxlbWVudCwgZGF0YVN0ZXBJZCwgZGVzY3JpcHRpb25JZCwgbGFiZWxJZCwgc3RlcCwgaGFzQ2FuY2VsSWNvbiwgaGFzVGl0bGUsIGhhbmRsZUtleURvd24sIGZpcnN0Rm9jdXNhYmxlRWxlbWVudCwgZm9jdXNhYmxlRWxlbWVudHMsIGxhc3RGb2N1c2FibGVFbGVtZW50LCBjbGFzc1ByZWZpeCwgZ2V0RWxlbWVudCwgZGl2X2JpbmRpbmddO1xufVxuXG5jbGFzcyBTaGVwaGVyZF9lbGVtZW50IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgaW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQxLCBjcmVhdGVfZnJhZ21lbnQkMSwgc2FmZV9ub3RfZXF1YWwsIHtcbiAgICAgIGNsYXNzUHJlZml4OiAxMSxcbiAgICAgIGVsZW1lbnQ6IDAsXG4gICAgICBkZXNjcmlwdGlvbklkOiAyLFxuICAgICAgZmlyc3RGb2N1c2FibGVFbGVtZW50OiA4LFxuICAgICAgZm9jdXNhYmxlRWxlbWVudHM6IDksXG4gICAgICBsYWJlbElkOiAzLFxuICAgICAgbGFzdEZvY3VzYWJsZUVsZW1lbnQ6IDEwLFxuICAgICAgc3RlcDogNCxcbiAgICAgIGRhdGFTdGVwSWQ6IDEsXG4gICAgICBnZXRFbGVtZW50OiAxMlxuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJCQuY3R4WzEyXTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgc21vb3Roc2Nyb2xsID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAvKiBzbW9vdGhzY3JvbGwgdjAuNC40IC0gMjAxOSAtIER1c3RhbiBLYXN0ZW4sIEplcmVtaWFzIE1lbmljaGVsbGkgLSBNSVQgTGljZW5zZSAqL1xuICAoZnVuY3Rpb24gKCkge1xuXG4gICAgZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gICAgICAvLyBhbGlhc2VzXG4gICAgICB2YXIgdyA9IHdpbmRvdztcbiAgICAgIHZhciBkID0gZG9jdW1lbnQ7IC8vIHJldHVybiBpZiBzY3JvbGwgYmVoYXZpb3IgaXMgc3VwcG9ydGVkIGFuZCBwb2x5ZmlsbCBpcyBub3QgZm9yY2VkXG5cbiAgICAgIGlmICgnc2Nyb2xsQmVoYXZpb3InIGluIGQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIHcuX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18gIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBnbG9iYWxzXG5cblxuICAgICAgdmFyIEVsZW1lbnQgPSB3LkhUTUxFbGVtZW50IHx8IHcuRWxlbWVudDtcbiAgICAgIHZhciBTQ1JPTExfVElNRSA9IDQ2ODsgLy8gb2JqZWN0IGdhdGhlcmluZyBvcmlnaW5hbCBzY3JvbGwgbWV0aG9kc1xuXG4gICAgICB2YXIgb3JpZ2luYWwgPSB7XG4gICAgICAgIHNjcm9sbDogdy5zY3JvbGwgfHwgdy5zY3JvbGxUbyxcbiAgICAgICAgc2Nyb2xsQnk6IHcuc2Nyb2xsQnksXG4gICAgICAgIGVsZW1lbnRTY3JvbGw6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCB8fCBzY3JvbGxFbGVtZW50LFxuICAgICAgICBzY3JvbGxJbnRvVmlldzogRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXdcbiAgICAgIH07IC8vIGRlZmluZSB0aW1pbmcgbWV0aG9kXG5cbiAgICAgIHZhciBub3cgPSB3LnBlcmZvcm1hbmNlICYmIHcucGVyZm9ybWFuY2Uubm93ID8gdy5wZXJmb3JtYW5jZS5ub3cuYmluZCh3LnBlcmZvcm1hbmNlKSA6IERhdGUubm93O1xuICAgICAgLyoqXG4gICAgICAgKiBpbmRpY2F0ZXMgaWYgYSB0aGUgY3VycmVudCBicm93c2VyIGlzIG1hZGUgYnkgTWljcm9zb2Z0XG4gICAgICAgKiBAbWV0aG9kIGlzTWljcm9zb2Z0QnJvd3NlclxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHVzZXJBZ2VudFxuICAgICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICAgKi9cblxuICAgICAgZnVuY3Rpb24gaXNNaWNyb3NvZnRCcm93c2VyKHVzZXJBZ2VudCkge1xuICAgICAgICB2YXIgdXNlckFnZW50UGF0dGVybnMgPSBbJ01TSUUgJywgJ1RyaWRlbnQvJywgJ0VkZ2UvJ107XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKHVzZXJBZ2VudFBhdHRlcm5zLmpvaW4oJ3wnKSkudGVzdCh1c2VyQWdlbnQpO1xuICAgICAgfVxuICAgICAgLypcbiAgICAgICAqIElFIGhhcyByb3VuZGluZyBidWcgcm91bmRpbmcgZG93biBjbGllbnRIZWlnaHQgYW5kIGNsaWVudFdpZHRoIGFuZFxuICAgICAgICogcm91bmRpbmcgdXAgc2Nyb2xsSGVpZ2h0IGFuZCBzY3JvbGxXaWR0aCBjYXVzaW5nIGZhbHNlIHBvc2l0aXZlc1xuICAgICAgICogb24gaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICAgKi9cblxuXG4gICAgICB2YXIgUk9VTkRJTkdfVE9MRVJBTkNFID0gaXNNaWNyb3NvZnRCcm93c2VyKHcubmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAxIDogMDtcbiAgICAgIC8qKlxuICAgICAgICogY2hhbmdlcyBzY3JvbGwgcG9zaXRpb24gaW5zaWRlIGFuIGVsZW1lbnRcbiAgICAgICAqIEBtZXRob2Qgc2Nyb2xsRWxlbWVudFxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAgICovXG5cbiAgICAgIGZ1bmN0aW9uIHNjcm9sbEVsZW1lbnQoeCwgeSkge1xuICAgICAgICB0aGlzLnNjcm9sbExlZnQgPSB4O1xuICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IHk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIHJldHVybnMgcmVzdWx0IG9mIGFwcGx5aW5nIGVhc2UgbWF0aCBmdW5jdGlvbiB0byBhIG51bWJlclxuICAgICAgICogQG1ldGhvZCBlYXNlXG4gICAgICAgKiBAcGFyYW0ge051bWJlcn0ga1xuICAgICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgICAqL1xuXG5cbiAgICAgIGZ1bmN0aW9uIGVhc2Uoaykge1xuICAgICAgICByZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBpbmRpY2F0ZXMgaWYgYSBzbW9vdGggYmVoYXZpb3Igc2hvdWxkIGJlIGFwcGxpZWRcbiAgICAgICAqIEBtZXRob2Qgc2hvdWxkQmFpbE91dFxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSBmaXJzdEFyZ1xuICAgICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICAgKi9cblxuXG4gICAgICBmdW5jdGlvbiBzaG91bGRCYWlsT3V0KGZpcnN0QXJnKSB7XG4gICAgICAgIGlmIChmaXJzdEFyZyA9PT0gbnVsbCB8fCB0eXBlb2YgZmlyc3RBcmcgIT09ICdvYmplY3QnIHx8IGZpcnN0QXJnLmJlaGF2aW9yID09PSB1bmRlZmluZWQgfHwgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdhdXRvJyB8fCBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2luc3RhbnQnKSB7XG4gICAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdC9udWxsXG4gICAgICAgICAgLy8gb3IgYmVoYXZpb3IgaXMgYXV0bywgaW5zdGFudCBvciB1bmRlZmluZWRcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZmlyc3RBcmcgPT09ICdvYmplY3QnICYmIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnc21vb3RoJykge1xuICAgICAgICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIGFuIG9iamVjdCBhbmQgYmVoYXZpb3IgaXMgc21vb3RoXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IC8vIHRocm93IGVycm9yIHdoZW4gYmVoYXZpb3IgaXMgbm90IHN1cHBvcnRlZFxuXG5cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYmVoYXZpb3IgbWVtYmVyIG9mIFNjcm9sbE9wdGlvbnMgJyArIGZpcnN0QXJnLmJlaGF2aW9yICsgJyBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgZW51bWVyYXRpb24gU2Nyb2xsQmVoYXZpb3IuJyk7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGhhcyBzY3JvbGxhYmxlIHNwYWNlIGluIHRoZSBwcm92aWRlZCBheGlzXG4gICAgICAgKiBAbWV0aG9kIGhhc1Njcm9sbGFibGVTcGFjZVxuICAgICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAgICovXG5cblxuICAgICAgZnVuY3Rpb24gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCBheGlzKSB7XG4gICAgICAgIGlmIChheGlzID09PSAnWScpIHtcbiAgICAgICAgICByZXR1cm4gZWwuY2xpZW50SGVpZ2h0ICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF4aXMgPT09ICdYJykge1xuICAgICAgICAgIHJldHVybiBlbC5jbGllbnRXaWR0aCArIFJPVU5ESU5HX1RPTEVSQU5DRSA8IGVsLnNjcm9sbFdpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGhhcyBhIHNjcm9sbGFibGUgb3ZlcmZsb3cgcHJvcGVydHkgaW4gdGhlIGF4aXNcbiAgICAgICAqIEBtZXRob2QgY2FuT3ZlcmZsb3dcbiAgICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgICAqL1xuXG5cbiAgICAgIGZ1bmN0aW9uIGNhbk92ZXJmbG93KGVsLCBheGlzKSB7XG4gICAgICAgIHZhciBvdmVyZmxvd1ZhbHVlID0gdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKVsnb3ZlcmZsb3cnICsgYXhpc107XG4gICAgICAgIHJldHVybiBvdmVyZmxvd1ZhbHVlID09PSAnYXV0bycgfHwgb3ZlcmZsb3dWYWx1ZSA9PT0gJ3Njcm9sbCc7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIGluZGljYXRlcyBpZiBhbiBlbGVtZW50IGNhbiBiZSBzY3JvbGxlZCBpbiBlaXRoZXIgYXhpc1xuICAgICAgICogQG1ldGhvZCBpc1Njcm9sbGFibGVcbiAgICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgICAqL1xuXG5cbiAgICAgIGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbCkge1xuICAgICAgICB2YXIgaXNTY3JvbGxhYmxlWSA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1knKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1knKTtcbiAgICAgICAgdmFyIGlzU2Nyb2xsYWJsZVggPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdYJykgJiYgY2FuT3ZlcmZsb3coZWwsICdYJyk7XG4gICAgICAgIHJldHVybiBpc1Njcm9sbGFibGVZIHx8IGlzU2Nyb2xsYWJsZVg7XG4gICAgICB9XG4gICAgICAvKipcbiAgICAgICAqIGZpbmRzIHNjcm9sbGFibGUgcGFyZW50IG9mIGFuIGVsZW1lbnRcbiAgICAgICAqIEBtZXRob2QgZmluZFNjcm9sbGFibGVQYXJlbnRcbiAgICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgICAqIEByZXR1cm5zIHtOb2RlfSBlbFxuICAgICAgICovXG5cblxuICAgICAgZnVuY3Rpb24gZmluZFNjcm9sbGFibGVQYXJlbnQoZWwpIHtcbiAgICAgICAgd2hpbGUgKGVsICE9PSBkLmJvZHkgJiYgaXNTY3JvbGxhYmxlKGVsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGUgfHwgZWwuaG9zdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICAgIC8qKlxuICAgICAgICogc2VsZiBpbnZva2VkIGZ1bmN0aW9uIHRoYXQsIGdpdmVuIGEgY29udGV4dCwgc3RlcHMgdGhyb3VnaCBzY3JvbGxpbmdcbiAgICAgICAqIEBtZXRob2Qgc3RlcFxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAgICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICAgKi9cblxuXG4gICAgICBmdW5jdGlvbiBzdGVwKGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICB2YXIgY3VycmVudFg7XG4gICAgICAgIHZhciBjdXJyZW50WTtcbiAgICAgICAgdmFyIGVsYXBzZWQgPSAodGltZSAtIGNvbnRleHQuc3RhcnRUaW1lKSAvIFNDUk9MTF9USU1FOyAvLyBhdm9pZCBlbGFwc2VkIHRpbWVzIGhpZ2hlciB0aGFuIG9uZVxuXG4gICAgICAgIGVsYXBzZWQgPSBlbGFwc2VkID4gMSA/IDEgOiBlbGFwc2VkOyAvLyBhcHBseSBlYXNpbmcgdG8gZWxhcHNlZCB0aW1lXG5cbiAgICAgICAgdmFsdWUgPSBlYXNlKGVsYXBzZWQpO1xuICAgICAgICBjdXJyZW50WCA9IGNvbnRleHQuc3RhcnRYICsgKGNvbnRleHQueCAtIGNvbnRleHQuc3RhcnRYKSAqIHZhbHVlO1xuICAgICAgICBjdXJyZW50WSA9IGNvbnRleHQuc3RhcnRZICsgKGNvbnRleHQueSAtIGNvbnRleHQuc3RhcnRZKSAqIHZhbHVlO1xuICAgICAgICBjb250ZXh0Lm1ldGhvZC5jYWxsKGNvbnRleHQuc2Nyb2xsYWJsZSwgY3VycmVudFgsIGN1cnJlbnRZKTsgLy8gc2Nyb2xsIG1vcmUgaWYgd2UgaGF2ZSBub3QgcmVhY2hlZCBvdXIgZGVzdGluYXRpb25cblxuICAgICAgICBpZiAoY3VycmVudFggIT09IGNvbnRleHQueCB8fCBjdXJyZW50WSAhPT0gY29udGV4dC55KSB7XG4gICAgICAgICAgdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcC5iaW5kKHcsIGNvbnRleHQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLyoqXG4gICAgICAgKiBzY3JvbGxzIHdpbmRvdyBvciBlbGVtZW50IHdpdGggYSBzbW9vdGggYmVoYXZpb3JcbiAgICAgICAqIEBtZXRob2Qgc21vb3RoU2Nyb2xsXG4gICAgICAgKiBAcGFyYW0ge09iamVjdHxOb2RlfSBlbFxuICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAgICovXG5cblxuICAgICAgZnVuY3Rpb24gc21vb3RoU2Nyb2xsKGVsLCB4LCB5KSB7XG4gICAgICAgIHZhciBzY3JvbGxhYmxlO1xuICAgICAgICB2YXIgc3RhcnRYO1xuICAgICAgICB2YXIgc3RhcnRZO1xuICAgICAgICB2YXIgbWV0aG9kO1xuICAgICAgICB2YXIgc3RhcnRUaW1lID0gbm93KCk7IC8vIGRlZmluZSBzY3JvbGwgY29udGV4dFxuXG4gICAgICAgIGlmIChlbCA9PT0gZC5ib2R5KSB7XG4gICAgICAgICAgc2Nyb2xsYWJsZSA9IHc7XG4gICAgICAgICAgc3RhcnRYID0gdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQ7XG4gICAgICAgICAgc3RhcnRZID0gdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXQ7XG4gICAgICAgICAgbWV0aG9kID0gb3JpZ2luYWwuc2Nyb2xsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNjcm9sbGFibGUgPSBlbDtcbiAgICAgICAgICBzdGFydFggPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICAgIHN0YXJ0WSA9IGVsLnNjcm9sbFRvcDtcbiAgICAgICAgICBtZXRob2QgPSBzY3JvbGxFbGVtZW50O1xuICAgICAgICB9IC8vIHNjcm9sbCBsb29waW5nIG92ZXIgYSBmcmFtZVxuXG5cbiAgICAgICAgc3RlcCh7XG4gICAgICAgICAgc2Nyb2xsYWJsZTogc2Nyb2xsYWJsZSxcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcbiAgICAgICAgICBzdGFydFg6IHN0YXJ0WCxcbiAgICAgICAgICBzdGFydFk6IHN0YXJ0WSxcbiAgICAgICAgICB4OiB4LFxuICAgICAgICAgIHk6IHlcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIE9SSUdJTkFMIE1FVEhPRFMgT1ZFUlJJREVTXG4gICAgICAvLyB3LnNjcm9sbCBhbmQgdy5zY3JvbGxUb1xuXG5cbiAgICAgIHcuc2Nyb2xsID0gdy5zY3JvbGxUbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcblxuXG4gICAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgICBvcmlnaW5hbC5zY3JvbGwuY2FsbCh3LCBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdLmxlZnQgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IGFyZ3VtZW50c1swXSA6IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0LCAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBpZiBwcmVzZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFlcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0udG9wIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcblxuXG4gICAgICAgIHNtb290aFNjcm9sbC5jYWxsKHcsIGQuYm9keSwgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZCA/IH5+YXJndW1lbnRzWzBdLmxlZnQgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCwgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkID8gfn5hcmd1bWVudHNbMF0udG9wIDogdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXQpO1xuICAgICAgfTsgLy8gdy5zY3JvbGxCeVxuXG5cbiAgICAgIHcuc2Nyb2xsQnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gICAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG5cblxuICAgICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pKSB7XG4gICAgICAgICAgb3JpZ2luYWwuc2Nyb2xsQnkuY2FsbCh3LCBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdLmxlZnQgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IGFyZ3VtZW50c1swXSA6IDAsIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXS50b3AgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG5cblxuICAgICAgICBzbW9vdGhTY3JvbGwuY2FsbCh3LCBkLmJvZHksIH5+YXJndW1lbnRzWzBdLmxlZnQgKyAody5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQpLCB+fmFyZ3VtZW50c1swXS50b3AgKyAody5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXQpKTtcbiAgICAgIH07IC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCBhbmQgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG9cblxuXG4gICAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgPSBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcblxuXG4gICAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBpZiBvbmUgbnVtYmVyIGlzIHBhc3NlZCwgdGhyb3cgZXJyb3IgdG8gbWF0Y2ggRmlyZWZveCBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnbnVtYmVyJyAmJiBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdWYWx1ZSBjb3VsZCBub3QgYmUgY29udmVydGVkJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKHRoaXMsIC8vIHVzZSBsZWZ0IHByb3AsIGZpcnN0IG51bWJlciBhcmd1bWVudCBvciBmYWxsYmFjayB0byBzY3JvbGxMZWZ0XG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZCA/IH5+YXJndW1lbnRzWzBdLmxlZnQgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IH5+YXJndW1lbnRzWzBdIDogdGhpcy5zY3JvbGxMZWZ0LCAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBvciBmYWxsYmFjayB0byBzY3JvbGxUb3BcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1swXS50b3AgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IH5+YXJndW1lbnRzWzFdIDogdGhpcy5zY3JvbGxUb3ApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZWZ0ID0gYXJndW1lbnRzWzBdLmxlZnQ7XG4gICAgICAgIHZhciB0b3AgPSBhcmd1bWVudHNbMF0udG9wOyAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG5cbiAgICAgICAgc21vb3RoU2Nyb2xsLmNhbGwodGhpcywgdGhpcywgdHlwZW9mIGxlZnQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxMZWZ0IDogfn5sZWZ0LCB0eXBlb2YgdG9wID09PSAndW5kZWZpbmVkJyA/IHRoaXMuc2Nyb2xsVG9wIDogfn50b3ApO1xuICAgICAgfTsgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnlcblxuXG4gICAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcblxuXG4gICAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwodGhpcywgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZCA/IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnQgOiB+fmFyZ3VtZW50c1swXSArIHRoaXMuc2Nyb2xsTGVmdCwgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkID8gfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3AgOiB+fmFyZ3VtZW50c1sxXSArIHRoaXMuc2Nyb2xsVG9wKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbCh7XG4gICAgICAgICAgbGVmdDogfn5hcmd1bWVudHNbMF0ubGVmdCArIHRoaXMuc2Nyb2xsTGVmdCxcbiAgICAgICAgICB0b3A6IH5+YXJndW1lbnRzWzBdLnRvcCArIHRoaXMuc2Nyb2xsVG9wLFxuICAgICAgICAgIGJlaGF2aW9yOiBhcmd1bWVudHNbMF0uYmVoYXZpb3JcbiAgICAgICAgfSk7XG4gICAgICB9OyAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuXG5cbiAgICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgICBvcmlnaW5hbC5zY3JvbGxJbnRvVmlldy5jYWxsKHRoaXMsIGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1swXSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcblxuXG4gICAgICAgIHZhciBzY3JvbGxhYmxlUGFyZW50ID0gZmluZFNjcm9sbGFibGVQYXJlbnQodGhpcyk7XG4gICAgICAgIHZhciBwYXJlbnRSZWN0cyA9IHNjcm9sbGFibGVQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBjbGllbnRSZWN0cyA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgaWYgKHNjcm9sbGFibGVQYXJlbnQgIT09IGQuYm9keSkge1xuICAgICAgICAgIC8vIHJldmVhbCBlbGVtZW50IGluc2lkZSBwYXJlbnRcbiAgICAgICAgICBzbW9vdGhTY3JvbGwuY2FsbCh0aGlzLCBzY3JvbGxhYmxlUGFyZW50LCBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbExlZnQgKyBjbGllbnRSZWN0cy5sZWZ0IC0gcGFyZW50UmVjdHMubGVmdCwgc2Nyb2xsYWJsZVBhcmVudC5zY3JvbGxUb3AgKyBjbGllbnRSZWN0cy50b3AgLSBwYXJlbnRSZWN0cy50b3ApOyAvLyByZXZlYWwgcGFyZW50IGluIHZpZXdwb3J0IHVubGVzcyBpcyBmaXhlZFxuXG4gICAgICAgICAgaWYgKHcuZ2V0Q29tcHV0ZWRTdHlsZShzY3JvbGxhYmxlUGFyZW50KS5wb3NpdGlvbiAhPT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgdy5zY3JvbGxCeSh7XG4gICAgICAgICAgICAgIGxlZnQ6IHBhcmVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgICAgIHRvcDogcGFyZW50UmVjdHMudG9wLFxuICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbiB2aWV3cG9ydFxuICAgICAgICAgIHcuc2Nyb2xsQnkoe1xuICAgICAgICAgICAgbGVmdDogY2xpZW50UmVjdHMubGVmdCxcbiAgICAgICAgICAgIHRvcDogY2xpZW50UmVjdHMudG9wLFxuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAge1xuICAgICAgLy8gY29tbW9uanNcbiAgICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBwb2x5ZmlsbDogcG9seWZpbGxcbiAgICAgIH07XG4gICAgfVxuICB9KSgpO1xufSk7XG5zbW9vdGhzY3JvbGwucG9seWZpbGw7XG5cbnNtb290aHNjcm9sbC5wb2x5ZmlsbCgpO1xuLyoqXG4gKiBBIGNsYXNzIHJlcHJlc2VudGluZyBzdGVwcyB0byBiZSBhZGRlZCB0byBhIHRvdXIuXG4gKiBAZXh0ZW5kcyB7RXZlbnRlZH1cbiAqL1xuXG5jbGFzcyBTdGVwIGV4dGVuZHMgRXZlbnRlZCB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzdGVwXG4gICAqIEBwYXJhbSB7VG91cn0gdG91ciBUaGUgdG91ciBmb3IgdGhlIHN0ZXBcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSBzdGVwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5hcnJvdyBXaGV0aGVyIHRvIGRpc3BsYXkgdGhlIGFycm93IGZvciB0aGUgdG9vbHRpcCBvciBub3QuIERlZmF1bHRzIHRvIGB0cnVlYC5cbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuYXR0YWNoVG8gVGhlIGVsZW1lbnQgdGhlIHN0ZXAgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIG9uIHRoZSBwYWdlLlxuICAgKiBBbiBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIGBlbGVtZW50YCBhbmQgYG9uYC5cbiAgICpcbiAgICogYGBganNcbiAgICogY29uc3Qgc3RlcCA9IG5ldyBTdGVwKHRvdXIsIHtcbiAgICogICBhdHRhY2hUbzogeyBlbGVtZW50OiAnLnNvbWUgLnNlbGVjdG9yLXBhdGgnLCBvbjogJ2xlZnQnIH0sXG4gICAqICAgLi4ubW9yZU9wdGlvbnNcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBJZiB5b3UgZG9u4oCZdCBzcGVjaWZ5IGFuIGF0dGFjaFRvIHRoZSBlbGVtZW50IHdpbGwgYXBwZWFyIGluIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbi5cbiAgICogSWYgeW91IG9taXQgdGhlIGBvbmAgcG9ydGlvbiBvZiBgYXR0YWNoVG9gLCB0aGUgZWxlbWVudCB3aWxsIHN0aWxsIGJlIGhpZ2hsaWdodGVkLCBidXQgdGhlIHRvb2x0aXAgd2lsbCBhcHBlYXJcbiAgICogaW4gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuLCB3aXRob3V0IGFuIGFycm93IHBvaW50aW5nIHRvIHRoZSB0YXJnZXQuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBvcHRpb25zLmF0dGFjaFRvLmVsZW1lbnQgQW4gZWxlbWVudCBzZWxlY3RvciBzdHJpbmcgb3IgYSBET00gZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYXR0YWNoVG8ub24gVGhlIG9wdGlvbmFsIGRpcmVjdGlvbiB0byBwbGFjZSB0aGUgUG9wcGVyIHRvb2x0aXAgcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQuXG4gICAqICAgLSBQb3NzaWJsZSBzdHJpbmcgdmFsdWVzOiAnYXV0bycsICdhdXRvLXN0YXJ0JywgJ2F1dG8tZW5kJywgJ3RvcCcsICd0b3Atc3RhcnQnLCAndG9wLWVuZCcsICdib3R0b20nLCAnYm90dG9tLXN0YXJ0JywgJ2JvdHRvbS1lbmQnLCAncmlnaHQnLCAncmlnaHQtc3RhcnQnLCAncmlnaHQtZW5kJywgJ2xlZnQnLCAnbGVmdC1zdGFydCcsICdsZWZ0LWVuZCdcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuYWR2YW5jZU9uIEFuIGFjdGlvbiBvbiB0aGUgcGFnZSB3aGljaCBzaG91bGQgYWR2YW5jZSBzaGVwaGVyZCB0byB0aGUgbmV4dCBzdGVwLlxuICAgKiBJdCBzaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggYSBzdHJpbmcgYHNlbGVjdG9yYCBhbmQgYW4gYGV2ZW50YCBuYW1lXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IHN0ZXAgPSBuZXcgU3RlcCh0b3VyLCB7XG4gICAqICAgYWR2YW5jZU9uOiB7IHNlbGVjdG9yOiAnLnNvbWUgLnNlbGVjdG9yLXBhdGgnLCBldmVudDogJ2NsaWNrJyB9LFxuICAgKiAgIC4uLm1vcmVPcHRpb25zXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICogYGV2ZW50YCBkb2VzbuKAmXQgaGF2ZSB0byBiZSBhbiBldmVudCBpbnNpZGUgdGhlIHRvdXIsIGl0IGNhbiBiZSBhbnkgZXZlbnQgZmlyZWQgb24gYW55IGVsZW1lbnQgb24gdGhlIHBhZ2UuXG4gICAqIFlvdSBjYW4gYWxzbyBhbHdheXMgbWFudWFsbHkgYWR2YW5jZSB0aGUgVG91ciBieSBjYWxsaW5nIGBteVRvdXIubmV4dCgpYC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gb3B0aW9ucy5iZWZvcmVTaG93UHJvbWlzZSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHByb21pc2UuXG4gICAqIFdoZW4gdGhlIHByb21pc2UgcmVzb2x2ZXMsIHRoZSByZXN0IG9mIHRoZSBgc2hvd2AgY29kZSBmb3IgdGhlIHN0ZXAgd2lsbCBleGVjdXRlLlxuICAgKiBAcGFyYW0ge09iamVjdFtdfSBvcHRpb25zLmJ1dHRvbnMgQW4gYXJyYXkgb2YgYnV0dG9ucyB0byBhZGQgdG8gdGhlIHN0ZXAuIFRoZXNlIHdpbGwgYmUgcmVuZGVyZWQgaW4gYVxuICAgKiBmb290ZXIgYmVsb3cgdGhlIG1haW4gYm9keSB0ZXh0LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvcHRpb25zLmJ1dHRvbnMuYnV0dG9uLmFjdGlvbiBBIGZ1bmN0aW9uIGV4ZWN1dGVkIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkIG9uLlxuICAgKiBJdCBpcyBhdXRvbWF0aWNhbGx5IGJvdW5kIHRvIHRoZSBgdG91cmAgdGhlIHN0ZXAgaXMgYXNzb2NpYXRlZCB3aXRoLCBzbyB0aGluZ3MgbGlrZSBgdGhpcy5uZXh0YCB3aWxsXG4gICAqIHdvcmsgaW5zaWRlIHRoZSBhY3Rpb24uXG4gICAqIFlvdSBjYW4gdXNlIGFjdGlvbiB0byBza2lwIHN0ZXBzIG9yIG5hdmlnYXRlIHRvIHNwZWNpZmljIHN0ZXBzLCB3aXRoIHNvbWV0aGluZyBsaWtlOlxuICAgKiBgYGBqc1xuICAgKiBhY3Rpb24oKSB7XG4gICAqICAgcmV0dXJuIHRoaXMuc2hvdygnc29tZV9zdGVwX25hbWUnKTtcbiAgICogfVxuICAgKiBgYGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYnV0dG9ucy5idXR0b24uY2xhc3NlcyBFeHRyYSBjbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBgPGE+YFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuYnV0dG9ucy5idXR0b24uZGlzYWJsZWQgU2hvdWxkIHRoZSBidXR0b24gYmUgZGlzYWJsZWQ/XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmJ1dHRvbnMuYnV0dG9uLmxhYmVsIFRoZSBhcmlhLWxhYmVsIHRleHQgb2YgdGhlIGJ1dHRvblxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuYnV0dG9ucy5idXR0b24uc2Vjb25kYXJ5IElmIHRydWUsIGEgc2hlcGhlcmQtYnV0dG9uLXNlY29uZGFyeSBjbGFzcyBpcyBhcHBsaWVkIHRvIHRoZSBidXR0b25cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYnV0dG9ucy5idXR0b24udGV4dCBUaGUgSFRNTCB0ZXh0IG9mIHRoZSBidXR0b25cbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLmNhbkNsaWNrVGFyZ2V0IEEgYm9vbGVhbiwgdGhhdCB3aGVuIHNldCB0byBmYWxzZSwgd2lsbCBzZXQgYHBvaW50ZXItZXZlbnRzOiBub25lYCBvbiB0aGUgdGFyZ2V0XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLmNhbmNlbEljb24gT3B0aW9ucyBmb3IgdGhlIGNhbmNlbCBpY29uXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5jYW5jZWxJY29uLmVuYWJsZWQgU2hvdWxkIGEgY2FuY2VsIOKAnOKcleKAnSBiZSBzaG93biBpbiB0aGUgaGVhZGVyIG9mIHRoZSBzdGVwP1xuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jYW5jZWxJY29uLmxhYmVsIFRoZSBsYWJlbCB0byBhZGQgZm9yIGBhcmlhLWxhYmVsYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jbGFzc2VzIEEgc3RyaW5nIG9mIGV4dHJhIGNsYXNzZXMgdG8gYWRkIHRvIHRoZSBzdGVwJ3MgY29udGVudCBlbGVtZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5oaWdobGlnaHRDbGFzcyBBbiBleHRyYSBjbGFzcyB0byBhcHBseSB0byB0aGUgYGF0dGFjaFRvYCBlbGVtZW50IHdoZW4gaXQgaXNcbiAgICogaGlnaGxpZ2h0ZWQgKHRoYXQgaXMsIHdoZW4gaXRzIHN0ZXAgaXMgYWN0aXZlKS4gWW91IGNhbiB0aGVuIHRhcmdldCB0aGF0IHNlbGVjdG9yIGluIHlvdXIgQ1NTLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5pZCBUaGUgc3RyaW5nIHRvIHVzZSBhcyB0aGUgYGlkYCBmb3IgdGhlIHN0ZXAuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLm1vZGFsT3ZlcmxheU9wZW5pbmdQYWRkaW5nIEFuIGFtb3VudCBvZiBwYWRkaW5nIHRvIGFkZCBhcm91bmQgdGhlIG1vZGFsIG92ZXJsYXkgb3BlbmluZ1xuICAgKiBAcGFyYW0ge251bWJlcn0gb3B0aW9ucy5tb2RhbE92ZXJsYXlPcGVuaW5nUmFkaXVzIEFuIGFtb3VudCBvZiBib3JkZXIgcmFkaXVzIHRvIGFkZCBhcm91bmQgdGhlIG1vZGFsIG92ZXJsYXkgb3BlbmluZ1xuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5wb3BwZXJPcHRpb25zIEV4dHJhIG9wdGlvbnMgdG8gcGFzcyB0byBQb3BwZXJcbiAgICogQHBhcmFtIHtib29sZWFufE9iamVjdH0gb3B0aW9ucy5zY3JvbGxUbyBTaG91bGQgdGhlIGVsZW1lbnQgYmUgc2Nyb2xsZWQgdG8gd2hlbiB0aGlzIHN0ZXAgaXMgc2hvd24/IElmIHRydWUsIHVzZXMgdGhlIGRlZmF1bHQgYHNjcm9sbEludG9WaWV3YCxcbiAgICogaWYgYW4gb2JqZWN0LCBwYXNzZXMgdGhhdCBvYmplY3QgYXMgdGhlIHBhcmFtcyB0byBgc2Nyb2xsSW50b1ZpZXdgIGkuZS4gYHtiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJ31gXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuc2Nyb2xsVG9IYW5kbGVyIEEgZnVuY3Rpb24gdGhhdCBsZXRzIHlvdSBvdmVycmlkZSB0aGUgZGVmYXVsdCBzY3JvbGxUbyBiZWhhdmlvciBhbmRcbiAgICogZGVmaW5lIGEgY3VzdG9tIGFjdGlvbiB0byBkbyB0aGUgc2Nyb2xsaW5nLCBhbmQgcG9zc2libHkgb3RoZXIgbG9naWMuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9wdGlvbnMuc2hvd09uIEEgZnVuY3Rpb24gdGhhdCwgd2hlbiBpdCByZXR1cm5zIGB0cnVlYCwgd2lsbCBzaG93IHRoZSBzdGVwLlxuICAgKiBJZiBpdCByZXR1cm5zIGZhbHNlLCB0aGUgc3RlcCB3aWxsIGJlIHNraXBwZWQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnRleHQgVGhlIHRleHQgaW4gdGhlIGJvZHkgb2YgdGhlIHN0ZXAuIEl0IGNhbiBiZSBvbmUgb2YgdGhyZWUgdHlwZXM6XG4gICAqIGBgYFxuICAgKiAtIEhUTUwgc3RyaW5nXG4gICAqIC0gYEhUTUxFbGVtZW50YCBvYmplY3RcbiAgICogLSBgRnVuY3Rpb25gIHRvIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIHN0ZXAgaXMgYnVpbHQuIEl0IG11c3QgcmV0dXJuIG9uZSB0aGUgdHdvIG9wdGlvbnMgYWJvdmUuXG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy50aXRsZSBUaGUgc3RlcCdzIHRpdGxlLiBJdCBiZWNvbWVzIGFuIGBoM2AgYXQgdGhlIHRvcCBvZiB0aGUgc3RlcC4gSXQgY2FuIGJlIG9uZSBvZiB0d28gdHlwZXM6XG4gICAqIGBgYFxuICAgKiAtIEhUTUwgc3RyaW5nXG4gICAqIC0gYEZ1bmN0aW9uYCB0byBiZSBleGVjdXRlZCB3aGVuIHRoZSBzdGVwIGlzIGJ1aWx0LiBJdCBtdXN0IHJldHVybiBIVE1MIHN0cmluZy5cbiAgICogYGBgXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zLndoZW4gWW91IGNhbiBkZWZpbmUgYHNob3dgLCBgaGlkZWAsIGV0YyBldmVudHMgaW5zaWRlIGB3aGVuYC4gRm9yIGV4YW1wbGU6XG4gICAqIGBgYGpzXG4gICAqIHdoZW46IHtcbiAgICogICBzaG93OiBmdW5jdGlvbigpIHtcbiAgICogICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICogICB9XG4gICAqIH1cbiAgICogYGBgXG4gICAqIEByZXR1cm4ge1N0ZXB9IFRoZSBuZXdseSBjcmVhdGVkIFN0ZXAgaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKHRvdXIsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHRvdXIsIG9wdGlvbnMpO1xuICAgIHRoaXMudG91ciA9IHRvdXI7XG4gICAgdGhpcy5jbGFzc1ByZWZpeCA9IHRoaXMudG91ci5vcHRpb25zID8gbm9ybWFsaXplUHJlZml4KHRoaXMudG91ci5vcHRpb25zLmNsYXNzUHJlZml4KSA6ICcnO1xuICAgIHRoaXMuc3R5bGVzID0gdG91ci5zdHlsZXM7XG4gICAgYXV0b0JpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9zZXRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIENhbmNlbCB0aGUgdG91clxuICAgKiBUcmlnZ2VycyB0aGUgYGNhbmNlbGAgZXZlbnRcbiAgICovXG5cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy50b3VyLmNhbmNlbCgpO1xuICAgIHRoaXMudHJpZ2dlcignY2FuY2VsJyk7XG4gIH1cbiAgLyoqXG4gICAqIENvbXBsZXRlIHRoZSB0b3VyXG4gICAqIFRyaWdnZXJzIHRoZSBgY29tcGxldGVgIGV2ZW50XG4gICAqL1xuXG5cbiAgY29tcGxldGUoKSB7XG4gICAgdGhpcy50b3VyLmNvbXBsZXRlKCk7XG4gICAgdGhpcy50cmlnZ2VyKCdjb21wbGV0ZScpO1xuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHN0ZXAsIGRlbGV0ZSB0aGUgc3RlcCdzIGVsZW1lbnQsIGFuZCBkZXN0cm95IHRoZSBQb3BwZXIgaW5zdGFuY2UgZm9yIHRoZSBzdGVwLlxuICAgKiBUcmlnZ2VycyBgZGVzdHJveWAgZXZlbnRcbiAgICovXG5cblxuICBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcbiAgICAgIHRoaXMudG9vbHRpcC5kZXN0cm95KCk7XG4gICAgICB0aGlzLnRvb2x0aXAgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChpc0hUTUxFbGVtZW50JDEodGhpcy5lbCkgJiYgdGhpcy5lbC5wYXJlbnROb2RlKSB7XG4gICAgICB0aGlzLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XG4gICAgICB0aGlzLmVsID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGVTdGVwVGFyZ2V0T25IaWRlKCk7XG5cbiAgICB0aGlzLnRyaWdnZXIoJ2Rlc3Ryb3knKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdG91ciBmb3IgdGhlIHN0ZXBcbiAgICogQHJldHVybiB7VG91cn0gVGhlIHRvdXIgaW5zdGFuY2VcbiAgICovXG5cblxuICBnZXRUb3VyKCkge1xuICAgIHJldHVybiB0aGlzLnRvdXI7XG4gIH1cbiAgLyoqXG4gICAqIEhpZGUgdGhlIHN0ZXBcbiAgICovXG5cblxuICBoaWRlKCkge1xuICAgIHRoaXMudG91ci5tb2RhbC5oaWRlKCk7XG4gICAgdGhpcy50cmlnZ2VyKCdiZWZvcmUtaGlkZScpO1xuXG4gICAgaWYgKHRoaXMuZWwpIHtcbiAgICAgIHRoaXMuZWwuaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGVTdGVwVGFyZ2V0T25IaWRlKCk7XG5cbiAgICB0aGlzLnRyaWdnZXIoJ2hpZGUnKTtcbiAgfVxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBzdGVwIHNob3VsZCBiZSBjZW50ZXJlZCBvciBub3RcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3RlcCBpcyBjZW50ZXJlZFxuICAgKi9cblxuXG4gIGlzQ2VudGVyZWQoKSB7XG4gICAgY29uc3QgYXR0YWNoVG9PcHRpb25zID0gcGFyc2VBdHRhY2hUbyh0aGlzKTtcbiAgICByZXR1cm4gIWF0dGFjaFRvT3B0aW9ucy5lbGVtZW50IHx8ICFhdHRhY2hUb09wdGlvbnMub247XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBzdGVwIGlzIG9wZW4gYW5kIHZpc2libGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3RlcCBpcyBvcGVuIGFuZCB2aXNpYmxlXG4gICAqL1xuXG5cbiAgaXNPcGVuKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMuZWwgJiYgIXRoaXMuZWwuaGlkZGVuKTtcbiAgfVxuICAvKipcbiAgICogV3JhcHMgYF9zaG93YCBhbmQgZW5zdXJlcyBgYmVmb3JlU2hvd1Byb21pc2VgIHJlc29sdmVzIGJlZm9yZSBjYWxsaW5nIHNob3dcbiAgICogQHJldHVybiB7KnxQcm9taXNlfVxuICAgKi9cblxuXG4gIHNob3coKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odGhpcy5vcHRpb25zLmJlZm9yZVNob3dQcm9taXNlKSkge1xuICAgICAgY29uc3QgYmVmb3JlU2hvd1Byb21pc2UgPSB0aGlzLm9wdGlvbnMuYmVmb3JlU2hvd1Byb21pc2UoKTtcblxuICAgICAgaWYgKCFpc1VuZGVmaW5lZChiZWZvcmVTaG93UHJvbWlzZSkpIHtcbiAgICAgICAgcmV0dXJuIGJlZm9yZVNob3dQcm9taXNlLnRoZW4oKCkgPT4gdGhpcy5fc2hvdygpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9zaG93KCk7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIG9wdGlvbnMgb2YgdGhlIHN0ZXAuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIGZvciB0aGUgc3RlcFxuICAgKi9cblxuXG4gIHVwZGF0ZVN0ZXBPcHRpb25zKG9wdGlvbnMpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5zaGVwaGVyZEVsZW1lbnRDb21wb25lbnQpIHtcbiAgICAgIHRoaXMuc2hlcGhlcmRFbGVtZW50Q29tcG9uZW50LiRzZXQoe1xuICAgICAgICBzdGVwOiB0aGlzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGVsZW1lbnQgZm9yIHRoZSBzdGVwXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fG51bGx8dW5kZWZpbmVkfSBUaGUgZWxlbWVudCBpbnN0YW5jZS4gdW5kZWZpbmVkIGlmIGl0IGhhcyBuZXZlciBiZWVuIHNob3duLCBudWxsIGlmIGl0IGhhcyBiZWVuIGRlc3Ryb3llZFxuICAgKi9cblxuXG4gIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWw7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRhcmdldCBmb3IgdGhlIHN0ZXBcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR8bnVsbHx1bmRlZmluZWR9IFRoZSBlbGVtZW50IGluc3RhbmNlLiB1bmRlZmluZWQgaWYgaXQgaGFzIG5ldmVyIGJlZW4gc2hvd24sIG51bGwgaWYgcXVlcnkgc3RyaW5nIGhhcyBub3QgYmVlbiBmb3VuZFxuICAgKi9cblxuXG4gIGdldFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQ7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgU2hlcGhlcmQgZWxlbWVudCBmb3Igc3RlcCBiYXNlZCBvbiBvcHRpb25zXG4gICAqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR9IFRoZSBET00gZWxlbWVudCBmb3IgdGhlIHN0ZXAgdG9vbHRpcFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuXG4gIF9jcmVhdGVUb29sdGlwQ29udGVudCgpIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklkID0gYCR7dGhpcy5pZH0tZGVzY3JpcHRpb25gO1xuICAgIGNvbnN0IGxhYmVsSWQgPSBgJHt0aGlzLmlkfS1sYWJlbGA7XG4gICAgdGhpcy5zaGVwaGVyZEVsZW1lbnRDb21wb25lbnQgPSBuZXcgU2hlcGhlcmRfZWxlbWVudCh7XG4gICAgICB0YXJnZXQ6IHRoaXMudG91ci5vcHRpb25zLnN0ZXBzQ29udGFpbmVyIHx8IGRvY3VtZW50LmJvZHksXG4gICAgICBwcm9wczoge1xuICAgICAgICBjbGFzc1ByZWZpeDogdGhpcy5jbGFzc1ByZWZpeCxcbiAgICAgICAgZGVzY3JpcHRpb25JZCxcbiAgICAgICAgbGFiZWxJZCxcbiAgICAgICAgc3RlcDogdGhpcyxcbiAgICAgICAgc3R5bGVzOiB0aGlzLnN0eWxlc1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnNoZXBoZXJkRWxlbWVudENvbXBvbmVudC5nZXRFbGVtZW50KCk7XG4gIH1cbiAgLyoqXG4gICAqIElmIGEgY3VzdG9tIHNjcm9sbFRvSGFuZGxlciBpcyBkZWZpbmVkLCBjYWxsIHRoYXQsIG90aGVyd2lzZSBkbyB0aGUgZ2VuZXJpY1xuICAgKiBzY3JvbGxJbnRvVmlldyBjYWxsLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW58T2JqZWN0fSBzY3JvbGxUb09wdGlvbnMgSWYgdHJ1ZSwgdXNlcyB0aGUgZGVmYXVsdCBgc2Nyb2xsSW50b1ZpZXdgLFxuICAgKiBpZiBhbiBvYmplY3QsIHBhc3NlcyB0aGF0IG9iamVjdCBhcyB0aGUgcGFyYW1zIHRvIGBzY3JvbGxJbnRvVmlld2AgaS5lLiBgeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9YFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuXG4gIF9zY3JvbGxUbyhzY3JvbGxUb09wdGlvbnMpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbGVtZW50XG4gICAgfSA9IHBhcnNlQXR0YWNoVG8odGhpcyk7XG5cbiAgICBpZiAoaXNGdW5jdGlvbih0aGlzLm9wdGlvbnMuc2Nyb2xsVG9IYW5kbGVyKSkge1xuICAgICAgdGhpcy5vcHRpb25zLnNjcm9sbFRvSGFuZGxlcihlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzRWxlbWVudCQxKGVsZW1lbnQpICYmIHR5cGVvZiBlbGVtZW50LnNjcm9sbEludG9WaWV3ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KHNjcm9sbFRvT3B0aW9ucyk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBfZ2V0Q2xhc3NPcHRpb25zIGdldHMgYWxsIHBvc3NpYmxlIGNsYXNzZXMgZm9yIHRoZSBzdGVwXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGVwT3B0aW9ucyBUaGUgc3RlcCBzcGVjaWZpYyBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtTdHJpbmd9IHVuaXF1ZSBzdHJpbmcgZnJvbSBhcnJheSBvZiBjbGFzc2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgX2dldENsYXNzT3B0aW9ucyhzdGVwT3B0aW9ucykge1xuICAgIGNvbnN0IGRlZmF1bHRTdGVwT3B0aW9ucyA9IHRoaXMudG91ciAmJiB0aGlzLnRvdXIub3B0aW9ucyAmJiB0aGlzLnRvdXIub3B0aW9ucy5kZWZhdWx0U3RlcE9wdGlvbnM7XG4gICAgY29uc3Qgc3RlcENsYXNzZXMgPSBzdGVwT3B0aW9ucy5jbGFzc2VzID8gc3RlcE9wdGlvbnMuY2xhc3NlcyA6ICcnO1xuICAgIGNvbnN0IGRlZmF1bHRTdGVwT3B0aW9uc0NsYXNzZXMgPSBkZWZhdWx0U3RlcE9wdGlvbnMgJiYgZGVmYXVsdFN0ZXBPcHRpb25zLmNsYXNzZXMgPyBkZWZhdWx0U3RlcE9wdGlvbnMuY2xhc3NlcyA6ICcnO1xuICAgIGNvbnN0IGFsbENsYXNzZXMgPSBbLi4uc3RlcENsYXNzZXMuc3BsaXQoJyAnKSwgLi4uZGVmYXVsdFN0ZXBPcHRpb25zQ2xhc3Nlcy5zcGxpdCgnICcpXTtcbiAgICBjb25zdCB1bmlxQ2xhc3NlcyA9IG5ldyBTZXQoYWxsQ2xhc3Nlcyk7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odW5pcUNsYXNzZXMpLmpvaW4oJyAnKS50cmltKCk7XG4gIH1cbiAgLyoqXG4gICAqIFNldHMgdGhlIG9wdGlvbnMgZm9yIHRoZSBzdGVwLCBtYXBzIGB3aGVuYCB0byBldmVudHMsIHNldHMgdXAgYnV0dG9uc1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBmb3IgdGhlIHN0ZXBcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfc2V0T3B0aW9ucyhvcHRpb25zID0ge30pIHtcbiAgICBsZXQgdG91ck9wdGlvbnMgPSB0aGlzLnRvdXIgJiYgdGhpcy50b3VyLm9wdGlvbnMgJiYgdGhpcy50b3VyLm9wdGlvbnMuZGVmYXVsdFN0ZXBPcHRpb25zO1xuICAgIHRvdXJPcHRpb25zID0gY2pzKHt9LCB0b3VyT3B0aW9ucyB8fCB7fSk7XG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBhcnJvdzogdHJ1ZVxuICAgIH0sIHRvdXJPcHRpb25zLCBvcHRpb25zKTtcbiAgICBjb25zdCB7XG4gICAgICB3aGVuXG4gICAgfSA9IHRoaXMub3B0aW9ucztcbiAgICB0aGlzLm9wdGlvbnMuY2xhc3NlcyA9IHRoaXMuX2dldENsYXNzT3B0aW9ucyhvcHRpb25zKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB0aGlzLmlkID0gdGhpcy5vcHRpb25zLmlkIHx8IGBzdGVwLSR7dXVpZCgpfWA7XG5cbiAgICBpZiAod2hlbikge1xuICAgICAgT2JqZWN0LmtleXMod2hlbikuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgIHRoaXMub24oZXZlbnQsIHdoZW5bZXZlbnRdLCB0aGlzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBlbGVtZW50IGFuZCBzZXQgdXAgdGhlIFBvcHBlciBpbnN0YW5jZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuXG4gIF9zZXR1cEVsZW1lbnRzKCkge1xuICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5lbCkpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHRoaXMuZWwgPSB0aGlzLl9jcmVhdGVUb29sdGlwQ29udGVudCgpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5hZHZhbmNlT24pIHtcbiAgICAgIGJpbmRBZHZhbmNlKHRoaXMpO1xuICAgIH1cblxuICAgIHNldHVwVG9vbHRpcCh0aGlzKTtcbiAgfVxuICAvKipcbiAgICogVHJpZ2dlcnMgYGJlZm9yZS1zaG93YCwgZ2VuZXJhdGVzIHRoZSB0b29sdGlwIERPTSBjb250ZW50LFxuICAgKiBzZXRzIHVwIGEgUG9wcGVyIGluc3RhbmNlIGZvciB0aGUgdG9vbHRpcCwgdGhlbiB0cmlnZ2VycyBgc2hvd2AuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG5cbiAgX3Nob3coKSB7XG4gICAgdGhpcy50cmlnZ2VyKCdiZWZvcmUtc2hvdycpO1xuXG4gICAgdGhpcy5fc2V0dXBFbGVtZW50cygpO1xuXG4gICAgaWYgKCF0aGlzLnRvdXIubW9kYWwpIHtcbiAgICAgIHRoaXMudG91ci5fc2V0dXBNb2RhbCgpO1xuICAgIH1cblxuICAgIHRoaXMudG91ci5tb2RhbC5zZXR1cEZvclN0ZXAodGhpcyk7XG5cbiAgICB0aGlzLl9zdHlsZVRhcmdldEVsZW1lbnRGb3JTdGVwKHRoaXMpO1xuXG4gICAgdGhpcy5lbC5oaWRkZW4gPSBmYWxzZTsgLy8gc3RhcnQgc2Nyb2xsaW5nIHRvIHRhcmdldCBiZWZvcmUgc2hvd2luZyB0aGUgc3RlcFxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5zY3JvbGxUbykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuX3Njcm9sbFRvKHRoaXMub3B0aW9ucy5zY3JvbGxUbyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmVsLmhpZGRlbiA9IGZhbHNlO1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnNoZXBoZXJkRWxlbWVudENvbXBvbmVudC5nZXRFbGVtZW50KCk7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy50YXJnZXQgfHwgZG9jdW1lbnQuYm9keTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmNsYXNzUHJlZml4fXNoZXBoZXJkLWVuYWJsZWRgKTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZChgJHt0aGlzLmNsYXNzUHJlZml4fXNoZXBoZXJkLXRhcmdldGApO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2hlcGhlcmQtZW5hYmxlZCcpO1xuICAgIHRoaXMudHJpZ2dlcignc2hvdycpO1xuICB9XG4gIC8qKlxuICAgKiBNb2R1bGF0ZXMgdGhlIHN0eWxlcyBvZiB0aGUgcGFzc2VkIHN0ZXAncyB0YXJnZXQgZWxlbWVudCwgYmFzZWQgb24gdGhlIHN0ZXAncyBvcHRpb25zIGFuZFxuICAgKiB0aGUgdG91cidzIGBtb2RhbGAgb3B0aW9uLCB0byB2aXN1YWxseSBlbXBoYXNpemUgdGhlIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHN0ZXAgVGhlIHN0ZXAgb2JqZWN0IHRoYXQgYXR0YWNoZXMgdG8gdGhlIGVsZW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfc3R5bGVUYXJnZXRFbGVtZW50Rm9yU3RlcChzdGVwKSB7XG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IHN0ZXAudGFyZ2V0O1xuXG4gICAgaWYgKCF0YXJnZXRFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN0ZXAub3B0aW9ucy5oaWdobGlnaHRDbGFzcykge1xuICAgICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHN0ZXAub3B0aW9ucy5oaWdobGlnaHRDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXAub3B0aW9ucy5jYW5DbGlja1RhcmdldCA9PT0gZmFsc2UpIHtcbiAgICAgIHRhcmdldEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hlcGhlcmQtdGFyZ2V0LWNsaWNrLWRpc2FibGVkJyk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBXaGVuIGEgc3RlcCBpcyBoaWRkZW4sIHJlbW92ZSB0aGUgaGlnaGxpZ2h0Q2xhc3MgYW5kICdzaGVwaGVyZC1lbmFibGVkJ1xuICAgKiBhbmQgJ3NoZXBoZXJkLXRhcmdldCcgY2xhc3Nlc1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuXG4gIF91cGRhdGVTdGVwVGFyZ2V0T25IaWRlKCkge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMudGFyZ2V0IHx8IGRvY3VtZW50LmJvZHk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmhpZ2hsaWdodENsYXNzKSB7XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0Q2xhc3MpO1xuICAgIH1cblxuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzaGVwaGVyZC10YXJnZXQtY2xpY2stZGlzYWJsZWQnLCBgJHt0aGlzLmNsYXNzUHJlZml4fXNoZXBoZXJkLWVuYWJsZWRgLCBgJHt0aGlzLmNsYXNzUHJlZml4fXNoZXBoZXJkLXRhcmdldGApO1xuICB9XG5cbn1cblxuLyoqXG4gKiBDbGVhbnVwIHRoZSBzdGVwcyBhbmQgc2V0IHBvaW50ZXJFdmVudHMgYmFjayB0byAnYXV0bydcbiAqIEBwYXJhbSB0b3VyIFRoZSB0b3VyIG9iamVjdFxuICovXG5mdW5jdGlvbiBjbGVhbnVwU3RlcHModG91cikge1xuICBpZiAodG91cikge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0ZXBzXG4gICAgfSA9IHRvdXI7XG4gICAgc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgIGlmIChzdGVwLm9wdGlvbnMgJiYgc3RlcC5vcHRpb25zLmNhbkNsaWNrVGFyZ2V0ID09PSBmYWxzZSAmJiBzdGVwLm9wdGlvbnMuYXR0YWNoVG8pIHtcbiAgICAgICAgaWYgKHN0ZXAudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICBzdGVwLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzaGVwaGVyZC10YXJnZXQtY2xpY2stZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIHRoZSBzdmcgcGF0aCBkYXRhIGZvciBhIHJvdW5kZWQgcmVjdGFuZ2xlIG92ZXJsYXlcbiAqIEBwYXJhbSB7T2JqZWN0fSBkaW1lbnNpb24gLSBEaW1lbnNpb25zIG9mIHJlY3RhbmdsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCAtIFdpZHRoLlxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCAtIEhlaWdodC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbeD0wXSAtIE9mZnNldCBmcm9tIHRvcCBsZWZ0IGNvcm5lciBpbiB4IGF4aXMuIGRlZmF1bHQgMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbeT0wXSAtIE9mZnNldCBmcm9tIHRvcCBsZWZ0IGNvcm5lciBpbiB5IGF4aXMuIGRlZmF1bHQgMC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbcj0wXSAtIENvcm5lciBSYWRpdXMuIEtlZXAgdGhpcyBzbWFsbGVyIHRoYW4gIGhhbGYgb2Ygd2lkdGggb3IgaGVpZ2h0LlxuICogQHJldHVybnMge3N0cmluZ30gLSBSb3VuZGVkIHJlY3RhbmdsZSBvdmVybGF5IHBhdGggZGF0YS5cbiAqL1xuZnVuY3Rpb24gbWFrZU92ZXJsYXlQYXRoKHtcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgeCA9IDAsXG4gIHkgPSAwLFxuICByID0gMFxufSkge1xuICBjb25zdCB7XG4gICAgaW5uZXJXaWR0aDogdyxcbiAgICBpbm5lckhlaWdodDogaFxuICB9ID0gd2luZG93O1xuICByZXR1cm4gYE0ke3d9LCR7aH1cXFxuSDBcXFxuVjBcXFxuSCR7d31cXFxuViR7aH1cXFxuWlxcXG5NJHt4ICsgcn0sJHt5fVxcXG5hJHtyfSwke3J9LDAsMCwwLSR7cn0sJHtyfVxcXG5WJHtoZWlnaHQgKyB5IC0gcn1cXFxuYSR7cn0sJHtyfSwwLDAsMCwke3J9LCR7cn1cXFxuSCR7d2lkdGggKyB4IC0gcn1cXFxuYSR7cn0sJHtyfSwwLDAsMCwke3J9LSR7cn1cXFxuViR7eSArIHJ9XFxcbmEke3J9LCR7cn0sMCwwLDAtJHtyfS0ke3J9XFxcblpgO1xufVxuXG4vKiBzcmMvanMvY29tcG9uZW50cy9zaGVwaGVyZC1tb2RhbC5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My4zNy4wICovXG5cbmZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudChjdHgpIHtcbiAgbGV0IHN2ZztcbiAgbGV0IHBhdGg7XG4gIGxldCBzdmdfY2xhc3NfdmFsdWU7XG4gIGxldCBtb3VudGVkO1xuICBsZXQgZGlzcG9zZTtcbiAgcmV0dXJuIHtcbiAgICBjKCkge1xuICAgICAgc3ZnID0gc3ZnX2VsZW1lbnQoXCJzdmdcIik7XG4gICAgICBwYXRoID0gc3ZnX2VsZW1lbnQoXCJwYXRoXCIpO1xuICAgICAgYXR0cihwYXRoLCBcImRcIixcbiAgICAgIC8qcGF0aERlZmluaXRpb24qL1xuICAgICAgY3R4WzJdKTtcbiAgICAgIGF0dHIoc3ZnLCBcImNsYXNzXCIsIHN2Z19jbGFzc192YWx1ZSA9IGAke1xuICAgICAgLyptb2RhbElzVmlzaWJsZSovXG4gICAgICBjdHhbMV0gPyBcInNoZXBoZXJkLW1vZGFsLWlzLXZpc2libGVcIiA6IFwiXCJ9IHNoZXBoZXJkLW1vZGFsLW92ZXJsYXktY29udGFpbmVyYCk7XG4gICAgfSxcblxuICAgIG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICAgIGluc2VydCh0YXJnZXQsIHN2ZywgYW5jaG9yKTtcbiAgICAgIGFwcGVuZChzdmcsIHBhdGgpO1xuICAgICAgLypzdmdfYmluZGluZyovXG5cbiAgICAgIGN0eFsxMV0oc3ZnKTtcblxuICAgICAgaWYgKCFtb3VudGVkKSB7XG4gICAgICAgIGRpc3Bvc2UgPSBsaXN0ZW4oc3ZnLCBcInRvdWNobW92ZVwiLFxuICAgICAgICAvKl9wcmV2ZW50TW9kYWxPdmVybGF5VG91Y2gqL1xuICAgICAgICBjdHhbM10pO1xuICAgICAgICBtb3VudGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcChjdHgsIFtkaXJ0eV0pIHtcbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKnBhdGhEZWZpbml0aW9uKi9cbiAgICAgIDQpIHtcbiAgICAgICAgYXR0cihwYXRoLCBcImRcIixcbiAgICAgICAgLypwYXRoRGVmaW5pdGlvbiovXG4gICAgICAgIGN0eFsyXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJ0eSAmXG4gICAgICAvKm1vZGFsSXNWaXNpYmxlKi9cbiAgICAgIDIgJiYgc3ZnX2NsYXNzX3ZhbHVlICE9PSAoc3ZnX2NsYXNzX3ZhbHVlID0gYCR7XG4gICAgICAvKm1vZGFsSXNWaXNpYmxlKi9cbiAgICAgIGN0eFsxXSA/IFwic2hlcGhlcmQtbW9kYWwtaXMtdmlzaWJsZVwiIDogXCJcIn0gc2hlcGhlcmQtbW9kYWwtb3ZlcmxheS1jb250YWluZXJgKSkge1xuICAgICAgICBhdHRyKHN2ZywgXCJjbGFzc1wiLCBzdmdfY2xhc3NfdmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBpOiBub29wLFxuICAgIG86IG5vb3AsXG5cbiAgICBkKGRldGFjaGluZykge1xuICAgICAgaWYgKGRldGFjaGluZykgZGV0YWNoKHN2Zyk7XG4gICAgICAvKnN2Z19iaW5kaW5nKi9cblxuICAgICAgY3R4WzExXShudWxsKTtcbiAgICAgIG1vdW50ZWQgPSBmYWxzZTtcbiAgICAgIGRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gX2dldFNjcm9sbFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgaXNIdG1sRWxlbWVudCA9IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudDtcbiAgY29uc3Qgb3ZlcmZsb3dZID0gaXNIdG1sRWxlbWVudCAmJiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5vdmVyZmxvd1k7XG4gIGNvbnN0IGlzU2Nyb2xsYWJsZSA9IG92ZXJmbG93WSAhPT0gXCJoaWRkZW5cIiAmJiBvdmVyZmxvd1kgIT09IFwidmlzaWJsZVwiO1xuXG4gIGlmIChpc1Njcm9sbGFibGUgJiYgZWxlbWVudC5zY3JvbGxIZWlnaHQgPj0gZWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBfZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQucGFyZW50RWxlbWVudCk7XG59XG4vKipcbiAqIEdldCB0aGUgdmlzaWJsZSBoZWlnaHQgb2YgdGhlIHRhcmdldCBlbGVtZW50IHJlbGF0aXZlIHRvIGl0cyBzY3JvbGxQYXJlbnQuXG4gKiBJZiB0aGVyZSBpcyBubyBzY3JvbGwgcGFyZW50LCB0aGUgaGVpZ2h0IG9mIHRoZSBlbGVtZW50IGlzIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIHRhcmdldCBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbc2Nyb2xsUGFyZW50XSBUaGUgc2Nyb2xsYWJsZSBwYXJlbnQgZWxlbWVudFxuICogQHJldHVybnMge3t5OiBudW1iZXIsIGhlaWdodDogbnVtYmVyfX1cbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBfZ2V0VmlzaWJsZUhlaWdodChlbGVtZW50LCBzY3JvbGxQYXJlbnQpIHtcbiAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBsZXQgdG9wID0gZWxlbWVudFJlY3QueSB8fCBlbGVtZW50UmVjdC50b3A7XG4gIGxldCBib3R0b20gPSBlbGVtZW50UmVjdC5ib3R0b20gfHwgdG9wICsgZWxlbWVudFJlY3QuaGVpZ2h0O1xuXG4gIGlmIChzY3JvbGxQYXJlbnQpIHtcbiAgICBjb25zdCBzY3JvbGxSZWN0ID0gc2Nyb2xsUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHNjcm9sbFJlY3QueSB8fCBzY3JvbGxSZWN0LnRvcDtcbiAgICBjb25zdCBzY3JvbGxCb3R0b20gPSBzY3JvbGxSZWN0LmJvdHRvbSB8fCBzY3JvbGxUb3AgKyBzY3JvbGxSZWN0LmhlaWdodDtcbiAgICB0b3AgPSBNYXRoLm1heCh0b3AsIHNjcm9sbFRvcCk7XG4gICAgYm90dG9tID0gTWF0aC5taW4oYm90dG9tLCBzY3JvbGxCb3R0b20pO1xuICB9XG5cbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoYm90dG9tIC0gdG9wLCAwKTsgLy8gRGVmYXVsdCB0byAwIGlmIGhlaWdodCBpcyBuZWdhdGl2ZVxuXG4gIHJldHVybiB7XG4gICAgeTogdG9wLFxuICAgIGhlaWdodFxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnN0YW5jZSgkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICBsZXQge1xuICAgIGVsZW1lbnRcbiAgfSA9ICQkcHJvcHMsXG4gICAgICB7XG4gICAgb3BlbmluZ1Byb3BlcnRpZXNcbiAgfSA9ICQkcHJvcHM7XG4gIHV1aWQoKTtcbiAgbGV0IG1vZGFsSXNWaXNpYmxlID0gZmFsc2U7XG4gIGxldCByYWZJZCA9IHVuZGVmaW5lZDtcbiAgbGV0IHBhdGhEZWZpbml0aW9uO1xuICBjbG9zZU1vZGFsT3BlbmluZygpO1xuXG4gIGNvbnN0IGdldEVsZW1lbnQgPSAoKSA9PiBlbGVtZW50O1xuXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWxPcGVuaW5nKCkge1xuICAgICQkaW52YWxpZGF0ZSg0LCBvcGVuaW5nUHJvcGVydGllcyA9IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICByOiAwXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlKCkge1xuICAgICQkaW52YWxpZGF0ZSgxLCBtb2RhbElzVmlzaWJsZSA9IGZhbHNlKTsgLy8gRW5zdXJlIHdlIGNsZWFudXAgYWxsIGV2ZW50IGxpc3RlbmVycyB3aGVuIHdlIGhpZGUgdGhlIG1vZGFsXG5cbiAgICBfY2xlYW51cFN0ZXBFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gcG9zaXRpb25Nb2RhbChtb2RhbE92ZXJsYXlPcGVuaW5nUGFkZGluZyA9IDAsIG1vZGFsT3ZlcmxheU9wZW5pbmdSYWRpdXMgPSAwLCBzY3JvbGxQYXJlbnQsIHRhcmdldEVsZW1lbnQpIHtcbiAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICB5LFxuICAgICAgICBoZWlnaHRcbiAgICAgIH0gPSBfZ2V0VmlzaWJsZUhlaWdodCh0YXJnZXRFbGVtZW50LCBzY3JvbGxQYXJlbnQpO1xuXG4gICAgICBjb25zdCB7XG4gICAgICAgIHgsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBsZWZ0XG4gICAgICB9ID0gdGFyZ2V0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlzIG5vdCBjb25zaXN0ZW50LiBTb21lIGJyb3dzZXJzIHVzZSB4IGFuZCB5LCB3aGlsZSBvdGhlcnMgdXNlIGxlZnQgYW5kIHRvcFxuXG4gICAgICAkJGludmFsaWRhdGUoNCwgb3BlbmluZ1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIHdpZHRoOiB3aWR0aCArIG1vZGFsT3ZlcmxheU9wZW5pbmdQYWRkaW5nICogMixcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKyBtb2RhbE92ZXJsYXlPcGVuaW5nUGFkZGluZyAqIDIsXG4gICAgICAgIHg6ICh4IHx8IGxlZnQpIC0gbW9kYWxPdmVybGF5T3BlbmluZ1BhZGRpbmcsXG4gICAgICAgIHk6IHkgLSBtb2RhbE92ZXJsYXlPcGVuaW5nUGFkZGluZyxcbiAgICAgICAgcjogbW9kYWxPdmVybGF5T3BlbmluZ1JhZGl1c1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlTW9kYWxPcGVuaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0dXBGb3JTdGVwKHN0ZXApIHtcbiAgICAvLyBFbnN1cmUgd2UgbW92ZSBsaXN0ZW5lcnMgZnJvbSB0aGUgcHJldmlvdXMgc3RlcCwgYmVmb3JlIHdlIHNldHVwIG5ldyBvbmVzXG4gICAgX2NsZWFudXBTdGVwRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIGlmIChzdGVwLnRvdXIub3B0aW9ucy51c2VNb2RhbE92ZXJsYXkpIHtcbiAgICAgIF9zdHlsZUZvclN0ZXAoc3RlcCk7XG5cbiAgICAgIHNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3coKSB7XG4gICAgJCRpbnZhbGlkYXRlKDEsIG1vZGFsSXNWaXNpYmxlID0gdHJ1ZSk7XG4gIH1cblxuICBjb25zdCBfcHJldmVudE1vZGFsQm9keVRvdWNoID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGNvbnN0IF9wcmV2ZW50TW9kYWxPdmVybGF5VG91Y2ggPSBlID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9O1xuICAvKipcbiAgKiBBZGQgdG91Y2htb3ZlIGV2ZW50IGxpc3RlbmVyXG4gICogQHByaXZhdGVcbiAgKi9cblxuXG4gIGZ1bmN0aW9uIF9hZGRTdGVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgLy8gUHJldmVudHMgd2luZG93IGZyb20gbW92aW5nIG9uIHRvdWNoLlxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIF9wcmV2ZW50TW9kYWxCb2R5VG91Y2gsIHtcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICogQ2FuY2VsIHRoZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgbG9vcCBhbmQgcmVtb3ZlIHRvdWNobW92ZSBldmVudCBsaXN0ZW5lcnNcbiAgKiBAcHJpdmF0ZVxuICAqL1xuXG5cbiAgZnVuY3Rpb24gX2NsZWFudXBTdGVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHJhZklkKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZJZCk7XG4gICAgICByYWZJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBfcHJldmVudE1vZGFsQm9keVRvdWNoLCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAqIFN0eWxlIHRoZSBtb2RhbCBmb3IgdGhlIHN0ZXBcbiAgKiBAcGFyYW0ge1N0ZXB9IHN0ZXAgVGhlIHN0ZXAgdG8gc3R5bGUgdGhlIG9wZW5pbmcgZm9yXG4gICogQHByaXZhdGVcbiAgKi9cblxuXG4gIGZ1bmN0aW9uIF9zdHlsZUZvclN0ZXAoc3RlcCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1vZGFsT3ZlcmxheU9wZW5pbmdQYWRkaW5nLFxuICAgICAgbW9kYWxPdmVybGF5T3BlbmluZ1JhZGl1c1xuICAgIH0gPSBzdGVwLm9wdGlvbnM7XG5cbiAgICBjb25zdCBzY3JvbGxQYXJlbnQgPSBfZ2V0U2Nyb2xsUGFyZW50KHN0ZXAudGFyZ2V0KTsgLy8gU2V0dXAgcmVjdXJzaXZlIGZ1bmN0aW9uIHRvIGNhbGwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHRvIHVwZGF0ZSB0aGUgbW9kYWwgb3BlbmluZyBwb3NpdGlvblxuXG5cbiAgICBjb25zdCByYWZMb29wID0gKCkgPT4ge1xuICAgICAgcmFmSWQgPSB1bmRlZmluZWQ7XG4gICAgICBwb3NpdGlvbk1vZGFsKG1vZGFsT3ZlcmxheU9wZW5pbmdQYWRkaW5nLCBtb2RhbE92ZXJsYXlPcGVuaW5nUmFkaXVzLCBzY3JvbGxQYXJlbnQsIHN0ZXAudGFyZ2V0KTtcbiAgICAgIHJhZklkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkxvb3ApO1xuICAgIH07XG5cbiAgICByYWZMb29wKCk7XG5cbiAgICBfYWRkU3RlcEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdmdfYmluZGluZygkJHZhbHVlKSB7XG4gICAgYmluZGluZ19jYWxsYmFja3NbJCR2YWx1ZSA/IFwidW5zaGlmdFwiIDogXCJwdXNoXCJdKCgpID0+IHtcbiAgICAgIGVsZW1lbnQgPSAkJHZhbHVlO1xuICAgICAgJCRpbnZhbGlkYXRlKDAsIGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgJCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgaWYgKFwiZWxlbWVudFwiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgwLCBlbGVtZW50ID0gJCRwcm9wcy5lbGVtZW50KTtcbiAgICBpZiAoXCJvcGVuaW5nUHJvcGVydGllc1wiIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSg0LCBvcGVuaW5nUHJvcGVydGllcyA9ICQkcHJvcHMub3BlbmluZ1Byb3BlcnRpZXMpO1xuICB9O1xuXG4gICQkc2VsZi4kJC51cGRhdGUgPSAoKSA9PiB7XG4gICAgaWYgKCQkc2VsZi4kJC5kaXJ0eSAmXG4gICAgLypvcGVuaW5nUHJvcGVydGllcyovXG4gICAgMTYpIHtcbiAgICAgICQkaW52YWxpZGF0ZSgyLCBwYXRoRGVmaW5pdGlvbiA9IG1ha2VPdmVybGF5UGF0aChvcGVuaW5nUHJvcGVydGllcykpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gW2VsZW1lbnQsIG1vZGFsSXNWaXNpYmxlLCBwYXRoRGVmaW5pdGlvbiwgX3ByZXZlbnRNb2RhbE92ZXJsYXlUb3VjaCwgb3BlbmluZ1Byb3BlcnRpZXMsIGdldEVsZW1lbnQsIGNsb3NlTW9kYWxPcGVuaW5nLCBoaWRlLCBwb3NpdGlvbk1vZGFsLCBzZXR1cEZvclN0ZXAsIHNob3csIHN2Z19iaW5kaW5nXTtcbn1cblxuY2xhc3MgU2hlcGhlcmRfbW9kYWwgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICBpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlLCBjcmVhdGVfZnJhZ21lbnQsIHNhZmVfbm90X2VxdWFsLCB7XG4gICAgICBlbGVtZW50OiAwLFxuICAgICAgb3BlbmluZ1Byb3BlcnRpZXM6IDQsXG4gICAgICBnZXRFbGVtZW50OiA1LFxuICAgICAgY2xvc2VNb2RhbE9wZW5pbmc6IDYsXG4gICAgICBoaWRlOiA3LFxuICAgICAgcG9zaXRpb25Nb2RhbDogOCxcbiAgICAgIHNldHVwRm9yU3RlcDogOSxcbiAgICAgIHNob3c6IDEwXG4gICAgfSk7XG4gIH1cblxuICBnZXQgZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4kJC5jdHhbNV07XG4gIH1cblxuICBnZXQgY2xvc2VNb2RhbE9wZW5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuJCQuY3R4WzZdO1xuICB9XG5cbiAgZ2V0IGhpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuJCQuY3R4WzddO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uTW9kYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuJCQuY3R4WzhdO1xuICB9XG5cbiAgZ2V0IHNldHVwRm9yU3RlcCgpIHtcbiAgICByZXR1cm4gdGhpcy4kJC5jdHhbOV07XG4gIH1cblxuICBnZXQgc2hvdygpIHtcbiAgICByZXR1cm4gdGhpcy4kJC5jdHhbMTBdO1xuICB9XG5cbn1cblxuY29uc3QgU2hlcGhlcmQgPSBuZXcgRXZlbnRlZCgpO1xuLyoqXG4gKiBDbGFzcyByZXByZXNlbnRpbmcgdGhlIHNpdGUgdG91clxuICogQGV4dGVuZHMge0V2ZW50ZWR9XG4gKi9cblxuY2xhc3MgVG91ciBleHRlbmRzIEV2ZW50ZWQge1xuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIG9wdGlvbnMgZm9yIHRoZSB0b3VyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5jb25maXJtQ2FuY2VsIElmIHRydWUsIHdpbGwgaXNzdWUgYSBgd2luZG93LmNvbmZpcm1gIGJlZm9yZSBjYW5jZWxsaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNvbmZpcm1DYW5jZWxNZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkgaW4gdGhlIGNvbmZpcm0gZGlhbG9nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNsYXNzUHJlZml4IFRoZSBwcmVmaXggdG8gYWRkIHRvIHRoZSBgc2hlcGhlcmQtZW5hYmxlZGAgYW5kIGBzaGVwaGVyZC10YXJnZXRgIGNsYXNzIG5hbWVzIGFzIHdlbGwgYXMgdGhlIGBkYXRhLXNoZXBoZXJkLXN0ZXAtaWRgLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucy5kZWZhdWx0U3RlcE9wdGlvbnMgRGVmYXVsdCBvcHRpb25zIGZvciBTdGVwcyAoe0BsaW5rIFN0ZXAjY29uc3RydWN0b3J9KSwgY3JlYXRlZCB0aHJvdWdoIGBhZGRTdGVwYFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuZXhpdE9uRXNjIEV4aXRpbmcgdGhlIHRvdXIgd2l0aCB0aGUgZXNjYXBlIGtleSB3aWxsIGJlIGVuYWJsZWQgdW5sZXNzIHRoaXMgaXMgZXhwbGljaXRseVxuICAgKiBzZXQgdG8gZmFsc2UuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5rZXlib2FyZE5hdmlnYXRpb24gTmF2aWdhdGluZyB0aGUgdG91ciB2aWEgbGVmdCBhbmQgcmlnaHQgYXJyb3cga2V5cyB3aWxsIGJlIGVuYWJsZWRcbiAgICogdW5sZXNzIHRoaXMgaXMgZXhwbGljaXRseSBzZXQgdG8gZmFsc2UuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG9wdGlvbnMuc3RlcHNDb250YWluZXIgQW4gb3B0aW9uYWwgY29udGFpbmVyIGVsZW1lbnQgZm9yIHRoZSBzdGVwcy5cbiAgICogSWYgbm90IHNldCwgdGhlIHN0ZXBzIHdpbGwgYmUgYXBwZW5kZWQgdG8gYGRvY3VtZW50LmJvZHlgLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBvcHRpb25zLm1vZGFsQ29udGFpbmVyIEFuIG9wdGlvbmFsIGNvbnRhaW5lciBlbGVtZW50IGZvciB0aGUgbW9kYWwuXG4gICAqIElmIG5vdCBzZXQsIHRoZSBtb2RhbCB3aWxsIGJlIGFwcGVuZGVkIHRvIGBkb2N1bWVudC5ib2R5YC5cbiAgICogQHBhcmFtIHtvYmplY3RbXSB8IFN0ZXBbXX0gb3B0aW9ucy5zdGVwcyBBbiBhcnJheSBvZiBzdGVwIG9wdGlvbnMgb2JqZWN0cyBvciBTdGVwIGluc3RhbmNlcyB0byBpbml0aWFsaXplIHRoZSB0b3VyIHdpdGhcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMudG91ck5hbWUgQW4gb3B0aW9uYWwgXCJuYW1lXCIgZm9yIHRoZSB0b3VyLiBUaGlzIHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIHRoZSB0b3VyJ3NcbiAgICogZHluYW1pY2FsbHkgZ2VuZXJhdGVkIGBpZGAgcHJvcGVydHkgLS0gd2hpY2ggaXMgYWxzbyBzZXQgb24gdGhlIGBib2R5YCBlbGVtZW50IGFzIHRoZSBgZGF0YS1zaGVwaGVyZC1hY3RpdmUtdG91cmAgYXR0cmlidXRlXG4gICAqIHdoZW5ldmVyIHRoZSB0b3VyIGJlY29tZXMgYWN0aXZlLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMudXNlTW9kYWxPdmVybGF5IFdoZXRoZXIgb3Igbm90IHN0ZXBzIHNob3VsZCBiZSBwbGFjZWQgYWJvdmUgYSBkYXJrZW5lZFxuICAgKiBtb2RhbCBvdmVybGF5LiBJZiB0cnVlLCB0aGUgb3ZlcmxheSB3aWxsIGNyZWF0ZSBhbiBvcGVuaW5nIGFyb3VuZCB0aGUgdGFyZ2V0IGVsZW1lbnQgc28gdGhhdCBpdFxuICAgKiBjYW4gcmVtYWluIGludGVyYWN0aXZlXG4gICAqIEByZXR1cm5zIHtUb3VyfVxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgYXV0b0JpbmQodGhpcyk7XG4gICAgY29uc3QgZGVmYXVsdFRvdXJPcHRpb25zID0ge1xuICAgICAgZXhpdE9uRXNjOiB0cnVlLFxuICAgICAga2V5Ym9hcmROYXZpZ2F0aW9uOiB0cnVlXG4gICAgfTtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0VG91ck9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHRoaXMuY2xhc3NQcmVmaXggPSBub3JtYWxpemVQcmVmaXgodGhpcy5vcHRpb25zLmNsYXNzUHJlZml4KTtcbiAgICB0aGlzLnN0ZXBzID0gW107XG4gICAgdGhpcy5hZGRTdGVwcyh0aGlzLm9wdGlvbnMuc3RlcHMpOyAvLyBQYXNzIHRoZXNlIGV2ZW50cyBvbnRvIHRoZSBnbG9iYWwgU2hlcGhlcmQgb2JqZWN0XG5cbiAgICBjb25zdCBldmVudHMgPSBbJ2FjdGl2ZScsICdjYW5jZWwnLCAnY29tcGxldGUnLCAnaW5hY3RpdmUnLCAnc2hvdycsICdzdGFydCddO1xuICAgIGV2ZW50cy5tYXAoZXZlbnQgPT4ge1xuICAgICAgKGUgPT4ge1xuICAgICAgICB0aGlzLm9uKGUsIG9wdHMgPT4ge1xuICAgICAgICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuICAgICAgICAgIG9wdHMudG91ciA9IHRoaXM7XG4gICAgICAgICAgU2hlcGhlcmQudHJpZ2dlcihlLCBvcHRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KShldmVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9zZXRUb3VySUQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGEgbmV3IHN0ZXAgdG8gdGhlIHRvdXJcbiAgICogQHBhcmFtIHtPYmplY3R8U3RlcH0gb3B0aW9ucyBBbiBvYmplY3QgY29udGFpbmluZyBzdGVwIG9wdGlvbnMgb3IgYSBTdGVwIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgb3B0aW9uYWwgaW5kZXggdG8gaW5zZXJ0IHRoZSBzdGVwIGF0LiBJZiB1bmRlZmluZWQsIHRoZSBzdGVwXG4gICAqIGlzIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgKiBAcmV0dXJuIHtTdGVwfSBUaGUgbmV3bHkgYWRkZWQgc3RlcFxuICAgKi9cblxuXG4gIGFkZFN0ZXAob3B0aW9ucywgaW5kZXgpIHtcbiAgICBsZXQgc3RlcCA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIShzdGVwIGluc3RhbmNlb2YgU3RlcCkpIHtcbiAgICAgIHN0ZXAgPSBuZXcgU3RlcCh0aGlzLCBzdGVwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RlcC50b3VyID0gdGhpcztcbiAgICB9XG5cbiAgICBpZiAoIWlzVW5kZWZpbmVkKGluZGV4KSkge1xuICAgICAgdGhpcy5zdGVwcy5zcGxpY2UoaW5kZXgsIDAsIHN0ZXApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0ZXBzLnB1c2goc3RlcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXA7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBtdWx0aXBsZSBzdGVwcyB0byB0aGUgdG91clxuICAgKiBAcGFyYW0ge0FycmF5PG9iamVjdD4gfCBBcnJheTxTdGVwPn0gc3RlcHMgVGhlIHN0ZXBzIHRvIGFkZCB0byB0aGUgdG91clxuICAgKi9cblxuXG4gIGFkZFN0ZXBzKHN0ZXBzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3RlcHMpKSB7XG4gICAgICBzdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgICB0aGlzLmFkZFN0ZXAoc3RlcCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogR28gdG8gdGhlIHByZXZpb3VzIHN0ZXAgaW4gdGhlIHRvdXJcbiAgICovXG5cblxuICBiYWNrKCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGVwcy5pbmRleE9mKHRoaXMuY3VycmVudFN0ZXApO1xuICAgIHRoaXMuc2hvdyhpbmRleCAtIDEsIGZhbHNlKTtcbiAgfVxuICAvKipcbiAgICogQ2FsbHMgX2RvbmUoKSB0cmlnZ2VyaW5nIHRoZSAnY2FuY2VsJyBldmVudFxuICAgKiBJZiBgY29uZmlybUNhbmNlbGAgaXMgdHJ1ZSwgd2lsbCBzaG93IGEgd2luZG93LmNvbmZpcm0gYmVmb3JlIGNhbmNlbGxpbmdcbiAgICovXG5cblxuICBjYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb25maXJtQ2FuY2VsKSB7XG4gICAgICBjb25zdCBjYW5jZWxNZXNzYWdlID0gdGhpcy5vcHRpb25zLmNvbmZpcm1DYW5jZWxNZXNzYWdlIHx8ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gc3RvcCB0aGUgdG91cj8nO1xuICAgICAgY29uc3Qgc3RvcFRvdXIgPSB3aW5kb3cuY29uZmlybShjYW5jZWxNZXNzYWdlKTtcblxuICAgICAgaWYgKHN0b3BUb3VyKSB7XG4gICAgICAgIHRoaXMuX2RvbmUoJ2NhbmNlbCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kb25lKCdjYW5jZWwnKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENhbGxzIF9kb25lKCkgdHJpZ2dlcmluZyB0aGUgYGNvbXBsZXRlYCBldmVudFxuICAgKi9cblxuXG4gIGNvbXBsZXRlKCkge1xuICAgIHRoaXMuX2RvbmUoJ2NvbXBsZXRlJyk7XG4gIH1cbiAgLyoqXG4gICAqIEdldHMgdGhlIHN0ZXAgZnJvbSBhIGdpdmVuIGlkXG4gICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gaWQgVGhlIGlkIG9mIHRoZSBzdGVwIHRvIHJldHJpZXZlXG4gICAqIEByZXR1cm4ge1N0ZXB9IFRoZSBzdGVwIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGBpZGBcbiAgICovXG5cblxuICBnZXRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHMuZmluZChzdGVwID0+IHtcbiAgICAgIHJldHVybiBzdGVwLmlkID09PSBpZDtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBzdGVwXG4gICAqIEByZXR1cm5zIHtTdGVwfG51bGx9XG4gICAqL1xuXG5cbiAgZ2V0Q3VycmVudFN0ZXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFN0ZXA7XG4gIH1cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGN1cnJlbnQgc3RlcFxuICAgKi9cblxuXG4gIGhpZGUoKSB7XG4gICAgY29uc3QgY3VycmVudFN0ZXAgPSB0aGlzLmdldEN1cnJlbnRTdGVwKCk7XG5cbiAgICBpZiAoY3VycmVudFN0ZXApIHtcbiAgICAgIHJldHVybiBjdXJyZW50U3RlcC5oaWRlKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdG91ciBpcyBhY3RpdmVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICBpc0FjdGl2ZSgpIHtcbiAgICByZXR1cm4gU2hlcGhlcmQuYWN0aXZlVG91ciA9PT0gdGhpcztcbiAgfVxuICAvKipcbiAgICogR28gdG8gdGhlIG5leHQgc3RlcCBpbiB0aGUgdG91clxuICAgKiBJZiB3ZSBhcmUgYXQgdGhlIGVuZCwgY2FsbCBgY29tcGxldGVgXG4gICAqL1xuXG5cbiAgbmV4dCgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RlcHMuaW5kZXhPZih0aGlzLmN1cnJlbnRTdGVwKTtcblxuICAgIGlmIChpbmRleCA9PT0gdGhpcy5zdGVwcy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdyhpbmRleCArIDEsIHRydWUpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgc3RlcCBmcm9tIHRoZSB0b3VyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBpZCBmb3IgdGhlIHN0ZXAgdG8gcmVtb3ZlXG4gICAqL1xuXG5cbiAgcmVtb3ZlU3RlcChuYW1lKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0Q3VycmVudFN0ZXAoKTsgLy8gRmluZCB0aGUgc3RlcCwgZGVzdHJveSBpdCBhbmQgcmVtb3ZlIGl0IGZyb20gdGhpcy5zdGVwc1xuXG4gICAgdGhpcy5zdGVwcy5zb21lKChzdGVwLCBpKSA9PiB7XG4gICAgICBpZiAoc3RlcC5pZCA9PT0gbmFtZSkge1xuICAgICAgICBpZiAoc3RlcC5pc09wZW4oKSkge1xuICAgICAgICAgIHN0ZXAuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RlcC5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc3RlcHMuc3BsaWNlKGksIDEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnQuaWQgPT09IG5hbWUpIHtcbiAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSB1bmRlZmluZWQ7IC8vIElmIHdlIGhhdmUgc3RlcHMgbGVmdCwgc2hvdyB0aGUgZmlyc3Qgb25lLCBvdGhlcndpc2UganVzdCBjYW5jZWwgdGhlIHRvdXJcblxuICAgICAgdGhpcy5zdGVwcy5sZW5ndGggPyB0aGlzLnNob3coMCkgOiB0aGlzLmNhbmNlbCgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2hvdyBhIHNwZWNpZmljIHN0ZXAgaW4gdGhlIHRvdXJcbiAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBrZXkgVGhlIGtleSB0byBsb29rIHVwIHRoZSBzdGVwIGJ5XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZm9yd2FyZCBUcnVlIGlmIHdlIGFyZSBnb2luZyBmb3J3YXJkLCBmYWxzZSBpZiBiYWNrd2FyZFxuICAgKi9cblxuXG4gIHNob3coa2V5ID0gMCwgZm9yd2FyZCA9IHRydWUpIHtcbiAgICBjb25zdCBzdGVwID0gaXNTdHJpbmcoa2V5KSA/IHRoaXMuZ2V0QnlJZChrZXkpIDogdGhpcy5zdGVwc1trZXldO1xuXG4gICAgaWYgKHN0ZXApIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVN0YXRlQmVmb3JlU2hvdygpO1xuXG4gICAgICBjb25zdCBzaG91bGRTa2lwU3RlcCA9IGlzRnVuY3Rpb24oc3RlcC5vcHRpb25zLnNob3dPbikgJiYgIXN0ZXAub3B0aW9ucy5zaG93T24oKTsgLy8gSWYgYHNob3dPbmAgcmV0dXJucyBmYWxzZSwgd2Ugd2FudCB0byBza2lwIHRoZSBzdGVwLCBvdGhlcndpc2UsIHNob3cgdGhlIHN0ZXAgbGlrZSBub3JtYWxcblxuICAgICAgaWYgKHNob3VsZFNraXBTdGVwKSB7XG4gICAgICAgIHRoaXMuX3NraXBTdGVwKHN0ZXAsIGZvcndhcmQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdzaG93Jywge1xuICAgICAgICAgIHN0ZXAsXG4gICAgICAgICAgcHJldmlvdXM6IHRoaXMuY3VycmVudFN0ZXBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSBzdGVwO1xuICAgICAgICBzdGVwLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFN0YXJ0IHRoZSB0b3VyXG4gICAqL1xuXG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy50cmlnZ2VyKCdzdGFydCcpOyAvLyBTYXZlIHRoZSBmb2N1c2VkIGVsZW1lbnQgYmVmb3JlIHRoZSB0b3VyIG9wZW5zXG5cbiAgICB0aGlzLmZvY3VzZWRFbEJlZm9yZU9wZW4gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHRoaXMuY3VycmVudFN0ZXAgPSBudWxsO1xuXG4gICAgdGhpcy5fc2V0dXBNb2RhbCgpO1xuXG4gICAgdGhpcy5fc2V0dXBBY3RpdmVUb3VyKCk7XG5cbiAgICB0aGlzLm5leHQoKTtcbiAgfVxuICAvKipcbiAgICogQ2FsbGVkIHdoZW5ldmVyIHRoZSB0b3VyIGlzIGNhbmNlbGxlZCBvciBjb21wbGV0ZWQsIGJhc2ljYWxseSBhbnl0aW1lIHdlIGV4aXQgdGhlIHRvdXJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lIHRvIHRyaWdnZXJcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfZG9uZShldmVudCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGVwcy5pbmRleE9mKHRoaXMuY3VycmVudFN0ZXApO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5zdGVwcykpIHtcbiAgICAgIHRoaXMuc3RlcHMuZm9yRWFjaChzdGVwID0+IHN0ZXAuZGVzdHJveSgpKTtcbiAgICB9XG5cbiAgICBjbGVhbnVwU3RlcHModGhpcyk7XG4gICAgdGhpcy50cmlnZ2VyKGV2ZW50LCB7XG4gICAgICBpbmRleFxuICAgIH0pO1xuICAgIFNoZXBoZXJkLmFjdGl2ZVRvdXIgPSBudWxsO1xuICAgIHRoaXMudHJpZ2dlcignaW5hY3RpdmUnLCB7XG4gICAgICB0b3VyOiB0aGlzXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5tb2RhbCkge1xuICAgICAgdGhpcy5tb2RhbC5oaWRlKCk7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50ID09PSAnY2FuY2VsJyB8fCBldmVudCA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgaWYgKHRoaXMubW9kYWwpIHtcbiAgICAgICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hlcGhlcmQtbW9kYWwtb3ZlcmxheS1jb250YWluZXInKTtcblxuICAgICAgICBpZiAobW9kYWxDb250YWluZXIpIHtcbiAgICAgICAgICBtb2RhbENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gRm9jdXMgdGhlIGVsZW1lbnQgdGhhdCB3YXMgZm9jdXNlZCBiZWZvcmUgdGhlIHRvdXIgc3RhcnRlZFxuXG5cbiAgICBpZiAoaXNIVE1MRWxlbWVudCQxKHRoaXMuZm9jdXNlZEVsQmVmb3JlT3BlbikpIHtcbiAgICAgIHRoaXMuZm9jdXNlZEVsQmVmb3JlT3Blbi5mb2N1cygpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogTWFrZSB0aGlzIHRvdXIgXCJhY3RpdmVcIlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuXG4gIF9zZXR1cEFjdGl2ZVRvdXIoKSB7XG4gICAgdGhpcy50cmlnZ2VyKCdhY3RpdmUnLCB7XG4gICAgICB0b3VyOiB0aGlzXG4gICAgfSk7XG4gICAgU2hlcGhlcmQuYWN0aXZlVG91ciA9IHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIF9zZXR1cE1vZGFsIGNyZWF0ZSB0aGUgbW9kYWwgY29udGFpbmVyIGFuZCBpbnN0YW5jZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuXG4gIF9zZXR1cE1vZGFsKCkge1xuICAgIHRoaXMubW9kYWwgPSBuZXcgU2hlcGhlcmRfbW9kYWwoe1xuICAgICAgdGFyZ2V0OiB0aGlzLm9wdGlvbnMubW9kYWxDb250YWluZXIgfHwgZG9jdW1lbnQuYm9keSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGNsYXNzUHJlZml4OiB0aGlzLmNsYXNzUHJlZml4LFxuICAgICAgICBzdHlsZXM6IHRoaXMuc3R5bGVzXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGBzaG93T25gIGV2YWx1YXRlcyB0byBmYWxzZSwgdG8gc2tpcCB0aGUgc3RlcFxuICAgKiBAcGFyYW0ge1N0ZXB9IHN0ZXAgVGhlIHN0ZXAgdG8gc2tpcFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGZvcndhcmQgVHJ1ZSBpZiB3ZSBhcmUgZ29pbmcgZm9yd2FyZCwgZmFsc2UgaWYgYmFja3dhcmRcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfc2tpcFN0ZXAoc3RlcCwgZm9yd2FyZCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zdGVwcy5pbmRleE9mKHN0ZXApO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IGZvcndhcmQgPyBpbmRleCArIDEgOiBpbmRleCAtIDE7XG4gICAgdGhpcy5zaG93KG5leHRJbmRleCwgZm9yd2FyZCk7XG4gIH1cbiAgLyoqXG4gICAqIEJlZm9yZSBzaG93aW5nLCBoaWRlIHRoZSBjdXJyZW50IHN0ZXAgYW5kIGlmIHRoZSB0b3VyIGlzIG5vdFxuICAgKiBhbHJlYWR5IGFjdGl2ZSwgY2FsbCBgdGhpcy5fc2V0dXBBY3RpdmVUb3VyYC5cbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBfdXBkYXRlU3RhdGVCZWZvcmVTaG93KCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTdGVwLmhpZGUoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUoKSkge1xuICAgICAgdGhpcy5fc2V0dXBBY3RpdmVUb3VyKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBTZXRzIHRoaXMuaWQgdG8gYCR7dG91ck5hbWV9LS0ke3V1aWR9YFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblxuXG4gIF9zZXRUb3VySUQoKSB7XG4gICAgY29uc3QgdG91ck5hbWUgPSB0aGlzLm9wdGlvbnMudG91ck5hbWUgfHwgJ3RvdXInO1xuICAgIHRoaXMuaWQgPSBgJHt0b3VyTmFtZX0tLSR7dXVpZCgpfWA7XG4gIH1cblxufVxuXG5PYmplY3QuYXNzaWduKFNoZXBoZXJkLCB7XG4gIFRvdXIsXG4gIFN0ZXBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTaGVwaGVyZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNoZXBoZXJkLmVzbS5qcy5tYXBcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=