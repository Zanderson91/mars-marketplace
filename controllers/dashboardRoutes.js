const router = require('express').Router();
const { User, Product, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    console.log("dashboardRoutes", req.session)
    try {
        const postData = await Product.findAll({
            where: {
                user_id: req.session.user_id
            },
            // include: [
            //     {
            //         model: User,
            //         attributes: ['name'],
            //     },
            //     {
            //         model: Comment,
            //         attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
            //         include: {
            //             model: User,
            //             attributes: ['name']
            //         }
            //     },
            // ],
        });
    console.log("post", postData)
const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/rovers', async (req, res) => {
    console.log("ROVERS")
    try {
        const postData = await Product.findAll({
//where listingCategory = "rovers"
        })
        console.log(postData)
        res.render("rovers", {
            postData
        })
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
})

router.get('/newpost', (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    res.render('new-post');
});

router.get('/newpost', (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    res.render('new-post');
});

router.get('/editpost/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            attributes: [
                'id',
                'title',
                'content',
                'date_created'
            ],
            include: [
                {
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

        const post = postData.get({ plain: true });
        res.render('edit', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;