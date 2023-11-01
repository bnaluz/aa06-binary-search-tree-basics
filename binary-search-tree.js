// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    } else {
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = new TreeNode(val);
        } else {
          this.insert(val, currentNode.left);
        }
      }
    }
  }

  search(val, currentNode = this.root) {
   if(!currentNode) {
    return false;
   } 
   if ( val === currentNode.val) {
    return true 
   }

   if(val < currentNode.val) {
    return this.search(val, currentNode.left)
   } else {
    return this.search(val, currentNode.right)
   }
  }

  preOrderTraversal(currentNode = this.root) {
    if(!currentNode) return
      console.log(currentNode.val);

      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right );
    
  }

  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
