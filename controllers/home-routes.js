"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("../models");
const homeRoutes = express_1.default.Router();
//HOMEPAGE
homeRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.session);
    try {
        const posts = yield Post.findAll({
            order: [['created_at', 'DESC']],
            include: {
                model: models_1.User,
                attributes: ['username'],
            },
        });
        const postsData = posts.map((post) => post.get({ plain: true }));
        return res.render('homepage', {
            postsData,
            isLoggedIn: req.session.isLoggedIn,
            userName: req.session.username,
        });
    }
    catch (e) {
        return res.status(500).json({ message: 'error', error: e });
    }
}));
//LOGIN PAGE
homeRoutes.get('/login', (req, res) => {
    res.render('login');
});
//SIGNUP PAGE
homeRoutes.get('/signup', (req, res) => {
    res.render('signup');
});
exports.default = homeRoutes;
