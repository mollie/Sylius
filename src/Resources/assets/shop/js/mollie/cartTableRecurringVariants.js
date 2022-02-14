export const model = {
    appendIntervalLabel: (container, interval) => {
        const __everyDaysLabel = $('#sylius-variants-recurring-interval-days').text();
        const __everyWeeksLabel = $('#sylius-variants-recurring-interval-weeks').text();
        const __everyMonthsLabel = $('#sylius-variants-recurring-interval-months').text();

        const [amount, step] = interval.split(/\s+/g);
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
            const everyLabelElement = $('<span class="ui orange horizontal label"/>').text(everyLabel.replace(/\%amount\%/, amount));
            container.append(everyLabelElement);
        }

    },
    appendRecurringLabel: (container) => {
        const __productNameRecurringPrefix = $('#sylius-variants-recurring-label').html();
        const __prefixLabel = $('<span id="recurring-label" class="item"/>');
        __prefixLabel.html(__productNameRecurringPrefix);
        container.append(__prefixLabel);
    },
    appendTimesLabel: (container, times) => {
        const __recurringTimes = $('#sylius-variants-recurring-times-label').html();
        const __recurringTimesLabel = $('<span id="recurring-times" class="item"/>');
        __recurringTimesLabel.html(__recurringTimes).children().prepend(times + ' ');
        container.append(__recurringTimesLabel);
    },
    addRecurringDetailsLabels: (itemContainer, totalContainer, interval, times) => {
        const __recurringContainer = $('<div/>');

        // recurring label
        model.appendRecurringLabel(__recurringContainer);

        // times label
        model.appendTimesLabel(__recurringContainer, times);

        itemContainer.append(__recurringContainer);

        model.appendIntervalLabel(totalContainer, interval);
    }
}
