//Este arquivo é reponsável pela construção de todas as consutas e inserts que serão feitos no banco de dados
//Cada Query é uma função que pode ou não receber parâmetros
const chalk = require('chalk');
const WriteFileLog = require('../Savelog')
require('express');
//Retorna o usuário cadastrado por ID digitado
function GETUSERBYID(id) {
    return new Promise((resolve, reject) => {
        try {
            const USER = `SELECT * FROM [BOT].[dbo].[Logon] WHERE [id] = '${id}'`
            setTimeout(() => {
                WriteFileLog.SaveLog("-------------------INICIO DA CONEXÃO COM O DB-----------------------");
            }, 1000);
            WriteFileLog.SaveLog("[Request] Consulta [GETUSERID] recebeu os seguintes parâmetros:" + `${id}`)
            resolve(USER) //Aqui ele retorna a consulta a ser executada caso aconteça tudo bem
        } catch {
            reject(chalk.green("[Request]") + " Algo deu erro ao realizar a consulta")//Aqui ele retorna a mensagem de erro a ser enviada em formato JSON
            WriteFileLog.SaveLog("[Request] Algo deu erro ao realizar a consulta")
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
            setTimeout(() => {
                WriteFileLog.SaveLog("-------------------INICIO DA CONEXÃO COM O DB-----------------------");
            }, 1000);
            WriteFileLog.SaveLog("[Request] Consulta [EXECUTIONBYDATE] recebeu os seguintes parâmetros: " + chalk.yellow(`${dt},${setor}`))
            resolve(EXECUTIONBYDATE) //Aqui ele retorna a consulta a ser executada caso aconteça tudo bem
        } catch {
            reject("[Request] Algo deu erro ao realizar a consulta")//Aqui ele retorna a mensagem de erro a ser enviada em formato JSON
            WriteFileLog.SaveLog("[Request] Algo deu erro ao realizar a consulta")
        }
    });
}
//Insere um log da DB passando como registro ID, nome, Setor e momento exato da consulta
function LOG(id, Nome, Setor, str) {
    return new Promise((resolve, reject) => {
        try {
            const LOG = `INSERT INTO [BOT].[dbo].[LOGBOT](id, nome, setor, time) VALUES(${id},'${Nome}','${Setor}','${str}')`
            setTimeout(() => {
                WriteFileLog.SaveLog("-------------------INICIO DA CONEXÃO COM O DB-----------------------");
            }, 1000);
            WriteFileLog.SaveLog("[Request] Consulta [LOG] recebeu os seguintes parâmetros: " + chalk.yellow(`${id},${Nome},${Setor},${str}`))
            resolve(LOG)//Aqui ele retorna a consulta a ser executada caso aconteça tudo bem
        } catch {
            reject("[Request] Algo deu erro ao inserir o log")//Aqui ele retorna a mensagem de erro a ser enviada em formato JSON
            WriteFileLog.SaveLog("[Request] Algo deu erro ao realizar a consulta")
        }
    });
}
//Retorna todos os Procesos existentes no banco de dados
function SPProcess() {
    return new Promise((resolve, reject) => {
        try {
            const SPProcess = `SELECT [Name] FROM [blueprism65-prd].[dbo].[BPAProcess] WHERE [ProcessType] = 'P'`
            setTimeout(() => {
                WriteFileLog.SaveLog("-------------------INICIO DA CONEXÃO COM O DB-----------------------");
            }, 1000);
            WriteFileLog.SaveLog("[Request] consulta [GETALLPROCESS] não recebe parâmetros.")
            resolve(SPProcess)//Aqui ele retorna a consulta a ser executada caso aconteça tudo bem
        } catch {
            reject("[Request] Algo deu erro ao realizar a consulta")//Aqui ele retorna a mensagem de erro a ser enviada em formato JSON
            WriteFileLog.SaveLog("[Request] Algo deu erro ao realizar a consulta")
        }
    });
}
//Retorna processos passando o nome dele.
//Retorna todos os processos de um setor passando o Setor como parâmetro.
function SWProcess(Name) {
    return new Promise((resolve, reject) => {
        try {
            const SWProcess = `SELECT [Name] FROM [blueprism65-prd].[dbo].[BPAProcess] WHERE [ProcessType] = 'P' AND [Name] like '%${Name}%'`
            setTimeout(() => {
                WriteFileLog.SaveLog("-------------------INICIO DA CONEXÃO COM O DB-----------------------");
            }, 1000);
            WriteFileLog.SaveLog("[Request] Consulta [PROCESS BY NAME] recebeu os seguintes parâmetros: " + chalk.yellow(`${Name}`))
            resolve(SWProcess)//Aqui ele retorna a consulta a ser executada caso aconteça tudo bem
        } catch {
            reject("[Request] Algo deu erro ao realizar a consulta")//Aqui ele retorna a mensagem de erro a ser enviada em formato JSON
            WriteFileLog.SaveLog("[Request] Algo deu erro ao realizar a consulta")
        }
    });
}


//Exporta Querys para serem usados nos arquivos de rotas
exports.SPProcess = SPProcess;
exports.SWProcess = SWProcess;
exports.GETUSERBYID = GETUSERBYID;
exports.EXECUTIONBYDATE = EXECUTIONBYDATE;
exports.LOG = LOG;