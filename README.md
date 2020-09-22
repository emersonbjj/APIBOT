# APIBOT
API desenvolvida para ser consumida pelo chatbot,
sua função é expor registros do banco de dados da BluPrism On Premises que fica registrado todos os logs de automações, bem como também é a sua função executar automações aparti de comandos via bat para o software AutomateC.exe.


## Sumário
* [Requests](#Requests)
* [Rotas](#Rotas)
* [Pendências](#Pendências)
* [Tecnologias](#Tecnologias)


## Requests
- [X] Get all process.
- [X] Get only one processe by name.
- [X] Get user by id.
- [X] Post Insert user log.
- [X] Get execution by date.
- [X] Get main.
- [X] Post Execute Process.


## Pendências
- [X] Refatorar CODE.
- [-] Notificar em caso de falha de schedule
- [-] Padronizar todos os request com consulta.
- [-] Adicionar validações ao Execute Process sobre a execução.

## Rotas

#### Rota: '/', 
- Descriptions: Fica a nossa pagina principal, não apresenta nenhum conteudo.
-Exemplo de Requisição:
``

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
-Exemplo de Requisição:
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
-Exemplo de Requisição:
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
-Exemplo de Requisição:
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

## Tecnologias
* [X] NODEJS.
* [X] MSSQL.