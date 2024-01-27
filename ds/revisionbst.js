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

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) root.left = newNode;
      else return this.insertNode(root.left, newNode);
    } else if (newNode.value > root.value) {
      if (root.right === null) root.right = newNode;
      else return this.insertNode(root.right, newNode);
    }
  }

  dfsInorder(root) {
    if (root) {
      this.dfsInorder(root.left);
      console.log(root.value);
      this.dfsInorder(root.right);
    }
  }

  bfsLevel() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      const current = queue.shift();
      console.log(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  validate(root) {
    const bst = [];
    this.bstInorder(root, bst);
    for (var i = 0; i < bst.length; i++) {
      if (bst[i] <= bst[i - 1]) {
        return false;
      }
    }
    return true;
  }
  bstInorder(root, bst) {
    if (root) {
      this.bstInorder(root.left, bst);
      bst.push(root.value);
      this.bstInorder(root.right, bst);
    }
  }

  min(root) {
    if (!root.left) return root.value;
    else return this.min(root.left);
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (!root) {
      return root;
    }
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root
  }
}

const bst = new Bst();

bst.insert(100);
bst.insert(200);
bst.insert(50);
bst.insert(40);
bst.insert(90);
bst.insert(250);
bst.insert(190);
console.log(bst.delete(40));
bst.dfsInorder(bst.root);
console.log(bst.validate(bst.root));
