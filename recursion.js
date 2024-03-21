//recursion example 

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

// array reverse using recursion
// let arr = [2, 4, 6, 8, 10];

// function reverseArray(arr, start = 0, end = arr.length - 1) {
//     if (start >= end) { 
//         return arr;
//     }
//     [arr[start], arr[end]] = [arr[end], arr[start]];
    
//     return reverseArray(arr, start + 1, end - 1);
// }
// console.log(reverseArray(arr))

//using loop

// let arr = [2, 4, 6, 8, 10]

// let i = 0
// let j =arr.length -1

// while(i<j){
//     [arr[i], arr[j]] = [arr[j], arr[i]]
//     i++;
//     j--;
// }
// console.log(arr)

//string reverse using recursion

// let string = 'hello world'
// let str = string.split('')


// function reverseString(str,start = 0 , end = str.length-1) {
//     if(start>=end) {
//         return str.join('');
//     }
//     [str[start], str[end]] = [str[end], str[start]]
//     return reverseString(str,start + 1, end -1)
// }
// let b = str.join('')
// console.log(reverseString(str))


//print 1 to 8 using recursion
// function recFunction(n) {
//     if(n<1){
//         return 0
//     }
//     console.log(n)
//     return recFunction(n-1)
// }
// console.log(recFunction(8))

// print the array sum using recursion

// function arraySum(arr, i = 0) {
//     if (i >= arr.length){
//         return 0
//     }
//     return arr[i] + arraySum(arr,i+1)
    
// }
// let arr = [10,2,3,4]
// console.log(arraySum(arr))


