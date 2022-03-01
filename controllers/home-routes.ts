import express from 'express';
const homeRoutes = express.Router();

//HOMEPAGE
homeRoutes.get('/', async (req, res) => {
  console.log(req.session);
  console.log(res);
  //TODO check if the user is already logged in, if the user is route them to the AIChatbot
});

//LOGIN PAGE
homeRoutes.get('/login', (req, res) => {
  //TODO check if user is already logged in, if logged in routee them to the AIChatbot
  res.render('login');
});

//SIGNUP PAGE
homeRoutes.get('/signup', (req, res) => {
  res.render('signup');
  //TODO check if user is already logged in, if logged in routee them to the AIChatbot
});

//TODO add a route that renders AI chatbot and passes the topics that are related to them as well as the messages associated with that topic

export default homeRoutes;
