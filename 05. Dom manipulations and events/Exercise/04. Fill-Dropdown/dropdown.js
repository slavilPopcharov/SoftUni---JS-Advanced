function addItem() {
    const selectElement = document.getElementById('menu')
    const itemeNameElement = document.getElementById('newItemText')
    const itemeValueElement = document.getElementById('newItemValue')

   let newOption = document.createElement('option');
   newOption.textContent = itemeNameElement.value
   newOption.value = itemeValueElement.value
   selectElement.appendChild(newOption)
   itemeNameElement.value = ''
   itemeValueElement.value = ''
}