Private Function GetFilesize(fpath As String) As String
    Dim fso As Object
    Dim d As Variant
    Dim s As Variant
    
    Set fso = CreateObject("Scripting.FileSystemObject")
    Set d = fso.GETFILE(fpath)
    GetFilesize = d.Size
    
    Set fso = Nothing
    Set d = Nothing
    Set s = Nothing
End Function