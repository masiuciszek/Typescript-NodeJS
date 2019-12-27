"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var AddressSchema = new mongoose_1.Schema({
    city: { type: String, required: true },
    country: String,
    zip: String,
});
var UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
});
exports.User = mongoose_1.model('User', UserSchema);
