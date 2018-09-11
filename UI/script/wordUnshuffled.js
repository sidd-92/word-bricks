//All imports
import Trie from "./trie";

import dictionary from "./load";
import wordProvider from "./wordProvider";

//Needed for the game mechanisms
let wordList = new Object();
let wordA = [];

let loadDoc = dictionary.loadDoc;
let initializeBeforeStart = wordProvider.initializeBeforeStart;

//Initis for Imports
let trie = Trie.Trie;

//Base URL
const url = "https://codepen.io/Sidd92/pen/0abe5f0ad3a8366367426a9f3c51e328.js";
//const debugUrl = "https://codepen.io/Sidd92/pen/wxRJQZ.js";

let meTrie = new trie();
loadDoc(url, processWordList);

/**
 * @name loadDoc
 * @param {*} url A Url
 * @param {*} cFunction Callback Function
 * @description Takes in a URL and Callback to Process the Words
 */
function loadDoc(url, cFunction) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

/**
 * @name ProcessWordList
 * @param {*} xhttp Takes in the Object xhttp passed by loadDoc
 * @description Takes in a HTTP object and gets the responseText
 */
function processWordList(xhttp) {
  wordA = xhttp.responseText.split(",");
  for (let i = 0; i < wordA.length; i++) {
    meTrie.add(wordA[i]);
    wordList[wordA[i]] = wordA[i];
  }
  console.log("TRIE", meTrie);

  initializeBeforeStart(wordList, "#button");
}

console.log("TRIE PRINT", meTrie.print());
//let newWord = randomWordSelector();

/**
 * Remove Existing Nodes
 */

/**
 * UTILITY METHODS
 * 1. Arrange In a Circle
 * 2. Create Node/List
 * 3. Split Word
 * 4. Shuffle
 * 5. bigWordsFirst
 * 6. smallWordsFirst
 */

/*
function createList(givenText) {
  var node = document.createElement("p"); // Create a <p> node
  $(node).addClass("pills");
  var textnode = document.createTextNode(givenText); // Create a text node
  node.appendChild(textnode); // Append the text to <P>
  document.getElementById("list").appendChild(node); // Append <li> to <ul> with id="myList"
  //element = document.querySelectorAll('p.answers');
}
*/
/*
function splitWord(word) {
  var letters = [];
  for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }
  letters = shuffle(letters);
  return letters.join(",");
}
*/
