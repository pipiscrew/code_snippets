Shared Function FileIsLocked(ByVal fileFullPathName As String) As Boolean
    Dim isLocked As Boolean = False
    Dim fileObj As System.IO.FileStream

    Try
        fileObj = New System.IO.FileStream( _
                                fileFullPathName, _
                                System.IO.FileMode.Open, _
                                System.IO.FileAccess.ReadWrite, _
                                System.IO.FileShare.None)
    Catch
        isLocked = True
    Finally
        If fileObj IsNot Nothing Then
            fileObj.Close()
        End If
    End Try

    Return isLocked
End Function