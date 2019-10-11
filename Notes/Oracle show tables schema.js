select * from all_tab_columns
where  table_name = 'customers';

//or if you using TOAD, type the table name in query textbox and press F4


--ORACLE GET SCHEMA
--get all tables from dbase
SELECT * FROM ALL_OBJECTS WHERE OBJECT_TYPE = 'TABLE' 
AND OWNER='THE_OWNER' and temporary='N' order by object_name

--get columns info for a table
select column_name,data_type, data_length from ALL_TAB_COLUMNS 
where OWNER = 'THE_OWNER' and TABLE_NAME='TABLE' order by column_id