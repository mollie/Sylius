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
 // import 'https://js.mollie.com/v1/mollie.js';



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2VudHJ5LmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwbGVQYXlEaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9hcHBsZVBheVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9tYWluLmpzIl0sIm5hbWVzIjpbIiQiLCJzZWxlY3RlZFZhbHVlIiwibW9sbGllRGF0YSIsImluaXRpYWxPcmRlclRvdGFsIiwidGV4dCIsImNhcmRBY3RpdmVDbGFzcyIsIm9yZGVyVG90YWxSb3ciLCJjb21wb25lbnRzIiwiQm9vbGVhbiIsImRhdGEiLCJvbiIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlc3RvcmVPcmRlclRvdGFsVmFsdWUiLCJwcm9wIiwicmVtb3ZlQ2xhc3MiLCJjdXJyZW50SXRlbSIsInBhcmVudCIsInNpYmxpbmdzIiwiYWRkQ2xhc3MiLCJ2YWx1ZSIsImdldFBheW1lbnRGZWUiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJwYXltZW50RmVlUm93IiwibGVuZ3RoIiwidmlldyIsInJlcGxhY2VXaXRoIiwib3JkZXJUb3RhbCIsImJlZm9yZSIsImluaXRpYWxpemVDcmVkaXRDYXJ0RmllbGRzIiwiZW52aXJvbm1lbnQiLCJ0ZXN0bW9kZSIsIm1vbGxpZSIsIk1vbGxpZSIsImxvY2FsZSIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiZm9ybUVycm9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdWJtaXRCdXR0b24iLCJ0b2tlbkZpZWxkIiwicXVlcnlTZWxlY3RvciIsImNhcmRIb2xkZXIiLCJjcmVhdGVDb21wb25lbnQiLCJtb3VudCIsImNhcmRIb2xkZXJFcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImVycm9yIiwidG91Y2hlZCIsInRleHRDb250ZW50IiwiY2FyZE51bWJlciIsImNhcmROdW1iZXJFcnJvciIsImV4cGlyeURhdGUiLCJleHBpcnlEYXRlRXJyb3IiLCJ2ZXJpZmljYXRpb25Db2RlIiwidmVyaWZpY2F0aW9uQ29kZUVycm9yIiwiZGlzYWJsZUZvcm0iLCJkaXNhYmxlZCIsImVuYWJsZUZvcm0iLCJ2YWwiLCJwcmV2ZW50RGVmYXVsdCIsInRva2VuIiwiY3JlYXRlVG9rZW4iLCJtZXNzYWdlIiwicmVtb3ZlIiwidG9rZW5JbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInN1Ym1pdCIsImFwcGxlUGF5Iiwid2luZG93IiwiQXBwbGVQYXlTZXNzaW9uIiwiY2FuTWFrZVBheW1lbnRzIiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwbGVQYXlTZXNzaW9uIiwidmVyc2lvbiIsImRpdmlkZXIiLCJhcHBsZVBheUJ1dHRvbiIsImJpdGJhZ01vbGxpZVZhbGlkYXRlTWVyY2hhbnRVcmwiLCJnZXRBdHRyaWJ1dGUiLCJiaXRiYWdNb2xsaWVQYXltZW50VXJsIiwiYml0YmFnTW9sbGllQ3VycmVuY3kiLCJiaXRiYWdNb2xsaWVNZXJjaGFudE5hbWUiLCJiaXRiYWdNb2xsaWVUb3RhbE9yZGVyIiwidG9TdHJpbmciLCJzZXNzaW9uIiwicmVxdWVzdCIsIm9udmFsaWRhdGVtZXJjaGFudCIsImFwcGxlUGF5VmFsaWRhdGVNZXJjaGFudEV2ZW50IiwialF1ZXJ5IiwiYWpheCIsIm1ldGhvZCIsInZhbGlkYXRpb25VcmwiLCJ2YWxpZGF0aW9uVVJMIiwic3VjY2VzcyIsIm1lcmNoYW50U2Vzc2lvbiIsImNvbXBsZXRlTWVyY2hhbnRWYWxpZGF0aW9uIiwiSlNPTiIsInBhcnNlIiwiYWJvcnQiLCJYSFIiLCJzdGF0dXMiLCJvbnBheW1lbnRhdXRob3JpemVkIiwiQXBwbGVQYXlQYXltZW50IiwicGF5bWVudCIsInNoaXBwaW5nQ29udGFjdCIsImJpbGxpbmdDb250YWN0IiwiYXV0aG9yaXphdGlvbiIsInJlc3VsdCIsInJlZGlyZWN0aW9uVXJsIiwiY29tcGxldGVQYXltZW50IiwibG9jYXRpb24iLCJocmVmIiwiYmVnaW4iLCJhcHBsZVBheU1ldGhvZEVsZW1lbnQiLCJjYW5TaG93QnV0dG9uIiwiZXZ0IiwiY291bnRyeUNvZGUiLCJjdXJyZW5jeUNvZGUiLCJ0b3RhbExhYmVsIiwic3VidG90YWwiLCJzdXBwb3J0ZWROZXR3b3JrcyIsIm1lcmNoYW50Q2FwYWJpbGl0aWVzIiwic2hpcHBpbmdUeXBlIiwicmVxdWlyZWRCaWxsaW5nQ29udGFjdEZpZWxkcyIsInJlcXVpcmVkU2hpcHBpbmdDb250YWN0RmllbGRzIiwidG90YWwiLCJsYWJlbCIsImFtb3VudCIsInR5cGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7Q0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQUEsQ0FBQyxDQUFDLFlBQVk7QUFDVixNQUFJQyxhQUFhLEdBQUcsS0FBcEI7QUFDQSxNQUFJQyxVQUFVLEdBQUdGLENBQUMsQ0FBQyxtQ0FBRCxDQUFsQjtBQUNBLFFBQU1HLGlCQUFpQixHQUFHSCxDQUFDLENBQUMsNkJBQUQsQ0FBRCxDQUFpQ0ksSUFBakMsRUFBMUI7QUFDQSxRQUFNQyxlQUFlLEdBQUcsOEJBQXhCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHTixDQUFDLENBQUMsNkJBQUQsQ0FBdkI7QUFDQSxRQUFNTyxVQUFVLEdBQUdDLE9BQU8sQ0FBQ04sVUFBVSxDQUFDTyxJQUFYLENBQWdCLFlBQWhCLENBQUQsQ0FBMUI7QUFFQVQsR0FBQyxDQUFDLDBEQUFELENBQUQsQ0FBOERVLEVBQTlELENBQWlFLFFBQWpFLEVBQTJFLENBQUM7QUFBQ0M7QUFBRCxHQUFELEtBQXFCO0FBQzVGLFFBQUksQ0FBQ0EsYUFBYSxDQUFDQyxTQUFkLENBQXdCQyxRQUF4QixDQUFpQyxpQkFBakMsQ0FBTCxFQUEwRDtBQUN0REMsNEJBQXNCO0FBQ3RCZCxPQUFDLENBQUUsSUFBR0ssZUFBZ0Isc0JBQXJCLENBQUQsQ0FBNkNVLElBQTdDLENBQWtELFNBQWxELEVBQTZELEtBQTdEO0FBQ0FmLE9BQUMsQ0FBRSxJQUFHSyxlQUFnQixFQUFyQixDQUFELENBQXlCVyxXQUF6QixDQUFxQ1gsZUFBckM7QUFDSDtBQUNKLEdBTkQ7QUFRQUwsR0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJVLEVBQTVCLENBQStCLFFBQS9CLEVBQXlDLENBQUM7QUFBQ0M7QUFBRCxHQUFELEtBQXFCO0FBQzFELFFBQUlNLFdBQVcsR0FBR2pCLENBQUMsQ0FBQ1csYUFBRCxDQUFELENBQWlCTyxNQUFqQixDQUF3Qix1QkFBeEIsQ0FBbEI7QUFDQUQsZUFBVyxDQUFDRSxRQUFaLEdBQXVCSCxXQUF2QixDQUFtQyw4QkFBbkM7QUFDQUMsZUFBVyxDQUFDRyxRQUFaLENBQXFCLDhCQUFyQjtBQUNBbkIsaUJBQWEsR0FBR1UsYUFBYSxDQUFDVSxLQUE5Qjs7QUFFQSxRQUFJLENBQUNyQixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmUsSUFBdEIsQ0FBMkIsU0FBM0IsQ0FBTCxFQUE0QztBQUN4Q2YsT0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JlLElBQXRCLENBQTJCLFNBQTNCLEVBQXNDLElBQXRDO0FBQ0g7O0FBRUQsUUFBSUUsV0FBVyxDQUFDUixJQUFaLENBQWlCLFFBQWpCLENBQUosRUFBZ0M7QUFDNUJhLG1CQUFhLENBQUNMLFdBQVcsQ0FBQ1IsSUFBWixDQUFpQixRQUFqQixDQUFELENBQWI7QUFDSDtBQUNKLEdBYkQ7O0FBZUEsV0FBU2EsYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEI7QUFDeEJDLFNBQUssQ0FBQ0QsR0FBRCxDQUFMLENBQ0tFLElBREwsQ0FDVUMsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQVQsRUFEdEIsRUFFS0YsSUFGTCxDQUVVaEIsSUFBSSxJQUFJO0FBQ1YsWUFBTW1CLGFBQWEsR0FBRzVCLENBQUMsQ0FBQyx3QkFBRCxDQUF2Qjs7QUFFQSxVQUFJNEIsYUFBYSxDQUFDQyxNQUFkLElBQXdCcEIsSUFBSSxDQUFDcUIsSUFBakMsRUFBdUM7QUFDbkNGLHFCQUFhLENBQUNHLFdBQWQsQ0FBMEJ0QixJQUFJLENBQUNxQixJQUEvQjtBQUNBeEIscUJBQWEsQ0FBQ0YsSUFBZCxDQUFtQkssSUFBSSxDQUFDdUIsVUFBeEI7QUFDSCxPQUhELE1BR08sSUFBSXZCLElBQUksQ0FBQ3FCLElBQVQsRUFBZTtBQUNsQjlCLFNBQUMsQ0FBQyw0Q0FBRCxDQUFELENBQWdEaUMsTUFBaEQsQ0FBdUR4QixJQUFJLENBQUNxQixJQUE1RDtBQUNBeEIscUJBQWEsQ0FBQ0YsSUFBZCxDQUFtQkssSUFBSSxDQUFDdUIsVUFBeEI7QUFDSCxPQUhNLE1BR0E7QUFDSGxCLDhCQUFzQjtBQUN6QjtBQUNKLEtBZEw7QUFlSDs7QUFFRCxXQUFTQSxzQkFBVCxHQUFrQztBQUM5QmQsS0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEIrQixXQUE1QixDQUF3QyxFQUF4QztBQUNBekIsaUJBQWEsQ0FBQ0YsSUFBZCxDQUFtQkQsaUJBQW5CO0FBQ0g7O0FBRUQsTUFBSUQsVUFBVSxDQUFDMkIsTUFBWCxHQUFvQixDQUFwQixJQUF5QixTQUFTdEIsVUFBdEMsRUFBa0Q7QUFDOUMyQiw4QkFBMEIsQ0FBQ2pDLGFBQUQsQ0FBMUI7QUFDSDs7QUFFRCxXQUFTaUMsMEJBQVQsQ0FBb0NqQyxhQUFwQyxFQUFtRDtBQUMvQyxVQUFNa0MsV0FBVyxHQUFHakMsVUFBVSxDQUFDTyxJQUFYLENBQWdCLGFBQWhCLENBQXBCO0FBQ0EsUUFBSTJCLFFBQVEsR0FBRyxJQUFmOztBQUVBLFFBQUlELFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNuQkMsY0FBUSxHQUFHLEtBQVg7QUFDSDs7QUFFRCxVQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FDakJwQyxVQUFVLENBQUNPLElBQVgsQ0FBZ0IsWUFBaEIsQ0FEaUIsRUFFakI7QUFDSThCLFlBQU0sRUFBRXJDLFVBQVUsQ0FBQ08sSUFBWCxDQUFnQixRQUFoQixDQURaO0FBRUkyQixjQUFRLEVBQUVBO0FBRmQsS0FGaUIsQ0FBckI7QUFRQSxVQUFNSSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsaUJBQVQsQ0FBMkIsZ0NBQTNCLEVBQTZELENBQTdELENBQWI7QUFFQSxVQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixZQUF4QixDQUFsQjtBQUNBLFVBQU1DLFlBQVksR0FBR0osUUFBUSxDQUFDRyxjQUFULENBQXdCLFdBQXhCLEtBQXdDSCxRQUFRLENBQUNHLGNBQVQsQ0FBd0IsaUJBQXhCLENBQTdEO0FBQ0EsVUFBTUUsVUFBVSxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsNEJBQXZCLENBQW5CO0FBRUEsVUFBTUMsVUFBVSxHQUFHWCxNQUFNLENBQUNZLGVBQVAsQ0FBdUIsWUFBdkIsQ0FBbkI7QUFFQUQsY0FBVSxDQUFDRSxLQUFYLENBQWlCLGNBQWpCO0FBRUEsVUFBTUMsZUFBZSxHQUFHVixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsbUJBQXhCLENBQXhCO0FBQ0FJLGNBQVUsQ0FBQ0ksZ0JBQVgsQ0FBNEIsUUFBNUIsRUFBc0NDLEtBQUssSUFBSTtBQUMzQyxVQUFJQSxLQUFLLENBQUNDLEtBQU4sSUFBZUQsS0FBSyxDQUFDRSxPQUF6QixFQUFrQztBQUM5QkosdUJBQWUsQ0FBQ0ssV0FBaEIsR0FBOEJILEtBQUssQ0FBQ0MsS0FBcEM7QUFDSCxPQUZELE1BRU87QUFDSEgsdUJBQWUsQ0FBQ0ssV0FBaEIsR0FBOEIsRUFBOUI7QUFDSDtBQUNKLEtBTkQ7QUFRQSxVQUFNQyxVQUFVLEdBQUdwQixNQUFNLENBQUNZLGVBQVAsQ0FBdUIsWUFBdkIsQ0FBbkI7QUFDQVEsY0FBVSxDQUFDUCxLQUFYLENBQWlCLGNBQWpCO0FBRUEsVUFBTVEsZUFBZSxHQUFHakIsUUFBUSxDQUFDRyxjQUFULENBQXdCLG1CQUF4QixDQUF4QjtBQUVBYSxjQUFVLENBQUNMLGdCQUFYLENBQTRCLFFBQTVCLEVBQXNDQyxLQUFLLElBQUk7QUFDM0MsVUFBSUEsS0FBSyxDQUFDQyxLQUFOLElBQWVELEtBQUssQ0FBQ0UsT0FBekIsRUFBa0M7QUFDOUJHLHVCQUFlLENBQUNGLFdBQWhCLEdBQThCSCxLQUFLLENBQUNDLEtBQXBDO0FBQ0gsT0FGRCxNQUVPO0FBQ0hJLHVCQUFlLENBQUNGLFdBQWhCLEdBQThCLEVBQTlCO0FBQ0g7QUFDSixLQU5EO0FBUUEsVUFBTUcsVUFBVSxHQUFHdEIsTUFBTSxDQUFDWSxlQUFQLENBQXVCLFlBQXZCLENBQW5CO0FBQ0FVLGNBQVUsQ0FBQ1QsS0FBWCxDQUFpQixjQUFqQjtBQUVBLFVBQU1VLGVBQWUsR0FBR25CLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixtQkFBeEIsQ0FBeEI7QUFFQWUsY0FBVSxDQUFDUCxnQkFBWCxDQUE0QixRQUE1QixFQUFzQ0MsS0FBSyxJQUFJO0FBQzNDLFVBQUlBLEtBQUssQ0FBQ0MsS0FBTixJQUFlRCxLQUFLLENBQUNFLE9BQXpCLEVBQWtDO0FBQzlCSyx1QkFBZSxDQUFDSixXQUFoQixHQUE4QkgsS0FBSyxDQUFDQyxLQUFwQztBQUNILE9BRkQsTUFFTztBQUNITSx1QkFBZSxDQUFDSixXQUFoQixHQUE4QixFQUE5QjtBQUNIO0FBQ0osS0FORDtBQVFBLFVBQU1LLGdCQUFnQixHQUFHeEIsTUFBTSxDQUFDWSxlQUFQLENBQXVCLGtCQUF2QixDQUF6QjtBQUNBWSxvQkFBZ0IsQ0FBQ1gsS0FBakIsQ0FBdUIsb0JBQXZCO0FBRUEsVUFBTVkscUJBQXFCLEdBQUdyQixRQUFRLENBQUNHLGNBQVQsQ0FBd0IseUJBQXhCLENBQTlCO0FBRUFpQixvQkFBZ0IsQ0FBQ1QsZ0JBQWpCLENBQWtDLFFBQWxDLEVBQTRDQyxLQUFLLElBQUk7QUFDakQsVUFBSUEsS0FBSyxDQUFDQyxLQUFOLElBQWVELEtBQUssQ0FBQ0UsT0FBekIsRUFBa0M7QUFDOUJPLDZCQUFxQixDQUFDTixXQUF0QixHQUFvQ0gsS0FBSyxDQUFDQyxLQUExQztBQUNILE9BRkQsTUFFTztBQUNIUSw2QkFBcUIsQ0FBQ04sV0FBdEIsR0FBb0MsRUFBcEM7QUFDSDtBQUNKLEtBTkQ7O0FBUUEsYUFBU08sV0FBVCxHQUF1QjtBQUNuQmxCLGtCQUFZLENBQUNtQixRQUFiLEdBQXdCLElBQXhCO0FBQ0g7O0FBRUQsYUFBU0MsVUFBVCxHQUFzQjtBQUNsQnBCLGtCQUFZLENBQUNtQixRQUFiLEdBQXdCLEtBQXhCO0FBQ0g7O0FBRUR4QixRQUFJLENBQUNZLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLE1BQU1DLEtBQU4sSUFBZTtBQUMzQyxVQUFJckQsQ0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NrRSxHQUFwQyxPQUE4QyxZQUFsRCxFQUFnRTtBQUM1RGIsYUFBSyxDQUFDYyxjQUFOO0FBQ0FKLG1CQUFXO0FBRVhwQixpQkFBUyxDQUFDYSxXQUFWLEdBQXdCLEVBQXhCO0FBRUEsY0FBTTtBQUFDWSxlQUFEO0FBQVFkO0FBQVIsWUFBaUIsTUFBTWpCLE1BQU0sQ0FBQ2dDLFdBQVAsRUFBN0I7O0FBRUEsWUFBSWYsS0FBSixFQUFXO0FBQ1BXLG9CQUFVO0FBQ1Z0QixtQkFBUyxDQUFDYSxXQUFWLEdBQXdCRixLQUFLLENBQUNnQixPQUE5QjtBQUNBOUIsY0FBSSxDQUFDNUIsU0FBTCxDQUFlMkQsTUFBZixDQUFzQixTQUF0QjtBQUVBO0FBQ0g7O0FBRUQsY0FBTUMsVUFBVSxHQUFHL0IsUUFBUSxDQUFDZ0MsYUFBVCxDQUF1QixPQUF2QixDQUFuQjtBQUNBRCxrQkFBVSxDQUFDRSxZQUFYLENBQXdCLE1BQXhCLEVBQWdDLE9BQWhDO0FBQ0FGLGtCQUFVLENBQUNFLFlBQVgsQ0FBd0IsTUFBeEIsRUFBZ0MsUUFBaEM7QUFDQUYsa0JBQVUsQ0FBQ0UsWUFBWCxDQUF3QixPQUF4QixFQUFpQ04sS0FBakM7QUFFQTVCLFlBQUksQ0FBQ21DLFdBQUwsQ0FBaUJILFVBQWpCO0FBQ0ExQixrQkFBVSxDQUFDekIsS0FBWCxHQUFtQitDLEtBQW5CO0FBRUE1QixZQUFJLENBQUNvQyxNQUFMO0FBQ0g7QUFDSixLQTNCRDtBQTRCSDs7QUFFRCxRQUFNQyxRQUFRLEdBQUdwQyxRQUFRLENBQUNHLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBakI7O0FBRUEsTUFBSWlDLFFBQUosRUFBYztBQUNWLFFBQUlDLE1BQU0sQ0FBQ0MsZUFBUCxJQUEwQkEsZUFBZSxDQUFDQyxlQUFoQixFQUE5QixFQUFpRTtBQUM3REgsY0FBUSxDQUFDSSxLQUFULENBQWVDLE9BQWYsR0FBeUIsT0FBekI7QUFDSDtBQUNKO0FBQ0osQ0FqTEEsQ0FBRCxDOzs7Ozs7Ozs7OztBQ0FBbEYsQ0FBQyxDQUFDLFlBQVk7QUFDVixNQUFJbUYsZUFBZSxHQUFHLE1BQU07QUFDeEIsVUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsVUFBTUMsT0FBTyxHQUFHLEdBQWhCO0FBRUEsVUFBTUMsY0FBYyxHQUFHN0MsUUFBUSxDQUFDRyxjQUFULENBQXdCLHdCQUF4QixDQUF2QjtBQUVBLFVBQU0yQywrQkFBK0IsR0FBR0QsY0FBYyxDQUFDRSxZQUFmLENBQTRCLG1CQUE1QixDQUF4QztBQUNBLFVBQU1DLHNCQUFzQixHQUFHSCxjQUFjLENBQUNFLFlBQWYsQ0FBNEIsa0JBQTVCLENBQS9CO0FBQ0EsVUFBTUUsb0JBQW9CLEdBQUdKLGNBQWMsQ0FBQ0UsWUFBZixDQUE0QixxQkFBNUIsQ0FBN0I7QUFDQSxVQUFNRyx3QkFBd0IsR0FBR0wsY0FBYyxDQUFDRSxZQUFmLENBQTRCLG9CQUE1QixDQUFqQztBQUVBLFFBQUlJLHNCQUFzQixHQUFHTixjQUFjLENBQUNFLFlBQWYsQ0FBNEIsa0JBQTVCLENBQTdCO0FBQ0FJLDBCQUFzQixHQUFHQSxzQkFBc0IsR0FBR1AsT0FBbEQ7QUFDQU8sMEJBQXNCLEdBQUdBLHNCQUFzQixDQUFDQyxRQUF2QixFQUF6QjtBQUVBLFVBQU1DLE9BQU8sR0FBRyxJQUFJZixlQUFKLENBQW9CSyxPQUFwQixFQUE2QlcsT0FBTyxDQUNoRCxJQURnRCxFQUVoREwsb0JBRmdELEVBR2hEQyx3QkFIZ0QsRUFJaERDLHNCQUpnRCxDQUFwQyxDQUFoQjs7QUFPQUUsV0FBTyxDQUFDRSxrQkFBUixHQUE4QkMsNkJBQUQsSUFBbUM7QUFDNURDLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1I1RSxXQUFHLEVBQUVnRSwrQkFERztBQUVSYSxjQUFNLEVBQUUsTUFGQTtBQUdSM0YsWUFBSSxFQUFFO0FBQ0Y0Rix1QkFBYSxFQUFFSiw2QkFBNkIsQ0FBQ0s7QUFEM0MsU0FIRTtBQU1SQyxlQUFPLEVBQUdDLGVBQUQsSUFBcUI7QUFDMUIsY0FBSUEsZUFBZSxDQUFDRCxPQUFoQixLQUE0QixJQUFoQyxFQUFzQztBQUNsQ1QsbUJBQU8sQ0FBQ1csMEJBQVIsQ0FBbUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxlQUFlLENBQUMvRixJQUEzQixDQUFuQztBQUNILFdBRkQsTUFFTztBQUNIcUYsbUJBQU8sQ0FBQ2MsS0FBUjtBQUNIO0FBQ0osU0FaTztBQWFSdEQsYUFBSyxFQUFFLENBQUN1RCxHQUFELEVBQU1DLE1BQU4sRUFBY3hELEtBQWQsS0FBd0I7QUFDM0J3QyxpQkFBTyxDQUFDYyxLQUFSO0FBQ0g7QUFmTyxPQUFaO0FBaUJILEtBbEJEOztBQW9CQWQsV0FBTyxDQUFDaUIsbUJBQVIsR0FBK0JDLGVBQUQsSUFBcUI7QUFDL0NkLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZO0FBQ1I1RSxXQUFHLEVBQUVrRSxzQkFERztBQUVSVyxjQUFNLEVBQUUsTUFGQTtBQUdSM0YsWUFBSSxFQUFFO0FBQ0YyRCxlQUFLLEVBQUU0QyxlQUFlLENBQUNDLE9BQWhCLENBQXdCN0MsS0FEN0I7QUFFRjhDLHlCQUFlLEVBQUVGLGVBQWUsQ0FBQ0MsT0FBaEIsQ0FBd0JDLGVBRnZDO0FBR0ZDLHdCQUFjLEVBQUVILGVBQWUsQ0FBQ0MsT0FBaEIsQ0FBd0JFO0FBSHRDLFNBSEU7QUFRUlosZUFBTyxFQUFHYSxhQUFELElBQW1CO0FBQ3hCLGNBQUlDLE1BQU0sR0FBR0QsYUFBYSxDQUFDM0csSUFBM0I7O0FBRUEsY0FBSTJHLGFBQWEsQ0FBQ2IsT0FBZCxLQUEwQixJQUE5QixFQUFvQztBQUNoQ2UsMEJBQWMsR0FBR0QsTUFBTSxDQUFDLFdBQUQsQ0FBdkI7QUFDQXZCLG1CQUFPLENBQUN5QixlQUFSLENBQXdCRixNQUFNLENBQUMsaUJBQUQsQ0FBOUI7QUFDQXZDLGtCQUFNLENBQUMwQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QkgsY0FBdkI7QUFDSCxXQUpELE1BSU87QUFDSHhCLG1CQUFPLENBQUN5QixlQUFSLENBQXdCRixNQUF4QjtBQUNIO0FBQ0osU0FsQk87QUFtQlIvRCxhQUFLLEVBQUUsQ0FBQ3VELEdBQUQsRUFBTUMsTUFBTixFQUFjeEQsS0FBZCxLQUF3QjtBQUMzQndDLGlCQUFPLENBQUNjLEtBQVI7QUFDSDtBQXJCTyxPQUFaO0FBdUJILEtBeEJEOztBQTBCQWQsV0FBTyxDQUFDNEIsS0FBUjtBQUNILEdBckVEOztBQXVFQSxRQUFNQyxxQkFBcUIsR0FBR2xGLFFBQVEsQ0FBQ00sYUFBVCxDQUF1Qix5QkFBdkIsQ0FBOUI7QUFFQSxRQUFNNkUsYUFBYSxHQUFHRCxxQkFBcUIsSUFBSzVDLGVBQWUsSUFBSUEsZUFBZSxDQUFDQyxlQUFoQixFQUFuRTs7QUFDQSxNQUFJNEMsYUFBSixFQUFtQjtBQUNmRCx5QkFBcUIsQ0FBQzFDLEtBQXRCLENBQTRCQyxPQUE1QixHQUFzQyxPQUF0QztBQUNIOztBQUVEekMsVUFBUSxDQUFDTSxhQUFULENBQXVCLHlCQUF2QixFQUFrREssZ0JBQWxELENBQW1FLE9BQW5FLEVBQTZFeUUsR0FBRCxJQUFTO0FBQ2pGMUMsbUJBQWU7QUFDbEIsR0FGRDtBQUdILENBbEZBLENBQUQsQzs7Ozs7Ozs7Ozs7QUNBQSxTQUFTWSxPQUFULENBQWlCK0IsV0FBakIsRUFBOEJDLFlBQTlCLEVBQTRDQyxVQUE1QyxFQUF3REMsUUFBeEQsRUFBa0U7QUFDOUQsU0FBTztBQUNISCxlQUFXLEVBQUVBLFdBRFY7QUFFSEMsZ0JBQVksRUFBRUEsWUFGWDtBQUdIRyxxQkFBaUIsRUFBRSxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFlBQXBCLEVBQWtDLE1BQWxDLEVBQTBDLE1BQTFDLENBSGhCO0FBSUhDLHdCQUFvQixFQUFFLENBQUMsYUFBRCxDQUpuQjtBQUtIQyxnQkFBWSxFQUFFLFVBTFg7QUFNSEMsZ0NBQTRCLEVBQUUsQ0FDMUIsZUFEMEIsRUFFMUIsT0FGMEIsQ0FOM0I7QUFVSEMsaUNBQTZCLEVBQUUsQ0FDM0IsZUFEMkIsRUFFM0IsT0FGMkIsQ0FWNUI7QUFjSEMsU0FBSyxFQUFFO0FBQ0hDLFdBQUssRUFBRVIsVUFESjtBQUVIUyxZQUFNLEVBQUVSLFFBRkw7QUFHSFMsVUFBSSxFQUFFO0FBSEg7QUFkSixHQUFQO0FBb0JILEM7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJmaWxlIjoibW9sbGllLXNob3AtZW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9tb2xsaWUtYWRtaW4vXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uLy4uL3NyYy9SZXNvdXJjZXMvYXNzZXRzL3Nob3AvZW50cnkuanNcIik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vY3NzL21haW4uc2Nzcyc7XG4vLyBpbXBvcnQgJ2h0dHBzOi8vanMubW9sbGllLmNvbS92MS9tb2xsaWUuanMnO1xuaW1wb3J0ICcuL2pzL21haW4nO1xuIiwiaW1wb3J0ICcuL21vbGxpZS9tYWluJztcbiIsIiQoZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxlY3RlZFZhbHVlID0gZmFsc2U7XG4gICAgbGV0IG1vbGxpZURhdGEgPSAkKFwiLm9ubGluZS1vbmxpbmUtcGF5bWVudF9fY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGluaXRpYWxPcmRlclRvdGFsID0gJCgnI3N5bGl1cy1zdW1tYXJ5LWdyYW5kLXRvdGFsJykudGV4dCgpO1xuICAgIGNvbnN0IGNhcmRBY3RpdmVDbGFzcyA9IFwib25saW5lLXBheW1lbnRfX2l0ZW0tLWFjdGl2ZVwiO1xuICAgIGNvbnN0IG9yZGVyVG90YWxSb3cgPSAkKCcjc3lsaXVzLXN1bW1hcnktZ3JhbmQtdG90YWwnKTtcbiAgICBjb25zdCBjb21wb25lbnRzID0gQm9vbGVhbihtb2xsaWVEYXRhLmRhdGEoJ2NvbXBvbmVudHMnKSk7XG5cbiAgICAkKCdpbnB1dFtpZCo9XCJzeWxpdXNfY2hlY2tvdXRfc2VsZWN0X3BheW1lbnRfXCJdW3R5cGU9cmFkaW9dJykub24oJ2NoYW5nZScsICh7Y3VycmVudFRhcmdldH0pID0+IHtcbiAgICAgICAgaWYgKCFjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9sbGllLXBheW1lbnRzJykpIHtcbiAgICAgICAgICAgIHJlc3RvcmVPcmRlclRvdGFsVmFsdWUoKVxuICAgICAgICAgICAgJChgLiR7Y2FyZEFjdGl2ZUNsYXNzfSBpbnB1dFt0eXBlPVwicmFkaW9cIl1gKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpXG4gICAgICAgICAgICAkKGAuJHtjYXJkQWN0aXZlQ2xhc3N9YCkucmVtb3ZlQ2xhc3MoY2FyZEFjdGl2ZUNsYXNzKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgICQoXCIub25saW5lLXBheW1lbnRfX2lucHV0XCIpLm9uKCdjaGFuZ2UnLCAoe2N1cnJlbnRUYXJnZXR9KSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbSA9ICQoY3VycmVudFRhcmdldCkucGFyZW50KCcub25saW5lLXBheW1lbnRfX2l0ZW0nKTtcbiAgICAgICAgY3VycmVudEl0ZW0uc2libGluZ3MoKS5yZW1vdmVDbGFzcygnb25saW5lLXBheW1lbnRfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICBjdXJyZW50SXRlbS5hZGRDbGFzcygnb25saW5lLXBheW1lbnRfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICBzZWxlY3RlZFZhbHVlID0gY3VycmVudFRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoISQoJy5tb2xsaWUtcGF5bWVudHMnKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoJy5tb2xsaWUtcGF5bWVudHMnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5kYXRhKCdmZWV1cmwnKSkge1xuICAgICAgICAgICAgZ2V0UGF5bWVudEZlZShjdXJyZW50SXRlbS5kYXRhKCdmZWV1cmwnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdldFBheW1lbnRGZWUodXJsKSB7XG4gICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRGZWVSb3cgPSAkKCcjYml0YmFnLXBheW1lbnRGZWUtcm93Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGF5bWVudEZlZVJvdy5sZW5ndGggJiYgZGF0YS52aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRGZWVSb3cucmVwbGFjZVdpdGgoZGF0YS52aWV3KVxuICAgICAgICAgICAgICAgICAgICBvcmRlclRvdGFsUm93LnRleHQoZGF0YS5vcmRlclRvdGFsKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS52aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNzeWxpdXMtY2hlY2tvdXQtc3VidG90YWwgLnVpLmxhcmdlLmhlYWRlcicpLmJlZm9yZShkYXRhLnZpZXcpXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyVG90YWxSb3cudGV4dChkYXRhLm9yZGVyVG90YWwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdG9yZU9yZGVyVG90YWxWYWx1ZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN0b3JlT3JkZXJUb3RhbFZhbHVlKCkge1xuICAgICAgICAkKCcjYml0YmFnLXBheW1lbnRGZWUtcm93JykucmVwbGFjZVdpdGgoJycpXG4gICAgICAgIG9yZGVyVG90YWxSb3cudGV4dChpbml0aWFsT3JkZXJUb3RhbClcbiAgICB9XG5cbiAgICBpZiAobW9sbGllRGF0YS5sZW5ndGggPiAwICYmIHRydWUgPT09IGNvbXBvbmVudHMpIHtcbiAgICAgICAgaW5pdGlhbGl6ZUNyZWRpdENhcnRGaWVsZHMoc2VsZWN0ZWRWYWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNyZWRpdENhcnRGaWVsZHMoc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICBjb25zdCBlbnZpcm9ubWVudCA9IG1vbGxpZURhdGEuZGF0YSgnZW52aXJvbm1lbnQnKTtcbiAgICAgICAgbGV0IHRlc3Rtb2RlID0gdHJ1ZTtcblxuICAgICAgICBpZiAoZW52aXJvbm1lbnQgPT09IDEpIHtcbiAgICAgICAgICAgIHRlc3Rtb2RlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2xsaWUgPSBNb2xsaWUoXG4gICAgICAgICAgICBtb2xsaWVEYXRhLmRhdGEoJ3Byb2ZpbGVfaWQnKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG1vbGxpZURhdGEuZGF0YSgnbG9jYWxlJyksXG4gICAgICAgICAgICAgICAgdGVzdG1vZGU6IHRlc3Rtb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwic3lsaXVzX2NoZWNrb3V0X3NlbGVjdF9wYXltZW50XCIpWzBdO1xuXG4gICAgICAgIGNvbnN0IGZvcm1FcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1lcnJvclwiKTtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0LXN0ZXBcIikgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzeWxpdXMtcGF5LWxpbmtcIik7XG4gICAgICAgIGNvbnN0IHRva2VuRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWQqPVwiX2RldGFpbHNfY2FydFRva2VuXCJdJyk7XG5cbiAgICAgICAgY29uc3QgY2FyZEhvbGRlciA9IG1vbGxpZS5jcmVhdGVDb21wb25lbnQoXCJjYXJkSG9sZGVyXCIpO1xuXG4gICAgICAgIGNhcmRIb2xkZXIubW91bnQoXCIjY2FyZC1ob2xkZXJcIik7XG5cbiAgICAgICAgY29uc3QgY2FyZEhvbGRlckVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkLWhvbGRlci1lcnJvclwiKTtcbiAgICAgICAgY2FyZEhvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5lcnJvciAmJiBldmVudC50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgY2FyZEhvbGRlckVycm9yLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRIb2xkZXJFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNhcmROdW1iZXIgPSBtb2xsaWUuY3JlYXRlQ29tcG9uZW50KFwiY2FyZE51bWJlclwiKTtcbiAgICAgICAgY2FyZE51bWJlci5tb3VudChcIiNjYXJkLW51bWJlclwiKTtcblxuICAgICAgICBjb25zdCBjYXJkTnVtYmVyRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtbnVtYmVyLWVycm9yXCIpO1xuXG4gICAgICAgIGNhcmROdW1iZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZXJyb3IgJiYgZXZlbnQudG91Y2hlZCkge1xuICAgICAgICAgICAgICAgIGNhcmROdW1iZXJFcnJvci50ZXh0Q29udGVudCA9IGV2ZW50LmVycm9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkTnVtYmVyRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBleHBpcnlEYXRlID0gbW9sbGllLmNyZWF0ZUNvbXBvbmVudChcImV4cGlyeURhdGVcIik7XG4gICAgICAgIGV4cGlyeURhdGUubW91bnQoXCIjZXhwaXJ5LWRhdGVcIik7XG5cbiAgICAgICAgY29uc3QgZXhwaXJ5RGF0ZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBpcnktZGF0ZS1lcnJvclwiKTtcblxuICAgICAgICBleHBpcnlEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmVycm9yICYmIGV2ZW50LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICBleHBpcnlEYXRlRXJyb3IudGV4dENvbnRlbnQgPSBldmVudC5lcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwaXJ5RGF0ZUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uQ29kZSA9IG1vbGxpZS5jcmVhdGVDb21wb25lbnQoXCJ2ZXJpZmljYXRpb25Db2RlXCIpO1xuICAgICAgICB2ZXJpZmljYXRpb25Db2RlLm1vdW50KFwiI3ZlcmlmaWNhdGlvbi1jb2RlXCIpO1xuXG4gICAgICAgIGNvbnN0IHZlcmlmaWNhdGlvbkNvZGVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyaWZpY2F0aW9uLWNvZGUtZXJyb3JcIik7XG5cbiAgICAgICAgdmVyaWZpY2F0aW9uQ29kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5lcnJvciAmJiBldmVudC50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uQ29kZUVycm9yLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbkNvZGVFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRpc2FibGVGb3JtKCkge1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGVuYWJsZUZvcm0oKSB7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoJChcIi5vbmxpbmUtcGF5bWVudF9faW5wdXQ6Y2hlY2tlZFwiKS52YWwoKSA9PT0gJ2NyZWRpdGNhcmQnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkaXNhYmxlRm9ybSgpO1xuXG4gICAgICAgICAgICAgICAgZm9ybUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHt0b2tlbiwgZXJyb3J9ID0gYXdhaXQgbW9sbGllLmNyZWF0ZVRva2VuKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlRm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRXJyb3IudGV4dENvbnRlbnQgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICB0b2tlbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2tlblwiKTtcbiAgICAgICAgICAgICAgICB0b2tlbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgdG9rZW5JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0b2tlbik7XG5cbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRva2VuSW5wdXQpO1xuICAgICAgICAgICAgICAgIHRva2VuRmllbGQudmFsdWUgPSB0b2tlbjtcblxuICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGxlUGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBsZXBheVwiKTtcblxuICAgIGlmIChhcHBsZVBheSkge1xuICAgICAgICBpZiAod2luZG93LkFwcGxlUGF5U2Vzc2lvbiB8fCBBcHBsZVBheVNlc3Npb24uY2FuTWFrZVBheW1lbnRzKCkpIHtcbiAgICAgICAgICAgIGFwcGxlUGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsIiQoZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcHBsZVBheVNlc3Npb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSAzO1xuICAgICAgICBjb25zdCBkaXZpZGVyID0gMTAwO1xuXG4gICAgICAgIGNvbnN0IGFwcGxlUGF5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbGxpZV9hcHBsZXBheV9idXR0b24nKTtcblxuICAgICAgICBjb25zdCBiaXRiYWdNb2xsaWVWYWxpZGF0ZU1lcmNoYW50VXJsID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXVybC12YWxpZGF0ZScpO1xuICAgICAgICBjb25zdCBiaXRiYWdNb2xsaWVQYXltZW50VXJsID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXVybC1wYXltZW50Jyk7XG4gICAgICAgIGNvbnN0IGJpdGJhZ01vbGxpZUN1cnJlbmN5ID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbmN5LW9yZGVyJyk7XG4gICAgICAgIGNvbnN0IGJpdGJhZ01vbGxpZU1lcmNoYW50TmFtZSA9IGFwcGxlUGF5QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1tZXJjaGFudC1uYW1lJyk7XG5cbiAgICAgICAgbGV0IGJpdGJhZ01vbGxpZVRvdGFsT3JkZXIgPSBhcHBsZVBheUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG90YWwtb3JkZXInKTtcbiAgICAgICAgYml0YmFnTW9sbGllVG90YWxPcmRlciA9IGJpdGJhZ01vbGxpZVRvdGFsT3JkZXIgLyBkaXZpZGVyO1xuICAgICAgICBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyID0gYml0YmFnTW9sbGllVG90YWxPcmRlci50b1N0cmluZygpO1xuXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBuZXcgQXBwbGVQYXlTZXNzaW9uKHZlcnNpb24sIHJlcXVlc3QoXG4gICAgICAgICAgICAnVVMnLFxuICAgICAgICAgICAgYml0YmFnTW9sbGllQ3VycmVuY3ksXG4gICAgICAgICAgICBiaXRiYWdNb2xsaWVNZXJjaGFudE5hbWUsXG4gICAgICAgICAgICBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyXG4gICAgICAgICkpO1xuXG4gICAgICAgIHNlc3Npb24ub252YWxpZGF0ZW1lcmNoYW50ID0gKGFwcGxlUGF5VmFsaWRhdGVNZXJjaGFudEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBiaXRiYWdNb2xsaWVWYWxpZGF0ZU1lcmNoYW50VXJsLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblVybDogYXBwbGVQYXlWYWxpZGF0ZU1lcmNoYW50RXZlbnQudmFsaWRhdGlvblVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChtZXJjaGFudFNlc3Npb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lcmNoYW50U2Vzc2lvbi5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmNvbXBsZXRlTWVyY2hhbnRWYWxpZGF0aW9uKEpTT04ucGFyc2UobWVyY2hhbnRTZXNzaW9uLmRhdGEpKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5hYm9ydCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoWEhSLCBzdGF0dXMsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb24uYWJvcnQoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgc2Vzc2lvbi5vbnBheW1lbnRhdXRob3JpemVkID0gKEFwcGxlUGF5UGF5bWVudCkgPT4ge1xuICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogYml0YmFnTW9sbGllUGF5bWVudFVybCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiBBcHBsZVBheVBheW1lbnQucGF5bWVudC50b2tlbixcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdDb250YWN0OiBBcHBsZVBheVBheW1lbnQucGF5bWVudC5zaGlwcGluZ0NvbnRhY3QsXG4gICAgICAgICAgICAgICAgICAgIGJpbGxpbmdDb250YWN0OiBBcHBsZVBheVBheW1lbnQucGF5bWVudC5iaWxsaW5nQ29udGFjdFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKGF1dGhvcml6YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF1dGhvcml6YXRpb24uZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0aG9yaXphdGlvbi5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdGlvblVybCA9IHJlc3VsdFsncmV0dXJuVXJsJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmNvbXBsZXRlUGF5bWVudChyZXN1bHRbJ3Jlc3BvbnNlVG9BcHBsZSddKVxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdGlvblVybFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5jb21wbGV0ZVBheW1lbnQocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogKFhIUiwgc3RhdHVzLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmFib3J0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgc2Vzc2lvbi5iZWdpbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGxlUGF5TWV0aG9kRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2xsaWVfYXBwbGVwYXlfYnV0dG9uJylcblxuICAgIGNvbnN0IGNhblNob3dCdXR0b24gPSBhcHBsZVBheU1ldGhvZEVsZW1lbnQgJiYgKEFwcGxlUGF5U2Vzc2lvbiAmJiBBcHBsZVBheVNlc3Npb24uY2FuTWFrZVBheW1lbnRzKCkpXG4gICAgaWYgKGNhblNob3dCdXR0b24pIHtcbiAgICAgICAgYXBwbGVQYXlNZXRob2RFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vbGxpZV9hcHBsZXBheV9idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgICAgYXBwbGVQYXlTZXNzaW9uKClcbiAgICB9KVxufSk7XG4iLCJmdW5jdGlvbiByZXF1ZXN0KGNvdW50cnlDb2RlLCBjdXJyZW5jeUNvZGUsIHRvdGFsTGFiZWwsIHN1YnRvdGFsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY291bnRyeUNvZGU6IGNvdW50cnlDb2RlLFxuICAgICAgICBjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSxcbiAgICAgICAgc3VwcG9ydGVkTmV0d29ya3M6IFsnYW1leCcsICdtYWVzdHJvJywgJ21hc3RlckNhcmQnLCAndmlzYScsICd2UGF5J10sXG4gICAgICAgIG1lcmNoYW50Q2FwYWJpbGl0aWVzOiBbJ3N1cHBvcnRzM0RTJ10sXG4gICAgICAgIHNoaXBwaW5nVHlwZTogJ3NoaXBwaW5nJyxcbiAgICAgICAgcmVxdWlyZWRCaWxsaW5nQ29udGFjdEZpZWxkczogW1xuICAgICAgICAgICAgJ3Bvc3RhbEFkZHJlc3MnLFxuICAgICAgICAgICAgJ2VtYWlsJ1xuICAgICAgICBdLFxuICAgICAgICByZXF1aXJlZFNoaXBwaW5nQ29udGFjdEZpZWxkczogW1xuICAgICAgICAgICAgJ3Bvc3RhbEFkZHJlc3MnLFxuICAgICAgICAgICAgJ2VtYWlsJ1xuICAgICAgICBdLFxuICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgbGFiZWw6IHRvdGFsTGFiZWwsXG4gICAgICAgICAgICBhbW91bnQ6IHN1YnRvdGFsLFxuICAgICAgICAgICAgdHlwZTogJ2ZpbmFsJ1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuL2FwcCc7XG5pbXBvcnQgJy4vYXBwbGVQYXlEaXJlY3QnO1xuaW1wb3J0ICcuL2FwcGxlUGF5UmVxdWVzdCc7XG4iXSwic291cmNlUm9vdCI6IiJ9