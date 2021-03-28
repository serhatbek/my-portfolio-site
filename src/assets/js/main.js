// BURGER MENU
const toggleBurgerBtn = document.querySelector('.burger-menu');
const headerNavigation = document.querySelector('.header');

toggleBurgerBtn.addEventListener('click', toggleNavBar);

function toggleNavBar() {
  headerNavigation.classList.toggle('openNav');
  toggleBurgerBtn.classList.toggle('close');
}

// BANNER ANIMATIONS
const bannerLeftContent = document.querySelector('.banner__content');
const bannerRightContent = document.querySelector('.banner__img');

window.onload = function () {
  bannerLeftContent.style.opacity = 0;
  bannerRightContent.style.opacity = 0;
  setTimeout(() => {
    bannerLeftContent.classList.add('fadeInLeft');
    bannerRightContent.classList.add('fadeInRight');
    bannerLeftContent.style.opacity = 1;
    bannerRightContent.style.opacity = 1;
  }, 1100);
};

// MUSIC PLAYER
const player = document.querySelector('#player');
const playBtn = document.querySelector('.btn__music--play');
const pauseBtn = document.querySelector('.btn__music--pause');

player.volume = 0.2;

playBtn.addEventListener('click', () => {
  player.play();
});

pauseBtn.addEventListener('click', () => {
  player.pause();
});
