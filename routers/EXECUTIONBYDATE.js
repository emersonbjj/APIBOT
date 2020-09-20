var express = require('express'),
    router = express.Router();
const sql = require('mssql');
const Config = require('../SQL/Config')
const Querys = require('../SQL/Querys');
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
router.
    get('/processos/execution/:dt?:setor?', (req, res) => {
        const dt = req.query.dt;
        const setor = req.query.setor;
            Querys.EXECUTIONBYDATE(dt, setor)
                .then(resolve => SQLQuery(resolve, res))
                .catch(reject => res.json({ message: reject }))
    })

module.exports = router;