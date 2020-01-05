'use strict';

(function () {
  const onOffSwitcher = document.querySelector('.onoffswitch');
  
  let changeColorTheme = function() {
    let blocksColorDefault = document.querySelectorAll('.theme_color_project-default');
    let blocksColorInverse = document.querySelectorAll('.theme_color_project-inverse');
  
    for (let i = 0; i < blocksColorDefault.length; i++) {
      blocksColorDefault[i].classList.add('theme_color_project-inverse');
      blocksColorDefault[i].classList.remove('theme_color_project-default');
    }
  
    for (let i = 0; i < blocksColorInverse.length; i++) {
      blocksColorInverse[i].classList.add('theme_color_project-default');
      blocksColorInverse[i].classList.remove('theme_color_project-inverse');
    }
  }
  
  document.body.addEventListener('click', function() {
    if (event.target === onOffSwitcher) {
      changeColorTheme();
      onOffSwitcher.classList.toggle('onoffswitch_checked');
    }
  });
}());

