require('express');

function GETUSERBYID(id) {
    return new Promise((resolve, reject) => {
        try {
            const USER = `SELECT * FROM [BOT].[dbo].[Logon] WHERE [id] = '${id}'`
            console.log(`[Database] Consulta [GETUSERBYID] recebeu os seguintes parâmetros: ${id}`)
            resolve(USER)
        } catch {
            reject("Algo deu erro")
        }
    });
}

function EXECUTIONBYDATE(dt, setor) {
    return new Promise((resolve, reject) => {
        try {
            const EXECUTIONBYDATE = `SELECT P.name As 'Process',FORMAT(DATEADD(hour,-3,[startdatetime]),'HH:mm:ss tt dd/MM/yyyy') AS 'Start'
            ,FORMAT(DATEADD(hour,-3,[enddatetime]),'HH:mm:ss tt dd/MM/yyyy')AS 'End'
            ,ST.description AS 'Status' FROM [BluePrism].[dbo].[BPASession] AS S
             INNER JOIN BPAProcess AS P ON S.processid = P.processid 
             INNER JOIN BPAStatus AS ST ON S.statusid = ST.statusid 
             WHERE FORMAT(DATEADD(hour,-3,[startdatetime]),'dd/MM/yyyy') = '${dt}' AND P.name like '%${setor}%'`
            console.log(`[Database] Consulta [EXECUTIONBYDATE] recebeu os seguintes parâmetros: ${dt},${setor}`);
            resolve(EXECUTIONBYDATE)
        } catch {
            reject("Algo deu erro")
        }
    });
}

function LOG(id, Nome, Setor, str) {
    return new Promise((resolve, reject) => {
        try {
            const LOG = `INSERT INTO [BOT].[dbo].[LOGBOT](id, nome, setor, time) VALUES(${id},'${Nome}','${Setor}','${str}')`
            console.log(`[Database] Insert [LOG] recebeu os seguintes parâmetros: ${id},${Nome},${Setor},${str}`)
            resolve(LOG)
        } catch {
            reject("Algo deu erro")
        }
    });
}



const SProcess = 'SELECT [Name] FROM [BluePrism].[dbo].[BPAProcess]';
const SWProcess = "SELECT [Name] FROM [BluePrism].[dbo].[BPAProcess] WHERE [ProcessType] = 'P' AND [Name] like";
const ProcessByDate = "SELECT P.name As 'Process',FORMAT (DATEADD(hour,-3,[startdatetime]), 'HH:mm:ss tt dd/MM/yyyy') AS 'Time Start',FORMAT (DATEADD(hour,-3,[enddatetime]), 'HH:mm:ss tt dd/MM/yyyy')AS 'Time End',ST.description AS 'Status' FROM [BluePrism].[dbo].[BPASession] AS S INNER JOIN BPAProcess AS P ON S.processid = P.processid INNER JOIN BPAStatus AS ST ON S.statusid = ST.statusid WHERE FORMAT(DATEADD(hour,-3,[startdatetime]),'dd/MM/yyyy')"

//Exporta Querys
exports.SProcess = SProcess;
exports.SWProcess = SWProcess;
exports.ProcessByDate = ProcessByDate;
exports.GETUSERBYID = GETUSERBYID;
exports.EXECUTIONBYDATE = EXECUTIONBYDATE;
exports.LOG = LOG;