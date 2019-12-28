"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var requireAuth_1 = __importDefault(require("../middleware/requireAuth"));
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n  <form method=\"post\" action=\"/login\">\n    <div class=\"form-group\">\n      <input name=\"email\" type=\"email\" placeholder=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <input name=\"password\" type=\"password\" placeholder=\"password\" >\n    </div>\n    <button type=\"submit\">Submit</button>\n</form>\n  ");
});
router.post('/login', function (req, res) {
    console.log(req.body);
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'master@gmail.com' && password === 'yoo') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send("\n      <h1>\n        Authentication denied!\n      </h1>\n      <a href=\"/login\" /> Login </a>\n    ");
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn === true) {
        res.send("\n            <h1>Welcome Master </h1>\n            <a href=\"/logout\" /> Logout  </a>\n      ");
    }
    else {
        res.send("<h1>You are not logged in </h1>\n      <a href=\"/login\" /> Login  </a> ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth_1.default, function (req, res) {
    res.send('welcome to protected route! logged in user');
});
