class Garden {
  constructor(spaceAvaible) {
    this.spaceAvaible = spaceAvaible;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    
    if (this.spaceAvaible < spaceRequired) {
      throw new Error("Not enough space in the garden.");
    }

    this.spaceAvaible -= spaceRequired;
    this.plants.push({
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0,
    });


    return `The ${plantName} has been successfully planted in the garden.`;
  } //f1

  ripenPlant(plantName, quantity) {
    if (quantity <= 0) {
      throw new Error("The quantity cannot be zero or negative.");
    }

    const curentPlant = this.plants.find((p) => p.plantName == plantName);
    if (curentPlant == undefined) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    if (curentPlant.ripe) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    curentPlant.ripe = true;
    curentPlant.quantity += quantity;
    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  } //f2

  harvestPlant(plantName) {
    const curentPlant = this.plants.findIndex((p) => p.plantName == plantName);
    if (curentPlant == -1) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }
    const plant = this.plants[curentPlant]
    
    if ((plant.ripe == false)) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`);
    }
    this.plants.splice(curentPlant, 1);
    this.storage.push({
      plantName,
      quantity: plant.quantity
    });
    this.spaceAvaible += plant.spaceRequired
    return `The ${plantName} has been successfully harvested.`
  } //f3

  generateReport() {
    
    let gardenPlantsList = this.plants.map(p => p.plantName).sort((a,b) => a.localeCompare(b))
    let plantsInTheGarden = `"Plants in the garden: ${gardenPlantsList.join(', ')}`;

     let storageList = "Plants in storage: The storage is empty."
    if (this.storage.length > 0){
      let plantsInStorage = this.storage.map(p => `${p.plantName} (${p.quantity})`)
      storageList = `Plants in storage: ${plantsInStorage.join(', ')}`

    }
 
    return [
      `The garden has ${this.spaceAvaible} free space left.`,
      plantsInTheGarden, 
      storageList
     
    ].join('\n')
     

  } //f4
}

const myGarden = new Garden(250)

 console.log(myGarden.addPlant('apple', 20));

 console.log(myGarden.addPlant('orange', 200));

 console.log(myGarden.addPlant('raspberry', 10));

 console.log(myGarden.ripenPlant('apple', 10));

 console.log(myGarden.ripenPlant('orange', 1));

 console.log(myGarden.harvestPlant('apple'));

console.log(myGarden.harvestPlant('raspberry')); 