const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

//this is to handle the form sent through "contact.html"
const bodyParser = require('body-parser');

//this is also to handle the form sent through "contact.html"
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact', (req, res) => {
  // Get the form data from the request body
  const formData = req.body;
  
  // Form data will be parsed into a JavaScript object
  // For example if the form had fields named 'name' and 'email'
  // formData would contain:
  // {
  //   name: 'John Doe', 
  //   email: 'john@email.com'
  // }

  // Do something with the form data
  // For example save it to a database
  var fs = require('fs');

  fs.appendFile('usersdatabase.txt', formData.name + ', ', function (err) {
    if (err) throw err;
  });
  
  fs.appendFile('usersdatabase.txt', formData.email + ', ', function (err) {
    if (err) throw err;
  
  });
   
  fs.appendFile('usersdatabase.txt', formData.message + '\n ', function (err) {
    if (err) throw err;
  });
});

  res.send("Form was sent successfully");



app.use('/images', express.static(__dirname + "/images"));
//app.use(express.static('/images'))
app.use('/css', express.static(__dirname + "/css"));
app.use('/js', express.static(__dirname + "/js"));
app.use('/html', express.static(__dirname + "/html"));

/*app.get("/", (req, res) => res.type('html').send(html));*/
app.use(express.static(__dirname + "/html")); 

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;