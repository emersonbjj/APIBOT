const sql = require('mssql');
const connStr = "Server=192.168.110.105;Database=BluePrism;User Id=BluePrism;Password=41526388";

sql.connect(connStr)
   .then(conn => global.conn = conn)
   .catch(err => console.log(err));


   function execSQLQuery(sqlQry, res){
    global.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.json(err));
}
exports.modules = execSQLQuery()