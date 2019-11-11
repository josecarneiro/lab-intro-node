class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>{return a-b;});
    this.length = this.items.length;
  }

  get(pos) {
      if (pos >= 0 && pos < this.length){
        return this.items[pos];
      } else {
         throw new Error('OutOfBounds');
      }
      
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return Math.max(...this.items);

    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return Math.min(...this.items);

    }
  }

  sum() {
    try {
      return this.items.reduce((sum, value) => {
        return sum += value;
      },0);
    }
    catch(error) {
      console.error(error);
    }
  }

  average() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items.reduce((sum, value) => {
        return sum += value ;
      },0)/this.length;
    }
  }
}

module.exports = SortedList;
