
var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  this.add = function(key, value){
    let hashedKey = hash(key);
    if(this.collection[hashedKey]){
      this.collection[hashedKey][key] = value;
    }
    else {
    this.collection[hashedKey] = {};
    this.collection[hashedKey][key] = value;
    }
  };
  this.remove = function(key){
    let hashedKey = hash(key);
    if(this.collection[hashedKey]){
      if (Object.keys(this.collection[hashedKey]).length === 1){
        delete this.collection[hashedKey];
      }
      else if(this.collection[hashedKey][key]){
        delete this.collection[hashedKey][key];
      }
    }
  };
  this.lookup = function(key){
    let hashedKey = hash(key);
    if(this.collection[hashedKey]){
      let returnedValue = this.collection[hashedKey][key];
      if(returnedValue){
        return returnedValue;
      }
    }
    else {
      return null;
    }
  }
  // change code above this line
};
