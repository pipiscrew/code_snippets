        Try
            Dim sql As String
            Dim da As SqlDataAdapter
            Dim dt As DataSet
            Dim x As Integer

            ' Setup SQL (This is the original table where the data was retrieved when grid was filled, it will also be the table updated)
            sql = Me.Tag '"select * from " & MainForm.tr.SelectedNode.Text.Substring(0, MainForm.tr.SelectedNode.Text.LastIndexOf("[") - 1)

            ' Setup DataAdapter
            da = New SqlDataAdapter(sql, MainForm.TextBox1.Text)

            ' Create a command builder (this is needed for the update to work)
            Dim cb As New SqlCommandBuilder(da)

            ' Get Current Data from datagrid
            dt = Grid1.DataSource

            ' Update Table through DataAdapter
            x = da.Update(dt.Tables(0))

            MsgBox(x & " records updated.", MsgBoxStyle.Information)
        Catch
            MsgBox("ERROR: " & Err.Description, MsgBoxStyle.Critical, apTitle)
        End Try