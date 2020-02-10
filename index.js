class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items;
  }

  load(pos) {
    if (pos < this.items.length) {
      return this.items[pos];
    } else if (pos >= this.items.length) {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items);
    } else if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items);
    } else if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items.length > 0) {
      return this.items.reduce((a, b) => a + b, 0);
    } else if (this.items.length === 0) {
      return this.items.length;
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else if (this.items.length > 0) {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList;
