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
  console.log(tableName);
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

function loadPlayers() {
  let resource = "/loadPlayer";
  const url = endPointRoot + resource;
  const xhttp = new XMLHttpRequest();
  xhttp.open(POST, url, true);
  //localStorage.getItem("BaumannTennisToken")
  xhttp.send();
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

function loadInstructor() {
  let resource = "/loadInstructor";
  const url = endPointRoot + resource;
  const xhttp = new XMLHttpRequest();
  xhttp.open(POST, url, true);
  //localStorage.getItem("BaumannTennisToken")
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let endpoints = JSON.parse(this.response);
      if (endpoints.length == 0) {
        throw ("No instructor data");
      }
      createTableHeader(endpoints, "instructorTable");
      createTableData(endpoints, "instructorTable");
    };
  };
}

function loadCourt() {
  let resource = "/loadCourt";
  const url = endPointRoot + resource;
  const xhttp = new XMLHttpRequest();
  xhttp.open(POST, url, true);
  //localStorage.getItem("BaumannTennisToken")
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let endpoints = JSON.parse(this.response);
      if (endpoints.length == 0) {
        throw ("No Court data");
      }
      createTableHeader(endpoints, "courtTable");
      createTableData(endpoints, "courtTable");
    };
  };
}

function loadClass() {
  let resource = "/loadClass";
  const url = endPointRoot + resource;
  const xhttp = new XMLHttpRequest();
  xhttp.open(POST, url, true);
  //localStorage.getItem("BaumannTennisToken")
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let endpoints = JSON.parse(this.response);
      if (endpoints.length == 0) {
        throw ("No class data");
      }
      createTableHeader(endpoints, "classTable");
      createTableData(endpoints, "classTable");
    };
  };
}

function loadReservation() {
  let resource = "/loadReservation";
  const url = endPointRoot + resource;
  const xhttp = new XMLHttpRequest();
  xhttp.open(POST, url, true);
  //localStorage.getItem("BaumannTennisToken")
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let endpoints = JSON.parse(this.response);
      if (endpoints.length == 0) {
        throw ("No reservation data");
      }
      createTableHeader(endpoints, "reservationTable");

      let tableRow;
      endpoints.forEach(element => {
        tableRow = document.createElement("tr");
        for (key in element) {
          let tableData = document.createElement("td");
          tableData.innerHTML = element[key];
          tableRow.appendChild(tableData);
        }
        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove Reservation";
        removeBtn.addEventListener('click', function() {
          removeReservation(element.scheduledTime);
        });
        let tableDataBtn = document.createElement("td");
        tableDataBtn.appendChild(removeBtn);
        tableRow.appendChild(tableDataBtn);

        document.getElementById("reservationTable").appendChild(tableRow);
      });    };
  };
}

function removeReservation(time) {
  console.log('Remove res: ' + time);

  let resource = "/removeReservation";
  const url = endPointRoot + resource;
  const xhttp = new XMLHttpRequest();
  xhttp.open(POST, url, true);
  //localStorage.getItem("BaumannTennisToken")
  xhttp.send(time);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Succesfully Removed");
      loadReservation();
    };
  };
}



function loadTables() {
  loadPlayers();
  // loadInstructor();
  // loadCourt();
  // loadClass();
  loadReservation();
}

loadTables();


