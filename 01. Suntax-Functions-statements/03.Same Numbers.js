function sameNumbers(num) {
  let numAsArray = Array.from(String(num), Number);
  let isAllSame = numAsArray.every((curentNum) => curentNum == numAsArray[0]);
  let sum = numAsArray.reduce((a, b) => a + b);
  console.log(`${isAllSame}\n${sum}`);
}

