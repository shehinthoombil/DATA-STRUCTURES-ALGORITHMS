//Linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    // adding values to start, head will move with next node that means head will be the last added node -
    // that why the last added value is the first and tail will stay menas tail will be the first added node: head -> value 3 -> value 2 -> value 1 
    //O(1) - time complexity
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // adding valueas to end head will stay and tail will move to the end : head -> value 1 -> value 2 -> value 3
    //O(n) - time complexity
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    // inserting value at a selecte index
    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index == 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    // remove a value
    removeFrom(index) {
        if (index < 0 || index > this.size) {
            return

        }
        let removeNode
        if (index == 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next

        }
        this.size++
        return removeNode.value
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is Empty')
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}


const list = new linkedList()
console.log('list is empty', list.isEmpty())
console.log('list size', list.getSize())
list.print()

// list.prepend(10)
// list.append(10)
// list.print()

// list.prepend(20)
// list.prepend(30)
// list.append(20)
// list.append(30)
// list.print()
list.insert(10, 0)
list.print()

list.insert(20, 0)
list.print()
list.insert(30, 1)
list.print()
list.insert(40, 2)
list.print()
console.log(list.getSize())

console.log(list.removeFrom(10))
console.log(list.removeFrom(0))
list.print()
console.log(list.removeFrom(1))
list.print()
console.log(list.getSize())