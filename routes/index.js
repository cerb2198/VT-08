var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello");
});

router.get('/Party/intelliquip/xsl/:filename', function(req, res, next) {
  const filename = req.params.filename;
  // Asegúrate de validar y sanitizar la entrada del usuario aquí para evitar ataques como el Path Traversal
  const filePath = path.join(__dirname, 'public', 'xsl', filename);

  // Envía el archivo XSL al cliente
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send('Archivo no encontrado');
    }
  });
});

module.exports = router;
