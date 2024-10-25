class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    isEmpty() {
        return this.root == null

    }

    // insertion
    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left == null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right == null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

 //search

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

//DFS - Preorder traversal
    preOrder(root){
        if(root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

//Inorder traversal 
   inOrder(root){
    if(root){
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }
   }

 //Post order 
 postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }
 }  

 //BFS
 breadthTraversal(){
    //use the queue implementation
    const queue = []
    queue.push(this.root)
    while(queue.length){
        let curr = queue.shift()
        console.log(curr.value)
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
 }

 //minimum value
 min(root){
    if(!root.left){
        return root.value
    }else{
        return this.min(root.left)
    }
 }

 // maximum value
max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
}
}
const bst = new BinarySearchTree()
console.log('Tree is empty?', bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
// console.log(bst.search(bst.root, 10))
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.breadthTraversal()
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))