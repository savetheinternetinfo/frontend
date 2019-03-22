const languages = require("./languages/languages.json");
const pressRelease = require("./release/press.json");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;
app.use(cors());

app.get("/translation", (req, res) => {
  res.send(languages);
  // Fake request delay to see loader
  // setTimeout(() => {res.send(languages)}, 2000);
});

app.get("/press", (req, res) => {
  res.send(pressRelease);
});

app.listen(port, () => console.log(`Mockserver listening on port ${port}!`));
