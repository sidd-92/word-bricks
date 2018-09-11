
function dragstart_handler(ev) {
    console.log("dragStart");
    // Change the source element's background color to signify drag has started
    ev.currentTarget.style.border = "dashed";
    // Add the id of the drag source element to the drag data payload so
    // it is available when the drop event is fired
    ev.dataTransfer.setData("text", ev.target.id);
    // Tell the browser both copy and move are possible
    ev.effectAllowed = "copyMove";
   }
   function dragover_handler(ev) {
    console.log("dragOver");
    // Change the target element's border to signify a drag over event
    // has occurred
    ev.currentTarget.style.background = "lightblue";
    ev.preventDefault();
   }
   function drop_handler(ev) {
     console.log("Drop");
     ev.preventDefault();
     // Get the id of drag source element (that was added to the drag data
     // payload by the dragstart event handler)
     var id = ev.dataTransfer.getData("text");
     // Only Move the element if the source and destination ids are both "move"
     if (id == "src_move" && ev.target.id == "dest_move")
       ev.target.appendChild(document.getElementById(id));
     // Copy the element if the source and destination ids are both "copy"
     if (id == "src_copy" && ev.target.id == "dest_copy") {
      var nodeCopy = document.getElementById(id).cloneNode(true);
      nodeCopy.id = "newId";
      ev.target.appendChild(nodeCopy);
     }
   }
   function dragend_handler(ev) {
     console.log("dragEnd");
     // Restore source's border
     ev.target.style.border = "solid black";
     // Remove all of the drag data
     ev.dataTransfer.clearData();
   }