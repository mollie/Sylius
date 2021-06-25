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
/******/ 	__webpack_require__.p = "/build/mollie-shop/";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2VudHJ5LmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tYWluLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWRtaW4vRGVza3RvcC9QUkFDQS9TeWxpdXNNb2xsaWVQbHVnaW4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwbGVQYXlEaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9hcHBsZVBheVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hZG1pbi9EZXNrdG9wL1BSQUNBL1N5bGl1c01vbGxpZVBsdWdpbi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9tYWluLmpzIl0sIm5hbWVzIjpbIiQiLCJzZWxlY3RlZFZhbHVlIiwibW9sbGllRGF0YSIsImluaXRpYWxPcmRlclRvdGFsIiwidGV4dCIsImNhcmRBY3RpdmVDbGFzcyIsIm9yZGVyVG90YWxSb3ciLCJjb21wb25lbnRzIiwiQm9vbGVhbiIsImRhdGEiLCJvbiIsImN1cnJlbnRUYXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlc3RvcmVPcmRlclRvdGFsVmFsdWUiLCJwcm9wIiwicmVtb3ZlQ2xhc3MiLCJjdXJyZW50SXRlbSIsInBhcmVudCIsInNpYmxpbmdzIiwiYWRkQ2xhc3MiLCJ2YWx1ZSIsImdldFBheW1lbnRGZWUiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJwYXltZW50RmVlUm93IiwibGVuZ3RoIiwidmlldyIsInJlcGxhY2VXaXRoIiwib3JkZXJUb3RhbCIsImJlZm9yZSIsImluaXRpYWxpemVDcmVkaXRDYXJ0RmllbGRzIiwiZW52aXJvbm1lbnQiLCJ0ZXN0bW9kZSIsIm1vbGxpZSIsIk1vbGxpZSIsImxvY2FsZSIsImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlOYW1lIiwiZm9ybUVycm9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdWJtaXRCdXR0b24iLCJ0b2tlbkZpZWxkIiwicXVlcnlTZWxlY3RvciIsImNhcmRIb2xkZXIiLCJjcmVhdGVDb21wb25lbnQiLCJtb3VudCIsImNhcmRIb2xkZXJFcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImVycm9yIiwidG91Y2hlZCIsInRleHRDb250ZW50IiwiY2FyZE51bWJlciIsImNhcmROdW1iZXJFcnJvciIsImV4cGlyeURhdGUiLCJleHBpcnlEYXRlRXJyb3IiLCJ2ZXJpZmljYXRpb25Db2RlIiwidmVyaWZpY2F0aW9uQ29kZUVycm9yIiwiZGlzYWJsZUZvcm0iLCJkaXNhYmxlZCIsImVuYWJsZUZvcm0iLCJ2YWwiLCJwcmV2ZW50RGVmYXVsdCIsInRva2VuIiwiY3JlYXRlVG9rZW4iLCJtZXNzYWdlIiwicmVtb3ZlIiwidG9rZW5JbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsInN1Ym1pdCIsImFwcGxlUGF5Iiwid2luZG93IiwiQXBwbGVQYXlTZXNzaW9uIiwiY2FuTWFrZVBheW1lbnRzIiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwbGVQYXlTZXNzaW9uIiwidmVyc2lvbiIsImRpdmlkZXIiLCJhcHBsZVBheUJ1dHRvbiIsImJpdGJhZ01vbGxpZVZhbGlkYXRlTWVyY2hhbnRVcmwiLCJnZXRBdHRyaWJ1dGUiLCJiaXRiYWdNb2xsaWVQYXltZW50VXJsIiwiYml0YmFnTW9sbGllQ3VycmVuY3kiLCJiaXRiYWdNb2xsaWVNZXJjaGFudE5hbWUiLCJiaXRiYWdNb2xsaWVUb3RhbE9yZGVyIiwidG9TdHJpbmciLCJzZXNzaW9uIiwicmVxdWVzdCIsIm9udmFsaWRhdGVtZXJjaGFudCIsImFwcGxlUGF5VmFsaWRhdGVNZXJjaGFudEV2ZW50IiwialF1ZXJ5IiwiYWpheCIsIm1ldGhvZCIsInZhbGlkYXRpb25VcmwiLCJ2YWxpZGF0aW9uVVJMIiwic3VjY2VzcyIsIm1lcmNoYW50U2Vzc2lvbiIsImNvbXBsZXRlTWVyY2hhbnRWYWxpZGF0aW9uIiwiSlNPTiIsInBhcnNlIiwiYWJvcnQiLCJYSFIiLCJzdGF0dXMiLCJvbnBheW1lbnRhdXRob3JpemVkIiwiQXBwbGVQYXlQYXltZW50IiwicGF5bWVudCIsInNoaXBwaW5nQ29udGFjdCIsImJpbGxpbmdDb250YWN0IiwiYXV0aG9yaXphdGlvbiIsInJlc3VsdCIsInJlZGlyZWN0aW9uVXJsIiwiY29tcGxldGVQYXltZW50IiwibG9jYXRpb24iLCJocmVmIiwiYmVnaW4iLCJhcHBsZVBheU1ldGhvZEVsZW1lbnQiLCJjYW5TaG93QnV0dG9uIiwiZXZ0IiwiY291bnRyeUNvZGUiLCJjdXJyZW5jeUNvZGUiLCJ0b3RhbExhYmVsIiwic3VidG90YWwiLCJzdXBwb3J0ZWROZXR3b3JrcyIsIm1lcmNoYW50Q2FwYWJpbGl0aWVzIiwic2hpcHBpbmdUeXBlIiwicmVxdWlyZWRCaWxsaW5nQ29udGFjdEZpZWxkcyIsInJlcXVpcmVkU2hpcHBpbmdDb250YWN0RmllbGRzIiwidG90YWwiLCJsYWJlbCIsImFtb3VudCIsInR5cGUiXSwibWFw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OUQsU0FBTztBQUNISCxlQUFXLEVBQUVBLFdBRFY7QUFFSEMsZ0JBQVksRUFBRUEsWUFGWDtBQUdIRyxxQkFBaUIsRUFBRSxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFlBQXBCLEVBQWtDLE1BQWxDLEVBQTBDLE1BQTFDLENBSGhCO0FBSUhDLHdCQUFvQixFQUFFLENBQUMsYUFBRCxDQUpuQjtBQUtIQyxnQkFBWSxFQUFFLFVBTFg7QUFNSEMsZ0NBQTRCLEVBQUUsQ0FDMUIsZUFEMEIsRUFFMUIsT0FGMEIsQ0FOM0I7QUFVSEMsaUNBQTZCLEVBQUUsQ0FDM0IsZUFEMkIsRUFFM0IsT0FGMkIsQ0FWNUI7QUFjSEMsU0FBSyxFQUFFO0FBQ0hDLFdBQUssRUFBRVIsVUFESjtBQUVIUyxZQUFNLEVBQUVSLFFBRkw7QUFHSFMsVUFBSSxFQUFFO0FBSEg7QUFkSixHQUFQO0FBb0JILEM7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJmaWxlIjoibW9sbGllLXNob3AtZW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9tb2xsaWUtc2hvcC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi4vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9lbnRyeS5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9jc3MvbWFpbi5zY3NzJztcbi8vIGltcG9ydCAnaHR0cHM6Ly9qcy5tb2xsaWUuY29tL3YxL21vbGxpZS5qcyc7XG5pbXBvcnQgJy4vanMvbWFpbic7XG4iLCJpbXBvcnQgJy4vbW9sbGllL21haW4nO1xuIiwiJChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGVjdGVkVmFsdWUgPSBmYWxzZTtcbiAgICBsZXQgbW9sbGllRGF0YSA9ICQoXCIub25saW5lLW9ubGluZS1wYXltZW50X19jb250YWluZXJcIik7XG4gICAgY29uc3QgaW5pdGlhbE9yZGVyVG90YWwgPSAkKCcjc3lsaXVzLXN1bW1hcnktZ3JhbmQtdG90YWwnKS50ZXh0KCk7XG4gICAgY29uc3QgY2FyZEFjdGl2ZUNsYXNzID0gXCJvbmxpbmUtcGF5bWVudF9faXRlbS0tYWN0aXZlXCI7XG4gICAgY29uc3Qgb3JkZXJUb3RhbFJvdyA9ICQoJyNzeWxpdXMtc3VtbWFyeS1ncmFuZC10b3RhbCcpO1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBCb29sZWFuKG1vbGxpZURhdGEuZGF0YSgnY29tcG9uZW50cycpKTtcblxuICAgICQoJ2lucHV0W2lkKj1cInN5bGl1c19jaGVja291dF9zZWxlY3RfcGF5bWVudF9cIl1bdHlwZT1yYWRpb10nKS5vbignY2hhbmdlJywgKHtjdXJyZW50VGFyZ2V0fSkgPT4ge1xuICAgICAgICBpZiAoIWN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2xsaWUtcGF5bWVudHMnKSkge1xuICAgICAgICAgICAgcmVzdG9yZU9yZGVyVG90YWxWYWx1ZSgpXG4gICAgICAgICAgICAkKGAuJHtjYXJkQWN0aXZlQ2xhc3N9IGlucHV0W3R5cGU9XCJyYWRpb1wiXWApLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICQoYC4ke2NhcmRBY3RpdmVDbGFzc31gKS5yZW1vdmVDbGFzcyhjYXJkQWN0aXZlQ2xhc3MpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgJChcIi5vbmxpbmUtcGF5bWVudF9faW5wdXRcIikub24oJ2NoYW5nZScsICh7Y3VycmVudFRhcmdldH0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtID0gJChjdXJyZW50VGFyZ2V0KS5wYXJlbnQoJy5vbmxpbmUtcGF5bWVudF9faXRlbScpO1xuICAgICAgICBjdXJyZW50SXRlbS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdvbmxpbmUtcGF5bWVudF9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgIGN1cnJlbnRJdGVtLmFkZENsYXNzKCdvbmxpbmUtcGF5bWVudF9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgIHNlbGVjdGVkVmFsdWUgPSBjdXJyZW50VGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmICghJCgnLm1vbGxpZS1wYXltZW50cycpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgJCgnLm1vbGxpZS1wYXltZW50cycpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmRhdGEoJ2ZlZXVybCcpKSB7XG4gICAgICAgICAgICBnZXRQYXltZW50RmVlKGN1cnJlbnRJdGVtLmRhdGEoJ2ZlZXVybCcpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZ2V0UGF5bWVudEZlZSh1cmwpIHtcbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF5bWVudEZlZVJvdyA9ICQoJyNiaXRiYWctcGF5bWVudEZlZS1yb3cnKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXltZW50RmVlUm93Lmxlbmd0aCAmJiBkYXRhLnZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudEZlZVJvdy5yZXBsYWNlV2l0aChkYXRhLnZpZXcpXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyVG90YWxSb3cudGV4dChkYXRhLm9yZGVyVG90YWwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N5bGl1cy1jaGVja291dC1zdWJ0b3RhbCAudWkubGFyZ2UuaGVhZGVyJykuYmVmb3JlKGRhdGEudmlldylcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJUb3RhbFJvdy50ZXh0KGRhdGEub3JkZXJUb3RhbClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN0b3JlT3JkZXJUb3RhbFZhbHVlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3RvcmVPcmRlclRvdGFsVmFsdWUoKSB7XG4gICAgICAgICQoJyNiaXRiYWctcGF5bWVudEZlZS1yb3cnKS5yZXBsYWNlV2l0aCgnJylcbiAgICAgICAgb3JkZXJUb3RhbFJvdy50ZXh0KGluaXRpYWxPcmRlclRvdGFsKVxuICAgIH1cblxuICAgIGlmIChtb2xsaWVEYXRhLmxlbmd0aCA+IDAgJiYgdHJ1ZSA9PT0gY29tcG9uZW50cykge1xuICAgICAgICBpbml0aWFsaXplQ3JlZGl0Q2FydEZpZWxkcyhzZWxlY3RlZFZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplQ3JlZGl0Q2FydEZpZWxkcyhzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gbW9sbGllRGF0YS5kYXRhKCdlbnZpcm9ubWVudCcpO1xuICAgICAgICBsZXQgdGVzdG1vZGUgPSB0cnVlO1xuXG4gICAgICAgIGlmIChlbnZpcm9ubWVudCA9PT0gMSkge1xuICAgICAgICAgICAgdGVzdG1vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vbGxpZSA9IE1vbGxpZShcbiAgICAgICAgICAgIG1vbGxpZURhdGEuZGF0YSgncHJvZmlsZV9pZCcpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogbW9sbGllRGF0YS5kYXRhKCdsb2NhbGUnKSxcbiAgICAgICAgICAgICAgICB0ZXN0bW9kZTogdGVzdG1vZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJzeWxpdXNfY2hlY2tvdXRfc2VsZWN0X3BheW1lbnRcIilbMF07XG5cbiAgICAgICAgY29uc3QgZm9ybUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWVycm9yXCIpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHQtc3RlcFwiKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN5bGl1cy1wYXktbGlua1wiKTtcbiAgICAgICAgY29uc3QgdG9rZW5GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZCo9XCJfZGV0YWlsc19jYXJ0VG9rZW5cIl0nKTtcblxuICAgICAgICBjb25zdCBjYXJkSG9sZGVyID0gbW9sbGllLmNyZWF0ZUNvbXBvbmVudChcImNhcmRIb2xkZXJcIik7XG5cbiAgICAgICAgY2FyZEhvbGRlci5tb3VudChcIiNjYXJkLWhvbGRlclwiKTtcblxuICAgICAgICBjb25zdCBjYXJkSG9sZGVyRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtaG9sZGVyLWVycm9yXCIpO1xuICAgICAgICBjYXJkSG9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmVycm9yICYmIGV2ZW50LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICBjYXJkSG9sZGVyRXJyb3IudGV4dENvbnRlbnQgPSBldmVudC5lcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZEhvbGRlckVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2FyZE51bWJlciA9IG1vbGxpZS5jcmVhdGVDb21wb25lbnQoXCJjYXJkTnVtYmVyXCIpO1xuICAgICAgICBjYXJkTnVtYmVyLm1vdW50KFwiI2NhcmQtbnVtYmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGNhcmROdW1iZXJFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1udW1iZXItZXJyb3JcIik7XG5cbiAgICAgICAgY2FyZE51bWJlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5lcnJvciAmJiBldmVudC50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgY2FyZE51bWJlckVycm9yLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmROdW1iZXJFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGV4cGlyeURhdGUgPSBtb2xsaWUuY3JlYXRlQ29tcG9uZW50KFwiZXhwaXJ5RGF0ZVwiKTtcbiAgICAgICAgZXhwaXJ5RGF0ZS5tb3VudChcIiNleHBpcnktZGF0ZVwiKTtcblxuICAgICAgICBjb25zdCBleHBpcnlEYXRlRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGlyeS1kYXRlLWVycm9yXCIpO1xuXG4gICAgICAgIGV4cGlyeURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZXJyb3IgJiYgZXZlbnQudG91Y2hlZCkge1xuICAgICAgICAgICAgICAgIGV4cGlyeURhdGVFcnJvci50ZXh0Q29udGVudCA9IGV2ZW50LmVycm9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHBpcnlEYXRlRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB2ZXJpZmljYXRpb25Db2RlID0gbW9sbGllLmNyZWF0ZUNvbXBvbmVudChcInZlcmlmaWNhdGlvbkNvZGVcIik7XG4gICAgICAgIHZlcmlmaWNhdGlvbkNvZGUubW91bnQoXCIjdmVyaWZpY2F0aW9uLWNvZGVcIik7XG5cbiAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uQ29kZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJpZmljYXRpb24tY29kZS1lcnJvclwiKTtcblxuICAgICAgICB2ZXJpZmljYXRpb25Db2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmVycm9yICYmIGV2ZW50LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25Db2RlRXJyb3IudGV4dENvbnRlbnQgPSBldmVudC5lcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uQ29kZUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gZGlzYWJsZUZvcm0oKSB7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZW5hYmxlRm9ybSgpIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmICgkKFwiLm9ubGluZS1wYXltZW50X19pbnB1dDpjaGVja2VkXCIpLnZhbCgpID09PSAnY3JlZGl0Y2FyZCcpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGRpc2FibGVGb3JtKCk7XG5cbiAgICAgICAgICAgICAgICBmb3JtRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qge3Rva2VuLCBlcnJvcn0gPSBhd2FpdCBtb2xsaWUuY3JlYXRlVG9rZW4oKTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVGb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1FcnJvci50ZXh0Q29udGVudCA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIHRva2VuSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRva2VuXCIpO1xuICAgICAgICAgICAgICAgIHRva2VuSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICB0b2tlbklucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRva2VuKTtcblxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9rZW5JbnB1dCk7XG4gICAgICAgICAgICAgICAgdG9rZW5GaWVsZC52YWx1ZSA9IHRva2VuO1xuXG4gICAgICAgICAgICAgICAgZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwbGVQYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcGxlcGF5XCIpO1xuXG4gICAgaWYgKGFwcGxlUGF5KSB7XG4gICAgICAgIGlmICh3aW5kb3cuQXBwbGVQYXlTZXNzaW9uIHx8IEFwcGxlUGF5U2Vzc2lvbi5jYW5NYWtlUGF5bWVudHMoKSkge1xuICAgICAgICAgICAgYXBwbGVQYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiJChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFwcGxlUGF5U2Vzc2lvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IDM7XG4gICAgICAgIGNvbnN0IGRpdmlkZXIgPSAxMDA7XG5cbiAgICAgICAgY29uc3QgYXBwbGVQYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9sbGllX2FwcGxlcGF5X2J1dHRvbicpO1xuXG4gICAgICAgIGNvbnN0IGJpdGJhZ01vbGxpZVZhbGlkYXRlTWVyY2hhbnRVcmwgPSBhcHBsZVBheUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsLXZhbGlkYXRlJyk7XG4gICAgICAgIGNvbnN0IGJpdGJhZ01vbGxpZVBheW1lbnRVcmwgPSBhcHBsZVBheUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsLXBheW1lbnQnKTtcbiAgICAgICAgY29uc3QgYml0YmFnTW9sbGllQ3VycmVuY3kgPSBhcHBsZVBheUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVuY3ktb3JkZXInKTtcbiAgICAgICAgY29uc3QgYml0YmFnTW9sbGllTWVyY2hhbnROYW1lID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLW1lcmNoYW50LW5hbWUnKTtcblxuICAgICAgICBsZXQgYml0YmFnTW9sbGllVG90YWxPcmRlciA9IGFwcGxlUGF5QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS10b3RhbC1vcmRlcicpO1xuICAgICAgICBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyID0gYml0YmFnTW9sbGllVG90YWxPcmRlciAvIGRpdmlkZXI7XG4gICAgICAgIGJpdGJhZ01vbGxpZVRvdGFsT3JkZXIgPSBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IG5ldyBBcHBsZVBheVNlc3Npb24odmVyc2lvbiwgcmVxdWVzdChcbiAgICAgICAgICAgICdVUycsXG4gICAgICAgICAgICBiaXRiYWdNb2xsaWVDdXJyZW5jeSxcbiAgICAgICAgICAgIGJpdGJhZ01vbGxpZU1lcmNoYW50TmFtZSxcbiAgICAgICAgICAgIGJpdGJhZ01vbGxpZVRvdGFsT3JkZXJcbiAgICAgICAgKSk7XG5cbiAgICAgICAgc2Vzc2lvbi5vbnZhbGlkYXRlbWVyY2hhbnQgPSAoYXBwbGVQYXlWYWxpZGF0ZU1lcmNoYW50RXZlbnQpID0+IHtcbiAgICAgICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGJpdGJhZ01vbGxpZVZhbGlkYXRlTWVyY2hhbnRVcmwsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVXJsOiBhcHBsZVBheVZhbGlkYXRlTWVyY2hhbnRFdmVudC52YWxpZGF0aW9uVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKG1lcmNoYW50U2Vzc2lvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVyY2hhbnRTZXNzaW9uLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb24uY29tcGxldGVNZXJjaGFudFZhbGlkYXRpb24oSlNPTi5wYXJzZShtZXJjaGFudFNlc3Npb24uZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmFib3J0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IChYSFIsIHN0YXR1cywgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5hYm9ydCgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzZXNzaW9uLm9ucGF5bWVudGF1dGhvcml6ZWQgPSAoQXBwbGVQYXlQYXltZW50KSA9PiB7XG4gICAgICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBiaXRiYWdNb2xsaWVQYXltZW50VXJsLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IEFwcGxlUGF5UGF5bWVudC5wYXltZW50LnRva2VuLFxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ0NvbnRhY3Q6IEFwcGxlUGF5UGF5bWVudC5wYXltZW50LnNoaXBwaW5nQ29udGFjdCxcbiAgICAgICAgICAgICAgICAgICAgYmlsbGluZ0NvbnRhY3Q6IEFwcGxlUGF5UGF5bWVudC5wYXltZW50LmJpbGxpbmdDb250YWN0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoYXV0aG9yaXphdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXV0aG9yaXphdGlvbi5kYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdXRob3JpemF0aW9uLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0aW9uVXJsID0gcmVzdWx0WydyZXR1cm5VcmwnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb24uY29tcGxldGVQYXltZW50KHJlc3VsdFsncmVzcG9uc2VUb0FwcGxlJ10pXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0aW9uVXJsXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmNvbXBsZXRlUGF5bWVudChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoWEhSLCBzdGF0dXMsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb24uYWJvcnQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzZXNzaW9uLmJlZ2luKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwbGVQYXlNZXRob2RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vbGxpZV9hcHBsZXBheV9idXR0b24nKVxuXG4gICAgY29uc3QgY2FuU2hvd0J1dHRvbiA9IGFwcGxlUGF5TWV0aG9kRWxlbWVudCAmJiAoQXBwbGVQYXlTZXNzaW9uICYmIEFwcGxlUGF5U2Vzc2lvbi5jYW5NYWtlUGF5bWVudHMoKSlcbiAgICBpZiAoY2FuU2hvd0J1dHRvbikge1xuICAgICAgICBhcHBsZVBheU1ldGhvZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9sbGllX2FwcGxlcGF5X2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgICBhcHBsZVBheVNlc3Npb24oKVxuICAgIH0pXG59KTtcbiIsImZ1bmN0aW9uIHJlcXVlc3QoY291bnRyeUNvZGUsIGN1cnJlbmN5Q29kZSwgdG90YWxMYWJlbCwgc3VidG90YWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb3VudHJ5Q29kZTogY291bnRyeUNvZGUsXG4gICAgICAgIGN1cnJlbmN5Q29kZTogY3VycmVuY3lDb2RlLFxuICAgICAgICBzdXBwb3J0ZWROZXR3b3JrczogWydhbWV4JywgJ21hZXN0cm8nLCAnbWFzdGVyQ2FyZCcsICd2aXNhJywgJ3ZQYXknXSxcbiAgICAgICAgbWVyY2hhbnRDYXBhYmlsaXRpZXM6IFsnc3VwcG9ydHMzRFMnXSxcbiAgICAgICAgc2hpcHBpbmdUeXBlOiAnc2hpcHBpbmcnLFxuICAgICAgICByZXF1aXJlZEJpbGxpbmdDb250YWN0RmllbGRzOiBbXG4gICAgICAgICAgICAncG9zdGFsQWRkcmVzcycsXG4gICAgICAgICAgICAnZW1haWwnXG4gICAgICAgIF0sXG4gICAgICAgIHJlcXVpcmVkU2hpcHBpbmdDb250YWN0RmllbGRzOiBbXG4gICAgICAgICAgICAncG9zdGFsQWRkcmVzcycsXG4gICAgICAgICAgICAnZW1haWwnXG4gICAgICAgIF0sXG4gICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICBsYWJlbDogdG90YWxMYWJlbCxcbiAgICAgICAgICAgIGFtb3VudDogc3VidG90YWwsXG4gICAgICAgICAgICB0eXBlOiAnZmluYWwnXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vYXBwJztcbmltcG9ydCAnLi9hcHBsZVBheURpcmVjdCc7XG5pbXBvcnQgJy4vYXBwbGVQYXlSZXF1ZXN0JztcbiJdLCJzb3VyY2VSb290IjoiIn0=