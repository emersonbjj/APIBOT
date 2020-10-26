//Este arquivo é responsável retornar todos os processos existentes na base

var express = require('express'), router = express.Router();
const Querys = require('../SQL/Querys');//Importa as querys para uso
const ExecuteQuery = require('../SQL/Execute Query')//Importa o modulo de excução de querys

router
   .get('/process', (req, res) => {
      Querys.SPProcess()
         .then(resolve => ExecuteQuery(resolve, res)) //Aqui ele executa a query
         .catch(reject => res.json({ message: reject }))    //Aqui ele retorna se algo der errado
   })

module.exports = router;