var Map = function() {
    this.collection = {};
    // change code below this line
    this.add = function(key, value){
      this.collection[key] = value;
    };
    this.remove = function(key){
      delete this.collection[key];
    };
    this.has = function(key){
      return this.collection.hasOwnProperty(key);
    };
    this.get = function(key){
      return this.collection[key];
    };
    this.values = function(){
      let values = [];
      let keys = Object.keys(this.collection);
      keys.forEach((cur) => {values.push(this.collection[cur].toString())})
      return values;
    };
    this.clear = function(){
      this.collection = {};
    };
    this.size = function(){
      return Object.keys(this.collection).length
    }
    // change code above this line
  };
  