var express = require('express'),
    router = express.Router();
const sql = require('mssql');
const Querys = require('../SQL/Querys');
const Config = require('../SQL/Config');
const { connect } = require('./EXECUTIONBYDATE');
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
    .get('/processos/:name?', (req, res) => {
        let filter = '';
        if (req.params.name)
            filter = "'%" + (req.params.name) + "%'";
        SQLQuery(Querys.SWProcess + filter, res);
    })
module.exports = router;