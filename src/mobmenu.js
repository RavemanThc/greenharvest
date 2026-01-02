document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.header-hamburger');
  const mobmenu = document.querySelector('.mobmenu');
  const menuLinks = mobmenu.querySelectorAll('a');

  // Функция открытия/закрытия меню
  const toggleMenu = () => {
    const isOpen = mobmenu.classList.toggle('is-open'); // открываем/закрываем меню
    hamburger.classList.toggle('is-active');            // анимация бургера
    document.body.style.overflow = isOpen ? 'hidden' : ''; // блокируем скролл
  };

  // Клик по бургеру
  hamburger.addEventListener('click', toggleMenu);

  // Клик по ссылке внутри меню — закрываем меню
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobmenu.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      document.body.style.overflow = '';
    });
  });
});
