const express = require("express");

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views_static/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views_static/about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile("./views_static/404.html", { root: __dirname });
});
