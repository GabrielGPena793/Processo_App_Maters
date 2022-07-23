const express = require("express");
const app = express();

//middleware
app.use(express.json());

app.route("/").get( (request, response) => {
  
  let apiStatus = { alive: true }
  
  response.status(200).send(apiStatus)
  
})

module.exports = app;