class VegetableStore {
  
  constructor(ownner, location) {
    this.ownner = ownner;
    this.location = location;
    this.availableProducts = [];
    
  }

  loadingVegetables(vegetables) {
    let addedProducts = [];
    for (const vegetable of vegetables) {
      let [vegieName, quantity, price] = vegetable.split(" ");
      quantity = Number(quantity);
      price = Number(price);

      let product = this.availableProducts.find((p) => p.vegieName === vegieName);
      if (product === undefined) {
        this.availableProducts.push({ vegieName, quantity, price });
        addedProducts.push(vegieName);
      } else {
        product.quantity += quantity;
        if (price > product.price) {
          product.price = price;
        }
      }
    }

    return `Successfully added ${addedProducts.join(", ")}`;
  }
 
  buyingVegetables (selectedProducts){
    let totalPrice = 0;

     for (const order of selectedProducts) {
      let [product, quantity] = order.split(' ')
      quantity = Number(quantity)

      let isInStore = this.availableProducts.find(x => x.vegieName == product);
      if (!isInStore){
        throw new Error (
          `${product} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
      };

      if (quantity > isInStore.quantity){
        throw new Error (
`The quantity ${quantity} for the vegetable ${product} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
      };

        totalPrice += quantity * isInStore.price;
        isInStore.quantity-= quantity;
       
     }
      return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
  }

  rottingVegetable (type, quantity){
    quantity = Number(quantity)
    let vegetable = this.availableProducts.find(v => v.vegieName == type)
    if(!vegetable){
      throw new Error ( `${type} is not available in the store.`)
    }
    if(quantity > vegetable.quantity){
      vegetable.quantity = 0

      return `The entire quantity of the ${type} has been removed.`
    }

    vegetable.quantity -= quantity
    return  `Some quantity of the ${type} has been removed.`
  }


  revision (){
    let sortedByPrice = this.availableProducts
    .sort((a,b) => a.price - b.price)
    .map(x => `${x.vegieName}-${x.quantity}-$${x.price}`)
    let allVegies = []
    allVegies.push(sortedByPrice)
   
    return[
      "Available vegetables:",
      allVegies[0].join('\n'),
      `The owner of the store is ${this.ownner}, and the location is ${this.location}.`
    ].join('\n')
  }
} //

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta,Sofia");

console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8",
"Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


 