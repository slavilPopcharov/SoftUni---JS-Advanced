function fruitPricePerKg (fruit, grams, price){
const kilograms = (grams / 1000);
const moneyNeeded = (kilograms * price);
console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}
