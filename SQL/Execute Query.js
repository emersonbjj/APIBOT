//Este arquivo é responsável por executar uma query que é passada pelo parâmetro CommandSql
const WriteFileLog = require('../Savelog')
const sql = require('mssql');//Aqui declara a lib que irá ser utilizada
const Config = require('../SQL/Config')//Aqui importa as configurações para fazer a conexão com o banco de dados
//Conecta ao banco de Dados.
sql.connect(Config.module)
    .then(conn => global.conn = conn)
    .catch(err => console.log(err));

function SQLQuery(CommandSql, res) { //Função que executa a consulta de fato 
    global.conn.request()
        .query(CommandSql)//Aqui ele Recebe a query como parâmetro
        .then(result => {
        
            setTimeout(() => {
                WriteFileLog.SaveLog("[Database] Query está sendo executada")
            }, 1000);
            setTimeout(() => {
                WriteFileLog.SaveLog("[Database] Linhas Retornadas/Afetadas: " + result.rowsAffected)
            }, 1000);
            setTimeout(() => {
                WriteFileLog.SaveLog("[Database] Query foi executada com sucesso")
            }, 1000);
            setTimeout(() => {
                WriteFileLog.SaveLog("-------------------FIM DA CONEXÃO COM O DB-----------------------")
            }, 1000);
            res.json(result.recordset)//Aqui ele retorna os objetos retornados da query (caso haja)

        })
        .catch(err => {
            WriteFileLog.SaveLog("[Database] Ocorreu um erro ao executar a Query")
            res.json(err)//Aqui ele envia a mensagem de erro no formato JSON
            WriteFileLog.SaveLog("-------------------FIM DA CONEXÃO COM O DB-----------------------")
        });
}

module.exports = SQLQuery;