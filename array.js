// Solve with arrays
// time complexity 

// let arr = [6,5,4,3,9,8,0];
// let t = 10;

// function result(arr,t) {
   
//     for( let i = 0; i < arr.length-1; i++ ) {
//        for( let j = i + 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] == t){
//                 return true
//             }
//        } 
//     }
//    return false
// } 
// console.log(result(arr,t))

// space complexity

//  let array = [6,5,4,3,9,8,0];
//  let target = 10;

// function result(array,target) {
//     let nums = new Set();

//     for(let i = 0; i < array.length; i++) {
//         let num = array[i];
//         let match = target - num;
//         if(nums.has(match)){
//             return [num, match];
//         }else {
//             nums.add(num)
//         }
//     }
// return null

// }
// console.log(result(array,target))


// let array = [6,1,6,8,10,4,15,6,3,9,6];
// let n = 6;
// for(let i = 0; i < array.length; i++ ){
//     for(let j = array.length-1; j > 0; j--) {
//         if(array[j] === n) {
//            array[j-1] = array[j] 
//            j--
//         }
//         if( i == n) {
//             temp = array[i]
//             array[j] = array[i]
//             array[j] = temp
//         }
//     }
// }
// console.log(array)
// return  array



