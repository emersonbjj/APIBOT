IF NOT EXISTS (
   SELECT
   [name]
FROM
   sys.tables
WHERE
      [name] = 'Users'
) CREATE TABLE Users
(
   [ID] integer PRIMARY KEY NOT NULL,
   [Name] varchar(25) NOT NULL,
   [Priv_Execute] BIT NOT NULL,
   [Priv_Search] BIT NOT NULL,
   [Setor] varchar(3) NOT NULL
)