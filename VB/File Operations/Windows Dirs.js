Option Explicit


Public Enum FolderType
    fldWindows = 0 'i.e. C:\WINNT\
    fldWinSystem = 1 'i.e. C:\WINNT\SYSTEM32
    fldWinTemp = 2 'i.e. C:\Temp
End Enum
'=======================================
'     ==========
' Function Name: GetFolderPath
' Inputs: The Special Windows Folder to 
'     get 
' the path from
' Returns: string containing the desired
'     
' directory path
'
' References: Windows Scripting Runtime
'
' Method: objFileSystem.GetSpecialFolder
'     (1)
' Where: 1 = System Folder (ie C:\winnt\
'     system32)
' 2 = Temporary Folder (ie c:\winnt\temp
'     )
' 0 = Windows Folder (ie C:\winnt\)
'
'
'=======================================
'     ==========


Public Function GetFolderPath(FolderType As FolderType) As String
    Dim objFileSystem As Object
    
    Set objFileSystem = CreateObject("Scripting.FileSystemObject")
    


    Select Case FolderType
        Case fldWindows 'The Windows Directory
        GetFolderPath objFileSystem.GetSpecialFolder(0)
        Case fldWinSystem 'The Windows System Directory
        GetFolderPath = objFileSystem.GetSpecialFolder(1)
        Case fldWinTemp 'Windows Temp Folder
        GetFolderPath = objFileSystem.GetSpecialFolder(2)
    End Select

Set objFileSystem = Nothing
End Function
