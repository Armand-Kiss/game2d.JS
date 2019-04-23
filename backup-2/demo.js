const engine = require('./engine');
const Server = require('./server');


let demo = new engine.Engine("Kecske!", "black");
demo._start();
demo.onstart_start();
demo.addActor("kecske",10,10,"blue",10,10);
demo.addActor("kecske2",10,10,"red",500,500)
demo.logkeys();
demo.onkey('w', demo.moveActor("kecske",true,0,-10,true));
demo.onkey('a', demo.moveActor("kecske",true,-10,0,true));
demo.onkey('s', demo.moveActor("kecske",true,0,10,true));
demo.onkey('d', demo.moveActor("kecske",true,10,0,true));
//TODO Ebbe a rangebe kell írni az updateall(); fugvényt!
demo.onstart_end();
demo.start();


let demoserver = new Server.Server(demo.render(),8888);
demoserver.start();