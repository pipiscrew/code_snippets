    If Combo1.ListIndex > 0 Then
        a = "Windows Registry Editor Version 5.00" & vbCrLf & vbCrLf
        a = a & "[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run]" & vbCrLf
        a = a & Chr(34) & "THYRAEBackup" & Chr(34) & "=" & Chr(34) & Replace(App.Path, "\", "\\") & "\\" & App.EXEName & ".exe %1" & Chr(34)
        
        Open "c:\reg.reg" For Output As 1
        Print #1, a
        Close #1
    Else 'kanei delete mono to key THYRAEBackup
        a = "Windows Registry Editor Version 5.00" & vbCrLf & vbCrLf
        a = a & "[HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run]" & vbCrLf
        a = a & Chr(34) & "THYRAEBackup" & Chr(34) & "=-" & vbCrLf


        Open "c:\reg.reg" For Output As 1
        Print #1, a
        Close #1
    End If
    
    ret = Shell("regedit.exe /s " & "c:\reg.reg", 0)
    Kill "c:\reg.reg"