//Esse arquivo é reponsável por inserir logs no banco de dados.
var express = require('express'), router = express.Router();
const sql = require('mssql');
const Querys = require('../SQL/Querys');
const Config = require('../SQL/Config')
const ExecuteQuery = require('../SQL/Execute Query')
//Conecta ao banco de Dados.

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
        Querys.LOG(id, Nome, Setor, Time)
            .then(resolve => ExecuteQuery(resolve, res))
            .catch(reject => json.res({
                message: reject
            }));

    })
module.exports = router;