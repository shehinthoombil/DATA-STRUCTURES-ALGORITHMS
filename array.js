// Solve with arrays
// time complexity

// let arr = [6, 5, 4, 3, 9, 8, 0];
// let t = 10;

// function result(arr, t) {

//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == t) {
//                 return true
//             }
//         }
//     }
//     return false
// }
// console.log(result(arr, t))


// space complexity

// let array = [6, 5, 4, 3, 9, 8, 0];
// let target = 10;

// function result(array, target) {
//     let nums = new Set();
//     console.log(nums)

//     for (let i = 0; i < array.length; i++) {
//         let num = array[i];
//         // console.log(array[i])
//         let match = target - num;
//         console.log(match)
//         if (nums.has(match)) {
//             return [num, match];
//         } else {
//             nums.add(num)
//         }
//     }
//     return null

// }
// console.log(result(array, target))



// the all elements 6 move to end part of the array

// let target = 6
// let i = 0;
// let j = array.length - 1;
// console.log(j)
// while (i < j) {
//     while (i < j && array[j] == target) {
//         j--;
//     }
//     if (array[i] == target) {
//         let temp = array[j]
//         array[j] = array[i]
//         array[i] = temp
//     }
//     i++;
// }
// console.log(array)


