// Instantiate a new graph
var Graph = function() {
  // this.nodes has to be implemented as a collections
  this.nodeList = [];
  // every node needs edges collections
};

// nodelist.id = id, nodelist.value = value, nodelist.edge = {} []
var Node = function() {
  this.value  = null;
  this.edges = [];
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
Graph.prototype.hasEdge = function(fromNode, toNode, result = false) {

 // iterate over the nodelist
 this.nodeList.forEach(item => {
  // if the value of the item in the current lookup equals fromNode
  if (item.value === fromNode ) {
     // if  edges array of the current item contains toNode && the toNode edges array contains FromNode
     if ( item.edges.indexOf(toNode) !== -1) {
      // iterate th node list and find toNode
      this.nodeList.forEach(item=>{
       // if the edges of item array contains FromNode
        if ( item.edges.indexOf(fromNode) !== -1 ) {
            // result = true;
            result=true;
        }
      });
     }
  }
 });
  // returns result
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
// reference the object containing fromnode (specifically it's edges property)
Graph.prototype.addEdge = function(fromNode, toNode) {
  // declare variables to store object of the value fromnode && tonode belongs to
  var from; //   var from = objectcontainigfromnode.edges;
  var to; //   var to = objectcontainigtonode.edges;
  // iterate over the nodeList
  this.nodeList.forEach((item, i) => {
  // if the value of current lookup Node equals the fromNode
    if ( item.value === fromNode ) {
       // reference all the edges of the lookedup node (item)
      from = item.edges;
      from.push(toNode);
    }
    //
    if ( item.value === toNode ) {
       //    store the object containing fromnode .edges property && object containig  tonode .edges property in variable
       to = item.edges;
       to.push(fromNode);
    }
    // push fromNode to the toNode owner object .edges
    // push toNode to the fromNode owner object .edges

  });

  // push he fromNode parameter to the tonode.edges

  // push the toNode parameter to the fromnode.edges
  // checks that both nodes are present

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
 var from,to;
 // iterate the nodeList
 this.nodeList.forEach(item => {
  // if fromNode exists,
  if ( fromNode === item.value ){
    // store its NodeList parent object in from
    from = item;
    // store index of parent object of toNode in the from edges array //if current.value=toNode then store index in a var
    // remove parent object of toNode in the from edges array
    from.edges.splice(from.edges.indexOf(toNode),1);
       // remove nodeList.value.toNode .edges property containing fromNode
      // remove fromNode.edges[toNode]
  }
  if ( toNode === item.value ) {
    to = item;
    to.edges.splice(to.edges.indexOf(fromNode), 1);
  }
 });

 // ***** coding plan ( intention ) *********

  // parent = first node ; child = second node
   // find the parent node
   // find and reference the child node in the edge list of the parent
      // find the parent in the edge list of the child
       // remove the parent from the edge list of the child
    // remove the child from the edge list of the parent

  // ***** pseudo coding ( description ) *********
   // it th nodelist
    // if current node value = fromNode
      // create a var
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // loop over nodeList
  this.nodeList.forEach(item => {
    cb(item.value);
  });
  // for each item (cb(item))
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
var graph = new Graph();
    graph.addNode(4);
    graph.addNode(5);
    graph.addEdge(5, 4);
    graph.removeEdge(5, 4);
    console.log(JSON.stringify(graph));



