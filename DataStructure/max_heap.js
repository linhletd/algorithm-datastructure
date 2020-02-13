var MaxHeap = function() {
    // change code below this line
    var collection = [null];
    this.insert = function(element){
      if(collection.length === 1){
        collection.push(element);
        return;
      }
      function insertNum(currentIndex = collection.length){
        if(currentIndex === 1){
          return;
        }
        let parentIndex = Math.floor(currentIndex/2);
        if(element <= collection[parentIndex] && currentIndex === collection.length){
          collection.push(element);
          return;
        }
  
        else if (element > collection[parentIndex]){
          collection[currentIndex] = collection[parentIndex];
          collection[parentIndex] = element;
          insertNum(parentIndex);
        }
      }
      insertNum();
    };
    this.print = function(){
      return collection;
    }
    // change code above this line
  };
  let a = new MaxHeap();
  a.insert(1);
  a.insert(2);
  a.insert(4);
  a.insert(6);
  a.insert(7);
  console.log(a.print())