import express from 'express';
const homeRoutes = express.Router();

//HOMEPAGE
homeRoutes.get('/', async (req, res) => {
  res.render('homepage', {
    id: 1,
    topic_url: 'https://handlebarsjs.com/guide/',
    title: 'Handlebars Docs',
    created_at: new Date(),
    comments: [{}, {}],
    user: {
      username: 'test_user'
    }
  });
});

//LOGIN PAGE
homeRoutes.get('/login', (req, res) => {
  res.render('login');
});

//SIGNUP PAGE
homeRoutes.get('/signup', (req, res) => {
  res.render('signup');
});

export default homeRoutes;
