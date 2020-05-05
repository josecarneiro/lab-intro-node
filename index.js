class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b); // a-b, pq quero por ordem crescente, se quisesse por ordem decrescente tinha que pôr b-a. Se o a>b então n>0, se o a<b então n<0
    this.length = this.items.length;
  }

  load(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (!this.items.length) {
      return 0;
    } else {
      const sum = this.items.reduce((acc, val) => acc + val, 0); //para cada valor da lista vamos somá-lo ao acc
      return sum;
    }
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      const sum = this.items.reduce((acc, val) => acc + val, 0); //para cada valor da lista vamos somá-lo ao acc
      return sum / this.length;
    }
  }
}

module.exports = SortedList;
