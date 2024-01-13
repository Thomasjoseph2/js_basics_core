const { curry } = require("lodash");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  addNode(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  insertWithOutRecurssion(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  searchRecursively(root, value) {
    if (!root) return false;
    if (root.value === value) return true;
    if (value < root.value) {
      return this.searchRecursively(root.left, value);
    } else {
      return this.searchRecursively(root.right, value);
    }
  }

  searchWithOutRecurssion(value) {
    if (this.root === null) return undefined;
    let current = this.root;
    let found = null;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }
  }
  dfsPreorder(root) {
    if (root) {
      console.log(root.value);
      this.dfsPreorder(root.left);
      this.dfsPreorder(root.right);
    }
  }
  dfsInorder(root) {
    if (root) {
      this.dfsInorder(root.left);
      console.log(root.value);
      this.dfsInorder(root.right);
    }
  }

  dfspostOrder(root) {
    if (root) {
      this.dfspostOrder(root.left);
      this.dfspostOrder(root.right);
      console.log(root.value);
    }
  }

  bfsLevel() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      console.log(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  findmin() {
    if (this.root === null) return undefined;
    let current = this.root;
    let found = false;
    while (current.left !== null && !found) {
      current = current.left;
    }
    return current;
  }

  findMax() {
    if (this.root.left === null) return this.root.value;
    let current = this.root;
    let found = false;
    while (current.right !== null && !found) {
      current = current.right;
    }
    return current;
  }

  minRec(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minRec(root.left);
    }
  }
  maxRec(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.maxRec(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    if (value < root.value) {
      root.left=this.deleteNode(root.left,value)
    }else if(value > root.value){
      root.right=this.deleteNode(root.right,value)
    }else{
      if(!root.left && !root.right){
        return null
      }
      if(!root.left){
        return root.right
      }else if(!root.right){
        return root.left
      }
      root.value=this.minRec(root.right)
      root.right=this.deleteNode(root.right,root.value)
    }
    return root
  }
}

const bst = new Bst();

bst.addNode(10);
bst.insertWithOutRecurssion(5);
bst.addNode(15);
bst.addNode(7);
bst.insertWithOutRecurssion(3);
bst.addNode(1);

// console.log(bst.findmin());
// console.log(bst.findMax());
// console.log(bst.minRec(bst.root));
//bst.maxRec(bst.root);
bst.delete(5)
console.log('---------------');
bst.bfsLevel()



//console.log(bst.dfsPreorder(bst.root));
//bst.dfspostOrder(bst.root);
// console.log(bst.bfsLevel());
