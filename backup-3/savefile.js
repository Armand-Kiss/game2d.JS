const fm = require('./fm');

class SaveFile {
    constructor() {
    this.values = [];
    }
    addValue(valuename,defaultvalue) {
    this.values.push(valuename + '&&' + defaultvalue);
    }
    setValue(valuename,value) {
        for (let i = 0; i < this.values.length; i++) {
            const element = this.values[i].split('&&');
            if (element[0] == valuename) {
                element[1] = value;
            }
        }
    }
    write(filename,content) {
        fm.write(filename,content)
    }
    read(filename) {
        return fm.read(filename);
    }
    copy(inputfile,outputfile) {
        fm.copy(inputfile,outputfile);
    }
    move (inputfile,outputfile) {
        fm.move(inputfile,outputfile);
    }
    append (filename,content) {
        return fm.append(filename,content);
    }
    delete(filename) {
        fm.delete(filename);
    }
}

let demo = new SaveFile();
demo.addValue("hp",10);
demo.setValue("hp",9);

exports.SaveFile = SaveFile;