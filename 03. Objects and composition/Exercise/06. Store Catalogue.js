function storeCatalogue(products) {
  let catalogue = {};

  for (let product of products) {
    let [productName, productPrice] = product.split(" : ");
    catalogue[productName] = productPrice;
  }

  let sortedProducts = Object.entries(catalogue).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  let category = "";
  for (let items of sortedProducts) {
    let curentCatecory = items[0][0];
    if (category !== curentCatecory) {
      console.log(curentCatecory);
    }
    while (items[0].startsWith(curentCatecory)) {
      console.log(`  ${items[0]}: ${items[1]}`);
      break;
    }
    category = curentCatecory;
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

