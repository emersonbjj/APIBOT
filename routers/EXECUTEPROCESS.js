require('dotenv').config();
var express = require('express'),
   router = express.Router();
const SaveFile = require('../SaveFile')
const execution = require('../SQL/ExecuteProcess')
router
   .post('/execution', (req, res) => {
      const processName = req.query.process;
      const resource = req.query.resource;
      const Username = process.env.USERNAMEBP;
      const Userpassword = process.env.USERPASSWORD;
      const dbconname = process.env.DBCONNAME;
         SaveFile.savebat(processName, resource,Username,Userpassword,dbconname)
            .then(resolve => {
               execution.ExecutionProcess(resolve)
                  .then(resolveExecution => res.json(resolveExecution))
                  .catch(rejectExecution => res.json(rejectExecution))

            })
            .catch(rejects => res.json({error:"rejects"}))
   })
module.exports = router;