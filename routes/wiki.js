const wikiRouter = require('express').Router();
const {Page} = require('../models/index');
const views = require('../views/addPage');
const wikiPage = require('../views/wikipage');


wikiRouter.post('/', async (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const status = req.body.status;
    /*
    const slug = title.split(' ').map(word => {
        //const regex = /^[a-zA-Z0-9]*$/;
        //return word.replaceAll(!regex, '');

    }).join('_');
    */
    const slug = title.replace(/\s+/g, '_').replace(/\W/g, '');

    const submitPost = await Page.create({
        title: title,
        content: content,
        status: status,
        slug: slug
    });
    
    res.redirect(`./${submitPost.slug}`);
})


wikiRouter.get('/add', async (req, res, next) => {
    res.send(views());
})

wikiRouter.get('/:slug', async (req, res, next) => {
    const page = await Page.findOne({
        where: {
            slug: req.params.slug
        }
    });

    if (page === null) {
        res.redirect('/')
    } else {
        res.send(wikiPage(page));
    }
})

wikiRouter.get('/', async (req, res, next) => {
    const allPages = await Page.findAll();
    res.send(allPages);
})

module.exports = wikiRouter;