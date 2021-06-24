const registerUser = document.querySelector('.usersNameRegister');
var claseRegistrada;
var hora;
var fecha;

// setInterval(function() {
// 	window.location.reload();
//   }, 60000); 

(function ($) {
	"use strict";

	$('.column100').on('mouseover', function () {
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable') + "";
		var column = $(this).data('column') + "";

		$(table2).find("." + column).addClass('hov-column-' + verTable);
		$(table1).find(".row100.head ." + column).addClass('hov-column-head-' + verTable);
	});

	$('.column100').on('mouseout', function () {
		var table1 = $(this).parent().parent().parent();
		var table2 = $(this).parent().parent();
		var verTable = $(table1).data('vertable') + "";
		var column = $(this).data('column') + "";

		$(table2).find("." + column).removeClass('hov-column-' + verTable);
		$(table1).find(".row100.head ." + column).removeClass('hov-column-head-' + verTable);
	});
	var valueForFirebase;
	var statusDescription;
	var memberCount = 0;

	$(document).on('click', '.btn_click', function () {
		var modal = document.querySelector(".modal_book");

		var row_id_register = $(this).closest('tr').attr('row_id_register');

		//--->get row data > end
		var row_div_register = $(this)
			// .removeClass('bg-warning') //add bg css
			.css('padding', '')

		var col_name_register = row_div_register.attr('col_name_register');
		var col_val_register = row_div_register.html();

		var col_val_register_user = row_div_register.html();
		var col_name_register_user = $(this).closest('a').attr('col_name_register_user');
		claseRegistrada = col_val_register;

		statusDescription = $(this).closest('a').attr('col_name_status');
		console.log(statusDescription);

		var arr_register = {};
		arr_register[col_name_register] = col_val_register;

		// var time_id;
		row_div_register.find('.row_numer').each(function (index, val) {
			var col_name_time = $(this).attr('row_num');
			var col_val = $(this).html();
			arr_register[col_name_time] = col_val;
			console.log(col_val);

		});

		var col_name_time = $(this).attr('row_num');
		memberCount = $(this).closest('a').attr('row_members');
		var col_name_time_user = $(this).closest('a').attr('row_num');
		var col_name_day_user = $(this).closest('a').attr('row_day');
		var col_val = $(col_name_time_user).html();

		console.log("Member count: " + memberCount);
		// Get time
		console.log(col_name_time_user);
		var time_id = document.getElementById("tbody1").rows[col_name_time_user].cells["0"].innerText;
		// var day_id = document.getElementById("tbody1").rows[0].cells[col_name_time_user].innerText;

		var index = $(this).index();
		var table = $(this).closest('table');
		console.log(table.find('th').eq(col_name_day_user).text());
		var day_value = table.find('th').eq(col_name_day_user).text();

		fecha = day_value;
		hora = time_id;

		//use the "arr"	object for your ajax call
		$.extend(arr_register, { row_id_register: row_id_register });

		if (statusDescription === "Clase Disponible" || statusDescription === "Cancha Disponible") {
			modal.classList.toggle("show-modal");

			//out put to show
			// $('.details').html('<pre>' + '<div>Hora: ' + time_id +'</div>' + "</br>" + JSON.stringify(arr_register, null, 1) + '</pre>')
			$('.details').html('<div class = "container"></br>' + '<div>Dia: ' + day_value + '</br>Hora: ' + time_id + '</div>' + "" + "Descripción: " + col_val_register + '</div></br>')

			console.log(col_name_register_user);
			// updateTheDatabase(col_val_register_user, col_name_register_user);
			valueForFirebase = col_name_register_user;
		} else {
			alert("Clase esta llena!")
		}
	});

	$(document).on('click', '.close-button', function () {
		var modal = document.querySelector(".modal_book");
		modal.classList.toggle("show-modal");
		valueForFirebase = "";
	});
	// memberCount.replace(/\d+$/, function(n){ return ++n });
	// function updateTheDatabase(col_val_register, col_name_register_user) {
	$(document).on('click', '.confirm-register', function (event) {
		event.preventDefault();
		// var col_val_registers = col_val_register;
		// var col_name_registers = col_name_register_user;

		var userFirstName = document.querySelector(".firstName").textContent;
		var userLastName = document.querySelector(".lastName").textContent;
		var usersEmails = usersEmail;
		var userPhone = usersPhone;

		var incremented = increment_alphanumeric_str(memberCount);
		// var decreased = decrement_alphanumeric_str(memberCount);
		// "url2"

		// console.log("Registered at " + col_name_registers);
		console.log("Registered at " + valueForFirebase);
		var time = new Date();
		console.log("Time Registered at " + time);
		time = time.toString();
		// var database = firebase.database().ref('classes/' + col_name_registers + '/patrons');
		var database = firebase.database().ref('classes/' + valueForFirebase + '/patrons');
		var newUserRegisterRef = database.push();
		newUserRegisterRef.set({
			timeRegistered: time,
			firstName: userFirstName,
			lastName: userLastName,
			email: usersEmails,
			phone: userPhone,
		});

		var registerRef = firebase.database().ref('classes/' + valueForFirebase + '/patrons');
		registerRef.on('child_added', (data) => {
			firebase.database().ref('classes/' + valueForFirebase + '/').update({
				miembros: incremented,
			}).then(() => {
				console.log("Added Miembros")
			});
		});

		writeUserRegistration();
		sendEmailRegister(time);

		// var registerRefRemoved = firebase.database().ref('classes/' + valueForFirebase + '/patrons');
		// registerRefRemoved.on('child_removed', (data) => {
		// 	firebase.database().ref('classes/' + valueForFirebase + '/').update({
		// 		miembros: decreased,
		// 	}).then(() => {
		// 		console.log("Removed Miembros")
		// 	});
		// });
	});



	// $(document).ready(function(){    
	// 	//Check if the current URL contains '# or hash'
	// 	if(document.URL.indexOf("#")==-1){
	// 		// Set the URL to whatever it was plus "#loaded".
	// 		url = document.URL+"#loaded";
	// 		location = "#loaded";
	// 		//Reload the page using reload() method
	// 		location.reload(true);
	// 	}
	// });

})(jQuery);

