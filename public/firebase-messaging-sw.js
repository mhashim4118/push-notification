/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
  apiKey: "AIzaSyBOREN7KQCVDNvkpCTZcNBGKf1NvKs8PM4",
  authDomain: "laravel-push-notificatio-bd67c.firebaseapp.com",
  projectId: "laravel-push-notificatio-bd67c",
  storageBucket: "laravel-push-notificatio-bd67c.appspot.com",
  messagingSenderId: "820292628857",
  appId: "1:820292628857:web:039c5aa8c9799f4e2a7fa8",
  measurementId: "G-22G0LRE2SL"
});

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload,
  );
  /* Customize notification here */
  const notificationTitle = "Background Message Title";
  const notificationOptions = {
    body: "Background Message body.",
    icon: "/itwonders-web-logo.png",
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions,
  );
  

});
