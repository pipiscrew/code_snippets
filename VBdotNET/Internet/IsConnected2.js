Public Class Internet
    ' Methods
    <DllImport("Wininet.dll", CharSet:=CharSet.Ansi, SetLastError:=True, ExactSpelling:=True)> _
    Private Shared Function InternetDial(ByVal hwndParent As IntPtr, <MarshalAs(UnmanagedType.VBByRefStr)> ByRef lpszConnectoid As String, ByVal dwFlags As Integer, ByRef lpdwConnection As Integer, ByVal dwReserved As Integer) As Integer
    End Function

    <DllImport("wininet.dll", CharSet:=CharSet.Ansi, SetLastError:=True, ExactSpelling:=True)> _
    Private Shared Function InternetGetConnectedState(ByRef lpdwFlags As Integer, ByVal dwReserved As Integer) As Boolean
    End Function

    <DllImport("Wininet.dll", CharSet:=CharSet.Ansi, SetLastError:=True, ExactSpelling:=True)> _
    Private Shared Function InternetHangUp(ByVal lpdwConnection As Integer, ByVal dwReserved As Integer) As Integer
    End Function

    Public Function isConnected() As Boolean
        Dim num As Long
        Dim lpdwFlags As Integer = CInt(num)
        num = lpdwFlags
        Return Internet.InternetGetConnectedState((lpdwFlags), 0)
    End Function


    ' Fields
    Private Const ERROR_INVALID_PARAMETER As Integer = &H87
    Private Const ERROR_SUCCESS As Integer = 0
    Private mlConnection As Integer

    ' Nested Types
    Private Enum DialUpOptions
        ' Fields
        INTERNET_DIAL_FORCE_PROMPT = &H2000
        INTERNET_DIAL_SHOW_OFFLINE = &H4000
        INTERNET_DIAL_UNATTENDED = &H8000
    End Enum

    Private Enum Flags
        ' Fields
        INTERNET_CONNECTION_LAN = 2
        INTERNET_CONNECTION_MODEM = 1
        INTERNET_CONNECTION_PROXY = 4
        INTERNET_RAS_INSTALLED = &H10
    End Enum
End Class

'usage
 If Me.INTER.isConnected Then
 
 else
 
 endif
