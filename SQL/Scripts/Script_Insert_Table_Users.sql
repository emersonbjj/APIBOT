USE [USERS]
GO
INSERT INTO [dbo].[USERS]
    (
    [ID],
    [Name],
    [Priv_Execute],
    [Priv_Search],
    [Setor]
    )
VALUES
    (

        111 , int,
        "root" , varchar,
        1, BIT ,
        1 , BIT ,
        "RPA" , varchar

)
GO