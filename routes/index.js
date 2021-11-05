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

/* GET Section(productos.ejs). */
router.get('/productos', function(req, res, next) {
  res.render('productos', { title: 'Nuestros productos...' });
});

module.exports = router;
