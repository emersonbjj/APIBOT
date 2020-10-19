//Este arquivo é responsável por retornar usuário passando o ID dele como parâmetros 
var express = require('express'),
    router = express.Router();
const Querys = require('../SQL/Querys');
const ExecuteQuery = require('../SQL/Execute Query')
router
    .get('/log/:id?', (req, res) => {
        const id = parseInt(req.params.id);
        Querys.GETUSERBYID(id)
            .then(resolve => ExecuteQuery(resolve, res))
            .catch(reject => json.res({
                message: reject
            }));

    })
module.exports = router;