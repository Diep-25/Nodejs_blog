const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/update', newsController.update);

router.get('/delete', newsController.delete);

router.get('/list', newsController.list);

router.get('/create', newsController.create);

router.post('/store', newsController.store);

router.get('/:slug', newsController.show);

router.get('/', newsController.index);

module.exports = router;
