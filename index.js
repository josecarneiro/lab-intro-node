class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items = this.items.sort(function(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
  }

  load(pos) {
    if (pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
      // return this.items[this.items.length - 1];
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
      // return this.items[this.items.length - 1];
    }
  }

  sum() {
    if (!this.items.length) {
      return 0;
    } else {
      return this.items.reduce((total, num) => {
        return total + num;
      }, 0);
      // let sum = 0;
      // for (let item of this.items) {
      //   sum += item;
      // }
      // return sum;
    }
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      let sum = this.items.reduce((a, b) => a + b, 0);
      // for (let item of this.items) {
      //   sum += item;
      // }
      return sum / this.items.length;
    }
  }
}

//new SortedList();
//console.log(this.load(2));

module.exports = SortedList;
