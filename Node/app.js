const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require('./src/auth/passport');

require('./src/models/user');

const middleware = require('./middleware');
const api = require('./src/api/routes');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api", api);

app.use(middleware.notFound);
app.use(middleware.errorHandler);

module.exports = app;