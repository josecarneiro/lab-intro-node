class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    
    function sortNumbers(a, b) {
      return a - b;
    }
    
    this.items.push(item) 
    this.items.sort(sortNumbers)
    this.length = this.items.length

  }

  load(pos) {
     if (pos < this.items.length) {
       return this.items[pos]
     } else {
       throw new Error('OutOfBounds');
     }
  }

  max() {
   if (this.items.length === 0) {
    throw new Error('EmptySortedList');
   } else {
     return Math.max(...this.items)
   }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
     } else {
       return Math.min(...this.items)
     }
    }
  

  sum() {
    return this.items.reduce((a, b) => a + b, 0)
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
    const sum = this.sum()
    return sum / this.items.length
  }
}
}

module.exports = SortedList;
