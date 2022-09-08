const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'u0umsy15ffoguul3',
    password: 'lnxrx8zsaw362jcz',
    database: 'dunbmtlx932igb26',
    multipleStatements: true
  });

  mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('Ahora estamos en Linea :D');
    }
  });

  module.exports = mysqlConnection;