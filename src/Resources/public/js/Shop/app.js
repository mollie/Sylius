$(function () {
    let selectedValue = false;
    let mollieData = $(".online-online-payment__container");
    const initialOrderTotal = $('#sylius-summary-grand-total').text();
    const cardActiveClass = "online-payment__item--active";
    const orderTotalRow = $('#sylius-summary-grand-total');
    $('input[id*="sylius_checkout_select_payment_"][type=radio]').on('change', ({currentTarget}) => {
        if (!currentTarget.classList.contains('mollie-payments')) {
            restoreOrderTotalValue()
            $(`.${cardActiveClass} input[type="radio"]`).prop('checked', false)
            $(`.${cardActiveClass}`).removeClass(cardActiveClass)
        }
    })
    $(".online-payment__input").on('change', ({currentTarget}) => {
        let currentItem = $(currentTarget).parent('.online-payment__item');
        currentItem.siblings().removeClass('online-payment__item--active');
        currentItem.addClass('online-payment__item--active');
        selectedValue = currentTarget.value;
        if (!$('.mollie-payments').prop('checked')) {
            $('.mollie-payments').prop('checked', true)
        }
        if (currentItem.data('feeurl')) {
            getPaymentFee(currentItem.data('feeurl'));
        }
    });
    function getPaymentFee(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const paymentFeeRow = $('#bitbag-paymentFee-row');
                if (paymentFeeRow.length && data.view) {
                    paymentFeeRow.replaceWith(data.view)
                    orderTotalRow.text(data.orderTotal)
                } else if (data.view) {
                    $('#sylius-checkout-subtotal .ui.large.header').before(data.view)
                    orderTotalRow.text(data.orderTotal)
                } else {
                    restoreOrderTotalValue()
                }
            })
    }
    function restoreOrderTotalValue() {
        $('#bitbag-paymentFee-row').replaceWith('')
        orderTotalRow.text(initialOrderTotal)
    }
    if (mollieData.length > 0) {
        initializeCreditCartFields(selectedValue);
    }
    function initializeCreditCartFields(selectedValue) {
        const mollie = Mollie(
            mollieData.data('profile_id'),
            {
                locale: mollieData.data('locale'),
                testmode: true
            }
        );
        const form = document.getElementsByName("sylius_checkout_select_payment")[0];
        const formError = document.getElementById("form-error");
        const submitButton = document.getElementById("next-step");
        const tokenField = document.getElementById("sylius_checkout_select_payment_payments_0_mollie_payment_options_cartToken");
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
            const selectedMethod = $(`input[id*="sylius_checkout_select_payment_"][type=radio]:checked`)
            if (selectedMethod.hasClass('mollie-payments') && selectedValue === false) {
                selectedValue = $(".online-payment__input:checked").val();
            }
            if (selectedValue === 'creditcard') {
                event.preventDefault();
                disableForm();
                formError.textContent = "";
                const {token, error} = await mollie.createToken();
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