//////////////////////////////////////////////////////
//                                                  //
//      API CHAT BOT  - Emerson Ferreira            //
//                                                  //
//////////////////////////////////////////////////////
//CABEÇALHO
require('dotenv').config();
const SaveFile = require('./SaveFile')
const execution = require('./SQL/ExecuteProcess')
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header('Access-Control-Allow-Methods', 'POST, GET');
   next();
});
const LOG = require('./routers/LOG');
const GETPROCESSBYNAME = require('./routers/GETPROCESSBYNAME');
const EXECUTIONBYDATE = require('./routers/EXECUTIONBYDATE');
const GETPROCESS = require('./routers/GETPROCESS');
const GETUSER = require('./routers/GETUSER');
const MAIN = require('./routers/MAIN');
const port = process.env.PORT; //porta padrão
const router = express.Router();

// ******************CHAMADAS*****************
//CHAMANDO ROTA PRINCIPAL
app.use('/', MAIN);
//GET ALL PROCESS
app.get('/processos', GETPROCESS);
//GET EXECUTION BY DATE
app.get('/processos/execution/:dt?:setor?', EXECUTIONBYDATE);
//GET USER
app.get('/log/:id?', GETUSER)
//GET PROCESS BY NAME
app.get('/processos/:name?',GETPROCESSBYNAME)
//Insert LOG IN BASE
app.post('/log', LOG)


//Create File .BAT
router.post('/execution', (req, res) => {
   const process = req.body.process;
   const resource = req.body.resource;
   const schedule = req.body.schedule;
   if (schedule != "" && process != "")
      SaveFile.savebat(process, resource)
         .then(resolve => {
            execution.ExecutionProcess(resolve)
               .then(resolveExecution => res.json(resolveExecution))
               .catch(rejectExecution => res.json(rejectExecution))

         })
         .catch(rejects => res.json(rejects))
})

//inicia o servidor
app.listen(port);
console.log('API funcionando!');