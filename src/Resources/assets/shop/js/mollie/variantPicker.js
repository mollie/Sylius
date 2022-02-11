$(function () {
    $(document).ready(function () {
        const __recurringContainer = $('#sylius-product-name').siblings('.ui.text.menu');
        const __productPriceContainer = $('#product-price');
        const __productNameRecurringPrefix = $('#sylius-variants-recurring-label').html();
        const __recurringTimes = $('#sylius-variants-recurring-times-label').html();
        const __everyDaysLabel = $('#sylius-variants-recurring-interval-days').text();
        const __everyWeeksLabel = $('#sylius-variants-recurring-interval-weeks').text();
        const __everyMonthsLabel = $('#sylius-variants-recurring-interval-months').text();

        const getMatchSelector = () => {
            let selector = '';

            $('#sylius-product-adding-to-cart select[data-option]').each((index, element) => {
                const select = $(element);
                const option = select.find('option:selected').val();
                selector += `[data-${select.attr('data-option')}="${option}"]`;
            });

            return selector;
        }

        const isChoice = () => {
            return $('#sylius-product-adding-to-cart input[type="radio"][name="sylius_add_to_cart[cartItem][variant]"]').length > 0;
        }

        const resolveSelector = () => {
            return isChoice() ? getChoiceSelector() : getMatchSelector();
        }

        const getChoiceSelector = () => {
            return `[data-variant="${$('#sylius-product-adding-to-cart input[type="radio"][name="sylius_add_to_cart[cartItem][variant]"]:checked').val()}"]`;
        }

        const getTimes = () => {
            return $('#sylius-variants-recurring-times').find(resolveSelector()).attr('data-value');
        }

        const getInterval = () => {
            return $('#sylius-variants-recurring-interval').find(resolveSelector()).attr('data-value').trim().split(/\s+/g);
        }

        const checkRecurringMatch = () => {
            return '1' === $('#sylius-variants-recurring-match').find(resolveSelector()).attr('data-value');
        }

        const checkRecurringChoice = () => {
            return '1' === $('#sylius-variants-recurring-choice').find(resolveSelector()).attr('data-value');
        }

        const removeRecurringDetailsLabels = () => {
            __recurringContainer.children('#recurring-label').remove();
            __recurringContainer.children('#recurring-times').remove();
        };

        const addRecurringDetailsLabels = () => {
            // recurring label
            const __prefixLabel = $('<span id="recurring-label" class="item"/>');
            __prefixLabel.html(__productNameRecurringPrefix);
            __recurringContainer.append(__prefixLabel);

            // times label
            const __recurringTimesLabel = $('<span id="recurring-times" class="item"/>');
            __recurringTimesLabel.html(__recurringTimes).children().prepend(getTimes() + ' ');
            __recurringContainer.append(__recurringTimesLabel);

            // interval label
            const [amount, step] = getInterval();
            let everyLabel = '';

            switch (step) {
                case 'days':
                    everyLabel = __everyDaysLabel;
                    break;
                case 'weeks':
                    everyLabel = __everyWeeksLabel;
                    break;
                case 'months':
                    everyLabel = __everyMonthsLabel;
                    break;
            }

            if (everyLabel !== '') {
                const everyLabelElement = $('<span class="ui blue horizontal label"/>').text(everyLabel.replace(/\%amount\%/, amount));
                __productPriceContainer.append(everyLabelElement);
            }
        };

        const updateProductRecurringLabel = () => {
            removeRecurringDetailsLabels();

            if (checkRecurringMatch() || checkRecurringChoice()) {
                addRecurringDetailsLabels();
            }
        }

        $('form[name=sylius_add_to_cart]').on('change', () => {
            updateProductRecurringLabel()
        });
        updateProductRecurringLabel();
    })
})
