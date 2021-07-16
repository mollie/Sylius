/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../src/Resources/assets/shop/js/main.js":
/*!**************************************************!*\
  !*** ../../src/Resources/assets/shop/js/main.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mollie_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mollie/main */ "../../src/Resources/assets/shop/js/mollie/main.js");


/***/ }),

/***/ "../../src/Resources/assets/shop/js/mollie/app.js":
/*!********************************************************!*\
  !*** ../../src/Resources/assets/shop/js/mollie/app.js ***!
  \********************************************************/
/***/ (() => {

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
/*!*******************************************************************!*\
  !*** ../../src/Resources/assets/shop/js/mollie/applePayDirect.js ***!
  \*******************************************************************/
/***/ (() => {

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
/*!********************************************************************!*\
  !*** ../../src/Resources/assets/shop/js/mollie/applePayRequest.js ***!
  \********************************************************************/
/***/ (() => {

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
/*!*********************************************************!*\
  !*** ../../src/Resources/assets/shop/js/mollie/main.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "../../src/Resources/assets/shop/js/mollie/app.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _applePayDirect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applePayDirect */ "../../src/Resources/assets/shop/js/mollie/applePayDirect.js");
/* harmony import */ var _applePayDirect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_applePayDirect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _applePayRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applePayRequest */ "../../src/Resources/assets/shop/js/mollie/applePayRequest.js");
/* harmony import */ var _applePayRequest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_applePayRequest__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "../../src/Resources/assets/shop/scss/main.scss":
/*!******************************************************!*\
  !*** ../../src/Resources/assets/shop/scss/main.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************************!*\
  !*** ../../src/Resources/assets/shop/entry.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "../../src/Resources/assets/shop/scss/main.scss");
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main */ "../../src/Resources/assets/shop/js/main.js");


})();

/******/ })()
;
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwLmpzIiwid2VicGFjazovLy8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9hcHBsZVBheURpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwbGVQYXlSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9tYWluLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9lbnRyeS5qcyJdLCJuYW1lcyI6WyIkIiwic2VsZWN0ZWRWYWx1ZSIsIm1vbGxpZURhdGEiLCJpbml0aWFsT3JkZXJUb3RhbCIsInRleHQiLCJjYXJkQWN0aXZlQ2xhc3MiLCJvcmRlclRvdGFsUm93IiwiY29tcG9uZW50cyIsIkJvb2xlYW4iLCJkYXRhIiwib24iLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZXN0b3JlT3JkZXJUb3RhbFZhbHVlIiwicHJvcCIsInJlbW92ZUNsYXNzIiwiY3VycmVudEl0ZW0iLCJwYXJlbnQiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwidmFsdWUiLCJnZXRQYXltZW50RmVlIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicGF5bWVudEZlZVJvdyIsImxlbmd0aCIsInZpZXciLCJyZXBsYWNlV2l0aCIsIm9yZGVyVG90YWwiLCJiZWZvcmUiLCJpbml0aWFsaXplQ3JlZGl0Q2FydEZpZWxkcyIsImVudmlyb25tZW50IiwidGVzdG1vZGUiLCJtb2xsaWUiLCJNb2xsaWUiLCJsb2NhbGUiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZvcm1FcnJvciIsImdldEVsZW1lbnRCeUlkIiwic3VibWl0QnV0dG9uIiwidG9rZW5GaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJkSG9sZGVyIiwiY3JlYXRlQ29tcG9uZW50IiwibW91bnQiLCJjYXJkSG9sZGVyRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJlcnJvciIsInRvdWNoZWQiLCJ0ZXh0Q29udGVudCIsImNhcmROdW1iZXIiLCJjYXJkTnVtYmVyRXJyb3IiLCJleHBpcnlEYXRlIiwiZXhwaXJ5RGF0ZUVycm9yIiwidmVyaWZpY2F0aW9uQ29kZSIsInZlcmlmaWNhdGlvbkNvZGVFcnJvciIsImRpc2FibGVGb3JtIiwiZGlzYWJsZWQiLCJlbmFibGVGb3JtIiwidmFsIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVUb2tlbiIsInRva2VuIiwibWVzc2FnZSIsInJlbW92ZSIsInRva2VuSW5wdXQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJzdWJtaXQiLCJhcHBsZVBheSIsIndpbmRvdyIsIkFwcGxlUGF5U2Vzc2lvbiIsImNhbk1ha2VQYXltZW50cyIsInN0eWxlIiwiZGlzcGxheSIsImFwcGxlUGF5U2Vzc2lvbiIsInZlcnNpb24iLCJkaXZpZGVyIiwiYXBwbGVQYXlCdXR0b24iLCJiaXRiYWdNb2xsaWVWYWxpZGF0ZU1lcmNoYW50VXJsIiwiZ2V0QXR0cmlidXRlIiwiYml0YmFnTW9sbGllUGF5bWVudFVybCIsImJpdGJhZ01vbGxpZUN1cnJlbmN5IiwiYml0YmFnTW9sbGllTWVyY2hhbnROYW1lIiwiYml0YmFnTW9sbGllVG90YWxPcmRlciIsInRvU3RyaW5nIiwic2Vzc2lvbiIsInJlcXVlc3QiLCJvbnZhbGlkYXRlbWVyY2hhbnQiLCJhcHBsZVBheVZhbGlkYXRlTWVyY2hhbnRFdmVudCIsImpRdWVyeSIsImFqYXgiLCJtZXRob2QiLCJ2YWxpZGF0aW9uVXJsIiwidmFsaWRhdGlvblVSTCIsInN1Y2Nlc3MiLCJtZXJjaGFudFNlc3Npb24iLCJjb21wbGV0ZU1lcmNoYW50VmFsaWRhdGlvbiIsIkpTT04iLCJwYXJzZSIsImFib3J0IiwiWEhSIiwic3RhdHVzIiwib25wYXltZW50YXV0aG9yaXplZCIsIkFwcGxlUGF5UGF5bWVudCIsInBheW1lbnQiLCJzaGlwcGluZ0NvbnRhY3QiLCJiaWxsaW5nQ29udGFjdCIsImF1dGhvcml6YXRpb24iLCJyZXN1bHQiLCJyZWRpcmVjdGlvblVybCIsImNvbXBsZXRlUGF5bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsImJlZ2luIiwiYXBwbGVQYXlNZXRob2RFbGVtZW50IiwiY2FuU2hvd0J1dHRvbiIsImV2dCIsImNvdW50cnlDb2RlIiwiY3VycmVuY3lDb2RlIiwidG90YWxMYWJlbCIsInN1YnRvdGFsIiwic3VwcG9ydGVkTmV0d29ya3MiLCJtZXJjaGFudENhcGFiaWxpdGllcyIsInNoaXBwaW5nVHlwZSIsInJlcXVpcmVkQmlsbGluZ0NvbnRhY3RGaWVsZHMiLCJyZXF1aXJlZFNoaXBwaW5nQ29udGFjdEZpZWxkcyIsInRvdGFsIiwibGFiZWwiLCJhbW91bnQiLCJ0eXBlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDLFlBQVk7QUFDVixNQUFJQyxhQUFhLEdBQUcsS0FBcEI7QUFDQSxNQUFJQyxVQUFVLEdBQUdGLENBQUMsQ0FBQyxtQ0FBRCxD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O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTkFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQSIsImZpbGUiOiJwbHVnaW4tc2hvcC1lbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxlY3RlZFZhbHVlID0gZmFsc2U7XG4gICAgbGV0IG1vbGxpZURhdGEgPSAkKFwiLm9ubGluZS1vbmxpbmUtcGF5bWVudF9fY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGluaXRpYWxPcmRlclRvdGFsID0gJCgnI3N5bGl1cy1zdW1tYXJ5LWdyYW5kLXRvdGFsJykudGV4dCgpO1xuICAgIGNvbnN0IGNhcmRBY3RpdmVDbGFzcyA9IFwib25saW5lLXBheW1lbnRfX2l0ZW0tLWFjdGl2ZVwiO1xuICAgIGNvbnN0IG9yZGVyVG90YWxSb3cgPSAkKCcjc3lsaXVzLXN1bW1hcnktZ3JhbmQtdG90YWwnKTtcbiAgICBjb25zdCBjb21wb25lbnRzID0gQm9vbGVhbihtb2xsaWVEYXRhLmRhdGEoJ2NvbXBvbmVudHMnKSk7XG5cbiAgICAkKCdpbnB1dFtpZCo9XCJzeWxpdXNfY2hlY2tvdXRfc2VsZWN0X3BheW1lbnRfXCJdW3R5cGU9cmFkaW9dJykub24oJ2NoYW5nZScsICh7Y3VycmVudFRhcmdldH0pID0+IHtcbiAgICAgICAgaWYgKCFjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9sbGllLXBheW1lbnRzJykpIHtcbiAgICAgICAgICAgIHJlc3RvcmVPcmRlclRvdGFsVmFsdWUoKVxuICAgICAgICAgICAgJChgLiR7Y2FyZEFjdGl2ZUNsYXNzfSBpbnB1dFt0eXBlPVwicmFkaW9cIl1gKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpXG4gICAgICAgICAgICAkKGAuJHtjYXJkQWN0aXZlQ2xhc3N9YCkucmVtb3ZlQ2xhc3MoY2FyZEFjdGl2ZUNsYXNzKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgICQoXCIub25saW5lLXBheW1lbnRfX2lucHV0XCIpLm9uKCdjaGFuZ2UnLCAoe2N1cnJlbnRUYXJnZXR9KSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbSA9ICQoY3VycmVudFRhcmdldCkucGFyZW50KCcub25saW5lLXBheW1lbnRfX2l0ZW0nKTtcbiAgICAgICAgY3VycmVudEl0ZW0uc2libGluZ3MoKS5yZW1vdmVDbGFzcygnb25saW5lLXBheW1lbnRfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICBjdXJyZW50SXRlbS5hZGRDbGFzcygnb25saW5lLXBheW1lbnRfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICBzZWxlY3RlZFZhbHVlID0gY3VycmVudFRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoISQoJy5tb2xsaWUtcGF5bWVudHMnKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoJy5tb2xsaWUtcGF5bWVudHMnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5kYXRhKCdmZWV1cmwnKSkge1xuICAgICAgICAgICAgZ2V0UGF5bWVudEZlZShjdXJyZW50SXRlbS5kYXRhKCdmZWV1cmwnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdldFBheW1lbnRGZWUodXJsKSB7XG4gICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRGZWVSb3cgPSAkKCcjYml0YmFnLXBheW1lbnRGZWUtcm93Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGF5bWVudEZlZVJvdy5sZW5ndGggJiYgZGF0YS52aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRGZWVSb3cucmVwbGFjZVdpdGgoZGF0YS52aWV3KVxuICAgICAgICAgICAgICAgICAgICBvcmRlclRvdGFsUm93LnRleHQoZGF0YS5vcmRlclRvdGFsKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS52aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNzeWxpdXMtY2hlY2tvdXQtc3VidG90YWwgLnVpLmxhcmdlLmhlYWRlcicpLmJlZm9yZShkYXRhLnZpZXcpXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyVG90YWxSb3cudGV4dChkYXRhLm9yZGVyVG90YWwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdG9yZU9yZGVyVG90YWxWYWx1ZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN0b3JlT3JkZXJUb3RhbFZhbHVlKCkge1xuICAgICAgICAkKCcjYml0YmFnLXBheW1lbnRGZWUtcm93JykucmVwbGFjZVdpdGgoJycpXG4gICAgICAgIG9yZGVyVG90YWxSb3cudGV4dChpbml0aWFsT3JkZXJUb3RhbClcbiAgICB9XG5cbiAgICBpZiAobW9sbGllRGF0YS5sZW5ndGggPiAwICYmIHRydWUgPT09IGNvbXBvbmVudHMpIHtcbiAgICAgICAgaW5pdGlhbGl6ZUNyZWRpdENhcnRGaWVsZHMoc2VsZWN0ZWRWYWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNyZWRpdENhcnRGaWVsZHMoc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICBjb25zdCBlbnZpcm9ubWVudCA9IG1vbGxpZURhdGEuZGF0YSgnZW52aXJvbm1lbnQnKTtcbiAgICAgICAgbGV0IHRlc3Rtb2RlID0gdHJ1ZTtcblxuICAgICAgICBpZiAoZW52aXJvbm1lbnQgPT09IDEpIHtcbiAgICAgICAgICAgIHRlc3Rtb2RlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2xsaWUgPSBNb2xsaWUoXG4gICAgICAgICAgICBtb2xsaWVEYXRhLmRhdGEoJ3Byb2ZpbGVfaWQnKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG1vbGxpZURhdGEuZGF0YSgnbG9jYWxlJyksXG4gICAgICAgICAgICAgICAgdGVzdG1vZGU6IHRlc3Rtb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwic3lsaXVzX2NoZWNrb3V0X3NlbGVjdF9wYXltZW50XCIpWzBdO1xuXG4gICAgICAgIGNvbnN0IGZvcm1FcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1lcnJvclwiKTtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0LXN0ZXBcIikgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzeWxpdXMtcGF5LWxpbmtcIik7XG4gICAgICAgIGNvbnN0IHRva2VuRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWQqPVwiX2RldGFpbHNfY2FydFRva2VuXCJdJyk7XG5cbiAgICAgICAgY29uc3QgY2FyZEhvbGRlciA9IG1vbGxpZS5jcmVhdGVDb21wb25lbnQoXCJjYXJkSG9sZGVyXCIpO1xuXG4gICAgICAgIGNhcmRIb2xkZXIubW91bnQoXCIjY2FyZC1ob2xkZXJcIik7XG5cbiAgICAgICAgY29uc3QgY2FyZEhvbGRlckVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkLWhvbGRlci1lcnJvclwiKTtcbiAgICAgICAgY2FyZEhvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5lcnJvciAmJiBldmVudC50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgY2FyZEhvbGRlckVycm9yLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRIb2xkZXJFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNhcmROdW1iZXIgPSBtb2xsaWUuY3JlYXRlQ29tcG9uZW50KFwiY2FyZE51bWJlclwiKTtcbiAgICAgICAgY2FyZE51bWJlci5tb3VudChcIiNjYXJkLW51bWJlclwiKTtcblxuICAgICAgICBjb25zdCBjYXJkTnVtYmVyRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtbnVtYmVyLWVycm9yXCIpO1xuXG4gICAgICAgIGNhcmROdW1iZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZXJyb3IgJiYgZXZlbnQudG91Y2hlZCkge1xuICAgICAgICAgICAgICAgIGNhcmROdW1iZXJFcnJvci50ZXh0Q29udGVudCA9IGV2ZW50LmVycm9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkTnVtYmVyRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBleHBpcnlEYXRlID0gbW9sbGllLmNyZWF0ZUNvbXBvbmVudChcImV4cGlyeURhdGVcIik7XG4gICAgICAgIGV4cGlyeURhdGUubW91bnQoXCIjZXhwaXJ5LWRhdGVcIik7XG5cbiAgICAgICAgY29uc3QgZXhwaXJ5RGF0ZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBpcnktZGF0ZS1lcnJvclwiKTtcblxuICAgICAgICBleHBpcnlEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmVycm9yICYmIGV2ZW50LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICBleHBpcnlEYXRlRXJyb3IudGV4dENvbnRlbnQgPSBldmVudC5lcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwaXJ5RGF0ZUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uQ29kZSA9IG1vbGxpZS5jcmVhdGVDb21wb25lbnQoXCJ2ZXJpZmljYXRpb25Db2RlXCIpO1xuICAgICAgICB2ZXJpZmljYXRpb25Db2RlLm1vdW50KFwiI3ZlcmlmaWNhdGlvbi1jb2RlXCIpO1xuXG4gICAgICAgIGNvbnN0IHZlcmlmaWNhdGlvbkNvZGVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyaWZpY2F0aW9uLWNvZGUtZXJyb3JcIik7XG5cbiAgICAgICAgdmVyaWZpY2F0aW9uQ29kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5lcnJvciAmJiBldmVudC50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uQ29kZUVycm9yLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbkNvZGVFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRpc2FibGVGb3JtKCkge1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGVuYWJsZUZvcm0oKSB7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoJChcIi5vbmxpbmUtcGF5bWVudF9faW5wdXQ6Y2hlY2tlZFwiKS52YWwoKSA9PT0gJ2NyZWRpdGNhcmQnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkaXNhYmxlRm9ybSgpO1xuXG4gICAgICAgICAgICAgICAgZm9ybUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHt0b2tlbiwgZXJyb3J9ID0gYXdhaXQgbW9sbGllLmNyZWF0ZVRva2VuKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlRm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRXJyb3IudGV4dENvbnRlbnQgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICB0b2tlbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2tlblwiKTtcbiAgICAgICAgICAgICAgICB0b2tlbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgdG9rZW5JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0b2tlbik7XG5cbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRva2VuSW5wdXQpO1xuICAgICAgICAgICAgICAgIHRva2VuRmllbGQudmFsdWUgPSB0b2tlbjtcblxuICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGxlUGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBsZXBheVwiKTtcblxuICAgIGlmIChhcHBsZVBheSkge1xuICAgICAgICBpZiAod2luZG93LkFwcGxlUGF5U2Vzc2lvbiB8fCBBcHBsZVBheVNlc3Npb24uY2FuTWFrZVBheW1lbnRzKCkpIHtcbiAgICAgICAgICAgIGFwcGxlUGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsIiQoZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcHBsZVBheVNlc3Npb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSAzO1xuICAgICAgICBjb25zdCBkaXZpZGVyID0gMTAwO1xuXG4gICAgICAgIGNvbnN0IGFwcGxlUGF5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbGxpZV9hcHBsZXBheV9idXR0b24nKTtcblxuICAgICAgICBjb25zdCBiaXRiYWdNb2xsaWVWYWxpZGF0ZU1lcmNoYW50VXJsID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXVybC12YWxpZGF0ZScpO1xuICAgICAgICBjb25zdCBiaXRiYWdNb2xsaWVQYXltZW50VXJsID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXVybC1wYXltZW50Jyk7XG4gICAgICAgIGNvbnN0IGJpdGJhZ01vbGxpZUN1cnJlbmN5ID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbmN5LW9yZGVyJyk7XG4gICAgICAgIGNvbnN0IGJpdGJhZ01vbGxpZU1lcmNoYW50TmFtZSA9IGFwcGxlUGF5QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1tZXJjaGFudC1uYW1lJyk7XG5cbiAgICAgICAgbGV0IGJpdGJhZ01vbGxpZVRvdGFsT3JkZXIgPSBhcHBsZVBheUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG90YWwtb3JkZXInKTtcbiAgICAgICAgYml0YmFnTW9sbGllVG90YWxPcmRlciA9IGJpdGJhZ01vbGxpZVRvdGFsT3JkZXIgLyBkaXZpZGVyO1xuICAgICAgICBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyID0gYml0YmFnTW9sbGllVG90YWxPcmRlci50b1N0cmluZygpO1xuXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBuZXcgQXBwbGVQYXlTZXNzaW9uKHZlcnNpb24sIHJlcXVlc3QoXG4gICAgICAgICAgICAnVVMnLFxuICAgICAgICAgICAgYml0YmFnTW9sbGllQ3VycmVuY3ksXG4gICAgICAgICAgICBiaXRiYWdNb2xsaWVNZXJjaGFudE5hbWUsXG4gICAgICAgICAgICBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyXG4gICAgICAgICkpO1xuXG4gICAgICAgIHNlc3Npb24ub252YWxpZGF0ZW1lcmNoYW50ID0gKGFwcGxlUGF5VmFsaWRhdGVNZXJjaGFudEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBiaXRiYWdNb2xsaWVWYWxpZGF0ZU1lcmNoYW50VXJsLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblVybDogYXBwbGVQYXlWYWxpZGF0ZU1lcmNoYW50RXZlbnQudmFsaWRhdGlvblVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChtZXJjaGFudFNlc3Npb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lcmNoYW50U2Vzc2lvbi5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmNvbXBsZXRlTWVyY2hhbnRWYWxpZGF0aW9uKEpTT04ucGFyc2UobWVyY2hhbnRTZXNzaW9uLmRhdGEpKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5hYm9ydCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoWEhSLCBzdGF0dXMsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb24uYWJvcnQoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgc2Vzc2lvbi5vbnBheW1lbnRhdXRob3JpemVkID0gKEFwcGxlUGF5UGF5bWVudCkgPT4ge1xuICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogYml0YmFnTW9sbGllUGF5bWVudFVybCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiBBcHBsZVBheVBheW1lbnQucGF5bWVudC50b2tlbixcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdDb250YWN0OiBBcHBsZVBheVBheW1lbnQucGF5bWVudC5zaGlwcGluZ0NvbnRhY3QsXG4gICAgICAgICAgICAgICAgICAgIGJpbGxpbmdDb250YWN0OiBBcHBsZVBheVBheW1lbnQucGF5bWVudC5iaWxsaW5nQ29udGFjdFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKGF1dGhvcml6YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF1dGhvcml6YXRpb24uZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0aG9yaXphdGlvbi5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdGlvblVybCA9IHJlc3VsdFsncmV0dXJuVXJsJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmNvbXBsZXRlUGF5bWVudChyZXN1bHRbJ3Jlc3BvbnNlVG9BcHBsZSddKVxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdGlvblVybFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5jb21wbGV0ZVBheW1lbnQocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogKFhIUiwgc3RhdHVzLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmFib3J0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgc2Vzc2lvbi5iZWdpbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGxlUGF5TWV0aG9kRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2xsaWVfYXBwbGVwYXlfYnV0dG9uJylcblxuICAgIGNvbnN0IGNhblNob3dCdXR0b24gPSBhcHBsZVBheU1ldGhvZEVsZW1lbnQgJiYgKEFwcGxlUGF5U2Vzc2lvbiAmJiBBcHBsZVBheVNlc3Npb24uY2FuTWFrZVBheW1lbnRzKCkpXG4gICAgaWYgKGNhblNob3dCdXR0b24pIHtcbiAgICAgICAgYXBwbGVQYXlNZXRob2RFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vbGxpZV9hcHBsZXBheV9idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgICAgYXBwbGVQYXlTZXNzaW9uKClcbiAgICB9KVxufSk7XG4iLCJmdW5jdGlvbiByZXF1ZXN0KGNvdW50cnlDb2RlLCBjdXJyZW5jeUNvZGUsIHRvdGFsTGFiZWwsIHN1YnRvdGFsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY291bnRyeUNvZGU6IGNvdW50cnlDb2RlLFxuICAgICAgICBjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSxcbiAgICAgICAgc3VwcG9ydGVkTmV0d29ya3M6IFsnYW1leCcsICdtYWVzdHJvJywgJ21hc3RlckNhcmQnLCAndmlzYScsICd2UGF5J10sXG4gICAgICAgIG1lcmNoYW50Q2FwYWJpbGl0aWVzOiBbJ3N1cHBvcnRzM0RTJ10sXG4gICAgICAgIHNoaXBwaW5nVHlwZTogJ3NoaXBwaW5nJyxcbiAgICAgICAgcmVxdWlyZWRCaWxsaW5nQ29udGFjdEZpZWxkczogW1xuICAgICAgICAgICAgJ3Bvc3RhbEFkZHJlc3MnLFxuICAgICAgICAgICAgJ2VtYWlsJ1xuICAgICAgICBdLFxuICAgICAgICByZXF1aXJlZFNoaXBwaW5nQ29udGFjdEZpZWxkczogW1xuICAgICAgICAgICAgJ3Bvc3RhbEFkZHJlc3MnLFxuICAgICAgICAgICAgJ2VtYWlsJ1xuICAgICAgICBdLFxuICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgbGFiZWw6IHRvdGFsTGFiZWwsXG4gICAgICAgICAgICBhbW91bnQ6IHN1YnRvdGFsLFxuICAgICAgICAgICAgdHlwZTogJ2ZpbmFsJ1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuL2FwcCc7XG5pbXBvcnQgJy4vYXBwbGVQYXlEaXJlY3QnO1xuaW1wb3J0ICcuL2FwcGxlUGF5UmVxdWVzdCc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc29sZS5sb2coJ2R1cGEnKVxuaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcbmltcG9ydCAnLi9qcy9tYWluJztcbiJdLCJzb3VyY2VSb290IjoiIn0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwLmpzIiwid2VicGFjazovLy8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9hcHBsZVBheURpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwbGVQYXlSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9tYWluLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9lbnRyeS5qcyJdLCJuYW1lcyI6WyIkIiwic2VsZWN0ZWRWYWx1ZSIsIm1vbGxpZURhdGEiLCJpbml0aWFsT3JkZXJUb3RhbCIsInRleHQiLCJjYXJkQWN0aXZlQ2xhc3MiLCJvcmRlclRvdGFsUm93IiwiY29tcG9uZW50cyIsIkJvb2xlYW4iLCJkYXRhIiwib24iLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZXN0b3JlT3JkZXJUb3RhbFZhbHVlIiwicHJvcCIsInJlbW92ZUNsYXNzIiwiY3VycmVudEl0ZW0iLCJwYXJlbnQiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwidmFsdWUiLCJnZXRQYXltZW50RmVlIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicGF5bWVudEZlZVJvdyIsImxlbmd0aCIsInZpZXciLCJyZXBsYWNlV2l0aCIsIm9yZGVyVG90YWwiLCJiZWZvcmUiLCJpbml0aWFsaXplQ3JlZGl0Q2FydEZpZWxkcyIsImVudmlyb25tZW50IiwidGVzdG1vZGUiLCJtb2xsaWUiLCJNb2xsaWUiLCJsb2NhbGUiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZvcm1FcnJvciIsImdldEVsZW1lbnRCeUlkIiwic3VibWl0QnV0dG9uIiwidG9rZW5GaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJkSG9sZGVyIiwiY3JlYXRlQ29tcG9uZW50IiwibW91bnQiLCJjYXJkSG9sZGVyRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJlcnJvciIsInRvdWNoZWQiLCJ0ZXh0Q29udGVudCIsImNhcmROdW1iZXIiLCJjYXJkTnVtYmVyRXJyb3IiLCJleHBpcnlEYXRlIiwiZXhwaXJ5RGF0ZUVycm9yIiwidmVyaWZpY2F0aW9uQ29kZSIsInZlcmlmaWNhdGlvbkNvZGVFcnJvciIsImRpc2FibGVGb3JtIiwiZGlzYWJsZWQiLCJlbmFibGVGb3JtIiwidmFsIiwicHJldmVudERlZmF1bHQiLCJ0b2tlbiIsImNyZWF0ZVRva2VuIiwibWVzc2FnZSIsInJlbW92ZSIsInRva2VuSW5wdXQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJzdWJtaXQiLCJhcHBsZVBheSIsIndpbmRvdyIsIkFwcGxlUGF5U2Vzc2lvbiIsImNhbk1ha2VQYXltZW50cyIsInN0eWxlIiwiZGlzcGxheSIsImFwcGxlUGF5U2Vzc2lvbiIsInZlcnNpb24iLCJkaXZpZGVyIiwiYXBwbGVQYXlCdXR0b24iLCJiaXRiYWdNb2xsaWVWYWxpZGF0ZU1lcmNoYW50VXJsIiwiZ2V0QXR0cmlidXRlIiwiYml0YmFnTW9sbGllUGF5bWVudFVybCIsImJpdGJhZ01vbGxpZUN1cnJlbmN5IiwiYml0YmFnTW9sbGllTWVyY2hhbnROYW1lIiwiYml0YmFnTW9sbGllVG90YWxPcmRlciIsInRvU3RyaW5nIiwic2Vzc2lvbiIsInJlcXVlc3QiLCJvbnZhbGlkYXRlbWVyY2hhbnQiLCJhcHBsZVBheVZhbGlkYXRlTWVyY2hhbnRFdmVudCIsImpRdWVyeSIsImFqYXgiLCJtZXRob2QiLCJ2YWxpZGF0aW9uVXJsIiwidmFsaWRhdGlvblVSTCIsInN1Y2Nlc3MiLCJtZXJjaGFudFNlc3Npb24iLCJjb21wbGV0ZU1lcmNoYW50VmFsaWRhdGlvbiIsIkpTT04iLCJwYXJzZSIsImFib3J0IiwiWEhSIiwic3RhdHVzIiwib25wYXltZW50YXV0aG9yaXplZCIsIkFwcGxlUGF5UGF5bWVudCIsInBheW1lbnQiLCJzaGlwcGluZ0NvbnRhY3QiLCJiaWxsaW5nQ29udGFjdCIsImF1dGhvcml6YXRpb24iLCJyZXN1bHQiLCJyZWRpcmVjdGlvblVybCIsImNvbXBsZXRlUGF5bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsImJlZ2luIiwiYXBwbGVQYXlNZXRob2RFbGVtZW50IiwiY2FuU2hvd0J1dHRvbiIsImV2dCIsImNvdW50cnlDb2RlIiwiY3VycmVuY3lDb2RlIiwidG90YWxMYWJlbCIsInN1YnRvdGFsIiwic3VwcG9ydGVkTmV0d29ya3MiLCJtZXJjaGFudENhcGFiaWxpdGllcyIsInNoaXBwaW5nVHlwZSIsInJlcXVpcmVkQmlsbGluZ0NvbnRhY3RGaWVsZHMiLCJyZXF1aXJlZFNoaXBwaW5nQ29udGFjdEZpZWxkcyIsInRvdGFsIiwibGFiZWwiLCJhbW91bnQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLENBQUMsQ0FBQyxZQUFZO0FBQ1YsTUFBSUMsYUFBYSxHQUFHLEtBQXBCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHRixDQUFDLENBQUMsbUNBQUQsQ0FBbEI7QUFDQSxRQUFNRyxpQkFB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V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05BIiwiZmlsZSI6InBsdWdpbi1zaG9wLWVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHNlbGVjdGVkVmFsdWUgPSBmYWxzZTtcbiAgICBsZXQgbW9sbGllRGF0YSA9ICQoXCIub25saW5lLW9ubGluZS1wYXltZW50X19jb250YWluZXJcIik7XG4gICAgY29uc3QgaW5pdGlhbE9yZGVyVG90YWwgPSAkKCcjc3lsaXVzLXN1bW1hcnktZ3JhbmQtdG90YWwnKS50ZXh0KCk7XG4gICAgY29uc3QgY2FyZEFjdGl2ZUNsYXNzID0gXCJvbmxpbmUtcGF5bWVudF9faXRlbS0tYWN0aXZlXCI7XG4gICAgY29uc3Qgb3JkZXJUb3RhbFJvdyA9ICQoJyNzeWxpdXMtc3VtbWFyeS1ncmFuZC10b3RhbCcpO1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBCb29sZWFuKG1vbGxpZURhdGEuZGF0YSgnY29tcG9uZW50cycpKTtcblxuICAgICQoJ2lucHV0W2lkKj1cInN5bGl1c19jaGVja291dF9zZWxlY3RfcGF5bWVudF9cIl1bdHlwZT1yYWRpb10nKS5vbignY2hhbmdlJywgKHtjdXJyZW50VGFyZ2V0fSkgPT4ge1xuICAgICAgICBpZiAoIWN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2xsaWUtcGF5bWVudHMnKSkge1xuICAgICAgICAgICAgcmVzdG9yZU9yZGVyVG90YWxWYWx1ZSgpXG4gICAgICAgICAgICAkKGAuJHtjYXJkQWN0aXZlQ2xhc3N9IGlucHV0W3R5cGU9XCJyYWRpb1wiXWApLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICQoYC4ke2NhcmRBY3RpdmVDbGFzc31gKS5yZW1vdmVDbGFzcyhjYXJkQWN0aXZlQ2xhc3MpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgJChcIi5vbmxpbmUtcGF5bWVudF9faW5wdXRcIikub24oJ2NoYW5nZScsICh7Y3VycmVudFRhcmdldH0pID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnRJdGVtID0gJChjdXJyZW50VGFyZ2V0KS5wYXJlbnQoJy5vbmxpbmUtcGF5bWVudF9faXRlbScpO1xuICAgICAgICBjdXJyZW50SXRlbS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdvbmxpbmUtcGF5bWVudF9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgIGN1cnJlbnRJdGVtLmFkZENsYXNzKCdvbmxpbmUtcGF5bWVudF9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgIHNlbGVjdGVkVmFsdWUgPSBjdXJyZW50VGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGlmICghJCgnLm1vbGxpZS1wYXltZW50cycpLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgJCgnLm1vbGxpZS1wYXltZW50cycpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRJdGVtLmRhdGEoJ2ZlZXVybCcpKSB7XG4gICAgICAgICAgICBnZXRQYXltZW50RmVlKGN1cnJlbnRJdGVtLmRhdGEoJ2ZlZXVybCcpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZ2V0UGF5bWVudEZlZSh1cmwpIHtcbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF5bWVudEZlZVJvdyA9ICQoJyNiaXRiYWctcGF5bWVudEZlZS1yb3cnKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXltZW50RmVlUm93Lmxlbmd0aCAmJiBkYXRhLnZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF5bWVudEZlZVJvdy5yZXBsYWNlV2l0aChkYXRhLnZpZXcpXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyVG90YWxSb3cudGV4dChkYXRhLm9yZGVyVG90YWwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3N5bGl1cy1jaGVja291dC1zdWJ0b3RhbCAudWkubGFyZ2UuaGVhZGVyJykuYmVmb3JlKGRhdGEudmlldylcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJUb3RhbFJvdy50ZXh0KGRhdGEub3JkZXJUb3RhbClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN0b3JlT3JkZXJUb3RhbFZhbHVlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3RvcmVPcmRlclRvdGFsVmFsdWUoKSB7XG4gICAgICAgICQoJyNiaXRiYWctcGF5bWVudEZlZS1yb3cnKS5yZXBsYWNlV2l0aCgnJylcbiAgICAgICAgb3JkZXJUb3RhbFJvdy50ZXh0KGluaXRpYWxPcmRlclRvdGFsKVxuICAgIH1cblxuICAgIGlmIChtb2xsaWVEYXRhLmxlbmd0aCA+IDAgJiYgdHJ1ZSA9PT0gY29tcG9uZW50cykge1xuICAgICAgICBpbml0aWFsaXplQ3JlZGl0Q2FydEZpZWxkcyhzZWxlY3RlZFZhbHVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0aWFsaXplQ3JlZGl0Q2FydEZpZWxkcyhzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gbW9sbGllRGF0YS5kYXRhKCdlbnZpcm9ubWVudCcpO1xuICAgICAgICBsZXQgdGVzdG1vZGUgPSB0cnVlO1xuXG4gICAgICAgIGlmIChlbnZpcm9ubWVudCA9PT0gMSkge1xuICAgICAgICAgICAgdGVzdG1vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vbGxpZSA9IE1vbGxpZShcbiAgICAgICAgICAgIG1vbGxpZURhdGEuZGF0YSgncHJvZmlsZV9pZCcpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxvY2FsZTogbW9sbGllRGF0YS5kYXRhKCdsb2NhbGUnKSxcbiAgICAgICAgICAgICAgICB0ZXN0bW9kZTogdGVzdG1vZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJzeWxpdXNfY2hlY2tvdXRfc2VsZWN0X3BheW1lbnRcIilbMF07XG5cbiAgICAgICAgY29uc3QgZm9ybUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWVycm9yXCIpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5leHQtc3RlcFwiKSB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN5bGl1cy1wYXktbGlua1wiKTtcbiAgICAgICAgY29uc3QgdG9rZW5GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZCo9XCJfZGV0YWlsc19jYXJ0VG9rZW5cIl0nKTtcblxuICAgICAgICBjb25zdCBjYXJkSG9sZGVyID0gbW9sbGllLmNyZWF0ZUNvbXBvbmVudChcImNhcmRIb2xkZXJcIik7XG5cbiAgICAgICAgY2FyZEhvbGRlci5tb3VudChcIiNjYXJkLWhvbGRlclwiKTtcblxuICAgICAgICBjb25zdCBjYXJkSG9sZGVyRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtaG9sZGVyLWVycm9yXCIpO1xuICAgICAgICBjYXJkSG9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmVycm9yICYmIGV2ZW50LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICBjYXJkSG9sZGVyRXJyb3IudGV4dENvbnRlbnQgPSBldmVudC5lcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZEhvbGRlckVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2FyZE51bWJlciA9IG1vbGxpZS5jcmVhdGVDb21wb25lbnQoXCJjYXJkTnVtYmVyXCIpO1xuICAgICAgICBjYXJkTnVtYmVyLm1vdW50KFwiI2NhcmQtbnVtYmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGNhcmROdW1iZXJFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1udW1iZXItZXJyb3JcIik7XG5cbiAgICAgICAgY2FyZE51bWJlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5lcnJvciAmJiBldmVudC50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgY2FyZE51bWJlckVycm9yLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmROdW1iZXJFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGV4cGlyeURhdGUgPSBtb2xsaWUuY3JlYXRlQ29tcG9uZW50KFwiZXhwaXJ5RGF0ZVwiKTtcbiAgICAgICAgZXhwaXJ5RGF0ZS5tb3VudChcIiNleHBpcnktZGF0ZVwiKTtcblxuICAgICAgICBjb25zdCBleHBpcnlEYXRlRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cGlyeS1kYXRlLWVycm9yXCIpO1xuXG4gICAgICAgIGV4cGlyeURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZXJyb3IgJiYgZXZlbnQudG91Y2hlZCkge1xuICAgICAgICAgICAgICAgIGV4cGlyeURhdGVFcnJvci50ZXh0Q29udGVudCA9IGV2ZW50LmVycm9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHBpcnlEYXRlRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB2ZXJpZmljYXRpb25Db2RlID0gbW9sbGllLmNyZWF0ZUNvbXBvbmVudChcInZlcmlmaWNhdGlvbkNvZGVcIik7XG4gICAgICAgIHZlcmlmaWNhdGlvbkNvZGUubW91bnQoXCIjdmVyaWZpY2F0aW9uLWNvZGVcIik7XG5cbiAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uQ29kZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJpZmljYXRpb24tY29kZS1lcnJvclwiKTtcblxuICAgICAgICB2ZXJpZmljYXRpb25Db2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmVycm9yICYmIGV2ZW50LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25Db2RlRXJyb3IudGV4dENvbnRlbnQgPSBldmVudC5lcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uQ29kZUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gZGlzYWJsZUZvcm0oKSB7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZW5hYmxlRm9ybSgpIHtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmICgkKFwiLm9ubGluZS1wYXltZW50X19pbnB1dDpjaGVja2VkXCIpLnZhbCgpID09PSAnY3JlZGl0Y2FyZCcpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGRpc2FibGVGb3JtKCk7XG5cbiAgICAgICAgICAgICAgICBmb3JtRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qge3Rva2VuLCBlcnJvcn0gPSBhd2FpdCBtb2xsaWUuY3JlYXRlVG9rZW4oKTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVGb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1FcnJvci50ZXh0Q29udGVudCA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgICAgIHRva2VuSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRva2VuXCIpO1xuICAgICAgICAgICAgICAgIHRva2VuSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICB0b2tlbklucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHRva2VuKTtcblxuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodG9rZW5JbnB1dCk7XG4gICAgICAgICAgICAgICAgdG9rZW5GaWVsZC52YWx1ZSA9IHRva2VuO1xuXG4gICAgICAgICAgICAgICAgZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwbGVQYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcGxlcGF5XCIpO1xuXG4gICAgaWYgKGFwcGxlUGF5KSB7XG4gICAgICAgIGlmICh3aW5kb3cuQXBwbGVQYXlTZXNzaW9uIHx8IEFwcGxlUGF5U2Vzc2lvbi5jYW5NYWtlUGF5bWVudHMoKSkge1xuICAgICAgICAgICAgYXBwbGVQYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiJChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFwcGxlUGF5U2Vzc2lvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyc2lvbiA9IDM7XG4gICAgICAgIGNvbnN0IGRpdmlkZXIgPSAxMDA7XG5cbiAgICAgICAgY29uc3QgYXBwbGVQYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9sbGllX2FwcGxlcGF5X2J1dHRvbicpO1xuXG4gICAgICAgIGNvbnN0IGJpdGJhZ01vbGxpZVZhbGlkYXRlTWVyY2hhbnRVcmwgPSBhcHBsZVBheUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsLXZhbGlkYXRlJyk7XG4gICAgICAgIGNvbnN0IGJpdGJhZ01vbGxpZVBheW1lbnRVcmwgPSBhcHBsZVBheUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXJsLXBheW1lbnQnKTtcbiAgICAgICAgY29uc3QgYml0YmFnTW9sbGllQ3VycmVuY3kgPSBhcHBsZVBheUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VycmVuY3ktb3JkZXInKTtcbiAgICAgICAgY29uc3QgYml0YmFnTW9sbGllTWVyY2hhbnROYW1lID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLW1lcmNoYW50LW5hbWUnKTtcblxuICAgICAgICBsZXQgYml0YmFnTW9sbGllVG90YWxPcmRlciA9IGFwcGxlUGF5QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS10b3RhbC1vcmRlcicpO1xuICAgICAgICBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyID0gYml0YmFnTW9sbGllVG90YWxPcmRlciAvIGRpdmlkZXI7XG4gICAgICAgIGJpdGJhZ01vbGxpZVRvdGFsT3JkZXIgPSBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IG5ldyBBcHBsZVBheVNlc3Npb24odmVyc2lvbiwgcmVxdWVzdChcbiAgICAgICAgICAgICdVUycsXG4gICAgICAgICAgICBiaXRiYWdNb2xsaWVDdXJyZW5jeSxcbiAgICAgICAgICAgIGJpdGJhZ01vbGxpZU1lcmNoYW50TmFtZSxcbiAgICAgICAgICAgIGJpdGJhZ01vbGxpZVRvdGFsT3JkZXJcbiAgICAgICAgKSk7XG5cbiAgICAgICAgc2Vzc2lvbi5vbnZhbGlkYXRlbWVyY2hhbnQgPSAoYXBwbGVQYXlWYWxpZGF0ZU1lcmNoYW50RXZlbnQpID0+IHtcbiAgICAgICAgICAgIGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IGJpdGJhZ01vbGxpZVZhbGlkYXRlTWVyY2hhbnRVcmwsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uVXJsOiBhcHBsZVBheVZhbGlkYXRlTWVyY2hhbnRFdmVudC52YWxpZGF0aW9uVVJMLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKG1lcmNoYW50U2Vzc2lvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVyY2hhbnRTZXNzaW9uLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb24uY29tcGxldGVNZXJjaGFudFZhbGlkYXRpb24oSlNPTi5wYXJzZShtZXJjaGFudFNlc3Npb24uZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmFib3J0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IChYSFIsIHN0YXR1cywgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5hYm9ydCgpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzZXNzaW9uLm9ucGF5bWVudGF1dGhvcml6ZWQgPSAoQXBwbGVQYXlQYXltZW50KSA9PiB7XG4gICAgICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBiaXRiYWdNb2xsaWVQYXltZW50VXJsLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IEFwcGxlUGF5UGF5bWVudC5wYXltZW50LnRva2VuLFxuICAgICAgICAgICAgICAgICAgICBzaGlwcGluZ0NvbnRhY3Q6IEFwcGxlUGF5UGF5bWVudC5wYXltZW50LnNoaXBwaW5nQ29udGFjdCxcbiAgICAgICAgICAgICAgICAgICAgYmlsbGluZ0NvbnRhY3Q6IEFwcGxlUGF5UGF5bWVudC5wYXltZW50LmJpbGxpbmdDb250YWN0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoYXV0aG9yaXphdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXV0aG9yaXphdGlvbi5kYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdXRob3JpemF0aW9uLnN1Y2Nlc3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0aW9uVXJsID0gcmVzdWx0WydyZXR1cm5VcmwnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb24uY29tcGxldGVQYXltZW50KHJlc3VsdFsncmVzcG9uc2VUb0FwcGxlJ10pXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZGlyZWN0aW9uVXJsXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmNvbXBsZXRlUGF5bWVudChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoWEhSLCBzdGF0dXMsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb24uYWJvcnQoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBzZXNzaW9uLmJlZ2luKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYXBwbGVQYXlNZXRob2RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vbGxpZV9hcHBsZXBheV9idXR0b24nKVxuXG4gICAgY29uc3QgY2FuU2hvd0J1dHRvbiA9IGFwcGxlUGF5TWV0aG9kRWxlbWVudCAmJiAoQXBwbGVQYXlTZXNzaW9uICYmIEFwcGxlUGF5U2Vzc2lvbi5jYW5NYWtlUGF5bWVudHMoKSlcbiAgICBpZiAoY2FuU2hvd0J1dHRvbikge1xuICAgICAgICBhcHBsZVBheU1ldGhvZEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9sbGllX2FwcGxlcGF5X2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xuICAgICAgICBhcHBsZVBheVNlc3Npb24oKVxuICAgIH0pXG59KTtcbiIsImZ1bmN0aW9uIHJlcXVlc3QoY291bnRyeUNvZGUsIGN1cnJlbmN5Q29kZSwgdG90YWxMYWJlbCwgc3VidG90YWwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb3VudHJ5Q29kZTogY291bnRyeUNvZGUsXG4gICAgICAgIGN1cnJlbmN5Q29kZTogY3VycmVuY3lDb2RlLFxuICAgICAgICBzdXBwb3J0ZWROZXR3b3JrczogWydhbWV4JywgJ21hZXN0cm8nLCAnbWFzdGVyQ2FyZCcsICd2aXNhJywgJ3ZQYXknXSxcbiAgICAgICAgbWVyY2hhbnRDYXBhYmlsaXRpZXM6IFsnc3VwcG9ydHMzRFMnXSxcbiAgICAgICAgc2hpcHBpbmdUeXBlOiAnc2hpcHBpbmcnLFxuICAgICAgICByZXF1aXJlZEJpbGxpbmdDb250YWN0RmllbGRzOiBbXG4gICAgICAgICAgICAncG9zdGFsQWRkcmVzcycsXG4gICAgICAgICAgICAnZW1haWwnXG4gICAgICAgIF0sXG4gICAgICAgIHJlcXVpcmVkU2hpcHBpbmdDb250YWN0RmllbGRzOiBbXG4gICAgICAgICAgICAncG9zdGFsQWRkcmVzcycsXG4gICAgICAgICAgICAnZW1haWwnXG4gICAgICAgIF0sXG4gICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICBsYWJlbDogdG90YWxMYWJlbCxcbiAgICAgICAgICAgIGFtb3VudDogc3VidG90YWwsXG4gICAgICAgICAgICB0eXBlOiAnZmluYWwnXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vYXBwJztcbmltcG9ydCAnLi9hcHBsZVBheURpcmVjdCc7XG5pbXBvcnQgJy4vYXBwbGVQYXlSZXF1ZXN0JztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0ICcuL2pzL21haW4nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> MOL-134 disable tour if completed
