Private Declare Function CopyFile Lib "kernel32" _
  Alias "CopyFileA" (ByVal lpExistingFileName As String, _
  ByVal lpNewFileName As String, ByVal bFailIfExists As Long) _
  As Long
  
Public Function APIFileCopy(src As String, dest As String, _
  Optional FailIfDestExists As Boolean) As Boolean

'PURPOSE: COPY FILES
'PARAMETERS: src: Source File (FullPath)
            'dest: Destination File (FullPath)
            'FailIfDestExists (Optional):
            'Set to true if you don't want to
            'overwrite the destination file if
            'it exists
            
            'Returns (True if Successful, false otherwise)
            
'EXAMPLE:  
  'dim bSuccess as boolean
  'bSuccess = APIFileCopy ("C:\MyFile.txt", "D:\MyFile.txt")

Dim lRet As Long
lRet = CopyFile(src, dest, FailIfDestExists)
APIFileCopy = (lRet > 0)

End Function