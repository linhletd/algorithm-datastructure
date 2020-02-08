var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  };
  var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
    // change code below this line
    this.add = function(element){
      if(this.head === null){
        let newNode = new Node(element, null);
        this.head = newNode;
        this.tail = newNode; 
        return;
      }
      
      let newNode = new Node(element, this.tail);
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }
    this.remove = function(element){
      if(this.head === null){
        return null;
      }
      else {
          let currentNode = this.head;
          while(currentNode !== null){
               if(this.head.data === element){
                  if(this.head.next === null){
                    this.head = null;
                    this.tail = null;
                  }
                  else {
                    this.head = this.head.next;
                    this.head.prev = null;
                  }
                }
                else if(currentNode.data === element && currentNode.prev !== null){
                  let a1 = currentNode.prev;
                  let a2 = currentNode.next;
                  a1.next = a2;
                  if(a2 === null){
                    this.tail = a1;
                  }
                }
              currentNode = currentNode.next;
              }
            }
          
        }
    // change code above this line
  };
  let list = new DoublyLinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.remove(1);
  list.remove(2);
  console.log(list.head)