function sortByCommand(array, command) {
  return command == "asc"
    ? result = array.sort((a,b) => a - b)
    : result = array.sort((a,b) => b - a)
}

console.log(sortByCommand([14, 7, 17, 6, 8], "asc"));
console.log(sortByCommand([14, 7, 17, 6, 8], "desc"));
