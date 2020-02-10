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
    // ...
  }

  avg() {
    // ...
  }
}

module.exports = SortedList;
