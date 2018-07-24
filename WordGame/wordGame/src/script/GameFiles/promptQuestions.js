let readlinesync = require("readline-sync");
const newWord = require("./listQuestions");
const listLetters = require("./wordInLetter");
let currentWord = newWord.levelInfo();
let letter = listLetters.splitWord(currentWord.selectedQuestion);
let subWordComplete = {};
let points = 0;
let tempArray = [];
let completedWords = [];
let totalNumberOfWords = currentWord.totalQuestions;
exports.totalNumberOfWords = totalNumberOfWords;
exports.pickAndSolve = () => {
  init();
  console.log(`Find Words From : ${letter}`);
  readlinesync.promptLoop(function(input) {
    console.log(`Find Words From : ${letter}`);
    const ans = currentWord.answers;
    if (input in subWordComplete == false) {
      if (input in ans) {
        points = points + 1;
        subWordComplete[input] = input;
        tempArray.push(input);
        console.log("Sub Words:", tempArray);
      }
    } else {
      console.log("You Already Entered the Word");
    }
    if (tempArray.length == currentWord.lengthOfAnswers) {
      console.log("All Words Complete");
      return true;
    }
  });
  console.log("Words Completed", completedWords);
  if (completedWords.length > 0) {
    console.log(
      "Congrats! You Earned ",
      points * completedWords.length,
      " points "
    );
  }
};

/**
 * @name init
 * @description Initialize all values
 */
let init = () => {
  currentWord = newWord.levelInfo();
  //console.log('All Completed Main Words:--->',completedWords);
  if (completedWords.includes(currentWord.selectedQuestion)) {
    init();
  } else {
    completedWords.push(currentWord.selectedQuestion);
    letter = listLetters.splitWord(currentWord.selectedQuestion);
    subWordComplete = {};
    points = 0;
    tempArray = [];
  }
};
