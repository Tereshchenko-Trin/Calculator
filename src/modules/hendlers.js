import {handleOperation, appendNumber, updateDisplay} from './helpers.js';

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

export {handleClickButtonItem};
