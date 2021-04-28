const router = require('express').Router();

router.post('/homepage', async (req, res) => {
    try {
        const newBlog = await Post.create({ where: { email: req.body.email } });

        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }




});