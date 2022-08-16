
function solution(num) {
  function sum(num2) {
    let res = num + num2;
    return res
  }
  return sum
}

let greet = solution(7);
console.log(greet(2));
console.log(greet(3));


