// Initialize the cart array from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart Function
function addToCart(productId, productName, productPrice, productImage) {
    // Remove 'PKR' and commas, then parse as float
    let price = parseFloat(productPrice.replace('PKR', '').replace(',', '').trim());
    
    // Check if the product is already in the cart
    let existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        // Increase quantity if already in cart
        existingProduct.quantity += 1;
    } else {
        // Add new product to cart
        cart.push({
            id: productId,
            name: productName,
            price: price,
            image: productImage,
            quantity: 1
        });
    }

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart counter
    updateCartCounter();

    alert(`${productName} added to the cart!`);
}


// Remove from Cart Function
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item removed from the cart.');
    location.reload();
}

// Update Cart Counter
function updateCartCounter() {
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-counter').innerText = totalItems;
}

// Load Cart Items on Cart Page
document.addEventListener('DOMContentLoaded', function () {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.querySelector('.cart1');
    let summaryContainer = document.querySelector('.summary1');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<h5 class="text-muted">Your cart is empty</h5>';
        summaryContainer.innerHTML = '';
        return;
    }

    let cartItemsHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        let itemTotal = item.quantity * item.price;
        totalPrice += itemTotal;

        cartItemsHTML += `
            <div class="row border-top border-bottom">
                <div class="row main1 align-items-center">
                    <div class="col-2"><img class="img-fluid" src="${item.image}" alt="${item.name}"></div>
                    <div class="col">
                        <div class="row text-dark">${item.name}</div>
                        <div class="row text-muted">Quantity: ${item.quantity}</div>
                    </div>
                    <div class="col text-dark">PKR: ${itemTotal.toFixed(2)} 
                        <span class="close1" onclick="removeFromCart('${item.id}')">&#10005;</span>
                    </div>
                </div>
            </div>
        `;
    });

    cartContainer.innerHTML = cartItemsHTML;

    summaryContainer.querySelector('.total-price').innerText = `PKR: ${totalPrice.toFixed(2)}`;
});

// Initialize Cart Counter
updateCartCounter();
