//Esse arquivo é responsável por consultar
//e retornar todas as execuções de uma automação por data

var express = require('express'), router = express.Router();
const Querys = require('../SQL/Querys');//Importa as querys para uso
const ExecuteQuery = require('../SQL/Execute Query')//Importa o modulo de excução de querys

router.
    get('/process/execution/:dt?:setor?', (req, res) => {
        const dt = req.query.dt; //aqui ele captura o parametro de data
        const setor = req.query.setor; //aqui ele captura o parametro de setor
        Querys.EXECUTIONBYDATE(dt, setor) //Aqui ele passa paramêtros para criação da query completa
            .then(resolve => ExecuteQuery(resolve, res))  //Aqui ele executa a query montada acima
            .catch(reject => res.json({message: reject }))   //Aqui ele retorna se algo der errado
    })

module.exports = router;