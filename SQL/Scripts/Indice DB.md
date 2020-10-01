# Database
Arquivo de referênça de todos os scripts relacionados ao banco de dados


![MSSQL](https://img.shields.io/badge/MMSQL-2019-blue)
![Scripts](https://img.shields.io/badge/Scripts-SQL-red)

## Sumário

* [[Scripts][Auxiliar] Create Table ](#Script_Create_Table_Auxiliar)
* [Querys](#Querys)


## Script_Create_Table_Auxiliar

O script irá verificar se a table existe, caso não exista ela irá criar a tabela com as seguintes colunas:

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




