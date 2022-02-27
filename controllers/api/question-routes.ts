import { asyncMiddleWare, a21Handler, withAuth } from '../../middleware/';
import { Message } from '../../models';
import express from 'express';
import { IReqSession } from '../../types';

const questionRoutes = express.Router();

/**
 * This is for asking questions
 */
questionRoutes.post(
  '/:question_id',
  withAuth,
  asyncMiddleWare(a21Handler),
  async (req: IReqSession, res) => {
    try {
      const document = await Message.create({
        user_id: req.session.user_id,
        question_id: parseInt(req.params.question_id),
        question_text: req.body.question,
        answer_text: req.body.answer,
      });

      if (!document) {
        return res.status(500).json({ message: 'error creating message' });
      }

      return res.json({ message: req.body.answer });
    } catch (e) {
      console.log('Error');
      console.log(e);
      return res.status(500).json({ message: e });
    }
  }
);

export default questionRoutes;
