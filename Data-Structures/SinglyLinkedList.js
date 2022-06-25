class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // 1 -> 2 -> 3 -> 4
    //           nt
    //                c
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = this.head;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;

    }

    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            let prevNode = this.head;
            this.head = newNode;
            this.head.next = prevNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(val, index){
        const foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // 0 -> 1 -> 2
    
    // 0.5

    insert(val, index){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        const newNode = new Node(val);
        let prevNode = this.get(index-1);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.shift();
        if(index === this.length) return !!this.pop();
        const prevNode = this.get(index-1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return true;

    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        let i=0;
        while(i < this.length){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
            i++;
        }
        return this;
    }

    print(){
        const data = [];
        let current = this.head;
        while(current){
            data.push(current.val)
            current = current.next;
        }
        return data;
    }
}

list = new SinglyLinkedList();
list.push(2);
list.push(3);
list.push(4);
list.push(5);
// console.log(list)
// console.log(list.pop());
// console.log(list.shift());
list.unshift(0);
list.get(1);
list.set(10, 0);
list.insert(1, 1);
//list.remove(1);
console.log(list);
console.log(list.print());
list.reverse();
console.log(list.print());