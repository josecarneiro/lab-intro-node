class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    let position = this.items[pos];
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return position;
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      const maximum = this.items;
      return Math.max(...maximum);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      //const minimum = this.items;
      return this.items[0];
    }
  }
  

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else{
    const total = this.items.reduce((accumulator, value) => accumulator + value, 0);
    return total;
  }
  }

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else{
    const average = this.sum() / this.length;
    return average
  }
}
}
module.exports = SortedList;
