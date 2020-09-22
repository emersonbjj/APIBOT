var express = require('express'),
    router = express.Router();
const Querys = require('../SQL/Querys');
const ExecuteQuery = require('../SQL/Execute Query')
router
    .get('/processos/:name?', (req, res) => {
        let filter = '';
        if (req.params.name)
            filter = "'%" + (req.params.name) + "%'";
        ExecuteQuery(Querys.SWProcess + filter, res);
    })
module.exports = router;