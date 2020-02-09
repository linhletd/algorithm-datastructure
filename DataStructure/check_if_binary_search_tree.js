var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
  // change code below this line
      if (tree.root === null){
      return true;
    }

    let result = true;
    function check(currentNode){
        if(!currentNode.left && !currentNode.right){
          return;
        }
        if(currentNode.left && result === true){
          if(currentNode.left.value >= currentNode.value){
              result = false;
              return;
          }
          else {
            let leftNode = currentNode.left;
            check(leftNode);
          }
        }
        else if(currentNode.right && result === true){
          if (currentNode.right.value < currentNode.value){
            result = false;
            return;
          }
          else {
            let rightNode = currentNode.right;
            check(rightNode);
          }
        }
    }
    check(tree.root);
    return result;
  // change code above this line
}
