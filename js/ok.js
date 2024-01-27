class Node{
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}

class List{
    constructor() {
        this.head=null;
        this.tail=null
    }

    addElem(value){
        const node=new Node(value)

        if(!this.head){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node;
            this.tail=node;
        }
    }
}