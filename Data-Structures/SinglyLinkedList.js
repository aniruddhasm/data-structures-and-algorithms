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

    // Hi -> Hello -> ok
    //         nt
    //                 c

    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = this.head;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    // Hi -> Hello -> ok
    // Hey
    
    unshift(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter < index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(val, index){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // HI -> Hello ->
    
    //     Oh

    insert(val, index){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        const newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return !!this.shift(val);
        if(index === this.length) return !!this.pop(val);
        let prevNode = this.get(index-1);
        let removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--;
        return removed;
    }
}

list = new SinglyLinkedList();
list.push("HI");
list.push("HELLO");
list.push("OK");
// console.log(list);
// console.log(list.pop());
// console.log(list.shift());
list.unshift("HEY");
// console.log(list.get(1));
// console.log(list.set('<3',1));
// console.log(list.insert('oh',0));
console.log((list));
console.log(list.remove(1));
console.log((list));
console.log(JSON.stringify(list));