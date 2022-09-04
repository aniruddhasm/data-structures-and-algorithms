class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value){
        const newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first == this.last){
            this.last = null;
        }
        this.first = temp.next;
        this.size--;
        return temp.value;
    }
}

q = new Queue()
q.enqueue(0)
q.enqueue(1)
q.enqueue(2)
console.log(q)
console.log(q.dequeue())