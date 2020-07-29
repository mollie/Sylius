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
});
