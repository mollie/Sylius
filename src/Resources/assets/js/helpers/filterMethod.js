export const paymentTypeIndicator = (item, expectedValue) => {
	const indicatedItem = document.querySelector(`${item}`);
	const indicatedItemValue = indicatedItem.value;
	if (indicatedItemValue == `${expectedValue}`) {
		return true;
	} else {
		return false;
	}
};

export const methodLoadIndicator = (item) => {
	const indicatedItem = document.querySelector(`${item}`);
	if (indicatedItem) {
		return false;
	} else {
		return true;
	}
};
