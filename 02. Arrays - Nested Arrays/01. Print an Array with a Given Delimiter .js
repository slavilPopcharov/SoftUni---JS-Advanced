function solve(array, delimiter) {
  let resultArray = [];
  for (const ell of array) {
    resultArray.push(ell);
  }

  let output = resultArray.join(delimiter);
  console.log(output);
}
solve(["One", "Two", "Three", "Four", "Five"], "-");
