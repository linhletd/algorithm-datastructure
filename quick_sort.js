function quickSort(array) {
    let newArr = [];
    function sort(arr, index = 0){
        if(arr.length === 0){
            return;
        }
        let middle = arr[0];
        let less = [];
        let greater = [];
        for(let i = 1; i < arr.length; i++){
            if(arr[i] <= middle){
                less.push(arr[i]);
            }
            else if(arr[i] > middle){
                greater.push(arr[i]);
            }
        }
        let leftIdx = index;
        let rightIdx = index + less.length + 1;
       
        newArr[rightIdx - 1] = middle;
        sort(less, leftIdx);
        sort(greater, rightIdx);
    }
    sort(array);
    return newArr;
  }
  
  // test array:
  let arr = quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  console.log(arr);
  