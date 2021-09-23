const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
const welcomeUser = document.querySelector('.usersName');
// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('classes').onSnapshot(snapshot => {
      setupUI(user);
      setupUIRegister(user);
      getUserName(user);
    }, err => console.log(err.message));
  } else {
    setupUI(user);
    setupUIRegister(user);
    getUserName(user);
  }
});

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
      <div class="container"><p class="lead">Las clases en donde te inscribis son para la semana que viene!</p></div>
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

$('#signup-form input[type=text]').on('change invalid', function () {
  var textfield = $(this).get(0);

  // 'setCustomValidity not only sets the message, but also marks
  // the field as invalid. In order to see whether the field really is
  // invalid, we have to remove the message first
  textfield.setCustomValidity('');

  if (!textfield.validity.valid) {
    textfield.setCustomValidity('Rellene este campo por favor');
  }
});

// signup
const signupForm = document.querySelector('#signup-form');
const invalidFeedback = document.querySelector('#invalid-feedback');
const invalidFeedbackSignup = document.querySelector('.invalid-feedback-signup');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const usersFirstName = signupForm['signup-firstName'].value;
  const usersLastName = signupForm['signup-lastName'].value;
  const usersPhone = signupForm['signup-phone'].value;

  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
      firstName: signupForm['signup-firstName'].value,
      lastName: signupForm['signup-lastName'].value,
      userEmail: signupForm['signup-email'].value,
      userPhone: signupForm['signup-phone'].value,
      clasesRegistered: "0",
    });
  }).then(() => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    // M.Modal.getInstance(modal).close();
    // $("#modal-signup").attr("data-bs-dismiss", "modal");
    $('#modal-signup').modal('hide');
    signupForm.reset();
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    const html = `
        <div class = "danger">${errorMessage}</div>
      `;
    invalidFeedbackSignup.innerHTML = html;
    console.log(error);
  });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    // M.Modal.getInstance(modal).close();
    $('#modal-login').modal('hide');
    loginForm.reset();
  }).catch((error) => {
    const html = `
        <div class = "danger" >Incorrecto email o contraseña!</div>
      `;
    invalidFeedback.innerHTML = html;
    console.log(error);
  });

});

//reset password
const resetForm = document.querySelector('#reset-form');
const successfull = document.querySelector('#succesfull-reset-email');
resetForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = resetForm['reset-password'].value;

  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      const html = `
        <div>Chequea tu email para resetear tu contrasena!</div>
      `;
      successfull.innerHTML = html;
      console.log("Succesfully sent email");
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      // ..
    });

});

//reset password
const resetLoginForm = document.querySelector('#reset-login-pass');
const successfullReset = document.querySelector('#succesfull-reset-email-login');
resetLoginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = resetLoginForm['reset-password-login'].value;

  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      const html = `
        <div>Chequea tu email para resetear tu contrasena!</div>
      `;
      successfullReset.innerHTML = html;
      console.log("Succesfully sent email");
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      // ..
    });

});

//Sign in with googleSignin
// var provider = new firebase.auth.GoogleAuthProvider();

// firebase.auth()
//   .signInWithPopup(provider)
//   .then((result) => {
//     /** @type {firebase.auth.OAuthCredential} */
//     var credential = result.credential;

//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });


// Register For Class
// const signupForm = document.querySelector('#signup-form');
// const invalidFeedback = document.querySelector('#invalid-feedback');
// signupForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // get user info
//   const email = signupForm['signup-email'].value;
//   const password = signupForm['signup-password'].value;

//   // sign up the user & add firestore data
//   auth.createUserWithEmailAndPassword(email, password).then(cred => {
//     return db.collection('users').doc(cred.user.uid).set({
//       firstName: signupForm['signup-firstName'].value,
//       lastName: signupForm['signup-lastName'].value,
//       userEmail: signupForm['signup-email'].value,
//       userPhone: signupForm['signup-phone'].value,
//     });
//   }).then(() => {
//     // close the signup modal & reset form
//     const modal = document.querySelector('#modal-signup');
//     // M.Modal.getInstance(modal).close();
//     // $("#modal-signup").attr("data-bs-dismiss", "modal");
//     $('#modal-signup').modal('hide');
//     signupForm.reset();
//   });
// });