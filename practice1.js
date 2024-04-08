//algorithm to print O - N, take input from the user and then prints numbers from 0 to N.

// const readline = require('readline');

// const r1 = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// r1.question('Enter the value:',(N) => {
//     N = parseInt(N);
//     let i = 0;
//     while (i<= N) {
//         console.log(i);
//         i++;
//     }
//     r1.close();
// })

// write Algorithm Steps

// 1. start
// 2. read the value of N from the User 
// 3. set a value it 0
// 4. while i is less than or equal to N 
//     - print the value using console function
//     - increment the value by 1
// 5. End the while loop
// 6. End

// AAABBC to 3A2BC

function compressString(str) {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        let nextChar = str[i + 1];

        if (currentChar === nextChar) {
            count++;
        } else {
            compressed += count + currentChar;
            count = 1; // Reset count for the next character
        }
    }
    return compressed;
}
let input = "AAABBC";
console.log(compressString(input)); // Output: 3A2B1C













