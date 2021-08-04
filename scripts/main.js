const registerUser = document.querySelector('.usersNameRegister');
var claseRegistrada;
var hora;
var fecha;
var fromDate;
var toDate;
var price;
var valueToDelete;
var dayOfWeek;
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
	// var dayOfWeek;
	var statusDescription;
	var memberCount = "0";
	var datesFrom;
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

		console.log("Day: " + day_value);
		fecha = day_value;
		console.log("Day: " + fecha);
		hora = time_id;
		dayOfWeek = day_value;

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

	$(document).on('click', '.close-button', function (event) {
		event.preventDefault();
		var modal = document.querySelector(".modal_book");
		modal.classList.toggle("show-modal");
		valueForFirebase = "";
		dayOfWeek = "";
		datesFrom = "";
		// document.querySelector('#select1').textContent = "";
		// document.querySelector('#select1').value = 0;​​​​​​​​​
		document.querySelector('#days').textContent = "";
		document.querySelector('#to-date').textContent = "";
		document.querySelector('#total-price').textContent = "";
	});
	$(document).on('click', '.delete-member', function (event) {
		event.preventDefault();

		// console.log("Member Num: " + memberCount);
		// var decreased = decrement_alphanumeric_str(memberCount);
		// console.log("Decreased Num: " + decreased);

		var col_name_delete_user = $(this).closest('dl').attr('col_name_delete_user');

		var row_patron_num = $(this).closest('dl').attr('row_patron_num');

		var row_members_delete = $(this).closest('dl').attr('row_members_delete');

		console.log("Date: " + col_name_delete_user);
		valueToDelete = col_name_delete_user;

		// var database = firebase.database().ref('classes/' + valueToDelete + '/patrons');
		var database = firebase.database().ref('classes/06AM/monday/patrons/patron' + row_patron_num + '');
		// firebase.database().ref('classes/' + valueToDelete + '/patrons').once('value', (snapshot) => {
		//   snapshot.forEach((childSnapshot) => {
		// var deleteMemberRef = database.remove();
		database.remove();
		console.log("Number Delete: " + row_patron_num)
		console.log("Deleted");

		// var decreased = decrement_alphanumeric_str(memberCount);
		var decreased = decrement_alphanumeric_str(row_members_delete);

		var databaseDelete = firebase.database().ref('classes/06AM/monday/');
		// var registerRefRemoved = firebase.database().ref('classes/' +  + '/patrons');
		// registerRefRemoved.on('child_removed', (data) => {
		// firebase.database().ref('classes/' + valueForFirebase + 'patrons/').update({
		databaseDelete.update({
			miembros: decreased,
		}).then(() => {
			console.log("Removed Miembros")
		});
		// });

		// var registerRefRemoved = firebase.database().ref('classes/' + valueForFirebase + '/patrons');
		// registerRefRemoved.on('child_removed', (data) => {
		// 	firebase.database().ref('classes/' + valueForFirebase + '/').update({
		// 		miembros: decreased,
		// 	}).then(() => {
		// 		console.log("Removed Miembros")
		// 	});
		// });

		// deleteMemberRef.remove({
		//   firstName: "",
		//   lastName: "",
		//   email: "",
		//   from: "",
		//   to: "",
		//   timeRegistered: "",
		//   total: "",
		//   phone: "",
		// }, (error) => {
		//   if (error) {
		// 	// The write failed...
		//   } else {
		// 	// Data saved successfully!
		//   }
		// });
		//   });
		// });

	});
	// memberCount.replace(/\d+$/, function(n){ return ++n });
	// function updateTheDatabase(col_val_register, col_name_register_user) {
	$(document).on('click', '.confirm-register', function (event) {
		event.preventDefault();
		// var col_val_registers = col_val_register;
		// var col_name_registers = col_name_register_user;

		console.log("Day: " + dayOfWeek);
		var userFirstName = document.querySelector(".firstName").textContent;
		var userLastName = document.querySelector(".lastName").textContent;
		var usersEmails = usersEmail;
		var userPhone = usersPhone;

		fromDate = document.querySelector("#days").textContent;
		toDate = document.querySelector("#to-date").textContent;
		var totalPrice = document.querySelector("#total-price").textContent;

		var incremented = increment_alphanumeric_str(memberCount);
		// var decreased = decrement_alphanumeric_str()
		// var decreased = decrement_alphanumeric_str(memberCount);
		// "url2"

		// console.log("Registered at " + col_name_registers);
		console.log("Registered at " + valueForFirebase);
		// var time = new Date();
		let current = new Date();
		let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
		let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
		let dateTime = cDate + ' ' + cTime;
		console.log(dateTime);
		var time = dateTime;
		console.log("Time Registered at " + time);
		time = time.toString();

		// var patronNum = 2;
		// var database = firebase.database().ref('classes/' + col_name_registers + '/patrons');
		var database = firebase.database().ref('classes/' + valueForFirebase + '/patrons/patron' + incremented + '');
		var newUserRegisterRef = database.push();
		newUserRegisterRef.set({
			timeRegistered: time,
			firstName: userFirstName,
			lastName: userLastName,
			email: usersEmails,
			phone: userPhone,
			from: fromDate,
			to: toDate,
			total: totalPrice,
		});
		// patronNum++;

		var registerRef = firebase.database().ref('classes/' + valueForFirebase + '/patrons');
		registerRef.on('child_added', (data) => {
			firebase.database().ref('classes/' + valueForFirebase + '/').update({
				miembros: incremented,
			}).then(() => {
				console.log("Added Miembros")
			});
		});


		// var registerRefRemoved = firebase.database().ref('classes/' + valueForFirebase + '/patrons');
		// registerRefRemoved.on('child_removed', (data) => {
		// 	firebase.database().ref('classes/' + valueForFirebase + '/').update({
		// 		miembros: decreased,
		// 	}).then(() => {
		// 		console.log("Removed Miembros")
		// 	});
		// });

		writeUserRegistration(time);
		sendEmailRegister(time);
		// sendEmailAdmin(time);

		// var registerRefRemoved = firebase.database().ref('classes/' + valueForFirebase + '/patrons');
		// registerRefRemoved.on('child_removed', (data) => {
		// 	firebase.database().ref('classes/' + valueForFirebase + '/').update({
		// 		miembros: decreased,
		// 	}).then(() => {
		// 		console.log("Removed Miembros")
		// 	});
		// });
	});

	// $(document).on('click', '.confirm-weeks', function (event) {

	// 	event.preventDefault();
	// 	var weeks;

	// 	console.log("Days: " + closest_tuesday_or_friday(dayOfWeek));
	// 	datesFrom = closest_tuesday_or_friday(dayOfWeek);
	// 	document.querySelector('#days').textContent = datesFrom;

	// 	// var output = document.querySelector('#select1');
	// 	var selectElement = getOption();
	// 	// selectElement =
	// 		// output.options[output.selectedIndex].value;

	// 	if (selectElement == "1") {
	// 		weeks = 0;
	// 		price = "75.000 G.s";
	// 	}
	// 	else if (selectElement == "2") {
	// 		weeks = 7;
	// 		price = "150.000 G.s";
	// 	}
	// 	else if (selectElement == "3") {
	// 		weeks = 14;
	// 		price = "225.000 G.s";
	// 	}
	// 	else if (selectElement == "4") {
	// 		weeks = 21;
	// 		price = "300.000 G.s";
	// 	}
	// 	else if (selectElement == "5") {
	// 		weeks = 28;
	// 		price = "375.000 G.s";
	// 	}
	// 	else if (selectElement == "6") {
	// 		weeks = 35;
	// 		price = "450.000 G.s";
	// 	}
	// 	else if (selectElement == "7") {
	// 		weeks = 42;
	// 		price = "525.000 G.s";
	// 	}
	// 	else if (selectElement == "8") {
	// 		weeks = 49;
	// 		price = "600.000 G.s";
	// 	}

	// 	var result = new Date(datesFrom);
	// 	result.setDate(result.getDate() + weeks);
	// 	var formattedDate = result.getFullYear() + "/" + (result.getMonth() + 1) + "/" + result.getDate();

	// 	document.querySelector('#to-date').textContent = formattedDate;
	// 	document.querySelector('#total-price').textContent = price;
	// });

	$(document).ready(function () {


		var memberCountDelete = $(this).closest('dl').attr('row_members_delete');

		var col_name_delete_user = $(this).closest('dl').attr('col_name_delete_user');


		console.log("Member Num: " + memberCountDelete);
		var decreased = decrement_alphanumeric_str(memberCount);
		console.log("Decreased Num: " + decreased);

		console.log("Date: " + col_name_delete_user);
		valueToDelete = col_name_delete_user;

		// var registerRefRemoved = firebase.database().ref('classes/' + valueForFirebase + '/patrons');
		var registerRefRemoved = firebase.database().ref('classes/' + + '/patrons');
		registerRefRemoved.on('child_removed', (data) => {
			firebase.database().ref('classes/' + valueForFirebase + '/').update({
				miembros: decreased,
			}).then(() => {
				console.log("Removed Miembros")
			});
		});


	});

})(jQuery);


