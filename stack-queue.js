// Queue
// class Queue {
//     constructor() {
//         this.items = []
//     }
//     enqueue(element) {
//         this.items.push(element)
//     }
//     dequeue() {
//         return this.items.shift()
//     }
//     isEmpty() {
//         return this.items.length === 0
//     }
//     peek() {
//         if (!this.isEmpty()) {
//             return this.items[0]
//         }
//         return null
//     }
//     size() {
//         return this.items.length
//     }
//     print() {
//         console.log(this.items.toString())
//     }
// }
// const queue = new Queue()
// console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size());
// queue.print()
// console.log(queue.dequeue());
// console.log(queue.peek())

//Stack
// class Stack {
//     constructor(){
//         this.items = []
//     }

//     push(element){
//         this.items.push(element)
//     }
//     pop(){
//         if(this.length == 0){
//             return 'underflow'
//         }
//         return this.items.pop()
//     }
//     isEmpty(){
//        return this.items.length == 0;
//     }
//     peek(){
//         return this.items[this.items.length - 1]
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

//Queue implementation Optimised in Object
// class Queue {
//     constructor() {
//         this.items = {}
//         this.rear = 0
//         this.front = 0
//     }
//     enqueue(element) {
//         this.items[this.rear] = element
//         this.rear++
//     }
//     dequeue() {
//         const  items = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return items
//     }
//     isEmpty(){
//         return this.rear - this.front == 0
//     }
//     peek(){
//         return this.items[this.front]
//     }
//     size() {
//         return this.rear - this.front
//     }
//     print() {
//         console.log(this.items)
//     }
// }
// const queue = new Queue()
// console.log(queue.isEmpty())
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size())
// queue.print()
// console.log(queue.dequeue())
// console.log(queue.peek())


