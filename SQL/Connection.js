const sql = require('mssql');
const BASE = require('./Config');
const connect =
    sql.connect(BASE)
        .then(conn => global.conn = conn)
        .catch(err => console.log(err));
exports.module = connect;