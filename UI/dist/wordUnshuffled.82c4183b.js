// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"script/trie.js":[function(require,module,exports) {

/**
 * Initialize a Trie
 */

/**
 * Create a Node with
 * 1. Keys (Letters / Prefixes)
 * 2. End
 *
 * Add Two Helper Function
 * 1. setEnd
 * 2. isEnd
 */
var Node = function Node() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  };
  this.isEnd = function () {
    return this.end;
  };
};

/**
 * Create a Trie
 * 1. Add()
 * 2. Search()
 */

exports.Trie = function () {
  this.root = new Node();

  //Add Function
  //gets the input and sets the node to the root if no node is provided
  this.add = function (input) {
    var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;

    if (input.length == 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new Node());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  };

  this.isWord = function (word) {
    var node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd() ? true : false;
  };
  this.print = function () {
    var words = new Array();
    var search = function search(node, string) {
      if (node.keys.size != 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = node.keys.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var letter = _step.value;

            search(node.keys.get(letter), string.concat(letter));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    };
    search(this.root, new String());
    return words.length > 0 ? words : "np";
  };
};
},{}],"script/load.js":[function(require,module,exports) {

/**
 * @name loadDoc
 * @param {*} url A Url
 * @param {*} cFunction Callback Function
 * @description Takes in a URL and Callback to Process the Words
 */
exports.loadDoc = function (url, cFunction) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
};
},{}],"script/listLetters.js":[function(require,module,exports) {
//draggable="true" id="src_copy" ondragstart="dragstart_handler(event);" ondragend="dragend_handler(event);
exports.listOfLetters = function (givenText) {
  var node = document.createElement("div"); // Create a <p> node
  $(node).addClass("field transform");
  /*
    $(node).attr({
      draggable:true,
      id:"src_copy",
      ondragstart:"dragstart_handler(event)",
      ondragend:"dragend_handler(event)"
      
    });
    */
  var textnode = document.createTextNode(givenText); // Create a text node
  node.appendChild(textnode); // Append the text to <P>
  document.getElementById("container").appendChild(node); // Append <li> to <ul> with id="myList"
  //element = document.querySelectorAll('p.answers');
};
},{}],"script/randomWord.js":[function(require,module,exports) {
/**
 * @name randomWordSelector
 * @returns {*String newWord} Returns a newWord
 */
exports.randomWordSelector = function (wordList) {
  var random = Math.floor(Math.random() * Object.keys(wordList).length) + 0;

  /* 
    */
  wordA = Object.keys(wordList);
  console.log(wordA);
  return wordA[random];
};
},{}],"script/arrange.js":[function(require,module,exports) {

exports.arrange = function (radius, fields) {

  var container = $("#container");
  var width = container.width();
  var height = container.height();
  var angle = 0,
      step = 2 * Math.PI / fields.length;
  fields.each(function () {
    var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
    var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
    if (window.console) {
      console.log($(this).text(), x, y);
    }
    $(this).css({
      left: x + "px",
      top: y + "px"
    });
    angle += step;
  });
};
},{}],"script/wordProvider.js":[function(require,module,exports) {
"use strict";

var _listLetters = require("./listLetters");

var _listLetters2 = _interopRequireDefault(_listLetters);

var _randomWord = require("./randomWord");

var _randomWord2 = _interopRequireDefault(_randomWord);

var _arrange = require("./arrange");

var _arrange2 = _interopRequireDefault(_arrange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listOfLetters = _listLetters2.default.listOfLetters;
var randomWordSelector = _randomWord2.default.randomWordSelector;
var arrange = _arrange2.default.arrange;
/**
 * @name initializeBeforeStart
 * @param {*String newWord} New Word Provided by Random Word Selector
 * @param {*Object answerList } Reset the previous level Answers
 * @param {*Object completedWords} Provide the list of words completed
 * @description This function will take in 3 parameters and initialize values before start of the game
 */

exports.initializeBeforeStart = function (wordList, btnId) {
  var newWord = randomWordSelector(wordList);
  //console.log("NEW WORD TYPE:", typeof newWord);
  console.log("NEW WORD", newWord);
  //let completedWords = new Object();
  shuffleLetters(newWord);
  var elems = $(".field");
  var radius = 100;
  arrange(radius, elems);
  //console.log("Given Letters:", splitWord(newWord));
  //console.log( "New Word= ",  newWord, "CompletedWords= ", completedWords );

  $(btnId).click(function () {
    var tempnewWord = newWord.split("");
    tempnewWord = shuffle(tempnewWord);
    tempnewWord = tempnewWord.join("");
    removeNode();
    shuffleLetters(tempnewWord);
    var elems = $(".field");
    arrange(radius, elems);
    $(".transform").toggleClass("transform-active");
  });
};
function removeNode() {
  var lengthOfChild = container.childNodes.length;
  var i = 7;
  var x = $("#container > div + div");
  x.remove();
  console.log(container.children);
  //console.log(container.removeChild(container.childNodes[7]));
  //console.log(container.removeChild(container.childNodes[8]));

  //console.log(childNode.nextElementSibling);

  //while(container.hasChildNodes()){
  //container.removeChild(container.childNodes[7]);
  //}
}
/**
 * Shuffle The Letters
 */
function shuffleLetters(newWord) {
  var punctuationless = newWord.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  var finalString = punctuationless.replace(/\s{2,}/g, " ");
  for (var i = 0; i < finalString.length; i++) {
    listOfLetters(finalString[i]);
  }
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
},{"./listLetters":"script/listLetters.js","./randomWord":"script/randomWord.js","./arrange":"script/arrange.js"}],"script/wordUnshuffled.js":[function(require,module,exports) {
"use strict";

var _trie = require("./trie");

var _trie2 = _interopRequireDefault(_trie);

var _load = require("./load");

var _load2 = _interopRequireDefault(_load);

var _wordProvider = require("./wordProvider");

var _wordProvider2 = _interopRequireDefault(_wordProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// !Needed for the game mechanisms
var wordList = new Object(); // *All imports

var wordA = [];

var loadDoc = _load2.default.loadDoc;
var initializeBeforeStart = _wordProvider2.default.initializeBeforeStart;

//!Initis for Imports
var trie = _trie2.default.Trie;

//!Base URL
var url = "https://codepen.io/Sidd92/pen/0abe5f0ad3a8366367426a9f3c51e328.js";
//const debugUrl = "https://codepen.io/Sidd92/pen/wxRJQZ.js";

var meTrie = new trie();
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
  xhttp.onreadystatechange = function () {
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
  for (var i = 0; i < wordA.length; i++) {
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
},{"./trie":"script/trie.js","./load":"script/load.js","./wordProvider":"script/wordProvider.js"}],"../../../../../../usr/local/share/.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '39859' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../usr/local/share/.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script/wordUnshuffled.js"], null)
//# sourceMappingURL=/wordUnshuffled.82c4183b.map