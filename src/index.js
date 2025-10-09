import './style.scss';

const buttonsContainerElement = document.querySelector('#buttons-wrapper');
const displayPreviousValueElement = document.querySelector('#previous-value');
const displayCurrentValueElement = document.querySelector('#current-value');

let previousValue = '';
let currentValue = '0';
let selectedOperator = null;

updateDisplay();

buttonsContainerElement.addEventListener('click', handleClickButtonItem);

function handleClickButtonItem({target}) {
  const type = target.dataset.type;
  if (!type) return;

  if (!isNaN(type) || type === ',') {
    appendNumber(type);
  } else {
    handleOperation(type);
  }

  updateDisplay();
}

function appendNumber(number) {
  // сброс ошибки
  if (currentValue === 'Error') currentValue = '';

  // проверка на наличие разделителя, если есть - второй не добавится
  if (number === ',' && currentValue.includes('.')) return;

  // убираем ошибку после parseFloat (преобразование в NaN)), если значение currentValue начинается с '.'
  if ((currentValue === '' || currentValue === '0') && number === ',') {
    currentValue = '0.';
    return;
  }

  // заменяем дефолтный 0 на введенное число
  if (currentValue === '0' && number !== '.' && number !== ',') {
    currentValue = number;
    return;
  }

  // непосредственно обновляем число
  if (number === ',') {
    currentValue += '.';
  } else {
    currentValue += number;
  }
}

function handleOperation(type) {
  switch (type) {
    case 'clear':
      clearDisplay();
      break;
    case 'sign':
      toggleSign();
      break;
    case '%':
      calcPersent();
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
  if (currentValue === '') return;

  if (previousValue !== '') calcValue();

  selectedOperator = operator;
  previousValue = currentValue;
  currentValue = '';
}

function calcValue() {
  let result;
  const prev = parseFloat(previousValue);
  const curr = parseFloat(currentValue);

  if (isNaN(prev) || isNaN(curr)) return;

  switch (selectedOperator) {
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
        currentValue = 'Error';
        selectedOperator = null;
        previousValue = '';
        return;
      }
      result = prev / curr;
      break;
  }

  selectedOperator = null;
  previousValue = '';
  currentValue = result.toString();
}

function calcPersent() {
  if (currentValue === '') return;

  currentValue = (parseFloat(currentValue) / 100).toString();
}

function toggleSign() {
  if (currentValue === '') return;

  currentValue = (parseFloat(currentValue) * -1).toString();
}

function clearDisplay() {
  previousValue = '';
  currentValue = '0';
  selectedOperator = null;
}

function updateDisplay() {
  displayCurrentValueElement.innerText = currentValue ? currentValue.toString() : '0';
  displayPreviousValueElement.innerText = selectedOperator
    ? `${previousValue} ${selectedOperator}`
    : '';
}
