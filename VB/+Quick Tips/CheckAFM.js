Private Sub AFM_LostFocus()
Dim afmCheck As Boolean
afmCheck = CheckAFM(AFM)
If afmCheck = False Then MsgBox "?? ??? ??? ????? ??????? ????? ?????????..!" & vbCrLf & vbCrLf & "???????? ??????????? ??...", vbInformation, apTitle
End Sub

Public Function CheckAFM(AFM As String) As Boolean
On Error GoTo ErrorLevel
Dim D1%, D2%, D3%, D4%, D5%, D6%, D7%, D8%, D9%

If Len(AFM) <> 9 Then
CheckAFM = False
Exit Function
End If
D1% = CInt(Left$(AFM, 1))
D2% = Mid(AFM, 2, 1)
D3% = Mid(AFM, 3, 1)
D4% = Mid(AFM, 4, 1)
D5% = Mid(AFM, 5, 1)
D6% = Mid(AFM, 6, 1)
D7% = Mid(AFM, 7, 1)
D8% = Mid(AFM, 8, 1)
D9% = Mid(AFM, 9, 1)

Sum = (256 * D1%) + (128 * D2%) + (64 * D3%) + (32 * D4%) + (16 * D5%) + (8 * D6%) + (4 * D7%) + (2 * D8%)

Y = Sum Mod 11

If (Y = 10 And D9% = 0) Then
CheckAFM = True
Exit Function
ElseIf Y = CInt(D9%) Then
CheckAFM = True
Exit Function
Else
CheckAFM = False
End If
Exit Function

ErrorLevel:
CheckAFM = False
End Function