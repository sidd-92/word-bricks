let readlinesync = require("readline-sync");
const pickAndSolve = require("./promptQuestions");
let startLevel = pickAndSolve.pickAndSolve;
const welcomeText =
  "Welcome to The Word Scramble Game, do you want to start a game (yes/no)";
const nextLevelText = "Want to play the next level ?";
let count = 0;

let totalNumberOfLevels = 10;

//readlinesync.setDefaultOptions({limit: ['yes', 'exit']});
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

//let totalNumberLevels = 10;
/* 
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt(welcomeText);
rl.prompt();

  rl.once("line", line => {
    if (line.toLowerCase() == "y") {
      startLevel();
      process.stdin.destroy();
      rl.close();
    } else if (line.toLowerCase() == "n") {
      rl.close();
    }
  });
  
  rl.on("SIGINT", () => {
    rl.question("Are you sure you want to exit? ", answer => {
      if (answer.match(/^y(es)?$/i)) rl.pause();
    });
  });

 */
