const {Mollie} = window;

$(function () {
    var disableValidationMollieComponents = false;
    let selectedValue = false;
    let mollieData = $('.online-online-payment__container');
    const initialOrderTotal = $('#sylius-summary-grand-total').text();
    const cardActiveClass = 'online-payment__item--active';
    const orderTotalRow = $('#sylius-summary-grand-total');
    const components = Boolean(mollieData.data('components'));

    $('input[id*="sylius_checkout_select_payment_"][type=radio]').on('change', ({currentTarget}) => {
        if (!currentTarget.classList.contains('mollie-payments')) {
            restoreOrderTotalValue();
            $(`.${cardActiveClass} input[type="radio"]`).prop('checked', false);
            $(`.${cardActiveClass}`).removeClass(cardActiveClass);
        }
    });

    $('.online-payment__input').on('change', ({currentTarget}) => {
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
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const paymentFeeRow = $('#mollie-paymentFee-row');

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
        $('#mollie-paymentFee-row').replaceWith('');
        orderTotalRow.text(initialOrderTotal);
    }

    if (mollieData.length > 0 && true === components) {
        let paymentMethods = document.querySelectorAll('div[class*="online-payment__item--"]');

        for (let i = 0; i < paymentMethods.length; i++) {
            paymentMethods[i].onchange = function (event) {
                let target = event.target;
                let creditCartComponents = document.querySelectorAll('div[data-testid*="mollie-container--"]');

                if (target.value === 'creditcard' && creditCartComponents.length === 0) {
                    toggleMollieComponents();
                    initializeCreditCartFields(selectedValue);

                    if (isSavedCreditCardCheckboxChecked()) {
                        const mollieComponentFields = document.querySelector('.mollie-component-fields');
                        if (!mollieComponentFields) {
                            return;
                        }

                        hideMollieComponents(mollieComponentFields);
                    }
                }
            }
        }
    }

    function isSavedCreditCardCheckboxChecked() {
        let checkbox = document.getElementById('mollie-sylius-use-saved-credit-card');
        if (!checkbox) {
            return false;
        }
        let parentElement = checkbox.parentNode;

        return parentElement.classList.contains('checked');
    }

    function isSaveCreditCardForFutureUseChecked() {
        let checkbox = document.getElementById('mollie-sylius-save-credit-card');
        if (!checkbox) {
            return false;
        }
        let parentElement = checkbox.parentNode;

        return parentElement.classList.contains('checked');
    }

    function toggleMollieComponents() {
        const useSavedCreditCardCheckbox = document.getElementById('mollie-sylius-use-saved-credit-card');
        if (!useSavedCreditCardCheckbox) {
            return;
        }

        useSavedCreditCardCheckbox.addEventListener('change', function (event) {
            const mollieComponentFields = document.querySelector('.mollie-component-fields');
            if (!mollieComponentFields) {
                return;
            }

            if (event.target.checked) {
                hideMollieComponents(mollieComponentFields);
            } else {
                showMollieComponents(mollieComponentFields);
            }
        });
    }

    function showMollieComponents(mollieComponentFields) {
        disableValidationMollieComponents = false;
        mollieComponentFields.classList.remove('mollie-hidden');
        mollieComponentFields.classList.add('display-grid');
    }

    function hideMollieComponents(mollieComponentFields) {
        disableValidationMollieComponents = true;
        mollieComponentFields.classList.add('mollie-hidden');
        mollieComponentFields.classList.remove('display-grid');
    }

    function initializeCreditCartFields(selectedValue) {

        const environment = mollieData.data('environment');
        let testmode = true;

        if (environment === 1) {
            testmode = false;
        }

        const mollie = Mollie(mollieData.data('profile_id'), {
            locale: mollieData.data('locale'),
            testmode: testmode,
        });

        const form = document.getElementsByName('sylius_checkout_select_payment')[0];

        const formError = document.getElementById('form-error');
        const submitButton = document.getElementById('next-step') || document.getElementById('sylius-pay-link');
        const tokenField = document.querySelector('[id*="_details_cartToken"]');
        const saveCardInfoInput = document.querySelector('[id*="_details_saveCardInfo"]');
        const useSavedCardsInput = document.querySelector('[id*="_details_useSavedCards"]');
        const cardHolder = mollie.createComponent('cardHolder');

        cardHolder.mount('#card-holder');

        const cardHolderError = document.getElementById('card-holder-error');
        cardHolder.addEventListener('change', (event) => {
            if (event.error && event.touched) {
                cardHolderError.textContent = event.error;
            } else {
                cardHolderError.textContent = '';
            }
        });

        const cardNumber = mollie.createComponent('cardNumber');
        cardNumber.mount('#card-number');

        const cardNumberError = document.getElementById('card-number-error');

        cardNumber.addEventListener('change', (event) => {
            if (event.error && event.touched) {
                cardNumberError.textContent = event.error;
            } else {
                cardNumberError.textContent = '';
            }
        });

        const expiryDate = mollie.createComponent('expiryDate');
        expiryDate.mount('#expiry-date');

        const expiryDateError = document.getElementById('expiry-date-error');

        expiryDate.addEventListener('change', (event) => {
            if (event.error && event.touched) {
                expiryDateError.textContent = event.error;
            } else {
                expiryDateError.textContent = '';
            }
        });

        const verificationCode = mollie.createComponent('verificationCode');
        verificationCode.mount('#verification-code');

        const verificationCodeError = document.getElementById('verification-code-error');

        verificationCode.addEventListener('change', (event) => {
            if (event.error && event.touched) {
                verificationCodeError.textContent = event.error;
            } else {
                verificationCodeError.textContent = '';
            }
        });

        function disableForm() {
            submitButton.disabled = true;
        }

        function enableForm() {
            submitButton.disabled = false;
        }

        form.addEventListener('submit', async (event) => {
            useSavedCardsInput.value = isSavedCreditCardCheckboxChecked() ? 1 : 0;

            if ($('.online-payment__input:checked').val() === 'creditcard' && disableValidationMollieComponents === false) {
                event.preventDefault();
                disableForm();

                formError.textContent = '';

                const {token, error} = await mollie.createToken();

                if (error) {
                    enableForm();
                    formError.textContent = error.message;
                    form.classList.remove('loading');

                    return;
                }

                tokenField.value = token;
                saveCardInfoInput.value = isSaveCreditCardForFutureUseChecked() ? 1 : 0;

                form.submit();
            }
        });
    }

    const applePay = document.getElementById('applepay');

    if (applePay) {
        if (window.ApplePaySession && (ApplePaySession && ApplePaySession.canMakePayments())) {
            applePay.style.display = 'block';
        }
    }
});
