const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const bodyparser = require('body-parser')
// const { useState } = require("react");

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Roshan@4956",
    database: "here_hackathon",
    insecureAuth: true
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});

app.post("/signup", (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const voterId = req.body.voterId;
    const address = req.body.address;

    db.query(
        "INSERT INTO Users(email, username, password, voterId, address, boothlat, boothlng) VALUES (?,?,?,?,?,?,?)",
        [email, username, password, voterId, address, 0, 0],
        (err, result) => {
            if (err) {
                console.log(err);
                var msg = "Email already registered"
                res.send({ message: msg });
            }
            else {
                console.log(result);
                var msg = "You are successfully registered";
                res.send({ message: msg });
            }
        }
    );
});

app.post("/login", (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * from Users where email = ? AND password = ? ",
        [email, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Wrong username/password combination" });
            }
        }
    );
});

app.put("/update-category", (req, res) => {
    console.log(req.body);
    const lat = req.body.lat;
    const lng = req.body.lng;
    const category = req.body.category;

    db.query(
        "Update Polls Set category=? where lat=? and lng=? ",
        [category, lat, lng],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            else {
                console.log(result);
                res.send(result);
            }
        }
    )
})

app.put("/update-active", (req, res) => {
    console.log(req.body);
    const lat = req.body.lat;
    const lng = req.body.lng;
    const active = req.body.active;

    db.query(
        "Update Polls Set active=? where lat=? and lng=? ",
        [active, lat, lng],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            else {
                console.log(result);
                res.send(result);
            }
        }
    )
})

app.get("/fetch-booths", (req, res) => {
    db.query(
        "Select * from Polls",
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            else {
                console.log(result);
                res.send(result);
            }
        }
    )
})

