'execute this with SqlCeCommand or OleDbCommand
'no working @ VS IDE
ALTER TABLE test
ADD SomeCOlumn2 INT




'no tested, said no work
ALTER TABLE Artists ALTER COLUMN Id IDENTITY (51,1)

'reply to this^ is for relations
ALTER TABLE tblAlpha
ADD CONSTRAINT MyConstraint FOREIGN KEY (FK_id) REFERENCES
tblGamma(GammaID)
ON UPDATE CASCADE

To verify that your foreign key was created, execute the following SQL:

SELECT * FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS




'Change datatype and allow NULLs for DateHired
ALTER TABLE dbo.Employee
ALTER COLUMN DateHired SMALLDATETIME NULL