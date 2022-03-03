import express from 'express';
import { IReqSession } from '../types';
const homeRoutes = express.Router();

//HOMEPAGE
homeRoutes.get('/', async (req: IReqSession, res) => {
  if (req.session.isLoggedIn) {
    res.redirect('/');
    return;
  }
  res.render('homepage');
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
homeRoutes.get('/chatbot/:topicid', (req: IReqSession, res) => {
  res.render('chatbot', {});
});

export default homeRoutes;
