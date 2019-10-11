    Private Function AdvSplt(ByVal STR As String, ByVal delimit1 As String, ByVal delimit2 As String, Optional ByVal StartPOS As Integer = 1) As String
        Dim ps1%, ps2%

        ps1 = InStr(StartPOS, STR, delimit1)
        ps2 = InStr(ps1, STR, delimit2)

        If ps1 = 0 Or ps2 = 0 Then Return "" : Exit Function

        Return Mid(STR, ps1 + Len(delimit1), ps2 - (ps1 + Len(delimit1)))
    End Function


'>>>>>>>>>>>>> Optimized for 0% errors
    Private Function AdvSplt(ByVal STR As String, ByVal delimit1 As String, ByVal delimit2 As String, Optional ByVal StartPOS As Integer = 1) As String
        Dim ps1%, ps2%

        ps1 = InStr(StartPOS, STR, delimit1, CompareMethod.Text)
        If ps1 > 0 Then ps1 += Len(delimit1) Else Return ""

        ps2 = InStr(ps1, STR, delimit2, CompareMethod.Text)

        If ps2 = 0 Then Return "" : Exit Function

        Return Mid(STR, ps1, ps2 - (ps1))
    End Function