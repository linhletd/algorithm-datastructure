var Map = function() {
    this.collection = {};
    this._entries = [];
    // change code below this line
    this.entries = function(){
        return this._entries;
    }
    this.add = function(key, value){
      this.collection[key] = value;
      this._entries.push(key);
    };
    this.remove = function(key){
      delete this.collection[key];
      let removeIndex = this.entries().indexOf(key);
      this._entries.splice(removeIndex, 1);
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
      this._entries = [];
    };
    this.size = function(){
      return Object.keys(this.collection).length
    }
    
    // change code above this line
  };
  