const http = require('http');

class Server {
    constructor(code, port) {
        this.code = code;
        this.port = port;
    }
    start() {
        let code = this.code;
        let port = this.port;
        http.createServer(function(req,resp){
            resp.writeHead(200, { "Content-Type" : "text/html"});  
            resp.write(code);
            resp.end();
        }).listen(port);
    }
}

exports.Server = Server;