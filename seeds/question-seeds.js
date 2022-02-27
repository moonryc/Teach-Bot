"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const questionData = [
    {
        user_id: 1,
        topic: 'Javascript',
    },
    {
        user_id: 1,
        topic: 'html',
    },
    {
        user_id: 1,
        topic: 'css',
    },
    {
        user_id: 1,
        topic: 'node',
    },
    {
        user_id: 2,
        topic: 'Javascript',
    },
    {
        user_id: 2,
        topic: 'html',
    },
    {
        user_id: 2,
        topic: 'css',
    },
    {
        user_id: 2,
        topic: 'node',
    },
    {
        user_id: 3,
        topic: 'Javascript',
    },
    {
        user_id: 3,
        topic: 'html',
    },
    {
        user_id: 3,
        topic: 'css',
    },
    {
        user_id: 3,
        topic: 'node',
    },
    {
        user_id: 4,
        topic: 'Javascript',
    },
    {
        user_id: 4,
        topic: 'html',
    },
    {
        user_id: 4,
        topic: 'css',
    },
    {
        user_id: 4,
        topic: 'node',
    },
    {
        user_id: 5,
        topic: 'Javascript',
    },
    {
        user_id: 5,
        topic: 'html',
    },
    {
        user_id: 5,
        topic: 'css',
    },
    {
        user_id: 5,
        topic: 'node',
    },
];
const seedQuestion = () => models_1.Question.bulkCreate(questionData);
exports.default = seedQuestion;
