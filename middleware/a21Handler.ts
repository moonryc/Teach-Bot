import aiQuestionFetcher from '../utils/aiQuestionFetcher';
import { IReqSession } from '../types';
import { NextFunction } from 'express';
import { Message } from '../models';
import { customErrorHandler } from '../utils/customErrorHandler';

const questionHandler = async (
  user_id: number,
  topic_id: number,
  newQuestion: string
) => {
  newQuestion = `\nYou: "${newQuestion}"` + '\nTeachBot: "';
  let prompt =
    //region Prompt
    // eslint-disable-next-line
    `TeachBot is your tutor. He has knowledge of javascript, html, css and can answer your questions in a clear and concise manner.` +
    // eslint-disable-next-line
    `\nThe following is a conversation between you and TeachBot. The conversation will follow the following format` +
    // eslint-disable-next-line
    `\nTeachBot: "Hello welcome to my tutoring session."` +
    // eslint-disable-next-line
    `\nYou: "Thank you."` +
    // eslint-disable-next-line
    `\nTeachBot: "We can start if you are ready"` +
    // eslint-disable-next-line
    `\nYou: "Yes I am ready"` +
    // eslint-disable-next-line
    `\nTeachBot: "Hey, I heard you were struggling with javascript in class today. Did you have any questions?"`;
  //endregion

  const messageHistory = await Message.findAll({
    where: {
      user_id: user_id,
      topic_id: topic_id,
    },
    attributes: ['question_text', 'answer_text'],
    order: [['created_at', 'DESC']], //DESC Newest First
  });

  let oldMessages = '';

  for (let index = 0; index < messageHistory.length; index++) {
    //@ts-ignore
    const { question_text, answer_text } = messageHistory[index].dataValues;

    if (
      prompt.length +
        oldMessages.length +
        question_text.length +
        answer_text.length +
        newQuestion.length <=
      2048
    ) {
      if (question_text === 'ok') {
        oldMessages = ' ' + answer_text + oldMessages;
      } else {
        oldMessages =
          `\n"${question_text}"` + `\n"${answer_text}"` + oldMessages;
      }
    }
  }
  return prompt + oldMessages + newQuestion;
};

const a21Handler = async (
  req: IReqSession,
  res: Response,
  next: NextFunction
) => {
  const { question } = req.body;

  const aiPrompt = await questionHandler(
    req.session.user_id,
    parseInt(req.params.topic_id),
    question
  );

  customErrorHandler('aiPrompt Submission', aiPrompt);
  req.body.answer = await aiQuestionFetcher(aiPrompt);
  customErrorHandler('AI Response', req.body.answer);
  customErrorHandler('Resulting Conversation flow', aiPrompt + req.body.answer);
  next();
};

export default a21Handler;
