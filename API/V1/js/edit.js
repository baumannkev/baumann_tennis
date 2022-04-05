const endPointRoot = "http://localhost:30005"; //"https://API.baumanntennis.com";
const GET = "GET";
const POST = "POST";


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
    document.getElementById(tableName).appendChild(tableRow);
  });
}

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
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let endpoints = JSON.parse(this.response);
      localStorage.setItem("BaumannTennisToken", endpoints.token);
    };
  };
}

function loadPlayers() {
  document.getElementById("playerTable").innerHTML = "";
  let resource = "/getPlayers";
  const url = endPointRoot + resource;
  const xhttp = new XMLHttpRequest();
  xhttp.open(POST, url, true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  let token = localStorage.getItem("BaumannTennisToken");
  let tokenJson = {
    "token": token
  };
  xhttp.send(JSON.stringify(tokenJson));
  xhttp.onreadystatechange = function () {
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

function loadCalendar() {
  document.getElementById("calendarTable").innerHTML = "";
  let tablerow = document.createElement("tr");
  let th;
  let displayingData = ["scheduledTime", "level", "currentPlayers", "maxPlayers", "availability"];
  displayingData.forEach(key => {
    th  = document.createElement("th");
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
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let endpoints = JSON.parse(this.response);
      if (endpoints.length == 0) {
        throw ("No class data");
      }


      for (day in endpoints) {
        for (class_ in endpoints[day]) {
          let tablerow = document.createElement("tr");

          displayingData.forEach(key => {
            let tableData = document.createElement("td");
            tableData.innerHTML = endpoints[day][class_][key];
            tablerow.appendChild(tableData);
          });

          let Editbtn = document.createElement("button");
          Editbtn.innerHTML = "Edit Class";
          Editbtn.timeslotID = endpoints[day][class_]["timeslotID"];
          Editbtn.reservationID = endpoints[day][class_]["reservationID"];
          Editbtn.addEventListener('click', editClass, false);
          tablerow.appendChild(Editbtn);
          
          document.getElementById("calendarTable").appendChild(tablerow);
        }
      }
    };
  };
}

function editClass(event) {
  localStorage.setItem("timeslotID", event.currentTarget.timeslotID);
  localStorage.setItem("reservationID", event.currentTarget.reservationID);
  console.log(event.currentTarget.timeslotID);
  document.getElementById("editCalendar").classList.toggle("show");
}

function saveCalendarEdit(){
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
    "reservationID": localStorage.getItem("reservationID")
  };
  xhttp.send(JSON.stringify(tokenJson));
  xhttp.onreadystatechange = function () {
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
  xhttp.onreadystatechange = function () {
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
  // loadInstructor();
  // loadCourt();
  // loadClass();
  // loadReservation();
}

loadTables();