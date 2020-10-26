//Esse arquivo é responsável por retornar todos os registros passando "ID da automação" 
//ou "Setor" ou o nome completo da automação
var express = require('express'),router = express.Router();
const Querys = require('../SQL/Querys');//Importa as querys para uso
const ExecuteQuery = require('../SQL/Execute Query')//Importa o modulo de excução de querys

router
    .get('/process/:name?', (req, res) => {
        const name = req.params.name //aqui ele captura o parametro de name
        Querys.SWProcess(name) //Aqui ele passa paramêtros para criação da query completa
            .then(resolve => ExecuteQuery(resolve, res)) //Aqui ele executa a query montada acima
            .catch(reject => res.json({message: reject}))   //Aqui ele retorna se algo der errado
    })
module.exports = router;