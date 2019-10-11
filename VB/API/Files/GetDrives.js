Private Declare Function GetLogicalDriveStrings Lib "kernel32" Alias "GetLogicalDriveStringsA" (ByVal nBufferLength As Long, ByVal lpBuffer As String) As Long


Private Sub Command1_Click()
Dim a() As String

a() = GetDriveList

For i = 0 To UBound(a)
    Combo1.AddItem a(i)
Next i
End Sub

Public Function GetDriveList() As String()
    Dim Drives As String, s2() As String
    Drives = Space$(26 * 4)


    If GetLogicalDriveStrings(Len(Drives), Drives) Then
        Drives = Trim$(Drives)


        Do While Right$(Drives, 1) = Chr$(0)
            Drives = Left$(Drives, Len(Drives) - 1)
        Loop
        s2 = Split(Drives, Chr$(0))
    End If
    GetDriveList = s2
End Function