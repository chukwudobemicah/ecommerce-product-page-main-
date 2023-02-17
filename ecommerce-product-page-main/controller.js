export const addAmount = document.querySelector(
  '.quantity button:nth-child(3)'
);
export const minusAmount = document.querySelector(
  '.quantity button:nth-child(1)'
);
export const addToCart = document.querySelector('.add-to-cart');
const quantity = document.querySelector('.quantity-amount');
const cartBody = document.querySelector('.items-in-cart-body');
export const cartNotification = document.querySelector('.cart-notification');
export let amount = 0;

//  functions
const updateQuantity = function () {
  quantity.textContent = amount;
};

minusAmount.addEventListener('click', function () {
  if (amount === 0) return;
  amount--;
  updateQuantity();
});
addAmount.addEventListener('click', function () {
  amount++;
  updateQuantity();
});

export const emptyCartView = function () {
  if (amount === 0) {
    cartNotification.classList.add('hidden');
    cartBody.style.padding = '50px';
    cartBody.style.textAlign = 'center';
    cartBody.textContent = 'Your cart is empty';
  }
};
export const updateCartView = function () {
  if (amount > 0) {
    const cartBody = document.querySelector('.items-in-cart-body');
    cartBody.style.padding = '0px';
    cartBody.textContent = '';
    cartBody.insertAdjacentHTML(
      'afterbegin',
      `<div class="items-in-cart-body-main ">
      <img src="./images/image-product-1-thumbnail.jpg" alt="product thumbnail">
      <div>
        <p>Fall Limited Edition Sneakers</p>
        <div>$125 x <span class="amount-dynamic">${amount}</span> <span class="bold calculated-amount"> = $${
        125 * amount
      }.00</span></div>
      </div>
        <img class="delete-icon hi" src="./images/icon-delete.svg" alt="icon-delete">
      </div>
      <button type="button" class="checkout">Checkout</button>`
    );
    const deleteCartIcon = document.querySelector('.delete-icon');
    deleteCartIcon.addEventListener('click', function () {
      amount = 0;
      emptyCartView();
      cartBody.textContent = 'You have nothing in your cart';
      updateQuantity();
    });
  }
};

export const renderCartView = function () {
  emptyCartView();
  updateCartView();
};
