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
const models_1 = require("../../models");
const router = express_1.default.Router();
//LOGIN route
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const document = yield models_1.User.findOne({
            where: {
                username: req.body.username,
            },
        });
        if (!document) {
            return res.status(400).json({ message: 'user does not exist' });
        }
        const isPasswordValid = yield document.isPasswordValid(req.body.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'incorrect password' });
        }
        req.session.save(() => {
            req.session.user_id = document.id;
            req.session.username = document.username;
            req.session.isLoggedIn = true;
            return res.json({
                user: document,
                message: 'you are now logged in',
            });
        });
    }
    catch (e) {
        res.status(500).json({ message: 'Error', error: e });
    }
}));
//LOGOUT route
router.post('/logout', (req, res) => {
    if (req.session.isLoggedIn) {
        req.session.destroy(() => {
            return res.status(204).end();
        });
    }
    else {
        console.log('this ran');
        return res.status(404).end();
    }
});
//CREATE account route
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const document = yield models_1.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        if (!document) {
            return res.status(500).json({ message: 'Error' });
        }
        return req.session.save(() => {
            req.session.user_id = document.id;
            req.session.username = document.username;
            req.session.isLoggedIn = true;
            res.json(document);
        });
    }
    catch (e) {
        res.status(500).json({ message: 'error', error: e });
    }
}));
exports.default = router;
