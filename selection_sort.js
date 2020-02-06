function selectionSort(array) {
    let result = [];
    function sort(arr){
        if(arr.length === 1){
            result.push(arr[0]);
            return;
        }
        let temp;
        let min = arr[0];
        let index = 0;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
                index = i;
            }
        }
        result.push(min);
        arr[index] = arr[0];
        sort(arr.slice(1));

    };
    sort(array);
    return result;
  }
  
  
  let x = selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  console.log(x)
  