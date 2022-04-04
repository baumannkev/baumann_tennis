const mysql = require('mysql')
const bodyParser = require("body-parser");
const path = require('path');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");


const app = express();
const endpoint = '/';
const updir = '..';
const port = 30005;
const saltRounds = 12;
const secretKey = "v1KnQJA9Q0"
// console.log('Path of file in account dir:', require('path').resolve(__dirname, '../html'));
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
    connection.query(`UPDATE endpoints SET Hits = Hits + 1 WHERE Endpoint = 'admin_statistics'`, (err, result) => {
        if (err) throw err;
    });
    // looks in base path /views by default, either change filedir or do it like this
    res.render(updir + '../html/admin.html');
});

app.get(endpoint + "admin", (req, res) => {
    connection.query(`UPDATE endpoints SET Hits = Hits + 1 WHERE Endpoint = 'admin'`, (err, result) => {
        if (err) throw err;
    });
    connection.query(`SELECT * FROM Endpoints`, (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
    });
});

app.get(endpoint + "getprices", (req, res) => {
    connection.query(`UPDATE Endpoints SET Hits = Hits + 1 WHERE Endpoint = 'getprices'`, (err, result) => {
        if (err) throw err;
    });
    connection.query(`SELECT * FROM Pricing`), (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
    };
})

