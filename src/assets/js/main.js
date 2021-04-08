// BURGER MENU
const toggleBurgerBtn = document.querySelector('.burger-menu');
const headerNavigation = document.querySelector('.header');
const headerLinkBtns = document.querySelectorAll('.header__main-nav__item');

toggleBurgerBtn.addEventListener('click', toggleNavBar);

function toggleNavBar() {
  headerNavigation.classList.toggle('openNav');
  toggleBurgerBtn.classList.toggle('close');
}

headerLinkBtns.forEach((item) => {
  item.addEventListener('click', () => {
    headerNavigation.classList.remove('openNav');
    toggleBurgerBtn.classList.remove('close');
  });
});

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

// ABOUT ANIMATIONS

const aboutLeftContent = document.querySelector('.about__content');
const aboutRightContent = document.querySelector('.about__img');

window.addEventListener('scroll', () => {
  aboutLeftContent.style.opacity = 0;
  aboutRightContent.style.opacity = 0;

  if (window.scrollY > 400) {
    setTimeout(() => {
      aboutLeftContent.classList.add('rotateInDownRight');
      aboutRightContent.classList.add('rotateInDownLeft');
      aboutLeftContent.style.opacity = 1;
      aboutRightContent.style.opacity = 1;
    }, 1000);
  } else if (window.scrollY < 400) {
    aboutLeftContent.classList.remove('rotateInDownRight');
    aboutRightContent.classList.remove('rotateInDownLeft');
  }
  // PROJECTS ANIMATIONS - fadeInUp
});

// PROJECTS ANIMATIONS - zoomIn
window.addEventListener('scroll', () => {
  const projectCards = document.querySelectorAll('.projects__content__card');

  projectCards.forEach((projectCard) => {
    if (window.scrollY > 1200) {
      setTimeout(() => {
        projectCard.classList.add('zoomIn');
        projectCard.style.opacity = 1;
      }, 1300);
    } else if (window.scrollY < 1200) {
      projectCard.classList.remove('zoomIn');
      projectCard.style.opacity = 0;
    }
  });
});

// GO TO TOP OF THE PAGE BUTTON

const goTopBtn = document.querySelector('.go-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    goTopBtn.style.visibility = 'visible';
    goTopBtn.style.opacity = 1;
  } else if (window.scrollY < 400) {
    goTopBtn.style.visibility = 'hidden';
    goTopBtn.style.opacity = 0;
  }
});

// Remove the Outline in an Accessible Way

(function (document, window) {
  if (!document || !window) {
    return;
  }

  var styleText =
    '::-moz-focus-inner{border:0 !important;}:focus{outline: none !important;';
  var unfocus_style = document.createElement('STYLE');

  window.unfocus = function () {
    document.getElementsByTagName('HEAD')[0].appendChild(unfocus_style);

    document.addEventListener('mousedown', function () {
      unfocus_style.innerHTML = styleText + '}';
    });
    document.addEventListener('keydown', function () {
      unfocus_style.innerHTML = '';
    });
  };

  unfocus.style = function (style) {
    styleText += style;
  };

  unfocus();
})(document, window);
