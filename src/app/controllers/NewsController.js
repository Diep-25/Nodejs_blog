const newsModel = require('../models/News');
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose');
const slug = require('slug');

class NewsController {

    // get
    index(rep, res) {
        res.render('news');
    }

    // get : /news/:slug
    show(rep, res, next) {
        newsModel.findOne({slug: rep.params.slug})
        .then((news) => {
            res.render('news/detail', {
                news: mongooseToObject(news),
            })
        })
        .catch(err => next(err))
    }
    create(rep, res, next) {
        res.render('news/create');
    }
    store(req, res, next) {
        if (req.query.id) {
            newsModel.findByIdAndUpdate(req.query.id ,{
                title: req.body.title,
                body: req.body.body,
                image: req.body.image,
                slug: slug(req.body.title)
            })
            .then(() => {
                console.log('Upadte success')
                return res.redirect('/news/list');
            })  
            .catch(err => console.log('Update err'))
        } else {
            newsModel.create({
                title: req.body.title,
                body: req.body.body,
                image: req.body.image,
                slug: slug(req.body.title)
            })
            .then(() => {
                console.log('Create success')
                return res.redirect('/news/'+ slug(req.body.title));
            })  
            .catch(err => console.log('Create err'))
        }
    }

    list(req, res, next) {
        newsModel.find({})
        .then((news) => {
            res.render('news/list', {
                news: mutipleMongooseToObject(news),
            })
        })
        .catch(err => next(err))
    }

    delete(req, res, next) {
        newsModel.deleteOne({
            _id: req.query.id,
        })
        .then(() => {
            console.log('Delete success')
            return res.redirect('/news/list');
        })  
        .catch(err => console.log('Delete err'))
    }

    update(req, res, next) {
        newsModel.findOne({_id: req.query.id})
        .then((news) => {
            res.render('news/update', {
                news: mongooseToObject(news),
            })
        })
        .catch(err => next(err))
    }
}

module.exports = new NewsController;