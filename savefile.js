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

const fm = require('./fm'); //Imports the filemanager

class SaveFile {
    constructor() {
    this.values = [];
    }
    getValue(valueid) {
        for (let i = 0; i < this.values.length; i++) {
            const element = this.values[i].split('&&');
            if (element[0] == valueid) {
                return element[1]; //Returns the value of the "var"
            }
        }
    }
    addValue(valuename,defaultvalue) {
    this.values.push(valuename + '&&' + defaultvalue); //Creates a new "var" with a default value
    }
    exportformat(values_array) {
        return values_array.toString(); //Exports the array
    }
    importformat(enconded) {
        this.values = enconded.split(','); //Imports the format
        return enconded.split(','); //Imports the format
    }
    setValue(valuename,value) { //Sets value of a "var" to a value
        for (let i = 0; i < this.values.length; i++) {
            const element = this.values[i].split('&&');
            if (element[0] == valuename) { //If the value name is in the array
                this.values.remove(element[0] + '&&' + element[1]) //Then remove it
                this.values.push(element[0] + '&&' + value); //And add it with the new value
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

exports.SaveFile = SaveFile;