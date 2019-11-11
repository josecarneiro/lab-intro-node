class SortedList {
  constructor(arr) {
    this.items = [];
    this.length = this.items.length;
    // this.sortedList = this.items.sort((a, b, a - b));
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (this.length < pos) {
      throw new Error('OutOfBounds');
    } else return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      this.items.sort(function(a, b) {
        return a - b;
      });
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      this.items.sort(function(a, b) {
        return a - b;
      });
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((x, a) => {
      return x + a;
    }, 0);
  }

  average() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      let average = this.items.reduce((x, a) => {
        return x + a;
      }, 0);
      return average / this.length;
    }
  }
}

module.exports = SortedList;
