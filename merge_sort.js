function mergeSort(array) {
    let splitedArr = [];
    let newArr = [];
    function split(arr){
        if(arr.length ===  0){
            return;
        }
        else if(arr.length === 1){
            splitedArr.push(arr);
            return;
        }
        let mid = Math.floor(arr.length / 2);
        let leftArr = arr.slice(0, mid);
        let rightArr = arr.slice(mid);
        if (leftArr.length === 1 && rightArr.length === 1){
            if(leftArr[0] <= rightArr[0]){
                splitedArr.push(leftArr.concat(rightArr));
            }
            else {
                splitedArr.push(rightArr.concat(leftArr));
            }
            return;
        }
        split(leftArr);
        split(rightArr);
    }
    function merge(arr1, arr2){
        let result = [...arr1];
        let start = 0;
        let end = result.length - 1;
        function insert(insertValue){
            
            if(insertValue <= result[start]){
                result.unshift(insertValue);
                end = result.length - 1;
                // console.log(result);
                return;
            }
            else if(insertValue >= result[end]) {
                result.push(insertValue);
                start = result.length - 1;
                end = result.length - 1;
                // console.log(result);
                return;
            }
    
            let middle = Math.floor((start + end)/2);
            if(insertValue >= result[middle] && insertValue <= result[middle +1]){
                result.splice(middle +1, 0, insertValue);
                start = middle + 1;
                end = result.length - 1;
                // console.log(result);
                return;
            }
            else if(insertValue < result[middle]){
                end = middle;
            }
            else if(insertValue > result[middle]){
                start = middle;
            }
            insert(insertValue);
        }
        for (let i = 0; i < arr2.length; i++){
            insert(arr2[i]);
        }
        return result;
    }
    function sort(arr){
        newArr = [];
        for(let i = 0; i < arr.length; i += 2){
            if(i === arr.length - 1){
                newArr.push(arr[i]);
            }
            else{
                newArr.push(merge(arr[i], arr[i+1]))
            }
            // console.log(newArr)
        }
        if(newArr[0].length === array.length){
            return newArr[0];

        }

       return sort(newArr);
    }
    split([...array]);
    
    return sort(splitedArr)
  }
  
  let sortedArray = mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  console.log(sortedArray);
