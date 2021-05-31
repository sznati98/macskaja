// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  custom: 'This is BEADANDOALAP',
  serverUrl: 'http://localhost:4200/server',
  springUrl: 'https://macskaja.herokuapp.com',
  //serverUrl: 'https://prfgyak.herokuapp.com/'
  firebase: {
    authDomain: "webshop-c39ab.firebaseapp.com",
    projectId: "webshop-c39ab",
    storageBucket: "webshop-c39ab.appspot.com",
    messagingSenderId: "478021606285",
    appId: "1:478021606285:web:d82ffd4975307adcd97bc4",
    measurementId: "G-QYKQDNC95G"

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
