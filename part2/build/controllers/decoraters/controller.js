"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
function controller(routePrefix) {
    var router = AppRouter_1.AppRouter.getInstance();
    return function (target) {
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            var method = Reflect.getMetadata('method', target.prototype, key);
            if (path) {
                router[method]("" + routePrefix + path, routeHandler);
            }
        }
    };
}
exports.controller = controller;
