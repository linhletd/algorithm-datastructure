
function bubbleSort(array) {
    // change code below this line
    let go = false;
    let curMax = array[0];
    for(let i = 0; i < array.length - 1; i++){
      console.log(go, curMax);
  
      if(array[i] > array[i+1]){
        if(array[i+1] <= curMax){
          go = true;
        }
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        if(array[i] > curMax){
          curMax = array[i];
        }
      }
    }
    
    if(go){
      console.log(bubbleSort(array));
    }
    return array;
    // change code above this line
  }
  
  let x = bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  console.log(x)
  

