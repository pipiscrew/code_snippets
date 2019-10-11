Public Function setTime(ByVal filename As String, ByVal newDateTime As Date) As Boolean
    If IO.File.Exists(filename) Then
        IO.File.SetCreationTime(filename, newDateTime)
        IO.File.SetLastWriteTime(filename, newDateTime)
        IO.File.SetLastAccessTime(filename, newDateTime)
        Return True
    Else
        Return False
    End If
End Function