function getDatesAndPrice() {

	var weeks;

	console.log("Days: " + closest_tuesday_or_friday(dayOfWeek));
	datesFrom = closest_tuesday_or_friday(dayOfWeek);
	document.querySelector('#days').textContent = datesFrom;

	var output = document.querySelector('#select1');
	// var selectElement = getOption();
	selectElement =
		output.options[output.selectedIndex].value;

	if (selectElement == "1") {
		weeks = 21;
		price = "300.000 ₲";
	}
	else if (selectElement == "2") {
		weeks = 49;
		price = "600.000 ₲";
	}
	else if (selectElement == "3") {
		weeks = 77;
		price = "900.000 ₲";
	}
	else if (selectElement == "4") {
		weeks = 105;
		price = "1.200.000 ₲";
	}
	else if (selectElement == "5") {
		weeks = 133;
		price = "1.500.000 ₲";
	}
	else if (selectElement == "6") {
		weeks = 161;
		price = "1.800.000 ₲";
	}
	else if (selectElement == "7") {
		weeks = 189;
		price = "2.100.000 ₲";
	}
	else if (selectElement == "8") {
		weeks = 217;
		price = "2.400.000 ₲";
	}

	var result = new Date(datesFrom);
	result.setDate(result.getDate() + weeks);
	var formattedDate = result.getFullYear() + "/" + (result.getMonth() + 1) + "/" + result.getDate();

	document.querySelector('#to-date').textContent = formattedDate;
	document.querySelector('#total-price').textContent = price;

}

