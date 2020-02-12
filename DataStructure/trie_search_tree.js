var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // change code below this line
  this.root = new Node();
  this.add = function(word){
    let i = 0;
    let newNode;
    let nextNode;
    function addWord(currentNode){
      if(!currentNode.keys.has(word[i])){
        newNode = new Node();
        newNode.value = word[i];
        currentNode.keys.set(word[i],newNode);
        if(i === word.length - 1){
          newNode.setEnd();
          return;
        }
        nextNode = newNode;
        i++;

      }
      else{
        nextNode = currentNode.keys.get(word[i++]);
      }
      addWord(nextNode);
    }
    addWord(this.root);
  };
  this.isWord = function(word){
    let nextNode;
    let i = 0;
    let completed = false;
    let result = false;
    function findWord(currentNode){
      if(completed || i >= word.length){
        return;
      }
      if(!currentNode.keys.has(word[i])) {
        completed = true;
        return;
      }
      else if(currentNode.keys.has(word[i])){
        nextNode = currentNode.keys.get(word[i]);
        console.log(nextNode.value)
        if(i === word.length - 1 && nextNode.value === word[i] && nextNode.isEnd()){
          result = true;
          completed = true;
          return;
        }
        i++;
        findWord(nextNode);
      }

    }
    findWord(this.root);
    return result;
  };
  this.print = function(){
    let results = [];
    let nextNode;
    function retrieveWord(currentNode,currentWord = ''){
      if(!currentNode.keys.size){
        return;
      }
      else {
        for ([,nextNode] of currentNode.keys.entries()){
          let newWord = currentWord + nextNode.value;
          if(nextNode.isEnd()){
            results.push(newWord);
          }
          retrieveWord(nextNode, newWord);
        }
      }
    }
    retrieveWord(this.root);
    return results;
  }
  // change code above this line
};
let trie = new Trie();
trie.add('linh');
trie.add('linhle');
console.log(trie.print())