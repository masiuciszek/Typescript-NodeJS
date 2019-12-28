"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
/* eslint-disable no-use-before-define */
require("reflect-metadata");
var Plane = /** @class */ (function () {
    function Plane() {
        this.color = 'red';
    }
    Plane.prototype.fly = function () {
        console.log('vrrrrr');
    };
    __decorate([
        markFunc,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Plane.prototype, "fly", null);
    return Plane;
}());
function markFunc(target, key) {
    Reflect.defineMetadata('secret', 123, target);
}
var secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
console.log(secret);
// const plane = {
//   color: 'red',
// };
// Reflect.defineMetadata('note', 'yooo', plane);
// Reflect.defineMetadata('note2', 'yooo', plane, 'color');
// Reflect.defineMetadata('height', 20, plane);
// const note = Reflect.getMetadata('note', plane);
// const note2 = Reflect.getMetadata('note2', plane, 'color');
// const height = Reflect.getMetadata('height', plane);
// console.log(plane);
// console.log(note);
// console.log(height);
// console.log(note2);
