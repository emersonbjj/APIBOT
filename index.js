//CABEÇALHO
const express = require('express');
const app = express();
const chalk = require('chalk');
const AP = require('./Apresentation')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(function (req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); res.header('Access-Control-Allow-Methods', 'POST, GET'); next(); });
const GETPROCESSBYNAME = require('./routers/GETPROCESSBYNAME');
const EXECUTIONBYDATE = require('./routers/EXECUTIONBYDATE');
const EXECUTEPROCESS = require('./routers/EXECUTEPROCESS');
const GETPROCESS = require('./routers/GETPROCESS');
const GETUSER = require('./routers/GETUSER');
const MAIN = require('./routers/MAIN');
const LOG = require('./routers/LOG');
const PORTSERV = process.env.PORT

// ******************CHAMADAS******************
//CHAMANDO ROTA PRINCIPAL
app.use('/', MAIN);
//GET ALL PROCESS
app.get('/process', GETPROCESS);
//GET EXECUTION BY DATE
app.get('/process/execution/:dt?:setor?', EXECUTIONBYDATE);
//GET USER
app.get('/log/:id?', GETUSER)
//GET PROCESS BY NAME
app.get('/process/:name?', GETPROCESSBYNAME)
//INSERT LOG IN BASE
app.post('/log', LOG)
//CREATE FILE .BAT AND EXECUTE PROCESS
app.post('/execution/:process?:resource?', EXECUTEPROCESS)
//INICIAR O SERVIDOR
app.listen(PORTSERV);
AP
console.log("API executando pela porta: " + chalk.yellow(PORTSERV));