"use strict";
const fs = require('fs');
const path = require('path');
// function to read text file and print data
const readTextFile = (filepath) => {
    try {
        const data = fs.readFileSync(filepath, 'utf8');
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
};
module.exports = readTextFile;
//# sourceMappingURL=ReadFile.js.map