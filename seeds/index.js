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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../.env' });
const user_seeds_1 = __importDefault(require("./user-seeds"));
const message_seeds_1 = __importDefault(require("./message-seeds"));
const question_seeds_1 = __importDefault(require("./question-seeds"));
const sequelize = require('../config/connection');
const statusUpdate = (message) => {
    console.log('======================');
    console.log(message);
    console.log('======================');
};
const seedAll = () => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.sync({ force: true });
    statusUpdate('DATABASE SYNCED');
    try {
        yield (0, user_seeds_1.default)();
        statusUpdate('USERS SEEDED');
        yield (0, question_seeds_1.default)();
        statusUpdate('QUESTIONS SEEDED');
        yield (0, message_seeds_1.default)();
        statusUpdate('MESSAGES SEEDED');
    }
    catch (e) {
        statusUpdate(e);
    }
    statusUpdate('EVERYTHING HAS BEEN SEEDED SUCCESSFULLY');
    process.exit(0);
});
try {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        yield seedAll();
    }))();
}
catch (e) {
    statusUpdate(e);
}
