function addItem() {
    let listElement = document.getElementById('items');
    let newItemText = document.getElementById('newItemText').value;
    let newItemEl = document.createElement('li');
    newItemEl.textContent = newItemText;
    listElement.appendChild(newItemEl);
}