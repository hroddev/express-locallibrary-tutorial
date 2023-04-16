var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HROD DEV', message: 'Ullamco irure consequat anim est enim occaecat mollit incididunt veniam id esse occaecat aliqua anim. Nostrud do velit in laboris sit ipsum reprehenderit reprehenderit reprehenderit excepteur anim nulla in dolore. Ad labore labore dolor commodo eiusmod nisi cupidatat in ut enim ex dolore incididunt esse.' });
});

module.exports = router;
