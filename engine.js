const fm = require('./fm'); //Import "FileManager"
const jsflib = require("./jsfuck.js");
class Engine {
  constructor(title, backgroundColor, doobfuscate) {
    this.actors = []; //Creates an empty array
    this.obfuscate = false;
    if (doobfuscate == null) {
      this.obfuscate = false;
    }
    if (doobfuscate == true) {
      this.obfuscate = true;
    }
    this.title = title; //Saves the title
    this.backgroundColor = backgroundColor; //Saves the background color
  }
  init() { //Initialize the Engine
    if (this.obfuscate == true) {
      this.out = "<!DOCTYPE html>\n \
    <html>\n \
    <head>\n \
    <title>" + this.title + "</title>\n \
    <meta charset=\"utf-8\"> \n \
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n \
    <style>\n \
    canvas {\n \
        border:1px solid #d3d3d3;\n \
        background-color: " + this.backgroundColor + ";\n \
    }\n \
    </style>\n \
    </head>\n \
    <body onresize=\"resizew()\"> \n \
    <script>\n \
    let gamecanvas = document.getElementsByTagName(\"canvas\")[0]; \n \
    \n \
    " + "eval(" + jsflib.JSFuck.encode("function resizew() {\n \
      let gamecanvas = document.getElementsByTagName(\"canvas\")[0]; \n \
      var w = window.innerWidth;\n \
      var h = window.innerHeight;\n \
      gamecanvas.width = w - 21;\n \
      gamecanvas.height = h - 30;\n \
      updateall(); \n \
    } \n ",false) + ");" + 
    "var myGameArea = {\n \
        canvas : document.createElement(\"canvas\"),\n \
        start : function() {\n \
            var w = window.innerWidth;\n \
            var h = window.innerHeight;\n \
            this.canvas.width = w - 21;\n \
            this.canvas.height = h - 30;\n \
            this.context = this.canvas.getContext(\"2d\");\n \
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);\n \
        }\n \
    }\n \
     \n \
    function addEvent(element, eventName, callback) { \n \
        if (element.addEventListener) { \n \
            element.addEventListener(eventName, callback, false); \n \
        } else if (element.attachEvent) { \n \
            element.attachEvent(\"on\" + eventName, callback); \n \
        } else { \n \
            element[\"on\" + eventName] = callback; \n \
        } \n \
    } \n \
    " + "eval(" + jsflib.JSFuck.encode("function component(width, height, color, x, y) { \n \
      this.width = width; \n \
      this.height = height; \n \
      this.speedX = 0; \n \
      this.speedY = 0; \n \
      this.x = x; \n \
      this.y = y;     \n \
      this.update = function() { \n \
          \n \
          ctx = myGameArea.context; \n \
          ctx.fillStyle = color; \n \
          ctx.fillRect(this.x, this.y, this.width, this.height); \n \
      } \n \
      this.newPos = function(relative,xx,yy) { \n \
        var w = window.innerWidth; \n \
        var h = window.innerHeight; \n \
        var tmpx = this.x / 1 + xx / 1\n \
        var tmpy = this.y / 1 + yy / 1\n \
          if (tmpx < 0 || tmpx > w - 30) {return;} \n \
          if (tmpy < 0 || tmpy > h - 40) {return;} \n \
          if (relative) {\n\
          this.x += xx; \n \
          this.y += yy;         \n \
          } else { \n \
          this.x = xx; \n \
          this.y = yy;\n \
          } \n \
      }     \n \
  } \n ", false) +
    ");\n ";
    } else {
      this.out = "<!DOCTYPE html>\n \
    <html>\n \
    <head>\n \
    <title>" + this.title + "</title>\n \
    <meta charset=\"utf-8\"> \n \
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n \
    <style>\n \
    canvas {\n \
        border:1px solid #d3d3d3;\n \
        background-color: " + this.backgroundColor + ";\n \
    }\n \
    </style>\n \
    </head>\n \
    <body onresize=\"resizew()\"> \n \
    <script>\n \
    let gamecanvas = document.getElementsByTagName(\"canvas\")[0]; \n \
    \n \
    function resizew() {\n \
      let gamecanvas = document.getElementsByTagName(\"canvas\")[0]; \n \
      var w = window.innerWidth;\n \
      var h = window.innerHeight;\n \
      gamecanvas.width = w - 21;\n \
      gamecanvas.height = h - 30;\n \
      updateall(); \n \
    } \n \
    var myGameArea = {\n \
        canvas : document.createElement(\"canvas\"),\n \
        start : function() {\n \
            var w = window.innerWidth;\n \
            var h = window.innerHeight;\n \
            this.canvas.width = w - 21;\n \
            this.canvas.height = h - 30;\n \
            this.context = this.canvas.getContext(\"2d\");\n \
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);\n \
        }\n \
    }\n \
     \n \
    function addEvent(element, eventName, callback) { \n \
        if (element.addEventListener) { \n \
            element.addEventListener(eventName, callback, false); \n \
        } else if (element.attachEvent) { \n \
            element.attachEvent(\"on\" + eventName, callback); \n \
        } else { \n \
            element[\"on\" + eventName] = callback; \n \
        } \n \
    } \n \
    function component(width, height, color, x, y) { \n \
      this.width = width; \n \
      this.height = height; \n \
      this.speedX = 0; \n \
      this.speedY = 0; \n \
      this.x = x; \n \
      this.y = y;     \n \
      this.update = function() { \n \
          \n \
          ctx = myGameArea.context; \n \
          ctx.fillStyle = color; \n \
          ctx.fillRect(this.x, this.y, this.width, this.height); \n \
      } \n \
      this.newPos = function(relative,xx,yy) { \n \
        var w = window.innerWidth; \n \
        var h = window.innerHeight; \n \
        var tmpx = this.x / 1 + xx / 1\n \
        var tmpy = this.y / 1 + yy / 1\n \
          if (tmpx < 0 || tmpx > w - 30) {return;} \n \
          if (tmpy < 0 || tmpy > h - 40) {return;} \n \
          if (relative) {\n\
          this.x += xx; \n \
          this.y += yy;         \n \
          } else { \n \
          this.x = xx; \n \
          this.y = yy;\n \
          } \n \
      }     \n \
  } \n \
    \n ";
    }
  }
  onstart_start() { //onstart begining
    this.out += "function startGame() {\n       myGameArea.start();\n ";
  }
  addCode(jscode) { //Adds browser-side javascript code
    if (this.obfuscate) {
      this.out += "eval(" + jsflib.JSFuck.encode(jscode,false) + ");";
    } else {
    this.out += jscode;
    }
  }
  moveActor(acotrname,relative,x,y, asreturn) { //moves the actor
    if (!asreturn) {
    this.out += acotrname + ".newPos(" + relative + ',' + x + ',' + -y + ");updateall();\n";
    } else {
      let a = acotrname + ".newPos(" + relative + ',' + x + ',' + -y + ");\n";
      a += "updateall(); \n";
      return a;
    }
  }
  onstart_end() { //ends the onstart
    this.out += "function updateall() {\n"
    this.out += "eval(" + jsflib.JSFuck.encode("myGameArea.start();",false) + ");"
    let arr = this.actors;
    let temp = "";
    for (let i = 0; i < this.actors.length; i++) {
      const element = arr[i];
      temp += element + ".update();\n" //Updates the acotrs
    }
    this.out += temp; //adds the code
    this.out += "\n};\n";
    this.out += "         }";
  }
  logText(text) { //Logs text to the console
    this.out += "\nconsole.log(\"" + text + "\");\n";
  }
  logkeys() { //Logs the keys that are pressed
    if (this.obfuscate) {
      this.out += jsflib.JSFuck.encode("addEvent(document, \"keypress\", function (e) { \n \
        e = e || window.event; \n \
        console.log(e.key); \n \
      }); \n \
      ",true);
    } else {
    this.out += "addEvent(document, \"keypress\", function (e) { \n \
      e = e || window.event; \n \
      console.log(e.key); \n \
    }); \n \
    ";
  }
  }
  pasueSound(id) { //Pauses a sound
  this.out += id + ".pause();";
  }
  unpauseSound(id) { //UnPauses a sound
  this.out += id + ".paused = true;";
  }
  playSound(id,remoteurl) { //Plays a sound from a remote link
    this.out += "\n \
    let " + id + " = new Audio('" + remoteurl + "')\n \
    " + id + ".play();\n \
    ";
  }
  randomInt(min, max) { //Generates a random int
    let int = Math.floor(Math.random() * (max + 1)) + min;
    return int; //Returns the random int
  }
  isEven(num) { //Checks if a number is even
    if(num % 2) {
      return false;
    }
    return true;
  }
  getPi() { //Returns Pi
    const PI = 3.141592653589793;
    return PI;
  }
  
