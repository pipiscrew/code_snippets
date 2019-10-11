//http://ajnt.wordpress.com/2011/12/15/how-to-search-for-a-stored-procedure-containing-a-table-name/


SELECT ROUTINE_NAME, ROUTINE_DEFINITION 
    FROM INFORMATION_SCHEMA.ROUTINES 
    WHERE ROUTINE_DEFINITION LIKE ‘%foobar%’ 
    AND ROUTINE_TYPE=’PROCEDURE’