function heroicInventory(input) {
  let heroes = [];

  for (const element of input) {
    let [name, level, items] = element.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];

    heroes.push({ name, level, items });
  }

  return JSON.stringify(heroes);
}
