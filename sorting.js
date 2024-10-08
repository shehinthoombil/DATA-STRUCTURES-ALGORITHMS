// Bubble Sort
// let arr = [8,20,-2,4,-6]
// function bubbleSort(arr) {
//     do{
//         swapped = false
//         for(let i = 0; i < arr.length-1; i++) {
//             if(arr[i] > arr[i+1]) {
//                 let temp = arr[i]
//                 arr[i] =arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }    
//     } while(swapped)
//     return arr
// }
// console.log(bubbleSort(arr))
// complexity - O(n^2)

// Insertion sort
// let arr = [8, 20, -2, 4, -6]
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let j = i - 1
//         let numToInsert = arr[i]
//         while (j >= 0 && arr[j] > numToInsert) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }
//         arr[j + 1] = numToInsert
//     }
//     return arr
// }
// console.log(insertionSort(arr))

// selection sort
// let arr = [7, 4, 10, 8, 3, 1]

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let minIndex = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         if (minIndex != i) {
//             let temp = arr[i]
//             arr[i] = arr[minIndex]
//             arr[minIndex] = temp
//         }
//     }
//     return arr
// }
// console.log(selectionSort(arr))
// O(n^2)  

// Quick sort

// let arr = [8, 20, -2, 4, -6]
// function quickSort(arr) {
//     if (arr.length <= 2) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let leftArray = []
//     let rightArray = []
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             leftArray.push(arr[i])
//         } else {
//             rightArray.push(arr[i])
//         }
//     }
//     return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
// }
// console.log(quickSort(arr))
// worst case O(n^2) if it is a sorted array
// avg case O(n log n)

//  Merge Sort
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArray = arr.slice(0, mid)
    const rightArray = arr.slice(mid)
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}
function merge(leftArray, rightArray) {
    const sortArray = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortArray.push(leftArray.shift())
        } else {
            sortArray.push(rightArray.shift())
        }
    }
    return [...sortArray, ...leftArray, ...rightArray]
}
let arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr))
// O(n log n)  best time complexity sorting






