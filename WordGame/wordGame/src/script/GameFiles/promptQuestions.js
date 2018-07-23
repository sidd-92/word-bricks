let readlinesync = require("readline-sync");
const newWord = require("./listQuestions");
const listLetters = require("./wordInLetter");
let currentWord = newWord.levelInfo();
let letter = listLetters.splitWord(currentWord.selectedQuestion);
let subWordComplete = {};
let points = 0;
let tempArray = [];
let completedWords = [];

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
      currentWord.level = 1;
      console.log("All Words Complete");
      return true;
    }
  });
  console.log('Words Completed',completedWords);
  if(completedWords.length > 0){
    console.log('Congrats! You Earned ',points*completedWords.length,' points ');
  }
  
};

/**
 * @name init
 * @description Initialize all values
 */
let init = ()=>{
  currentWord = newWord.levelInfo();
  //console.log('All Completed Main Words:--->',completedWords);
  if(completedWords.includes(currentWord.selectedQuestion)){
    init();
  }
  else{
    completedWords.push(currentWord.selectedQuestion);
    letter = listLetters.splitWord(currentWord.selectedQuestion); 
    subWordComplete = {};
    points = 0;
    tempArray = [];
  }
    
  
  
  
}

  
  /*
  currentWord = newWord.levelInfo();
  if(currentWord.level !== 1){
    letter = listLetters.splitWord(currentWord.selectedQuestion);
    subWordComplete = {};
    points = 0;
    tempArray = [];
  }
  */
//init();
//pickAndSolve();

/* 


let pAnS = () => {
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt(`Find Words From : ${letter} >>> `);
  rl.prompt();
  rl.on("line", function(line) {
    const ans = currentWord.answers;

    if (line in subWordComplete == false) {
      if (line in ans) {
        points = points + 1;
        subWordComplete[line] = line;
        tempArray.push(line);
        console.log("Completed Words:", tempArray);
        
      }
    } else {
      console.log("You Already Entered the Word");
    }
    if (tempArray.length == currentWord.lengthOfAnswers) {
      currentWord.level = 1;
      console.log("All Words Complete");
      rl.close();
    }

    rl.prompt();
  });
};
 */
