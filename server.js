var admin = require("firebase-admin");
// Add the Firebase services that you want to use
require("firebase/auth");
require("firebase/firestore");
var serviceAccount = require("bordar-868c81a4a335.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bordar-4b9e3.firebaseio.com"
});