var usersEmail;
var usersFirstName;
var usersLastName;
var usersPhone;
const setupUIRegister = (user) => {
	if (user) {
		// account info
		db.collection('users').doc(user.uid).get().then((doc) => {
			const html = `
		  <div>Email: ${doc.data().userEmail}</div>
		  <div>Nombre: ${doc.data().firstName}</div>
		  <div>Apellido: ${doc.data().lastName}</div>
		  <div>Numero Celular: ${doc.data().userPhone}</div>
		`;
			usersEmail = doc.data().userEmail;
			usersFirstName = doc.data().firstName;
			usersLastName = doc.data().lastName;
			usersPhone = doc.data().userPhone;
			registerUser.innerHTML = html;
			// const htmlName = `
			// <div>Bienvenido ${doc.data().firstName} ${doc.data().lastName}</div>
			// `;
			// welcomeUser.innerHTML = htmlName;
		});
		// toggle user UI elements
		loggedInLinks.forEach(item => item.style.display = 'block');
		loggedOutLinks.forEach(item => item.style.display = 'none');
	} else {
		// clear account info
		registerUser.innerHTML = '';
		// toggle user elements
		registerUser.innerHTML = '<h5 class="center-align">Inicia sesion o crea tu cuenta para registrar</h5>';
		loggedInLinks.forEach(item => item.style.display = 'none');
		loggedOutLinks.forEach(item => item.style.display = 'block');
	}
};

const getUserName = (user) => {
	if (user) {
		db.collection('users').doc(user.uid).get().then((doc) => {
			const html = `
				<div>${doc.data().firstName}</div>
			`;
			return html;
			// return doc.data().user.firstName; 
			// + " " + doc.data().lastName;
		});
	}
};

function sendEmailRegister(time) {
	Email.send({
		Host: "smtp.gmail.com",
		Username: 'baumannkev@gmail.com',
		Password: "aipodisikqqzckav",
		To: usersEmail,
		From: "info@baumanntennis.com",
		Subject: `Bienvenido a Baumann Tennis`,
		Body: `<p>Gracias por inscribirte ${usersFirstName} ${usersLastName}!</p></br>
		<div style="text-align:center">
			<h2 style="text-align:center">Detalles:</h2></br>
			<div><h3 style="text-align:center">Inscribsion: </h3><h4>${claseRegistrada}</h4></div>
			<div><h3 style="text-align:center">Hora: </h3>${hora}</p></div>
			<div><h3 style="text-align:center">Fecha: </h3><p>${fecha}</p></div>
			<div><h3 style="text-align:center">Hora de registracion: </h3><p>${time}</p></div>
			<a style="text-align:center" href = "https://baumanntennis.com"><b>Baumann Tennis<b></a>
			<div class="col-md-5 order-md-1" style="text-align:center">
				<img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="250"
					height="250"
					src="https://firebasestorage.googleapis.com/v0/b/baumanntennis-af590.appspot.com/o/pictures%2FIcons%2FBAUMANN%20TENNIS.png?alt=media&token=ed3487eb-d643-4b5d-b8d3-bdf18d768a1f"
					role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
				<title>Placeholder</title>
				<rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em"></text>
				</img>
			</div>
		</div>`,
	}).then(() => window.location.href = "confirmation.html");
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

// function writeUserRegistration() {
// 	const data = {
// 		class: {
// 			hora: '09:00-10:00',
// 			fecha: 'Lunes',
// 			precio: '75,000',
// 			description: 'Clase Inicial',
// 		}
// 	}
// 	const res = db.collection('users').doc(cred.user.uid).set(data);
// }
function writeUserRegistration() {
	var num = 2;
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			db.collection("users").doc(user.uid).collection("myClasses").doc("class" + num).set({
					// Clase: {
						clase: claseRegistrada,
						hora: hora,
						fecha: fecha,
					// }, 
			}, { merge: true }).then(function () {
				console.log("Data successfully saved.");
			})
		}
	});
}

// function decrement_alphanumeric_str(str) {
// 	var numeric = str.match(/\d+$/)[0];
// 	var prefix = str.split(numeric)[0];

// 	function increment_string_num(str) {
// 		var inc = String(parseInt(str) - 1);
// 		return str.slice(0, str.length - inc.length) + inc;
// 	}

// 	return prefix + increment_string_num(numeric);
// }
