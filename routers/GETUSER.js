var express = require('express'),
    router = express.Router();
const sql = require('mssql');
const Config = require('../SQL/Config');
const Querys = require('../SQL/Querys');
const { json } = require('body-parser');

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
        Querys.GETUSERBYID(id)
            .then(resolve => SQLQuery(resolve,res))
            .catch(reject => json.res({message: reject}));

    })
module.exports = router;