function solve(arr) {
  let result = []
  class Town {
      constructor(town, latitude, longitude) {
          this.Town = town;
          this.Latitude = latitude;
          this.Longitude = longitude;
      }
  }

  for (let index = 1; index < arr.length; index++) {
      let array = arr[index].split('|').map(t => t.trim()).filter(x => x.length != 0)
      let townName = array[0]
      let latitude =  Number( Number(array[1]).toFixed(2))
      let longitude =   Number(Number(array[2]).toFixed(2))

      let town = new Town(townName, latitude, longitude)

      result.push(town)
  }
  return JSON.stringify(result)
}
solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
