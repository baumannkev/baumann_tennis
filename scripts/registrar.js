// Get all Data
function SelectAllData() {
  firebase.database().ref('classes').once('value',
    function (AllRecords) {
      AllRecords.forEach(
        function (CurrentRecord) {

          // Description of class 
          var monday07Status = CurrentRecord.val().monday.status;

          var tuesday07Status = CurrentRecord.val().tuesday.status;

          var wed07Status = CurrentRecord.val().wednesday.status;

          var thurs07Status = CurrentRecord.val().thursday.status;

          var fri07Status = CurrentRecord.val().friday.status;

          var sat07Status = CurrentRecord.val().saturday.status;

          var sun07Status = CurrentRecord.val().sunday.status;

          // State of class
          var monday07Stado = CurrentRecord.val().monday.stado;

          var tuesday07Stado = CurrentRecord.val().tuesday.stado;

          var wed07Stado = CurrentRecord.val().wednesday.stado;

          var thurs07Stado = CurrentRecord.val().thursday.stado;

          var fri07Stado = CurrentRecord.val().friday.stado;

          var sat07Stado = CurrentRecord.val().saturday.stado;

          var sun07Stado = CurrentRecord.val().sunday.stado;

          // var capacity = 4;

          // Capacity
          var monday07Capacity = CurrentRecord.val().monday.capacity;

          var tuesday07Capacity = CurrentRecord.val().tuesday.capacity;

          var wed07Capacity = CurrentRecord.val().wednesday.capacity;

          var thurs07Capacity = CurrentRecord.val().thursday.capacity;

          var fri07Capacity = CurrentRecord.val().friday.capacity;

          var sat07Capacity = CurrentRecord.val().saturday.capacity;

          var sun07Capacity = CurrentRecord.val().sunday.capacity;

          // Members
          var monday07MembersNumbers = CurrentRecord.val().monday.miembros;

          var tuesday07MembersNumbers = CurrentRecord.val().tuesday.miembros;

          var wed07MembersNumbers = CurrentRecord.val().wednesday.miembros;

          var thurs07MembersNumbers = CurrentRecord.val().thursday.miembros;

          var fri07MembersNumbers = CurrentRecord.val().friday.miembros;

          var sat07MembersNumbers = CurrentRecord.val().saturday.miembros;

          var sun07MembersNumbers = CurrentRecord.val().sunday.miembros;

          // Precio
          var monday07Precio = CurrentRecord.val().monday.precio;

          var tuesday07Precio = CurrentRecord.val().tuesday.precio;

          var wed07Precio = CurrentRecord.val().wednesday.precio;

          var thurs07Precio = CurrentRecord.val().thursday.precio;

          var fri07Precio = CurrentRecord.val().friday.precio;

          var sat07Precio = CurrentRecord.val().saturday.precio;

          var sun07Precio = CurrentRecord.val().sunday.precio;

          // var mondays = "monday";
          // // var precio = "75.000";
          // var precio = "0";
          // UpdateDatabaseMonday(
          //   mondays,
          //   //  mondayMembers,
          //   //  mondayCapacity,
          //   //  stadoMessage,
          //   precio,
          // );

          // var tuesdays = "tuesday";
          // UpdateDatabaseMonday(
          //   // classIsOpen,
          //   tuesdays,
          //   //  mondayMembers,
          //   //  mondayCapacity
          //   precio
          // );

          // var wednesdays = "wednesday";
          // UpdateDatabaseMonday(
          //   // classIsOpen,
          //   wednesdays,
          //   // mondayMembers,
          //   // mondayCapacity
          //   precio
          // );

          // var thursdays = "thursday";
          // UpdateDatabaseMonday(
          //   // classIsOpen,
          //   thursdays,
          //   // mondayMembers,
          //   // mondayCapacity
          //   precio
          // );

          // var fridays = "friday";
          // UpdateDatabaseMonday(
          //   // classIsOpen,
          //   fridays,
          //   // mondayMembers,
          //   // mondayCapacity
          //   precio
          // );

          // var saturdays = "saturday";
          // UpdateDatabaseMonday(
          //   // classIsOpen,
          //   saturdays,
          //   // mondayMembers,
          //   // mondayCapacity
          //   precio
          // );

          // var sundays = "sunday";
          // UpdateDatabaseMonday(
          //   // classIsOpen,
          //   sundays,
          //   // mondayMembers,
          //   // mondayCapacity
          //   precio
          // );

          AddItemsToTable(
            monday07Status,
            tuesday07Status,
            wed07Status,
            thurs07Status,
            fri07Status,
            sat07Status,
            sun07Status,
            monday07Stado,
            tuesday07Stado,
            wed07Stado,
            thurs07Stado,
            fri07Stado,
            sat07Stado,
            sun07Stado,
            monday07Capacity,
            tuesday07Capacity,
            wed07Capacity,
            thurs07Capacity,
            fri07Capacity,
            sat07Capacity,
            sun07Capacity,
            monday07MembersNumbers,
            tuesday07MembersNumbers,
            wed07MembersNumbers,
            thurs07MembersNumbers,
            fri07MembersNumbers,
            sat07MembersNumbers,
            sun07MembersNumbers,
            monday07Precio,
            tuesday07Precio,
            wed07Precio,
            thurs07Precio,
            fri07Precio,
            sat07Precio,
            sun07Precio,
          );
        }
      );
    });
}

