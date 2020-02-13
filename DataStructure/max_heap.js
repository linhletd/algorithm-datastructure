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
    };
    this.remove = function(){
        console.log(collection,'hehe');
if(collection.length === 1){
return null;
}
else if(collection.length === 2){
let max = collection[1];
collection[1] = collection.pop();
return max;
}
let max = collection[1];
let nextIndex;
let temp;
collection[1] = collection.pop();
function exchange(currentIndex = 1){

if(collection[2*currentIndex]){
  nextIndex = 2*currentIndex;
  if(collection[2*currentIndex +1] > collection[2*currentIndex]){
    nextIndex = 2*currentIndex+1;
  }
  if(collection[currentIndex] < collection[nextIndex]){
    temp = collection[currentIndex];
    collection[currentIndex] = collection[nextIndex];
    collection[nextIndex] = temp;
    exchange(nextIndex);
  }
}
}
exchange();
return max;
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