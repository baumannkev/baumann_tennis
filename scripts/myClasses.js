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
                for (var i = 1; i <= classesNumber; i++) {
                    db.collection("users").doc(user.uid).collection("myClasses").doc("class" + i).get().then((doc) => {
                        document.getElementById('listssClasses').innerHTML += `<div class="card border-success" style="width: 18rem;"><div class="card-header">Mi Clase #` + numForLoop + `</div><div class="card-body listsClasses"><p class="card-text"></p><ul class="list-group list-group-flush"><li class="list-group-item">Clase: ${doc.data().clase}</li><li class="list-group-item">Hora: <span class ="">${doc.data().hora}</span></li><li class="list-group-item">Fecha: <span class ="">${doc.data().fecha}</span></li><li class="list-group-item">Desde: <span class ="">${doc.data().from}</span></li><li class="list-group-item">Hasta: <span class ="">${doc.data().to}</span></li><li class="list-group-item">Precio Total: <span class ="">${doc.data().totalPrice}</span></li><li class="list-group-item">Hora de Registracion: <span class ="">${doc.data().timeReg}</span></li></ul></div></div>`;
                        numForLoop++;
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
        classesRegister.innerHTML = '<h5 class="center-align">Inicia sesion o crea tu cuenta para ver tus clases</h5>';
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
        <div style="color: rgb(39,57,82);">Bienvenido ${doc.data().firstName} ${doc.data().lastName}</div>
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
  