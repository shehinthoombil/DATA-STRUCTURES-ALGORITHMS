class Node {
    constructor() {
        this.children = {};
        this.iswordEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word) {
        let curr = this.root
        for (let i = 0; i < word.length; i++) {
            let charToInsert = word[i]
            if (!curr.children[charToInsert]) {
                curr.children[charToInsert] = new Node()
            }
            curr = curr.children[charToInsert]
        }
        curr.iswordEnd = true;
    }

    search(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let charToFind = word[i]
            if (!curr.children[charToFind]) {
                return false
            }
            curr = curr.children[charToFind];
        }
        return curr.iswordEnd
    }

    startsWith(prefix) {
        let curr = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let charToFind = prefix[i]
            if (!curr.children[charToFind]) {
                return false
            }
            curr = curr.children[charToFind];
        }
        return true
    }
}

// Example usage
let trie = new Trie();
trie.insert("apple");
// console.log(trie.search("apple"));   // Output: true
// console.log(trie.search("app"));     // Output: false
// console.log(trie.startsWith("app")); // Output: true
trie.insert("app");
console.log(trie.search("app"));     // Output: true
