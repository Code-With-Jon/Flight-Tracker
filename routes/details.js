var express = require('express');
var router = express.Router();
var detailsCtrl = require('../controllers/details');

router.post('/flights/:id/details', detailsCtrl.create);

module.exports = router;