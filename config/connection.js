const mysql2 = require('mysql2')

if (process.env.JAWSDB_URL) {
  connection = mysql2.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql2.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'bootcamp',
      database: 'burgers_db'
    });
  };
   

connection.connect();
module.exports = connection;