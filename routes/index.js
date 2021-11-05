const express = require('express');
const router = express.Router();

/* GET home page(index.ejs). */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Section(nosotros.ejs). */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Nosotros somos... ' });
});

module.exports = router;
