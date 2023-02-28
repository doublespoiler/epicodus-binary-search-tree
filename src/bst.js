export default class BST {

  constructor() {
    this.root = null;
  }

  insertNode(insertedNode) {
    //if there is no root, make the inserted node the root
    if(this.root === null) {
      this.root = insertedNode;
    } else {
      let currentNode = this.root;
      while (true) { //will run forever until we break or return
        //insert left
        if (currentNode.data > insertedNode.data) {
          //if the currentNode does NOT have a left
          if (currentNode.left === null) {
            currentNode.left = insertedNode; //add it
            return this; //return out
          } else { //if the currentNode DOES have a left
            //traverse the tree
            currentNode = currentNode.left;
          }
        //insert right
        } else if (currentNode.data < insertedNode.data) {
          //if current node does NOT have a right
          if(currentNode.right === null) {
            currentNode.right = insertedNode; //add it
            return this; //return out
          } else {
            //traverse the tree
            currentNode = currentNode.right;
          }
        } else { //if it is not greater or less than, it is equal
          //binary trees cannot have duplicate values, so we just return the same thing.
          return this;
        }
      }
    }
  }

}