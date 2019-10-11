'Add
Private Sub Label1_Click()
'If LCase(Mid(Left(App.Path, InStr(4, App.Path, "\") - 1), 4)) <> "program files" Then MsgBox "In order to successful this, the greeklish2gr.exe must be in <Program Files> directory... Move it and try again plz..", vbInformation, apTitle
Dim a$

a = "Windows Registry Editor Version 5.00" & vbCrLf & vbCrLf
a = a & "[HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Directory\shell\Open in Greeklish2GR\command]" & vbCrLf
a = a & "@=" & Chr(34) & Replace(App.Path, "\", "\\") & "\\" & App.EXEName & ".exe %1" & Chr(34)

Open "c:\reg.reg" For Output As 1
Print #1, a
Close #1

ret = Shell("regedit.exe /s " & "c:\reg.reg", 0)
Kill "c:\reg.2reg"

End Sub

'Remove
Private Sub Label2_Click()
Dim a$

a = "Windows Registry Editor Version 5.00" & vbCrLf & vbCrLf
a = a & "[-HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Directory\shell\Open in Greeklish2GR\command]" & vbCrLf
a = a & "[-HKEY_LOCAL_MACHINE\SOFTWARE\Classes\Directory\shell\Open in Greeklish2GR]" & vbCrLf
'a = a & "@=" & Chr(34) & Chr(34)

Open "c:\regcl.reg" For Output As 1
Print #1, a
Close #1

ret = Shell("regedit.exe /s " & "c:\regcl.reg", 0)
Kill "c:\regcl.reg"
End Sub