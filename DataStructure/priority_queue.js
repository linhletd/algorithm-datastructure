function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function(element){

      if(!(Array.isArray(element) && Number.isInteger(element[1]))){
        console.log('invalid element format');
        return;
      }
      if(this.collection.length === 0){
        this.collection.push(element);
        return;
      };
      for(let i = this.collection.length - 1; i >= 0; i--){
        if(i === this.collection.length -1 && element[1] >= this.collection[i][1]){
          this.collection.push(element);
          return;
        }
        if(this.collection[i][1] <= element[1]){
          this.collection.splice(i+1, 0, element);
          return;
        }
        if(i === 0 && this.collection[i][1] > element[1]){
          this.collection.unshift(element);
          return;
        }
      }
    };
    this.dequeue = function(){
      return this.collection.shift();
    };
    this.size = function(){
      return this.collection.length;
    };
    this.isEmpty = function(){
      return this.collection.length === 0 ? true : false;
    }
    // Only change code above this line
}

let obj = new PriorityQueue();
obj.enqueue(['h',1]);
obj.enqueue(['a',-1]);
obj.enqueue(['h',0]);
obj.enqueue(['h',2]);
obj.printCollection();