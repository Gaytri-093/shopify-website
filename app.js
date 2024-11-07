let cart = [];

function updateCart(productName, productPrice) {
    // Add product to cart
    cart.push({ name: productName, price: productPrice });

    // Update cart count (for demonstration purposes)
    alert(`${productName} has been added to your cart!`);
}

// Add event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.dataset.product;
        const productPrice = parseFloat(this.dataset.price);
        updateCart(productName, productPrice);
    });
});
