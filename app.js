const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.post("/send/", function (req, res) {
  res.send(req.query)
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El sonido del cobre</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-26M9SWDWV7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-26M9SWDWV7');
</script>
<body style="background-color: lightblue">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="/images/logos/photo_2023-09-21_18-38-55.jpg" alt="Logo">Cobre Sonoro</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">AWG 42</a></li>
                  <li><a class="dropdown-item" href="#">AWG 42.5</a></li>
                  <li><a class="dropdown-item" href="#">AWG 43</a></li>
                  <li><a class="dropdown-item" href="#">AWG 44</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Alambres de cobre esmaltados</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="html/aboutus.html">Asesoramiento</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="html/contact.html">Nosotros</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link" href="html/aboutus.html">Contacto</a>
              </li>
            </ul>
            <!--<form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          -->
          </div>
        </div>
      </nav>
    <h1>Cobre Sonoro.</h1>
    <h2>Diámetros AWG 38 al 45 Importado, y 0,05 al 0,30 mm nacional.</h2>
    <h2>Consultas: <a href="cobrelepy@gmail.com">cobrelepy@gmail.com</a></h2>
    <h2>Whatsapp: 11 5047 6024</h2>        
    <iframe width="420" height="315" src="https://www.youtube.com/embed/SEOA1pYgDOQ">
    </iframe>
    <br>
    <img src="images/copper1.jpg">
    <img src="/images/photo_2023-09-13_17-18-23.jpg" alt="">
    <img src="/images/photo_2023-09-13_17-18-41.jpg" alt="">
    <img src="/images/photo_2023-09-13_17-18-44.jpg" alt="">
    <img src="/images/photo_2023-09-13_17-18-48.jpg" alt="">
    <img src="/images/photo_2023-09-13_17-18-51.jpg" alt="">
    <img src="/images/photo_2023-09-13_17-18-54.jpg" alt="">
    <img src="/images/photo_2023-09-13_17-18-58.jpg" alt="">
    <h1>contacto</h1>   
    <form action="/app.js" method="post">
      <label>Nombre</label>
      <input type="text" name="name">
      <label>Password</label>
      <input type="password" name="password">
      <label>e-mail</label>
      <input type="email" name="email">
      <input type="submit" value="Enviar">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>
`
