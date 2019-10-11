#Region " Fill COMBO WITH COMPANIES "
    Private Sub FillCombo()
        Try
            Cursor = System.Windows.Forms.Cursors.WaitCursor

            ComboBox1.Items.Clear()

            Dim objConn As SqlConnection = New SqlConnection()

            objConn.ConnectionString = ConneSTR
            objConn.Open()

            Dim sqlco As SqlCommand = New SqlCommand()
            sqlco.Connection = objConn
            sqlco.CommandText = "select ACNT,NAME  from [ACNT] where code like '03.24.%' and ACNT.ACNSCHEMA=200 order by name"

            Dim sqlread As SqlClient.SqlDataReader = sqlco.ExecuteReader()
            ComboBox1.Items.Add(New ComboClass("", 0))

            While sqlread.Read
                ComboBox1.Items.Add(New ComboClass(sqlread(1), sqlread(0)))
            End While

            sqlread.Close()
            objConn.Close()
            objConn.Dispose()

            ComboBox1.SelectedIndex = 0
        Catch ex As Exception
            MsgBox(ex.Message)
        Finally
            Cursor = System.Windows.Forms.Cursors.Default
        End Try
    End Sub
#End Region


'hhhh me xrhsh to SQLC
 

    Private Sub FillComboPRODUCTS()
        Try
            Cursor = System.Windows.Forms.Cursors.WaitCursor

            txtPRODUCT_ID.SelectedIndex = -1

            txtPRODUCT_ID.Items.Clear()

            Dim sqlread As SqlClient.SqlDataReader = Nothing

            sqlread = sqlC.GetDATAREADER("select PRODUCT_ID,PRODUCT_NAME from [PRODUCTS] order by PRODUCT_NAME")
            txtPRODUCT_ID.Items.Add(New ComboClass("", 0))

            While sqlread.Read
                txtPRODUCT_ID.Items.Add(New ComboClass(sqlread(1), sqlread(0)))
            End While

            sqlread.Close()

            txtPRODUCT_ID.SelectedIndex = 0
        Catch ex As Exception
            MsgBox(ex.Message)
        Finally
            Cursor = System.Windows.Forms.Cursors.Default
        End Try
    End Sub