window.onload = SelectAllData;

function UpdateDatabaseMonday(
  dayOfWeek,
  precioClass,
) {

  firebase.database().ref('classes/06AM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/07AM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  console.log("Added precio");
  firebase.database().ref('classes/08AM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/09AM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/10AM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/11AM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/12PM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/13PM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/14PM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/15PM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/16PM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/17PM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/18PM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/19PM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/20PM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/21PM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
  firebase.database().ref('classes/22PM/' + dayOfWeek + '/').update({
    miembros: precioClass,
  });
};

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
  monday07StatusTag,
  tuesday07StatusTag,
  wed07StatusTag,
  thurs07StatusTag,
  fri07StatusTag,
  sat07StatusTag,
  sun07StatusTag,
  monday07Stado,
  tuesday07Stado,
  wed07Stado,
  thurs07Stado,
  fri07Stado,
  sat07Stado,
  sun07Stado,
  monday07Capacity,
  tuesday07Capacity,
  wed07Capacity,
  thurs07Capacity,
  fri07Capacity,
  sat07Capacity,
  sun07Capacity,
  monday07MembersNumbers,
  tuesday07MembersNumbers,
  wed07MembersNumbers,
  thurs07MembersNumbers,
  fri07MembersNumbers,
  sat07MembersNumbers,
  sun07MembersNumbers,
  monday07Precio,
  tuesday07Precio,
  wed07Precio,
  thurs07Precio,
  fri07Precio,
  sat07Precio,
  sun07Precio,) {
  var tbody = document.getElementById('tbody1');
  var trow = document.createElement('tr');
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

  var stadosMon;
  var percentagesMon;
  var styleMon;

  if (monday07MembersNumbers === monday07Capacity) {
    stadosMon = "Clase Llena";
    monday07Stado = "Clase Llena";
    styleMon = "rgb(39,57,82)";
  } else if (monday07MembersNumbers !== monday07Capacity) {
    stadosMon = "Clase Disponible";
    monday07Stado = "Clase Disponible";
    styleMon = "white";
  }

  // var decreased = decrement_alphanumeric_str(mondayMembers);
  percentagesMon = (monday07MembersNumbers / monday07Capacity) * 100;

  firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/monday').update({
    percentage: percentagesMon,
    stado: stadosMon,
  }).then(() => {
    // console.log("Updated Stado")
  });

  var stadosTue;
  var percentagesTue;
  var styleTues;

  if (tuesday07MembersNumbers === tuesday07Capacity) {
    stadosTue = "Clase Llena";
    tuesday07Stado = "Clase Llena";
    styleTues = "rgb(39,57,82)";
  } else if (tuesday07MembersNumbers !== tuesday07Capacity) {
    stadosTue = "Clase Disponible";
    tuesday07Stado = "Clase Disponible";
    styleTues = "white";
  }

  // var decreased = decrement_alphanumeric_str(mondayMembers);
  percentagesTue = (tuesday07MembersNumbers / tuesday07Capacity) * 100;

  firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/tuesday').update({
    percentage: percentagesTue,
    stado: stadosTue,
  }).then(() => {
    // console.log("Updated Stado")
  });

  var stadosWed;
  var percentagesWed;
  var styleWed;

  if (wed07MembersNumbers === wed07Capacity) {
    stadosWed = "Clase Llena";
    wed07Stado = "Clase Llena";
    styleWed = "rgb(39,57,82)";
  } else if (wed07MembersNumbers !== wed07Capacity) {
    stadosWed = "Clase Disponible";
    wed07Stado = "Clase Disponible";
    styleWed = "white";
  }

  // var decreased = decrement_alphanumeric_str(mondayMembers);
  percentagesWed = (wed07MembersNumbers / wed07Capacity) * 100;

  firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/wednesday').update({
    percentage: percentagesWed,
    stado: stadosWed,
  }).then(() => {
    // console.log("Updated Stado")
  });

  var stadosThurs;
  var percentagesThurs;
  var styleThurs;

  if (thurs07MembersNumbers === thurs07Capacity) {
    stadosThurs = "Clase Llena";
    thurs07Stado = "Clase Llena";
    styleThurs = "rgb(39,57,82)";
  } else if (thurs07MembersNumbers !== thurs07Capacity) {
    stadosThurs = "Clase Disponible";
    thurs07Stado = "Clase Disponible";
    styleThurs = "white";
  }

  // var decreased = decrement_alphanumeric_str(mondayMembers);
  percentagesThurs = (thurs07MembersNumbers / thurs07Capacity) * 100;

  firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/thursday').update({
    percentage: percentagesThurs,
    stado: stadosThurs,
  }).then(() => {
    // console.log("Updated Stado")
  });

  // Fridays
  var statoId = document.querySelector('#stato-desc');
  var stadosFri;
  var percentagesFri;
  var styleFri;

  if (fri07MembersNumbers === fri07Capacity) {
    stadosFri = "Clase Llena";
    fri07Stado = "Clase Llena";
    styleFri = "rgb(39,57,82)";
  } else if (fri07MembersNumbers !== fri07Capacity) {
    stadosFri = "Clase Disponible";
    fri07Stado = "Clase Disponible";
    styleFri = "white";
  }

  // var decreased = decrement_alphanumeric_str(mondayMembers);
  percentagesFri = (fri07MembersNumbers / fri07Capacity) * 100;

  firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/friday').update({
    percentage: percentagesFri,
    stado: stadosFri,
  }).then(() => {
    // const html = `
    //     <div>${stadosFri}</div>
    //   `;
    // statoId.innerHTML = html;
    // console.log("Succesfully sent email");
    // console.log("Updated Stado")
  });

  var stadosSat;
  var percentagesSat;
  var styleSat;

  if (sat07MembersNumbers === sat07Capacity) {
    stadosSat = "Clase Llena";
    sat07Stado = "Clase Llena";
    styleSat = "rgb(39,57,82)";
  } else if (sat07MembersNumbers !== sat07Capacity) {
    stadosSat = "Clase Disponible";
    sat07Stado = "Clase Disponible";
    styleSat = "white";
  }

  // var decreased = decrement_alphanumeric_str(mondayMembers);
  percentagesSat = (sat07MembersNumbers / sat07Capacity) * 100;

  firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/saturday').update({
    percentage: percentagesSat,
    stado: stadosSat,
  }).then(() => {
    // console.log("Updated Stado")
  });

  var stadosSun;
  var percentagesSun;
  var styleSun;

  if (sun07MembersNumbers === sun07Capacity) {
    stadosSun = "Cancha Llena";
    sun07Stado = "Cancha Llena";
    styleSun = "rgb(39,57,82)";
  } else if (sun07MembersNumbers !== sun07Capacity) {
    stadosSun = "Cancha Disponible";
    sun07Stado = "Cancha Disponible";
    styleSun = "white";
  }

  // var decreased = decrement_alphanumeric_str(mondayMembers);
  percentagesSun = (sun07MembersNumbers / sun07Capacity) * 100;

  firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/sunday').update({
    percentage: percentagesSun,
    stado: stadosSun,
  }).then(() => {
    // console.log('classes/' + AMTimeNumber + rowCounter + AMTime + '/sunday: ' + stadosSun);
  });

  // var registerRefRemoved = firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/patrons');
  // registerRefRemoved.on('child_removed', (data) => {
  //   firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/monday').update({
  //     miembros: decreased,
  //   }).then(() => {
  //     console.log("Removed Miembros")
  //   });
  // });

  // var myUserId = firebase.auth().currentUser.uid;
  // var topUserPostsRef = firebase.database().ref('classes/' + AMTimeNumber + rowCounter + AMTime + '/sunday/' + myUserId + '/firstName/');
  // console.log(topUserPostsRef);

  td0.innerHTML = `<td class="row_data_time column100 column1" id = "time_id" data-column="column1" row_id_time="` + row_id + `" style ="padding-left: 3rem" col_name_time="Hora" ">` + counterStart++ + `:00 - ` + counterEnd++ + `:00</td>`
  td1.innerHTML = '<td class="column100 column2" row_id_register="' + row_id + '" data-column="column2"><span class = "show_me" style="color: ' + styleMon + '"><a class="row_data_register btn_click" row_members ="' + monday07MembersNumbers + '" row_day ="' + 1 + '" row_num ="' + idCounter + '" edit_type="click" col_name_register_user="' + AMTimeNumber + rowCounter + AMTime + '/monday" col_name_status = "' + monday07Stado + '" col_name_register="Description" "><h5>' + monday07StatusTag + '</h5></br></br>Precio: ' + monday07Precio + 'Gs</br>' + monday07Stado + '</a></span></td>';
  td2.innerHTML = '<td class="column100 column3" row_id_register="' + row_id + '" data-column="column3"><span class = "show_me" style="color: ' + styleTues + '"><a class="row_data_register btn_click" row_members ="' + tuesday07MembersNumbers + '" row_day ="' + 2 + '" row_num ="' + idCounter + '" edit_type="click" col_name_register_user="' + AMTimeNumber + rowCounter + AMTime + '/tuesday" col_name_status = "' + tuesday07Stado + '" col_name_register="Description" "><h5>' + tuesday07StatusTag + '</h5></br></br>Precio: ' + tuesday07Precio + 'Gs</br>' + tuesday07Stado + '</a></span></td>';
  td3.innerHTML = '<td class="column100 column4" row_id_register="' + row_id + '" data-column="column4"><span class = "show_me" style="color: ' + styleWed + '"><a class="row_data_register btn_click" row_members ="' + wed07MembersNumbers + '" row_day ="' + 3 + '" row_num ="' + idCounter + '" edit_type="click" col_name_register_user="' + AMTimeNumber + rowCounter + AMTime + '/wednesday" col_name_status = "' + wed07Stado + '" col_name_register="Description" "><h5>' + wed07StatusTag + '</h5></br></br>Precio: ' + wed07Precio + 'Gs</br>' + wed07Stado + '</a></span></td>';
  td4.innerHTML = '<td class="column100 column5" row_id_register="' + row_id + '" data-column="column5"><span class = "show_me" style="color: ' + styleThurs + '"><a class="row_data_register btn_click" row_members ="' + thurs07MembersNumbers + '" row_day ="' + 4 + '" row_num ="' + idCounter + '" edit_type="click" col_name_register_user="' + AMTimeNumber + rowCounter + AMTime + '/thursday" col_name_status = "' + thurs07Stado + '" col_name_register="Description" "><h5>' + thurs07StatusTag + '</h5></br></br>Precio: ' + thurs07Precio + 'Gs</br>' + thurs07Stado + '</a></span></td>';
  td5.innerHTML = '<td class="column100 column6" row_id_register="' + row_id + '" data-column="column6"><span class = "show_me" style="color: ' + styleFri + '"><a class="row_data_register btn_click" row_members ="' + fri07MembersNumbers + '" row_day ="' + 5 + '" row_num ="' + idCounter + '" edit_type="click" col_name_register_user="' + AMTimeNumber + rowCounter + AMTime + '/friday" col_name_status = "' + fri07Stado + '" col_name_register="Description" "><h5>' + fri07StatusTag + '</h5></br></br>Precio: ' + fri07Precio + 'Gs</br><span id = "stato-desc">' + fri07Stado + '</span></a></span></td>';
  td6.innerHTML = '<td class="column100 column7" row_id_register="' + row_id + '" data-column="column7"><span class = "show_me" style="color: ' + styleSat + '"><a class="row_data_register btn_click" row_members ="' + sat07MembersNumbers + '" row_day ="' + 6 + '" row_num ="' + idCounter + '" edit_type="click" col_name_register_user="' + AMTimeNumber + rowCounter + AMTime + '/saturday" col_name_status = "' + sat07Stado + '" col_name_register="Description" "><h5>' + sat07StatusTag + '</h5></br></br>Precio: ' + sat07Precio + 'Gs</br>' + sat07Stado + '</a></span></td>';
  td7.innerHTML = '<td class="column100 column8" row_id_register="' + row_id + '" data-column="column8"><span class = "show_me" style="color: ' + styleSun + '"><a class="row_data_register btn_click" row_members ="' + sun07MembersNumbers + '" row_day ="' + 7 + '" row_num ="' + idCounter + '" edit_type="click" col_name_register_user="' + AMTimeNumber + rowCounter + AMTime + '/sunday" col_name_status = "' + sun07Stado + '" col_name_register="Description" "><h5>' + sun07StatusTag + '</h5></br></br>Precio: ' + sun07Precio + 'Gs</br>' + sun07Stado + '</a></span></td>';

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

// window.onload = function() {
//   //considering there aren't any hashes in the urls already
//   if(!window.location.hash) {
//       //setting window location
//       window.location = window.location + '#loaded';
//       //using reload() method to reload web page
//       window.location.reload();
//   }
// }
