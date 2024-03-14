//recursive example 

// function printList(list) {
//     if(list.length === 0) {
//         return;
//     }
//     console.log(list[0]);
//     printList(list.slice(1));
// }

// const myList = [1,2,3,4,5];
// printList(myList);


//recursive fibanocci
// function recursiveFibanocci(n) {
//     if (n <= 1) {
//         return n
//     }
//     return recursiveFibanocci(n-1) + recursiveFibanocci(n-2)
// }
// const n = 5
// console.log(recursiveFibanocci(n))

//recusive factorial
// function recursiveFactorial(n){
//     if(n == 0){
//         return 1
//     }
//     return n * recursiveFactorial(n-1)
// }

// console.log(recursiveFactorial(4))