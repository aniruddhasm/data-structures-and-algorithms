class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        const newNode = new Node(value)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }

    pop(){
        if(!this.first) return null;
        let temp = this.first;
        if(this.first == this.last){
            this.last = null;
        }
        this.first = temp.next;
        this.size--;
        return temp.value
    }
}

st = new Stack()
st.push(0)
st.push(1)
st.push(2)
console.log(st)
console.log(st.pop())
