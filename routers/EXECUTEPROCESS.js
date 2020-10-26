//Este arquivo é responsável por criar um arquivo .bat e executa-lo
//Com o intuito de startar uma automação

require('dotenv').config();
var express = require('express'),
   router = express.Router();
const SaveFile = require('../SaveFile')//importa o modulo responsável por criar o arquivo .BAT
const execution = require('../SQL/ExecuteProcess')//importa o modulo responsável por executar um aquivo no CMD
router
   .post('/execution', (req, res) => {
      const processName = req.query.process;//Aqui ele captura o parametro nome do processo
      const resource = req.query.resource;//Aqui ele captura o parametro nome do recurso
      SaveFile.savebat(processName, resource)
         .then(resolve => {
            console.log("[Process] O arquivo foi criado com sucesso")
            execution.ExecutionProcess(resolve)
               .then(resolveExecution => {

                  res.json(resolveExecution)
                  console.log("[Process] O processo foi inicializado com sucesso.")
               })
               .catch(rejectExecution => {
                  res.json(rejectExecution)
                  console.log("[Process] Ocorreu um erro ao executar o processo.")
               }
               )

         })
      console.log("[Process] Não foi possível criar o arquivo")
         .catch(rejects => res.json({ error: rejects }))
   })
module.exports = router;