"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/hello', function (req, res) {
    res.send('Hello');
});
router.get('/login', function (req, res) {
    res.send("\n  <form method=\"post\" action=\"/login\">\n    <div class=\"form-group\">\n      <input name=\"email\" type=\"email\" placeholder=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <input name=\"password\" type=\"password\" placeholder=\"password\" >\n    </div>\n    <button type=\"submit\">Submit</button>\n</form>\n  ");
});
router.post('/login', function (req, res) {
    console.log(req.body);
    var _a = req.body, email = _a.email, password = _a.password;
    res.send(email + " " + password);
});
