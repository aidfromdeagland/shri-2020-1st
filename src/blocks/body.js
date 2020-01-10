import {switchSelector, switchCheckedSelector, changeColorTheme} from './onoffswitch';
import {accordionVisibleSelector, accordionHidingSelector} from './e-accordion';


document.addEventListener("DOMContentLoaded", 
document.body.addEventListener('click', function() {
  if (event.target.closest('.' + switchSelector)) {
    changeColorTheme();
    event.target.closest('.' + switchSelector).classList.toggle(switchCheckedSelector);
  } else if (event.target.closest('.' + accordionVisibleSelector)) {
    event.target.closest('.' + accordionVisibleSelector).nextSibling.classList.toggle(accordionHidingSelector);
  }
}));



