const mysql = require('mysql')
const bodyParser = require("body-parser");
const express = require('express');


const app = express();
const endpoint = '/';
const port = 30005;
const connection = mysql.createConnection({
    host: "127.0.0.1", //"67.205.142.54",
    user: "root", //"baumanntennisapi",
    password: "", //"hwdKD8CAh8KCteKb",
    database: "baumanntennisapi"
});
connection.connect();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get(endpoint + "admin", (req, res) => {
    connection.query(`UPDATE endpoints SET Hits = Hits + 1 WHERE Endpoint = 'Admin'`, (err, result) => {
        if (err) throw err;
    });
    connection.query(`SELECT * FROM Endpoints`, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
});

app.post(endpoint + "adminlogin", (req, res) => {
    connection.query(`UPDATE Endpoints SET Hits = Hits + 1 WHERE Endpoint = 'Admin Login'`, (err, result) => {
        if (err) throw err;
    });
    connection.query(`SELECT * FROM AdminAccount WHERE username LIKE '${req.body.username}' AND password LIKE '${req.body.password}'`, (err, result) => {
        if (err) throw err;
        if (result == null) {
            res.send({
                success: false
            })
        } else {
            res.send({
                success: true
            })
        }
    });
});

app.get(endpoint + "getprices", (req, res) => {
    connection.query(`UPDATE Endpoints SET Hits = Hits + 1 WHERE Endpoint = 'Get Prices'`, (err, result) => {
        if (err) throw err;
    });
    connection.query(`SELECT * FROM Pricing`), (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
    };
})

app.post(endpoint + "setprices", (req, res) => {
    connection.query(`UPDATE Endpoints SET Hits = Hits + 1 WHERE Endpoint = 'Set Prices'`, (err, result) => {
        if (err) throw err;
    });
    connection.query(`SELECT * FROM AdminAccount WHERE username LIKE '${req.body.username}' AND password LIKE '${req.body.password}'`, (err, result) => {
        if (err) throw err;
        if (result == null) {
            res.send({
                success: false
            })
        } else {
            res.send({
                success: true
            })
        }
    });
    connection.query(`UPDATE Pricing SET Cost = ${req.body.cost} WHERE Class = ${req.body.cost}`, (err, result) => {
        if (err) throw err;
        res.send({
            code: 200,
            message: "Successfully updated prices"
        })
    })
})


app.listen(port, (err) => {
    if (err) throw err;
    console.log("Listening to port ", port);
})

console.log('Server is running and listening on port ', port);



const adminLogin = function(username, password) {
    connection.query(`SELECT * FROM AdminAccount WHERE username LIKE '${req.body.username}' AND password LIKE '${req.body.password}'`, (err, result) => {
        if (err) throw err;
        if (result == null) {
            return false;
        } else {
            return true;
        }
    });
}