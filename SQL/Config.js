require('dotenv').config();
const BASE = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    "options": {
       "encrypt": false,
       "enableArithAbort": false
    },
 }
 exports.module=BASE;