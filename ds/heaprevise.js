class MaxHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (element <= this.values[parentIndex]) break;
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    if (this.values.length > 0) {
      const end = this.values.pop();
      this.values[0] = end;
    }
    this.bubbleDown();
    return max;
  }

  bubbleDown() {
    let index = 0;
    const element = this.values[0];

    while (true) {
      let swap = null;
      let leftChild = index * 2 + 1;
      let rightchild = index * 2 + 2;

      if (leftChild < this.values.length) {
        if (element < this.values[leftChild]) {
          swap = leftChild;
        }
      }
      if (rightchild < this.values.length) {
        if (
          (swap === null && element < this.values[rightchild]) ||
          (swap !== null && this.values[rightchild] > this.values[leftChild])
        ) {
            swap=rightchild
        }
      }
      if(swap===null) break;
      this.values[index]=this.values[swap];
      this.values[swap]=element;
      index=swap;
    }

  }
}

const heap = new MaxHeap();

heap.insert(55);


console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap);
