const engine = require('./engine');
const Server = require('./server');
let demo = new engine.Engine("Game", "black");
demo.init();
demo.onstart_start();
demo.addActor("kecske",10,10,"yellow",10,10);
demo.onkey('w', demo.moveActor("kecske",true,0,10,true));
demo.onkey('a', demo.moveActor("kecske",true,-10,0,true));
demo.onkey('s', demo.moveActor("kecske",true,0,-10,true));
demo.onkey('d', demo.moveActor("kecske",true,10,0,true));
demo.onstart_end();
demo.start();


let demoserver = new Server.Server(demo.render(),8888);
demoserver.start();