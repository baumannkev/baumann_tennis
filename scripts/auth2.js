// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection('classes').onSnapshot(snapshot => {
      setupRegisterTimes(user);
      setupUI(user);
    }, err => console.log(err.message));
  } else {
    setupRegisterTimes(user);
  }
});

// // create new guide
// const createForm = document.querySelector('#create-form');
// createForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   db.collection('guides').add({
//     title: createForm.title.value,
//     content: createForm.content.value
//   }).then(() => {
//     // close the create modal & reset form
//     const modal = document.querySelector('#modal-create');
//     M.Modal.getInstance(modal).close();
//     createForm.reset();
//   }).catch(err => {
//     console.log(err.message);
//   });
// });

// signup
const signupForm = document.querySelector('#signup-form');
const invalidFeedback = document.querySelector('#invalid-feedback');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user & add firestore data
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
      firstName: signupForm['signup-firstName'].value,
      lastName: signupForm['signup-lastName'].value,
      userEmail: signupForm['signup-email'].value,
      userPhone: signupForm['signup-phone'].value,
    });
  }).then(() => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    // M.Modal.getInstance(modal).close();
    // $("#modal-signup").attr("data-bs-dismiss", "modal");
    $('#modal-signup').modal('hide');
    signupForm.reset();
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
  const email = resetLoginForm['reset-password'].value;

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