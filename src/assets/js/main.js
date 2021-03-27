// BURGER MENU
const toggleBurgerBtn = document.querySelector('.burger-menu');
const headerNavigation = document.querySelector('.header');

toggleBurgerBtn.addEventListener('click', toggleNavBar);

function toggleNavBar() {
  headerNavigation.classList.toggle('openNav');
  toggleBurgerBtn.classList.toggle('close');
}
