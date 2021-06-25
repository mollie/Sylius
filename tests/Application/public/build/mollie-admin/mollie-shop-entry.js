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
/******/ 	return __webpack_require__(__webpack_require__.s = "../../src/Resources/assets/shop/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../src/Resources/assets/shop/css/main.scss":
/*!*********************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/shop/css/main.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../src/Resources/assets/shop/entry.js":
/*!****************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/shop/entry.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.scss */ "../../src/Resources/assets/shop/css/main.scss");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main */ "../../src/Resources/assets/shop/js/main.js");



/***/ }),

/***/ "../../src/Resources/assets/shop/js/main.js":
/*!******************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/shop/js/main.js ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mollie_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mollie/main */ "../../src/Resources/assets/shop/js/mollie/main.js");


/***/ }),

/***/ "../../src/Resources/assets/shop/js/mollie/app.js":
/*!************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/shop/js/mollie/app.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  let selectedValue = false;
  let mollieData = $(".online-online-payment__container");
  const initialOrderTotal = $('#sylius-summary-grand-total').text();
  const cardActiveClass = "online-payment__item--active";
  const orderTotalRow = $('#sylius-summary-grand-total');
  const components = Boolean(mollieData.data('components'));
  $('input[id*="sylius_checkout_select_payment_"][type=radio]').on('change', ({
    currentTarget
  }) => {
    if (!currentTarget.classList.contains('mollie-payments')) {
      restoreOrderTotalValue();
      $(`.${cardActiveClass} input[type="radio"]`).prop('checked', false);
      $(`.${cardActiveClass}`).removeClass(cardActiveClass);
    }
  });
  $(".online-payment__input").on('change', ({
    currentTarget
  }) => {
    let currentItem = $(currentTarget).parent('.online-payment__item');
    currentItem.siblings().removeClass('online-payment__item--active');
    currentItem.addClass('online-payment__item--active');
    selectedValue = currentTarget.value;

    if (!$('.mollie-payments').prop('checked')) {
      $('.mollie-payments').prop('checked', true);
    }

    if (currentItem.data('feeurl')) {
      getPaymentFee(currentItem.data('feeurl'));
    }
  });

  function getPaymentFee(url) {
    fetch(url).then(response => response.json()).then(data => {
      const paymentFeeRow = $('#bitbag-paymentFee-row');

      if (paymentFeeRow.length && data.view) {
        paymentFeeRow.replaceWith(data.view);
        orderTotalRow.text(data.orderTotal);
      } else if (data.view) {
        $('#sylius-checkout-subtotal .ui.large.header').before(data.view);
        orderTotalRow.text(data.orderTotal);
      } else {
        restoreOrderTotalValue();
      }
    });
  }

  function restoreOrderTotalValue() {
    $('#bitbag-paymentFee-row').replaceWith('');
    orderTotalRow.text(initialOrderTotal);
  }

  if (mollieData.length > 0 && true === components) {
    initializeCreditCartFields(selectedValue);
  }

  function initializeCreditCartFields(selectedValue) {
    const environment = mollieData.data('environment');
    let testmode = true;

    if (environment === 1) {
      testmode = false;
    }

    const mollie = Mollie(mollieData.data('profile_id'), {
      locale: mollieData.data('locale'),
      testmode: testmode
    });
    const form = document.getElementsByName("sylius_checkout_select_payment")[0];
    const formError = document.getElementById("form-error");
    const submitButton = document.getElementById("next-step") || document.getElementById("sylius-pay-link");
    const tokenField = document.querySelector('[id*="_details_cartToken"]');
    const cardHolder = mollie.createComponent("cardHolder");
    cardHolder.mount("#card-holder");
    const cardHolderError = document.getElementById("card-holder-error");
    cardHolder.addEventListener("change", event => {
      if (event.error && event.touched) {
        cardHolderError.textContent = event.error;
      } else {
        cardHolderError.textContent = "";
      }
    });
    const cardNumber = mollie.createComponent("cardNumber");
    cardNumber.mount("#card-number");
    const cardNumberError = document.getElementById("card-number-error");
    cardNumber.addEventListener("change", event => {
      if (event.error && event.touched) {
        cardNumberError.textContent = event.error;
      } else {
        cardNumberError.textContent = "";
      }
    });
    const expiryDate = mollie.createComponent("expiryDate");
    expiryDate.mount("#expiry-date");
    const expiryDateError = document.getElementById("expiry-date-error");
    expiryDate.addEventListener("change", event => {
      if (event.error && event.touched) {
        expiryDateError.textContent = event.error;
      } else {
        expiryDateError.textContent = "";
      }
    });
    const verificationCode = mollie.createComponent("verificationCode");
    verificationCode.mount("#verification-code");
    const verificationCodeError = document.getElementById("verification-code-error");
    verificationCode.addEventListener("change", event => {
      if (event.error && event.touched) {
        verificationCodeError.textContent = event.error;
      } else {
        verificationCodeError.textContent = "";
      }
    });

    function disableForm() {
      submitButton.disabled = true;
    }

    function enableForm() {
      submitButton.disabled = false;
    }

    form.addEventListener("submit", async event => {
      if ($(".online-payment__input:checked").val() === 'creditcard') {
        event.preventDefault();
        disableForm();
        formError.textContent = "";
        const {
          token,
          error
        } = await mollie.createToken();

        if (error) {
          enableForm();
          formError.textContent = error.message;
          form.classList.remove('loading');
          return;
        }

        const tokenInput = document.createElement("input");
        tokenInput.setAttribute("name", "token");
        tokenInput.setAttribute("type", "hidden");
        tokenInput.setAttribute("value", token);
        form.appendChild(tokenInput);
        tokenField.value = token;
        form.submit();
      }
    });
  }

  const applePay = document.getElementById("applepay");

  if (applePay) {
    if (window.ApplePaySession || ApplePaySession.canMakePayments()) {
      applePay.style.display = "block";
    }
  }
});

/***/ }),

