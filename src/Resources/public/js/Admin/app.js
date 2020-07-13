$(function () {
    const mollieFormIncluded = document.getElementById("sylius_payment_method_gatewayConfig_mollieGatewayConfig_0_enabled");
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
});
