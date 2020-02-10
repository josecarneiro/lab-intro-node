class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    const number = item;
    this.items.push(number);
    this.length = this.items.length;
    this.items.sort(numbersCompare);
    function numbersCompare(a, b) {
      return a - b;
    }
  }

  load(pos) {
    const index = this.items[pos];
    if (pos >= this.items.length || pos < 0) {
      throw new Error('OutOfBounds');
    } else {
      return index;
    }
  }

  max() {
    const max = Math.max(...this.items);
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return max;
    }
  }

  min() {
    const min = Math.min(...this.items);
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return min;
    }
  }

  sum() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
    }
    return sum;
  }

  avg() {
    let avg = 0;
    for (let i = 0; i < this.items.length; i++) {
      avg += this.items[i] / this.items.length;
    }
    return avg;
  }
}

module.exports = SortedList;
