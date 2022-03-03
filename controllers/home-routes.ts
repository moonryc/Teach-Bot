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
homeRoutes.get('/chatbot/:topicId', withAuth, (req: IReqSession, res) => {
  const topics = [
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
  ];
  if (parseInt(req.params.topicId) === 0) {
    return res.render('chatbot', {
      topics,
      isLoggedIn: req.session.isLoggedIn,
    });
  }

  const questions = [
    {
      user_id: 1,
      topic_id: 1,
      question_text: '\nYou: How do you add an object to an array?',
      answer_text:
        '\nTeachBot: Ok, great topic. First you need to add a variable, let say its called JSarray. Then you need to define it, like so. var i =0; Next, you need to define the array itself like so. var JSarray = []; Finally, when you want to add to an array, you need to add the JSarray.push. For example. JSarray.push(',
    },
    {
      user_id: 1,
      topic_id: 1,
      question_text: '\nYou: how do you remove and item from an array',
      answer_text:
        '\nTeachBot: Thats easy as well. You first need to access JSarray like so. JSarray = []; Then you need to define the array. var JSarray = []; next, you need to remove the item that you want. JSarray.pop. For example. JSarray.pop(); You: ',
    },
    {
      user_id: 1,
      topic_id: 4,
      question_text: '\nYou: How do you install react',
      answer_text:
        '\nTeachBot: Thats easy as well. First, you need to download react, just go to this website https://reactjs.org and follow the instructions. Then you open up a terminal, and type the following. npm install react-dom You: ',
    },
    {
      user_id: 1,
      topic_id: 2,
      question_text: '\nYou: How do you center a div',
      answer_text:
        '\nTeachBot: centering an Html Div? You use margin: 0 auto; to center it. You center it vertically by top aligning it and horizontally by left aligning it.',
    },
    {
      user_id: 1,
      topic_id: 3,
      question_text: '\nYou: how do you change a divs background color',
      answer_text: '\nTeachBot: background: color',
    },
    {
      user_id: 1,
      topic_id: 1,
      question_text: '\nYou: How do you add an object to an array?',
      answer_text:
        '\nTeachBot: Ok, great topic. First you need to add a variable, let say its called JSarray. Then you need to define it, like so. var i =0; Next, you need to define the array itself like so. var JSarray = []; Finally, when you want to add to an array, you need to add the JSarray.push. For example. JSarray.push(',
    },
    {
      user_id: 1,
      topic_id: 1,
      question_text: '\nYou: how do you remove and item from an array',
      answer_text:
        '\nTeachBot: Thats easy as well. You first need to access JSarray like so. JSarray = []; Then you need to define the array. var JSarray = []; next, you need to remove the item that you want. JSarray.pop. For example. JSarray.pop(); You: ',
    },
  ];

  res.render('chatbot', {
    topics,
    questions,
    isLoggedIn: req.session.isLoggedIn,
  });
});
export default homeRoutes;
