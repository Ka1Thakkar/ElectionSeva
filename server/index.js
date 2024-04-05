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

app.post("/add-booth", (req, res) => {
    console.log(req.body);
    const lat = req.body.lat;
    const lng = req.body.lng;
    const name = req.body.name;
    const category = req.body.category;
    const active = req.body.active;
    const total = req.body.total;
    const staff = req.body.staff;
    const police = req.body.police;

    db.query(
        "INSERT INTO Polls(lat,lng, name, category, active, total, staff,police) VALUES (?,?,?,?,?,?,?,?)",
        [lat, lng, name, category, active, total, staff, police],
        (err, result) => {
            if (err) {
                console.log(err);
                var msg = "Booth already registered"
                res.send({ message: msg });
            }
            else {
                console.log(result);
                var msg = "Booth successfully registered";
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

app.put("/update-booth", (req, res) => {
    console.log(req.body);
    const lat = req.body.lat;
    const lng = req.body.lng;
    const category = req.body.category;
    const active = req.body.active;
    const total = req.body.total;
    const staff = req.body.staff;
    const police = req.body.police;

    db.query(
        "Update Polls Set category=?, active=?, total=?, staff=?, police =? where lat=? and lng=? ",
        [category, active, total, staff, police, lat, lng],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            else {
                console.log(result);
                res.send({ message: "Updated successfully" });
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

app.post("/check-booth", (req, res) => {
    const lat = req.body.lat;
    const lng = req.body.lng;
    db.query(
        "Select * from Polls where lat=? AND lng=?",
        [29.37077, 76.60297],
        (err, result) => {
            if (err) {
                console.log(result);
                res.send({ err: err });
            }
            if (result.length > 0) {
                console.log(result);
                res.send(result);
            } else {
                console.log(result);
                res.send({ message: "No booth exists" });
            }
        }
    )
})

