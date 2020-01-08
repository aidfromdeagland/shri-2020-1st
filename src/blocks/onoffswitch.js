const defaultColorSelector = 'theme_color_project-default';
const inverseColorSelector = 'theme_color_project-inverse';
const switchSelector = 'onoffswitch';
const switchCheckedSelector = 'onoffswitch_checked';

const changeColorTheme = function() {
  let blocksColorDefault = document.querySelectorAll('.' + defaultColorSelector);
  let blocksColorInverse = document.querySelectorAll('.' + inverseColorSelector);

  for (let i = 0; i < blocksColorDefault.length; i++) {
    blocksColorDefault[i].classList.add(inverseColorSelector);
    blocksColorDefault[i].classList.remove(defaultColorSelector);
  }

  for (let i = 0; i < blocksColorInverse.length; i++) {
    blocksColorInverse[i].classList.add(defaultColorSelector);
    blocksColorInverse[i].classList.remove(inverseColorSelector);
  }
};

export {switchSelector, switchCheckedSelector, changeColorTheme};



