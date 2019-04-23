const fm = require('./fm');
class Engine {
  constructor(title, backgroundColor) {
    this.actors = [];
    this.title = title;
    this.backgroundColor = backgroundColor;
  }
  _start() {
    this.out = "<!DOCTYPE html>\n \
    <html>\n \
    <head>\n \
    <title>" + this.title + "</title>\n \
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n \
    <style>\n \
    canvas {\n \
        border:1px solid #d3d3d3;\n \
        background-color: " + this.backgroundColor + ";\n \
    }\n \
    </style>\n \
    </head>\n \
    <body> \n \
    <script>\n \
    \n \
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
  onstart_start() {
    this.out += "function startGame() {\n       myGameArea.start();\n ";
  }
  moveActor(acotrname,relative,x,y, asreturn) {
    if (!asreturn) {
    this.out += acotrname + ".newPos(" + relative + ',' + x + ',' + y + ");\n";
    this.out += "updateall(); \n";
    } else {
      let a = acotrname + ".newPos(" + relative + ',' + x + ',' + y + ");\n";
      a += "updateall(); \n";
      return a;
    }
  }
  onstart_end() {
    this.out += "function updateall() {\n"
    this.out += "myGameArea.start();"
    let arr = this.actors;
    let temp = "";
    for (let i = 0; i < this.actors.length; i++) {
      const element = arr[i];
      temp += element + ".update();"
    }
    this.out += temp;
    this.out += "\n};"
    this.out += "console.log(updateall.toString());\nupdateall();\n"
    this.actors //Hint ;)
    //Ide kell írni az updateall fugyvényt
    this.out += "         }";
  }
  logkeys() {
    this.out += "addEvent(document, \"keypress\", function (e) { \n \
      e = e || window.event; \n \
      console.log(e.key); \n \
    }); \n \
    ";
  }
  onkey(letter, code) {
    this.out += "addEvent(document, \"keypress\", function (e) { \n \
      e = e || window.event; \n \
      if (\"" + letter + "\" == e.key) \n \
      {" + '\n' + code + "};\n \
    }); \n \
    ";
  }
  addActor(id,width,height,color, x,y) {
    this.actors.push(id);
    this.out += 
    "       var " + id + ";\n \
        " + id + " = new component(" + width + ", " + height + ", \"" + color + "\", " + x + ", " + y + ");" + " \n";
        this.out += "\n " + id + ".update();";
      }
  start() {
    this.out += "\n         startGame(); \n";
  }
  render() {
    this.out += "</script>\n "
    return this.out;
  }
}

exports.Engine = Engine;