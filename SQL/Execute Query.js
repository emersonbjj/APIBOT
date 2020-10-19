//Este arquivo é responsável por executar uma query que é passada pelo parâmetro CommandSql

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
            console.log("[Database] Query está sendo executada")
            res.json(result.recordset)//Aqui ele retorna os objetos retornados da query (caso haja)
            console.log("[Resultado]: " + result.recordset)//Aqui ele printa os objetos retornados da query (caso haja)
            console.log("[Database] Query foi executada com sucesso")
        })
        .catch(err => {
            console.log("[Database] Ocorreu um erro ao executar a Query")
            res.json(err)//Aqui ele envia a mensagem de erro no formato JSON
        });
}

module.exports = SQLQuery;