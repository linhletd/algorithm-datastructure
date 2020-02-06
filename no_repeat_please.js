function permAlone(str) {
    let count = 0;
    let k = 0;
    let arr = [str[0]];
    let num =1;
    for (let j = 1; j <= str.length; j++){
      num = num*j;
    }
    let numX =0;
    function generate(curArr,k){
      if(str.length === 1){
        count = 1;
        return;
      }
      else if(str.match(/^(.)\1+$/)){
        count = 0;
        return;
      }
      for (let i = 0; i <= curArr.length; i++){
        let newk = k+1;
        let newArr = [...curArr];
        newArr.splice(i, 0, str[newk]);
        if(newk === str.length-1){
          console.log(newArr)
          numX++
          if(!newArr.join('').match(/(.)\1/)){
            count++;
            // console.log(newArr.join(''));
          }
          if(numX === num){
            // console.log(count)
            return;
          }
        }
        else {
          generate(newArr, newk); 
        }
      }
    }
    generate(arr,k);
    return count;
  }
  
  console.log(permAlone('zzz'));
  