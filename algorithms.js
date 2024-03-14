// Math Alogorithms

// fibonacci sequence
// function fibanocci(n) {
//     const fib = [0, 1]
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib
// }
// console.log(fibanocci(2))
// console.log(fibanocci(4))
// // Big - O = O(n)

// Factorial of a number
// function factorial(n) {
//     let result = 1
//     for( let i = 2; i <= n ; i++) {
//         result = result * i
//     }
//     return result
// }

// console.log(factorial(0))
// console.log(factorial(1))
// console.log(factorial(5))
// Big - O = O(n)

//Prime Number
// function isPrime(n) {
//     if (n < 2) {
//         return false
//     }
//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(1))
// console.log(isPrime(5))
// console.log(isPrime(4))
// Big-O = O(sqrt(n))

// Power of Two
// function isPowerOfTwo(n) {
//     if (n < 1) {
//         return false
//     }
//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false
//         }
//         n = n / 2
//     }
//     return true
// }
// console.log(isPowerOfTwo(1))
// console.log(isPowerOfTwo(2))
// console.log(isPowerOfTwo(5))
//Big-O = O(log(n))

//Power of Two in Bitwise
// function isPowerOfTwoBitWise(n) {
//     if (n < 1) {
//         return false
//     }
//     return (n & (n - 1)) === 0
// }
// console.log(isPowerOfTwoBitWise(1))
// console.log(isPowerOfTwoBitWise(2))
// console.log(isPowerOfTwoBitWise(5))


// Recursion 
//Recursive fibonacci sequence

// function recursiveFibonacci(n) {
//     if(n<2) {
//         return n
//     }
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
// }
// console.log(recursiveFibonacci(0))
// console.log(recursiveFibonacci(1))
// console.log(recursiveFibonacci(6)) 
// O(n) - Iterative
// O(2^n) - recursive time complexity

//Recursive factorial of a  number
// function recursiveFactorail(n) {
//     if(n==0){
//         return 1
//     }
//     return n * recursiveFactorail(n -1)
// }
// console.log(recursiveFactorail(0))
// console.log(recursiveFactorail(1))
// console.log(recursiveFactorail(5))
// Big-O - O(n)


// Linear search
// function linearSearch(arr,target) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] == target) {
//             return i     
//         } 
//     }
//     return -1   
// }
// console.log(linearSearch([-5,2,10,4,16],10))
// console.log(linearSearch([-5,2,10,4,16],16))
// console.log(linearSearch([-5,2,10,4,16],2))
// // O(n)

//Binary search 

// function binarySearch(arr, target) {
//     let leftIndex = 0
//     let rightIndex = arr.length - 1

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//         if (target == arr[middleIndex]) {
//             return middleIndex
//         }
//         if (target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1
//         } else {
//             leftIndex = middleIndex + 1
//         }

//     }

//     return -1

// }
// console.log(binarySearch([-1, 10, 13, 15, 18], 10))
// console.log(binarySearch([-1, 10, 13, 15, 18], 15))
//O(log(n))

//recursive Binary search 

// function recursiveBinarySearch(arr,target) {
//     return search(arr, target, 0, arr.length-1) 
//     }
//     function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex> rightIndex) {
//         return -1
//     }

//     let middleIndex = Math.floor((leftIndex+rightIndex) /2)
//     if(target == arr[middleIndex]){
//         return middleIndex
//     }
//     if(target< arr[middleIndex]){
//         return search(arr,target,leftIndex,middleIndex - 1)
//     }else{
//         return search(arr,target,middleIndex+1,rightIndex)
//     }
// }
// console.log(recursiveBinarySearch([-1,4,7,8,10],8))
// console.log(recursiveBinarySearch([-1,4,7,8,10],10))
// console.log(recursiveBinarySearch([-1,4,7,8,10],9))
//O(logn)

