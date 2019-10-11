Public Shared Function IsXP() As Boolean
    Dim oSVersion As OperatingSystem = Environment.OSVersion
    Return (((oSVersion.Platform = PlatformID.Win32NT) AndAlso (oSVersion.Version.Major = 5)) AndAlso (oSVersion.Version.Minor = 1))
End Function

 

 
Public Shared Function IsWin7() As Boolean
    Dim oSVersion As OperatingSystem = Environment.OSVersion
    Return (((oSVersion.Platform = PlatformID.Win32NT) AndAlso (oSVersion.Version.Major >= 6)) AndAlso (oSVersion.Version.Minor >= 1))
End Function

 

 
Public Shared Function IsVista() As Boolean
    Dim oSVersion As OperatingSystem = Environment.OSVersion
    Return ((oSVersion.Platform = PlatformID.Win32NT) AndAlso (oSVersion.Version.Major >= 6))
End Function

 

 
Public Shared Function Is64BitMode() As Boolean
    Return (Marshal.SizeOf(GetType(IntPtr)) = 8)
End Function

 

 
