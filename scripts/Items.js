let item = document.getElementById("item");
item.addEventListener('click', items);

function items(event)
 {
    event.preventDefault();

    let itemName = document.querySelector('.itemname').textContent; // Corrected selector
    let itemPrice = document.querySelector('.itemprice').textContent; // Corrected selector

    window.alert(`Item added to cart:\n${itemName}\n${itemPrice}`);
}
