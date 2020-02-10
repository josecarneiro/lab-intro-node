class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }
      return 0;
    });

    this.length = this.items.length;
  }

  load(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items.indexOf(pos);
    }
  }

  max() {
    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.length <= 0) {
      return 0;
    } else {
      return this.items.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
    }
  }

  avg() {
    if(this.length <= 0) {
      throw new Error('EmptySortedList');
        } else {
      return this.sum()/this.length;
    }
  }
}

module.exports = SortedList;
