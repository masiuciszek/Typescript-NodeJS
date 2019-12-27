"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
    }
    res.status(403).send('Auth denied!');
}
exports.default = requireAuth;
