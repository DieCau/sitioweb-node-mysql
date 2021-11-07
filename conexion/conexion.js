const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ventas'
});

connection.connect(
    (err) => {
        if (!err) { console.log('Conexión establecida!'); }
        else{ console.log('Conexión Fallida!');  } 

    }
);

module.exports = connection;





