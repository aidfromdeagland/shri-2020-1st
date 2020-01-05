'use strict';

(function () {

  const accordionVisibleClass = 'e-accordion__short';
  const accordionHidingClass = 'e-accordion__more';

  document.body.addEventListener('click', function() {
    if (event.target.closest(`.${accordionVisibleClass}`)) {
      event.target.closest(`.${accordionVisibleClass}`).nextSibling.classList.toggle(accordionHidingClass);
    }
  });
}());


