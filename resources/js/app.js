require('./bootstrap');
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/firebase-messaging-sw.js', {
      scope: '/'
    })
    .then(function (registration) {
      console.log('Service worker registered:', registration);
    })
    .catch(function (error) {
      console.error('Service worker registration failed', error);
    });
  }
  
  