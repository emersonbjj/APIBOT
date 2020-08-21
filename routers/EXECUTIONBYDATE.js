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
router.
    get('/processos/execution/:dt?:setor?', (req, res) => {
        const dt = req.body.dt;
        const setor = req.body.setor;
        console.log(dt, setor);
        if (req.body.dt || req.body.setor)
            SQLQuery(`SELECT P.name As 'Process',FORMAT(DATEADD(hour,-3,[startdatetime]),'HH:mm:ss tt dd/MM/yyyy') AS 'Time Start',FORMAT(DATEADD(hour,-3,[enddatetime]),'HH:mm:ss tt dd/MM/yyyy')AS 'Time End',ST.description AS 'Status' FROM [BluePrism].[dbo].[BPASession] AS S INNER JOIN BPAProcess AS P ON S.processid = P.processid INNER JOIN BPAStatus AS ST ON S.statusid = ST.statusid WHERE FORMAT(DATEADD(hour,-3,[startdatetime]),'dd/MM/yyyy') = '${dt}' AND P.name like '%${setor}%'`, res);
    })

module.exports = router;