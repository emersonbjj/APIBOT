//Essa é a pagina principal da API
const WriteFileLog = require('../Savelog')
var express = require('express'),
    router = express.Router();
router
    .get('/', (req, res) => {
        res.json({ STATUS: 'API DATABASE FUNCIONANDO!' })
        WriteFileLog.SaveLog("[Init] API DATABASE FUNCIONANDO!")}
    );


module.exports = router;