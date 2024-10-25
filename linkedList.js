//Linked list creation

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
    // that why the last added value is the first and tail will stay means tail will be the first added node: head -> value 3 -> value 2 -> value 1 
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

    // remove a value at a selected index
    removeFrom(index,value) {
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

    //removing a given value
    removeValue(value) {
        if (this.isEmpty) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
        }
    }

    //searching
    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value == value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    //reverse
    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
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

    print() {
        if (this.isEmpty()) {
            console.log('List is Empty')
        } else {
            let curr = this.head
            while (curr) {
                console.log(curr.value)
                curr = curr.next
            }
        }
    }


    // reversing using recursion
    reverseRecursively() {
        const reverseHelper = (current, prev) => {
            if (!current) {
                this.head = prev;
                return;
            }
            const nextNode = current.next;
            current.next = prev;
            reverseHelper(nextNode, current);
        };

        reverseHelper(this.head, null);
    }


    // calculating the all value sum
    sum() {
        if (this.isEmpty()) {
            return null
        }
        let pos = this.head
        let sum = 0
        while (pos) {
            sum += pos.value
            pos = pos.next
        }
        return sum
    }


    // finding the middle element 
    getMidd() {
        let slow = this.head;
        let fast = this.head;

        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
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

// console.log(list.getSize())

// console.log(list.removeFrom(10))

// console.log(list.removeFrom(0))
// list.print()
// console.log(list.removeFrom(1))
// list.print()
// console.log(list.getSize())
// console.log(list.removeValue(40))
// list.print()
// console.log(list.removeValue(20))
// list.print()

// console.log(list.search(40))
// list.reverse()