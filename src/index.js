import './style.scss';
import {buttonsContainerElement} from './modules/declarations.js';
import {handleClickButtonItem} from './modules/hendlers.js';
import {updateDisplay} from './modules/helpers.js';

buttonsContainerElement.addEventListener('click', handleClickButtonItem);
updateDisplay();
