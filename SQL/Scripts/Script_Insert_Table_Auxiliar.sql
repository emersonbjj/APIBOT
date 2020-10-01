USE [Auxiliar]
GO
INSERT INTO [dbo].[Auxiliar_RPA]
    (
    QueueIdent,
    ProcessID,
    Developer,
    KeyUser,
    ProcessName,
    Schedules,
    Descriptions
    )
VALUES
    (

        Value_QueueIdent, integer,
        Value_ProcessID, varchar,
        Value_Developer, varchar,
        Value_KeyUser, varchar,
        Value_ProcessName, varchar,
        Value_Schedules, varchar,
        Value_Descriptions, varchar
)
GO