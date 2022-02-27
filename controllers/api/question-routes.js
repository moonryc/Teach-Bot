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
const middleware_1 = require("../../middleware/");
const models_1 = require("../../models");
const express_1 = __importDefault(require("express"));
const questionRoutes = express_1.default.Router();
/**
 * This is for asking questions
 */
questionRoutes.post('/:question_id', middleware_1.withAuth, (0, middleware_1.asyncMiddleWare)(middleware_1.a21Handler), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const document = yield models_1.Message.create({
            user_id: req.session.user_id,
            question_id: req.params.id,
            question: req.body.question,
            answer: req.body.answer,
        });
        if (!document) {
            return res.status(500).json({ message: 'error creating message' });
        }
        return res.json({ message: req.body.answer });
    }
    catch (e) {
        return res.status(500).json({ message: e });
    }
}));
exports.default = questionRoutes;