/***/ "../../src/Resources/assets/shop/js/mollie/applePayDirect.js":
/*!***********************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/shop/js/mollie/applePayDirect.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  let applePaySession = () => {
    const version = 3;
    const divider = 100;
    const applePayButton = document.getElementById('mollie_applepay_button');
    const bitbagMollieValidateMerchantUrl = applePayButton.getAttribute('data-url-validate');
    const bitbagMolliePaymentUrl = applePayButton.getAttribute('data-url-payment');
    const bitbagMollieCurrency = applePayButton.getAttribute('data-currency-order');
    const bitbagMollieMerchantName = applePayButton.getAttribute('data-merchant-name');
    let bitbagMollieTotalOrder = applePayButton.getAttribute('data-total-order');
    bitbagMollieTotalOrder = bitbagMollieTotalOrder / divider;
    bitbagMollieTotalOrder = bitbagMollieTotalOrder.toString();
    const session = new ApplePaySession(version, request('US', bitbagMollieCurrency, bitbagMollieMerchantName, bitbagMollieTotalOrder));

    session.onvalidatemerchant = applePayValidateMerchantEvent => {
      jQuery.ajax({
        url: bitbagMollieValidateMerchantUrl,
        method: 'POST',
        data: {
          validationUrl: applePayValidateMerchantEvent.validationURL
        },
        success: merchantSession => {
          if (merchantSession.success === true) {
            session.completeMerchantValidation(JSON.parse(merchantSession.data));
          } else {
            session.abort();
          }
        },
        error: (XHR, status, error) => {
          session.abort();
        }
      });
    };

    session.onpaymentauthorized = ApplePayPayment => {
      jQuery.ajax({
        url: bitbagMolliePaymentUrl,
        method: 'POST',
        data: {
          token: ApplePayPayment.payment.token,
          shippingContact: ApplePayPayment.payment.shippingContact,
          billingContact: ApplePayPayment.payment.billingContact
        },
        success: authorization => {
          let result = authorization.data;

          if (authorization.success === true) {
            redirectionUrl = result['returnUrl'];
            session.completePayment(result['responseToApple']);
            window.location.href = redirectionUrl;
          } else {
            session.completePayment(result);
          }
        },
        error: (XHR, status, error) => {
          session.abort();
        }
      });
    };

    session.begin();
  };

  const applePayMethodElement = document.querySelector('#mollie_applepay_button');
  const canShowButton = applePayMethodElement && ApplePaySession && ApplePaySession.canMakePayments();

  if (canShowButton) {
    applePayMethodElement.style.display = "block";
  }

  document.querySelector('#mollie_applepay_button').addEventListener('click', evt => {
    applePaySession();
  });
});

/***/ }),

