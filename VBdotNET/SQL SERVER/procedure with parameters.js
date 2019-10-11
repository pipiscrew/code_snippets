    Private Sub cmdUpdate_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles cmdUpdate.Click

        Dim cnn As SqlClient.SqlConnection = New SqlClient.SqlConnection(TMS_Data.ConnStr.GetCS)
        Dim cmd As New SqlClient.SqlCommand
        Dim prm As SqlClient.SqlParameter

        Try

            cmd = cnn.CreateCommand
            cmd.CommandText = "[ivf2_list_update]"
            cmd.CommandType = CommandType.StoredProcedure
            cnn.Open()

            prm = cmd.Parameters.Add("@IVF2_LIST_ID", SqlDbType.Int, 4)
            prm.Value = UltraGrid1.ActiveRow.Cells(0).Text
            prm = cmd.Parameters.Add("@IVF2_LIST_newLINEvalue", SqlDbType.Int, 4)
            prm.Value = UltraNumericEditor1.Value

            cmd.Prepare() ' Preparation for Faster Execution
            cmd.ExecuteScalar()

            ' RELOAD GRID WITH CHANGES
            FillGrid()
            cnn.Close()
        Catch ex As Exception
            TMS_Data.TMS_MESSAGE.DisplayMessage(51, ex.Source + ":" + ex.Message, 0, 2)

        Finally
            cmd.Dispose()
            cnn.Dispose()
        End Try
    End Sub