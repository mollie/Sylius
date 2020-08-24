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

    $('[id*="_paymentType"]').each(function (index) {
        const value = $(this).find(":selected").val();
        setPaymentDescription(value, index);

        $(this).on('change', function () {
            const value = $(this).val();
            setPaymentDescription(value, index);
        })
    });

    function setPaymentDescription(value, index){
        const field = 'sylius_payment_method_gatewayConfig_mollieGatewayConfig_'+ index +'_paymentDescription';
        const description = $("#payment_description_" + index);

        if (value === 'PAYMENT_API') {
            $('label[for='+field+'], input#'+field).show();
            description.show();
        } else {
            $('label[for='+field+'], input#'+field).hide();
            description.hide();
        }
    }

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
});
