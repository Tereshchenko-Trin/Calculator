import './styles/style.scss';
import {buttonsContainerElement, themeToggleElement} from './modules/declarations.js';
import {handleClickButtonItem, handleClickToggleTheme} from './modules/hendlers.js';
import {updateDisplay} from './modules/helpers.js';

buttonsContainerElement.addEventListener('click', handleClickButtonItem);
themeToggleElement.addEventListener('click', handleClickToggleTheme);

updateDisplay();
