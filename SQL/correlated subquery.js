//http://www.pipiscrew.com/2015/12/sql-correlated-update/

A correlated subquery is a SELECT statement nested inside another T-SQL statement, which contains a reference to one or more columns in the outer query. The correlated subquery will be run once for each candidate row selected by the outer query. When you use a correlated subquery in an UPDATE statement, the correlation name refers to the rows you are interested in updating.

The following examples use AdventureWorks sample database.

Perform an update with a correlated subquery.

source – http://data.bangtech.com/sql/sql_update_with_correlated_subquery.htm

USE AdventureWorks;
 
UPDATE d 
SET Name =
(
 SELECT Name FROM
 BackupOfAdventureWorks.HumanResources.Department 
 WHERE DepartmentID = d.DepartmentID
)
FROM HumanResources.Department d;
Perform an update using JOIN


USE AdventureWorks;
 
UPDATE d 
SET d.Name = bd.Name
FROM HumanResources.Department d
JOIN BackupOfAdventureWorks.HumanResources.Department bd
ON bd.DepartmentID = d.DepartmentID;
 
-----------------------------------------------------------------------

--http://stackoverflow.com/a/7031405
UPDATE table1 t1
   SET (name, desc) = (SELECT t2.name, t2.desc
                         FROM table2 t2
                        WHERE t1.id = t2.id)
 WHERE EXISTS (
    SELECT 1
      FROM table2 t2
     WHERE t1.id = t2.id )
     
     
-----------------------------------------------------------------------

WITH    tmpToastFields
AS      (SELECT c.Code,
                c.DIM
        FROM   RON_Products AS sp
                LEFT OUTER JOIN
                RON_DIM AS c
                ON c.DIM = sp.DIM1
        WHERE  sp.DIM1 IS NOT NULL
        UNION
        SELECT c2.Code,
                c2.DIM
        FROM   RON_Products AS sp
                LEFT OUTER JOIN
                RON_DIM AS c2
                ON c2.DIM = sp.DIM2
        WHERE  sp.DIM2 IS NOT NULL)
UPDATE  ptf
    SET ptf.ToastField_Code    = t.CODE,
        ptf.ToastField_AlternativeCode = t.DIM
FROM    COM_ToastFields AS ptf
        INNER JOIN
        tmpToastFields AS t
        ON t.CODE = ptf.ToastField_Code
WHERE   ptf.ToastField_DataType = 5; 
 