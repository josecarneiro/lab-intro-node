class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort(function(a, b){return a-b});
  }
  
  get(pos) {
    if (pos >= this.length) {
      throw new Error('OutOfBounds');
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
    const arrSum = this.items.reduce((a,b) => a + b, 0);
    return arrSum;
  }
  
  average() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      const arrAvg = this.items.reduce((a,b) => a + b, 0) / this.length;
      return arrAvg;
    }
  }
}

module.exports = SortedList;
