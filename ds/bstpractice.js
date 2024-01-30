
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

  addElement(value) {
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
        return this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        return this.insertNode(root.right, node);
      }
    }
  }

  minRec(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.minRec(root.left);
    }
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
      if (!root.right) {
        return root.left;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.minRec(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }

  dfsPreorder(root) {
    if (root) {
      console.log(root.value);
      this.dfsPreorder(root.left);
      this.dfsPreorder(root.right);
    }
  }
  search(root, value) {
    if (root.value === value) return true;
    else {
      if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }

  createBst(arr) {
    for (var i = 0; i < arr.length; i++) {
      this.addElement(arr[i]);
    }
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }

  bfs() {
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

  valiidateBst(root) {
    const values = [];
    this.inorderValidate(root, values);
    for (var i = 1; i < values.length; i++) {
      if (values[i] <= values[i - 1]) {
        return false;
      }
    }
    return true;
  }

  inorderValidate(root, values) {
    if (root) {
      this.inorderValidate(root.left, values);
      values.push(root.value);
      this.inorderValidate(root.right, values);
    }
  }
}

const bst = new Bst();

// bst.addElement(100);
// bst.addElement(200);
// bst.addElement(50);
// bst.addElement(25);
// bst.addElement(60);
// bst.addElement(210);
// bst.addElement(190);

const arr = [100, 200, 50, 25, 60, 210, 190];
bst.createBst(arr);
// console.log('---------------------------------------');
// console.log('---------------------------------------');
// console.log('---------------------------------------');
// bst.bfs()

// console.log('---------------------------------------');
// console.log('---------------------------------------');
// console.log('---------------------------------------');
bst.inorder(bst.root);

console.log(bst.valiidateBst(bst.root));
