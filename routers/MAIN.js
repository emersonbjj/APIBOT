//Essa é a pagina principal da API
var express = require('express'),
    router = express.Router();
router
    .get('/', (req, res) =>
        res.json({ STATUS: 'API DATABASE FUNCIONANDO!' }));


module.exports = router;