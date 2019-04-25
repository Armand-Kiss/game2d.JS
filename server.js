const http = require('http'); //Imports the built in http packages

class Server {
    constructor(code, port) {
        this.code = code; //Saves the html code of the engine
        this.port = port; //Saves the port
    }
    start() {
        let code = this.code; //Saves the this.code var to code
        let port = this.port; //Saves the this.port var to port
        http.createServer(function(req,resp){
            resp.writeHead(200, { "Content-Type" : "text/html"});  
            resp.write(code); //Reads the code variable and sends it
            resp.end(); //Ends the requiest
        }).listen(port); //Reads the port variable
    }
}

exports.Server = Server;