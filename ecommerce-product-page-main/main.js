const hamburger = document.querySelector('.hamburger-div');
const overlay = document.querySelector('.overlay');
const arrowBack = document.querySelector('.previous-button');
const arrowForward = document.querySelector('.next-button');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavUl = document.querySelector('.mobile-nav > ul');
const body = document.querySelector('body');
const contentSlides = document.querySelectorAll('.img-slides > img');
const cancel = document.querySelector('.mobile-nav > ul li:nth-child(1)');

mobileNav.classList.add('translateX');
hamburger.addEventListener('click', function () {
  mobileNav.classList.remove('translateX');
  mobileNav.classList.add('remove-translateX');
  setTimeout(() => {
    overlay.style.display = 'block';
  }, 90);
  body.classList.add('max-height');
});
overlay.addEventListener('click', function () {
  overlay.style.display = 'none';
  mobileNav.classList.remove('remove-translateX');
  mobileNav.classList.add('translateX');
  body.classList.remove('max-height');
});
cancel.addEventListener('click', function () {
  overlay.style.display = 'none';
  mobileNav.classList.remove('remove-translateX');
  mobileNav.classList.add('translateX');
  body.classList.remove('max-height');
});

let currentSlide = 0;
export const goToSlide = function (slide) {
  contentSlides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
goToSlide(0);
const maxSlide = contentSlides.length;
const nextSlide = function () {
  if (currentSlide === maxSlide - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};
const prevSlide = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};
arrowBack.addEventListener('click', prevSlide);
arrowForward.addEventListener('click', nextSlide);
