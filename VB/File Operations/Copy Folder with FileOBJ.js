Dim fso As Variant
Set fso = CreateObject("Scripting.FileSystemObject")
fso.CopyFolder Left$(List1.List(0), InStrRev(List1.List(0), "\")) & "Data\Storage", Text1.Text & "Data\Storage"