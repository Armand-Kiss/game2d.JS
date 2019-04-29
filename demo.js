const engine = require('./engine'); //Import engine.js
const Server = require('./server'); //Import server.js

let demo = new engine.Engine("Game", "black",true); //Create a new canvas with back color and set the window title to "Game"
demo.init(); //Initialize the engine
demo.onstart_start(); //On start beggining ON FIREFOX YOU HAVE TO ENABLE PLAY MUSIC AUTOMATICALLY!
//demo.playSound("samplemusic", "http:\/\/www.noiseaddicts.com/samples_1w72b820/3732.mp3");
demo.addActor("player",10,10,"green",10,10); // Create a new player by id "player" with 10x10 size, color green and x=10,y=10
demo.onkey('w', demo.moveActor("player",true,0,10,true)); //Lisen to press w and then move the player by 10 on y
demo.onkey('a', demo.moveActor("player",true,-10,0,true)); //Lisen to press a and then move the player by -10 on x
demo.onkey('s', demo.moveActor("player",true,0,-10,true)); //Lisen to press s and then move the player by -10 on y
demo.onkey('d', demo.moveActor("player",true,10,0,true)); //Lisen to press d and then move the player by 10 on x
demo.onstart_end(); //On start end
demo.start(); //Start the game

let demoserver = new Server.Server(demo.export(true),8888); // Setup an http server on port 8888
demoserver.start(); //Start the http server