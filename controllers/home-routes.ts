import express from 'express';
import { User } from '../models';

const homeRoutes = express.Router();

//HOMEPAGE
homeRoutes.get('/', async (req, res) => {
  console.log(req.session);
  try {
    const posts = await Post.findAll({
      order: [['created_at', 'DESC']],
      include: {
        model: User,
        attributes: ['username'],
      },
    });
    const postsData = posts.map((post) => post.get({ plain: true }));
    return res.render('homepage', {
      postsData,
      isLoggedIn: req.session.isLoggedIn,
      userName: req.session.username,
    });
  } catch (e) {
    return res.status(500).json({ message: 'error', error: e });
  }
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
