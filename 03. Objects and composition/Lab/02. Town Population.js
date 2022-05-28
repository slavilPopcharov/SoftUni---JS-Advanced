function townPopulation(towns) {
  let townInfo = {}
  for (const town of towns) {
    let [name, population] =  town.split(' <-> ')
    if (!townInfo.hasOwnProperty(name)) {
      townInfo[name] = Number(population)
    } else {
      townInfo[name] += Number(population)
    }
  }

  for (const key in townInfo) {
    console.log(`${key} : ${townInfo[key]}`);
  }
  
  
}
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])