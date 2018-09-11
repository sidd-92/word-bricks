/**
 * @name randomWordSelector
 * @returns {*String newWord} Returns a newWord
 */
exports.randomWordSelector = function(wordList) {
    let random = Math.floor(Math.random() * Object.keys(wordList).length) + 0;
  
    /* 
      */
    wordA = Object.keys(wordList);
    console.log(wordA);
    return wordA[random];
  }