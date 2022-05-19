function cookingbyNumbers(p1, p2, p3, p4, p5, p6) {
  let num = Number(p1);
  let commands = [p2, p3, p4, p5, p6];

  for (let command of commands) {
    switch (command) {
      case "chop":
        num = num / 2;
        break;
      case "dice":
        num = Math.sqrt(num);
        break;
      case "spice":
        num++;
        break;
      case "bake":
        num = num * 3;
        break;
      case "fillet":
        num = num - num * 0.2;
        break;
    }
    console.log(num);
  }
}
cookingbyNumbers("9", "dice", "spice", "chop", "bake", "fillet");
// chop - divide the number by two
// • dice - square root of a number
// • spice - add 1 to the number
// • bake - multiply number by 3
// • fillet - subtract 20% from the number
