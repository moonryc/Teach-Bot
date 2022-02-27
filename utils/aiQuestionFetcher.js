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
const axios_1 = __importDefault(require("axios"));
const aiQuestionFetcher = (question) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, axios_1.default)({
            method: 'post',
            url: 'https://api.ai21.com/studio/v1/j1-large/complete',
            data: JSON.stringify({
                prompt: question,
                numResults: 1,
                maxTokens: 100,
                stopSequences: ['"'],
                topKReturn: 0,
                temperature: 0.7, //DO NO TOUCH
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.AI21_API_KEY}`,
            },
        });
        return response.data.completions[0].data.text;
    }
    catch (e) {
        console.log(e);
    }
});
exports.default = aiQuestionFetcher;
