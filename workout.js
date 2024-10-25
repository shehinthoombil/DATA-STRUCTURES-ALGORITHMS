class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }

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

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            if (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

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
        }
        this.size++
    }



    print() {
        if (this.isEmpty()) {
            console.log("list is empty");
        } else {
            let curr = this.head
            let listValues = ""
            while (curr) {
                listValues += `${curr.value}`
                curr = curr.next
            }
            console.log(listValues);
        }

        // if (this.isEmpty()) {
        //     console.log("list is empty");
        // } else {
        //     let curr = this.head
        //     while (curr) {
        //         console.log(curr.value)
        //         curr = curr.next
        //     }
        // }

    }

    search(value) {
        if (this.isEmpty()) {
            return
        } else {
            let i = 0;
            let curr = this.head
            while (curr) {
                if (curr.value === value) {
                    return i
                }
                curr = curr.next
                i++
            }

        }
        return -1
    }

    delete(value) {
        if (this.isEmpty()) {
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head

            if (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                let removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
        }
    }
    reverse(){
        let  prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev  = curr
            curr = next
        }
        this.head = prev
    }
}

const list = new LinkedList()
console.log("added", list.prepend(10))
console.log("added", list.prepend(20))
console.log("addedend", list.append(30))
list.print()
console.log("search", list.search(30));
list.reverse()
list.print()

