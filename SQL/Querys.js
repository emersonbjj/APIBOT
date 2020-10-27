//Este arquivo é reponsável pela construção de todas as consutas e inserts que serão feitos no banco de dados
//Cada Query é uma função que pode ou não receber parâmetros
const chalk = require('chalk');
const WriteFileLog = require('../Savelog')
const Time = new Date().toLocaleDateString('pt-Br', { timeStyle: 'full' })
require('express');
//Retorna o usuário cadastrado por ID digitado
function GETUSERBYID(id) {
    return new Promise((resolve, reject) => {
        try {
            const USER = `SELECT * FROM [BOT].[dbo].[Logon] WHERE [id] = '${id}'`
            console.log("-------------------INICIO DA CONEXÃO COM O DB-----------------------");
            console.log(chalk.green(Time + " [Database]") +" Consulta "+chalk.green("[GETUSERID]") + "recebeu os seguintes parâmetros: "+chalk.yellow(`${id}`));
            WriteFileLog.SaveLog(Time + " [Database] Consulta [GETUSERID] recebeu os seguintes parâmetros:"+`${id}\r\n`)
            resolve(USER) //Aqui ele retorna a consulta a ser executada caso aconteça tudo bem
        } catch {
            reject(chalk.green(Time + " [Database]") +" Algo deu erro ao realizar a consulta")//Aqui ele retorna a mensagem de erro a ser enviada em formato JSON
            WriteFileLog.SaveLog(Time + " [Database] Algo deu erro ao realizar a consulta\r\n")
        }
    });
}
//Retorna execuções de um dia passando ID da automação e a data desejada
function EXECUTIONBYDATE(dt, setor) {
    return new Promise((resolve, reject) => {
        try {
            const EXECUTIONBYDATE = `SELECT P.name As 'Process'
            , FORMAT(DATEADD(hour,-3,[startdatetime]),'HH:mm:ss tt dd/MM/yyyy') AS 'Start'
            , FORMAT(DATEADD(hour,-3,[enddatetime]),'HH:mm:ss tt dd/MM/yyyy')AS 'End'
            , ST.description AS 'Status'
             FROM [blueprism65-prd].[dbo].[BPASession] AS S
             INNER JOIN [blueprism65-prd].[dbo].BPAProcess AS P ON S.processid = P.processid
             INNER JOIN [blueprism65-prd].[dbo].BPAStatus AS ST ON S.statusid = ST.statusid 
             WHERE FORMAT(DATEADD(hour,-3,[startdatetime]),'dd/MM/yyyy') = '${dt}' AND P.name like '%${setor}%'`
             console.log("-------------------INICIO DA CONEXÃO COM O DB-----------------------");
             console.log(chalk.green(Time + " [Database]") + " Consulta "+ chalk.green("[EXECUTIONBYDATE]") + " recebeu os seguintes parâmetros:" + chalk.yellow(`${dt},${setor}`));
             WriteFileLog.SaveLog(Time + " [Database] Consulta [EXECUTIONBYDATE] recebeu os seguintes parâmetros: "+ `${dt},${setor}\r\n`)
             resolve(EXECUTIONBYDATE) //Aqui ele retorna a consulta a ser executada caso aconteça tudo bem
        } catch {
            reject(chalk.green(Time + " [Database]") +" Algo deu erro ao realizar a consulta")//Aqui ele retorna a mensagem de erro a ser enviada em formato JSON
            WriteFileLog.SaveLog(Time + " [Database] Algo deu erro ao realizar a consulta\r\n")
        }
    });
}
//Insere um log da DB passando como registro ID, nome, Setor e momento exato da consulta
function LOG(id, Nome, Setor, str) {
    return new Promise((resolve, reject) => {
        try {
            const LOG = `INSERT INTO [BOT].[dbo].[LOGBOT](id, nome, setor, time) VALUES(${id},'${Nome}','${Setor}','${str}')`
            console.log("-------------------INICIO DA CONEXÃO COM O DB-----------------------");
            console.log(chalk.green(Time + " [Database]") +" Insert "+ chalk.green("[LOG]")+ " recebeu os seguintes parâmetros: "+chalk.yellow(`${id},${Nome},${Setor},${str}`))
            WriteFileLog.SaveLog(Time + " [Database] Consulta [LOG] recebeu os seguintes parâmetros: "+ `${id},${Nome},${Setor},${str}\r\n`)
            resolve(LOG)//Aqui ele retorna a consulta a ser executada caso aconteça tudo bem
        } catch {
            reject(chalk.green(Time + " [Database]") +" Algo deu erro ao inserir o log")//Aqui ele retorna a mensagem de erro a ser enviada em formato JSON
            WriteFileLog.SaveLog(Time + " [Database] Algo deu erro ao realizar a consulta\r\n")
        }
    });
}
//Retorna todos os Procesos existentes no banco de dados
function SPProcess() {
    return new Promise((resolve, reject) => {
        try {
            const SPProcess = `SELECT [Name] FROM [blueprism65-prd].[dbo].[BPAProcess] WHERE [ProcessType] = 'P'`
            console.log("-------------------INICIO DA CONEXÃO COM O DB-----------------------");
            console.log(chalk.green(Time + " [Database]") +" Consulta"+chalk.green("[GETALLPROCESS]") +" não recebe parâmetros")
            WriteFileLog.SaveLog(Time + " [Database] consulta [GETALLPROCESS] não recebe parâmetros.\r\n")

            resolve(SPProcess)//Aqui ele retorna a consulta a ser executada caso aconteça tudo bem
        } catch {
            reject(chalk.green(Time + " [Database]") +" Algo deu erro ao realizar a consulta")//Aqui ele retorna a mensagem de erro a ser enviada em formato JSON
            WriteFileLog.SaveLog(Time + " [Database] Algo deu erro ao realizar a consulta\r\n")
        }
    });
}
//Retorna processos passando o nome dele.
//Retorna todos os processos de um setor passando o Setor como parâmetro.
function SWProcess(Name) {
    return new Promise((resolve, reject) => {
        try {
            const SWProcess = `SELECT [Name] FROM [blueprism65-prd].[dbo].[BPAProcess] WHERE [ProcessType] = 'P' AND [Name] like '%${Name}%'`
            console.log("-------------------INICIO DA CONEXÃO COM O DB-----------------------");
            console.log(chalk.green(Time + " [Database]") +" Consulta " +chalk.green("[PROCESS BY NAME]") +" recebeu o seguinte parâmetro: "+ chalk.yellow(`${Name}`))
            WriteFileLog.SaveLog(Time + " [Database] Consulta [PROCESS BY NAME] recebeu os seguintes parâmetros: "+ `${Name}\r\n`)
            resolve(SWProcess)//Aqui ele retorna a consulta a ser executada caso aconteça tudo bem
        } catch {
            reject(chalk.green(Time + " [Database]") +" Algo deu erro ao realizar a consulta")//Aqui ele retorna a mensagem de erro a ser enviada em formato JSON
            WriteFileLog.SaveLog(Time + " [Database] Algo deu erro ao realizar a consulta\r\n")
        }
    });
}


//Exporta Querys para serem usados nos arquivos de rotas
exports.SPProcess = SPProcess;
exports.SWProcess = SWProcess;
exports.GETUSERBYID = GETUSERBYID;
exports.EXECUTIONBYDATE = EXECUTIONBYDATE;
exports.LOG = LOG;