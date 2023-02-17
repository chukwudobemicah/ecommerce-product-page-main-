import { addAmount } from './controller.js';
import { minusAmount } from './controller.js';
import { addToCart } from './controller.js';
import { renderCartView } from './controller.js';
import { goToSlide } from './main.js';
import { amount } from './controller.js';
import { cartNotification } from './controller.js';
const cartIcon = document.querySelector('.main-cart');
const itemsInCart = document.querySelector('.items-in-cart');
const userAmount = document.querySelector('.amount-dynamic');
const userBill = document.querySelector('.calculated-amount');
const mainBody = document.querySelector('.body');
const header = document.querySelector('header');
const thumbnails = document.querySelectorAll('.thumbnail-container img');

// view
const init = function () {
  itemsInCart.classList.add('hidden');
  renderCartView();
};
init();
addToCart.addEventListener('click', function () {
  renderCartView();
  cartNotification.classList.remove('hidden');
  cartNotification.textContent = amount;
});

cartIcon.addEventListener('click', function () {
  itemsInCart.classList.toggle('hidden');
});
[minusAmount, addAmount].forEach(operator =>
  operator.addEventListener('click', function () {
    itemsInCart.classList.add('hidden');
  })
);

mainBody.addEventListener('click', init);
thumbnails.forEach(tn => {
  tn.addEventListener('click', function () {
    const slide = tn.getAttribute('data-num');
    goToSlide(slide);
  });
});
