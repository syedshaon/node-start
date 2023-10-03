const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Application started and Listening on port 8080");
});

// serve your css as static
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});
app.get("/contact-me", (req, res) => {
  res.sendFile(__dirname + "/contact-me.html");
});
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/404.html");
});
