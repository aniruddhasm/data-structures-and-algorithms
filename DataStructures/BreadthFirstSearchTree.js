class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

//      10
//   5     13
// 2  7  11  16

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

    contains(value) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    //      10
    //   5     13
    // 2  7  11  16


    BFS(){
        let queue = [];
        let data = [];
        let node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    heightUsingRecursion(root){
        if(root == null) return 0;
        return Math.max(this.heightUsingRecursion(root.left), this.heightUsingRecursion(root.right)) + 1;
    }

    heightUsingQueue(){
        let queue = [];
        let node = this.root;
        let depth = 0
        queue.push(node);
        queue.push(null)
        while(queue.length){
            node = queue.shift();
            if(node == null){
               depth += 1;
            }
            if(node != null){                
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right); 
            } else if(queue.length>0) {
                queue.push(null)
            }
        }
        return depth;
    }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(11);
bst.insert(2);
bst.insert(16);
bst.insert(7);
console.log(bst)
console.log(bst.BFS())
console.log(bst.heightUsingRecursion(bst.root));
console.log(bst.heightUsingQueue(bst.root));