1st way:
---------
Dim FSO As Object

Set FSO = CreateObject("Scripting.FileSystemObject")

MsgBox FSO.GetFolder("c:\winnt").Size



2nd way:
--------
Public Function GetFolderSize(ByVal Path As String, Optional ByVal Recursive As Boolean = True) As Double
   Dim sName As String
   Dim oFolders As Collection
   Dim i As Integer
   
   If Right(Path, 1) <> "\" Then Path = Path & "\"
   Set oFolders = New Collection
   If Recursive Then
      sName = Dir(Path, vbNormal Or vbSystem Or vbHidden Or vbReadOnly Or vbDirectory)
   Else
      sName = Dir(Path, vbNormal Or vbSystem Or vbHidden Or vbReadOnly)
   End If
   While sName <> ""
      If (sName <> ".") And (sName <> "..") Then
         If CBool(GetAttr(Path & sName) And vbDirectory) Then
            oFolders.Add Path & sName
         Else
            GetFolderSize = GetFolderSize + FileLen(Path & sName)
         End If
      End If
      sName = Dir
   Wend
   For i = 1 To oFolders.Count
      GetFolderSize = GetFolderSize + GetFolderSize(oFolders(i), True)
   Next
   Set oFolders = Nothing
End Function

Private Sub Command1_Click()
MsgBox GetFolderSize("c:\windows", True)
End Sub
