# APIBOT
API desenvolvida para ser consumida pelo chatbot,
sua função é expor registros do banco de dados da BluPrism On Premises que fica registrado todos os logs de automações, bem como também é a sua função executar automações aparti de comandos via bat para o software AutomateC.exe.

![Build Status](https://img.shields.io/badge/API-Est%C3%A1vel-green)
![Version](https://img.shields.io/badge/Vers%C3%A3o-2.0.0-yellow)
![MSSQL](https://img.shields.io/badge/MMSQL-2019-blue)
![Private Mode](https://img.shields.io/badge/Projeto-Private-red)

## Sumário

* [Begin](#Begin)
* [Tecnologias](#Tecnologias)
* [Requests](#Requests)
* [Rotas](#Rotas)
* [Pendências](#Pendências)
* [DataBase](https://github.com/emersonbjj/APIBOT/blob/master/SQL/Scripts/Indice%20DB.md)


## Begin

Faça Download do projeto através do comando ` GIT AQUI`
Após fazer o donwload instale todas as dependências necessárias. 

```
1º npm install 
2º npm install express 
3º npm install mssql 
4º npm install git 
5º npm install dotenv
 ```
Após instalar todas as dependencias para iniciar o servidor execute:
`node index.js` ao termino do comando de execução você deverá receber a seguinte mensagem: "API executando pela porta: 4200"
## Tecnologias 

* [SQL](https://docs.microsoft.com/pt-br/sql/sql-server/?view=sql-server-2017)
* [JavaScript](https://nodejs.org/pt-br/docs/)
* [PowerShell](https://docs.microsoft.com/en-us/powershell/)


## Requests
- [X] Main.
- [X] Get all process.
- [X] Get only one process by name.
- [X] Get user by id.
- [X] Get execution by date.
- [X] Post Insert user log.
- [X] Post Execute Process.


## Pendências
- [X] Refatorar CODE.

## Rotas

#### Rota: '/', 
- Descriptions: Fica a nossa pagina principal, não apresenta nenhum conteudo.

#### Rota: '/log', 
- Descriptions: Responsável pela inserção de logs no banco de dados 
- Method: POST,
- Request: Body,
- Param: 
`{Name: ID,   Type: Integer.Name: Nome, Type: String.Name: Setor,Type: String.Name: Str, Type: Date.}`
- Exemplo de Requisição: 
```
  const settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:4200/log",
  "method": "POST",
  "headers": {
    "content-type": "application/x-www-form-urlencoded"
  },
  "data": {
    "id": "0002",
    "nome": "Tiago",
    "setor": "RPA"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
#### Rota: '/processos'
- Descriptions:Responsável por listar todos os processo existentes.
- Method:GET,
- Request: Nothing,
- Param:`{Nothing}`
- Exemplo de Requisição:
```
const settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:4200/processos",
  "method": "GET",
  "headers": {}
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
#### Rota: '/execution'
- Descriptions: Responsável pela execução de um processo.
- Method: POST,
- Request: Query,
- Param: `{Name: Process, Type: String. Name: Resource,  Type:String.}`
- Exemplo de Requisição:
```
const settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:4200/execution",
  "method": "POST",
  "headers": {
    "content-type": "application/x-www-form-urlencoded"
  },
  "data": {
    "process": "TESTE",
    "resource": "BACKOFFICE-EMER"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```
#### Rota: '/processos/execution/', 
- Description: Responsável por listar execuções de processos por data
- Method: GET,
- Request: Query,
- Param: `{Name: Dt, Type: String. Name: Setor,Type: String.}`
- Exemplo de Requisição:
```
const settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:4200/processos/execution?dt=18%2F08%2F2020&setor=RPA",
  "method": "GET",
  "headers": {
    "content-type": "application/x-www-form-urlencoded"
  },
  "data": {}
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

