function cityRecord(name, population, treasury) {
  const city = {
    name,
    population: Number(population),
    treasury: Number(treasury),
    taxRate: 10,

    collectTaxes: () =>
      (city.treasury += Math.floor(city.population * city.taxRate)),
    applyGrowth: (percentage) =>
      (city.population += Math.floor(
        (city.population * Number(percentage)) / 100
      )),
    applyRecession: (percentage) =>
      (city.treasury -= Math.floor((city.treasury * Number(percentage)) / 100)),
  };
  return city;
}
cityRecord("Tortuga", 7000, 15000);

// collectTaxes() - Increase treasury by population * taxRate
// • applyGrowth(percentage) - Increase population by given percentage
// • applyRecession(percentage) - Decrease treasury by given percentage
