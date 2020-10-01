<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>RIT-PWA</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="favicon.ico" type="image/x-icon" />  
  <link rel="apple-touch-icon" href="images/hello-icon-152.png">   
  <meta name="theme-color" content="white"/>  
  
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black"> 
  <meta name="apple-mobile-web-app-title" content="Hello World"> 
  <meta name="msapplication-TileImage" content="images/hello-icon-144.png">  
  <meta name="msapplication-TileColor" content="#FFFFFF">
  <title>Hello World</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="manifest" href="/manifest.json">

  <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script> 
  <script src="js/camera.js"></script>
  <script src="js/server.js"></script>
  
  <script>
    $( document ).ready(function() {
      console.log( "ready!" );
      onLoad();
    });
  </script>
  
</head>
<body class="fullscreen">
  <div class="container">
    
  </div>

  <!-- 
    <button onclick="takePicture()">Take Pick</button>
  -->

  <script src="js/main.js"></script>
</body>
</html>