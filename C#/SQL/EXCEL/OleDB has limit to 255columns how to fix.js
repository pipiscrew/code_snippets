//http://social.msdn.microsoft.com/Forums/en-US/adodotnetdataproviders/thread/cf21f1be-d6e8-4ed9-b977-d6876bf0cf06/


//A1:BP1200 selects from 1column to 76column for 1200rows
//ofc u can remove 1200
255 is the column limit for provider i guess. Anyway try to use 'Range" in select command and see what is happening.

 string sql = "select * from [Foglio1$A1:BP1200]"; // apply range to the query
 
 
 //so the proper to limit only to 255columns
 string sql = "select * from [A1:IU]"; 
 