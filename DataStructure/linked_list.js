function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.head = function(){
      return head;
    };
  
    this.size = function(){
      return length;
    };
  
    this.add = function(element){
      // Only change code below this line
      let newNode = new Node(element);
      if(!head){
        head = newNode;
        length++
      }
      else {
        let traversal = head;
        for(let i = 0; i < length; i++){
          if(traversal.next === null){
            traversal.next = newNode;
            length++
            break;
          }
        }
      }
      // Only change code above this line
    };
    this.remove = function(element){
        // Only change code below this line
          if(!head){
            return;
          }
          else if(head.element === element) {
              head = head.next;
              length--;
            }
          else {
            let currentNode = head;
            while(currentNode.next){
              if(currentNode.next.element === element){
                currentNode.next = currentNode.next.next;
                length--;
              }
              currentNode = currentNode.next;
            }
          }
        // Only change code above this line
      };
      this.indexOf = function(element){
        if(this.isEmpty()){
          console.log('haha')
          return -1;
        }
        else {
          let currentNode = head;
          console.log('am here')
          for(let i = 0; i < this.size(); i++) {
            console.log(i)
                if(currentNode.element ===  element){
                  return i;
                }
                else if (currentNode.element !== element && i === this.size -1){
                  return -1;
                }
              currentNode = currentNode.next;
            }
        }
      };
      this.elementAt = function(index){
           if(this.isEmpty()){
          return undefined;
        }
        else {
          let currentNode = head;
          let i = 0;
          while(currentNode !== null) {
                if(index === i){
                  return currentNode.element;
                }
                else if (currentNode.next === null){
                  return undefined;
                }
              currentNode = currentNode.next;
              i++;
            }
        }
      };
      this.removeAt = function(index){
        if(this.isEmpty() || index < 0 || index >= this.size()){
          return null;
        }
        else if(index === 0){
          let temp = head.element;
          head = head.next;
          console.log(head);
          length--;
          return temp;
        }
        else {
          let currentNode = head;
          let i = 0;
          while(currentNode){
            i++
            if(i === index){
              let temp =currentNode.next.element;
              currentNode.next = currentNode.next.next;
              length--;
              return temp;
            }
            currentNode = currentNode.next;
          }
          return null;
        }
      };
      this.addAt = function(index, element){
        if(index < 0 || index > this.size()){
          return false;
        }
        else if(index === 0){
          let newNode = new Node(element);
          newNode.next = head;
          head = newNode;
          length++;
          return true;
        }
        else {
          let currentNode = head;
          let i =0;
          while(currentNode){
            i++;
            if(i === index){
              let a1 = new Node(element);
              let a2 = currentNode.next;
              currentNode.next = a1;
              a1.next = a2;
              length++;
              return true;
            }
          }
        }
      }
  }
  