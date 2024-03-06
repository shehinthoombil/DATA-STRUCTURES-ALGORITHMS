// Singly Linked list

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SlinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     addNode(data) {
//         let newNode = new Node(data);

//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             this.tail.next = newNode;
//         }
//         this.tail = newNode;
//         console.log("New node added")
//     }

//     display() {
//         if (this.head === null) {
//             console.log("empty");
//             return;
//         }

//         let temp = this.head;
//         while (temp !== null) {
//             console.log(temp.data);
//             temp = temp.next;
//         }
//     }
// }
// // Example usage
// let list = new SlinkedList();
// list.display();

// list.addNode(10);
// list.addNode(20);
// list.addNode(30);
// list.addNode(50);

// list.display();


// insert element between 2  elements in singly linked list

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class SlinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     addNode(data) {
//         let newNode = new Node(data);

//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             this.tail.next = newNode;
//         }
//         this.tail = newNode;
//         console.log("New node added")
//     }

//     display() {
//         if (this.head === null) {
//             console.log("empty");
//             return;
//         }

//         let temp = this.head;
//         while (temp !== null) {
//             console.log(temp.data);
//             temp = temp.next;
//         }
//     }

//     insertAfter(nextTo, data) {
//         let newNode = new Node(data);
//         let temp = this.head;

//         while (temp != null && temp.data != nextTo) {
//             temp = temp.next
//         }

//         if (temp === null) {
//             console.log("Element not found");
//             return;
//         }
//         if (temp == this.tail) {
//             this.tail.next = newNode;
//             this.tail = newNode;
//             return
//         }
//         newNode.next = temp.next;
//         temp.next = newNode
//     }
// }
// // Example usage
// let list = new SlinkedList();
// list.display();

// list.addNode(10);
// list.addNode(20);
// list.addNode(30);
// list.addNode(50);

// list.insertAfter(20, 60)
// list.display();

