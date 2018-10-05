//draggable="true" id="src_copy" ondragstart="dragstart_handler(event);" ondragend="dragend_handler(event);
exports.listOfLetters = function(givenText) {
  var node = document.createElement("div"); // Create a <p> node
  $(node).addClass("field transform");

  var textnode = document.createTextNode(givenText); // Create a text node
  node.appendChild(textnode); // Append the text to <P>
  document.getElementById("container").appendChild(node); // Append <li> to <ul> with id="myList"
  //element = document.querySelectorAll('p.answers');
};
