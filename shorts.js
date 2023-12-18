
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    let cartItemsElement = document.getElementById('cartItems');
    let cartTotalElement = document.getElementById('cartTotal');

    // Clear previous content
    cartItemsElement.innerHTML = '';

    // Display each item in the cart
    cart.forEach(item => {
        let cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `<strong>${item.name}</strong> - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(cartItemElement);
    });

    // Calculate and display the total price
    let total = cart.reduce((acc, item) => acc + item.price, 0);
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function clearCart() {
    cart = [];
    updateCart();
}

function purchaseCart() {
    // Implement purchase logic (e.g., connecting to a payment gateway)
    if (cart.length === 0) {
        alert('Your cart is empty. Add items before proceeding.');
    } else {
        alert('Thank you for your purchase!');
        clearCart();
    }
}
