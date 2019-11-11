class SortedList {
  constructor() {
    this.item = [];
    this.length = 0;
  }

  add(item) {
    this.item.push(item);
    this.item.sort((a,b)=>{
      if(a>b){
        return 1
      } else if (a<b){
        return -1
      } else{
        return 0
      }
    })
    this.length = this.item.length;
  }

  get(pos) {
    if(pos>this.length-1){
      throw new Error("OutOfBounds")
    }else{
      return this.item[pos]
    }
  }

  max() {
    if (!this.item.length){
      throw new Error("EmptySortedList")
    }else{
      this.item.sort((a,b)=>{
        if(a>b){
          return 1
        } else if (a<b){
          return -1
        } else{
          return 0
        }
      });
      return this.item[this.length-1]
  }
  }

  min() {
    if (!this.item.length){
      throw new Error("EmptySortedList")
    }else{
      this.item.sort((a,b)=>{
        if(a>b){
          return 1
        } else if (a<b){
          return -1
        } else{
          return 0
        }
      });
      return this.item[0]
  }
  }

  sum() {
   return this.item.reduce((accumulator, value)=>{
     return accumulator + value;
   },0)
  }

  average() {
    if (!this.item.length){
      throw new Error("EmptySortedList")
    }else{
      return (this.item.reduce((accumulator, value)=>{
        return accumulator + value;
      },0)/(this.length))
    }
  }

}

module.exports = SortedList;
