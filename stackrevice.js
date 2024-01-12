class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }
  push(elem) {
    this.items.push(elem);
  }
  pop() {
    this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();

stack.push(10)
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
console.log(stack.peek());
console.log(stack);

class Queue{
    constructor() {
        this.items={}
        this.rear=0;
        this.front=0;
    }
    enque(elem){
        this.items[this.rear]=elem;
        this.rear++
    }
    dequeue(){
        const item=this.items[this.front];
        delete this.items[this.front]
        this.front++
        return item
    }
    isEmpty(){
        return this.rear-this.front===0
    }

    peek(){
        return this.items[this.front]
    }
    size(){
        return this.rear-this.front
    }
    print(){
        console.log(this.items)
    }
}

const queue=new Queue()
queue.enque(10)
queue.enque(20)
queue.enque(30)
queue.enque(40)
queue.enque(50)
console.log(queue);