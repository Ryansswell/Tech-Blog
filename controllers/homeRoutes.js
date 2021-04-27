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

    res.render('homepage', getAllPosts);
    res.status(200).json(getAllPosts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
