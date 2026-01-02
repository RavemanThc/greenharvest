const hamburger = document.querySelector('.header-hamburger');
const mobmenu = document.querySelector('.mobmenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-open');

  mobmenu.classList.toggle('is-open');

  document.body.style.overflow = mobmenu.classList.contains('is-open') ? 'hidden' : '';
});