var usersEmail;
var usersFirstName;
var usersLastName;
var usersPhone;

window.setupUIRegister = (user) => {
// const setupUIRegister = (user) => {
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

function writeUserRegistration(time) {
	firebase.auth().onAuthStateChanged(function (user) {

		// var num = getClassesRegistered(user);
		// console.log("Classes Num: " , num);
		// var incremNum = increment_alphanumeric_str(num);
		if (user) {
			var classesNumber;
			var incremNum;
			db.collection('users').doc(user.uid).get().then((doc) => {
				if (doc.exists) {
					// console.log("Classes Num: " , doc.data().clasesRegistered);
					classesNumber = doc.data().clasesRegistered;
					console.log("Clases Num: ", classesNumber);
					incremNum = increment_alphanumeric_str(classesNumber);
					console.log("Increm Num: ", incremNum);

					db.collection("users").doc(user.uid).set({
						clasesRegistered: incremNum,
					}, { merge: true }).then(function () {
						console.log("Data successfully saved.");
					}),

						db.collection("users").doc(user.uid).collection("myClasses").doc("class" + incremNum).set({
							// Clase: {
							clase: claseRegistrada,
							hora: hora,
							fecha: fecha,
							timeReg: time,
							from: fromDate,
							to: toDate,
							totalPrice: price,
							// }, 
						}, { merge: true }).then(function () {
							console.log("Data successfully saved.");
						})
					// return doc.data().clasesRegistered;
					// return doc.clas
				} else {
					console.log("Error getting document");
					// return doc.data().clasesRegistered;
				}
				// }),
			}, { merge: true }).then(function () {
				console.log("Data successfully saved.");
			})
		}
	});
};

function getOption() {
	selectElement = document.querySelector('#select1');

	output =
		selectElement.options[selectElement.selectedIndex].value;

	document.querySelector('#weeks').textContent = output;
}

function closest_tuesday_or_friday(dayOfTheWeek) {
	var today = new Date(), monday, tuesday, wednesday, thursday, friday, saturday, sunday, day, closest;

	if (dayOfTheWeek == "Lunes") {
		if (today.getDay() == 1) {
			if (today.getHours() < 0001) {
				return today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
			} else {
				day = today.getDay();
				monday = today.getDate() - day + (day === 0 ? -6 : 1);
				monday += 7;
				closest = new Date(today.setDate(monday));
			}
		}
		else {
			day = today.getDay();
			monday = today.getDate() - day + (day === 0 ? -6 : 1);
			monday += 7;
			closest = new Date(today.setDate(monday));
		}
		return closest.getFullYear() + "/" + (closest.getMonth() + 1) + "/" + closest.getDate();
	} else if (dayOfTheWeek == "Martes") {
		if (today.getDay() == 2) {
			if (today.getHours() < 0001) {
				return today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
			} else {
				day = today.getDay();
				tuesday = today.getDate() - day + (day === 0 ? -6 : 2);
				tuesday += 7;
				closest = new Date(today.setDate(tuesday));
			}
		}
		else {
			day = today.getDay();
			tuesday = today.getDate() - day + (day === 0 ? -6 : 2);
			tuesday += 7;
			closest = new Date(today.setDate(tuesday));
		}
		return closest.getFullYear() + "/" + (closest.getMonth() + 1) + "/" + closest.getDate();
	} else if (dayOfTheWeek == "Miercoles") {
		if (today.getDay() == 3) {
			if (today.getHours() < 0001) {
				return today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
			} else {
				day = today.getDay();
				wednesday = today.getDate() - day + (day === 0 ? -6 : 3);
				wednesday += 7;
				closest = new Date(today.setDate(wednesday));
			}
		}
		else {
			day = today.getDay();
			wednesday = today.getDate() - day + (day === 0 ? -6 : 3);
			wednesday += 7;
			closest = new Date(today.setDate(wednesday));
		}
		return closest.getFullYear() + "/" + (closest.getMonth() + 1) + "/" + closest.getDate();
	} else if (dayOfTheWeek == "Jueves") {
		if (today.getDay() == 4) {
			if (today.getHours() < 0001) {
				return today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
			} else {
				day = today.getDay();
				thursday = today.getDate() - day + (day === 0 ? -6 : 4);
				thursday += 7;
				closest = new Date(today.setDate(thursday));
			}
		}
		else {
			day = today.getDay();
			thursday = today.getDate() - day + (day === 0 ? -6 : 4);
			thursday += 7;
			closest = new Date(today.setDate(thursday));
		}
		return closest.getFullYear() + "/" + (closest.getMonth() + 1) + "/" + closest.getDate();
	} else if (dayOfTheWeek == "Viernes") {
		if (today.getDay() == 5) {
			if (today.getHours() < 0001) {
				return today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
			} else {
				day = today.getDay();
				friday = today.getDate() - day + (day === 0 ? -6 : 5);
				friday += 7;
				closest = new Date(today.setDate(friday));
			}
		}
		else {
			day = today.getDay();
			friday = today.getDate() - day + (day === 0 ? -6 : 5);
			friday += 7;
			closest = new Date(today.setDate(friday));
		}
		return closest.getFullYear() + "/" + (closest.getMonth() + 1) + "/" + closest.getDate();
	} else if (dayOfTheWeek == "Sabado") {
		if (today.getDay() == 6) {
			if (today.getHours() < 0001) {
				return today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
			} else {
				day = today.getDay();
				saturday = today.getDate() - day + (day === 0 ? -6 : 6);
				saturday += 7;
				closest = new Date(today.setDate(saturday));
			}
		}
		else {
			day = today.getDay();
			saturday = today.getDate() - day + (day === 0 ? -6 : 6);
			saturday += 7;
			closest = new Date(today.setDate(saturday));
		}
		return closest.getFullYear() + "/" + (closest.getMonth() + 1) + "/" + closest.getDate();
	} else if (dayOfTheWeek == "Domingo") {
		if (today.getDay() == 7) {
			if (today.getHours() < 0001) {
				return today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
			} else {
				day = today.getDay();
				sunday = today.getDate() - day + (day === 0 ? -6 : 7);
				sunday += 7;
				closest = new Date(today.setDate(sunday));
			}
		}
		else {
			day = today.getDay();
			sunday = today.getDate() - day + (day === 0 ? -6 : 7);
			sunday += 7;
			closest = new Date(today.setDate(sunday));
		}
		return closest.getFullYear() + "/" + (closest.getMonth() + 1) + "/" + closest.getDate();
	}
}

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
			<div><h3 style="text-align:center">Desde: </h3><p>${fromDate}</p></div>
			<div><h3 style="text-align:center">Hasta: </h3><p>${toDate}</p></div>
			<div><h3 style="text-align:center">Precio Total: </h3><p>${price}</p></div>
			<div><h5 style="text-align:center">Hora de registracion: </h3><p>${time}</p></div>
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
	}).then(() => sendEmailAdmin(time));
}

