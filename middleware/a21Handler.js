const aiQuestionFetcher = require('../utils/aiQuestionFetcher');

const a21Handler = async (req, res, next) => {
  const { question } = req.body;

  let prompt =
    'TeachBot is your tutor. He has knowledge of javascript, html, css and can answer your questions in a clear and concise manner.' +
    '\nThe following is a conversation between you and TeachBot. The conversation will follow the following format' +
    '\nTeachBot: "Hello welcome to my tutoring session."' +
    '\nYou: "Thank you."' +
    '\nTeachBot: "We can start if you are ready"' +
    '\nYou: "Yes I am ready"';

  //TODO GET MESSAGE HISTORY
  const lastFiveMessages = '';
  const fullQuestion = prompt + lastFiveMessages + question;
  req.body.answer = await aiQuestionFetcher(fullQuestion);
  next();
};
module.exports = a21Handler;
