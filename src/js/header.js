import '../styles/components/header.scss';

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('body_lock');
    iconMenu.classList.toggle('menu__icon_active');
    menuBody.classList.toggle('menu__body_active');
  });
}
