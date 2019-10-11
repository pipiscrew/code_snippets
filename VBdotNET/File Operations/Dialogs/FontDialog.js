    Public Function ShowFontDialog() As System.Drawing.Font
        Dim fDLG As New FontDialog

        Try
            fDLG.ShowColor = True
            fDLG.ShowEffects = False

            Dim result As DialogResult = fDLG.ShowDialog()
            If (result = DialogResult.OK) Then
                Return fDLG.Font
            Else
                Return Nothing
            End If
        Catch ex As Exception
            Return Nothing
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        Finally
            fDLG.Dispose()
        End Try
    End Function