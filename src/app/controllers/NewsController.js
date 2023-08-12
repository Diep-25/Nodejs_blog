class NewsController {

    // get
    index(rep, res) {
        res.render('news');
    }

    // get : /news/:slug
    show(rep, res) {
        res.send('HELLO');
    }
}

module.exports = new NewsController;