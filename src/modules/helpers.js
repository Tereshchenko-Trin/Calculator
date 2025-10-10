import {
  dataState,
  displayCurrentValueElement,
  displayPreviousValueElement,
} from './declarations.js';
import {themeIconElement} from './declarations.js';
import iconDark from '../assets/icons/iconDark.svg';
import iconLight from '../assets/icons/iconLight.svg';

function appendNumber(number) {
  // сброс ошибки
  if (dataState.currentValue === 'Error') dataState.currentValue = '';

  // проверка на наличие разделителя, если есть - второй не добавится
  if (number === ',' && dataState.currentValue.includes('.')) return;

  // убираем ошибку после parseFloat (преобразование в NaN)), если значение currentValue начинается с '.'
  if ((dataState.currentValue === '' || dataState.currentValue === '0') && number === ',') {
    dataState.currentValue = '0.';
    return;
  }

  // заменяем дефолтный 0 на введенное число
  if (dataState.currentValue === '0' && number !== '.' && number !== ',') {
    dataState.currentValue = number;
    return;
  }

  // непосредственно обновляем число
  if (number === ',') {
    dataState.currentValue += '.';
  } else {
    dataState.currentValue += number;
  }
}

function handleOperation(type) {
  // блокировка работы с математическими операциями, только очистка и ввод чисел
  if (dataState.currentValue === 'Error' && type !== 'clear') return;

  switch (type) {
    case 'clear':
      clearDisplay();
      break;
    case 'sign':
      toggleSign();
      break;
    case '%':
      calcPercent();
      break;
    case '=':
      calcValue();
      break;
    case '+':
    case '-':
    case '/':
    case '*':
      chooseOperator(type);
      break;
  }
}

function chooseOperator(operator) {
  if (dataState.currentValue === '') return;

  if (dataState.previousValue !== '') calcValue();

  dataState.selectedOperator = operator;
  dataState.previousValue = dataState.currentValue;
  dataState.currentValue = '';
}

function calcValue() {
  let result;
  const curr = parseFloat(dataState.currentValue);
  const prev = parseFloat(dataState.previousValue);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (dataState.selectedOperator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      if (curr === 0) {
        clearDisplay();
        dataState.currentValue = 'Error';
        return;
      }
      result = prev / curr;
      break;
  }

  dataState.selectedOperator = null;
  dataState.previousValue = '';
  dataState.currentValue = result.toString();
}

function calcPercent() {
  if (dataState.currentValue === '') return;

  dataState.currentValue = (parseFloat(dataState.currentValue) / 100).toString();
}

function toggleSign() {
  if (dataState.currentValue === '') return;

  dataState.currentValue = (parseFloat(dataState.currentValue) * -1).toString();
}

function clearDisplay() {
  dataState.previousValue = '';
  dataState.currentValue = '0';
  dataState.selectedOperator = null;
}

function updateDisplay() {
  displayCurrentValueElement.innerText = dataState.currentValue
    ? dataState.currentValue.toString()
    : '0';
  displayPreviousValueElement.innerText = dataState.selectedOperator
    ? `${dataState.previousValue} ${dataState.selectedOperator}`
    : '';
}

function updateThemeIcon(theme) {
  themeIconElement.src = theme === 'light' ? iconLight : iconDark;
}

export {updateDisplay, handleOperation, chooseOperator, appendNumber, updateThemeIcon};
