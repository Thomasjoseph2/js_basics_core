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

  dfspostOrder(root){
    if(root){
      this.dfspostOrder(root.left)
      this.dfspostOrder(root.right)
      console.log(root.value);
    }
  }

  bfsLevel(){
    const queue=[]
    queue.push(this.root)  
    while(queue.length){
      let current=queue.shift()
      console.log(current.value);
      if(current.left){
        queue.push(current.left)
      }
      if(current.right){
        queue.push(current.right)
      }
    }  
  }
}

const bst = new Bst();

bst.addNode(10);
bst.insertWithOutRecurssion(5);
bst.addNode(15);
bst.addNode(7);
bst.insertWithOutRecurssion(3);

//console.log(bst.dfsPreorder(bst.root));
//bst.dfspostOrder(bst.root);
console.log(bst.bfsLevel());
