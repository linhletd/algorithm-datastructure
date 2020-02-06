function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let result = [...arr1];
    let itemName = arr1.map((cur) => (cur[1]));
    for(let i = 0; i < arr2.length; i++){
        if (itemName.indexOf(arr2[i][1]) < 0){
            result.push(arr2[i]);
        }
        for(let j = 0; j < arr1.length; j++){
            if(arr2[i][1] === arr1[j][1]){
                result[j][0] +=arr2[i][0];
            }
            
        }
    }
    return result.sort((a,b) => {
        if(a[1] > b[1]){
            return 1
        }
        else if(a[1] < b[1]){
            return -1;
        }
        return 0;
    });
}

// Example inventory lists
var curInv = [
    [1, "Hair Pin"],
    [5, "Microphone"],
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv))