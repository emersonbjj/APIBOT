var express = require('express'),
    router = express.Router();
router
    .get('/', (req, res) => 
    res.json({ STATUS: 'API DATABASEBIA FUNCIONANDO !' }));


module.exports = router;