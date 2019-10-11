    Private Function ConvertFilesize(ByVal Bytes) As String

        Try
            Dim SetBytes$ = ""

            If Bytes >= 1073741824 Then
                SetBytes = Format(Bytes / 1024 / 1024 / 1024, "#0.00") & " GB"
            ElseIf Bytes >= 1048576 Then
                SetBytes = Format(Bytes / 1024 / 1024, "#0.00") & " MB"
            ElseIf Bytes >= 1024 Then
                SetBytes = Format(Bytes / 1024, "#0.00") & " KB"
            ElseIf Bytes < 1024 Then
                SetBytes = Fix(Bytes) & " Bytes"
            End If

            Return SetBytes
        Catch ex As Exception
            MsgBox("ERROR : " & ex.GetHashCode & vbCrLf & vbCrLf & ex.Message, MsgBoxStyle.Exclamation, apTitle)
            Return ("0 Bytes")
        End Try
    End Function