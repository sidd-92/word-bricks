/**
 * -----------------------------------------------------------------------
 */
//Main Part of the program
let givenAnswer;
let message = document.getElementById("error");
let success = document.getElementById("success");

let textInput = document.getElementById("getWord");
function getInput() {
  givenAnswer = textInput.value.toLowerCase();
}

let buttonClick = document.getElementById("clickBtn");
buttonClick.addEventListener("click", checkWord);

let displayAnswers = document.getElementById("displayAnswers");
//let element;
function createList(givenText) {
  var node = document.createElement("P"); // Create a <p> node
  $(node).addClass("answers");
  var textnode = document.createTextNode(givenText); // Create a text node
  node.appendChild(textnode); // Append the text to <P>
  document.getElementById("displayAnswers").appendChild(node); // Append <li> to <ul> with id="myList"
  //element = document.querySelectorAll('p.answers');
}

//Clear All Words
let clearField = document.getElementById("clearWords");
clearField.addEventListener("click", function() {
  while (displayAnswers.hasChildNodes()) {
    displayAnswers.removeChild(displayAnswers.firstChild);
  }
});
//Main Part of the program
/**
 * -----------------------------------------------------------------------
 */

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let answeredBy = {};
let subWordCount = 0;

function checkWord() {
  success.innerHTML = "";
  getInput();
  if (givenAnswer !== "") {
    if (
      message.innerHTML == "ERROR!" ||
      message.innerHTML == "Not the word I want, Try Again !" ||
      message.innerHTML == "You already got that word!"
    ) {
      message.innerHTML = "";
    }
    //console.log(givenAnswer);
    //displayAnswers.childNodes[1].innerHTML = givenAnswer;
    // success.innerHTML = "All Words Complete";
    if (givenAnswer in answeredBy == false) {
      if (givenAnswer in assignedAnswers) {
        //console.log("Assigned Answers", assignedAnswers);
        subWordCount++;
        if (subWordCount == totalAns) {
          success.innerHTML = "Congrats ! Level Complete";
        } else {
          success.innerHTML = "Yes!, You Got It";
        }

        answeredBy[givenAnswer] = givenAnswer;
        createList(givenAnswer);
      } else {
        message.innerHTML = "Not the word I want, Try Again !";
      }
    } else {
      message.innerHTML = "You already got that word!";
    }
  } else {
    message.innerHTML = "ERROR!";
  }

  textInput.value = null;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
