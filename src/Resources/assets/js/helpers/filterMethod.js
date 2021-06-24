export const paymentTypeIndicator = (item, expectedValue) => {
	const indicatedItem = document.querySelector(item);
	const indicatedItemValue = indicatedItem.value;

	return indicatedItemValue === expectedValue;
};

export const methodLoadIndicator = (item, messageContainer) => {
	const indicatedItem = document.querySelector(item);
	const messageWindow = document.querySelector(messageContainer);

	if (indicatedItem) {
		messageWindow.classList.add('step-next-disabled');
	} else {
		messageWindow.classList.remove('step-next-disabled');
	}
};

export const validateFields = (elements, messageContainer) => {
	const errors = [];

	elements.forEach((item) => {
		if (!item.value) {
			errors.push(item);
		}
	});

	if (errors.every((el) => el === null)) {
		messageContainer.classList.remove('step-next-disabled');
	} else {
		messageContainer.classList.add('step-next-disabled');
	}
};

export const currentStepValidator = (element, popup) => {
	const validationContainer = document.querySelector(element);
	const validationElements = validationContainer.parentNode
		.querySelectorAll(`input:not([type="file"]):not([type="submit"]):not(disabled):not([style*="display: none"]),
		select:not(disabled):not([style*="display: none;"])`);
	const messageWindow = document.querySelector(popup);

	if (validationElements && validationElements.length != 0) {
		validateFields(validationElements, messageWindow);
		validationElements.forEach((el) => {
			el.addEventListener('input', () => {
				validateFields(validationElements, messageWindow);
			});
		});
	}
};
