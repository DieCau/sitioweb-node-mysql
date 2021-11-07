const express = require('express');
const router = express.Router();
const db = require('../conexion/conexion');

/* GET Section(productos.ejs). */
router.get('/', function(req, res, next) {
  
  db.query("SELECT * FROM tblproductos" , function (err, resultados) {
    
    console.log(resultados);
    res.render('productos', { title: 'Nuestros productos', Libros: resultados });

  });
  

});
  
module.exports = router;