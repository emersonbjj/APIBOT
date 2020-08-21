//Declara Querys


const SProcess = 'SELECT [Name] FROM [BluePrism].[dbo].[BPAProcess]';
const SWProcess = "SELECT [Name] FROM [BluePrism].[dbo].[BPAProcess] WHERE [ProcessType] = 'P' AND [Name] like";
const InsertLOG = "INSERT INTO [dbo].[LOGB] (id,nome,setor) VALUES (req.body.id,req.body.nome,req.body.setor)"
const ProcessByDate = "SELECT P.name As 'Process',FORMAT (DATEADD(hour,-3,[startdatetime]), 'HH:mm:ss tt dd/MM/yyyy') AS 'Time Start',FORMAT (DATEADD(hour,-3,[enddatetime]), 'HH:mm:ss tt dd/MM/yyyy')AS 'Time End',ST.description AS 'Status' FROM [BluePrism].[dbo].[BPASession] AS S INNER JOIN BPAProcess AS P ON S.processid = P.processid INNER JOIN BPAStatus AS ST ON S.statusid = ST.statusid WHERE FORMAT(DATEADD(hour,-3,[startdatetime]),'dd/MM/yyyy')"

//Exporta Querys
exports.SProcess = SProcess;
exports.SWProcess = SWProcess;
exports.InsertLOG = InsertLOG;
exports.ProcessByDate = ProcessByDate;