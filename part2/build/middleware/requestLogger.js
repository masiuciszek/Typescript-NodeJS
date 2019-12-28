"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var requestLogger = function (req, res, next) {
    console.info(req.method + " ");
    var start = new Date().getTime();
    next();
};
exports.requestLogger = requestLogger;
