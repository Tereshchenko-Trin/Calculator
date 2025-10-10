import {handleOperation, appendNumber, updateDisplay, updateThemeIcon} from './helpers.js';

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

function handleClickToggleTheme() {
  const currentThemeElement = document.documentElement.getAttribute('data-theme');
  const newTheme = currentThemeElement === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  updateThemeIcon(newTheme);
}

export {handleClickButtonItem, handleClickToggleTheme};
