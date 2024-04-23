class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node()
        if(this.root == null){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(root.value>node.value){
            if(root.left == null){
                root.left = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
}

const bst = new BinarySearchTree ()
bst.insert(6)
bst.insert(5)
bst.insert(8)
bst.insert(2)
bst.insert(15)
console.log(bst.insert())