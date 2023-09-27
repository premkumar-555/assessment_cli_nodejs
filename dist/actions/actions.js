"use strict";
const url = require('url');
const fs = require('fs');
// creation of time series data 
const getTimeSeriesData = (content) => {
    const timeSeriesData = [];
    const lines = content === null || content === void 0 ? void 0 : content.trim().split('\n');
    lines === null || lines === void 0 ? void 0 : lines.forEach((line) => {
        const timeStampMatch = line.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/);
        if (timeStampMatch) {
            const timeStamp = new Date(timeStampMatch[0]);
            timeSeriesData.push({ timeStamp, line });
        }
    });
    return timeSeriesData;
};
module.exports = { getTimeSeriesData };
//# sourceMappingURL=actions.js.map