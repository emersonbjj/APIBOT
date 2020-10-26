//Esse arquivo é reponsável por inserir logs no banco de dados.
var express = require('express'), router = express.Router();
const Querys = require('../SQL/Querys');//Importa as querys para uso
const ExecuteQuery = require('../SQL/Execute Query')//Importa o modulo de excução de querys


router
    .post('/log', (req, res) => {
        //Captura o parâmetros e armazena em variaveis
        const id = parseInt(req.body.id);
        const Nome = req.body.nome;
        const Setor = req.body.setor;
        //Monta Data time para dar insert no banco
        const now = new Date();
        const offsetMs = now.getTimezoneOffset() * 60 * 1000;
        const dateLocal = new Date(now.getTime() - offsetMs);
        const Time = dateLocal.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
        //Fim Monta Data time para dar insert no banco
        Querys.LOG(id, Nome, Setor, Time)//Aqui ele passa paramêtros para criação da query completa
            .then(resolve => ExecuteQuery(resolve, res)) //Aqui ele executa a query montada acima
            .catch(reject => json.res({
                message: reject //Aqui ele retorna se algo der errado
            }));

    })
module.exports = router;