function findLowestPrice(inputTowns) {
  const products = {};

  for (const currentTown of inputTowns) {
      let [town, product, price] = currentTown.split(' | ');
      price = Number(price);

      if (products[product]) {
          products[product] = products[product].price > price ? products[product] = { price, town } : products[product];
      } else {
          products[product] = { price, town };
      }
  }

  let result = '';
  for (const [key, value] of Object.entries(products)) {
      result += `${key} -> ${value.price} (${value.town})\n`;
  }

  return result;
}