$(function () {
    let applePaySession = () => {
        const version = 3;
        const divider = 100;

        const applePayButton = document.getElementById('mollie_applepay_button');

        const bitbagMollieValidateMerchantUrl = applePayButton.dataset.urlValidate;

        const bitbagMolliePaymentUrl = applePayButton.dataset.urlPayment;
        const bitbagMollieCurrency = applePayButton.dataset.dataCurrencyOrder;
        const bitbagMollieMerchantName = applePayButton.dataset.dataMerchantName;

        let bitbagMollieTotalOrder = applePayButton.dataset.dataTotalOrder;
        bitbagMollieTotalOrder = bitbagMollieTotalOrder / divider;
        bitbagMollieTotalOrder = bitbagMollieTotalOrder.toString();

        const session = new ApplePaySession(
            version,
            request('US', bitbagMollieCurrency, bitbagMollieMerchantName, bitbagMollieTotalOrder)
        );

        session.onvalidatemerchant = (applePayValidateMerchantEvent) => {
            jQuery.ajax({
                url: bitbagMollieValidateMerchantUrl,
                method: 'POST',
                data: {
                    validationUrl: applePayValidateMerchantEvent.validationURL,
                },
                success: (merchantSession) => {
                    if (merchantSession.success === true) {
                        session.completeMerchantValidation(JSON.parse(merchantSession.data));
                    } else {
                        session.abort();
                    }
                },
                error: (XHR, status, error) => {
                    session.abort();
                },
            });
        };

        session.onpaymentauthorized = (ApplePayPayment) => {
            jQuery.ajax({
                url: bitbagMolliePaymentUrl,
                method: 'POST',
                data: {
                    token: ApplePayPayment.payment.token,
                    shippingContact: ApplePayPayment.payment.shippingContact,
                    billingContact: ApplePayPayment.payment.billingContact,
                },
                success: (authorization) => {
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
                },
            });
        };

        session.begin();
    };

    const applePayMethodElement = document.querySelector('#mollie_applepay_button');

    const canShowButton = applePayMethodElement && ApplePaySession && ApplePaySession.canMakePayments();
    if (canShowButton) {
        applePayMethodElement.style.display = 'block';
    }

    document.querySelector('#mollie_applepay_button').addEventListener('click', (evt) => {
        applePaySession();
    });
});
