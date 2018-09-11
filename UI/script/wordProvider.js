import letterList from "./listLetters";
import randomizer from "./randomWord";
import circleArrange from "./arrange";
let listOfLetters = letterList.listOfLetters;
let randomWordSelector = randomizer.randomWordSelector;
let arrange = circleArrange.arrange;
/**
 * @name initializeBeforeStart
 * @param {*String newWord} New Word Provided by Random Word Selector
 * @param {*Object answerList } Reset the previous level Answers
 * @param {*Object completedWords} Provide the list of words completed
 * @description This function will take in 3 parameters and initialize values before start of the game
 */

exports.initializeBeforeStart = function(wordList, btnId) {
  let newWord = randomWordSelector(wordList);
  //console.log("NEW WORD TYPE:", typeof newWord);
  console.log("NEW WORD", newWord);
  //let completedWords = new Object();
  shuffleLetters(newWord);
  var elems = $(".field");
  let radius = 100;
  arrange(radius, elems);
  //console.log("Given Letters:", splitWord(newWord));
  //console.log( "New Word= ",  newWord, "CompletedWords= ", completedWords );

  $(btnId).click(function() {
    var tempnewWord = newWord.split("");
    tempnewWord = shuffle(tempnewWord);
    tempnewWord = tempnewWord.join("");
    removeNode();
    shuffleLetters(tempnewWord);
    var elems = $(".field");
    arrange(radius, elems);
    $(".transform").toggleClass("transform-active");
  });
};
function removeNode() {
  var lengthOfChild = container.childNodes.length;
  let i = 7;
  var x = $("#container > div + div");
  x.remove();
  console.log(container.children);
  //console.log(container.removeChild(container.childNodes[7]));
  //console.log(container.removeChild(container.childNodes[8]));

  //console.log(childNode.nextElementSibling);

  //while(container.hasChildNodes()){
  //container.removeChild(container.childNodes[7]);
  //}
}
/**
 * Shuffle The Letters
 */
function shuffleLetters(newWord) {
  var punctuationless = newWord.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  var finalString = punctuationless.replace(/\s{2,}/g, " ");
  for (let i = 0; i < finalString.length; i++) {
    listOfLetters(finalString[i]);
  }
}

function shuffle(array) {
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
