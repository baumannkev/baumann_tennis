const classesRegister = document.querySelector('.listsClasses');
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const welcomeUser = document.querySelector('.usersName');

const setupRegisterTimes = (user) => {
  if (user) {
    var classesNumber;
    db.collection('users').doc(user.uid).get().then((doc) => {
      if (doc.exists) {
        classesNumber = doc.data().clasesRegistered;
        var numForLoop = 1;
        console.log("Classes: ", classesNumber);
        if (classesNumber === "0") {
          document.getElementById('listssClasses').innerHTML += '<div><a href="inscribite.html">Inscribite</a> hoy para ver mas clases!</div>';
          document.getElementById('listsToClasses').innerHTML += '<div><a href="inscribite.html">Inscribite</a> hoy para ver mas clases!</div>';
        }
        for (var i = 1; i <= classesNumber; i++) {
          db.collection("users").doc(user.uid).collection("myClasses").doc("class" + i).get().then((doc) => {
            var today = new Date();
            var fechaFromDate = new Date(doc.data().to);
            console.log("Today: ", today.getTime())
            console.log("Fecha: ", fechaFromDate.getTime())

            moment.locale("es");
            var fromDate = moment(doc.data().from).format('ll');
            var toDate = moment(doc.data().to).format('ll');
            var timeOfReg = moment(doc.data().timeReg).format('ll')

            if (fechaFromDate.getTime() > today.getTime()) {
              document.getElementById('listssClasses').innerHTML += `<div class="card border-success mb-4 shadow-sm" style="width: 18rem;"><div class="card-header py-3"><h4 class="my-0 fw-normal">Mi Clase #` + numForLoop + `</h4></div><div class="card-body listsClasses"><p class="card-text"></p><ul class="d-grid list-unstyled list-group list-group-item-action list-group-flush"><li class="list-group-item">Clase: ${doc.data().clase}</li><li class="list-group-item">Hora: <span class ="">${doc.data().hora}</span></li><li class="list-group-item">Fecha: <span class ="">${doc.data().fecha}</span></li><li class="list-group-item">Desde: <span class ="">${fromDate}</span></li><li class="list-group-item">Hasta: <span class ="">${toDate}</span></li><li class="list-group-item">Precio Total: <span class ="">${doc.data().totalPrice}</span></li><li class="list-group-item">Hora de Registracion: <span class ="">${timeOfReg}</span></li></ul></div></div>`;
              numForLoop++;
            } else {
              document.getElementById('listsToClasses').innerHTML += `<div class="card border-danger" style="width: 18rem;"><div class="card-header">Mi Clase #` + numForLoop + `</div><div class="card-body listsClasses"><p class="card-text"></p><ul class="list-group list-group-flush"><li class="list-group-item">Clase: ${doc.data().clase}</li><li class="list-group-item">Hora: <span class ="">${doc.data().hora}</span></li><li class="list-group-item">Fecha: <span class ="">${doc.data().fecha}</span></li><li class="list-group-item">Desde: <span class ="">${fromDate}</span></li><li class="list-group-item">Hasta: <span class ="">${toDate}</span></li><li class="list-group-item">Precio Total: <span class ="">${doc.data().totalPrice}</span></li><li class="list-group-item">Hora de Registracion: <span class ="">${timeOfReg}</span></li></ul></div></div>`;
              numForLoop++;
            }
          });
          // toggle user UI elements
          loggedInLinks.forEach(item => item.style.display = 'block');
          loggedOutLinks.forEach(item => item.style.display = 'none');
        }
      }
      // }),
    }, { merge: true }).then(function () {
      console.log("Data successfully displayed.");
    })

  } else {
    // clear account info
    classesRegister.innerHTML = '';
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};

window.setupUI = (user) => {
  if (user) {
    // account info
    db.collection('users').doc(user.uid).get().then((doc) => {
      const html = `
          <div>Iniciado como: ${user.email}</div>
          <div>Nombre: <span class ="firstName">${doc.data().firstName}</span></div>
          <div>Apellido: <span class ="lastName">${doc.data().lastName}</span></div>
          <div>Numero Celular: ${doc.data().userPhone}</div>
        `;
      accountDetails.innerHTML = html;
      const htmlName = `
        <div style="color: rgb(39,57,82);"><h1 class ="display-6">Bienvenido ${doc.data().firstName} ${doc.data().lastName}</h1></div>
        `;
      welcomeUser.innerHTML = htmlName;
    });
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // clear account info
    accountDetails.innerHTML = '';
    // toggle user elements
    welcomeUser.innerHTML = '<h5 class="center-align">Inicia sesion o crea tu cuenta para registrar</h5>';
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};
