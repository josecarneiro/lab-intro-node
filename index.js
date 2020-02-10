class SortedList {
  constructor(items) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);

    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  load(pos) {
    if (this.items[pos] !== undefined) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }

    //if (this.items[pos] !== undefined) {this.items[pos]} else {'OutOfBounds'}
  }

  max() {
    if (this.items == '') {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.items == '') {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    var add = 0;
    for (let i of this.items) {
      add += i;
    }
    return add;
  }

  avg() {
    if (this.items == '') {
      throw new Error('EmptySortedList');
    } else {
      var add = 0;
      for (let i of this.items) {
        add += i;
      }

      return add / this.items.length;
    }
  }
}

module.exports = SortedList;
