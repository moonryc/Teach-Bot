"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format_date = (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
};
const format_plural = (word, amount) => {
    if (amount !== 1) {
        return `${word}s`;
    }
    return word;
};
const capitalize_sentences = (sentence) => {
    const arrayOfWords = sentence.split(' ');
    for (let i = 0; i < arrayOfWords.length; i++) {
        arrayOfWords[i] =
            arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1);
    }
    return arrayOfWords.join(' ');
};
const logger = (object) => {
    return console.log(object);
};
exports.default = { logger, capitalize_sentences, format_date, format_plural };
