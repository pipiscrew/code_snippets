 On Error Resume Next
 Dim b As Object
 Set b = CreateObject("wscript.shell")
 b.regwrite "HKCR\" & EXT & "\", FileType
 b.regwrite "HKCR\" & FileType & "\", "MY file"
 b.regwrite "HKCR\" & FileType & "\DefaultIcon\", FileName
 b.regwrite "HKCR\" & FileType & "\shell\open\command\", FileName & " %L"
 b.regdelete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\" & EXT & "\Application"
 b.regwrite "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\" & EXT & "\Application", FileName
 b.regdelete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\" & EXT & "\OpenWithList\"
 b.regwrite "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\FileExts\" & EXT & "\OpenWithList\a", FileName