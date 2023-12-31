import '../styles/components/header.scss';

function hideShowMenu() {
  const iconMenu = document.querySelector('.menu__icon');
  const menuBody = document.querySelector('.menu__body');
  const menuBodyTablet = document.querySelector('.menu__body-tablet');
  if (iconMenu && menuBody && menuBodyTablet) {
    iconMenu.addEventListener('click', () => {
      document.body.classList.toggle('body_lock');
      iconMenu.classList.toggle('menu__icon_active');
      menuBody.classList.toggle('menu__body_active');
      menuBodyTablet.classList.toggle('menu__body-tablet_active');
    });
  } else {
    alert('Ошибка: один из элементов для меню-бургера не найден');
  }
}

function hideShowSpoiler() {
  const menuArrows = document.querySelectorAll('.menu__arrow');
  const menuSublists = document.querySelectorAll('.menu__sublist');
  if (menuArrows.length > 0) {
    menuArrows.forEach((menuArrow, index) => {
      menuArrow.addEventListener('click', () => {
        menuArrow.classList.toggle('menu__arrow_active');
        menuSublists[index].classList.toggle('menu__sublist_active');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  hideShowMenu();
  hideShowSpoiler();
});
