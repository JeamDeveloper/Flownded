// Configuración de Firebase
var firebaseConfig = {
  // Aquí debes agregar las credenciales de tu proyecto de Firebase
};

firebase.initializeApp(firebaseConfig);

// Configuración de Google Sign-In
var googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/plus.login');

// Función para iniciar sesión con Google
function signInWithGoogle() {
  firebase.auth().signInWithPopup(googleProvider).then(function(result) {
    // El usuario ha iniciado sesión correctamente
    console.log(result);
  }).catch(function(error) {
    // Ha ocurrido un error al iniciar sesión
    console.error(error);
  });
}