app.post(endpoint + "setprices", (req, res) => {
    connection.query(`UPDATE Endpoints SET Hits = Hits + 1 WHERE Endpoint = 'setprices'`, (err, result) => {
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

app.post(endpoint + "signUp", (req, res) => {
    try {
        connection.query(`UPDATE Endpoints SET Hits = Hits + 1 WHERE Endpoint = 'signUp'`, (err, result) => {
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
            if (err) throw err;
            connection.query(`SELECT UUID() AS AccountID, UUID() AS PlayerID`, (err, result) => {
                let aID = result[0].AccountID;
                let pID = result[0].PlayerID;
                connection.query(`INSERT INTO account (AccountID, FullName, PhoneNumber, Email, Password, Address, Insurance) VALUES ('${aID}', '${name}', '${phoneNumber}', '${email}', '${salt}', '${address}', '${insurance}');`, (err, result) => {
                    try {
                        if (err) throw err;
                        connection.query(`INSERT INTO player (PlayerID, FullName,  DOB, Sex, SkillLevel, AllergiesMedication, ECN) VALUES ('${pID}', '${name}', '${dateOfBirth}', '${sex}', '${skill}', '${allergies}', '${emergency}')`, (err, result) => {
                            try {
                                if (err) throw err;
                                connection.query(`INSERT INTO playeraccountlink (PlayerID, AccountID, Relationship) VALUES ('${pID}', '${aID}', '${relationship}')`, (err, result) => {
                                    try {
                                        if (err) throw err;
                                        connection.query(`SELECT Permissions FROM account WHERE AccountID='${aID}'`, (err, result) => {
                                            try {
                                                console.log(result);
                                                res.json({
                                                    token: jwt.sign({
                                                        AccountID: aID,
                                                        Permission: result[0].Permissions
                                                    }, secretKey, {
                                                        expiresIn: "12h"
                                                    })
                                                });
                                            } catch (e) {
                                                res.status(500);
                                                res.json({
                                                    message: "Died at the end: " + e.message
                                                });
                                            }
                                        });
                                    } catch (e) {
                                        res.status(500);
                                        res.json({
                                            message: "Died at the 3rd: " + e.message
                                        });
                                    }
                                });
                            } catch (e) {
                                res.status(500);
                                res.json({
                                    message: "Died at the 1st: " + e.message
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
            })
        });
    } catch (e) {
        res.status(500);
        res.send({
            message: e.message
        });
    }
});

app.post(endpoint + "login", (req, res) => {
    connection.query(`UPDATE Endpoints SET Hits = Hits + 1 WHERE Endpoint = 'login'`, (err, result) => {
        if (err) throw err;
    });
    connection.query(`SELECT Password, AccountID, Permissions FROM account WHERE Email='${req.body.email}'`, (e, r) => {
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

app.get(endpoint + "getCalendar", (req, res) => {
    connection.query(`UPDATE Endpoints SET Hits = Hits + 1 WHERE Endpoint = 'getCalendar'`, (err, result) => {
        if (err) throw err;
    });
    connection.query(`SELECT dayofweek.Weekday, TIME_FORMAT(dayofweek.StartTime, "%h%p") as StartTime, TIME_FORMAT(dayofweek.EndTime, "%h%p") as EndTime, reservation.Type, reservation.CurrentPlayers, reservation.MaxPlayers, levels.Colour, levels.BackgroundColour, dayofweek.TimeslotID, dayofweek.ReservationID
                        FROM dayofweek
                        LEFT JOIN reservation ON dayofweek.ReservationID = reservation.ReservationID
                        LEFT JOIN account ON account.AccountID = reservation.AccountID
                        LEFT JOIN levels on reservation.Type = levels.Type`, (err, result) => {
                            if (err) throw err;
                            let Sunday = [];
                            let Monday = [];
                            let Tuesday = [];
                            let Wednesday = [];
                            let Thursday = [];
                            let Friday = [];
                            let Saturday = [];
                            result.forEach(element => {
                                console.log(element);
                                if (element.CurrentPlayers >= element.MaxPlayers) {
                                    let Full = "Unavailable";
                                } else {
                                    let Full = "Available";
                                }
                                switch (element.Weekday) {
                                    case "Sunday":
                                        Sunday.push({
                                            scheduledTime: `${element.StartTime} a ${element.EndTime}`,
                                            level: element.Type,
                                            currentPlayers: element.CurrentPlayers,
                                            maxPlayers: element.MaxPlayers,
                                            availability: Full,
                                            backgroundColour: element.BackgroundColour,
                                            colour: element.Colour
                                        });
                                        break;
                                    case "Monday":
                                        Monday.push({
                                            scheduledTime: `${element.StartTime} a ${element.EndTime}`,
                                            level: element.Type,
                                            currentPlayers: element.CurrentPlayers,
                                            maxPlayers: element.MaxPlayers,
                                            backgroundColour: element.BackgroundColour,
                                            colour: element.Colour
                                        });
                                        break;
                                    case "Tuesday":
                                        Tuesday.push({
                                            scheduledTime: `${element.StartTime} a ${element.EndTime}`,
                                            level: element.Type,
                                            currentPlayers: element.CurrentPlayers,
                                            maxPlayers: element.MaxPlayers,
                                            backgroundColour: element.BackgroundColour,
                                            colour: element.Colour
                                        });
                                        break;
                                    case "Wednesday":
                                        Wednesday.push({
                                            scheduledTime: `${element.StartTime} a ${element.EndTime}`,
                                            level: element.Type,
                                            currentPlayers: element.CurrentPlayers,
                                            maxPlayers: element.MaxPlayers,
                                            backgroundColour: element.BackgroundColour,
                                            colour: element.Colour
                                        });
                                        break;
                                    case "Thursday":
                                        Thursday.push({
                                            scheduledTime: `${element.StartTime} a ${element.EndTime}`,
                                            level: element.Type,
                                            currentPlayers: element.CurrentPlayers,
                                            maxPlayers: element.MaxPlayers,
                                            backgroundColour: element.BackgroundColour,
                                            colour: element.Colour
                                        });
                                        break;
                                    case "Friday":
                                        Friday.push({
                                            scheduledTime: `${element.StartTime} a ${element.EndTime}`,
                                            level: element.Type,
                                            currentPlayers: element.CurrentPlayers,
                                            maxPlayers: element.MaxPlayers,
                                            backgroundColour: element.BackgroundColour,
                                            colour: element.Colour
                                        });
                                        break;
                                    case "Saturday":
                                        Saturday.push({
                                            scheduledTime: `${element.StartTime} a ${element.EndTime}`,
                                            level: element.Type,
                                            currentPlayers: element.CurrentPlayers,
                                            maxPlayers: element.MaxPlayers,
                                            backgroundColour: element.BackgroundColour,
                                            colour: element.Colour
                                        });
                                        break;
                                    default:
                                        break;
                                }
                            });
                            res.json({
                                sunday: Sunday,
                                monday: Monday,
                                tuesday: Tuesday,
                                wednesday: Wednesday,
                                thursday: Thursday,
                                friday: Friday,
                                saturday: Saturday
                            });
    })
})

app.post(endpoint + "updateCalendar", async (req, res) => {
    connection.query(`UPDATE Endpoints SET Hits = Hits + 1 WHERE Endpoint = 'updateCalendar'`, (err, result) => {
        if (err) throw err;
    });
    let permission = verify(req.body.token, secretKey);
    if (permission) {
        if (permission.Permissions == "Admin" || permission.Permissions == "Instructor") {
            switch (req.operation) {
                case "ADD":
                    connection.query(`SELECT UUID() AS ID`, (err, result) => {
                        if (err) throw err;
                        let UUID = result[0].ID;
                        connection.query(`INSERT INTO reservation (ReservationID, AccountID, Type, MaxPlayers) VALUES (${UUID}, ${req.body.instructorID}, ${req.body.classType}, ${req.body.maxPlayers})`, (err, result) => {
                            if (err) throw err;
                            connection.query(`INSERT INTO dayofweek (Weekday, StartTime, EndTime, ReservationID, TimeslotID) VALUES (${req.body.weekday}, ${req.body.startTime}, ${req.body.endTime}, ${UUID}, UUID())`, (err, result) => {
                                if (err) throw err;
                                res.json({
                                    message: "Successfully added class/reservation"
                                })
                            });
                        })
                    })
                    
                    break;
                case "DELETE":
                    connection.query(`DELETE FROM dayofweek WHERE TimeslotID = ${req.body.timeslotID}`, (err, result) => {
                        if (err) throw err;
                        res.json({
                            message: "Successfully deleted class/reservation"
                        })
                    });
                    break;
                case "UPDATE":
                    connection.query(`UPDATE dayofweek SET StartTime = ${req.body.startTime}, EndTime = ${req.body.endTime} WHERE TimeslotID = ${req.body.timeslotID}`, (err, result) => {
                        if (err) throw err;
                    });
                    await connection.query(`UPDATE reservation SET Type = ${req.body.type}, CurrentPlayers = ${req.body.currentPlayers}, MaxPlayers = ${req.body.maxPlayers} WHERE ReservationID = ${req.body.reservationID}`, (err, result) => {
                        if (err) throw err;
                    });
                    res.json({
                        message: "Successfully updated class/reservation"
                    })
                    break;
                default:
                    res.json({
                        message: "Unable to complete operation"
                    })
                    break;
            }
        }
    }
})

app.listen(port, (err) => {
    if (err) throw err;
    console.log("Listening to port ", port);
})

console.log('Server is running and listening on port ', port);