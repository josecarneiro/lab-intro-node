class SortedList {
  constructor(items, length) {
    // ...
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    // ...
    this.items.push(item);
    this.items.sort((a, b) => {
      return a -b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    // ...
    if (this.length < pos) {
      throw new Error('OutOfBounds');
    }
    else {                  
      return this.items[pos];
    }    
  }

  max() {
    // ...
    if (this.length < 1) {
      throw new Error('EmptySortedList');
    }
    else {
      return Math.max(...this.items)
    }
  }

  min() {
    // ...
    if (this.length < 1) {
      throw new Error('EmptySortedList');
    }
    else {
      return Math.min(...this.items)
    }
  }

  sum() {
    // ...
    if (this.length < 1) {
      return 0;
    }
    else {
      return this.items.reduce((a, b) => {
        return a + b;
      }, 0);
    }
  }

  average() {
    // ...    
    if (this.length < 1) {
      throw new Error('EmptySortedList');
    }
    else {
      return this.sum() / this.items.length
    }
  }
}

module.exports = SortedList;
