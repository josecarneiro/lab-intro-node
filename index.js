class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length += 1;
  }

  load(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      this.items.sort((a, b) => b - a);
    }
    return this.items[0];
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      this.items.sort((a, b) => a - b);
    }
    return this.items[0];
  }

  sum() {
    var sum = 0;
    for (const c of this.items) {
      sum += c;
    }
    return sum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      var sum = 0;
      for (const c of this.items) {
        sum += c;
      }
      return sum / this.length;
    }
  }
}

module.exports = SortedList;
