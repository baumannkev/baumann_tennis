const mysql = require('mysql')
const bodyParser = require("body-parser");
const path = require('path');
const express = require('express');


const app = express();
const endpoint = '/';
const updir = '..';
const port = 30005;
// console.log('Path of file in parent dir:', require('path').resolve(__dirname, '../html'));
app.use('/html', express.static(path.join(__dirname, "html")));
// app.use('/css', express.static(path.join(__dirname, "css")));
app.use('/img', express.static(path.join(__dirname, "images")));
// app.use('/js', express.static(path.join(__dirname, "js")));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// var dir = path.join(__dirname, 'styles');

// app.use(express.static(dir));

app.engine('html', require('ejs').renderFile);


// const connection = mysql.createConnection({
//     host: "137.184.30.51",
//     user: "baumanntennisapi",
//     password: "B2TjEenFCPGkAdGp",
//     database: "baumanntennisapi"
// });
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "baumanntennisapi"
});
// connection.connect();

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
    res.render(updir + '../html/admin.html');
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

app.post(endpoint + "signUp", async(req, res) => {
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
        const relationship = req.body.relationship;

        bcrypt.hash(req.body.password, saltRounds, (err, salt) => {
            connection.query(`INSERT INTO account (AccountID, FullName, PhoneNumber, Email, Password, Address, Insurance) VALUES (UUID(), '${name}', '${phoneNumber}', '${email}', '${salt}', '${address}', '${insurance}');`, (err, result) => {
                try {
                    if (err) throw err;
                    connection.query(`INSERT INTO player (PlayerID, FullName, DOB, Sex, SkillLevel, AllergiesMedication, ECN) VALUES (UUID(), ${name}, ${dateOfBirth}, ${sex}, ${skill}, ${allergies}, ${emergency})`, (err, result) => {
                        try {
                            connection.query(`SELECT parent.ParentID, player.PlayerID
                                FROM parent
                                LEFT JOIN player ON parent.Email = player.Email
                                WHERE Email='${email}' AND Password='${salt}'`, (err, result) => {
                                try {
                                    if (err) throw err;
                                    let parentID = result[0].ParentID;
                                    let playerID = result[0].PlayerID;
                                    connection.query(`INSERT INTO playerparentlink (PlayerID, ParentID, Relationship) VALUES (${playerID}, ${parentID}, ${relationship})`, (err, result) => {
                                        try {
                                            if (err) throw err;
                                            res.json({
                                                token: jwt.sign({
                                                    ParentID: parentID
                                                })
                                            });
                                        } catch (e) {
                                            res.status(500);
                                            res.json({
                                                message: "Failed to associate the player and user."
                                            });
                                        }
                                    });
                                } catch (e) {
                                    res.status(500);
                                    res.json({
                                        message: "Failed to retrieve player and/or user id."
                                    });
                                }
                            });
                        } catch (e) {
                            res.status(500);
                            res.json({
                                message: "Failed to create new player."
                            });
                        }
                    });

                } catch {
                    res.status(500);
                    res.json({
                        message: "Failed to create new user."
                    });
                }
            });
        });
    } catch {
        res.send({
            code: 400,
            message: "An error occurred. :("
        });
    }
});

app.post(endpoint + "login", (req, res) => {

    connection.query(`SELECT Password, AccountID, Permissions FROM parent WHERE Email='${req.body.email}`, (e, r) => {
        try {
            if (e) throw e;
            if (bcrypt.compareSync(req.body.password, r[0].Password)) {
                let token = {
                    token: jwt.sign({
                        AccountID: r[0].AccountID,
                        Permissions: r[0].Permissions
                    }, secretKey, {
                        expiresIn: "12h",
                    }),
                    success: true
                }
                res.json(token);
            }
        } catch (e) {
            res.status(500);
            res.json({
                message: "Unable to retrieve email."
            });
        }
    });
});

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