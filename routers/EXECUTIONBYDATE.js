var express = require('express'),
    router = express.Router();

const Querys = require('../SQL/Querys');
const ExecuteQuery = require('../SQL/Execute Query')

router.
get('/processos/execution/:dt?:setor?', (req, res) => {
    const dt = req.query.dt;
    const setor = req.query.setor;
    Querys.EXECUTIONBYDATE(dt, setor)
        .then(resolve => ExecuteQuery(resolve, res))
        .catch(reject => res.json({
            message: reject
        }))
})

module.exports = router;