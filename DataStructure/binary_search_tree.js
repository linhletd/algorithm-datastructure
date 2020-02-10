var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // change code below this line
  this.add = function(intNum){
    if(this.root === null){
      let newNode = new Node(intNum);
      this.root = newNode;
      return;
    }
    let found = false;
    let currentNode = this.root;
    let parentLeft;
    let parentRight;
    while (!found){
      
      if (currentNode === null) {
        let newNode = new Node(intNum);
        if (parentLeft){
          parentLeft.left = newNode;
        }
        else {
          parentRight.right = newNode;
        }
        // console.log(parentLeft,parentRight)
        found = true;
        return;
      }
      else if(currentNode.value === intNum){
        found = true;
        return null;
      }

      else if (currentNode.value > intNum){
        parentLeft = currentNode;
        parentRight = undefined;
        currentNode = currentNode.left;
      }
      else if (currentNode.value < intNum){
        parentRight = currentNode;
        parentLeft = undefined;
        currentNode = currentNode.right;
      }
    }

  };
  this.findMin = function(){
    if(this.root === null){
      return null;
    }
    else {
      let min;
      let currentNode = this.root;
      let found = false;
      while (!found){
        if (currentNode.left === null){
          // found = true;
          min = currentNode.value;
          return min;
        }
        else {
          currentNode = currentNode.left;
        }
      }
    }
  };
  this.findMax = function(){
    if(this.root === null){
      return null;
    }
    else {
      let max;
      let currentNode = this.root;
      let found = false;
      while (!found){
        if (currentNode.right === null){
          // found = true;
          max = currentNode.value;
          return max;
        }
        else {
          currentNode = currentNode.right;
        }
      }
    }
  };
  this.isPresent = function(num){
    let currentNode = this.root;
    let found = false;
    while (!found){
      if (currentNode === null){
        found = true;
        return false;
      }
      else if(currentNode.value === num){
        found = true;
        return true;
      }
      else if (currentNode.value > num) {
        currentNode = currentNode.left;
      }
      else if (currentNode.value < num){
        currentNode = currentNode.right;
      }
    }
};
this.findMinHeight = function(){
  if(this.root === null){
    return -1;
  }
  else {
    let min = Number.POSITIVE_INFINITY;
    let i = -1
    function check(node,i){
      i++;
      if(node.left === null && node.right === null){
        if (i < min){
          min = i;
        };
        return;
      }
      else {
        if (node.left){
          let i1 = i;
          check(node.left, i1);
        }
        if(node.right){
          let i2 = i;
          check(node.right, i2)
        }
      }
    }
    check(this.root,i);
    return min;
  }
};
this.findMaxHeight = function(){
      if(this.root === null){
    return -1;
  }
  else {
    let max = -1;
    let i = -1
    function check(node,i){
      i++;
      if(node.left === null && node.right === null){
        if (i > max){
          max = i;
        };
        return;
      }
      else {
        if (node.left){
          let i1 = i;
          check(node.left, i1);
        }
        if(node.right){
          let i2 = i;
          check(node.right, i2)
        }
      }
    }
    check(this.root,i);
    return max;
  }
};
this.isBalanced = function(){
  return this.findMaxHeight() - this.findMinHeight() <= 1;
};
this.inorder = function(){
  if(this.root === null){
    return null;
  }
    let values = [];
    let traversal = this.root;
    function getValues(traversal){
      if(!traversal.left && !traversal.right){
        values.push(traversal.value);
      }
      else {
        if(traversal.left){
          getValues(traversal.left);
        }
        values.push(traversal.value);
        if(traversal.right){
          getValues(traversal.right);
        }
      }
    }
    getValues(traversal);
    return values;
};
this.preorder = function(){
  if(this.root === null){
    return null;
  }
    let values = [];
    let traversal = this.root;
    function getValues(traversal){
      if(!traversal.left && !traversal.right){
        values.push(traversal.value);
      }
      else {
        values.push(traversal.value);
        if(traversal.left){
          getValues(traversal.left);
        }
        if(traversal.right){
          getValues(traversal.right);
        }
      }
    }
    getValues(traversal);
    return values;
};
this.postorder = function(){
  if(this.root === null){
    return null;
  }
    let values = [];
    let traversal = this.root;
    function getValues(traversal){
      if(!traversal.left && !traversal.right){
        values.push(traversal.value);
      }
      else {

        if(traversal.left){
          getValues(traversal.left);
        }
        if(traversal.right){
          getValues(traversal.right);
        }
        values.push(traversal.value);
      }
    }
    getValues(traversal);
    return values;
};
this.levelOrder = function(){
  if(this.root === null){
    return null;
  }
  let values = [];
  let level = [this.root];
  function getValues(level){
    if(level.length === 0){
      return;
    }
    let currentNode = level.shift();
    values.push(currentNode.value);
    if(currentNode.left){
      level.push(currentNode.left);
    }
    if(currentNode.right){
      level.push(currentNode.right);
    }
    getValues(level);
  }
  getValues(level);
  return values;
};
this.reverseLevelOrder = function(){
  if(this.root === null){
    return null;
  }
  let values = [];
  let level = [this.root];
  function getValues(level){
    if(level.length === 0){
      return;
    }
    let currentNode = level.shift();
    values.push(currentNode.value);
    if(currentNode.right){
      level.push(currentNode.right);
    }
    if(currentNode.left){
      level.push(currentNode.left);
    }
    getValues(level);
  }
  getValues(level);
  return values; 
};
this.remove = function(element){
  // if(this.root === null){
  //   return null;
  // }
  // else if(!this.root.left && !this.root.right && this.root.value === element){
  //   this.root = null;
  //   return;
  // }
  // let found = false;
  // function findAndDelete(currentNode){
  //   if (found === true){
  //     return;
  //   }
  //   if(currentNode.left){
  //     if(!currentNode.left.left && !currentNode.left.right && currentNode.left.value === element){
  //       currentNode.left = null;
  //       found = true;
  //       return;
  //     }
  //     else {
  //       findAndDelete(currentNode.left);
  //     }
  //   }
  //     if(currentNode.right){
  //       if(!currentNode.right.left && !currentNode.right.right && currentNode.right.value === element){
  //         currentNode.right = null;
  //         found = true;
  //         return;
  //       }
  //       else {
  //         findAndDelete(currentNode.right);
  //       }
  //     }
  // }
  // findAndDelete(this.root)
  //******************* replace with:
  if(this.root === null){
    return null;
  }

  function findNodeToBind(currentNode){
    let node = currentNode;
    while(node.left){
      node = node.left;
    }
    return node;
  }

  function deleteNode(parent, left, right, branch){

    let truthy = !left + !right;
    if(truthy === 2){
        parent[branch] = null;
        return;
      }
    else if(truthy === 1){
      if(left){
        parent[branch] = left;
      }
      else if(right){
        parent[branch] = right;
      }
    }
    else if(truthy === 0){
      parent[branch] = right;
      findNodeToBind(right).left = left;
    }
  }

  if(this.root.value === element){
    let left = this.root.left;
    let right = this.root.right;
    let truthy = !left + !right;
    if(truthy === 2){
        this.root = null;
        return;
      }
    else if(truthy === 1){
      if(left){
        this.root = left;
      }
      else if(right){
        this.root = right;
      }
    }
    else if(truthy === 0){
      this.root = right;
      findNodeToBind(right).left = left;
    }
  }

  let found = false;
  let left = null;
  let right = null;
  let parent;
  function findAndDelete(currentNode){
    if (found === true){
      return;
    }
    if(currentNode.left){
      if(currentNode.left.value === element){
        left = currentNode.left.left;
        right = currentNode.left.right;
        parent = currentNode;
        deleteNode(parent, left, right,'left');
        found = true;
        return;
      }
      else {
        findAndDelete(currentNode.left);
      }
    }
    if(currentNode.right){
      if(currentNode.right.value === element){
        left = currentNode.right.left;
        right = currentNode.right.right;
        parent = currentNode;
        deleteNode(parent, left, right, 'right');
        found = true;
        return;
      }
      else {
        findAndDelete(currentNode.right);
      }
    }
  }
  findAndDelete(this.root);
}
  // change code above this line
}
let tree = new BinarySearchTree();
tree.add(5);
tree.add(3);
tree.add(4);
tree.add(7);
console.log(tree.findMin())