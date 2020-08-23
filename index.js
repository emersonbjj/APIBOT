//////////////////////////////////////////////////////
//                                                  //
//      API CHAT BOT  - Emerson Ferreira            //
//                                                  //
//////////////////////////////////////////////////////
//CABEÇALHO
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(function (req, res, next) {res.header("Access-Control-Allow-Origin", "*");res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); res.header('Access-Control-Allow-Methods', 'POST, GET'); next();});
const GETPROCESSBYNAME = require('./routers/GETPROCESSBYNAME');
const EXECUTIONBYDATE = require('./routers/EXECUTIONBYDATE');
const EXECUTEPROCESS = require('./routers/EXECUTEPROCESS');
const GETPROCESS = require('./routers/GETPROCESS');
const GETUSER = require('./routers/GETUSER');
const MAIN = require('./routers/MAIN');
const LOG = require('./routers/LOG');
const port = process.env.PORT;

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
//Create File .BAT AND Execute process
app.post('/execution', EXECUTEPROCESS)
//inicia o servidor
app.listen(port);
console.log('API funcionando!');