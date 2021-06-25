
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
                data: {method: value},
                type: "DELETE",
                url: $(this).data('url'),
                success: function (data) {
                    location.reload();
                },
                error: function () {
                    form.removeClass('loading');
                }
            });
        })
    });

    $(".bitbag-mollie-components").change(function () {
        if ($(this).is(':checked')) {
            $('.bitbag-single-click-payment').prop('checked', !$(this).is(':checked'));
        }
    })

    $(".bitbag-single-click-payment").change(function () {
        if ($(this).is(':checked')) {
            $('.bitbag-mollie-components').prop('checked', !$(this).is(':checked'));
        }
    })

    $('[id$="_paymentType"]').each(function (index) {
        setPaymentDescription($(this), index);

        $(this).on('change', function (event) {
            setPaymentDescription($(event.target), index);
        })
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
        })
    });

    function setPaymentFeeFields(value, index) {
        const fixedAmount = 'sylius_payment_method_gatewayConfig_mollieGatewayConfig_'+ index +'_paymentSurchargeFee_fixedAmount';
        const percentage = 'sylius_payment_method_gatewayConfig_mollieGatewayConfig_'+ index +'_paymentSurchargeFee_percentage';
        const surchargeLimit = 'sylius_payment_method_gatewayConfig_mollieGatewayConfig_'+ index +'_paymentSurchargeFee_surchargeLimit';

        if (value === 'no_fee') {
            $('label[for='+fixedAmount+'], input#'+fixedAmount+'').hide();
            $('label[for='+percentage+'], input#'+percentage+'').hide();
            $('label[for='+surchargeLimit+'], input#'+surchargeLimit+'').hide();
        }
        if (value === 'percentage') {
            $('label[for='+percentage+'], input#'+percentage+'').show();
            $('label[for='+surchargeLimit+'], input#'+surchargeLimit+'').show();
            $('label[for='+fixedAmount+'], input#'+fixedAmount+'').hide();
        }
        if (value === 'fixed_fee') {
            $('label[for='+fixedAmount+'], input#'+fixedAmount+'').show();
            $('label[for='+percentage+'], input#'+percentage+'').hide();
            $('label[for='+surchargeLimit+'], input#'+surchargeLimit+'').hide();
        }
        if (value === 'fixed_fee_and_percentage') {
            $('label[for='+fixedAmount+'], input#'+fixedAmount+'').show();
            $('label[for='+percentage+'], input#'+percentage+'').show();
            $('label[for='+surchargeLimit+'], input#'+surchargeLimit+'').show();
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
