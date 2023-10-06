const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
app.use('/images', express.static(__dirname + "/images"));
//app.use(express.static('/images'))
app.use('/css', express.static(__dirname + "/css"));
app.use('/js', express.static(__dirname + "/js"));

/*app.get("/", (req, res) => res.type('html').send(html));*/
app.use(express.static(__dirname + "/html")); 

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;