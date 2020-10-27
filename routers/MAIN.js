//Essa é a pagina principal da API
const WriteFileLog = require('../Savelog')
var express = require('express'),
    router = express.Router();
const Time = new Date().toLocaleDateString('pt-Br', { timeStyle: 'full' })
router
    .get('/', (req, res) => {
        res.json({ STATUS: 'API DATABASE FUNCIONANDO!' })
        WriteFileLog.SaveLog(Time + " [Init] API DATABASE FUNCIONANDO!\r\n")}
    );


module.exports = router;