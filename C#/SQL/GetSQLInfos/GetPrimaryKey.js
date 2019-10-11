SELECT column_name
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE OBJECTPROPERTY(OBJECT_ID(constraint_name), 'IsPrimaryKey') = 1
AND table_name = 'pelates'

//OR

//holds the primary key [test with SQLEXPRESS2008r2 - DBASE : AdventureWorks - TABLE : EmployeeDepartmentHistory -- returns multiple primary keys!]
DataTable primaryKeyFieldName = General.ADOClass.GetDataTable("select 	c.COLUMN_NAME,c.CONSTRAINT_SCHEMA as [DBSCHEMA]" +
                                                                "	from 	INFORMATION_SCHEMA.TABLE_CONSTRAINTS pk, " +
                                                                "		INFORMATION_SCHEMA.KEY_COLUMN_USAGE c " +
                                                                "	where 	pk.TABLE_NAME = '" + General.GetTableNameWithoutSchemaAndBrackets(treeV1.SelectedNode.Text) + "' " +
                                                                "	and	CONSTRAINT_TYPE = 'PRIMARY KEY' " +
                                                                "	and	c.TABLE_NAME = pk.TABLE_NAME " +
                                                                "	and	c.CONSTRAINT_NAME = pk.CONSTRAINT_NAME");
                                                                
                                                                
                                                                
//FOREIGN AND PRIMARY 
select 	c.COLUMN_NAME, 
CASE CONSTRAINT_TYPE
WHEN 'FOREIGN KEY' THEN 0
WHEN 'PRIMARY KEY' THEN 1
END AS ISPRIMARY

from 	INFORMATION_SCHEMA.TABLE_CONSTRAINTS pk, 
INFORMATION_SCHEMA.KEY_COLUMN_USAGE c 
where 	pk.TABLE_NAME = 'Employees'
and	(CONSTRAINT_TYPE = 'FOREIGN KEY' OR CONSTRAINT_TYPE = 'PRIMARY KEY')  
and	c.TABLE_NAME = pk.TABLE_NAME 
and	c.CONSTRAINT_NAME = pk.CONSTRAINT_NAME