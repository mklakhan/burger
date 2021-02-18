const mysql2 = require('mysql2')

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'burgers_db',
    password: 'bootcamp'
  });

  
  module.exports = connection