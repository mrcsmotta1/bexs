const express = require("express");
const routes = require("./routes/routes");

const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 4000;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.listen(PORT, () => console.log("Express has been started"));
