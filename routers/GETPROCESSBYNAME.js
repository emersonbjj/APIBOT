var express = require('express'),
    router = express.Router();
const Querys = require('../SQL/Querys');
const ExecuteQuery = require('../SQL/Execute Query')
router
    .get('/processos/:name?', (req, res) => {
        const name = req.params.name
        Querys.SWProcess(name)
            .then(resolve => ExecuteQuery(resolve, res))
            .catch(reject => res.json({
                message: reject
            }))
    })
module.exports = router;