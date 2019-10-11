            conne = "Provider=Microsoft.Jet.OleDb.4.0;Data Source=" & fl & ";Extended Properties=Excel 8.0"

            'DataGridView1.DataSource = sqlc.QueryDatabaseDATASET("SELECT * FROM [sheet1$]")
            DataGridView1.DataSource = sqlc.QueryDatabaseDATASET("SELECT * FROM [???????$]")
            DataGridView1.DataMember = "DefaultTable"
            
            
            


insert to SQL :

            Dim insertSQL$ = ""

            For i = 0 To DataGridView1.Rows.Count - 1
                insertSQL = insertSQL & ("insert into GRAFEIO (CATEGORY,INPUTCODE,AA1,ZONI1,AA2,ZONI2,ADDRESS,COMMENT,ADDRESS_CITY,ANWDOMH,DESCRIPTION,PRICE,CITY,CATID,SUB_CAT_ID) VALUES ('" & QuoteMod(DataGridView1.Rows.Item(i).Cells(0).Value.ToString) & "','" & _
                QuoteMod(DataGridView1.Rows.Item(i).Cells(1).Value.ToString) & "','" & _
                QuoteMod(DataGridView1.Rows.Item(i).Cells(2).Value.ToString) & "','" & _
                QuoteMod(DataGridView1.Rows.Item(i).Cells(3).Value.ToString) & "','" & _
                QuoteMod(DataGridView1.Rows.Item(i).Cells(4).Value.ToString) & "','" & _
                QuoteMod(DataGridView1.Rows.Item(i).Cells(5).Value.ToString) & "','" & _
                QuoteMod(DataGridView1.Rows.Item(i).Cells(6).Value.ToString) & "','" & _
                QuoteMod(DataGridView1.Rows.Item(i).Cells(7).Value.ToString) & "','" & _
                QuoteMod(DataGridView1.Rows.Item(i).Cells(8).Value.ToString) & "','" & _
                QuoteMod(DataGridView1.Rows.Item(i).Cells(9).Value.ToString) & "','" & _
                QuoteMod(DataGridView1.Rows.Item(i).Cells(10).Value.ToString) & "','" & _
                QuoteMod(DataGridView1.Rows.Item(i).Cells(11).Value.ToString) & "','" & _
                QuoteMod(DataGridView1.Rows.Item(i).Cells(12).Value.ToString) & "'," & _
                QuoteMod(DataGridView1.Rows.Item(i).Cells(13).Value.ToString) & "," & _
                QuoteMod(DataGridView1.Rows.Item(i).Cells(14).Value.ToString) & ");" & vbCrLf)
            Next i


            Dim objConn As SqlClient.SqlConnection = New SqlClient.SqlConnection()

            objConn.ConnectionString = "data source=COSTAS\SQLEXPRESS;initial catalog=PRAXIS;integrated security=SSPI"
            objConn.Open()

            Dim sqlco As SqlClient.SqlCommand = New SqlClient.SqlCommand()
            sqlco.Connection = objConn
            sqlco.CommandText = "delete from grafeio"
            sqlco.ExecuteNonQuery()

            sqlco.Connection = objConn
            sqlco.CommandText = insertSQL
            sqlco.ExecuteNonQuery()

            objConn.Close()
            objConn.Dispose()