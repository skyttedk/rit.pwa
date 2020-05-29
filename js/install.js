'use strict';

let deferredPrompt = null;



window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  //installButton.removeAttribute('hidden');
  //installPWA();
  document.getElementById("pwa_redirect").style.display = 'block';

  //const installButton = document.getElementById('butInstall');
  //installButton.addEventListener('click', installPWA);
  //https://wordpress.org/support/topic/how-to-add-progressive-web-app-to-website-with-a-conditional-install-button/

});

var pwa4wp_open_install = function(){
  console.log("install button show");
};

document.getElementById("pwainstall_button").addEventListener("click",function(){
if(window.pwa4wp_installevent !== undefined ){
  window.pwa4wp_installevent.prompt();
  window.pwa4wp_installevent.userChoice.then(function(choiceResult){
    if(choiceResult === 'accepted'){
      console.log('pwa installation accepted.')
    } else {
      console.log('pwa installation refused.')
    }
  });
  window.pwa4wp_installevent = null;
} else {
  console.log("install event is undefined");
}
});

window.addEventListener('appinstalled', (evt) => {
  // Log install to analytics
  console.log('INSTALL: Success');
});