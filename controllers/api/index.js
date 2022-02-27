"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./user-routes"));
const question_routes_1 = __importDefault(require("./question-routes"));
const apiRoutes = express_1.default.Router();
apiRoutes.use('/users', user_routes_1.default);
apiRoutes.use('/question', question_routes_1.default);
exports.default = apiRoutes;
