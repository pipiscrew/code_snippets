    Public Function ReadFILE(ByVal filepath$) As String
        Dim tmp As String = ""

        Try
            If IO.File.Exists(filepath) Then
                tmp = My.Computer.FileSystem.ReadAllText(filepath)
            Else
                tmp = ""
            End If

        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Critical, apTitle)
        End Try

        Return tmp
    End Function