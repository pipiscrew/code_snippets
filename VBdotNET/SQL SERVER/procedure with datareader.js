
    Private Sub FillCombo()
        Dim cnn As SqlClient.SqlConnection = New SqlClient.SqlConnection(tmsConnectionString)
        Dim cmd As New SqlClient.SqlCommand
        Dim da As New SqlClient.SqlDataAdapter
        Dim ds As New DataSet
        Dim reader As SqlClient.SqlDataReader


        Try
            cmd = cnn.CreateCommand

            cmd.CommandText = "[ivf2_listcategories_list]"
            cmd.CommandType = CommandType.StoredProcedure

            cnn.Open()

            reader = cmd.ExecuteReader()

            While reader.Read
                UltraComboEditor1.Items.Add(reader(0).ToString, reader(1).ToString)
            End While

            reader.Close()
            cnn.Close()
            cnn.Dispose()
        Catch ex As Exception
            TMS_Data.TMS_MESSAGE.DisplayMessage(51, ex.Source + ":" + ex.Message, 0, 2)

        Finally
            da.Dispose()
            cmd.Dispose()
            cnn.Dispose()
        End Try
    End Sub