const {Command} = require('commander')
const figlet = require('figlet')
const path = require("path")
const readTextFile = require("./actions/ReadFile")
const {getTimeSeriesData, countEndPointCalls, countAPICallsPerMinute} = require('./actions/actions')
// Initiating CLI program with options
const program = new Command();

program
.version("1.0.0")
.description("A CLI to read data files and return back the results in a tabular form")
.option("-epc, --epc <value>", "command to print which endpoint is called how many times")
.option("-pmc, --pmc <value>", "command to print how many API calls were being made on per minute basis")
.option("-scc, --scc <value>", "command to print how many API calls are there in total for each HTTP status code")
.parse(process.argv)   // for parsing command-line arguments

// options
const options = program.opts();

if(options.epc){
  const data = readTextFile(path.resolve(options.epc));
   console.table(countEndPointCalls(data))
}
if(options.pmc){
      const data = readTextFile(path.resolve(options.pmc));
   console.table(countAPICallsPerMinute(data))
}
if(options.scc){
    console.log('scc')
  
}