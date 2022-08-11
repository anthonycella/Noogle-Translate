/* eslint-disable func-names */
// eslint-disable-next-line func-names
const Trie = function (letter, child = null) {
  this.letter = letter;
  this.children = [child];
};

Trie.prototype.startsWith = function (word = '') {
  if (word[0] !== this.letter) {
    return ['No results found'];
  }

  if (word.length === 1) {
    return this.getChildWords();
  }

  const locationOfNextLetterInChildren = this.children.indexOf(word[1]);
  const hasNextLetterInChildren = locationOfNextLetterInChildren !== -1;

  if (hasNextLetterInChildren) {
    return this.children[locationOfNextLetterInChildren].startsWith(word.slice(1));
  }

  return ['No results found'];
};

Trie.prototype.getChildWords = function () {
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

Trie.prototype.insertChild = function (word) {
  const newChild = new Trie(word[0], null);

  const hasNoFirstChild = this.children[0] === null;
  const childLetters = hasNoFirstChild ? '' : this.children.map((child) => child.letter);
  const locationOfNextLetterInChildren = childLetters.indexOf(word[0]);
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

Trie.prototype.printable = function () {
  let string = `${this.letter}[\n`;

  this.children.map((child) => {
    string += `${child.printable()}\n`;
    return true;
  });

  string += ']';

  return string;
};

module.exports = Trie;
