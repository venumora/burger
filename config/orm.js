const Connection = require('./connection.js');
const ORM = {
  selectAll: function(tableInput, res) {
    const queryString = 'SELECT * FROM ??';
    Connection.query(queryString, [tableInput], function(err, result) {
      if (err) {
        res.redirect(500, '/error');
      }
      res.render('index', {burgers: result});
    });
  },
  insertOne: function(table, col1, col12, col1Val, col2Val, res) {
    var queryString = 'INSERT INTO ?? (??, ??) VALUES (?, ?)';
    Connection.query(
        queryString, [table, col1, col12, col1Val, col2Val],
        function(err, result) {
          if (err) {
            res.redirect(500, '/error');
          }
          res.redirect('back');
        });
  },
  updateOne: function(table, col, val, whereCol, whereVal, res) {
    var queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
    Connection.query(
        queryString, [table, col, val, whereCol, whereVal],
        function(err, result) {
          if (err) {
            res.redirect(500, '/error');
          }
          res.redirect('back');
        });
  },
};

module.exports = ORM;
