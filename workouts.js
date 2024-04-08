// let arr = [-6, 20, 8, -2, 4];
// function bubbleSort(arr) {
//     let swapped;
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped)
//     return arr
// }
// console.log(bubbleSort(arr))


// let arr = [-6, 20, 8, -2, 4];
// function insertionSort(arr){
//     for (let i = 0; i < arr.length; i++) {
//         let j = i -1 
//         let numToInsert = arr[i]
//         while(j>=0 && arr[j]>numToInsert){
//             arr[j+1] = arr[j]
//             j = j - 1
//         }
//         arr[j+1] =numToInsert  
//     }
//     return arr
// }
// console.log(insertionSort(arr))

// let arr = [-6, 20, 8, -2, 4];
// function selectionSort(arr) {
//     for(let i = 0; i < arr.length-1;i++){
//         let minIndex = i
//         for(let j = i + 1; j < arr.length;j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         if(minIndex != i){
//             let temp =arr[i]
//             arr[i] = arr[minIndex]
//             arr[minIndex] = temp
//         }

//     }
//     return arr
// }
// console.log(selectionSort(arr))

// let arr = [-6, 20, 8, -2, 4];

// function mergeSort(arr) {
//     if(arr.length < 2){
//         return arr
//     }
//     let mid = Math.floor(arr.length/2)
//     let leftArray = arr.slice(0,mid)
//     let rightArray = arr.slice(mid)
//     return merge(mergeSort(leftArray), mergeSort(rightArray))
// }

// function merge(leftArray,rightArray){
//     const sortedArray = []
//     while(leftArray.length && rightArray.length) {
//         if(leftArray[0] <= rightArray[0]){
//             sortedArray.push(leftArray.shift())
//         }else{
//             sortedArray.push(rightArray.shift())
//         }
//     }
//     return [...sortedArray,...leftArray,...rightArray]
// }
// console.log(mergeSort(arr))

//stack 

// class Stack {
//     constructor() {
//         this.items = []
//     }
//     push(element) {
//         this.items.push(element)
//     }
//     pop() {
//         return this.items.pop()
//     }
//     isEmpty() {
//         return this.items.length == 0
//     }
//     peek(){
//         return this.items[this.items.length -1]
//     }
//     print(){
//         console.log(this.items)
//     }

// }
// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()
// stack.pop()
// stack.print()
// console.log(stack.peek())
// console.log(stack.isEmpty())

//queue
// class Queue {
//     constructor(){
//         this.items = []
//     }
//     enqueue(element) {
//         this.items.push(element)
//     }
//     dequeue(){
//        return this.items.shift()
//     }
//     isEmpty(){
//        return this.items.length == 0
//     }
//     peek(){
//       return this.items[0]
//     }
//     print(){
//         console.log(this.items.toString())
//     }
// }
// const queue = new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()
// queue.dequeue()
// queue.print()
// console.log(queue.isEmpty())
// console.log(queue.peek())







