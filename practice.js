// const str = 'Hello my world'

// short  length string
// function shortestWord(str) {
//     let a = str.split(' ')
//     console.log(a)
//     for (let i = 0; i < a.length; i++) {
//         if (a[i].length < a[i + 1].length) {
//             return a[i]
//         }
//     }
// }
// console.log(shortestWord(str))


// reverse string
// const str = 'Hello my world'
// let a = str.split(' ').reverse().join()
// console.log(a)


// reverse using recursion

// const str = 'Hello my world'

// function reversString(str,length){
//     if(length===0) {
//         return ''
//     }

//     return str[length-1] + reversString(str,length-1)
// }
// console.log(reversString(str,str.length))



//  print like'olleH ym dlrow'

// const str = 'Hello my world'
// const a = str.split(' ')
// console.log(a)
// for (let i = 0; i < a.length; i++) {
//     a[i] = a[i].split('').reverse().join('')
// }
// console.log(a.join(' '))


// print without 'o'

// const str = 'Hello my world'
// const arr = [];
// const a = str.split('')

// for (let i = 0; i < a.length; i++) {
//     if (!a[i].includes('o')) {
//         arr.push(a[i])
//     }
// }
// let result = arr.join('')
// console.log(result)



// Write a function to replace each alphabet in the given string with another alphabet occurring at the n - th position from each of them.
// let str = "I want to become a software engineer"

// let result = str.replaceAll(' ','-')
// console.log(result)




// print multiples of 5 using recursion until 50

// function multipleFive(n) {
//     if (n > 50) {
//         return n
//     }
//     if (n % 5 == 0) {
//         console.log(n)

//     }
//     multipleFive(n + 1)
// }
// multipleFive(5)


//check the word is palindrome or not

// let a = "shehin"

// let word = a.split('').reverse().join('')
// console.log(word)
// if(a==word){
//     return console.log(true)
// }else{
//     return console.log(false)
// }



// count of the double element 'a'
// let str = 'aakuuaaakkuuaakuaa'

// let count = 0;
// let result = 0;

// for (let i = 0; i <= str.length; i++) {
//     if (str[i] === 'a') {
//         count++
//     } else if (count == 2) {
//         result++
//         count = 0
//     } else {
//         count = 0
//     }
// }
// console.log(result)


// to find the smallest index value of tyhe target
// let arr = [1, 1, 1, 2, 4, 5]
// let target = 1

// function binarySearch(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1
//     let result = -1
//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//         if (target == arr[middleIndex] ) {
//             result = middleIndex
//             rightIndex = middleIndex -1 
            
//         } else if (target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1
//         } else {
//             leftIndex = middleIndex + 1
//         }
//     }
//     return result
// }
// console.log(binarySearch(arr, target))