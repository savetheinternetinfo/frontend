const languages = require("../assets/languages/languages.json");

const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;
app.use(cors());

app.get("/languages", (req, res) => res.send(languages));

app.listen(port, () => console.log(`Mockserver listening on port ${port}!`));
