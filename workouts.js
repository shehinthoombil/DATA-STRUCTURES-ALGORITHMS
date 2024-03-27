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
