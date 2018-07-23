let fs = require("fs");
// Get content from dictionary
let contents = fs.readFileSync("/home/sid/Desktop/Common Files/WordGame/wordGame/src/data/dictionary.json");
// Define to JSON type
let jsonContent = JSON.parse(contents);

exports.levelInfo = () => {
  let ques = new Array();
  let answers = new Object();
  //Object.keys(file)
  let arrayAnswer, lengthOfAnswers;
  for (let q in jsonContent) {
    ques.push(q);
  }
  let random = Math.floor(Math.random() * ques.length + 0);
  let selectedQuestion = ques[random];
  let level = jsonContent[selectedQuestion]["level"];
  //console.log(selectedQuestion);
  //given word in the json dictionary
  if (selectedQuestion in jsonContent) {
    arrayAnswer = jsonContent[selectedQuestion]["answer"];
  }
  lengthOfAnswers = arrayAnswer.length;
  //console.log(arrayAnswer);
  //map all the anwers into a object
  for (let i = 0; i < arrayAnswer.length; i++) {
    answers[arrayAnswer[i]] = arrayAnswer[i];
  }
  //Need to add Level in the object
  return { selectedQuestion, level, answers, lengthOfAnswers };
};
