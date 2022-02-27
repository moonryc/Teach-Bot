"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = exports.Message = exports.User = void 0;
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const Message_1 = __importDefault(require("./Message"));
exports.Message = Message_1.default;
const Question_1 = __importDefault(require("./Question"));
exports.Question = Question_1.default;
//create associations below
User_1.default.hasMany(Message_1.default, {
    foreignKey: 'user_id',
});
User_1.default.hasMany(Question_1.default, {
    foreignKey: 'user_id',
});
Question_1.default.hasMany(Message_1.default, {
    foreignKey: 'question_id',
});
Message_1.default.belongsTo(User_1.default, {
    foreignKey: 'user_id',
});
Question_1.default.belongsTo(User_1.default, {
    foreignKey: 'user_id',
});
Message_1.default.belongsTo(Question_1.default, {
    foreignKey: 'question_id',
});
