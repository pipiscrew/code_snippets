'        ================
'        Folder Exists |c:\temp or c:\temp\ is the same|
'        ================
        If IO.Directory.Exists("c:\temp") Then
            MsgBox ("exist!")
        Else
            MsgBox ("no exist")
        End If