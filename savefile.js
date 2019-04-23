Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

const fm = require('./fm');

class SaveFile {
    constructor() {
    this.values = [];
    }
    getValue(valueid) {
        for (let i = 0; i < this.values.length; i++) {
            const element = this.values[i].split('&&');
            if (element[0] == valueid) {
                return element[1];
            }
        }
    }
    addValue(valuename,defaultvalue) {
    this.values.push(valuename + '&&' + defaultvalue);
    }
    exportformat(values_array) {
        return values_array.toString();
    }
    importformat(enconded) {
        this.values = enconded.split(',');
        return enconded.split(',');
    }
    setValue(valuename,value) {
        for (let i = 0; i < this.values.length; i++) {
            const element = this.values[i].split('&&');
            if (element[0] == valuename) {
                this.values.remove(element[0] + '&&' + element[1])
                this.values.push(element[0] + '&&' + value);
            }
        }
    }
    save() {

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

exports.SaveFile = SaveFile;