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



// count of the double element
