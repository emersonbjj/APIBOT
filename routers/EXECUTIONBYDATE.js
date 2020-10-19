//Esse arquivo é responsável por consultar
//e retornar todas as execuções de uma automação por data

var express = require('express'),
    router = express.Router();
const Querys = require('../SQL/Querys');
const ExecuteQuery = require('../SQL/Execute Query')

router.
    get('/process/execution/:dt?:setor?', (req, res) => {
        const dt = req.query.dt;
        const setor = req.query.setor;
        Querys.EXECUTIONBYDATE(dt, setor)
            .then(resolve => ExecuteQuery(resolve, res))
            .catch(reject => res.json({
                message: reject
            }))
    })

module.exports = router;