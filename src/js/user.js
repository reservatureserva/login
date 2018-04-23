 var config = {
   apiKey: "AIzaSyBoylqLp2f2ZO7afv-cso52PhCCncoOgbY",
   authDomain: "login-f6988.firebaseapp.com",
   databaseURL: "https://login-f6988.firebaseio.com",
   projectId: "login-f6988",
   storageBucket: "",
   messagingSenderId: "18277841873"
 };
 firebase.initializeApp(config);

 firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    /** #### Node #### **/
    console.log("Lamada al servidor");
    contenido.home(user); 
  }
});

 var userCo = (function() {
  var login = (email, password)=>{
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      contenido.feedBack(errorMessage);
    });
  };

  var registro = (email, password)=>{
    var email = $("input[name='email']").val();
    var password = $("input[name='password']").val();
    var repassword = $("input[name='repassword']").val();

    if(password === repassword && $("input[name='dni']").val() !== ''){
      console.log("Guardando en ElasticSearch");
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log(error);
     //Se notifica al usuario
     //Si hay error, borrará el registro de elastic
   });
    } 
  };

  var google = ()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    /* firebase.auth().getRedirectResult().then(function(result) {
       if (result.credential) {
         var token = result.credential.accessToken;
       }
       var user = result.user;
     });

     provider.addScope('profile');
     provider.addScope('email');
     firebase.auth().signInWithRedirect(provider);
     */

     firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      alert("Bienvenido "+user.email);
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      var email = error.email;

      var credential = error.credential;
      console.log(errorMessage);

    });
  };

  var logOut = ()=>{
    firebase.auth().signOut().then(function() {
      alert('Cerrando sesion');
    }, function(error) {
      alert('Sign Out Error'+ error);
    });
  };

  return{
    login     :     login,
    registro  :     registro,
    google    :     google
  }
})();