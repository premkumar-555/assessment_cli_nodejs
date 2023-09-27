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
//  counting number of times each end point is called
const countEndPointCalls = (timeSeriesData) => {
    const countAPICalls = {};
    timeSeriesData.forEach((dataPoint) => {
        var _a;
        const line = dataPoint.line;
        const urlMatch = line.match(/https?:\/\/[^\s]+/);
        if (urlMatch) {
            const path = (new URL(urlMatch[0])).pathname;
            countAPICalls[path] = { end_point: path, count: (((_a = countAPICalls[path]) === null || _a === void 0 ? void 0 : _a.count) || 0) + 1 };
        }
    });
    return Object.values(countAPICalls);
};
module.exports = { getTimeSeriesData, countEndPointCalls };
//# sourceMappingURL=actions.js.map