/***/ "../../src/Resources/assets/shop/js/mollie/applePayRequest.js":
/*!************************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/shop/js/mollie/applePayRequest.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function request(countryCode, currencyCode, totalLabel, subtotal) {
  return {
    countryCode: countryCode,
    currencyCode: currencyCode,
    supportedNetworks: ['amex', 'maestro', 'masterCard', 'visa', 'vPay'],
    merchantCapabilities: ['supports3DS'],
    shippingType: 'shipping',
    requiredBillingContactFields: ['postalAddress', 'email'],
    requiredShippingContactFields: ['postalAddress', 'email'],
    total: {
      label: totalLabel,
      amount: subtotal,
      type: 'final'
    }
  };
}

/***/ }),

/***/ "../../src/Resources/assets/shop/js/mollie/main.js":
/*!*************************************************************************************************!*\
  !*** /Users/admin/Desktop/PRACA/SyliusMolliePlugin/src/Resources/assets/shop/js/mollie/main.js ***!
  \*************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "../../src/Resources/assets/shop/js/mollie/app.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _applePayDirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applePayDirect */ "../../src/Resources/assets/shop/js/mollie/applePayDirect.js");
/* harmony import */ var _applePayDirect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_applePayDirect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _applePayRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applePayRequest */ "../../src/Resources/assets/shop/js/mollie/applePayRequest.js");
/* harmony import */ var _applePayRequest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_applePayRequest__WEBPACK_IMPORTED_MODULE_2__);




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2VudHJ5LmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwbGVQYXlEaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9hcHBsZVBheVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9tYWluLmpzIl0sIm5hbWVzIjpbIiQiLCJzZWxlY3RlZFZhbHVlIiwibW9sbGllRGF0YSIsImluaXRpYWxPcmRlclRvdGFsIiwidGV4dCIsImNhcmRBY3RpdmVDbGFzcyIsIm9yZGVyVG90YWxSb3ciLCJjb21wb25lbnRzIiwiQm9vbGVhbiIsImRhdGEiLCJvbiIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlc3RvcmVPcmRlclRvdGFsVmFsdWUiLCJwcm9wIiwicmVtb3ZlQ2xhc3MiLCJjdXJyZW50SXRlbSIsInBhcmVudCIsInNpYmxpbmdzIiwiYWRkQ2xhc3MiLCJ2YWx1ZSIsImdldFBheW1lbnRGZWUiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJwYXltZW50RmVlUm93IiwibGVuZ3RoIiwidmlldyIsInJlcGxhY2VXaXRoIiwib3JkZXJUb3RhbCIsImJlZm9yZSIsImluaXRpYWxpemVDcmVkaXRDYXJ0RmllbGRzIiwiZW52aXJvbm1lbnQiLCJ0ZXN0bW9kZSIsIm1vbGxpZSIsIk1vbGxpZSIsImxvY2FsZSIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiZm9ybUVycm9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdWJtaXRCdXR0b24iLCJ0b2tlbkZpZWxkIiwicXVlcnlTZWxlY3RvciIsImNhcmRIb2xkZXIiLCJjcmVhdGVDb21wb25lbnQiLCJtb3VudCIsImNhcmRIb2xkZXJFcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImVycm9yIiwidG91Y2hlZCIsInRleHRDb250ZW50IiwiY2FyZE51bWJlciIsImNhcmROdW1iZXJFcnJvciIsImV4cGlyeURhdGUiLCJleHBpcnlEYXRlRXJyb3IiLCJ2ZXJpZmljYXRpb25Db2RlIiwidmVyaWZpY2F0aW9uQ29kZUVycm9yIiwiZGlzYWJsZUZvcm0iLCJkaXNhYmxlZCIsImVuYWJsZUZvcm0iLCJ2YWwiLCJwcmV2ZW50RGVmYXVsdCIsInRva2VuIiwiY3JlYXRlVG9rZW4iLCJtZXNzYWdlIiwicmVtb3ZlIiwidG9rZW5JbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInN1Ym1pdCIsImFwcGxlUGF5Iiwid2luZG93IiwiQXBwbGVQYXlTZXNzaW9uIiwiY2FuTWFrZVBheW1lbnRzIiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwbGVQYXlTZXNzaW9uIiwidmVyc2lvbiIsImRpdmlkZXIiLCJhcHBsZVBheUJ1dHRvbiIsImJpdGJhZ01vbGxpZVZhbGlkYXRlTWVyY2hhbnRVcmwiLCJnZXRBdHRyaWJ1dGUiLCJiaXRiYWdNb2xsaWVQYXltZW50VXJsIiwiYml0YmFnTW9sbGllQ3VycmVuY3kiLCJiaXRiYWdNb2xsaWVNZXJjaGFudE5hbWUiLCJiaXRiYWdNb2xsaWVUb3RhbE9yZGVyIiwidG9TdHJpbmciLCJzZXNzaW9uIiwicmVxdWVzdCIsIm9udmFsaWRhdGVtZXJjaGFudCIsImFwcGxlUGF5VmFsaWRhdGVNZXJjaGFudEV2ZW50IiwialF1ZXJ5IiwiYWpheCIsIm1ldGhvZCIsInZhbGlkYXRpb25VcmwiLCJ2YWxpZGF0aW9uVVJMIiwic3VjY2VzcyIsIm1lcmNoYW50U2Vzc2lvbiIsImNvbXBsZXRlTWVyY2hhbnRWYWxpZGF0aW9uIiwiSlNPTiIsInBhcnNlIiwiYWJvcnQiLCJYSFIiLCJzdGF0dXMiLCJvbnBheW1lbnRhdXRob3JpemVkIiwiQXBwbGVQYXlQYXltZW50IiwicGF5bWVudCIsInNoaXBwaW5nQ29udGFjdCIsImJpbGxpbmdDb250YWN0IiwiYXV0aG9yaXphdGlvbiIsInJlc3VsdCIsInJlZGlyZWN0aW9uVXJsIiwiY29tcGxldGVQYXltZW50IiwibG9jYXRpb24iLCJocmVmIiwiYmVnaW4iLCJhcHBsZVBheU1ldGhvZEVsZW1lbnQiLCJjYW5TaG93QnV0dG9uIiwiZXZ0IiwiY291bnRyeUNvZGUiLCJjdXJyZW5jeUNvZGUiLCJ0b3RhbExhYmVsIiwic3VidG90YWwiLCJzdXBwb3J0ZWROZXR3b3JrcyIsIm1lcmNoYW50Q2FwYWJpbGl0aWVzIiwic2hpcHBpbmdUeXBlIiwicmVxdWlyZWRCaWxsaW5nQ29udGFjdEZpZWxkcyIsInJlcXVpcmVkU2hpcHBpbmdDb250YWN0RmllbGRzIiwidG90YWwiLCJsYWJlbCIsImFtb3VudCIsInR5cGUiXSwibWFw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RCxTQUFPO0FBQ0hILGVBQVcsRUFBRUEsV0FEVjtBQUVIQyxnQkFBWSxFQUFFQSxZQUZYO0FBR0hHLHFCQUFpQixFQUFFLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsWUFBcEIsRUFBa0MsTUFBbEMsRUFBMEMsTUFBMUMsQ0FIaEI7QUFJSEMsd0JBQW9CLEVBQUUsQ0FBQyxhQUFELENBSm5CO0FBS0hDLGdCQUFZLEVBQUUsVUFMWDtBQU1IQyxnQ0FBNEIsRUFBRSxDQUMxQixlQUQwQixFQUUxQixPQUYwQixDQU4zQjtBQVVIQyxpQ0FBNkIsRUFBRSxDQUMzQixlQUQyQixFQUUzQixPQUYyQixDQVY1QjtBQWNIQyxTQUFLLEVBQUU7QUFDSEMsV0FBSyxFQUFFUixVQURKO0FBRUhTLFlBQU0sRUFBRVIsUUFGTDtBQUdIUyxVQUFJLEVBQUU7QUFISDtBQWRKLEdBQVA7QUFvQkgsQzs7Ozs7Ozs7Ozs7O0FDckJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSIsImZpbGUiOiJtb2xsaWUtc2hvcC1lbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL21vbGxpZS1hZG1pbi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9lbnRyeS5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9jc3MvbWFpbi5zY3NzJztcbmltcG9ydCAnLi9qcy9tYWluJztcbiIsImltcG9ydCAnLi9tb2xsaWUvbWFpbic7XG4iLCIkKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgc2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xuICAgIGxldCBtb2xsaWVEYXRhID0gJChcIi5vbmxpbmUtb25saW5lLXBheW1lbnRfX2NvbnRhaW5lclwiKTtcbiAgICBjb25zdCBpbml0aWFsT3JkZXJUb3RhbCA9ICQoJyNzeWxpdXMtc3VtbWFyeS1ncmFuZC10b3RhbCcpLnRleHQoKTtcbiAgICBjb25zdCBjYXJkQWN0aXZlQ2xhc3MgPSBcIm9ubGluZS1wYXltZW50X19pdGVtLS1hY3RpdmVcIjtcbiAgICBjb25zdCBvcmRlclRvdGFsUm93ID0gJCgnI3N5bGl1cy1zdW1tYXJ5LWdyYW5kLXRvdGFsJyk7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IEJvb2xlYW4obW9sbGllRGF0YS5kYXRhKCdjb21wb25lbnRzJykpO1xuXG4gICAgJCgnaW5wdXRbaWQqPVwic3lsaXVzX2NoZWNrb3V0X3NlbGVjdF9wYXltZW50X1wiXVt0eXBlPXJhZGlvXScpLm9uKCdjaGFuZ2UnLCAoe2N1cnJlbnRUYXJnZXR9KSA9PiB7XG4gICAgICAgIGlmICghY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vbGxpZS1wYXltZW50cycpKSB7XG4gICAgICAgICAgICByZXN0b3JlT3JkZXJUb3RhbFZhbHVlKClcbiAgICAgICAgICAgICQoYC4ke2NhcmRBY3RpdmVDbGFzc30gaW5wdXRbdHlwZT1cInJhZGlvXCJdYCkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKVxuICAgICAgICAgICAgJChgLiR7Y2FyZEFjdGl2ZUNsYXNzfWApLnJlbW92ZUNsYXNzKGNhcmRBY3RpdmVDbGFzcylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAkKFwiLm9ubGluZS1wYXltZW50X19pbnB1dFwiKS5vbignY2hhbmdlJywgKHtjdXJyZW50VGFyZ2V0fSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudEl0ZW0gPSAkKGN1cnJlbnRUYXJnZXQpLnBhcmVudCgnLm9ubGluZS1wYXltZW50X19pdGVtJyk7XG4gICAgICAgIGN1cnJlbnRJdGVtLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ29ubGluZS1wYXltZW50X19pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgY3VycmVudEl0ZW0uYWRkQ2xhc3MoJ29ubGluZS1wYXltZW50X19pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZSA9IGN1cnJlbnRUYXJnZXQudmFsdWU7XG5cbiAgICAgICAgaWYgKCEkKCcubW9sbGllLXBheW1lbnRzJykucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAkKCcubW9sbGllLXBheW1lbnRzJykucHJvcCgnY2hlY2tlZCcsIHRydWUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudEl0ZW0uZGF0YSgnZmVldXJsJykpIHtcbiAgICAgICAgICAgIGdldFBheW1lbnRGZWUoY3VycmVudEl0ZW0uZGF0YSgnZmVldXJsJykpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBnZXRQYXltZW50RmVlKHVybCkge1xuICAgICAgICBmZXRjaCh1cmwpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXltZW50RmVlUm93ID0gJCgnI2JpdGJhZy1wYXltZW50RmVlLXJvdycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBheW1lbnRGZWVSb3cubGVuZ3RoICYmIGRhdGEudmlldykge1xuICAgICAgICAgICAgICAgICAgICBwYXltZW50RmVlUm93LnJlcGxhY2VXaXRoKGRhdGEudmlldylcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJUb3RhbFJvdy50ZXh0KGRhdGEub3JkZXJUb3RhbClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEudmlldykge1xuICAgICAgICAgICAgICAgICAgICAkKCcjc3lsaXVzLWNoZWNrb3V0LXN1YnRvdGFsIC51aS5sYXJnZS5oZWFkZXInKS5iZWZvcmUoZGF0YS52aWV3KVxuICAgICAgICAgICAgICAgICAgICBvcmRlclRvdGFsUm93LnRleHQoZGF0YS5vcmRlclRvdGFsKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3RvcmVPcmRlclRvdGFsVmFsdWUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdG9yZU9yZGVyVG90YWxWYWx1ZSgpIHtcbiAgICAgICAgJCgnI2JpdGJhZy1wYXltZW50RmVlLXJvdycpLnJlcGxhY2VXaXRoKCcnKVxuICAgICAgICBvcmRlclRvdGFsUm93LnRleHQoaW5pdGlhbE9yZGVyVG90YWwpXG4gICAgfVxuXG4gICAgaWYgKG1vbGxpZURhdGEubGVuZ3RoID4gMCAmJiB0cnVlID09PSBjb21wb25lbnRzKSB7XG4gICAgICAgIGluaXRpYWxpemVDcmVkaXRDYXJ0RmllbGRzKHNlbGVjdGVkVmFsdWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemVDcmVkaXRDYXJ0RmllbGRzKHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgY29uc3QgZW52aXJvbm1lbnQgPSBtb2xsaWVEYXRhLmRhdGEoJ2Vudmlyb25tZW50Jyk7XG4gICAgICAgIGxldCB0ZXN0bW9kZSA9IHRydWU7XG5cbiAgICAgICAgaWYgKGVudmlyb25tZW50ID09PSAxKSB7XG4gICAgICAgICAgICB0ZXN0bW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW9sbGllID0gTW9sbGllKFxuICAgICAgICAgICAgbW9sbGllRGF0YS5kYXRhKCdwcm9maWxlX2lkJyksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBtb2xsaWVEYXRhLmRhdGEoJ2xvY2FsZScpLFxuICAgICAgICAgICAgICAgIHRlc3Rtb2RlOiB0ZXN0bW9kZVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInN5bGl1c19jaGVja291dF9zZWxlY3RfcGF5bWVudFwiKVswXTtcblxuICAgICAgICBjb25zdCBmb3JtRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tZXJyb3JcIik7XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV4dC1zdGVwXCIpIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3lsaXVzLXBheS1saW5rXCIpO1xuICAgICAgICBjb25zdCB0b2tlbkZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkKj1cIl9kZXRhaWxzX2NhcnRUb2tlblwiXScpO1xuXG4gICAgICAgIGNvbnN0IGNhcmRIb2xkZXIgPSBtb2xsaWUuY3JlYXRlQ29tcG9uZW50KFwiY2FyZEhvbGRlclwiKTtcblxuICAgICAgICBjYXJkSG9sZGVyLm1vdW50KFwiI2NhcmQtaG9sZGVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGNhcmRIb2xkZXJFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1ob2xkZXItZXJyb3JcIik7XG4gICAgICAgIGNhcmRIb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZXJyb3IgJiYgZXZlbnQudG91Y2hlZCkge1xuICAgICAgICAgICAgICAgIGNhcmRIb2xkZXJFcnJvci50ZXh0Q29udGVudCA9IGV2ZW50LmVycm9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkSG9sZGVyRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjYXJkTnVtYmVyID0gbW9sbGllLmNyZWF0ZUNvbXBvbmVudChcImNhcmROdW1iZXJcIik7XG4gICAgICAgIGNhcmROdW1iZXIubW91bnQoXCIjY2FyZC1udW1iZXJcIik7XG5cbiAgICAgICAgY29uc3QgY2FyZE51bWJlckVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkLW51bWJlci1lcnJvclwiKTtcblxuICAgICAgICBjYXJkTnVtYmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmVycm9yICYmIGV2ZW50LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICBjYXJkTnVtYmVyRXJyb3IudGV4dENvbnRlbnQgPSBldmVudC5lcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZE51bWJlckVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZXhwaXJ5RGF0ZSA9IG1vbGxpZS5jcmVhdGVDb21wb25lbnQoXCJleHBpcnlEYXRlXCIpO1xuICAgICAgICBleHBpcnlEYXRlLm1vdW50KFwiI2V4cGlyeS1kYXRlXCIpO1xuXG4gICAgICAgIGNvbnN0IGV4cGlyeURhdGVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhwaXJ5LWRhdGUtZXJyb3JcIik7XG5cbiAgICAgICAgZXhwaXJ5RGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5lcnJvciAmJiBldmVudC50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgZXhwaXJ5RGF0ZUVycm9yLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4cGlyeURhdGVFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHZlcmlmaWNhdGlvbkNvZGUgPSBtb2xsaWUuY3JlYXRlQ29tcG9uZW50KFwidmVyaWZpY2F0aW9uQ29kZVwiKTtcbiAgICAgICAgdmVyaWZpY2F0aW9uQ29kZS5tb3VudChcIiN2ZXJpZmljYXRpb24tY29kZVwiKTtcblxuICAgICAgICBjb25zdCB2ZXJpZmljYXRpb25Db2RlRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlcmlmaWNhdGlvbi1jb2RlLWVycm9yXCIpO1xuXG4gICAgICAgIHZlcmlmaWNhdGlvbkNvZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZXJyb3IgJiYgZXZlbnQudG91Y2hlZCkge1xuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbkNvZGVFcnJvci50ZXh0Q29udGVudCA9IGV2ZW50LmVycm9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25Db2RlRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBkaXNhYmxlRm9ybSgpIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBlbmFibGVGb3JtKCkge1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYXN5bmMgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCQoXCIub25saW5lLXBheW1lbnRfX2lucHV0OmNoZWNrZWRcIikudmFsKCkgPT09ICdjcmVkaXRjYXJkJykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZGlzYWJsZUZvcm0oKTtcblxuICAgICAgICAgICAgICAgIGZvcm1FcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7dG9rZW4sIGVycm9yfSA9IGF3YWl0IG1vbGxpZS5jcmVhdGVUb2tlbigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZUZvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybUVycm9yLnRleHRDb250ZW50ID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICAgICAgdG9rZW5JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidG9rZW5cIik7XG4gICAgICAgICAgICAgICAgdG9rZW5JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIHRva2VuSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdG9rZW4pO1xuXG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0b2tlbklucHV0KTtcbiAgICAgICAgICAgICAgICB0b2tlbkZpZWxkLnZhbHVlID0gdG9rZW47XG5cbiAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBsZVBheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwbGVwYXlcIik7XG5cbiAgICBpZiAoYXBwbGVQYXkpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5BcHBsZVBheVNlc3Npb24gfHwgQXBwbGVQYXlTZXNzaW9uLmNhbk1ha2VQYXltZW50cygpKSB7XG4gICAgICAgICAgICBhcHBsZVBheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCIkKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgYXBwbGVQYXlTZXNzaW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJzaW9uID0gMztcbiAgICAgICAgY29uc3QgZGl2aWRlciA9IDEwMDtcblxuICAgICAgICBjb25zdCBhcHBsZVBheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2xsaWVfYXBwbGVwYXlfYnV0dG9uJyk7XG5cbiAgICAgICAgY29uc3QgYml0YmFnTW9sbGllVmFsaWRhdGVNZXJjaGFudFVybCA9IGFwcGxlUGF5QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwtdmFsaWRhdGUnKTtcbiAgICAgICAgY29uc3QgYml0YmFnTW9sbGllUGF5bWVudFVybCA9IGFwcGxlUGF5QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS11cmwtcGF5bWVudCcpO1xuICAgICAgICBjb25zdCBiaXRiYWdNb2xsaWVDdXJyZW5jeSA9IGFwcGxlUGF5QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1jdXJyZW5jeS1vcmRlcicpO1xuICAgICAgICBjb25zdCBiaXRiYWdNb2xsaWVNZXJjaGFudE5hbWUgPSBhcHBsZVBheUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWVyY2hhbnQtbmFtZScpO1xuXG4gICAgICAgIGxldCBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXRvdGFsLW9yZGVyJyk7XG4gICAgICAgIGJpdGJhZ01vbGxpZVRvdGFsT3JkZXIgPSBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyIC8gZGl2aWRlcjtcbiAgICAgICAgYml0YmFnTW9sbGllVG90YWxPcmRlciA9IGJpdGJhZ01vbGxpZVRvdGFsT3JkZXIudG9TdHJpbmcoKTtcblxuICAgICAgICBjb25zdCBzZXNzaW9uID0gbmV3IEFwcGxlUGF5U2Vzc2lvbih2ZXJzaW9uLCByZXF1ZXN0KFxuICAgICAgICAgICAgJ1VTJyxcbiAgICAgICAgICAgIGJpdGJhZ01vbGxpZUN1cnJlbmN5LFxuICAgICAgICAgICAgYml0YmFnTW9sbGllTWVyY2hhbnROYW1lLFxuICAgICAgICAgICAgYml0YmFnTW9sbGllVG90YWxPcmRlclxuICAgICAgICApKTtcblxuICAgICAgICBzZXNzaW9uLm9udmFsaWRhdGVtZXJjaGFudCA9IChhcHBsZVBheVZhbGlkYXRlTWVyY2hhbnRFdmVudCkgPT4ge1xuICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogYml0YmFnTW9sbGllVmFsaWRhdGVNZXJjaGFudFVybCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25Vcmw6IGFwcGxlUGF5VmFsaWRhdGVNZXJjaGFudEV2ZW50LnZhbGlkYXRpb25VUkwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAobWVyY2hhbnRTZXNzaW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXJjaGFudFNlc3Npb24uc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5jb21wbGV0ZU1lcmNoYW50VmFsaWRhdGlvbihKU09OLnBhcnNlKG1lcmNoYW50U2Vzc2lvbi5kYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb24uYWJvcnQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogKFhIUiwgc3RhdHVzLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmFib3J0KClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNlc3Npb24ub25wYXltZW50YXV0aG9yaXplZCA9IChBcHBsZVBheVBheW1lbnQpID0+IHtcbiAgICAgICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGJpdGJhZ01vbGxpZVBheW1lbnRVcmwsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB0b2tlbjogQXBwbGVQYXlQYXltZW50LnBheW1lbnQudG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nQ29udGFjdDogQXBwbGVQYXlQYXltZW50LnBheW1lbnQuc2hpcHBpbmdDb250YWN0LFxuICAgICAgICAgICAgICAgICAgICBiaWxsaW5nQ29udGFjdDogQXBwbGVQYXlQYXltZW50LnBheW1lbnQuYmlsbGluZ0NvbnRhY3RcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChhdXRob3JpemF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBhdXRob3JpemF0aW9uLmRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGF1dGhvcml6YXRpb24uc3VjY2VzcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Rpb25VcmwgPSByZXN1bHRbJ3JldHVyblVybCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5jb21wbGV0ZVBheW1lbnQocmVzdWx0WydyZXNwb25zZVRvQXBwbGUnXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVkaXJlY3Rpb25VcmxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb24uY29tcGxldGVQYXltZW50KHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IChYSFIsIHN0YXR1cywgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5hYm9ydCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHNlc3Npb24uYmVnaW4oKTtcbiAgICB9XG5cbiAgICBjb25zdCBhcHBsZVBheU1ldGhvZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9sbGllX2FwcGxlcGF5X2J1dHRvbicpXG5cbiAgICBjb25zdCBjYW5TaG93QnV0dG9uID0gYXBwbGVQYXlNZXRob2RFbGVtZW50ICYmIChBcHBsZVBheVNlc3Npb24gJiYgQXBwbGVQYXlTZXNzaW9uLmNhbk1ha2VQYXltZW50cygpKVxuICAgIGlmIChjYW5TaG93QnV0dG9uKSB7XG4gICAgICAgIGFwcGxlUGF5TWV0aG9kRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2xsaWVfYXBwbGVwYXlfYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XG4gICAgICAgIGFwcGxlUGF5U2Vzc2lvbigpXG4gICAgfSlcbn0pO1xuIiwiZnVuY3Rpb24gcmVxdWVzdChjb3VudHJ5Q29kZSwgY3VycmVuY3lDb2RlLCB0b3RhbExhYmVsLCBzdWJ0b3RhbCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvdW50cnlDb2RlOiBjb3VudHJ5Q29kZSxcbiAgICAgICAgY3VycmVuY3lDb2RlOiBjdXJyZW5jeUNvZGUsXG4gICAgICAgIHN1cHBvcnRlZE5ldHdvcmtzOiBbJ2FtZXgnLCAnbWFlc3RybycsICdtYXN0ZXJDYXJkJywgJ3Zpc2EnLCAndlBheSddLFxuICAgICAgICBtZXJjaGFudENhcGFiaWxpdGllczogWydzdXBwb3J0czNEUyddLFxuICAgICAgICBzaGlwcGluZ1R5cGU6ICdzaGlwcGluZycsXG4gICAgICAgIHJlcXVpcmVkQmlsbGluZ0NvbnRhY3RGaWVsZHM6IFtcbiAgICAgICAgICAgICdwb3N0YWxBZGRyZXNzJyxcbiAgICAgICAgICAgICdlbWFpbCdcbiAgICAgICAgXSxcbiAgICAgICAgcmVxdWlyZWRTaGlwcGluZ0NvbnRhY3RGaWVsZHM6IFtcbiAgICAgICAgICAgICdwb3N0YWxBZGRyZXNzJyxcbiAgICAgICAgICAgICdlbWFpbCdcbiAgICAgICAgXSxcbiAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgIGxhYmVsOiB0b3RhbExhYmVsLFxuICAgICAgICAgICAgYW1vdW50OiBzdWJ0b3RhbCxcbiAgICAgICAgICAgIHR5cGU6ICdmaW5hbCdcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCAnLi9hcHAnO1xuaW1wb3J0ICcuL2FwcGxlUGF5RGlyZWN0JztcbmltcG9ydCAnLi9hcHBsZVBheVJlcXVlc3QnO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==