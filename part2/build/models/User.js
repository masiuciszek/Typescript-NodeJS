"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var schema = {
    title: { type: mongoose_1.default.SchemaTypes.String, required: true },
    content: { type: mongoose_1.default.SchemaTypes.String, required: true },
    date: { type: mongoose_1.default.SchemaTypes.Date, required: true },
};
var collectionName = 'note';
var noteSchema = new mongoose_1.default.Schema(schema);
var Note = function (conn) {
    return conn.model(collectionName, noteSchema);
};
exports.default = Note;
