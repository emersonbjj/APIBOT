# APIBOT
API desenvolvida para ser consumida pelo chatbot realizando consulta na base de dados e executando automações

Request's
- [X] Get all process.
- [X] Get only one processe by name.
- [X] Get user by id.
- [X] Post Insert user log.
- [X] Get execution by date.
- [X] Get main.
- [X] Post Execute Process.
- [X] Refatorar CODE.
- [ ] Notificar em caso de falha de schedule
- [ ] Padronizar todos os request com consulta.
- [ ] Adicionar validações ao Execute Process sobre a execução.

## Rotas

- [X] '/', 
# Descriptions: 
Fica a nossa pagina principal, não apresenta nenhum conteudo.

- [X] '/log', 
# Descriptions: 
Responsável pela inserção de logs no banco de dados 
# Method:
POST,
# Request:
Body,
# Param: 
{
Name: ID,   Type: Integer.
Name: Nome, Type: String.
Name: Setor,Type: String.
Name: Str,  Type: Date.
}

- [X] '/processos'
# Descriptions:
Responsável por listar todos os processo existentes.
# Method:
GET,
# Request: 
Nothing,
# Param:
{Nothing}

- [X] '/execution', 
# Descriptions:
Responsável pela execução de um processo.
# Method:
POST,
Request: Query,
Param: {
Name: Process,   Type: String.
Name: Resource,  Type: String.
}

- [X] '/processos/execution/', 
Description: Responsável por listar execuções de processos por data
Method: GET,
Request: Query,
Param: {
Name: Dt,   Type: String.
Name: Setor,Type: String.