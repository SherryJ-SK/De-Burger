// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection({
    host: process.env.JAWSDB_URL,
    user: "hlqfwm9117isuaxr",
    password: "cwt712i8he1jhyp8",
    database: "burgers_db"
  });
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Escape@2020",
    database: "burgers_db"
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
