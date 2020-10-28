//Este arquivo é responsável por criar um arquivo .bat e executa-lo
//Com o intuito de startar uma automação
const chalk = require('chalk');
const WriteFileLog = require('../Savelog')
require('dotenv').config();
var express = require('express'),
   router = express.Router();
const SaveFile = require('../SaveFile')//importa o modulo responsável por criar o arquivo .BAT
const execution = require('../SQL/ExecuteProcess')//importa o modulo responsável por executar um aquivo no CMD
const Time = new Date().toLocaleDateString('pt-Br', { timeStyle: 'full' })

router
   .post('/execution/:process?:resource?', (req, res) => {
      const processName = req.query.process;//Aqui ele captura o parametro nome do processo
      const resource = req.query.resource;//Aqui ele captura o parametro nome do recurso
      SaveFile.savebat(processName, resource)
         .then(resolve => {
            WriteFileLog.SaveLog("[Process] O arquivo foi criado com sucesso")
            execution.ExecutionProcess(resolve)
               .then(resolveExecution => {
                  res.json(resolveExecution)
                  WriteFileLog.SaveLog("[Process] O processo foi inicializado com sucesso.")
                  WriteFileLog.SaveLog("-------------------FIM DA EXECUÇÃO-----------------------")
               })
               .catch(rejectExecution => {
                  res.json(rejectExecution)
                  WriteFileLog.SaveLog("[Process] Ocorreu um erro ao executar o processo.")
                  WriteFileLog.SaveLog("-------------------FIM DA EXECUÇÃO-----------------------")
               })
         })
         .catch(rejects => res.json(rejects))
      // console.log(Time + " [Process]Não foi possível criar o arquivo")
   })
module.exports = router;