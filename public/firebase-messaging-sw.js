// importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');
// // Your web app's Firebase configuration

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
// const messaging = firebase.messaging();
// messaging.usePublicVapidKey(BBgU1Y13q2Gg73TWW6SSXEgtqn8qGHPlISM-P-XoqYvimyrkmbeXrK2v8A-XeKHk8J-xvTPhowIK3rRDmBexUIg);
// messaging.onBackgroundMessage(function(payload) {
// const notificationTitle = payload.data.title;
// const notificationOptions = {
// body: payload.data.message,
// // icon:'PATH TO ICON IF ANY',
// data: { url:payload.data.onClick }, //the url which we gonna use later
// };
// return self.registration.showNotification(notificationTitle,notificationOptions);
// });
// //Code for adding event on click of notification
// self.addEventListener('notificationclick', function(event) {
// let url = event.notification.data.url;
// event.notification.close(); 
// event.waitUntil(
// clients.matchAll({type: 'window'}).then( windowClients => {
// // Check if there is already a window/tab open with the target URL
// for (var i = 0; i < windowClients.length; i++) {
// var client = windowClients[i];
// // If so, just focus it.
// if (client.url === url && 'focus' in client) {
// return client.focus();
// }
// }
// // If not, then open the target URL in a new window/tab.
// if (clients.openWindow) {
// return clients.openWindow(url);
// }
// })
// );
// });






importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

// const firebaseConfig = {}; 
const firebaseConfig = {
  apiKey: "AIzaSyCZgZwoauPkLvXQnF3QpF7oYg1eorNSBtU",
  authDomain: "npwcuserweb.firebaseapp.com",
  projectId: "npwcuserweb",
  storageBucket: "npwcuserweb.appspot.com",
  messagingSenderId: "1062688466116",
  appId: "1:1062688466116:web:b8712c14e9558c889c1591",
  measurementId: "G-2QM79Y4SEJ"
};
  
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});




// 3rd method
// importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// firebase.initializeApp({
//     messagingSenderId: '590804563115' // troque pelo seu sender id 
// });

// const messaging = firebase.messaging();