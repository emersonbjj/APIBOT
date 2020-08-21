var express = require('express'),
    router = express.Router();
    const SaveFile = require('../SaveFile')
    const execution = require('../SQL/ExecuteProcess')
router
.post('/execution', (req, res) => {
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
 module.exports = router;