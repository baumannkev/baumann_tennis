const mysql = require('mysql')
const bodyParser = require("body-parser");
const express = require('express');
const path = require('path');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const app = express();
const endpoint = '/';
const updir = '..';
const port = 30005;
const saltRounds = 12;
const secretKey = "rml5tqsC2K4OGzpLQWPM";

app.use('/html', express.static(path.join(__dirname, "html")));
app.use('/css', express.static(path.join(__dirname, "css")));
app.use('/images', express.static(path.join("../../", __dirname, "images")));
app.use('/js', express.static(path.join(__dirname, "js")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
const connection = mysql.createConnection({
    host: "137.184.30.51",
    user: "baumanntennisapi",
    password: "B2TjEenFCPGkAdGp",
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



app.get(endpoint + "admin_statistics", (req, res) => {
  // looks in base path /views by default, either change filedir or do it like this
  res.render(updir + '/html/admin.html');
});

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
    connection.query(`SELECT * FROM AdminAccount WHERE username = '${req.body.username}' AND password = '${req.body.password}'`, (err, result) => {
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

app.post(endpoint + "signUp", async (req, res) => {
    try {
        connection.query(`UPDATE Endpoints SET Hits = Hits + 1 WHERE Endpoint = 'Signup'`, (err, result) => {
            if (err) throw err;
        });
        const email = req.body.email;
        const phoneNumber = req.body.phoneNumber;
        const name = req.body.name;
        const address = req.body.address;
        const insurance = req.body.insurance;
        const dateOfBirth = req.body.dob;
        const sex = req.body.sex;
        const skill = req.body.skill;
        const allergies = req.body.allergies;
        const emergency = req.body.emergency;

        
        const password = bcrypt.hash(req.body.password, saltRounds, (err, salt) => {
            connection.query(`INSERT INTO Users ('Email', 'Password', 'Phone Number', 'Full Name', 'Address', 'Insurance Provider') VALUES (${email}, ${salt}, ${phoneNumber}, ${name}, ${address}, ${insurance});`, (err, result) => {
                if (err) throw err;
                let token = generateLoginToken();
                connection.query(`UPDATE Users SET 'Login Token' = ${token} WHERE 'Email' = ${email}`, (err, result) => {
                    if (err) throw err;
                    connection.query(`INSERT INTO Players ('Player ID', 'Full Name', 'DOB', 'Sex', 'Skill Level', 'Allergies/Medication', 'Emergency Contact Number', 'Email')
                        VALUES (NULL, ${name}, ${dateOfBirth}, ${sex}, ${skill}, ${allergies}, ${emergency}, ${email});`, (err, result) => {
                        if (err) throw err;
                        res.send({
                            code: 200,
                            message: token
                        });
                    });
                });
            });
        });
    } catch {
        res.send({
            code: 400,
            message: "An error occurred. :("
        });
    }
});

app.post(endpoint + "login", (error, result) => {
    connection.query(`SELECT Password FROM Users WHERE Email '= ${req.body.email}'`, (e, r) => {
        if (e) throw e;
        if (bcrypt.compareSync(req.body.password, r)) {
            res.send(jwt.sign(r, secretKey, {
                expiresIn: "12h",
            }));
        }
    });
});

app.listen(port, (err) => {
    if (err) throw err;
    console.log("Listening to port ", port);
})

console.log('Server is running and listening on port ', port);