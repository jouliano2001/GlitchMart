document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
    this.reset();
});

function addItem() {
    let itemInput = document.getElementById('item');
    let itemValue = itemInput.value.trim();
    if (itemValue) {
        let li = document.createElement('li');
        li.innerHTML = `${itemValue} <button class="remove" onclick="removeItem(this)">X</button>`;
        document.getElementById('wishlist').appendChild(li);
        itemInput.value = '';
    }
}

function removeItem(button) {
    button.parentElement.remove();
}
