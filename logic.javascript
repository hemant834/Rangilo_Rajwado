document.addEventListener('DOMContentLoaded', () => {
    // We are selecting all the buttons that have the 'add-to-cart' class.
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    // This is the empty list where we will display the selected item names.
    const cartItemsList = document.getElementById('cart-items');
    
    // This is the 'Place Order' button.
    const placeOrderButton = document.getElementById('place-order-btn');

    // An array that will store the names of our selected items.
    let cart = [];

    // For each 'Add to Cart' button, we add a click event listener.
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the closest parent div with the 'menu-item' class.
            const menuItem = button.closest('.menu-item');
            
            // Get the item's name from the data attribute.
            const itemName = menuItem.dataset.name;

            // Add the selected item to our cart array.
            cart.push(itemName);
            
            // Update the cart display so the customer can see what they've selected.
            updateCart();
        });
    });

    // This function is for updating the items shown in the cart display.
    function updateCart() {
        // Clear the old list.
        cartItemsList.innerHTML = '';
        
        // For each item in the cart array, create a new list item (<li>).
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item; // Display only the item name.
            cartItemsList.appendChild(li);
        });
    }

    // When the 'Place Order' button is clicked.
    placeOrderButton.addEventListener('click', () => {
        // If the cart is empty, show an alert.
        if (cart.length === 0) {
            alert('Please select an item!');
            return;
        }

        // We are storing the final order in an object.
        const finalOrder = {
            items: cart
        };
        
        // Log the order details to the console.
        console.log('Final Order:', finalOrder);
        
        // Tell the customer the order has been placed.
        alert('Your order has been placed successfully!\n\nOrdered items:\n' + cart.join(', '));
        
        // After placing the order, clear the cart to prepare for a new one.
        cart = [];
        updateCart();
    });
});