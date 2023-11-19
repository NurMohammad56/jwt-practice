const express = require('express');
const app = express()
const router = require("./src/routes/api");
const cors = require("cors");
const bodyParser = require("body-parser");


app.use(cors());
app.use(bodyParser.json());





app.use(router)
module.exports = app;