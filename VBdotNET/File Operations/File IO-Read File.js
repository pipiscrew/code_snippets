'        Imports System
'        Imports System.IO
'        Imports System.text
 
'        ================
'        Read txt file lineBYline
'        ================

for unicode aka GREEK etc.
Dim sr As String = My.Computer.FileSystem.ReadAllText(appDIR & "formTEMPLATES\" & ComboBox1.Text & "\frm.Designer.vb", System.Text.Encoding.Default)


**1**
        Dim sr As System.IO.StreamReader = New System.IO.StreamReader("C:\Program Files\Easiestutils\YouTube FLV to AVI Suite Pro\readme.txt")
        Dim tmp$ = ""
        Do While sr.Peek() >= 0
            tmp = tmp & sr.ReadLine() & vbCrLf
        Loop
        sr.Close()
        TextBox1.text = tmp
 
 
 
**OR**

        Dim file As System.IO.StreamReader
        Dim tmp$ = ""
        file = My.Computer.FileSystem.OpenTextFileReader("C:\Program Files\Easiestutils\YouTube FLV to AVI Suite Pro\readme.txt")
 
        Do While file.Peek() >= 0
            tmp = tmp & file.ReadLine() & vbCrLf
        Loop
 
        file.Close()
 
        TextBox1.text = tmp
        
        
        
***2*** 1 line of code!
        Dim html As String = My.Computer.FileSystem.ReadAllText("C:\Program Files\Easiestutils\YouTube FLV to AVI Suite Pro\readme1.txt")
        TextBox1.text = html


                Dim c As Char
 
                For Each c In html
                        If c = "<" Then
                              reading = False
                        ElseIf c = ">" Then
                              reading = True
                        End If
                Next