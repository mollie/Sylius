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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

$(function () {
  var selectedValue = false;
  var mollieData = $(".online-online-payment__container");
  var initialOrderTotal = $('#sylius-summary-grand-total').text();
  var cardActiveClass = "online-payment__item--active";
  var orderTotalRow = $('#sylius-summary-grand-total');
  var components = Boolean(mollieData.data('components'));
  $('input[id*="sylius_checkout_select_payment_"][type=radio]').on('change', function (_ref) {
    var currentTarget = _ref.currentTarget;

    if (!currentTarget.classList.contains('mollie-payments')) {
      restoreOrderTotalValue();
      $(".".concat(cardActiveClass, " input[type=\"radio\"]")).prop('checked', false);
      $(".".concat(cardActiveClass)).removeClass(cardActiveClass);
    }
  });
  $(".online-payment__input").on('change', function (_ref2) {
    var currentTarget = _ref2.currentTarget;
    var currentItem = $(currentTarget).parent('.online-payment__item');
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
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (data) {
      var paymentFeeRow = $('#bitbag-paymentFee-row');

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
    var environment = mollieData.data('environment');
    var testmode = true;

    if (environment === 1) {
      testmode = false;
    }

    var mollie = Mollie(mollieData.data('profile_id'), {
      locale: mollieData.data('locale'),
      testmode: testmode
    });
    var form = document.getElementsByName("sylius_checkout_select_payment")[0];
    var formError = document.getElementById("form-error");
    var submitButton = document.getElementById("next-step") || document.getElementById("sylius-pay-link");
    var tokenField = document.querySelector('[id*="_details_cartToken"]');
    var cardHolder = mollie.createComponent("cardHolder");
    cardHolder.mount("#card-holder");
    var cardHolderError = document.getElementById("card-holder-error");
    cardHolder.addEventListener("change", function (event) {
      if (event.error && event.touched) {
        cardHolderError.textContent = event.error;
      } else {
        cardHolderError.textContent = "";
      }
    });
    var cardNumber = mollie.createComponent("cardNumber");
    cardNumber.mount("#card-number");
    var cardNumberError = document.getElementById("card-number-error");
    cardNumber.addEventListener("change", function (event) {
      if (event.error && event.touched) {
        cardNumberError.textContent = event.error;
      } else {
        cardNumberError.textContent = "";
      }
    });
    var expiryDate = mollie.createComponent("expiryDate");
    expiryDate.mount("#expiry-date");
    var expiryDateError = document.getElementById("expiry-date-error");
    expiryDate.addEventListener("change", function (event) {
      if (event.error && event.touched) {
        expiryDateError.textContent = event.error;
      } else {
        expiryDateError.textContent = "";
      }
    });
    var verificationCode = mollie.createComponent("verificationCode");
    verificationCode.mount("#verification-code");
    var verificationCodeError = document.getElementById("verification-code-error");
    verificationCode.addEventListener("change", function (event) {
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

    form.addEventListener("submit", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        var _yield$mollie$createT, token, error, tokenInput;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!($(".online-payment__input:checked").val() === 'creditcard')) {
                  _context.next = 21;
                  break;
                }

                event.preventDefault();
                disableForm();
                formError.textContent = "";
                _context.next = 6;
                return mollie.createToken();

              case 6:
                _yield$mollie$createT = _context.sent;
                token = _yield$mollie$createT.token;
                error = _yield$mollie$createT.error;

                if (!error) {
                  _context.next = 14;
                  break;
                }

                enableForm();
                formError.textContent = error.message;
                form.classList.remove('loading');
                return _context.abrupt("return");

              case 14:
                tokenInput = document.createElement("input");
                tokenInput.setAttribute("name", "token");
                tokenInput.setAttribute("type", "hidden");
                tokenInput.setAttribute("value", token);
                form.appendChild(tokenInput);
                tokenField.value = token;
                form.submit();

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());
  }

  var applePay = document.getElementById("applepay");

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
  var applePaySession = function applePaySession() {
    var version = 3;
    var divider = 100;
    var applePayButton = document.getElementById('mollie_applepay_button');
    var bitbagMollieValidateMerchantUrl = applePayButton.getAttribute('data-url-validate');
    var bitbagMolliePaymentUrl = applePayButton.getAttribute('data-url-payment');
    var bitbagMollieCurrency = applePayButton.getAttribute('data-currency-order');
    var bitbagMollieMerchantName = applePayButton.getAttribute('data-merchant-name');
    var bitbagMollieTotalOrder = applePayButton.getAttribute('data-total-order');
    bitbagMollieTotalOrder = bitbagMollieTotalOrder / divider;
    bitbagMollieTotalOrder = bitbagMollieTotalOrder.toString();
    var session = new ApplePaySession(version, request('US', bitbagMollieCurrency, bitbagMollieMerchantName, bitbagMollieTotalOrder));

    session.onvalidatemerchant = function (applePayValidateMerchantEvent) {
      jQuery.ajax({
        url: bitbagMollieValidateMerchantUrl,
        method: 'POST',
        data: {
          validationUrl: applePayValidateMerchantEvent.validationURL
        },
        success: function success(merchantSession) {
          if (merchantSession.success === true) {
            session.completeMerchantValidation(JSON.parse(merchantSession.data));
          } else {
            session.abort();
          }
        },
        error: function error(XHR, status, _error) {
          session.abort();
        }
      });
    };

    session.onpaymentauthorized = function (ApplePayPayment) {
      jQuery.ajax({
        url: bitbagMolliePaymentUrl,
        method: 'POST',
        data: {
          token: ApplePayPayment.payment.token,
          shippingContact: ApplePayPayment.payment.shippingContact,
          billingContact: ApplePayPayment.payment.billingContact
        },
        success: function success(authorization) {
          var result = authorization.data;

          if (authorization.success === true) {
            redirectionUrl = result['returnUrl'];
            session.completePayment(result['responseToApple']);
            window.location.href = redirectionUrl;
          } else {
            session.completePayment(result);
          }
        },
        error: function error(XHR, status, _error2) {
          session.abort();
        }
      });
    };

    session.begin();
  };

  var applePayMethodElement = document.querySelector('#mollie_applepay_button');
  var canShowButton = applePayMethodElement && ApplePaySession && ApplePaySession.canMakePayments();

  if (canShowButton) {
    applePayMethodElement.style.display = "block";
  }

  document.querySelector('#mollie_applepay_button').addEventListener('click', function (evt) {
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
console.log('dupa');


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwLmpzIiwid2VicGFjazovLy8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9hcHBsZVBheURpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9qcy9tb2xsaWUvYXBwbGVQYXlSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL2pzL21vbGxpZS9tYWluLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvUmVzb3VyY2VzL2Fzc2V0cy9zaG9wL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi4vc3JjL1Jlc291cmNlcy9hc3NldHMvc2hvcC9lbnRyeS5qcyJdLCJuYW1lcyI6WyIkIiwic2VsZWN0ZWRWYWx1ZSIsIm1vbGxpZURhdGEiLCJpbml0aWFsT3JkZXJUb3RhbCIsInRleHQiLCJjYXJkQWN0aXZlQ2xhc3MiLCJvcmRlclRvdGFsUm93IiwiY29tcG9uZW50cyIsIkJvb2xlYW4iLCJkYXRhIiwib24iLCJjdXJyZW50VGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZXN0b3JlT3JkZXJUb3RhbFZhbHVlIiwicHJvcCIsInJlbW92ZUNsYXNzIiwiY3VycmVudEl0ZW0iLCJwYXJlbnQiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwidmFsdWUiLCJnZXRQYXltZW50RmVlIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicGF5bWVudEZlZVJvdyIsImxlbmd0aCIsInZpZXciLCJyZXBsYWNlV2l0aCIsIm9yZGVyVG90YWwiLCJiZWZvcmUiLCJpbml0aWFsaXplQ3JlZGl0Q2FydEZpZWxkcyIsImVudmlyb25tZW50IiwidGVzdG1vZGUiLCJtb2xsaWUiLCJNb2xsaWUiLCJsb2NhbGUiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5TmFtZSIsImZvcm1FcnJvciIsImdldEVsZW1lbnRCeUlkIiwic3VibWl0QnV0dG9uIiwidG9rZW5GaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJkSG9sZGVyIiwiY3JlYXRlQ29tcG9uZW50IiwibW91bnQiLCJjYXJkSG9sZGVyRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJlcnJvciIsInRvdWNoZWQiLCJ0ZXh0Q29udGVudCIsImNhcmROdW1iZXIiLCJjYXJkTnVtYmVyRXJyb3IiLCJleHBpcnlEYXRlIiwiZXhwaXJ5RGF0ZUVycm9yIiwidmVyaWZpY2F0aW9uQ29kZSIsInZlcmlmaWNhdGlvbkNvZGVFcnJvciIsImRpc2FibGVGb3JtIiwiZGlzYWJsZWQiLCJlbmFibGVGb3JtIiwidmFsIiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVUb2tlbiIsInRva2VuIiwibWVzc2FnZSIsInJlbW92ZSIsInRva2VuSW5wdXQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJzdWJtaXQiLCJhcHBsZVBheSIsIndpbmRvdyIsIkFwcGxlUGF5U2Vzc2lvbiIsImNhbk1ha2VQYXltZW50cyIsInN0eWxlIiwiZGlzcGxheSIsImFwcGxlUGF5U2Vzc2lvbiIsInZlcnNpb24iLCJkaXZpZGVyIiwiYXBwbGVQYXlCdXR0b24iLCJiaXRiYWdNb2xsaWVWYWxpZGF0ZU1lcmNoYW50VXJsIiwiZ2V0QXR0cmlidXRlIiwiYml0YmFnTW9sbGllUGF5bWVudFVybCIsImJpdGJhZ01vbGxpZUN1cnJlbmN5IiwiYml0YmFnTW9sbGllTWVyY2hhbnROYW1lIiwiYml0YmFnTW9sbGllVG90YWxPcmRlciIsInRvU3RyaW5nIiwic2Vzc2lvbiIsInJlcXVlc3QiLCJvbnZhbGlkYXRlbWVyY2hhbnQiLCJhcHBsZVBheVZhbGlkYXRlTWVyY2hhbnRFdmVudCIsImpRdWVyeSIsImFqYXgiLCJtZXRob2QiLCJ2YWxpZGF0aW9uVXJsIiwidmFsaWRhdGlvblVSTCIsInN1Y2Nlc3MiLCJtZXJjaGFudFNlc3Npb24iLCJjb21wbGV0ZU1lcmNoYW50VmFsaWRhdGlvbiIsIkpTT04iLCJwYXJzZSIsImFib3J0IiwiWEhSIiwic3RhdHVzIiwib25wYXltZW50YXV0aG9yaXplZCIsIkFwcGxlUGF5UGF5bWVudCIsInBheW1lbnQiLCJzaGlwcGluZ0NvbnRhY3QiLCJiaWxsaW5nQ29udGFjdCIsImF1dGhvcml6YXRpb24iLCJyZXN1bHQiLCJyZWRpcmVjdGlvblVybCIsImNvbXBsZXRlUGF5bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsImJlZ2luIiwiYXBwbGVQYXlNZXRob2RFbGVtZW50IiwiY2FuU2hvd0J1dHRvbiIsImV2dCIsImNvdW50cnlDb2RlIiwiY3VycmVuY3lDb2RlIiwidG90YWxMYWJlbCIsInN1YnRvdGFsIiwic3VwcG9ydGVkTmV0d29ya3MiLCJtZXJjaGFudENhcGFiaWxpdGllcyIsInNoaXBwaW5nVHlwZSIsInJlcXVpcmVkQmlsbGluZ0NvbnRhY3RGaWVsZHMiLCJyZXF1aXJlZFNoaXBwaW5nQ29udGFjdEZpZWxkcyIsInRvdGFsIiwibGFiZWwiLCJhbW91bnQiLCJ0eXBlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsQ0FBQyxDQUFDLFlBQVk7QUFDVixNQUFJQyxhQUFhLEdBQUcsS0FBcEI7QUFDQSxNQUFJQyxVQUFVLEdBQUdGLENBQUMsQ0FBQyxtQ0FBRCxD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O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTkFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQSIsImZpbGUiOiJwbHVnaW4tc2hvcC1lbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxlY3RlZFZhbHVlID0gZmFsc2U7XG4gICAgbGV0IG1vbGxpZURhdGEgPSAkKFwiLm9ubGluZS1vbmxpbmUtcGF5bWVudF9fY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGluaXRpYWxPcmRlclRvdGFsID0gJCgnI3N5bGl1cy1zdW1tYXJ5LWdyYW5kLXRvdGFsJykudGV4dCgpO1xuICAgIGNvbnN0IGNhcmRBY3RpdmVDbGFzcyA9IFwib25saW5lLXBheW1lbnRfX2l0ZW0tLWFjdGl2ZVwiO1xuICAgIGNvbnN0IG9yZGVyVG90YWxSb3cgPSAkKCcjc3lsaXVzLXN1bW1hcnktZ3JhbmQtdG90YWwnKTtcbiAgICBjb25zdCBjb21wb25lbnRzID0gQm9vbGVhbihtb2xsaWVEYXRhLmRhdGEoJ2NvbXBvbmVudHMnKSk7XG5cbiAgICAkKCdpbnB1dFtpZCo9XCJzeWxpdXNfY2hlY2tvdXRfc2VsZWN0X3BheW1lbnRfXCJdW3R5cGU9cmFkaW9dJykub24oJ2NoYW5nZScsICh7Y3VycmVudFRhcmdldH0pID0+IHtcbiAgICAgICAgaWYgKCFjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbW9sbGllLXBheW1lbnRzJykpIHtcbiAgICAgICAgICAgIHJlc3RvcmVPcmRlclRvdGFsVmFsdWUoKVxuICAgICAgICAgICAgJChgLiR7Y2FyZEFjdGl2ZUNsYXNzfSBpbnB1dFt0eXBlPVwicmFkaW9cIl1gKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpXG4gICAgICAgICAgICAkKGAuJHtjYXJkQWN0aXZlQ2xhc3N9YCkucmVtb3ZlQ2xhc3MoY2FyZEFjdGl2ZUNsYXNzKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgICQoXCIub25saW5lLXBheW1lbnRfX2lucHV0XCIpLm9uKCdjaGFuZ2UnLCAoe2N1cnJlbnRUYXJnZXR9KSA9PiB7XG4gICAgICAgIGxldCBjdXJyZW50SXRlbSA9ICQoY3VycmVudFRhcmdldCkucGFyZW50KCcub25saW5lLXBheW1lbnRfX2l0ZW0nKTtcbiAgICAgICAgY3VycmVudEl0ZW0uc2libGluZ3MoKS5yZW1vdmVDbGFzcygnb25saW5lLXBheW1lbnRfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICBjdXJyZW50SXRlbS5hZGRDbGFzcygnb25saW5lLXBheW1lbnRfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgICBzZWxlY3RlZFZhbHVlID0gY3VycmVudFRhcmdldC52YWx1ZTtcblxuICAgICAgICBpZiAoISQoJy5tb2xsaWUtcGF5bWVudHMnKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgICAgICQoJy5tb2xsaWUtcGF5bWVudHMnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50SXRlbS5kYXRhKCdmZWV1cmwnKSkge1xuICAgICAgICAgICAgZ2V0UGF5bWVudEZlZShjdXJyZW50SXRlbS5kYXRhKCdmZWV1cmwnKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdldFBheW1lbnRGZWUodXJsKSB7XG4gICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBheW1lbnRGZWVSb3cgPSAkKCcjYml0YmFnLXBheW1lbnRGZWUtcm93Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGF5bWVudEZlZVJvdy5sZW5ndGggJiYgZGF0YS52aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHBheW1lbnRGZWVSb3cucmVwbGFjZVdpdGgoZGF0YS52aWV3KVxuICAgICAgICAgICAgICAgICAgICBvcmRlclRvdGFsUm93LnRleHQoZGF0YS5vcmRlclRvdGFsKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS52aWV3KSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNzeWxpdXMtY2hlY2tvdXQtc3VidG90YWwgLnVpLmxhcmdlLmhlYWRlcicpLmJlZm9yZShkYXRhLnZpZXcpXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyVG90YWxSb3cudGV4dChkYXRhLm9yZGVyVG90YWwpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdG9yZU9yZGVyVG90YWxWYWx1ZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN0b3JlT3JkZXJUb3RhbFZhbHVlKCkge1xuICAgICAgICAkKCcjYml0YmFnLXBheW1lbnRGZWUtcm93JykucmVwbGFjZVdpdGgoJycpXG4gICAgICAgIG9yZGVyVG90YWxSb3cudGV4dChpbml0aWFsT3JkZXJUb3RhbClcbiAgICB9XG5cbiAgICBpZiAobW9sbGllRGF0YS5sZW5ndGggPiAwICYmIHRydWUgPT09IGNvbXBvbmVudHMpIHtcbiAgICAgICAgaW5pdGlhbGl6ZUNyZWRpdENhcnRGaWVsZHMoc2VsZWN0ZWRWYWx1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZUNyZWRpdENhcnRGaWVsZHMoc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICBjb25zdCBlbnZpcm9ubWVudCA9IG1vbGxpZURhdGEuZGF0YSgnZW52aXJvbm1lbnQnKTtcbiAgICAgICAgbGV0IHRlc3Rtb2RlID0gdHJ1ZTtcblxuICAgICAgICBpZiAoZW52aXJvbm1lbnQgPT09IDEpIHtcbiAgICAgICAgICAgIHRlc3Rtb2RlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2xsaWUgPSBNb2xsaWUoXG4gICAgICAgICAgICBtb2xsaWVEYXRhLmRhdGEoJ3Byb2ZpbGVfaWQnKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG1vbGxpZURhdGEuZGF0YSgnbG9jYWxlJyksXG4gICAgICAgICAgICAgICAgdGVzdG1vZGU6IHRlc3Rtb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwic3lsaXVzX2NoZWNrb3V0X3NlbGVjdF9wYXltZW50XCIpWzBdO1xuXG4gICAgICAgIGNvbnN0IGZvcm1FcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1lcnJvclwiKTtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0LXN0ZXBcIikgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzeWxpdXMtcGF5LWxpbmtcIik7XG4gICAgICAgIGNvbnN0IHRva2VuRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaWQqPVwiX2RldGFpbHNfY2FydFRva2VuXCJdJyk7XG5cbiAgICAgICAgY29uc3QgY2FyZEhvbGRlciA9IG1vbGxpZS5jcmVhdGVDb21wb25lbnQoXCJjYXJkSG9sZGVyXCIpO1xuXG4gICAgICAgIGNhcmRIb2xkZXIubW91bnQoXCIjY2FyZC1ob2xkZXJcIik7XG5cbiAgICAgICAgY29uc3QgY2FyZEhvbGRlckVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkLWhvbGRlci1lcnJvclwiKTtcbiAgICAgICAgY2FyZEhvbGRlci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5lcnJvciAmJiBldmVudC50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgY2FyZEhvbGRlckVycm9yLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRIb2xkZXJFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNhcmROdW1iZXIgPSBtb2xsaWUuY3JlYXRlQ29tcG9uZW50KFwiY2FyZE51bWJlclwiKTtcbiAgICAgICAgY2FyZE51bWJlci5tb3VudChcIiNjYXJkLW51bWJlclwiKTtcblxuICAgICAgICBjb25zdCBjYXJkTnVtYmVyRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtbnVtYmVyLWVycm9yXCIpO1xuXG4gICAgICAgIGNhcmROdW1iZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZXJyb3IgJiYgZXZlbnQudG91Y2hlZCkge1xuICAgICAgICAgICAgICAgIGNhcmROdW1iZXJFcnJvci50ZXh0Q29udGVudCA9IGV2ZW50LmVycm9yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkTnVtYmVyRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBleHBpcnlEYXRlID0gbW9sbGllLmNyZWF0ZUNvbXBvbmVudChcImV4cGlyeURhdGVcIik7XG4gICAgICAgIGV4cGlyeURhdGUubW91bnQoXCIjZXhwaXJ5LWRhdGVcIik7XG5cbiAgICAgICAgY29uc3QgZXhwaXJ5RGF0ZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBpcnktZGF0ZS1lcnJvclwiKTtcblxuICAgICAgICBleHBpcnlEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmVycm9yICYmIGV2ZW50LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICBleHBpcnlEYXRlRXJyb3IudGV4dENvbnRlbnQgPSBldmVudC5lcnJvcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwaXJ5RGF0ZUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdmVyaWZpY2F0aW9uQ29kZSA9IG1vbGxpZS5jcmVhdGVDb21wb25lbnQoXCJ2ZXJpZmljYXRpb25Db2RlXCIpO1xuICAgICAgICB2ZXJpZmljYXRpb25Db2RlLm1vdW50KFwiI3ZlcmlmaWNhdGlvbi1jb2RlXCIpO1xuXG4gICAgICAgIGNvbnN0IHZlcmlmaWNhdGlvbkNvZGVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyaWZpY2F0aW9uLWNvZGUtZXJyb3JcIik7XG5cbiAgICAgICAgdmVyaWZpY2F0aW9uQ29kZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC5lcnJvciAmJiBldmVudC50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uQ29kZUVycm9yLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3I7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZlcmlmaWNhdGlvbkNvZGVFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRpc2FibGVGb3JtKCkge1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGVuYWJsZUZvcm0oKSB7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoJChcIi5vbmxpbmUtcGF5bWVudF9faW5wdXQ6Y2hlY2tlZFwiKS52YWwoKSA9PT0gJ2NyZWRpdGNhcmQnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkaXNhYmxlRm9ybSgpO1xuXG4gICAgICAgICAgICAgICAgZm9ybUVycm9yLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHt0b2tlbiwgZXJyb3J9ID0gYXdhaXQgbW9sbGllLmNyZWF0ZVRva2VuKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlRm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICBmb3JtRXJyb3IudGV4dENvbnRlbnQgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW5JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICB0b2tlbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0b2tlblwiKTtcbiAgICAgICAgICAgICAgICB0b2tlbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgdG9rZW5JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB0b2tlbik7XG5cbiAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHRva2VuSW5wdXQpO1xuICAgICAgICAgICAgICAgIHRva2VuRmllbGQudmFsdWUgPSB0b2tlbjtcblxuICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGxlUGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBsZXBheVwiKTtcblxuICAgIGlmIChhcHBsZVBheSkge1xuICAgICAgICBpZiAod2luZG93LkFwcGxlUGF5U2Vzc2lvbiB8fCBBcHBsZVBheVNlc3Npb24uY2FuTWFrZVBheW1lbnRzKCkpIHtcbiAgICAgICAgICAgIGFwcGxlUGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiIsIiQoZnVuY3Rpb24gKCkge1xuICAgIGxldCBhcHBsZVBheVNlc3Npb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSAzO1xuICAgICAgICBjb25zdCBkaXZpZGVyID0gMTAwO1xuXG4gICAgICAgIGNvbnN0IGFwcGxlUGF5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbGxpZV9hcHBsZXBheV9idXR0b24nKTtcblxuICAgICAgICBjb25zdCBiaXRiYWdNb2xsaWVWYWxpZGF0ZU1lcmNoYW50VXJsID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXVybC12YWxpZGF0ZScpO1xuICAgICAgICBjb25zdCBiaXRiYWdNb2xsaWVQYXltZW50VXJsID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLXVybC1wYXltZW50Jyk7XG4gICAgICAgIGNvbnN0IGJpdGJhZ01vbGxpZUN1cnJlbmN5ID0gYXBwbGVQYXlCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWN1cnJlbmN5LW9yZGVyJyk7XG4gICAgICAgIGNvbnN0IGJpdGJhZ01vbGxpZU1lcmNoYW50TmFtZSA9IGFwcGxlUGF5QnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1tZXJjaGFudC1uYW1lJyk7XG5cbiAgICAgICAgbGV0IGJpdGJhZ01vbGxpZVRvdGFsT3JkZXIgPSBhcHBsZVBheUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG90YWwtb3JkZXInKTtcbiAgICAgICAgYml0YmFnTW9sbGllVG90YWxPcmRlciA9IGJpdGJhZ01vbGxpZVRvdGFsT3JkZXIgLyBkaXZpZGVyO1xuICAgICAgICBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyID0gYml0YmFnTW9sbGllVG90YWxPcmRlci50b1N0cmluZygpO1xuXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBuZXcgQXBwbGVQYXlTZXNzaW9uKHZlcnNpb24sIHJlcXVlc3QoXG4gICAgICAgICAgICAnVVMnLFxuICAgICAgICAgICAgYml0YmFnTW9sbGllQ3VycmVuY3ksXG4gICAgICAgICAgICBiaXRiYWdNb2xsaWVNZXJjaGFudE5hbWUsXG4gICAgICAgICAgICBiaXRiYWdNb2xsaWVUb3RhbE9yZGVyXG4gICAgICAgICkpO1xuXG4gICAgICAgIHNlc3Npb24ub252YWxpZGF0ZW1lcmNoYW50ID0gKGFwcGxlUGF5VmFsaWRhdGVNZXJjaGFudEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiBiaXRiYWdNb2xsaWVWYWxpZGF0ZU1lcmNoYW50VXJsLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblVybDogYXBwbGVQYXlWYWxpZGF0ZU1lcmNoYW50RXZlbnQudmFsaWRhdGlvblVSTCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChtZXJjaGFudFNlc3Npb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lcmNoYW50U2Vzc2lvbi5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmNvbXBsZXRlTWVyY2hhbnRWYWxpZGF0aW9uKEpTT04ucGFyc2UobWVyY2hhbnRTZXNzaW9uLmRhdGEpKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5hYm9ydCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiAoWEhSLCBzdGF0dXMsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb24uYWJvcnQoKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgc2Vzc2lvbi5vbnBheW1lbnRhdXRob3JpemVkID0gKEFwcGxlUGF5UGF5bWVudCkgPT4ge1xuICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogYml0YmFnTW9sbGllUGF5bWVudFVybCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiBBcHBsZVBheVBheW1lbnQucGF5bWVudC50b2tlbixcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdDb250YWN0OiBBcHBsZVBheVBheW1lbnQucGF5bWVudC5zaGlwcGluZ0NvbnRhY3QsXG4gICAgICAgICAgICAgICAgICAgIGJpbGxpbmdDb250YWN0OiBBcHBsZVBheVBheW1lbnQucGF5bWVudC5iaWxsaW5nQ29udGFjdFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKGF1dGhvcml6YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF1dGhvcml6YXRpb24uZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0aG9yaXphdGlvbi5zdWNjZXNzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdGlvblVybCA9IHJlc3VsdFsncmV0dXJuVXJsJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmNvbXBsZXRlUGF5bWVudChyZXN1bHRbJ3Jlc3BvbnNlVG9BcHBsZSddKVxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZWRpcmVjdGlvblVybFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbi5jb21wbGV0ZVBheW1lbnQocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogKFhIUiwgc3RhdHVzLCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmFib3J0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgc2Vzc2lvbi5iZWdpbigpO1xuICAgIH1cblxuICAgIGNvbnN0IGFwcGxlUGF5TWV0aG9kRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2xsaWVfYXBwbGVwYXlfYnV0dG9uJylcblxuICAgIGNvbnN0IGNhblNob3dCdXR0b24gPSBhcHBsZVBheU1ldGhvZEVsZW1lbnQgJiYgKEFwcGxlUGF5U2Vzc2lvbiAmJiBBcHBsZVBheVNlc3Npb24uY2FuTWFrZVBheW1lbnRzKCkpXG4gICAgaWYgKGNhblNob3dCdXR0b24pIHtcbiAgICAgICAgYXBwbGVQYXlNZXRob2RFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vbGxpZV9hcHBsZXBheV9idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldnQpID0+IHtcbiAgICAgICAgYXBwbGVQYXlTZXNzaW9uKClcbiAgICB9KVxufSk7XG4iLCJmdW5jdGlvbiByZXF1ZXN0KGNvdW50cnlDb2RlLCBjdXJyZW5jeUNvZGUsIHRvdGFsTGFiZWwsIHN1YnRvdGFsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY291bnRyeUNvZGU6IGNvdW50cnlDb2RlLFxuICAgICAgICBjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSxcbiAgICAgICAgc3VwcG9ydGVkTmV0d29ya3M6IFsnYW1leCcsICdtYWVzdHJvJywgJ21hc3RlckNhcmQnLCAndmlzYScsICd2UGF5J10sXG4gICAgICAgIG1lcmNoYW50Q2FwYWJpbGl0aWVzOiBbJ3N1cHBvcnRzM0RTJ10sXG4gICAgICAgIHNoaXBwaW5nVHlwZTogJ3NoaXBwaW5nJyxcbiAgICAgICAgcmVxdWlyZWRCaWxsaW5nQ29udGFjdEZpZWxkczogW1xuICAgICAgICAgICAgJ3Bvc3RhbEFkZHJlc3MnLFxuICAgICAgICAgICAgJ2VtYWlsJ1xuICAgICAgICBdLFxuICAgICAgICByZXF1aXJlZFNoaXBwaW5nQ29udGFjdEZpZWxkczogW1xuICAgICAgICAgICAgJ3Bvc3RhbEFkZHJlc3MnLFxuICAgICAgICAgICAgJ2VtYWlsJ1xuICAgICAgICBdLFxuICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgbGFiZWw6IHRvdGFsTGFiZWwsXG4gICAgICAgICAgICBhbW91bnQ6IHN1YnRvdGFsLFxuICAgICAgICAgICAgdHlwZTogJ2ZpbmFsJ1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuL2FwcCc7XG5pbXBvcnQgJy4vYXBwbGVQYXlEaXJlY3QnO1xuaW1wb3J0ICcuL2FwcGxlUGF5UmVxdWVzdCc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc29sZS5sb2coJ2R1cGEnKVxuaW1wb3J0ICcuL3Njc3MvbWFpbi5zY3NzJztcbmltcG9ydCAnLi9qcy9tYWluJztcbiJdLCJzb3VyY2VSb290IjoiIn0=
