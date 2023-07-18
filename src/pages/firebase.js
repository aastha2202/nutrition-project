// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyAJytDyO3f7fSatmfKy7qpG9UzgbE5-UIs",
//     authDomain: "message-a4e58.firebaseapp.com",
//     projectId: "message-a4e58",
//     storageBucket: "message-a4e58.appspot.com",
//     messagingSenderId: "590804563115",
//     appId: "1:590804563115:web:5230a998e5df64c0be73ee",
//     measurementId: "G-3PL1C48VBR"
//   };
// firebase.initializeApp(firebaseConfig);





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCZgZwoauPkLvXQnF3QpF7oYg1eorNSBtU",
//   authDomain: "npwcuserweb.firebaseapp.com",
//   projectId: "npwcuserweb",
//   storageBucket: "npwcuserweb.appspot.com",
//   messagingSenderId: "1062688466116",
//   appId: "1:1062688466116:web:b8712c14e9558c889c1591",
//   measurementId: "G-2QM79Y4SEJ"
// };

const firebaseConfig = {
  apiKey: "AIzaSyC1NK3z0ld2YlX_06MGGx0Es9tQw6Q1KVA",
  authDomain: "npwc-app-68c21.firebaseapp.com",
  projectId: "npwc-app-68c21",
  storageBucket: "npwc-app-68c21.appspot.com",
  messagingSenderId: "817536742070",
  appId: "1:817536742070:web:ae83b1eadde12693c6ec17",
  measurementId: "G-9D5B1CJ7DQ"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
// const analytics = getAnalytics(app);





// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";


// const firebaseConfig = {
//   apiKey: "AIzaSyAJytDyO3f7fSatmfKy7qpG9UzgbE5-UIs",
//   authDomain: "message-a4e58.firebaseapp.com",
//   projectId: "message-a4e58",
//   storageBucket: "message-a4e58.appspot.com",
//   messagingSenderId: "590804563115",
//   appId: "1:590804563115:web:5230a998e5df64c0be73ee",
//   measurementId: "G-3PL1C48VBR"
// };

// function requestPermission() {
//   console.log("Requesting permission...");
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       console.log("Notification permission granted.");
//       const app = initializeApp(firebaseConfig);

//       const messaging = getMessaging(app);
//       getToken(messaging, {
//         vapidKey:
//           "BBgU1Y13q2Gg73TWW6SSXEgtqn8qGHPlISM-P-XoqYvimyrkmbeXrK2v8A-XeKHk8J-xvTPhowIK3rRDmBexUIg",
//       }).then((currentToken) => {
//         if (currentToken) {
//           console.log("currentToken: ", currentToken);
//         } else {
//           console.log("Can not get token");
//         }
//       });
//     } else {
//       console.log("Do not have permission!");
//     }
//   });
// }

// requestPermission();