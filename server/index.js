// required
require("dotenv").config();
const express = require("express");
const app = express();
const { json } = require("body-parser");
const massive = require("massive");
const cntrl = require("./controller.js");

// establish db connection
// console.log(process.env.CONNECTION_STRING);

massive(process.env.CONNECTION_STRING).then(dbInstance =>
  app.set("db", dbInstance)
);

// middleware
app.use(json());

// endpoints
app.post(`/api/register`, cntrl.addUser);

// listening
const port = process.env.port || 1738;
app.listen(port, () =>
  console.log(`rollin round the city cause i need me one // ${port}`)
);
