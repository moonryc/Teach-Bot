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
        question_id: req.params.id,
        question: req.body.question,
        answer: req.body.answer,
      });

      if (!document) {
        return res.status(500).json({ message: 'error creating message' });
      }

      return res.json({ message: req.body.answer });
    } catch (e) {
      return res.status(500).json({ message: e });
    }
  }
);

export default questionRoutes;
