    Public Function ShowColorDialog() As System.Drawing.Color
        Dim cDLG As New ColorDialog

        Try
            Dim result As DialogResult = cDLG.ShowDialog()
            If (result = DialogResult.OK) Then
                Return cDLG.Color
            Else
                Return Nothing
            End If
        Catch ex As Exception
            Return Nothing
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        Finally
            cDLG.Dispose()
        End Try
    End Function