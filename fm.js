const fs = require('fs');

function copy(ipnf, ouf) {
    write(ouf, read(ipnf));
}
function read(filename) {
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


function movefile(inpf, ouf) {
    copy(inpf,ouf);
    deletefile(inpf);
}

function deletefile(filename) {
    try {
        fs.unlinkSync(filename);
      } catch(err) {
        console.error(err);
    }
}

function append(filename,content) {
    write(filename, read(filename) + content);
}

exports.read = read;
exports.write = write;
exports.copy = copy;
exports.delete = deletefile;
exports.move = movefile;
exports.append = append;