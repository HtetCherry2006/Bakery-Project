let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    window.location.href = "basket.html";
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartCount();
}
