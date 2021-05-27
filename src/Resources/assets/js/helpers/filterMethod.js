export const paymentTypeIndicator = (item, expectedValue) => {
	const indicatedItem = document.querySelector(item);
	const indicatedItemValue = indicatedItem.value;

    return indicatedItemValue === expectedValue;
};

export const methodLoadIndicator = (item) => {
	const indicatedItem = document.querySelector(item);
  
    return !indicatedItem;
};
