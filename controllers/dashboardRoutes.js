const router = require('express').Router();
const { User, Product, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.post('/', async (req, res) => {
    console.log("req.body", req.body)
    try {
        cloudinary.uploader.upload("./assets/23.png" /*(req.body.file)*/ , function (err, result) {

            res.json(result)
            Product.create(req.body)
        })
        //         const result = await uploadImage(require("../../assets/23.png"), {
        //                 resource_type: "image",
        //                 overwrite: true,
        //                 //notification_url: "https://mysite.example.com/notify_endpoint"
        //             });
        // console.log(result)

        // const newPost = await Post.create({
        //     ...req.body,
        //     user_id: req.session.user_id,
        // });

        // res.status(200).json(newPost);

    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
});

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
            // where: {
            //     listingCategory: product.dataValues.listingCategory
            // },
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

router.get('/rocket-parts', async (req, res) => {
    try {
        const postData = await Product.findAll({
            // where: {
            //     listingCategory: product.dataValues.listingCategory
            // },
        })
        console.log(postData)
        res.render("rocket-parts", {
            postData
        })
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
})

router.get('/mars-surface-suits', async (req, res) => {
    try {
        const postData = await Product.findAll({
            // where: {
            //     listingCategory: product.dataValues.listingCategory
            // },
        })
        console.log(postData)
        res.render("mars-surface-suits", {
            postData
        })
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
})

router.get('/terraforming-tools', async (req, res) => {
    try {
        const postData = await Product.findAll({
            // where: {
            //     listingCategory: product.dataValues.listingCategory
            // },
        })
        console.log(postData)
        res.render("terraforming-tools", {
            postData
        })
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
})

router.get('/geology', async (req, res) => {
    try {
        const postData = await Product.findAll({
            // where: {
            //     listingCategory: product.dataValues.listingCategory
            // },
        })
        console.log(postData)
        res.render("geology", {
            postData
        })
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
})

router.get('/nuclear-reactors', async (req, res) => {
    try {
        const postData = await Product.findAll({
            // where: {
            //     listingCategory: product.dataValues.listingCategory
            // },
        })
        console.log(postData)
        res.render("nuclear-reactors", {
            postData
        })
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
})

router.get('/sporting-goods', async (req, res) => {
    try {
        const postData = await Product.findAll({
        // where: {
        //     listingCategory: product.dataValues.listingCategory
        // },
    })
        console.log(postData)
        res.render("sporting-goods", {
            postData
        })
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
})

router.get('/property', async (req, res) => {
    try {
        const postData = await Product.findAll({
            // where: {
            //     listingCategory: product.dataValues.listingCategory
            // },
        })
        console.log(postData)
        res.render("property", {
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