Private Const MAX_PATH As Integer = 260

Private Declare Auto Function GetShortPathName Lib "kernel32" ( _
ByVal lpszLongPath As String, _
ByVal lpszShortPath As System.Text.StringBuilder, _
ByVal cchBuffer As Integer) As Integer

Public Function GetShortFileName(ByVal LongPath As String) As String
Dim ShortPath As New System.Text.StringBuilder(MAX_PATH)
Dim BufferSize As Integer = GetShortPathName(LongPath, ShortPath, ShortPath.Capacity)
' You might want to check the return value here
' If BufferSize is greater then ShortPath.Capacity then
' you need to reallocate the stringbuilder to BufferSize + 1
' and call GetShortPathName again. If the return value is 0
' then you will want to generate an error.
Return ShortPath.ToString()
End Function

Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
MsgBox(GetShortFileName("c:\Program Files\"))
End Sub
