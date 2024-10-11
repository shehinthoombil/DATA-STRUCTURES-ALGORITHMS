class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size == 0
    }
    getSize() {
        return this.size
    }
    // prepand(value) {
    //     const node = new Node(value)
    //     if (this.isEmpty()) {
    //         this.head = node
    //     } else {
    //         node.next = this.head
    //         this.head = node
    //     }
    //     this.size++
    // }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev= prev.next
            }
            prev.next = node
        }
        this.size++
    }
    print() {
        if (this.isEmpty()) {
            console.log("link is empty")
        } else {
            let current = this.head
            while (current) {
                console.log(current.value)
                current = current.next
            }
        }
    }

}
const list = new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.print()