  reverseminus(number) { //Reverses a number
    return -number;
  }
  onkey(letter, code) { //On key press
    if (this.obfuscate) {
      this.out += "addEvent(document, \"keypress\", function (e) { \n \
        e = e || window.event; \n \
        if (\"" + letter + "\" == e.key) \n \
        {" + '\n' + "eval(" + jsflib.JSFuck.encode(code,false) + ");" + "};\n \
      }); \n \
      ";
    } else {
    this.out += "addEvent(document, \"keypress\", function (e) { \n \
      e = e || window.event; \n \
      if (\"" + letter + "\" == e.key) \n \
      {" + '\n' + code + "};\n \
    }); \n \
    ";
  }
  }
  addActor(id,width,height,color, x,y) { //Adds an actor
    this.actors.push(id); //Pushes the actor to the array
    if (this.obfuscate) {
      this.out += "eval(" + jsflib.JSFuck.encode("       var " + id + ";\n \
        " + id + " = new component(" + width + ", " + height + ", \"" + color + "\", " + x + ", " + y + ");" + " \n",false) + ");";
    }
    this.out += 
    "       var " + id + ";\n \
        " + id + " = new component(" + width + ", " + height + ", \"" + color + "\", " + x + ", " + y + ");" + " \n";
        this.out += "\n " + id + ".update();"; //generates the code
      }
  start() { //Starts the game, and the Engine
    if (this.obfuscate) {
      this.out += "\n         eval("+ jsflib.JSFuck.encode("startGame();", false) + ");";
    } else {
    this.out += "\n         startGame(); \n";
    }
  }
  export(antidebug) { //Finishes the engine script, and returns it in html
    if (antidebug == null || !antidebug) {
      this.out += "</script>\n ";
      return this.out;
    }
    if (antidebug) {
      this.out += jsflib.JSFuck.encode("function ___(){var __a=eval(\"performance.now();\");eval(\"debugger;\");var __b=eval(\"performance.now();\");__b-__a>1e3&&location.reload(),setTimeout(___,200)}___();throw(\"Please close the developer tools!\");", true);
      this.out += "</script>\n ";
      return this.out;
    }

  }
}




exports.Engine = Engine;