let express = require("express");
let app = express();

const filepath = `${__dirname}/views/index.html`;
const statFiles = express.static(`${__dirname}/public`);

app.use("/public", statFiles);

app.get("/", (req, res) => {
  res.status(200).sendFile(filepath);
});

app.get("/json", (req, res) => {
  res.status(200).json({ message: "Hello json" });
});

module.exports = app;
