const router = require('express').Router();

router.post('/login', async (req, res) => {
  try {
    const newBlog = await User.findOne({ where: { email: req.body.email } });

    if (!techData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }

  // constValidPassword


});




// router.delete('/:id', async (req, res) => {
//   try {
//     const techData = await Blog.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!techData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(techData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
