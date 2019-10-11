Private Declare Function GetVersionEx Lib "kernel32.dll" Alias "GetVersionExA" _
(lpVersionInformation As OSVERSIONINFO) As Long

Private Type OSVERSIONINFO
  dwOSVersionInfoSize As Long
  dwMajorVersion As Long
  dwMinorVersion As Long
  dwBuildNumber As Long
  dwPlatformId As Long
  szCSDVersion As String * 128
End Type

Private Enum ePlatform
   VER_PLATFORM_WIN32_WINDOWS = 1
   VER_PLATFORM_WIN32_NT = 2
End Enum

Private Function GetPlatform() As ePlatform

   Dim os As OSVERSIONINFO
   Dim r As Long

   os.dwOSVersionInfoSize = Len(os)
   r = GetVersionEx(os)
   GetPlatform = os.dwPlatformId

End Function

Private Sub Command1_Click()
MsgBox GetPlatform
End Sub