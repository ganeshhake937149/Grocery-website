// JavaScript for handling cart functionality
let cartTotal = 0;

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartTotalDisplay = document.getElementById('cart-total');

// Function to update cart
function updateCart() {
    cartTotalDisplay.textContent = cartTotal;
}

// Event listeners for each "Add to Cart" button
addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const product = this.parentElement;
        const price = parseFloat(product.getAttribute('data-price'));
        cartTotal += 1;
        updateCart();
        alert(`${product.getAttribute('data-name')} added to cart!`);
    });
});
