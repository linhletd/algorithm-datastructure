function insertionSort(array) {
    let result = [array[0]];
    function sort(insertValue, start = 0, end = result.length-1){
        if(insertValue <= result[start]){
            result.unshift(insertValue);
            console.log(result);
            return;
        }
        else if(insertValue >= result[end]) {
            result.push(insertValue);
            console.log(result);
            return;
        }

        let middle = Math.floor((start + end)/2);
        if(insertValue >= result[middle] && insertValue <= result[middle +1]){
            result.splice(middle +1, 0, insertValue);
            console.log(result);
            return;
        }
        else if(insertValue < result[middle]){
            end = middle;
        }
        else if(insertValue > result[middle]){
            start = middle;
        }
        sort(insertValue, start, end);
    }
    for(let i = 1; i < array.length; i++){
        sort(array[i])
    }
    return result;
  }
  
  let x = insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  console.log(x);
  