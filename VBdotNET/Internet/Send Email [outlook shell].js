'gia to vbcrlf
messageBODY = Replace(txtTASK_COMMENTS_COMMENT.Text, vbCrLf, "%0D%0A")

                Dim objProcess As System.Diagnostics.Process

                objProcess = New System.Diagnostics.Process()
                objProcess.StartInfo.FileName = "mailto:dkyriakopoulou@micronet.gr;pkitselis@micronet.gr?cc=home@micronet.gr&body=" & messageBODY & "&subject=" & GRID.Rows(e.RowIndex).Cells(1).EditedFormattedValue & " [CLOSED]"
                objProcess.StartInfo.WindowStyle = ProcessWindowStyle.Normal
                objProcess.Start()


se sub
    Private Sub SendEmail(ByVal body$)
        Dim messageBODY$ = ""

        messageBODY = Replace(body, vbCrLf, "%0D%0A")

        Dim objProcess As System.Diagnostics.Process

        objProcess = New System.Diagnostics.Process()
        objProcess.StartInfo.FileName = "mailto:" & basketLSTV.SelectedItems(0).SubItems(7).Tag.ToString & "&body=" & messageBODY & "&subject=[" & Now & "] ORDER"
        objProcess.StartInfo.WindowStyle = ProcessWindowStyle.Normal
        objProcess.Start()
    End Sub