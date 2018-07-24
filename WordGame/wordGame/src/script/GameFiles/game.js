let readlinesync = require("readline-sync");
const pickAndSolve = require("./promptQuestions");
let startLevel = pickAndSolve.pickAndSolve;
const welcomeText =
  "Welcome to The Word Scramble Game, do you want to start a game (yes/no)";
const nextLevelText = "Want to play the next level ?";
let count = 0;

let totalNumberOfLevels = pickAndSolve.totalNumberOfWords;

console.log(welcomeText);
readlinesync.promptCLLoop({
  yes: function() {
    count = count + 1;
    if (count != totalNumberOfLevels) {
      startLevel();
      console.log(nextLevelText,' (yes/no)');
    } else {
      console.log("Thank You For Completing All Levels: (quit)");
    }
  },
  no: function() {
    console.log("Thank You");
    return true;
  },
  quit:function(){
    console.log("Thank You");
    process.exit(0);
  }
  
});
console.log("Bye");
