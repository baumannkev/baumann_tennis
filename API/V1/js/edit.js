const endPointRoot = "http://localhost:30005"; //"https://API.baumanntennis.com";
const GET = "GET";
const POST = "POST";

function login() {
    let resource = "/login";
    const url = endPointRoot + resource;
    const xhttp = new XMLHttpRequest();
    xhttp.open(POST, url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    let loginInfo = {
        "email": "tester1@test.test",
        "phoneNumber": "1234567890",
        "name": "tester1",
        "address": "1 test ln",
        "dob": "1999-01-01",
        "sex": "Male",
        "skill": "Beginner",
        "emergency": "tester1",
        "relationship": "tester1",
        "password": "tester1",
    };
    xhttp.send(JSON.stringify(loginInfo));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let endpoints = JSON.parse(this.response);
            localStorage.setItem("BaumannTennisToken", endpoints.token);
        };
    };
}

function createTableHeader(endpoints, tableName) {
    let tableRow = document.createElement("tr");
    for (key in endpoints[0]) {
        let tableData = document.createElement("th");
        tableData.innerHTML = key;
        tableRow.appendChild(tableData);
    }
    document.getElementById(tableName).appendChild(tableRow);
}

function createTableData(endpoints, tableName) {
    let tableRow;
    endpoints.forEach(element => {
        tableRow = document.createElement("tr");
        for (key in element) {
            let tableData = document.createElement("td");
            tableData.innerHTML = element[key];
            tableRow.appendChild(tableData);
        }
        let Editbtn = document.createElement("button");
        Editbtn.className = 'ui button';
        Editbtn.innerHTML = "Edita Jugador";
        Editbtn.playerID = element["PlayerID"];
        Editbtn.fullName = element["FullName"];
        Editbtn.skillLevel = element["SkillLevel"];
        Editbtn.allergiesMedication = element["AllergiesMedication"];
        Editbtn.dob = element["DOB"];

        Editbtn.addEventListener('click', editPlayer, false);
        tableRow.appendChild(Editbtn);
        document.getElementById(tableName).appendChild(tableRow);
    });
}


function loadPlayers() {
    document.getElementById("playerTable").innerHTML = "";
    let resource = "/loadPlayers";
    const url = endPointRoot + resource;
    const xhttp = new XMLHttpRequest();
    xhttp.open(POST, url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    let token = localStorage.getItem("BaumannTennisToken");
    let tokenJson = {
        "token": token
    };
    xhttp.send(JSON.stringify(tokenJson));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let endpoints = JSON.parse(this.response);
            if (endpoints.length == 0) {
                throw ("No Player data");
            }
            createTableHeader(endpoints, "playerTable");
            createTableData(endpoints, "playerTable");
        };
    };
}

function editPlayer(event) {
    localStorage.setItem("playerID", event.currentTarget.playerID);
    document.getElementById("fullname").value = event.currentTarget.fullName;
    document.getElementById("dob").value = event.currentTarget.dob.substr(0, 10);
    document.getElementById("skillLevel").value = event.currentTarget.skillLevel;
    document.getElementById("med").value = event.currentTarget.allergiesMedication;
    document.getElementById("editPlayer").classList.toggle("show");
}

function savePlayerEdit() {
    let fullname = document.getElementById("fullname").value;
    let dob = document.getElementById("dob").value;
    let skillLevel = document.getElementById("skillLevel").value;
    let med = document.getElementById("med").value;
    let resource = "/updatePlayer";

    const url = endPointRoot + resource;
    const xhttp = new XMLHttpRequest();
    xhttp.open(POST, url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    let token = localStorage.getItem("BaumannTennisToken");
    console.log(localStorage.getItem("timeslotID"));
    let tokenJson = {
        "token": token,
        "operation": "UPDATE",
        "fullname": fullname,
        "dob": dob,
        "skillLevel": skillLevel,
        "med": med,
        "playerID": localStorage.getItem("playerID"),
    };
    xhttp.send(JSON.stringify(tokenJson));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let endpoints = JSON.parse(this.response);
            window.alert(endpoints.message);
            document.getElementById("editPlayer").classList.toggle("show");
            loadPlayers();
        };
    };
}

function deletePlayer() {
    let resource = "/updatePlayer";
    const url = endPointRoot + resource;
    const xhttp = new XMLHttpRequest();
    xhttp.open(POST, url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    let token = localStorage.getItem("BaumannTennisToken");
    let tokenJson = {
        "token": token,
        "playerID": localStorage.getItem("playerID"),
        "operation": "DELETE"
    };
    xhttp.send(JSON.stringify(tokenJson));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let endpoints = JSON.parse(this.response);
            window.alert(endpoints.message);
            document.getElementById("editPlayer").classList.toggle("show");
            loadPlayers();
        };

    };
}


