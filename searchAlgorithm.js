//Linear Search
// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i
//         }
//     }
//     return -1
// }
// let arr = [2, 3, 4, 5, 6, 7]
// let target = 6
// console.log(linearSearch(arr, target))

//Binary Search
// function BinarySearch(arr, target) {
//     let leftIndex = 0
//     let rightIndex = arr.length - 1
//     if (arr.length === 0) {
//         return -1
//     }
//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//         if (target === arr[middleIndex]) {
//             return middleIndex
//         }
//         if (target < arr[middleIndex]) {
//             rightIndex = arr[middleIndex] - 1
//         }
//         if (target > arr[middleIndex]) {
//             leftIndex = arr[middleIndex] + 1
//         }
//     }
// }
// console.log(BinarySearch([1, 2, 3, 4, 5, 6], 5))
//Time complexity-O(log(n))

//Binary Search using recursion
// function recursiveBinarySearch(arr, target) {
//     return search(arr, target, 0, arr.length - 1)
// }
//     function search(arr, target, leftIndex, rightIndex) {
//         if (leftIndex > rightIndex) {
//             return -1
//         }
//         let middleIndex = Math.floor((rightIndex + leftIndex) / 2)
//         if (target == arr[middleIndex]) {
//             return middleIndex
//         }
//         if (target < arr[middleIndex]) {
//             return search(arr, target, leftIndex, middleIndex - 1)
//         } else {
//             return search(arr, target, middleIndex + 1, rightIndex)
//         }
//     }
// console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 4))
//Time complexity-O(log(n))