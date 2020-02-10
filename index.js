class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    var num = item;

    this.items.push(num);

    function compararNumeros(a, b) {
      return a - b;
    }

    this.items.sort(compararNumeros);

    this.length = this.items.length;
  }

  load(pos) {
    var num = this.items[pos];

    if (num != undefined) {
      return num;
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items.length > 0) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return this.items.reduce(reducer);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length > 0) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return this.items.reduce(reducer) / this.items.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
