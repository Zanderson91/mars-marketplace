const router = require('express').Router();
const {
    User,
    Product,
    Comment
} = require('../models');

router.get('/', async (req, res) => {
    // res.send("test");
    try {
        // const postData = await Post.findAll({
        //     include: [{
        //         model: User,
        //         attributes: ['name'],
        //     }, ],
        // });
        // const posts = postData.map((Product) => post.get({
        //     plain: true
        // }))

        res.render('login', {
            //posts,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        res.status(500).json(err);
    }

})

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['name']
                    }
                },
            ],
        });

        //WILL NEED TO ADD ABILITY TO CLICK ON PHOTO and display photo

        const post = postData.get({
            plain: true
        });

        res.render('single-post', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup');
});



module.exports = router;