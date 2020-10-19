//Este arquivo é responsável por executar uma query que é passada pelo parâmetro CommandSql

const sql = require('mssql');
const Config = require('../SQL/Config')
//Conecta ao banco de Dados.
sql.connect(Config.module)
    .then(conn => global.conn = conn)
    .catch(err => console.log(err));

function SQLQuery(CommandSql, res) {
    global.conn.request()
        .query(CommandSql)
        .then(result => {
            console.log("[Database] Query está sendo executada")
            res.json(result.recordset)
            console.log("[Resultado]: " + result.recordset)
            console.log("[Database] Query foi executada com sucesso")
        })
        .catch(err => {
            console.log("[Database] Ocorreu um erro ao executar a Query")
            res.json(err)
        });
}

module.exports = SQLQuery;