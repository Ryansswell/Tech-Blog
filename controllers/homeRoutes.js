const router = require('express').Router();
const { blogPosts, User } = require('../models');

router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/', async (req, res) => {
  res.render('login');
});

router.get('/', async (req, res) => {
  try {
    const postsData = await blogPosts.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    res.render('homepage', getAllPosts);
    res.status(200).json(getAllPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {

  try {
    res.render('login');
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  try {
    res.render('signup');
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/user', (req, res) => {
  try {
    res.render('user');
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/post', (req, res) => {
  res.render("post");
});


module.exports = router;

















