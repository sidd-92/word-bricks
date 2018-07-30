/**
 * ------------------------------------------
 * -------------------------------------------
 * ---------------------------------------------------------
 */
//Handling JSON Data
let json = "https://codepen.io/Sidd92/pen/7fddfebfe736eb13caf0b427f58ca9fc.js";
let assignedAnswers = {};
let assignedWord;
let totalAns;
let insideFunction = 0;
$.getJSON(json, function(data) {
  insideFunction++;

  console.log("Total Number of Words: ", Object.keys(data[0]).length);
  let questions = Object.keys(data[0]);
  console.log(Object.keys(data[0]).length);
  let answerObject = {};
  console.log("DEBUG Questions", questions);
  console.log("DEBUG QuestionsLEN", questions.length);
  for (let i = 0; i < questions.length; i++) {
    answerObject[questions[i]] = data[0][questions[i]].answer;
    //console.log(data[0][questions[i]].answers);
  }
  let random = Math.floor(Math.random() * questions.length) + 0;
  var displayLetters = document.getElementById("showLetters");
  assignedWord = questions[random];
  console.log("DEBUG:", assignedWord);
  console.log("DEBUG ANSOBJ:", answerObject);
  if (assignedWord in answerObject) {
    //console.log('DEBUG:',answerObject[assignedWord].length);
    for (let i = 0; i < answerObject[assignedWord].length; i++)
      assignedAnswers[answerObject[assignedWord][i]] =
        answerObject[assignedWord][i];
  }
  totalAns = Object.keys(assignedAnswers).length;
  //console.log("Total Number of Ans", totalAns);
  //console.log(assignedWord);
  //console.log(assignedAnswers);

  displayLetters.innerHTML = splitWord(assignedWord);
  //console.log(shuffle(questions[0]));
});

function splitWord(word) {
  var letters = [];
  for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }
  letters = shuffle(letters);
  return letters.join(",");
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
