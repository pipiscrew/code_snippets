The Visual Basic Kill command can be used to delete a file but this command does not make any use of the "Wastebasket". There are instances when this is appropriate but in others you may wish to be a bit more "politically correct" and just move the file to the wastebasket instead.

You could use something like the function below.

First you will need to include a type definition and a windows function "Declare" statement in a handy code module.

Public Type SHFILEOPSTRUCT
     hWwnd As Long
     wFunct As Long
     pFrom As String
     pTo As String
     fFlags As Integer
     fAnyOperationsAborted As Long
     hNameMappings As Long
     lpszProgressTitle
End Type

Public Declare Function SHFileOperation Lib "shell32.dll" Alias " SHFileOperationA" (lpFileOp As SHFILEOPSTRUCT) As Long

 And a couple of constants

Public Const FO_DELETE = &H3
Public Const FOF_ALLOWUNDO = &H40

 Then we can start on our user friendly deletion routine

Private Function FileDelete(FileToDelete As String) As Boolean
  Dim myStruct As SHFILEOPSTRUCT
   Dim CallReturn As Long

   With myStruct
       .wFunct = FO_DELETE
      .pFrom = FileToDelete
      .fFlags = FOF_ALLOWUNDO
    End With
   CallReturn = SHFileOperation(myStruct)
   If CallReturn = 0 Then
       FileDelete = True
   Else
     FileDelete = False
   End If

End Function

Please note that you will need to supply the full path of the file to be deleted (in the argument FileToDelete) as otherwise the command will be ignored.

