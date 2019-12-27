"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var login_1 = require("./routes/login");
var db_1 = __importDefault(require("./config/db"));
var app = express_1.default();
var port = 5000;
db_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['legia'] }));
app.use(login_1.router);
app.listen(port, function () { return console.log("Server is on " + port); });