function sendEmailAdmin(time) {
	Email.send({
		Host: "smtp.gmail.com",
		Username: 'baumannkev@gmail.com',
		Password: "aipodisikqqzckav",
		To: 'info@baumanntennis.com',
		From: "info@baumanntennis.com",
		Subject: `Confirmacion de Inscribsion`,
		Body: `</br>
		<div style="text-align:center">
			<h2 style="text-align:center">Detalles:</h2></br>
			<div><h3 style="text-align:center">Miembro: </h3><h4>${usersFirstName} ${usersLastName}</h4></br><p>Email: ${usersEmail}</p></br><p>Cel: ${usersPhone}</p></div>
			<div><h3 style="text-align:center">Inscribsion: </h3><h4>${claseRegistrada}</h4></div>
			<div><h3 style="text-align:center">Hora: </h3>${hora}</p></div>
			<div><h3 style="text-align:center">Fecha: </h3><p>${fecha}</p></div>
			<div><h3 style="text-align:center">Desde: </h3><p>${fromDate}</p></div>
			<div><h3 style="text-align:center">Hasta: </h3><p>${toDate}</p></div>
			<div><h3 style="text-align:center">Precio Total: </h3><p>${price}</p></div>
			<div><h5 style="text-align:center">Hora de registracion: </h3><p>${time}</p></div>
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

function decrement_alphanumeric_str(stringNum) {
	var numeric = stringNum.match(/\d+$/)[0];
	var prefix = stringNum.split(numeric)[0];

	function decrement_string_num(stringNum) {
		var inc = String(parseInt(stringNum) - 1);
		return stringNum.slice(0, stringNum.length - inc.length) + inc;
	}

	return prefix + decrement_string_num(numeric);
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


// function decrement_alphanumeric_str(str) {
// 	var numeric = str.match(/\d+$/)[0];
// 	var prefix = str.split(numeric)[0];

// 	function increment_string_num(str) {
// 		var inc = String(parseInt(str) - 1);
// 		return str.slice(0, str.length - inc.length) + inc;
// 	}

// 	return prefix + increment_string_num(numeric);
// }
