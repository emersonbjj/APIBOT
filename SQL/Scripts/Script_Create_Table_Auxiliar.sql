IF NOT EXISTS (
   SELECT
   [name]
FROM
   sys.tables
WHERE
      [name] = 'Auxiliar_RPA'
) CREATE TABLE Auxiliar_RPA
(
   ID integer  IDENTITY(1,1) PRIMARY KEY NOT NULL,
   QueueIdent integer NOT NULL,
   ProcessID varchar(15) NOT NULL,
   Developer varchar(25) NOT NULL,
   KeyUser varchar(25) NOT NULL,
   ProcessName varchar(30) NOT NULL,
   Schedules varchar(50) NOT NULL,
   Descriptions varchar(MAX) NOT NULL
)