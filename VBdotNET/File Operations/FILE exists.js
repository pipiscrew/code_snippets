'        ================
'        Check if file exists
'        ================
        Dim file As System.IO.file
        If IO.file.Exists("c:\takis.txt") Then
            MsgBox ("exist!")
        Else
            MsgBox ("no exist")
        End If