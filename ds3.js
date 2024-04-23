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
    const newNode = new Node(value)
    if(this.root == null){
        this.root = new Node
    }else{
        this.insertNode(this.root,newNode)
    }
 }

 insertNode(root,newNode){
    if(newNode.value < root.value){
        if(root.left ==null){
            root.left = newNode
        }
        if(root.right == null){
            root.right = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    }

    max(root){
        if(!root){
            return root.value
        }
        return this.max(root.right)
    }
}

const bst = new BinarySearchTree()
bst.insert(5)
bst.insert(15)
bst.insert(8)
bst.insert(4)
console.log(bst.max(bst.root));