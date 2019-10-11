    Private Sub CreateSDF(ByVal cName$)
        Try
            If IO.File.Exists(Application.StartupPath & "\" & cName & ".sdf") = True Then
                If MsgBox(cName & ".sdf" & vbCrLf & vbCrLf & "Already exist!" & vbCrLf & vbCrLf & "Delete and create new ?", MsgBoxStyle.YesNo + MsgBoxStyle.Information, apTitle) = MsgBoxResult.No Then Exit Try
                IO.File.Delete(Application.StartupPath & "\" & cName & ".sdf")
            End If

            Dim engine As New SqlCeEngine("Data Source = " & Application.StartupPath & "\" & cName & ".sdf")
            engine.CreateDatabase()
            engine.Dispose()

            MsgBox("SDF Creation Done!", MsgBoxStyle.Information)
        Catch ex As Exception
            MsgBox(ex.Message)
        End Try
    End Sub