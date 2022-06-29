class List {
  constructor() {
    this.listOfNmbers = []
    this.size = this.listOfNmbers.length

  }

  add(num) {
    this.listOfNmbers.push(num);
    this.size = this.listOfNmbers.length;
    this.listOfNmbers.sort((a,b) => a - b);
  }

  remove(index) {
    if (index < 0 || index >= this.listOfNmbers.length){
      throw new Error ('Nope!')
    }
      this.listOfNmbers.splice(index,1)
      this.size = this.listOfNmbers.length;
    
  }

  get(index) {
    return this.listOfNmbers[index];
    
  }

}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1); 
console.log(list.get(1));
console.log(list.size);
