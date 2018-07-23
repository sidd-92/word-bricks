/*
"use strict";
let fs = require("fs");
const readline = require("readline");
let shuffle = require("shuffle-array");
// Get content from dictionary
let contents = fs.readFileSync("dummy.json");
// Define to JSON type
let jsonContent = JSON.parse(contents);
// Get Value from JSON
*/
/*
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('guess> ');
rl.prompt();
rl.on('line', function(line) {
    if (line === "right") rl.close();
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});
*/

/**
 * @name game
 * @requires fs
 * @param {*} givenWord : User Provided word
 * @returns Whether the givenWord exists
 */
/*
function game(givenWord) {
  let score = 0;
  let levelManager = new Object();
  let scoreManager;
  let stateManager;
  let subWordCompleted = new Object();
  //Level Manager
  //Format of the Level Manager should be:
  //{question : true}
  levelManager[p] = true;
  //console.log(levelManager,givenWord);
  //subWordCompleted
  //Step 1: Get Answer object
  let answerPicked = getAns(jsonContent, p);
  //Step 2: Check the given word with the answers
  if (givenWord in answerPicked) {
    subWordCompleted[givenWord] = true;
  }
  console.log(subWordCompleted);
}
*/
/**
 * @name PickaRandomQuestion
 * @returns Jumbled Letters
 */
/*
function pickQ() {
  let qs = getQuestions();
  return pickRandomWord(qs);
}
*/

/**
 * @name GetAnswers
 * @function getAns
 * @param {*} dictionary : the JSON dictionary
 * @param {*} word : the pickedWord
 * @returns The List of Answers into a Object
 */
/*
function getAns(dictionary, word) {
  let answerObj = new Object();
  let arrayAnswer;
  //given word in the json dictionary
  if (word in dictionary) {
    arrayAnswer = dictionary[word]["answer"];
  }
  //map all the anwers into a object
  for (let i = 0; i < arrayAnswer.length; i++) {
    answerObj[arrayAnswer[i]] = arrayAnswer[i];
  }

  return answerObj;
}
*/
/**
 * @name QuestionsArray
 * @returns The List of Questions
 */
/*
function getQuestions() {
  let question = new Array();
  for (let exKey in jsonContent) {
    question.push(exKey);
  }
  return question;
}
*/

/**
 * @name PickRandom
 * @function pickedWord
 * @param {*} arr A array of values
 * @returns A random value from the array
 */
/*
function pickRandomWord(arr) {
  let random = Math.floor(Math.random() * arr.length + 0);
  return arr[random];
}
*/

/**
 * @name SplitWordToLetters
 * @requires shuffle
 * @param {*} word A pickedWord
 * @returns A shuffled string of letters
 */
/*
function splitWord(word) {
  let letters = [];
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }
  //Using external shuffle library
  letters = shuffle(letters);
  return letters.join(",");
}
*/
