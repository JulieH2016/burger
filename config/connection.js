var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", // username
    password: " ", // Fill in password
    database: " " // Fill in Database in mySQL.
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

// Connected Node to MySQL. Will fill in password and database name once I have them.