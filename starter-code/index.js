class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.length < pos) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let maxElement = Math.max(...this.items);
      return maxElement;
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let minElement = Math.min(...this.items);
      return minElement;
    }
  }

  sum() {
    let total = 0;
    if (this.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < this.length; i++) {
        total = total + this.items[i];
      }
      return total;
    }
  }

  average() {
    let average;
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      average = this.sum() / this.length;
    }
    return average;
  }
}

module.exports = SortedList;

// this.items.sort(item);
// this.items.splice(this.items[2], 0, item);
//     this.items.splice(this.items[1], 0, item);
// 1) should create an empty SortedList
//   #add(x)
//     2) should add a single value to SortedList
//     3) should add a third value to SortedList
//   #get(i)
//     4) should return an OutOfBounds exception if there is no element in that position
//     5) should return the element in that position
//   #add(x) and get(i)
//     6) should add a second value to SortedList, sorted
//     7) should add a third value to SortedList, sorted
//   #max()
//     8) should return an EmptySortedList exception if there is no element in the list
//     9) should return the max element in the list
//   #min()
//     10) should return an EmptySortedList exception if there is no element in the list
//     11) should return the min element in the list
//   #sum()
//     12) should return 0 for an empty sorted list
//     13) should add(sum) all elements of the array if there are elements in the list
//   #average()
//     14) should return an EmptySortedList exception if there are no elements
//     15) should return the average of elements in the array