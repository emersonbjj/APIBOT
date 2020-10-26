//Este arquivo é responsável por retornar usuário passando o ID dele como parâmetros 
var express = require('express'), router = express.Router();
const Querys = require('../SQL/Querys');//Importa as querys para uso
const ExecuteQuery = require('../SQL/Execute Query')//Importa o modulo de excução de querys

router
    .get('/log/:id?', (req, res) => {
        const id = parseInt(req.params.id); //aqui ele captura o parametro ID
        Querys.GETUSERBYID(id)//Aqui ele passa paramêtros para criação da query completa
            .then(resolve => ExecuteQuery(resolve, res))//Aqui ele executa a query montada acima 
            .catch(reject => json.res({
                message: reject //Aqui ele retorna se algo der errado
            }));

    })
module.exports = router;