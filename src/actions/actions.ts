const url = require('url');
const fs = require('fs')
interface TimeSeries {
    timeStamp: Date,
    line: string
}
// creation of time series data 
const getTimeSeriesData = (content: string): TimeSeries[] => {
const timeSeriesData : TimeSeries[] = [];
 const lines = content?.trim().split('\n');
 lines?.forEach((line: string) => {
     const timeStampMatch = line.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/);
     if(timeStampMatch){
         const timeStamp: Date = new Date(timeStampMatch[0]);
         timeSeriesData.push({timeStamp, line});
    }
 })
 return timeSeriesData;
}


module.exports = {getTimeSeriesData}