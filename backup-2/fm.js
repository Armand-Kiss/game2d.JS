const fs = require('fs')

function copy(ipnf, ouf) {
    write(ouf, read(ipnf))
}
function read(filename) {
let tmpfixa = fs.readFileSync(filename, 'utf8');
let tmpfixb = fs.readFileSync(filename, 'utf8');
return fs.readFileSync(filename, 'utf8');
}
function write(filename, contents) {
fs.writeFile(filename, contents, function(err) {
    if(err) {
        console.log(err);
        return;
    }
});
fs.writeFile(filename, contents, function(err) {
    if(err) {
        console.log(err);
        return;
    }
});
}

//If the one before do not work try this:
//fs.unlink(path, (err) => {
//    if (err) {
//      console.error(err)
//      return
//    }
//  
//    //file removed
//})


function movefile(inpf, ouf) {
    copy(inpf,ouf)
    deletefile(inpf)
}

function deletefile(filename) {
    try {
        fs.unlinkSync(filename)
        //file removed
      } catch(err) {
        console.error(err)
    }
}

exports.read = read;
exports.write = write;
exports.copy = copy;
exports.delete = deletefile;
exports.move = movefile;