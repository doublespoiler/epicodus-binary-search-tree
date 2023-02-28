export default class BST {

  constructor() {
    this.root = null;
  }

  insertNode(node) {
    if(this.root == null) {
      this.root = node;
    } else if(node.data < this.root.data){
      this.root.left = node;
    } else {
      this.root.right = node;
    }
  }

}