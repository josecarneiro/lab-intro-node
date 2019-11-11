class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => {return a-b;});
    this.length++;
  }

  get(pos) {
    if(pos <= this.length-1) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
  }}

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.sort((a,b) => {return b-a;})[0];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.sort((a,b) => {return a-b;})[0];
    }
  }

  sum() {
   return this.items.reduce((acc,item)=>{
     return acc+=item;
  },0)};

  average() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
   return this.sum()/this.items.length;
    }
  }
}

module.exports = SortedList;
