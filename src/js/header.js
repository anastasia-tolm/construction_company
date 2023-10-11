import '../styles/components/header.scss';

// Бургер

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuBodyTablet = document.querySelector('.menu__body-tablet');
if (iconMenu) {
  iconMenu.addEventListener('click', function () {
    document.body.classList.toggle('body_lock');
    iconMenu.classList.toggle('menu__icon_active');
    menuBody.classList.toggle('menu__body_active');
    menuBodyTablet.classList.toggle('menu__body-tablet_active');
  });
}

// Спойлер

if (document.documentElement.clientWidth < 767) {
  document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu__item-spoiler');

    menuItems.forEach((menuItem) => {
      const submenuToggle = menuItem.querySelector('a');

      submenuToggle.addEventListener('click', (event) => {
        event.preventDefault(); // Отменяем стандартное действие ссылки
        menuItem
          .querySelector('.menu__sublist')
          .classList.toggle('menu__sublist_active');
        menuItem
          .querySelector('.menu__arrow')
          .classList.toggle('menu__arrow_active');
      });
    });
  });
}
