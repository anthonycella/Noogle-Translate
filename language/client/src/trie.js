class Trie {
  constructor(letter, child = null) {
    this.letter = letter;
    this.children = [child];
  }
}

Trie.prototype.getChildWords = () => {
  let childWords = [];
  const prefix = this.letter;

  for (let currentIndex = 0; currentIndex < this.children.length; currentIndex++) {
    const currentChild = this.children[currentIndex];

    if (currentChild === null) {
      break;
    }

    childWords = currentChild.getChildWords()
      .map((childWord) => prefix + childWord);
  }

  return childWords;
};

Trie.prototype.insertChild = (word) => {
  const newChild = new Trie(word[0], null);

  const hasNoFirstChild = !this.children[0];
  const locationOfNextLetterInChildren = this.children.indexOf(word[0]);
  const hasNextLetterInChildren = locationOfNextLetterInChildren !== -1;

  if (hasNoFirstChild) {
    if (word.length > 1) {
      newChild.insertChild(word.slice(1));
    }
    this.children[0] = newChild;
  } else if (hasNextLetterInChildren) {
    if (word.length > 1) {
      this.children[locationOfNextLetterInChildren].insertChild(word.slice(1));
    } else {
      this.children[locationOfNextLetterInChildren].insertChild(word);
    }
  } else {
    if (word.length > 1) {
      newChild.insertChild(word.slice(1));
    }

    this.children.push(newChild);
  }
};

module.exports = Trie;
