Public Function RightNow() 
    'now() returns date but no time at midni
    '     ght!
    'ie.
    '5/4/2005 11:59:58 PM
    '5/4/2005 11:59:59 PM
    '5/5/2005
    '5/5/2005 12:00:01 AM
    '5/5/2005 12:00:02 AM
    'This function returns date and time reg
    '     ardless
    '(fixes the special case at midnight)
    Dim Temp As String
    Temp = Now()


    If InStr(Temp, " ") = 0 Then ' no space - ergo no time
        Temp = Temp & " 12:00:00 AM"
    End If
    RightNow = Temp
End Function
