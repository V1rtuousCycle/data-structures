var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // expect(tree.children[0].value).to.equal(5);
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, node = this) {
  // same recursion method as in linked list

  var result = false;
  // base case
  if ( node.value === target ) {
    result = true;
  }

  for ( var i = 0; i < node.children.length;i ++) {
    // only recurse if result is false
    if ( result === false ) {
      result=node.contains(target,node.children[i]);
    }
  }
  return result
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var oak = Tree("leaf0");
oak.addChild("leaf1");
oak.addChild("leaf2");
//console.log(oak);
console.log(oak.contains("leaf1", oak));
