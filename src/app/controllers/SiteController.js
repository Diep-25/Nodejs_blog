class SiteController {

    // get
    index(rep, res) {
        res.render('home');
    }

    // get : /news/:slug
    search(rep, res) {
        res.render('search');
    }
}

module.exports = new SiteController;