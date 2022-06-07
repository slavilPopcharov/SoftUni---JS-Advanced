function rectangle(width, height, color) {
  function capitalize(word) {
      return word[0].toUpperCase() + word.slice(1);
  }

  function calcArea() {
      return this.width * this.height;
  }

  return {
      width,
      height,
      color: capitalize(color),
      calcArea
  }
}