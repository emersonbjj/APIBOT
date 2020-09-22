var express = require('express'),
   router = express.Router();
const Querys = require('../SQL/Querys');
const ExecuteQuery = require('../SQL/Execute Query')

router
   .get('/processos', (req, res) => {
      ExecuteQuery(Querys.SProcess, res);
   });

module.exports = router;