function loadCalendar() {
    document.getElementById("calendarTable").innerHTML = "";
    let tablerow = document.createElement("tr");
    let th;
    let displayingData = ["scheduledTime", "level", "currentPlayers", "maxPlayers", "availability"];
    displayingData.forEach(key => {
        th = document.createElement("th");
        th.innerHTML = key;
        tablerow.appendChild(th);
    });
    document.getElementById("calendarTable").appendChild(tablerow);

    let resource = "/getCalendar";
    const url = endPointRoot + resource;
    const xhttp = new XMLHttpRequest();
    xhttp.open(GET, url, true);
    //localStorage.getItem("BaumannTennisToken")
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let endpoints = JSON.parse(this.response);
            if (endpoints.length == 0) {
                throw ("No class data");
            }

            for (day in endpoints) {
                if (endpoints[day].length > 0) {
                    let tableRow = document.createElement("tr");
                    let td = document.createElement("td");
                    td.innerHTML = day;
                    tableRow.appendChild(td);
                    document.getElementById("calendarTable").appendChild(tableRow);
                }


                for (class_ in endpoints[day]) {
                    tableRow = document.createElement("tr");

                    displayingData.forEach(key => {
                        let tableData = document.createElement("td");
                        tableData.innerHTML = endpoints[day][class_][key];
                        tableRow.appendChild(tableData);
                    });

                    let Editbtn = document.createElement("button");
                    Editbtn.className = 'ui button';
                    Editbtn.innerHTML = "Edita Clase";
                    Editbtn.timeslotID = endpoints[day][class_]["timeslotID"];
                    Editbtn.reservationID = endpoints[day][class_]["reservationID"];
                    Editbtn.level = endpoints[day][class_]["level"];
                    Editbtn.maxplayers = endpoints[day][class_]["maxplayers"];

                    Editbtn.addEventListener('click', editClass, false);
                    tableRow.appendChild(Editbtn);

                    document.getElementById("calendarTable").appendChild(tableRow);
                }
            }
        };
    };
}

function editClass(event) {
    localStorage.setItem("timeslotID", event.currentTarget.timeslotID);
    localStorage.setItem("reservationID", event.currentTarget.reservationID);
    console.log("weekday: ", event.currentTarget)
    $("#level").value = event.currentTarget.level;
    $("#maxplayers").value = event.currentTarget.maxplayers;
    document.getElementById("editCalendar").classList.toggle("show");
}

function saveCalendarEdit() {
    let startTime = document.getElementById("startTime").value;
    let endTime = document.getElementById("endTime").value;
    let level = document.getElementById("level").value;
    let maxP = document.getElementById("maxplayers").value;
    let resource = "/updateCalendar";

    const url = endPointRoot + resource;
    const xhttp = new XMLHttpRequest();
    xhttp.open(POST, url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    let token = localStorage.getItem("BaumannTennisToken");
    console.log(localStorage.getItem("timeslotID"));
    let tokenJson = {
        "token": token,
        "operation": "UPDATE",
        "startTime": startTime,
        "endTime": endTime,
        "level": startTime,
        "type": level,
        "maxPlayers": maxP,
        "currentPlayers": 0,
        "timeslotID": localStorage.getItem("timeslotID"),
        "reservationID": localStorage.getItem("reservationID"),
        "weekday": "Sunday",
    };
    xhttp.send(JSON.stringify(tokenJson));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let endpoints = JSON.parse(this.response);
            window.alert(endpoints.message);
            document.getElementById("editCalendar").classList.toggle("show");
            loadCalendar();
        };
    };
}

function calendarDelete() {
    let resource = "/updateCalendar";
    const url = endPointRoot + resource;
    const xhttp = new XMLHttpRequest();
    xhttp.open(POST, url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    let token = localStorage.getItem("BaumannTennisToken");
    let tokenJson = {
        "token": token,
        "timeslotID": localStorage.getItem("timeslotID"),
        "operation": "DELETE"
    };
    xhttp.send(JSON.stringify(tokenJson));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let endpoints = JSON.parse(this.response);
            window.alert(endpoints.message);
            document.getElementById("editCalendar").classList.toggle("show");
            loadReservation();
        };

    };
}


function loadTables() {
    login();
    loadPlayers();
    loadCalendar();

}

loadTables();