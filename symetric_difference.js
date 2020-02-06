function sym(...args){
    let first = args[0];
    let k = 1
    let second = args[k];
    function symoftwo(a1, a2){
        let result =[];
        // if(a1.length === 0 || a2.length === 0){
        //     result = a1.concat(a2);
        // }
        for (let i = 0; i < a1.length; i++){
            if(a2.indexOf(a1[i]) < 0 && a1.indexOf(a1[i]) === i){
                result.push(a1[i]);
                console.log(a1.indexOf(a1[i]),i, result)

            }
        }
        for (let i = 0; i < a2.length; i++){
            if(a1.indexOf(a2[i]) < 0 && a2.indexOf(a2[i]) === i){
                result.push(a2[i]);
                console.log(a2.indexOf(a2[i]),i, result)

            }
        }
        k++;
        if(k < args.length){
           return symoftwo(result, args[k])
        }
        else {
            return result
        };
    };
    return symoftwo(first, second);
}
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));
