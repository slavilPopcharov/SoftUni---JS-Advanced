function addItem() {
    //variables for the UL and INPUT elements.
 let newElement = document.getElementById('newItemText').value;
 let list = document.getElementById('items');

 if (newElement.length === 0) return;

    //dynamicly created LI element and it's content.
 let listItem = document.createElement('li');
 listItem.textContent = newElement;

    //dynamicly created A element and it's content.
    //the text "[Delete]", href, function
 let remove = document.createElement('a');
 let linkText = document.createTextNode ('[Delete]');
 remove.appendChild(linkText);
 remove.href = '#';
 remove.addEventListener('click', deleteItem);


 listItem.appendChild(remove);// LI element apends A;
 list.appendChild(listItem);// UL apends the LI;

 function deleteItem() {
     listItem.remove();
 }

}
