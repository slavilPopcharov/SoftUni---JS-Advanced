function solve(array, rotations) {
  while (rotations > 0) {
    let lastEll = array.pop();
    array.unshift(lastEll);
    rotations--;
  }
  console.log(array.join(" "));
}

solve(["Banana", "Orange", "Coconut", "Apple"], 15);
