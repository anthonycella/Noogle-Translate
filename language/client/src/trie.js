/* eslint-disable func-names */
// eslint-disable-next-line func-names
const Trie = function (letter, child = null) {
  this.letter = letter;
  this.children = [child];
};

Trie.prototype.startsWith = function (word = '', prefix = '') {
  const hasNoFirstChild = this.children[0] === null;
  const childLetters = hasNoFirstChild ? '' : this.children.map((child) => child.letter.toLowerCase());

  let locationOfNextLetterInChildren = -1;

  if (word.length > 0) {
    // if (prefix === '') {
    //   // eslint-disable-next-line prefer-destructuring, no-param-reassign
    //   prefix = word[0];
    // }

    const nextLetter = word[0];
    // console.log(typeof nextLetter);
    for (let currentIndex = 0; currentIndex < childLetters.length; currentIndex += 1) {
      if (nextLetter.toUpperCase() === childLetters[currentIndex].toUpperCase()) {
        locationOfNextLetterInChildren = currentIndex;
      }
    }
  }

  const hasNextLetterInChildren = locationOfNextLetterInChildren !== -1;

  if (hasNextLetterInChildren) {
    const nextChild = this.children[locationOfNextLetterInChildren];
    const nextLetter = nextChild.letter;

    const newPrefix = prefix + nextLetter;

    if (word.length === 1) {
      return this.children[locationOfNextLetterInChildren].getChildWords()
        .map((childWord) => prefix + childWord);
    }

    const results = nextChild.startsWith(word.slice(1), newPrefix);
    return results;
  }

  return ['No results found'];
};

Trie.prototype.getChildWords = function () {
  const prefix = this.letter;
  let childWords = [];

  for (let currentIndex = 0; currentIndex < this.children.length; currentIndex += 1) {
    const currentChild = this.children[currentIndex];

    if (currentChild === null) {
      break;
    }

    const currentChildWords = currentChild.getChildWords();

    for (const childWord of currentChildWords) {
      // console.log('child word is', childWord);
      if (typeof childWord === 'string') {
        childWords.push(prefix + childWord);
      }

      else {
        for (const child of childWord) {
          childWords.push(prefix + child);
        }
      }
    };
  }

  if (childWords.length === 0) {
    childWords = [prefix];
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
