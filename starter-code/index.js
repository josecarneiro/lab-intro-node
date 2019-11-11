class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort();
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
    // ...
  }

  sum() {
    // ...
  }

  average() {
    // ...
  }
}

module.exports = SortedList;
