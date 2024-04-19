class MinHeap {
    constructor() {
        this.heap = [];
    }
    // Function to swap elements at two indices in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], [this.heap[i]]]
    }

    //Function to insert a value to the heap
    insert(value) {
        this.heap.push(value)
        this.shiftUp(this.heap.length - 1)
    }// complexity - o(log n)

    //function to heapify the array from bottom to top
    shiftUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(index, parentIndex)
                index = parentIndex
            } else {
                break;
            }
        }
    }

    //function to heapify the array from top to bottom
    shiftDown(index) {
        const leftChildIndex = 2 * index + 1
        const rightChildIndex = 2 * index + 2
        let smallestIndex = index

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = leftChildIndex
        }
        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
            smallestIndex = rightChildIndex
        }
        if (smallestIndex != index) {
            this.swap(index, smallestIndex)
            this.shiftDown(smallestIndex)
        }
    } //complexity - o(log n)

    //Function to remove the top
    remove() {
        if (this.heap.length == 0) {
            return null
        }
        let removedValue = this.heap[0]
        let lastValue = this.heap.pop()
        if (this.heap.length > 0) {
            this.heap[0] = lastValue
            this.shiftDown(0)
        }
        return removedValue
    }

    // Function to build heap from an array
    buildHeap(arr) {
        this.heap = [...arr]
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.shiftDown(i)
        }
    } // complexity - o(logn)

    //Function to peek or return the top element in the heap
    peek() {
        return this.heap[0];
    }

    //Function to get the parent of the given index in heap
    parent(index) {
        return Math.floor((index - 1) / 2)
    }

    //Function to get the left child of the given index in heap
    leftChild(index) {
        return 2 * index + 1
    }

    //Function to get the right child of the given index in heap
    rightChild(index) {
        return 2 * index + 2
    }

    // function to display the current state of the heap
    display() {
        console.log(this.heap)
    }
}



const heap = new MinHeap();
heap.insert(15)
heap.insert(5)
heap.insert(20)
heap.insert(10)
heap.display()
// const arr = [10, 1, 2, 5, 70, 0, 8, 3];
// heap.buildHeap(arr)
// heap.display()
// heap.remove()
// heap.display()
