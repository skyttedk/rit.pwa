window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }


  cameraDeviceIds = []
  currentCameraIndex = 0

  // find the video devices (font/back cameras etc)
  navigator.mediaDevices.enumerateDevices().then(function (devices) {
      // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
      devices.forEach(function (device) {
          if (device.kind === 'videoinput') {
              cameraDeviceIds.push(device.deviceId)
          }
      })
  })
  
  // attach camera output to video tag
  navigator.mediaDevices.getUserMedia({
      video: { deviceId: { exact: cameraDeviceIds[currentCameraIndex] } }
  }).then(function (stream) {
      document.getElementById("cameraPlayer").srcObject = stream
  })

}