class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  //[1,2,3,4,5]

  add(item) {
    this.items.push(item);
    this.items.sort((firstNumb, secondNumb) => {
      return firstNumb - secondNumb;
    });
    this.length = this.items.length;
  }

  load(pos) {
    this.items[pos];
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  // max() {
  //   if (this.items.length !== 0) {
  //     return Math.max(...this.items);
  //   } else {
  //     throw new Error('EmptySortedList');
  //   }
  // }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
    }
  }

  avg() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
