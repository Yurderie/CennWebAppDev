var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});

router.get('/service', function(req, res, next) {
  res.render('index', { title: 'Service' });
});

module.exports = router;
