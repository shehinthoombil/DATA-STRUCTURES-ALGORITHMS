// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }
//     getSize() {
//         return this.size
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

//     print() {
//         if (this.isEmpty()) {
//             console.log('List is Empty')
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

//     reverse() {
//         let prev = null
//         let curr = this.head
//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }
// }

// const list = new linkedList()
// console.log('empty', list.isEmpty())
// console.log('size', list.getSize())
// list.print()
// list.prepend(10)
// list.print()
// list.prepend(20)
// list.prepend(30)
// list.print()
// list.reverse()
// list.print()


// array reverse
//  let arr = [2,6,4,10,8];
//  arr.reverse();
//  console.log(arr)

// string reverse
// let str = 'hello world'
// let reversed = str.split('').reverse().join('')
// console.log(reversed)

// largest element 
// let arr = [6,4,8,2,10];
// let sorted = arr.sort((a,b)=> b - a)
// let largest = sorted[0]
// console.log(largest)

//smallest element
// let arr = [6,4,8,2,10];
// let sorted = arr.sort((a,b)=> a - b)
// let smallest = sorted[0]
// console.log(smallest)

// second largest
// let arr = [6,4,8,2,10];
// let sorted = arr.sort((a,b)=> b - a)
// let secondLargest = sorted[1]
// console.log(secondLargest)

// second smalest
// let arr = [6,4,8,2,10];
// let sorted = arr.sort((a,b)=> a - b)
// let secondSmallest = sorted[1]
// console.log(secondSmallest)

// find the missing number from the array
// let arr = [1, 2, 3, 4, 5, 7]
// let n = arr.length + 1
// let totalSum = (n * (n + 1)) / 2;
// let arrSum = arr.reduce((sum, num) => sum + num, 0);
// let missingNumber = totalSum - arrSum
// console.log(missingNumber)

// using loop
// let arr = [1, 2, 3, 4, 5, 7]
// let missingNumber = null
// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] - arr[i] !== 1) {
//         missingNumber = arr[i] + 1
//         break;
//     }
// }
// console.log(missingNumber)

// to find the secret character from array
// function change(str, key) {
//     let newKey = key % 26;
//     console.log(newKey);
//     let result = '';

//     for (let i = 0; i < str.length; i++) {
//         let charCode = str.charCodeAt(i);
//         console.log(charCode)

//         // Assuming the encryption is only intended for lowercase letters
//         if (charCode >= 97 && charCode <= 122) {
//             let newCharCode = charCode + newKey;
//             if (newCharCode > 122) {
//                 newCharCode = 96 + (newCharCode % 122);
//             }
//             result += String.fromCharCode(newCharCode);
//             console.log(result)
//         } else {
//             // Directly add character to result if it's not a lowercase letter
//             result += str[i];
//         }
//     }

//     return result;
// }

// let value = "hai";
// console.log(change(value, 2));













































































































































































