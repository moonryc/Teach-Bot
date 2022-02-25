const { User } = require('../models');
const router = require('express').Router();
const withAuth = require('../middleware/auth');

//HOMEPAGE
router.get('/', async (req, res) => {
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
router.get('/login', (req, res) => {
  res.render('login');
});

//SIGNUP PAGE
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
