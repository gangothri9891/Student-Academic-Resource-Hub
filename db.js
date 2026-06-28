const mysql = require("mysql2");

const connection = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "Kalyani@123",

    database: "studenthub"

});

connection.connect((err)=>{

    if(err){

        console.log("Database Connection Failed");

        return;

    }

    console.log("MySQL Connected");

});

module.exports = connection;