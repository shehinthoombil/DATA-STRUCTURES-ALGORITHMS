//fibanocci
// function Fib(n) {
//     const fib = [0, 1]
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib.slice(0,n)
// }
// console.log(Fib(4));

//factorial
// function Fact(n) {
//     let result = 1
//     for (let i = 2; i <= n; i++) {
//         result = result * i
//     }
//     return result
// }
// console.log(Fact(5));


//recursive fibanacci
// function recFib(n){
//     if(n<=1){
//         return n
//     }
//     return recFib(n-1)+ recFib(n-2)
// }
// console.log(recFib(6))

//recursive Factorial
// function recFac(n){
//     if(n<1){
//         return 1
//     }
//     return n*recFac(n-1)
// }
// console.log(recFac(5))

//Binary search
// function BinarySearch(arr, t) {
//     let leftIndex = 0;
//     let rightindex = arr.length - 1
//     while (leftIndex < rightindex) {
//         let middleIndex = Math.floor((leftIndex + rightindex) / 2)
//         if (t == arr[middleIndex]) {
//             return middleIndex
//         }
//         if (t < arr[middleIndex]) {
//             rightindex = middleIndex - 1
//         } else {
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }
// const arr = [1,2,3,4]
// const t = 3
// console.log(BinarySearch(arr,t))

//Binary search recursive
// function biRec(arr, t) {
//     return search(arr, t, 0, arr.length - 1)
// }
// function search(arr, t, leftIndex, rightIndex) {
//     if (leftIndex > rightIndex) {
//         return -1
//     }
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if (t == arr[middleIndex]) {
//         return middleIndex
//     }
//     if (t > arr[middleIndex]) {
//         return search(arr, t, middleIndex + 1, rightIndex)
//     } else {
//         return search(arr, t, leftIndex, middleIndex - 1)
//     }
// }
// let arr = [1, 2, 3, 4, 5]
// let t = 5
// console.log(biRec(arr, t))

// 
// let str = 'aakuuaaakkuuaakuaa'
// let count = 0;
// let result = 0
// for(let i = 0; i<=str.length;i++){
//     if(str[i] == 'a'){
//         count++
//     }else if(count ==2){
//         result++
//         count = 0
//     }else{
//         count = 0
//     }
// }
// console.log(result)


//linked list creation
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }
//     getSize() {
//         return this.size;
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }
//         if (index == 0) {
//             this.prepend(value)
//         }
//         else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }


//     // //reverse
//     // reverse(){
//     //     let prev = null
//     //     let curr = this.head
//     //     while(curr){
//     //         let next = curr.next
//     //         curr.next = prev
//     //         prev = curr
//     //         curr = next
//     //     }
//     //     this.head = prev
//     // }

//     search(value) {
//         if (this.isEmpty()) {
//             return -1
//         }
//         let i = 0;
//         let curr = this.head
//         while (curr) {
//             if (curr.value == value) {
//                 return 1
//             }
//             curr = curr.next
//             i++
//         }
//         return -1
//     }


//     print() {
//         if (list.isEmpty()) {
//             console.log("is empty");

//         } else {
//             let curr = this.head
//             let listValues = ''
//             while (curr) {
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues)
//         }
//     }
// }
// const list = new LinkedList()
// // console.log("empty list", list.getSize())
// // console.log("reverse",list.reverse())
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.insert(15, 1)
// list.insert(25, 4)
// list.print()
// console.log(list.search(10));
// console.log(list.search(5))


//sort //bubble
// let arr = [8,20,-2,4,-6]
// function bubbleSort(){
//     do {
//          swapped = false
//         for(let i =0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     }while(swapped){
//         return arr
//     }
// }
// console.log(bubbleSort(arr))

//insertion
// let arr = [8,20,-2,4,-6]
// function insertionSort(){
//     for(let i = 1;i<arr.length;i++){
//         let numToInsert = arr[i]
//        let j = i - 1
//         while(j>=0 && arr[j]>numToInsert)  {
//             arr[j+1] = arr[j]
//             j = j - 1
//         } 
//         arr[j+1] = numToInsert
//     }
//     return arr
// }
// console.log(insertionSort(arr))

//selection
// let arr = [7, 4, 10, 8, 3, 1]
// function selectionSort() {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//             if (minIndex != i) {
//                 let temp = arr[i]
//                 arr[i] = arr[minIndex]
//                 arr[minIndex] = temp
//             }
//         }
//     }
//     return arr
// }
// console.log(selectionSort(arr));

//quick
// let arr = [8, 20, -2, 4, -6]

// function quickSort(arr) {
//     if (arr.length <= 2) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }

//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }
// console.log(quickSort(arr))

//merge
// let arr = [8, 20, -2, 4, -6];
// function mergeSort(arr) {
//     if (arr.length < 2) {
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)
//     let left = arr.slice(0, mid)
//     let right = arr.slice(mid)
//     return merge(mergeSort(left), mergeSort(right))
// }
// function merge(left, right) {
//     let sortArray = []
//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             sortArray.push(left.shift())
//         } else {
//             sortArray.push(right.shift())
//         }
//     }
//     return [...sortArray, ...left, ...right]
// }
// console.log(mergeSort(arr));

//hash table 

// class HashTable {
//     constructor(size) {
//         this.table = new Array(size)
//         this.size = size

//     }
//     hash(key) {
//         let total = 0
//         for (let i = 0; i < key.length; i++) {
//             total = total + key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     set(key, value) {
//         let index = this.hash(key)
//         this.table[index] = value
//     }
//     get(key) {
//         let index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key) {
//         let index = this.hash(key)
//         this.table[index] = undefined
//     }
//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//            if(this.table[i]){
//             console.log(i,this.table[i]);

//            }

//         }
//     }

// }
// const table = new HashTable(50)
// table.set("name","shehin")
// table.set("age",22)
// table.display()
// console.log(table.get("name"));
// table.remove("age")
// table.display()


// console.log("1st");
// setTimeout(()=>{
//     console.log("2nd");

// },3000)
// console.log("3rd");

//BST
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
        this.root == null
    }
    insert(value) {
        const node = new Node(value)
        if (this.root === null) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(root, node) {
        if (root.value > node.value) {
            if (root.left == null) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (root.right == null) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        }
        if (root.value == value) {
            return true
        } else if (root.value > value) {
            return this.search(root.left, value)
        } else {
            return this.search(root.right, value)
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    //BFS
    bfs() {
        let queue = []
        queue.push(this.root)
        if (queue.length) {
            let curr = queue.shift()
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left)
            } else {
                queue.push(curr.right)
            }
        }
    }

//min 
min(root){
    if(!root.left){
        return root.value
    }else{
        return this.min(root.left)
    }
}

//max 
max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
}

}

const bst = new BinarySearchTree()
// console.log('tree empty', bst.isEmpty());
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
// console.log(bst.search(bst.root,10));
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.bfs()
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));



