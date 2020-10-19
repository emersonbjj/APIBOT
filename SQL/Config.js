//Este arquivo é responsável pela conexão com o banco de dados
//O paramêtro "Database" não foi declarado para que as consultas possam ser feita em qualquer DB
//Caso queira apontar apenas para PD ou DEV declare Database : process.env.DB, e no arquivo .env insira o nome 

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
exports.module = BASE;