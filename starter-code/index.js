class SortedList {
  constructor(sortedList) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  load(pos) {
    if (pos < 0 || pos > this.length - 1) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    const arrSum = this.items.reduce((a, b) => a + b, 0);
    return arrSum;
  }

  average() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      let avg = this.items.reduce((x, a) => {
        return x + a;
      }, 0);
      return avg / this.length;
    }
  }
}

module.exports = SortedList;
