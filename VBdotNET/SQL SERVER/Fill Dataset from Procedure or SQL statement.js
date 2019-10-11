            Dim objConn As SqlConnection = New SqlConnection()
            Dim sqlco As SqlCommand = New SqlCommand()
            Dim sqlAD As SqlDataAdapter = New SqlDataAdapter()
            Dim sqlSET As DataSet = New DataSet

            objConn.ConnectionString = ConneSTR
            objConn.Open()

		'procedure or SQL statement
            sqlco.CommandText = "ListALLStocksByDate '" & DateTimePicker1.Value.Year & DateTimePicker1.Value.Month & DateTimePicker1.Value.Day & "','" & DateTimePicker2.Value.Year & DateTimePicker2.Value.Month & DateTimePicker2.Value.Day & "'"
            sqlco.Connection = objConn

            sqlAD.SelectCommand = sqlco
            sqlAD.Fill(ds, "DataTable1")