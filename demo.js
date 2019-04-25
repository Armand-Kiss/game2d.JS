const engine = require('./engine');
const Server = require('./server');
let demo = new engine.Engine("Game", "black");
demo.init();
demo.onstart_start();
demo.addActor("player",10,10,"green",10,10);
demo.onkey('w', demo.moveActor("player",true,0,10,true));
demo.onkey('a', demo.moveActor("player",true,-10,0,true));
demo.onkey('s', demo.moveActor("player",true,0,-10,true));
demo.onkey('d', demo.moveActor("player",true,10,0,true));
demo.onstart_end();
demo.start();


let demoserver = new Server.Server(demo.render(),8888);
demoserver.start();