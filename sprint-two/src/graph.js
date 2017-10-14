

// Instantiate a new graph
var Graph = function() {
  // this.nodes has to be implemented as a collections
  this.nodeList = [];
  // every node needs edges collections

};

// nodelist.id = id, nodelist.value = value, nodelist.edge = {} []
var Node = function() {
  this.value  = null;
  this.edges = {};
}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new Node();
  newNode.value = node;
  this.nodeList.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node, found = false) {
  // iterate over each node and check if its a value
  // don't think its recursive
  this.nodeList.forEach((item) => {
    if (item.value === node) {
      found = true;
    }
  });

  return found;

};

Graph.prototype.removeNode = function(node) {
  // Removes a node from the graph.
  this.nodeList.forEach((item, i) => {
    if (item.value === node) {
      this.nodeList.splice(i, 1);
    }
  })
  // All edges from the node get removed as well

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {


  // returns boolean
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // checks that both nodes are present
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var artistLink = new Graph();
