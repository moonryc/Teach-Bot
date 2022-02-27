"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    }
    else {
        next();
    }
};
exports.default = withAuth;
