const newsModel = require('../models/News');
const { mutipleMongooseToObject } = require('../../util/mongoose');



class SiteController {

    // get
    index(rep, res, next) {
        newsModel.find({})
        .then(news => {
            res.render('home', { 
                news: mutipleMongooseToObject(news)
            });
        })
        .catch(err => next(err))
    }

    // get : /news/:slug
    search(rep, res) {
        res.render('search');
    }

    // get 
    json(rep, res, next) {
        newsModel.find({})
        .then(news => res.json(news))
        .catch(err => next(err))
    }
}

module.exports = new SiteController;