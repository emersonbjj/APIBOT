//Este arquivo é responsável retornar todos os processos existentes na base

var express = require('express'),
   router = express.Router();
const Querys = require('../SQL/Querys');
const ExecuteQuery = require('../SQL/Execute Query')

router
   .get('/process', (req, res) => {
      Querys.SPProcess()
         .then(resolve => ExecuteQuery(resolve, res))
         .catch(reject => res.json({
            message: reject
         }))
   })

module.exports = router;