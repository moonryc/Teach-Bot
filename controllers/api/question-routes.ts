import { asyncMiddleWare, a21Handler, withAuth } from '../../middleware/';
import { Message, Topic } from '../../models';
import express from 'express';
import { IReqSession } from '../../types';

const questionRoutes = express.Router();

/**
 * This is for asking questions
 */
questionRoutes.post(
  '/:topic_id',
  withAuth,
  asyncMiddleWare(a21Handler),
  async (req: IReqSession, res) => {
    try {
      const document = await Message.create({
        user_id: req.session.user_id,
        topic_id: parseInt(req.params.topic_id),
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

/**
 * Creates a new Topic Topic
 */
questionRoutes.post('/', withAuth, async (req: IReqSession, res) => {
  try {
    const document = await Topic.create({
      user_id: req.session.user_id,
      topic: req.body.topic,
    });

    if (!document) {
      return res.status(500).json({ message: 'error creating question' });
    }

    return res.json({ message: req.body.topic });
  } catch (e) {
    console.log('Error');
    console.log(e);
    return res.status(500).json({ message: e });
  }
});

questionRoutes.delete('/:topic_id', withAuth, async (req: IReqSession, res) => {
  try {
    const document = await Topic.destroy({
      where: {
        id: req.params.question_id,
        user_id: req.session.user_id,
      },
    });

    if (!document) {
      return res.status(500).json({ message: 'question not found' });
    }

    return res.sendStatus(200);
  } catch (e) {
    console.log('Error');
    console.log(e);
    return res.status(500).json({ message: e });
  }
});

export default questionRoutes;
