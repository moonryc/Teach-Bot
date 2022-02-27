"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userData = [
    {
        username: 'john',
        email: 'john@beatles.com',
        password: bcrypt_1.default.hashSync('legend', 10),
    },
    {
        username: 'paul',
        email: 'paul@beatles.com',
        password: bcrypt_1.default.hashSync('mcartney', 10),
    },
    {
        username: 'ringo',
        email: 'ringo@beatles.com',
        password: bcrypt_1.default.hashSync('star', 10),
    },
    {
        username: 'george',
        email: 'george@beatles.com',
        password: bcrypt_1.default.hashSync('harrison', 10),
    },
    {
        username: 'yoko',
        email: 'yoko@beatles.com',
        password: bcrypt_1.default.hashSync('ono', 10),
    },
];
const seedUser = () => models_1.User.bulkCreate(userData);
exports.default = seedUser;
