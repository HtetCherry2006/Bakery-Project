let cart = [];

function loadBasket() {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    let basketTable = document.getElementById("basket-items");
    let totalPrice = 0;

    basketTable.innerHTML = ""; 

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        let displayNumber = index; 

        basketTable.innerHTML += `
            <tr>
                <td>${displayNumber}</td> <!-- Item number -->
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <button class="quantity-btn" onclick="changeQuantity(${index}, -1)">-</button>
                    ${item.quantity}
                    <button class="quantity-btn" onclick="changeQuantity(${index}, 1)">+</button>
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button class="remove-btn" onclick="removeItem(${index})">X</button></td>
            </tr>
        `;
    });

    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
}

function changeQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1); 
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    loadBasket();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadBasket();
}

loadBasket();

function checkout() {
    if (cart.length === 0) {
        alert("Your basket is empty! Please add some items first.");
        return;
    }

    let orderSummary = "Your Order:\n";
    cart.forEach(item => {
        orderSummary += `${item.quantity} x ${item.name} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });

    orderSummary += `\nTotal: $${document.getElementById("total-price").innerText}`;

    alert(orderSummary);
}
