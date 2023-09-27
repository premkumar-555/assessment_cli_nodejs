const fs = require('fs');
const path = require('path');
const {getTimeSeriesData} = require('./actions')
// function to read text file and print data
 const readTextFile = (filepath: string) => {
   try {
    const data =  fs.readFileSync(filepath, 'utf8');
    const timeSeriesData = getTimeSeriesData(data);
    return timeSeriesData;
   } catch (error) {
    console.log(error)
   }
} 

module.exports = readTextFile;