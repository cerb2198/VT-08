var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("Ingreso al proxy")

  var resToSend;

  axios.get("http://localhost/Party/acme/login.jsp?ifeStartPageURL=/itemmanager/app/start").
  then(response => res.send(resToSend = response));

  console.log("Respuesta", resToSend);

  res.send(resToSend);
});

module.exports = router;
