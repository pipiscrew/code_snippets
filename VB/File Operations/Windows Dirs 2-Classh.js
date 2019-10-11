Public Class clsGetSpecialFolder
    Public Enum CSIDL
        DESKTOP = &H0
        PROGRAMS = &H2
        Controls = &H3
        Printers = &H4
        PERSONAL = &H5
        FAVORITES = &H6
        STARTUP = &H7
        RECENT = &H8
        SENDTO = &H9
        BITBUCKET = &HA
        STARTMENU = &HB
        DESKTOPDIRECTORY = &H10
        DRIVES = &H11
        NETWORK = &H12
        NETHOOD = &H13
        Fonts = &H14
        TEMPLATES = &H15
    End Enum
  
    Const MAX_PATH = 260
    Private Structure SHITEMID
        Dim cb As Integer
        Dim abID As Byte
    End Structure
    Private Structure ITEMIDLIST
        Dim mkid As SHITEMID
    End Structure
    Private Declare Function SHGetSpecialFolderLocation Lib "shell32.dll" (ByVal hwndOwner As Integer, ByVal nFolder As Integer, ByRef pidl As ITEMIDLIST) As Integer
    Private Declare Function SHGetPathFromIDList Lib "shell32.dll" Alias "SHGetPathFromIDListA" (ByVal pidl As Integer, ByVal pszPath As String) As Integer
  
    Public Shared Function GetSpecialFolder(ByVal CSIDLrequest As CSIDL) As String
        Dim r As Integer
        Dim strDir As String
        Dim IDL As ITEMIDLIST
        'Get the special folder
        r = SHGetSpecialFolderLocation(0, CSIDLrequest, IDL)
        If r = 0 Then ' NOERROR Then
            'Create a buffer
            strDir = Space$(512)
            'Get the path from the IDList
            r = SHGetPathFromIDList(IDL.mkid.cb, strDir)
            'Remove the unnecessary chr$(0)'s
            strDir = strDir.Substring(0, InStr(strDir, Chr(0)) - 1)
        End If
        Return strDir
    End Function
End Class

