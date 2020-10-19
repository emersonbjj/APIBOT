//Esse arquivo é responsável por retornar todos os registros passando "ID da automação" 
//ou "Setor" ou o nome completo da automação
var express = require('express'),
    router = express.Router();
const Querys = require('../SQL/Querys');
const ExecuteQuery = require('../SQL/Execute Query')
router
    .get('/process/:name?', (req, res) => {
        const name = req.params.name
        Querys.SWProcess(name)
            .then(resolve => ExecuteQuery(resolve, res))
            .catch(reject => res.json({message: reject}))
    })
module.exports = router;