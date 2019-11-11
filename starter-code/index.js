class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => {
      return a - b;
    });
  }

  get(pos) {
    if (this.length < pos) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length < 1) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.items.length < 1) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    if (this.items.length < 1) {
      return 0;
    } else {
      return this.items.reduce(function (acumulador, valorAtual, indice, array) {
        return acumulador + valorAtual;
      }, 0);
    }
  }

  average() {
    if (this.items.length < 1) {
      throw new Error('EmptySortedList')
    } else {
      return this.sum() / this.items.length
    }
  }
}

module.exports = SortedList;