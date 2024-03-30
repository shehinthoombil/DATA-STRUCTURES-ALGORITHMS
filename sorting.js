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
//complexity - O(n^2)

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
//         let min = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j
//             }
//         }
//         if (min != i) {
//             let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
//         }
//     }
//     return arr
// }
// console.log(selectionSort(arr))

// Quick sort

let arr = [8, 20, -2, 4, -6]
function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let leftArray = []
    let rightArray = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArray.push(arr[i])
        } else {
            rightArray.push(arr[i])
        }
        
    }
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}
console.log(quickSort(arr))






