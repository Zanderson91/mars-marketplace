const router = require('express').Router();
const { promisify } = require('util')
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
    secure: true
});

const uploadImage = promisify(cloudinary.uploader.upload);

router.post('/', async (req, res) => {
    console.log("req.body", req.body)
    try {
        cloudinary.uploader.upload("./assets/23.png"/*(req.body.file)*/, function (err, result) {
            
            res.json(result)
            Post.create(req.body)
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

router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id,
                },
            }
        );
    
        if (!postData) {
            res.status(404).json({
                message: 'No post found with this id!'
            });
            return;
        }

        res.status(200).json(postData);
        }
        catch (err) {
            res.status(500).json(err);
        }
        });

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;