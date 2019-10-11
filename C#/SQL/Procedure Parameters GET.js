//http://stackoverflow.com/questions/3038364/get-stored-procedure-parameters-by-either-c-sharp-or-sql

select * from information_schema.parameters where specific_name='dt_addtosourcecontrol'

exec sp_sproc_columns 'dt_addtosourcecontrol'