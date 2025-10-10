import iconDark from '../assets/icons/iconDark.svg';

// all variables
const buttonsContainerElement = document.querySelector('#buttons-wrapper');
const displayPreviousValueElement = document.querySelector('#previous-value');
const displayCurrentValueElement = document.querySelector('#current-value');
const themeToggleElement = document.querySelector('#theme-toggle');
const themeIconElement = document.querySelector('#theme-toggle img');

const dataState = {
  previousValue: '',
  currentValue: '0',
  selectedOperator: null,
};
themeIconElement.src = iconDark;

export {
  buttonsContainerElement,
  displayPreviousValueElement,
  displayCurrentValueElement,
  dataState,
  themeToggleElement,
  themeIconElement,
};
