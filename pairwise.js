function pairwise(arr, arg) {
    let sum = 0;
    if(arr.length <= 1){
        return 0;
    }
    let indiceArr = [];
    for (let i = 0; i < arr.length; i++){
        indiceArr.push(i);
    }
    function findPair(iArr){
        if (iArr.length <= 1){
            return;
        }
        let newIArr = [...iArr];
        for (let i = 1; i <= iArr.length; i++){
            if (arr[iArr[0]] + arr[iArr[i]] === arg){
                sum = sum + iArr[0] + iArr[i];
                newIArr.splice(i,1);
                newIArr.shift()

                break; 
            }
            else if (i === iArr.length - 1 && arr[iArr[0]] + arr[iArr[i]] !== arg ){
                newIArr.shift();
            }
        }
        console.log(newIArr);
        findPair(newIArr);

    }
    findPair(indiceArr);
    return sum;
  }
  
  console.log(pairwise([1, 4, 2, 3, 0, 5], 7));
