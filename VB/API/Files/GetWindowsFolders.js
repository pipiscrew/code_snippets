'API to get StartUp Folder
Private Declare Function SHGetSpecialFolderLocation Lib "shell32" (ByVal hWnd As Long, ByVal nFolder As Long, Pidl As Long) As Long
Private Declare Function SHGetPathFromIDList Lib "shell32" (Pidl As Long, ByVal FolderPath As String) As Long
Private Const CSIDL_COMMON_STARTUP = 24
Private Const CSIDL_STARTUP = &H7
Private Const CSIDL_APPDATA = &H1A
Private Const MAX_PATH = 260
'API to get StartUp Folder

Private Function GetWindowsFolders(fType As Long) As String
    Dim lpStartupPath As String * MAX_PATH
    Dim Pidl As Long
    Dim hResult As Long

    hResult = SHGetSpecialFolderLocation(0, fType, Pidl)

    If hResult = 0 Then
        hResult = SHGetPathFromIDList(ByVal Pidl, lpStartupPath)

        If hResult = 1 Then
            lpStartupPath = Left(lpStartupPath, InStr(lpStartupPath, Chr(0)) - 1)
            GetWindowsFolders = Trim(lpStartupPath)
        End If
    End If
End Function

all windows default const (ta COMMON einai gia ta AllUsers folders) ::

Private Const CSIDL_DESKTOP = &H0                 '{desktop}
Private Const CSIDL_INTERNET = &H1                'Internet Explorer (icon on desktop)
Private Const CSIDL_PROGRAMS = &H2                'Start Menu\Programs
Private Const CSIDL_CONTROLS = &H3                'My Computer\Control Panel
Private Const CSIDL_PRINTERS = &H4                'My Computer\Printers
Private Const CSIDL_PERSONAL = &H5                'My Documents
Private Const CSIDL_FAVORITES = &H6               '{user}\Favourites
Private Const CSIDL_STARTUP = &H7                 'Start Menu\Programs\Startup
Private Const CSIDL_RECENT = &H8                  '{user}\Recent
Private Const CSIDL_SENDTO = &H9                  '{user}\SendTo
Private Const CSIDL_BITBUCKET = &HA               '{desktop}\Recycle Bin
Private Const CSIDL_STARTMENU = &HB               '{user}\Start Menu
Private Const CSIDL_DESKTOPDIRECTORY = &H10       '{user}\Desktop
Private Const CSIDL_DRIVES = &H11                 'My Computer
Private Const CSIDL_NETWORK = &H12                'Network Neighbourhood
Private Const CSIDL_NETHOOD = &H13                '{user}\nethood
Private Const CSIDL_FONTS = &H14                  'windows\fonts
Private Const CSIDL_TEMPLATES = &H15
Private Const CSIDL_COMMON_STARTMENU = &H16       'All Users\Start Menu
Private Const CSIDL_COMMON_PROGRAMS = &H17        'All Users\Programs
Private Const CSIDL_COMMON_STARTUP = &H18         'All Users\Startup
Private Const CSIDL_COMMON_DESKTOPDIRECTORY = &H19'All Users\Desktop
Private Const CSIDL_APPDATA = &H1A                '{user}\Application Data
Private Const CSIDL_PRINTHOOD = &H1B              '{user}\PrintHood
Private Const CSIDL_LOCAL_APPDATA = &H1C          '{user}\Local Settings _
                                                 '\Application Data (non roaming)
Private Const CSIDL_ALTSTARTUP = &H1D             'non localized startup
Private Const CSIDL_COMMON_ALTSTARTUP = &H1E      'non localized common startup
Private Const CSIDL_COMMON_FAVORITES = &H1F
Private Const CSIDL_INTERNET_CACHE = &H20
Private Const CSIDL_COOKIES = &H21
Private Const CSIDL_HISTORY = &H22
Private Const CSIDL_COMMON_APPDATA = &H23          'All Users\Application Data
Private Const CSIDL_WINDOWS = &H24                 'GetWindowsDirectory()
Private Const CSIDL_SYSTEM = &H25                  'GetSystemDirectory()
Private Const CSIDL_PROGRAM_FILES = &H26           'C:\Program Files
Private Const CSIDL_MYPICTURES = &H27              'C:\Program Files\My Pictures
Private Const CSIDL_PROFILE = &H28                 'USERPROFILE
Private Const CSIDL_SYSTEMX86 = &H29               'x86 system directory on RISC
Private Const CSIDL_PROGRAM_FILESX86 = &H2A        'x86 C:\Program Files on RISC
Private Const CSIDL_PROGRAM_FILES_COMMON = &H2B    'C:\Program Files\Common
Private Const CSIDL_PROGRAM_FILES_COMMONX86 = &H2C 'x86 Program Files\Common on RISC
Private Const CSIDL_COMMON_TEMPLATES = &H2D        'All Users\Templates
Private Const CSIDL_COMMON_DOCUMENTS = &H2E        'All Users\Documents
Private Const CSIDL_COMMON_ADMINTOOLS = &H2F       'All Users\Start Menu\Programs _
                                                  '\Administrative Tools
Private Const CSIDL_ADMINTOOLS = &H30              '{user}\Start Menu\Programs _
                                                  '\Administrative Tools
Private Const CSIDL_FLAG_CREATE = &H8000&          'combine with CSIDL_ value to force 
                                                  'create on SHGetSpecialFolderLocation()
Private Const CSIDL_FLAG_DONT_VERIFY = &H4000      'combine with CSIDL_ value to force 
                                                  'create on SHGetSpecialFolderLocation()
Private Const CSIDL_FLAG_MASK = &HFF00             'mask for all possible flag values
Private Const SHGFP_TYPE_CURRENT = &H0             'current value for user, verify it exists
Private Const SHGFP_TYPE_DEFAULT = &H1

Private Const MAX_PATH As Long = 260
Private Const S_OK = 0
