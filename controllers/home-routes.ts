import express from 'express';
const homeRoutes = express.Router();

//HOMEPAGE
homeRoutes.get('/', async (req, res) => {
  console.log(req.session);
  console.log(res);
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
