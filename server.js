const express = require("express");
const cors = require("cors");

const db = require("./db");

const studentRoutes = require("./backend/routes/studentRoutes");

const app = express();

app.use(cors());

app.use(express.json());
app.use(studentRoutes);

app.get("/", (req, res) => {

    res.send("Student Academic Resource Hub API Running");

});
app.get("/test", (req, res) => {
    res.send("Test route working");
});
app.listen(5000, () => {

    console.log("Server Running on Port 5000");

});
app.get("/hello", (req, res) => {
    res.send("Hello");
    
});