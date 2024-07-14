class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let curr = this.root;
      for (let i = 0; i < word.length; i++) {
        if (!curr.children[word[i]]) {
          curr.children[word[i]] = new TrieNode();
        }
        curr = curr.children[word[i]];
      }
      curr.isEndOfWord = true;
    }
  
    prefix(word) {
      let curr = this.root;
      for (let i = 0; i < word.length; i++) {
        if (!curr.children[word[i]]) {
          return null; // Prefix not found
        }
        curr = curr.children[word[i]];
      }
      return curr; // Return the end node of the prefix
    }
  
    findLongestString(node, currentWord) {
      let longestWord = currentWord;
  
      for (let char in node.children) {
        let child = node.children[char];
        let word = this.findLongestString(child, currentWord + char);
  
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      }
  
      return longestWord;
    }
  
    longestStringWithPrefix(prefix) {
      let node = this.prefix(prefix);
      if (!node) {
        return ""; // No such prefix exists
      }
  
      return this.findLongestString(node, prefix);
    }
  }
  
  // Usage example
  let trie = new Trie();
  trie.insert("apple");
  trie.insert("app");
  trie.insert("apricot");
  trie.insert("banana");

  console.log(trie.longestStringWithPrefix("app")); // Output: "apple"
  