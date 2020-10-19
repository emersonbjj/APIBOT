//Esse arquivo é reponsável por inserir logs no banco de dados.
var express = require('express'), router = express.Router();
const sql = require('mssql');
const Querys = require('../SQL/Querys');
const Config = require('../SQL/Config')
//Conecta ao banco de Dados.
sql.connect(Config.module)
    .then(conn => global.conn = conn)
    .catch(err => console.log(err));
//Executa Query
function SQLQuery(sqlQry, res) {
    global.conn.request()
        .query(sqlQry)
        .then(result => {
            res.json(result.recordset)
            console.log(result.recordset)
        })
        .catch(err => res.json(err));
}
router
    .post('/log', (req, res) => {
        //Monta Data time para dar insert no banco
        const id = parseInt(req.body.id);
        const Nome = req.body.nome;
        const Setor = req.body.setor;
        const now = new Date();
        const offsetMs = now.getTimezoneOffset() * 60 * 1000;
        const dateLocal = new Date(now.getTime() - offsetMs);
        const str = dateLocal.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");

        Querys.LOG(id, Nome, Setor, str)
            .then(resolve => SQLQuery(resolve, res.json({ message: "LOG inserido" })))
            .catch(reject => res.json({ message: reject }))
    })
module.exports = router;