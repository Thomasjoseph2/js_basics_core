class Node{
    constructor(value){
        this.value=value;
        this.next=null;

    }
}

class List{
    constructor() {
        this.headder=null;
        this.tail=null;
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }

    append(elem){
        const node=new Node(elem)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
            
        }else{
            this.tail.next=node;
            this.tail=node

        }
        this.size++
    }

    shift(){
        if(this.isEmpty()){
            console.log('f');
        }
        const item=this.head;
        this.head=this.head.next;
        this.size--;
        if(this.isEmpty())this.tail=null

        return item
    }
    pop(){
        const removed=this.tail.value;

        if(this.isEmpty()){
            return null
        }
        if(this.size===1){
            this.tail=null
            this.head=null
        }else{
            let current=this.head
            while(current.next !==this.tail){
                current=current.next
            }
            current.next=null;
            this.tail=current
        }
        return removed
    }
}

const list=new List()

list.append(10)
list.append(20)
list.append(30)
list.append(40)
console.log(list.pop());
console.log(list);