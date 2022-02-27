import aiQuestionFetcher from '../utils/aiQuestionFetcher';
import { IReqSession } from '../types';
import { NextFunction } from 'express';

const a21Handler = async (
  req: IReqSession,
  res: Response,
  next: NextFunction
) => {
  const { question } = req.body;
  /*eslint-disable*/
  let prompt =
    `TeachBot is your tutor. He has knowledge of javascript, html, css and can answer your questions in a clear and concise manner.` +
    `\nThe following is a conversation between you and TeachBot. The conversation will follow the following format` +
    `\nTeachBot: "Hello welcome to my tutoring session."` +
    `\nYou: "Thank you."` +
    `\nTeachBot: "We can start if you are ready"` +
    `\nYou: "Yes I am ready"` +
    `\nTeachBot: "Hey, I heard you were struggling with javascript in class today. Did you have any questions?"`;

  //TODO GET MESSAGE HISTORY
  const lastFiveMessages = ``;
  const fullQuestion =
    prompt + lastFiveMessages + `\nYou: ${question}` + `\nTeachBot: "`;
  req.body.answer = await aiQuestionFetcher(fullQuestion);
  next();
};
export default a21Handler;
