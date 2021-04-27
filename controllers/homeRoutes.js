const router = require('express').Router();
const { blogPosts , User } = require('../models');

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

    const post = postsData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      post,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/profile', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
