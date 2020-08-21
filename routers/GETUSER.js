var express = require('express'),
    router = express.Router();
const sql = require('mssql');
const Config = require('../SQL/Config')

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
.get('/log/:id?', (req, res) => {
    const id = parseInt(req.params.id);
    SQLQuery(`SELECT * FROM [LOGBOT].[dbo].[Logon] WHERE [id] = '${id}'`, res);
 
 })
 module.exports=router;