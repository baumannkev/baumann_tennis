// var valueToDelete;
// (function ($) {
//   "use strict";
//   //--->Delete Members
//   $('.delete-member').on('click', function () {
//     console.log("Deleted");

//     var col_name_delete_user = $(this).closest('dl').attr('col_name_register_delete');

//     valueToDelete = col_name_delete_user;

//     firebase.database().ref('classes/' + valueToDelete + '/patrons').once('value', (snapshot) => {
//       snapshot.forEach((childSnapshot) => {
//         childSnapshot.update({
//           firstName: "",
//           lastName: "",
//           email: "",
//           from: "",
//           to: "",
//           timeRegistered: "",
//           total: "",
//           phone: "",
//         }, (error) => {
//           if (error) {
//             // The write failed...
//           } else {
//             // Data saved successfully!
//           }
//         });
//       });
//     });

//   });

// });

// Get all Data
function SelectAllDeleteData() {
  firebase.database().ref('classes').once('value',
    function (AllRecords) {
      AllRecords.forEach(
        function (CurrentRecord) {

          // Members
          var monday07MembersNumbers = CurrentRecord.val().monday.miembros;
          var tuesday07MembersNumbers = CurrentRecord.val().tuesday.miembros;
          var wed07MembersNumbers = CurrentRecord.val().wednesday.miembros;
          var thurs07MembersNumbers = CurrentRecord.val().thursday.miembros;
          var fri07MembersNumbers = CurrentRecord.val().friday.miembros;
          var sat07MembersNumbers = CurrentRecord.val().saturday.miembros;
          var sun07MembersNumbers = CurrentRecord.val().sunday.miembros;

          //Capacity
          var monday07Capacity = CurrentRecord.val().monday.capacity;
          var tuesday07Capacity = CurrentRecord.val().tuesday.capacity;
          var wed07Capacity = CurrentRecord.val().wednesday.capacity;
          var thurs07Capacity = CurrentRecord.val().thursday.capacity;
          var fri07Capacity = CurrentRecord.val().friday.capacity;
          var sat07Capacity = CurrentRecord.val().saturday.capacity;
          var sun07Capacity = CurrentRecord.val().sunday.capacity;

          AddItemsToTable(
            monday07MembersNumbers,
            tuesday07MembersNumbers,
            wed07MembersNumbers,
            thurs07MembersNumbers,
            fri07MembersNumbers,
            sat07MembersNumbers,
            sun07MembersNumbers,
            monday07Capacity,
            tuesday07Capacity,
            wed07Capacity,
            thurs07Capacity,
            fri07Capacity,
            sat07Capacity,
            sun07Capacity,
          );

        }
      );
    });
}

window.onload = SelectAllDeleteData;

var random_id = function () {
  var id_num = Math.random().toString(9).substr(2, 3);
  var id_str = Math.random().toString(36).substr(2);

  return id_num + id_str;
}

var rowCounter = 6;
var idCounter = 0;
var counterStart = 6;
var counterEnd = 7;

