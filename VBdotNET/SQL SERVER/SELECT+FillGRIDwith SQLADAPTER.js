        Dim objConn As SqlConnection = New SqlConnection()
        Dim sqlco As SqlCommand = New SqlCommand()
        Dim sqlAD As SqlDataAdapter = New SqlDataAdapter()
        Dim sqlSET As DataSet = New DataSet

        objConn.ConnectionString = "data source=OTINANAI\SQLEXPRESS;initial catalog=test;persist security info=False;user id=ss;password=1234;workstation id=OTINANAI\SQLEXPRESS;packet size=4096"
        objConn.Open()

        sqlco.CommandText = "select * from customers"
        sqlco.Connection = objConn

        sqlAD.SelectCommand = sqlco
        sqlAD.Fill(sqlSET, "custBOB")

        DataGridView1.DataSource = sqlSET
        DataGridView1.DataMember = "custBOB"

        DataGridView1.Columns(0).Visible = False 'Hide ID

        objConn.Close()
        objConn.Dispose()