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
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
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

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index == 0) {
            this.prepend(value)
        }
        else {
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


    // //reverse
    // reverse(){
    //     let prev = null
    //     let curr = this.head
    //     while(curr){
    //         let next = curr.next
    //         curr.next = prev
    //         prev = curr
    //         curr = next
    //     }
    //     this.head = prev
    // }

    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0;
        let curr = this.head
        while (curr) {
            if (curr.value == value) {
                return 1
            }
            curr = curr.next
            i++
        }
        return -1
    }


    print() {
        if (list.isEmpty()) {
            console.log("is empty");

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
const list = new LinkedList()
// console.log("empty list", list.getSize())
// console.log("reverse",list.reverse())
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.insert(15, 1)
list.insert(25, 4)
list.print()
console.log(list.search(10));
console.log(list.search(5))
