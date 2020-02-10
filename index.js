class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    return (this.length = this.items.length);
  }

  load(pos) {
    if (this.length > pos) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length !== 0) {
      return Math.max(...this.items); //... chama do array
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    {
      if (this.items.length !== 0) {
        return Math.min(...this.items); //... chama do array
      } else {
        throw new Error('EmptySortedList');
      }
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc, x) => acc + x, 0);
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
