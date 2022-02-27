"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./api"));
const home_routes_1 = __importDefault(require("./home-routes"));
const router = express_1.default.Router();
router.use('/', home_routes_1.default);
router.use('/api', api_1.default);
//ERROR HANDLER
router.use((req, res) => {
    console.log('==========================================');
    console.log('ERROR HANDLER');
    console.log('==========================================');
    res.status(404).end();
});
exports.default = router;
