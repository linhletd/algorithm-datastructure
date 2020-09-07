function quickSort(arr) {
    let a = arr.splice(0, arr.length);
    let split;
    (split = (a)=>{
        if(a.length == 1){
            arr.push(a[0]);
            return;
        }
        else{
            let pivot = a[a.length-1];
            let a1 = [], a2 = [], am = [];
            for(let i = 0; i < a.length; i++){
                if(a[i] < pivot){
                    a1.push(a[i])
                }
                else if(a[i] === pivot){
                    am.push(a[i]);
                }
                else{
                    a2.push(a[i])
                }
            }
            a1.length && split(a1);
            for(let i = 0; i < am.length; i++){
                arr.push(am[i]);
            }
            a2.length && split(a2);
        }
    })(a)
    return arr;
  }
  
  // test array:
  let arr = quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  console.log(arr);
  