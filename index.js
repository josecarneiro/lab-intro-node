class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
    // ...
  }

  add(item) {
    let i = 0;
    while (this.items[i] <= item) i++;
    this.items.splice(i, 0, item);
    this.length++;
    //this.items.push(item);
    //this.items.sort(function(a, b){return a-b});
    // ...
  }

  load(pos) {
    if (pos > this.length - 1) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return Math.max(...this.items);
    // ...
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
    // ...
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((a, b) => a + b, 0);
    // ...
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
