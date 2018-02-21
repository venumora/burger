const MySQL = require('mysql');
let Connection;
if (process.env.JAWSDB_URL) {
  Connection = MySQL.createConnection(process.env.JAWSDB_URL);
} else {
  Connection = MySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  });
}

Connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + Connection.threadId);
});

module.exports = Connection;