var AMTime = "AM";
var AMTimeNumber = "0";
var row_id = random_id();
function AddItemsToTable(
  monday07MembersNumbers,
  tuesday07MembersNumbers,
  wed07MembersNumbers,
  thurs07MembersNumbers,
  fri07MembersNumbers,
  sat07MembersNumbers,
  sun07MembersNumbers,
  monday07Capacity,
  tuesday07Capacity,
  wed07Capacity,
  thurs07Capacity,
  fri07Capacity,
  sat07Capacity,
  sun07Capacity,
) {
  var tbody = document.getElementById('tbody1');
  var trow = document.createElement('tr');

  var colorRed = "#FF0F0F"
  var colorWhite = "#FFFFFF";

  trow.classList.add("row100");
  var td0 = document.createElement('td');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');

  if (rowCounter < 12) {
    AMTime = 'AM';
  } else { AMTime = 'PM'; }

  if (rowCounter < 10) {
    AMTimeNumber = "0";
  } else { AMTimeNumber = ""; }

  td1.innerHTML = '<td class="column100 column2" row_id_delete="' + row_id + '" data-column="column2"></td>';
  td2.innerHTML = '<td class="column100 column3" row_id_register="' + row_id + '" data-column="column3"></td>';
  td3.innerHTML = '<td class="column100 column4" row_id_register="' + row_id + '" data-column="column4"></td>';
  td4.innerHTML = '<td class="column100 column5" row_id_register="' + row_id + '" data-column="column5"></td>';
  td5.innerHTML = '<td class="column100 column6" row_id_register="' + row_id + '" data-column="column6"></td>';
  td6.innerHTML = '<td class="column100 column7" row_id_register="' + row_id + '" data-column="column7"></td>';
  td7.innerHTML = '<td class="column100 column8" row_id_register="' + row_id + '" data-column="column8"></td>';

  // var patronMonNum = 1;

  // var patronMonNum = increment_alphanumeric_str(monday07MembersNumbers);

  var patronMonNum = monday07MembersNumbers;

  for (var i = 1; i <= monday07Capacity; i++) {
    console.log("Num: ", i);
    var ul1 = document.createElement('ul');
    var patronNum = 1;
    firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/monday/patrons/patron' + i + '').orderByChild('to')
      .once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var childKey = childSnapshot.key;
          var firstName = childSnapshot.val().firstName;
          var lastName = childSnapshot.val().lastName;
          var email = childSnapshot.val().email;
          var from = childSnapshot.val().from;
          var to = childSnapshot.val().to;

          var phone = childSnapshot.val().phone;

          var colorMon;

          var today = new Date();
          var fechaToDate = new Date(to);
          console.log("Today: ", today.getTime())
          console.log("Fecha: ", fechaToDate.getTime());

          moment.locale("es");
          var fromDate = moment(from).format('ll');
          var toDate = moment(to).format('ll');

          if (fechaToDate.getTime() > today.getTime()) {
            colorMon = colorWhite;
          } else {
            colorMon = colorRed;
          }

          // var patronNum = 0;
          ul1.innerHTML += '<dl style="color: ' + colorMon + '" class="row_data_delete" row_patron_num ="' + patronNum + '" row_members_delete ="' + monday07MembersNumbers + '" col_name_delete_user="' + AMTimeNumber + rowCounter + AMTime + '/monday"><dt>Miembro</dt><dd class="">Nombre: ' + firstName + '</dd><dd class="">Apellido: ' + lastName + '</dd><dd class="">Email: ' + email + '</dd><dd class="">Cel: ' + phone + '</dd><dd class="">Desde: ' + fromDate + '</dd><dd class="">Hasta: ' + toDate + '</dd><a href ="https://console.firebase.google.com/project/baumanntennis-af590/database/baumanntennis-af590-default-rtdb/data" target = "_blank"><button class="btn">Borrar</button></a><dl>';
          patronNum++;
          td1.appendChild(ul1);

        });
      });

  }
  // patronMonNum++;

  // var patronMonNum = monday07MembersNumbers;

  for (var i = 1; i <= tuesday07Capacity; i++) {
    console.log("Num: ", i);
    var ul2 = document.createElement('ul');
    var patronNum = 1;
    firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/tuesday/patrons/patron' + i + '').orderByChild('to')
      .once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var childKey = childSnapshot.key;
          var firstName = childSnapshot.val().firstName;
          var lastName = childSnapshot.val().lastName;
          var email = childSnapshot.val().email;
          var from = childSnapshot.val().from;
          var to = childSnapshot.val().to;

          var phone = childSnapshot.val().phone;

          var colorTues;

          moment.locale("es");
          var fromDate = moment(from).format('ll');
          var toDate = moment(to).format('ll');

          var today = new Date();
          var fechaToDate = new Date(to);
          console.log("Today: ", today.getTime())
          console.log("Fecha: ", fechaToDate.getTime())
          if (fechaToDate.getTime() > today.getTime()) {
            colorTues = colorWhite;
          } else {
            colorTues = colorRed;
          }

          // var patronNum = 0;
          ul2.innerHTML += '<dl style="color: ' + colorTues + '" class="row_data_delete" row_patron_num ="' + patronNum + '" row_members_delete ="' + tuesday07MembersNumbers + '" col_name_delete_user="' + AMTimeNumber + rowCounter + AMTime + '/tuesday"><dt>Miembro</dt><dd class="">Nombre: ' + firstName + '</dd><dd class="">Apellido: ' + lastName + '</dd><dd class="">Email: ' + email + '</dd><dd class="">Cel: ' + phone + '</dd><dd class="">Desde: ' + fromDate + '</dd><dd class="">Hasta: ' + toDate + '</dd><a href ="https://console.firebase.google.com/project/baumanntennis-af590/database/baumanntennis-af590-default-rtdb/data" target = "_blank"><button class="btn">Borrar</button></a><dl>';
          patronNum++;
          td2.appendChild(ul2);

        });
      });
  }

  // var ul2 = document.createElement('ul');
  // firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/tuesday/patrons').once('value', (snapshot) => {
  //   snapshot.forEach((childSnapshot) => {
  //     var childKey = childSnapshot.key;
  //     var firstName = childSnapshot.val().firstName;
  //     var lastName = childSnapshot.val().lastName;
  //     var email = childSnapshot.val().email;

  //     ul2.innerHTML += '<dl style= "" class=""><dt>Miembro</dt><dd class="">First Name: ' + firstName + '</dd><dd class="">Last Name: ' + lastName + '</dd><dd class="">Email: ' + email + '</dd><dl>';
  //     td2.appendChild(ul2);
  //   });
  // });

  for (var i = 1; i <= wed07Capacity; i++) {
    console.log("Num: ", i);
    var ul3 = document.createElement('ul');
    var patronNum = 1;
    firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/wednesday/patrons/patron' + i + '').orderByChild('to')
      .once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var childKey = childSnapshot.key;
          var firstName = childSnapshot.val().firstName;
          var lastName = childSnapshot.val().lastName;
          var email = childSnapshot.val().email;
          var from = childSnapshot.val().from;
          var to = childSnapshot.val().to;

          var phone = childSnapshot.val().phone;

          var colorWed;

          moment.locale("es");
          var fromDate = moment(from).format('ll');
          var toDate = moment(to).format('ll');

          var today = new Date();
          var fechaToDate = new Date(to);
          console.log("Today: ", today.getTime())
          console.log("Fecha: ", fechaToDate.getTime())
          if (fechaToDate.getTime() > today.getTime()) {
            colorWed = colorWhite;
          } else {
            colorWed = colorRed;
          }

          // var patronNum = 0;
          ul3.innerHTML += '<dl style="color: ' + colorWed + '" class="row_data_delete" row_patron_num ="' + patronNum + '" row_members_delete ="' + wed07MembersNumbers + '" col_name_delete_user="' + AMTimeNumber + rowCounter + AMTime + '/wednesday"><dt>Miembro</dt><dd class="">Nombre: ' + firstName + '</dd><dd class="">Apellido: ' + lastName + '</dd><dd class="">Email: ' + email + '</dd><dd class="">Cel: ' + phone + '</dd><dd class="">Desde: ' + fromDate + '</dd><dd class="">Hasta: ' + toDate + '</dd><a href ="https://console.firebase.google.com/project/baumanntennis-af590/database/baumanntennis-af590-default-rtdb/data" target = "_blank"><button class="btn">Borrar</button></a><dl>';
          patronNum++;
          td3.appendChild(ul3);

        });
      });
  }

  // var ul3 = document.createElement('ul');
  // firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/wednesday/patrons').once('value', (snapshot) => {
  //   snapshot.forEach((childSnapshot) => {
  //     var childKey = childSnapshot.key;
  //     var firstName = childSnapshot.val().firstName;
  //     var lastName = childSnapshot.val().lastName;
  //     var email = childSnapshot.val().email;

  //     ul3.innerHTML += '<dl style= "" class=""><dt>Miembro</dt><dd class="">First Name: ' + firstName + '</dd><dd class="">Last Name: ' + lastName + '</dd><dd class="">Email: ' + email + '</dd><dl>';
  //     td3.appendChild(ul3);
  //   });
  // });

  for (var i = 1; i <= thurs07Capacity; i++) {
    console.log("Num: ", i);
    var ul4 = document.createElement('ul');
    var patronNum = 1;
    firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/thursday/patrons/patron' + i + '').orderByChild('to')
      .once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var childKey = childSnapshot.key;
          var firstName = childSnapshot.val().firstName;
          var lastName = childSnapshot.val().lastName;
          var email = childSnapshot.val().email;
          var from = childSnapshot.val().from;
          var to = childSnapshot.val().to;

          var phone = childSnapshot.val().phone;

          var colorThurs;

          moment.locale("es");
          var fromDate = moment(from).format('ll');
          var toDate = moment(to).format('ll');

          var today = new Date();
          var fechaToDate = new Date(to);
          console.log("Today: ", today.getTime())
          console.log("Fecha: ", fechaToDate.getTime())
          if (fechaToDate.getTime() > today.getTime()) {
            colorThurs = colorWhite;
          } else {
            colorThurs = colorRed;
          }

          // var patronNum = 0;
          ul4.innerHTML += '<dl style="color: ' + colorThurs + '" class="row_data_delete" row_patron_num ="' + patronNum + '" row_members_delete ="' + thurs07MembersNumbers + '" col_name_delete_user="' + AMTimeNumber + rowCounter + AMTime + '/thursday"><dt>Miembro</dt><dd class="">Nombre: ' + firstName + '</dd><dd class="">Apellido: ' + lastName + '</dd><dd class="">Email: ' + email + '</dd><dd class="">Cel: ' + phone + '</dd><dd class="">Desde: ' + fromDate + '</dd><dd class="">Hasta: ' + toDate + '</dd><a href ="https://console.firebase.google.com/project/baumanntennis-af590/database/baumanntennis-af590-default-rtdb/data" target = "_blank"><button class="btn">Borrar</button></a><dl>';
          patronNum++;
          td4.appendChild(ul4);

        });
      });
  }

  // var ul4 = document.createElement('ul');
  // firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/thursday/patrons').once('value', (snapshot) => {
  //   snapshot.forEach((childSnapshot) => {
  //     var childKey = childSnapshot.key;
  //     var firstName = childSnapshot.val().firstName;
  //     var lastName = childSnapshot.val().lastName;
  //     var email = childSnapshot.val().email;

  //     ul4.innerHTML += '<dl style= "" class=""><dt>Miembro</dt><dd class="">First Name: ' + firstName + '</dd><dd class="">Last Name: ' + lastName + '</dd><dd class="">Email: ' + email + '</dd><dl>';
  //     td4.appendChild(ul1);
  //   });
  // });

  for (var i = 1; i <= fri07Capacity; i++) {
    console.log("Num: ", i);
    var ul5 = document.createElement('ul');
    var patronNum = 1;
    firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/friday/patrons/patron' + i + '').orderByChild('to')
      .once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var childKey = childSnapshot.key;
          var firstName = childSnapshot.val().firstName;
          var lastName = childSnapshot.val().lastName;
          var email = childSnapshot.val().email;
          var from = childSnapshot.val().from;
          var to = childSnapshot.val().to;

          var phone = childSnapshot.val().phone;

          moment.locale("es");
          var fromDate = moment(from).format('ll');
          var toDate = moment(to).format('ll');

          var colorFri;

          var today = new Date();
          var fechaToDate = new Date(to);
          console.log("Today: ", today.getTime())
          console.log("Fecha: ", fechaToDate.getTime())
          if (fechaToDate.getTime() > today.getTime()) {
            colorFri = colorWhite;
          } else {
            colorFri = colorRed;
          }

          // var patronNum = 0;
          ul5.innerHTML += '<dl style="color: ' + colorFri + '" class="row_data_delete" row_patron_num ="' + patronNum + '" row_members_delete ="' + fri07MembersNumbers + '" col_name_delete_user="' + AMTimeNumber + rowCounter + AMTime + '/friday"><dt>Miembro</dt><dd class="">Nombre: ' + firstName + '</dd><dd class="">Apellido: ' + lastName + '</dd><dd class="">Email: ' + email + '</dd><dd class="">Cel: ' + phone + '</dd><dd class="">Desde: ' + fromDate + '</dd><dd class="">Hasta: ' + toDate + '</dd><a href ="https://console.firebase.google.com/project/baumanntennis-af590/database/baumanntennis-af590-default-rtdb/data" target = "_blank"><button class="btn">Borrar</button></a><dl>';
          patronNum++;
          td5.appendChild(ul5);

        });
      });
  }

  // var ul5 = document.createElement('ul');
  // firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/friday/patrons').once('value', (snapshot) => {
  //   snapshot.forEach((childSnapshot) => {
  //     var childKey = childSnapshot.key;
  //     var firstName = childSnapshot.val().firstName;
  //     var lastName = childSnapshot.val().lastName;
  //     var email = childSnapshot.val().email;

  //     ul5.innerHTML += '<dl style= "" class=""><dt>Miembro</dt><dd class="">First Name: ' + firstName + '</dd><dd class="">Last Name: ' + lastName + '</dd><dd class="">Email: ' + email + '</dd><dl>';
  //     td5.appendChild(ul5);
  //   });
  // });

  for (var i = 1; i <= sat07Capacity; i++) {
    console.log("Num: ", i);
    var ul6 = document.createElement('ul');
    var patronNum = 1;
    firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/saturday/patrons/patron' + i + '').orderByChild('to')
      .once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var childKey = childSnapshot.key;
          var firstName = childSnapshot.val().firstName;
          var lastName = childSnapshot.val().lastName;
          var email = childSnapshot.val().email;
          var from = childSnapshot.val().from;
          var to = childSnapshot.val().to;

          var phone = childSnapshot.val().phone;

          moment.locale("es");
          var fromDate = moment(from).format('ll');
          var toDate = moment(to).format('ll');

          var colorSat;

          var today = new Date();
          var fechaToDate = new Date(to);
          console.log("Today: ", today.getTime())
          console.log("Fecha: ", fechaToDate.getTime())
          if (fechaToDate.getTime() > today.getTime()) {
            colorSat = colorWhite;
          } else {
            colorSat = colorRed;
          }

          // var patronNum = 0;
          ul6.innerHTML += '<dl style="color: ' + colorSat + '" class="row_data_delete" row_patron_num ="' + patronNum + '" row_members_delete ="' + sat07MembersNumbers + '" col_name_delete_user="' + AMTimeNumber + rowCounter + AMTime + '/saturday"><dt>Miembro</dt><dd class="">Nombre: ' + firstName + '</dd><dd class="">Apellido: ' + lastName + '</dd><dd class="">Email: ' + email + '</dd><dd class="">Cel: ' + phone + '</dd><dd class="">Desde: ' + fromDate + '</dd><dd class="">Hasta: ' + toDate + '</dd><a href ="https://console.firebase.google.com/project/baumanntennis-af590/database/baumanntennis-af590-default-rtdb/data" target = "_blank"><button class="btn">Borrar</button></a><dl>';
          patronNum++;
          td6.appendChild(ul6);

        });
      });
  }

  // var ul6 = document.createElement('ul');
  // firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/saturday/patrons').once('value', (snapshot) => {
  //   snapshot.forEach((childSnapshot) => {
  //     var childKey = childSnapshot.key;
  //     var firstName = childSnapshot.val().firstName;
  //     var lastName = childSnapshot.val().lastName;
  //     var email = childSnapshot.val().email;

  //     ul6.innerHTML += '<dl style= "" class=""><dt>Miembro</dt><dd class="">First Name: ' + firstName + '</dd><dd class="">Last Name: ' + lastName + '</dd><dd class="">Email: ' + email + '</dd><dl>';
  //     td6.appendChild(ul6);
  //   });
  // });

  for (var i = 1; i <= sun07Capacity; i++) {
    console.log("Num: ", i);
    var ul7 = document.createElement('ul');
    var patronNum = 1;
    firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/sunday/patrons/patron' + i + '').orderByChild('to')
      .once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var childKey = childSnapshot.key;
          var firstName = childSnapshot.val().firstName;
          var lastName = childSnapshot.val().lastName;
          var email = childSnapshot.val().email;
          var from = childSnapshot.val().from;
          var to = childSnapshot.val().to;

          var phone = childSnapshot.val().phone;

          var colorSun;

          moment.locale("es");
          var fromDate = moment(from).format('ll');
          var toDate = moment(to).format('ll');

          var today = new Date();
          var fechaToDate = new Date(to);
          console.log("Today: ", today.getTime())
          console.log("Fecha: ", fechaToDate.getTime())
          if (fechaToDate.getTime() > today.getTime()) {
            colorSun = colorWhite;
          } else {
            colorSun = colorRed;
          }

          // var patronNum = 0;
          ul7.innerHTML += '<dl style="color: ' + colorSun + '" class="row_data_delete" row_patron_num ="' + patronNum + '" row_members_delete ="' + sun07MembersNumbers + '" col_name_delete_user="' + AMTimeNumber + rowCounter + AMTime + '/sunday"><dt>Miembro</dt><dd class="">Nombre: ' + firstName + '</dd><dd class="">Apellido: ' + lastName + '</dd><dd class="">Email: ' + email + '</dd><dd class="">Cel: ' + phone + '</dd><dd class="">Desde: ' + fromDate + '</dd><dd class="">Hasta: ' + toDate + '</dd><a href ="https://console.firebase.google.com/project/baumanntennis-af590/database/baumanntennis-af590-default-rtdb/data" target = "_blank"><button class="btn">Borrar</button></a><dl>';
          patronNum++;
          td7.appendChild(ul7);

        });
      });
  }

  // var ul7 = document.createElement('ul');
  // firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/sunday/patrons').once('value', (snapshot) => {
  //   snapshot.forEach((childSnapshot) => {
  //     var childKey = childSnapshot.key;
  //     var firstName = childSnapshot.val().firstName;
  //     var lastName = childSnapshot.val().lastName;
  //     var email = childSnapshot.val().email;

  //     ul7.innerHTML += '<dl style= "" class=""><dt>Miembro</dt><dd class="">First Name: ' + firstName + '</dd><dd class="">Last Name: ' + lastName + '</dd><dd class="">Email: ' + email + '</dd><button id = "delete-member" class="btn">Delete</button><dl>';
  //     td7.appendChild(ul7);
  //   });
  // });

  td0.innerHTML = `<td class="row_data_time column100 column1" id = "time_id" data-column="column1" row_id_time="` + row_id + `" style ="padding-left: 3rem" col_name_time="Hora" ">` + counterStart++ + `:00 - ` + counterEnd++ + `:00</td>`

  trow.appendChild(td0);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);
  tbody.appendChild(trow);
  rowCounter++;
  idCounter++;
}

function decrement_alphanumeric_str(str) {
  var numeric = str.match(/\d+$/)[0];
  var prefix = str.split(numeric)[0];

  function increment_string_num(str) {
    var inc = String(parseInt(str) - 1);
    return str.slice(0, str.length - inc.length) + inc;
  }

  return prefix + increment_string_num(numeric);
}

function increment_alphanumeric_str(str) {
  var numeric = str.match(/\d+$/)[0];
  var prefix = str.split(numeric)[0];

  function increment_string_num(str) {
    var inc = String(parseInt(str) + 1);
    return str.slice(0, str.length - inc.length) + inc;
  }

  return prefix + increment_string_num(numeric);
}