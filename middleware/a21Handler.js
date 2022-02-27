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
const aiQuestionFetcher_1 = __importDefault(require("../utils/aiQuestionFetcher"));
const a21Handler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { question } = req.body;
    let prompt = 'TeachBot is your tutor. He has knowledge of javascript, html, css and can answer your questions in a clear and concise manner.' +
        '\nThe following is a conversation between you and TeachBot. The conversation will follow the following format' +
        '\nTeachBot: "Hello welcome to my tutoring session."' +
        '\nYou: "Thank you."' +
        '\nTeachBot: "We can start if you are ready"' +
        '\nYou: "Yes I am ready"';
    //TODO GET MESSAGE HISTORY
    const lastFiveMessages = '';
    const fullQuestion = prompt + lastFiveMessages + question;
    req.body.answer = yield (0, aiQuestionFetcher_1.default)(fullQuestion);
    next();
});
exports.default = a21Handler;
