'use strict';

let deferredInstallPrompt = null;



window.addEventListener('beforeinstallprompt', () => {
  e.preventDefault();
  deferredInstallPrompt = e;
  //installButton.removeAttribute('hidden');
  //installPWA();

  const installButton = document.getElementById('butInstall');
  installButton.addEventListener('click', installPWA);


});


function installPWA(evt) {
  
  deferredInstallPrompt.prompt();
  
  // Hide the install button, it can't be called twice.
  evt.srcElement.setAttribute('hidden', true);

  deferredInstallPrompt.userChoice
    .then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt', choice);
      } else {
        console.log('User dismissed the A2HS prompt', choice);
      }
      deferredInstallPrompt = null;
    });
}


window.addEventListener('appinstalled', (evt) => {
  // Log install to analytics
  console.log('INSTALL: Success');
});