function solve() {
  let [generateFurniture, boughtFurniture] = document.querySelectorAll("textarea");
  let [generateButton, buyButton] = document.getElementsByTagName("button");
  generateButton.addEventListener("click", generateItem);
  buyButton.addEventListener("click", boughtItems);

  function generateItem() {
    JSON.parse(generateFurniture.value).forEach((item) => {

      //01.Image
      let imgTd = document.createElement("td");
      let img = document.createElement("img");
      img.setAttribute("src", item.img);
      imgTd.appendChild(img)

      //02.Name
      let nameTd = document.createElement("td");  
      let name = document.createElement("p");
      name.textContent = item.name;
      nameTd.appendChild(name)

      //03.Price
      let priceTd = document.createElement("td");
      let price = document.createElement("p");
      price.textContent = Number(item.price);
      priceTd.appendChild(price)

      //04.Decoration factor
      let decFacTd = document.createElement("td");
      let decFactor = document.createElement("p");
      decFactor.textContent = Number(item.decFactor);
      decFacTd.appendChild(decFactor)

      //05.Checkbox
      let checkTd = document.createElement("td");
      let check = document.createElement("input");
      check.setAttribute("type", "checkbox");
      checkTd.appendChild(check)


      let newTr = document.createElement("tr");
      newTr.appendChild(imgTd);
      newTr.appendChild(nameTd);
      newTr.appendChild(priceTd);
      newTr.appendChild(decFacTd);
      newTr.appendChild(checkTd);

      let tbodyElement = document.querySelector("tbody");
      tbodyElement.appendChild(newTr);
    });
  }

  function boughtItems() {
    let furnitureName = [];
    let totalFurniturePrice = 0;
    let furnitureDecFac = 0;
    let checkBoxElements = [...document.querySelectorAll("input[type='checkbox']")];
      checkBoxElements.forEach(x => {
        if (x.checked) {
        let name =   x.parentElement.parentElement.children[1].textContent;
        let price = Number(x.parentElement.parentElement.children[2].textContent);
        let decFactor = Number(x.parentElement.parentElement.children[3].textContent);
       furnitureName.push(name);
       totalFurniturePrice += price;
       furnitureDecFac += decFactor
        }
      })
    let avgDecFac = furnitureDecFac / furnitureName.length;
    boughtFurniture.textContent = 
    `Bought furniture: ${furnitureName.join(', ')}\nTotal price: ${totalFurniturePrice.toFixed(2)}\nAverage decoration factor: ${avgDecFac}`;
  };
}
