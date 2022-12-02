const menuIcon = document.querySelector('.menu-icon'),
   header = document.querySelector('.header__content');

menuIcon.addEventListener('click', () => {
   menuIcon.classList.toggle('menu-icon--active');
   header.classList.toggle('header--mobile');
});