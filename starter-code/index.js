class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.unshift(item);
    this.length += 1;
    this.items.sort( (a, b) => {
      return a - b;
    });
  }

  get(pos) {
    if (this.length > 0) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length > 0) {
      return this.items.reduce(function(a, b) {
        return Math.max(a, b);
      });
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length > 0 ) {
      return this.items.reduce(function(a, b) {
        return Math.min(a, b);
      });
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    this.add = (a, b) => a + b;
    if (this.length > 0 ) {
      return this.items.reduce(this.add);
    } else {
      return 0;
    }
  }

  average() {
    this.add = (a, b) => a + b;
    if (this.length > 0 ) {
      return this.items.reduce(this.add) / this.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
