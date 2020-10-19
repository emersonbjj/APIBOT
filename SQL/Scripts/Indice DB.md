# Database
Arquivo de referênça de todos os scripts relacionados ao banco de dados


![MSSQL](https://img.shields.io/badge/MMSQL-2019-blue)
![Scripts](https://img.shields.io/badge/Scripts-SQL-red)

## Sumário

* [[Scripts][Auxiliar] Create Table](#Script_Create_Table_Auxiliar)
* [[Scripts][Auxiliar] Insert into Table](#Script_Create_Table_Auxiliar)
* [[Scripts][Users] Create Table](#Script_Create_Table_Users)
* [[Scripts][Users] Insert into Table](#Script_Insert_Table_Users)
* [Querys](#Querys)
------------------------------------

## Script_Create_Table_Auxiliar

O script é responsável por criar a tabela auxiliar que irá ficar registrado informações de algumas informações, o script irá verificar se a table existe, caso não exista ela irá criar a tabela com as seguintes colunas:

| Column Name | Type         | Param    | PK/FK |
|-------------|--------------|----------|-------|
| ID          | integer      | NOT NULL | PK    |
| QueueIdent  | integer      | NOT NULL | FK    |
| Developer   | varchar(25)  | NOT NULL | -     |
| ProcessID   | varchar(15)  | NOT NULL | -     |
| KeyUser     | varchar(25)  | NOT NULL | -     |
| ProcessName | varchar(30)  | NOT NULL | -     |
| Schedules   | varchar(50)  | NOT NULL | -     |
| Description | varchar(Max) | NOT NULL | -     |
----------------------------------
## Script_Insert_Table_Auxiliar

O script é responsável por inserir novos registros na tabela auxiliar.

---------------------------------

## Script_Create_Table_Users

O script é responsável por criar a tabela de usuários que iram ter os privilegios de consultar e executar uma automaçaõ, o script irá verificar se a table existe, caso não exista ela irá criar a tabela com as seguintes colunas:

| Column Name  | Type        | Param    | PK/FK |
|--------------|-------------|----------|-------|
| ID           | integer     | NOT NULL | PK    |
| Name         | varchar(25) | NOT NULL | -     |
| Priv_Execute | BIT         | NOT NULL | -     |
| Priv_Search  | BIT         | NOT NULL | -     |
| Setor        | varchar(3)  | NOT NULL | -     |


## Script_Insert_Table_Users

O script é responsável por inserir novos registros na tabela auxiliar.
Por Default ele adicionará um usuário administrador
_________________
## Querys