// DOM elements
// const guideList = document.querySelector('.guides');
// const loggedOutLinks = document.querySelectorAll('.logged-out');
// const loggedInLinks = document.querySelectorAll('.logged-in');
// const accountDetails = document.querySelector('.account-details');
// const welcomeUser = document.querySelector('.usersName');
// const classesRegister = document.querySelector('.listsClasses');

// const datesList = document.querySelector('.dateFromDatabase');
// const dateOfWeek = document.querySelector('.firstDay');

// window.setupUI = (user) => {
//   if (user) {
//     // account info
//     db.collection('users').doc(user.uid).get().then((doc) => {
//       const html = `
//         <div>Iniciado como: ${user.email}</div>
//         <div>Nombre: <span class ="firstName">${doc.data().firstName}</span></div>
//         <div>Apellido: <span class ="lastName">${doc.data().lastName}</span></div>
//         <div>Numero Celular: ${doc.data().userPhone}</div>
//       `;
//       accountDetails.innerHTML = html;
//       const htmlName = `
//       <div style="color: rgb(39,57,82);">Bienvenido ${doc.data().firstName} ${doc.data().lastName}</div>
//       `;
//       welcomeUser.innerHTML = htmlName;
//     });
//     // toggle user UI elements
//     loggedInLinks.forEach(item => item.style.display = 'block');
//     loggedOutLinks.forEach(item => item.style.display = 'none');
//   } else {
//     // clear account info
//     accountDetails.innerHTML = '';
//     // toggle user elements
//     welcomeUser.innerHTML = '<h5 class="center-align">Inicia sesion o crea tu cuenta para registrar</h5>';
//     loggedInLinks.forEach(item => item.style.display = 'none');
//     loggedOutLinks.forEach(item => item.style.display = 'block');
//   }
// };

// const setupRegisterTimes = (user) => {
//   // var num = getClassesRegistered(user);
//   if (user) {
//     // account info
//     db.collection("users").doc(user.uid).collection("myClasses").doc("class" + "0").get().then((doc) => {
//       const html = `
//       <div class="card" style="width: 18rem;">
//         <div class="card-body listsClasses">
//           <h5 class="card-title">Mis Clases</h5>
//           <p class="card-text"></p>
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item">Clase: ${doc.data().clase}</li>
//             <li class="list-group-item">Hora: <span class ="">${doc.data().hora}</span></li>
//             <li class="list-group-item">Fecha: <span class ="">${doc.data().fecha}</span></li>
//           </ul>
//         </div>
//       </div>
//         `;
//       classesRegister.innerHTML = html;
//       // const htmlName = `
//       // <div style="color: rgb(39,57,82);">Bienvenido ${doc.data().firstName} ${doc.data().lastName}</div>
//       // `;
//       // welcomeUser.innerHTML = htmlName;
//     });
//     // toggle user UI elements
//     loggedInLinks.forEach(item => item.style.display = 'block');
//     loggedOutLinks.forEach(item => item.style.display = 'none');
//   } else {
//     // clear account info
//     classesRegister.innerHTML = '';
//     // toggle user elements
//     classesRegister.innerHTML = '<h5 class="center-align">Inicia sesion o crea tu cuenta para ver tus clases</h5>';
//     loggedInLinks.forEach(item => item.style.display = 'none');
//     loggedOutLinks.forEach(item => item.style.display = 'block');
//   }
// };

// setup guides
// const setupGuides = (data) => {

//   if (data.length) {
//     let html = '';
//     data.forEach((doc) => {
//       const guide = doc.data();
//       const li = `
//         <li>
//           <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
//           <div class="collapsible-body white"> ${guide.content} </div>
//         </li>
//       `;
//       html += li;
//     });
//     guideList.innerHTML = html
//   } else {
//     guideList.innerHTML = '<h5 class="center-align">Inicia sesion o crea tu cuenta para registrar</h5>';
//   }

// };

//  setupRegisterTimes
// const setupRegisterTimes = (data) => {

//   if (data.length) {
//     let html = '';
//     data.forEach((doc) => {
//       const dates = doc.data();
//       // for (let i = 0; i < dates.length; i++) {
//       const timeButton = `
//             <div> 
//               ${dates.status[0]}
//             </div>
//             <div>${dates.today[0]}</div>
//           </div>
//       `;
//       html += timeButton;
//       // }
//     });
//     datesList.innerHTML = html
//   } else {
//     datesList.innerHTML = '<h5 class="center-align">Inicia sesion o crea tu cuenta para registrar</h5>';
//   }

// };

//  setupRegisterTimes day of week 
// const setupRegisterDayOfWeek = (data) => {

//   if (data.length) {
//     let html = '';
//     data.forEach((doc) => {
//       const dateWeek = doc.data();
//       const dateButton = `
//               ${dateWeek.date}
//       `;
//       html += dateButton;
//     });
//     dateOfWeek.innerHTML = html
//   } else {
//     dateOfWeek.innerHTML = '<h5 class="center-align">Inicia sesion o crea tu cuenta para registrar</h5>';
//   }

// };

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});