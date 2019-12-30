"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function routeCompresser(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = routeCompresser('get');
exports.put = routeCompresser('put');
exports.post = routeCompresser('post');
exports.del = routeCompresser('get');
exports.patch = routeCompresser('patch');
