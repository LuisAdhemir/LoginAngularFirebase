// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCfmEdwEybQqsfdarW_kj6jtVn61adh3Gc",
    authDomain: "login-firebase-angular.firebaseapp.com",
    databaseURL: "https://login-firebase-angular.firebaseio.com",
    projectId: "login-firebase-angular",
    storageBucket: "login-firebase-angular.appspot.com",
    messagingSenderId: "408304197801",
    appId: "1:408304197801:web:7c8e1970f4a1eb2cff89b8"
  }
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);


};




/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
