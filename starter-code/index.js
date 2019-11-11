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
    if (pos >= this.length){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
      return Math.max(...this.items);
  }

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    let total = 0;
    if (this.length === 0){
      return 0
    } else {
      for (let i = 0; i < this.length; i++){
      total += this.items[i]
    }
    return total
  }
  }
  

  average() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    }
      return this.sum()/ this.length;
    }
}

module.exports = SortedList;
