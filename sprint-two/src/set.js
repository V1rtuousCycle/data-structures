var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};
// only takes string values
setPrototype.add = function(item) {
  this._storage[item] = 'santa clause';
};

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};
// only takes string values
setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 All the methods are constant time.
 */

/*
 _storage = {}

 _storage.value = '';

 => retireval
this._storage.hasOwnProperty(value)

 */

