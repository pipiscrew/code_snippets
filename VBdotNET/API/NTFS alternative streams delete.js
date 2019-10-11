    <DllImport("kernel32.dll", SetLastError:=True)> _
Private Shared Function DeleteFile(ByVal FileName As String) As Integer
    End Function
    
    'delete from folder
    DeleteFile("C:\!patching\NetsparkerSetup:{58006700-6300-6300-7100-760044006200}")