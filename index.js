class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    let i = 0;
    while(this.items[i] <= item) i++;
    this.items.splice(i, 0, item);
    this.length++;
  }

  load(pos) {
    if(pos <= this.length - 1){
      return this.items[pos];
    }
    else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    else{
      return Math.max(...this.items);
    } 
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    else{
      return Math.min(...this.items);
    } 
  }

  sum() {
    return this.items.reduce((x, acc) => acc + x, 0);
  }

  avg() {
    if(this.length === 0) throw new Error('EmptySortedList');
    else return this.sum()/this.length;
  }
}

module.exports = SortedList;
