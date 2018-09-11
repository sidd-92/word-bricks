
/**
 * @name loadDoc
 * @param {*} url A Url
 * @param {*} cFunction Callback Function
 * @description Takes in a URL and Callback to Process the Words
 */
exports.loadDoc = function(url, cFunction) {
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
  