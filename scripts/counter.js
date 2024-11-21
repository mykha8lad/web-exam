const cartCounter = document.getElementById('cart-counter');
const favouriteCounter = document.getElementById('favourite-counter');

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const addToFavouriteList = document.querySelectorAll('.add-to-favourite-list');

let cartCount = 0;
let favouriteCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCounter.textContent = cartCount;
    });
});

addToFavouriteList.forEach(button => {
    button.addEventListener('click', () => {
        favouriteCount++;
        favouriteCounter.textContent = favouriteCount;
    });
});