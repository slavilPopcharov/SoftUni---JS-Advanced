function solve(commands) {
  let n = 1;
  let result = [];
  for (const command of commands) {
    if (command === "add") {
      result.push(n);
    } else if (command === "remove") {
      result.pop(n);
    }
    n++;
  }
  let output = result.join("\n");
  result.length == 0 ? console.log("Empty") : console.log(output);
}
solve(["add", "add"]);
