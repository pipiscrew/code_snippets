   Dim conne$ = "Provider=Microsoft.SQLSERVER.CE.OLEDB.3.5;Data Source=C:\1.sdf"
    Dim sqlC As ADOnet
    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
        sqlC = New ADOnet(conne)
        DataGridView1.DataSource = sqlC.GetDATATABLE("SELECT * FROM INFORMATION_SCHEMA.COLUMNS" & _
" WHERE (TABLE_NAME = N'test')")

        Dim dt As DataTable

        dt = sqlC.GetDATATABLE("SELECT * FROM INFORMATION_SCHEMA.TABLES")

        Dim rd As OleDb.OleDbDataReader

        For Each row As DataRow In dt.Rows
            Dim node As TreeGridNode = dg1.Nodes.Add(row.Item("table_name"), "", "")

            rd = sqlC.GetDATAREADER("SELECT * FROM INFORMATION_SCHEMA.COLUMNS" & _
" WHERE (TABLE_NAME = N'" & row.Item("table_name") & "')")

            While rd.Read
                node.Nodes.Add("", rd("column_name"), rd("data_type"))
            End While
        Next
    End Sub
    
    
'note    
    * tables - contains information about tables which belongs to opened database;
    * columns - contains all columns’ information;
    * referential_constraints - contains information about foreign keys, constraint names, constraint table names and PK constraint table names, update/delete rules etc;
    * table_constraints - describes table constraints if any connected with a table;
    * key_column_usage - shows primary key columns which have a constraint.
    
    
select * from information_schema.tables;
select * from information_schema.columns;
select * from information_schema.referential_constraints;
select * from information_schema.key_column_usage;
select * from information_schema.table_constraints;


'list primary keys:
SELECT KU.*
FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS AS TC
INNER JOIN
INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS KU
ON TC.CONSTRAINT_TYPE = 'PRIMARY KEY' AND
TC.CONSTRAINT_NAME = KU.CONSTRAINT_NAME
ORDER BY KU.TABLE_NAME, KU.ORDINAL_POSITION


'kai ayto den alla mono toy den leei pio pedio einai
SELECT * FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS WHERE CONSTRAINT_TYPE = 'PRIMARY KEY'  and (TABLE_NAME = N'test')