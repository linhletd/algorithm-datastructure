// check if array is sorted
function isSorted(arr) {
  var check = i =>
    i == arr.length - 1 ? true : arr[i] > arr[i + 1] ? false : check(i + 1);
  return check(0);
}
// generate a randomly filled array
var array = new Array();
(function createArray(size = 5) {
  array.push(+(Math.random() * 100).toFixed(0));
  return size > 1 ? createArray(size - 1) : undefined;
})(25);
var MinHeap = function() {
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
        if(element >= collection[parentIndex] && currentIndex === collection.length){
          collection.push(element);
          return;
        }

        if (element < collection[parentIndex]){
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
      let min = collection[1];
      collection[1] = collection.pop();
      return min;
      }
      let min = collection[1];
      let nextIndex;
      let temp;
      collection[1] = collection.pop();
      function exchange(currentIndex = 1){

      if(collection[2*currentIndex]){
        nextIndex = 2*currentIndex;
        if(collection[2*currentIndex +1] < collection[2*currentIndex]){
          nextIndex = 2*currentIndex+1;
        }
        if(collection[currentIndex] > collection[nextIndex]){
          temp = collection[currentIndex];
          collection[currentIndex] = collection[nextIndex];
          collection[nextIndex] = temp;
          exchange(nextIndex);
        }
      }
      }
      exchange();
      return min;
      };
    this.sort = function(){
      if(collection.length <= 2){
        return collection;
      }
      let result = [collection[1]];
      function sortElement(parentIndex = 1, resultParentIndex = 1){
        function insert(element,start = 0, end = result.length -1){

          if(element >= result[result.length - 1]){
            result.push(element);
            insertedIndex = result.length - 1;
            return;
          }
          else if(element === result[start]){
            result.splice(start, 0, element);
            insertedIndex = start;
            return;
          }
          else if(end - start === 1){
            result.splice(end, 0, element);
            insertedIndex = end;
            return;
          }
          else if(element >= result[Math.floor((start + end)/2)]){
            insert(element, Math.floor((start + end)/2) , end);
          }
          else if(element < result[Math.floor((start + end)/2)]){
            insert(element, start, Math.floor((start + end)/2));
          }
        }
        if(collection[2*parentIndex]){
          //insert element into result at segment start from parentIndex
          var insertedIndex;
          insert(collection[2*parentIndex], resultParentIndex, result.length - 1);
          sortElement(2*parentIndex, insertedIndex);
        }
        if(collection[2*parentIndex + 1]){
          //insert element into result at segment start from parentIndex
          var insertedIndex;
          insert(collection[2*parentIndex + 1], resultParentIndex, result.length - 1);
          sortElement(2*parentIndex + 1, insertedIndex);
        }
      }
      sortElement();
      return result;   
    }
  // change code above this line
};
let x = new MinHeap();
x.insert(30);
x.insert(20);
x.insert(25);
x.insert(4);
x.insert(5);
x.insert(9);
x.insert(11);
console.log(x.sort())