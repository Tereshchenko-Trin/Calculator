// all variables
const buttonsContainerElement = document.querySelector('#buttons-wrapper');
const displayPreviousValueElement = document.querySelector('#previous-value');
const displayCurrentValueElement = document.querySelector('#current-value');

const dataState = {
  previousValue: '',
  currentValue: '0',
  selectedOperator: null,
};

export {
  buttonsContainerElement,
  displayPreviousValueElement,
  displayCurrentValueElement,
  dataState,
};
