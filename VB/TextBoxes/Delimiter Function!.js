Private Function GetSTR(STR As String, delimit1 As String, delimit2 As String, Optional StartPos As Integer = 1) As String
    If Len(STR) = 0 Then Exit Function
    Dim pos1%, pos2%, tempSTR$
    pos1 = InStr(StartPos, STR, delimit1)
    If pos1 = 0 Then GetSTR = "": Exit Function
    pos1 = pos1 + 1
    pos2 = InStr(pos1, STR, delimit2)
    If pos2 = 0 Then GetSTR = "": Exit Function
    GetSTR = Mid(STR, pos1, pos2 - pos1)
End Function

Private Function AdvSplt(STR As String, delimit1 As String, delimit2 As String, Optional StartPOS As Integer = 1)
Dim ps1%, ps2%

ps1 = InStr(StartPOS, STR, delimit1)
ps2 = InStr(ps1, STR, delimit2)

If ps1 = 0 Or ps2 = 0 Then Exit Function

AdvSplt = Mid(STR, ps1 + Len(delimit1), ps2 - (ps1 + Len(delimit1)))
End Function


Public Function AdvSpltREV(str As String, delimit1 As String, delimit2 As String, Optional StartPOS As Integer = 1)
Dim ps1%, ps2%

ps1 = InStr(StartPOS, str, delimit2)
ps2 = InStrRev(str, delimit1, ps1)

If ps1 = 0 Or ps2 = 0 Then Exit Function

StartPOS = ps2
AdvSpltREV = Mid(str, ps2 + Len(delimit1), (ps1 - ps2) - Len(delimit1))
'AdvSpltREV = Mid(str, ps2 + Len(delimit1), (ps1 - ps2) - (Len(delimit2) - Len(delimit1))) 'Mid(STR, ps1 + Len(delimit1), ps2 - (ps1 + Len(delimit1)))
End Function