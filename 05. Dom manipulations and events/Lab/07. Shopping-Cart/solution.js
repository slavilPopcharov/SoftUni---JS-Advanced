function solve() {
  const addButtons = [...document.querySelectorAll("body > div > div > div.product-add > button"),];
  addButtons.forEach((e) => e.addEventListener("click", addBtn));
  const textAera = document.querySelector("textarea");
  const checkoutBtn = document.querySelector("body > div > button");
  checkoutBtn.addEventListener("click", boughtProducts);
  const allBtns = [...document.querySelectorAll("button")];
  textAera.textContent = "";
  let totalPrice = 0;
  let productList = [];

  function addBtn(ev) {
    if (ev.target.tagName == "BUTTON") {
      let productInfo = ev.target.parentElement.parentElement;
      let productName = productInfo.children[1].children[0].textContent;
      let productPrice = productInfo.children[3].textContent;
      totalPrice += Number(productPrice);
      productList.push(productName);
      textAera.textContent += `Added ${productName} for ${productPrice} to the cart.\n`;
    }
  }
  function boughtProducts() {
    let list = productList.join(", ");
    textAera.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}`;
    allBtns.forEach((e) => (e.disabled = true));
  }
}
