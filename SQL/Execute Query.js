//Este arquivo é responsável por executar uma query que é passada pelo parâmetro CommandSql
const chalk = require('chalk');
const WriteFileLog = require('../Savelog')
const sql = require('mssql');//Aqui declara a lib que irá ser utilizada
const Config = require('../SQL/Config')//Aqui importa as configurações para fazer a conexão com o banco de dados
const Time = new Date().toLocaleDateString('pt-Br', { timeStyle: 'full' })
//Conecta ao banco de Dados.
sql.connect(Config.module)
    .then(conn => global.conn = conn)
    .catch(err => console.log(err));

function SQLQuery(CommandSql, res) { //Função que executa a consulta de fato 
    global.conn.request()
        .query(CommandSql)//Aqui ele Recebe a query como parâmetro
        .then(result => {

            console.log(chalk.green(Time + " [Database]") + " Query está sendo executada")
            WriteFileLog.SaveLog(Time + " [Database] Query está sendo executada \r\n")
            res.json(result.recordset)//Aqui ele retorna os objetos retornados da query (caso haja)
            console.log(chalk.green(Time + " [Database]") + " Linhas Retornadas/Afetadas: " + result.rowsAffected)//Aqui ele printa os objetos retornados da query (caso haja)
            WriteFileLog.SaveLog(Time + " [Database] Linhas Retornadas/Afetadas: " + result.rowsAffected + "\r\n")
            console.log(chalk.green(Time + " [Database]") + " Query foi executada com sucesso")
            WriteFileLog.SaveLog(Time + " [Database] Query foi executada com sucesso\r\n")
            console.log("-------------------FIM DA CONEXÃO COM O DB-----------------------")
        })
        .catch(err => {
            console.log(chalk.green(Time + " [Database]") + " Ocorreu um erro ao executar a Query")
            WriteFileLog.SaveLog(Time + " [Database] Ocorreu um erro ao executar a Query \r\n")
            res.json(err)//Aqui ele envia a mensagem de erro no formato JSON
            console.log("-------------------FIM DA CONEXÃO COM O DB-----------------------")
        });
}

module.exports = SQLQuery;