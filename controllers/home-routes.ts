import express from 'express';
import { IReqSession } from '../types';
import { withAuth } from '../middleware';
import { Message, Topic } from '../models';
const homeRoutes = express.Router();

//HOMEPAGE
homeRoutes.get('/', async (req: IReqSession, res) => {
  if (req.session.isLoggedIn) {
    res.redirect('/chatbot/0');
    return;
  }
  res.render('homepage', { title: 'Teach Bot!', condition: false});
});

//LOGIN PAGE
homeRoutes.get('/login', (req: IReqSession, res) => {
  if (req.session.isLoggedIn) {
    res.redirect('/');
  }
  res.render('login');
});

//SIGNUP PAGE
homeRoutes.get('/signup', (req: IReqSession, res) => {
  if (req.session.isLoggedIn) {
    res.redirect('/');
  }
  res.render('signup');
});

// CHATBOT PAGE
homeRoutes.get('/chatbot/:topicId', withAuth, async (req: IReqSession, res) => {
  const response = await Topic.findAll({
    where: {
      user_id: req.session.user_id,
    },
  });

  const topics = response.map((topic) =>
    topic.get({
      plain: true,
    })
  );
  if (parseInt(req.params.topicId) === 0) {
    return res.render('chatbot', {
      topics,
      isLoggedIn: req.session.isLoggedIn,
    });
  }

  const responseQuestions = await Message.findAll({
    where: {
      topic_id: req.params.topicId,
    },
  });

  const questions = responseQuestions.map((question) =>
    question.get({
      plain: true,
    })
  );

  res.render('chatbot', {
    topics,
    questions,
    isLoggedIn: req.session.isLoggedIn,
  });
});
export default homeRoutes;
