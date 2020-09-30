require('express');

function GETUSERBYID(id) {
    return new Promise((resolve, reject) => {
        try {
            const USER = `SELECT * FROM [BOT].[dbo].[Logon] WHERE [id] = '${id}'`
            console.log(`[Database] Consulta [GETUSERBYID] recebeu os seguintes parâmetros: ${id}`)
            resolve(USER)
        } catch {
            reject("[Database] Algo deu erro ao realizar a consulta")
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
            reject("[Database] Algo deu erro ao realizar a consulta")
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
            reject("[Database] Algo deu erro ao inserir o log")
        }
    });
}
function SPProcess() {
    return new Promise((resolve, reject) => {
        try {
            const SPProcess = `SELECT [Name] FROM [BluePrism].[dbo].[BPAProcess]`
            console.log(`[Database] Consulta [LOG] não recebe parâmetros`)
            resolve(SPProcess)
        } catch {
            reject("[Database] Algo deu erro ao realizar a consulta")
        }
    });
}

function SWProcess(Name) {
    return new Promise((resolve, reject) => {
        try {
            const SWProcess = `SELECT [Name] FROM [BluePrism].[dbo].[BPAProcess] WHERE [ProcessType] = 'P' AND [Name] like %${Name}%`
            console.log(`[Database] Consulta [Process] recebeu os seguintes parâmetros: ${Name}`)
            resolve(SWProcess)
        } catch {
            reject("[Database] Algo deu erro ao realizar a consulta")
        }
    });
}


//Exporta Querys
exports.SPProcess = SPProcess;
exports.SWProcess = SWProcess;
exports.GETUSERBYID = GETUSERBYID;
exports.EXECUTIONBYDATE = EXECUTIONBYDATE;
exports.LOG = LOG;