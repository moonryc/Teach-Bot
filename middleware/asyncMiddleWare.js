"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncMiddleWare = (asyncFunction) => (req, res, next) => {
    Promise.resolve(asyncFunction(req, res, next)).catch((error) => console.log(error));
};
exports.default = asyncMiddleWare;
