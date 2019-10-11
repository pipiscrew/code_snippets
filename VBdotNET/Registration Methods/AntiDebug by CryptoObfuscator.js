Imports System.Runtime.InteropServices
Imports System.Text

'use:
' AntiDebugHelper.CheckDebuggerAtatched() on new form?

Friend Class AntiDebugHelper
    ' Methods
    Friend Shared Sub CheckDebuggerAtatched()
        If AntiDebugHelper.IsDebugging Then
            Throw New Exception("A debugger was detected! This software cannot run while a debugger is active.")
        End If
    End Sub

    <DllImport("kernel32.dll", ExactSpelling:=True)> _
    Friend Shared Function CloseHandle(ByVal hObject As IntPtr) As Integer
    End Function

    Private Shared Function EnumWindowProcInstance(ByVal wnd As IntPtr, ByVal lParam As IntPtr) As Integer
        Dim strArray As String() = New String() {"OLLYDBG"}
        Dim windowClassName As String = AntiDebugHelper.GetWindowClassName(wnd)
        Dim str2 As String
        For Each str2 In strArray
            If (String.Compare(windowClassName, str2, True) = 0) Then
                AntiDebugHelper.windowFound = True
                Return 0
            End If
        Next
        Return 1
    End Function

    <DllImport("user32.dll", CharSet:=CharSet.Auto)> _
    Friend Shared Function GetClassName(ByVal hWnd As IntPtr, ByVal lpClassName As StringBuilder, ByVal nMaxCount As Integer) As Integer
    End Function

    <DllImport("kernel32.dll", ExactSpelling:=True)> _
    Friend Shared Function GetCurrentProcessId() As UInt32
    End Function

    <DllImport("kernel32.dll", EntryPoint:="GetProcAddress", CharSet:=CharSet.Ansi, ExactSpelling:=True)> _
    Friend Shared Function GetProcAddress_CheckRemoteDebuggerPresent(ByVal hModule As IntPtr, ByVal lpProcName As String) As CheckRemoteDebuggerPresent
    End Function

    <DllImport("kernel32.dll", EntryPoint:="GetProcAddress", CharSet:=CharSet.Ansi, ExactSpelling:=True)> _
    Friend Shared Function GetProcAddress_EnumWindows(ByVal hModule As IntPtr, ByVal lpProcName As String) As EnumWindows
    End Function

    <DllImport("kernel32.dll", EntryPoint:="GetProcAddress", CharSet:=CharSet.Ansi, ExactSpelling:=True)> _
    Friend Shared Function GetProcAddress_IsDebuggerPresent(ByVal hModule As IntPtr, ByVal lpProcName As String) As IsDebuggerPresent
    End Function

    <DllImport("kernel32.dll", EntryPoint:="GetProcAddress", CharSet:=CharSet.Ansi, ExactSpelling:=True)> _
    Friend Shared Function GetProcAddress_NtQueryInformationProcess(ByVal hModule As IntPtr, ByVal lpProcName As String) As NtQueryInformationProcess
    End Function

    <DllImport("kernel32.dll", EntryPoint:="GetProcAddress", CharSet:=CharSet.Ansi, ExactSpelling:=True)> _
    Friend Shared Function GetProcAddress_NtQueryInformationProcess_DebugPort(ByVal hModule As IntPtr, ByVal lpProcName As String) As NtQueryInformationProcess_DebugPort
    End Function

    <DllImport("kernel32.dll", EntryPoint:="GetProcAddress", CharSet:=CharSet.Ansi, ExactSpelling:=True)> _
    Friend Shared Function GetProcAddress_OutputDebugString(ByVal hModule As IntPtr, ByVal lpProcName As String) As OutputDebugString
    End Function

    Friend Shared Function GetWindowClassName(ByVal hwnd As IntPtr) As String
        Dim lpClassName As New StringBuilder(260)
        AntiDebugHelper.GetClassName(hwnd, lpClassName, lpClassName.Capacity)
        Return lpClassName.ToString
    End Function

    Friend Shared Function IsDebugging() As Boolean
        Try
            If Debugger.IsAttached Then
                Return True
            End If
            Dim hModule As IntPtr = AntiDebugHelper.LoadLibrary("kernel32.dll")
            Dim present As IsDebuggerPresent = AntiDebugHelper.GetProcAddress_IsDebuggerPresent(hModule, "IsDebuggerPresent")
            If ((Not present Is Nothing) AndAlso (present.Invoke <> 0)) Then
                Return True
            End If
            Dim currentProcessId As UInt32 = AntiDebugHelper.GetCurrentProcessId
            Dim hProcess As IntPtr = AntiDebugHelper.OpenProcess(&H400, 0, currentProcessId)
            If (hProcess <> IntPtr.Zero) Then
                Try
                    Dim present2 As CheckRemoteDebuggerPresent = AntiDebugHelper.GetProcAddress_CheckRemoteDebuggerPresent(hModule, "CheckRemoteDebuggerPresent")
                    If (Not present2 Is Nothing) Then
                        Dim pbDebuggerPresent As Integer = 0
                        If ((present2.Invoke(hProcess, (pbDebuggerPresent)) <> 0) AndAlso (pbDebuggerPresent <> 0)) Then
                            Return True
                        End If
                    End If
                Finally
                    AntiDebugHelper.CloseHandle(hProcess)
                End Try
            End If
            Dim flag As Boolean = False
            Try
                AntiDebugHelper.CloseHandle(New IntPtr(&H12345678))
            Catch
                flag = True
            End Try
            If flag Then
                Return True
            End If
            Try
                Dim windows As EnumWindows = AntiDebugHelper.GetProcAddress_EnumWindows(AntiDebugHelper.LoadLibrary("user32.dll"), "EnumWindows")
                If (Not windows Is Nothing) Then
                    AntiDebugHelper.windowFound = False
                    windows.Invoke(New EnumWindowProc(AddressOf AntiDebugHelper.EnumWindowProcInstance), IntPtr.Zero)
                    If AntiDebugHelper.windowFound Then
                        Return True
                    End If
                End If
            Catch
            End Try
        Catch
        End Try
        Return False
    End Function

    <DllImport("kernel32.dll", CharSet:=CharSet.Auto, SetLastError:=True)> _
    Friend Shared Function LoadLibrary(ByVal libFilename As String) As IntPtr
    End Function

    <DllImport("kernel32.dll", ExactSpelling:=True)> _
    Friend Shared Function OpenProcess(ByVal dwDesiredAccess As UInt32, ByVal bInheritHandle As Integer, ByVal dwProcessId As UInt32) As IntPtr
    End Function

    <DllImport("kernel32.dll", ExactSpelling:=True)> _
    Friend Shared Sub SetLastError(ByVal dwErrCode As UInt32)
    End Sub


    ' Fields
    Friend Const PROCESS_QUERY_INFORMATION As UInt32 = &H400
    Friend Const ProcessInformationClass As Integer = 0
    Friend Const THREAD_QUERY_INFORMATION As UInt32 = &H40
    Private Shared windowFound As Boolean

    ' Nested Types
    Friend Delegate Function CheckRemoteDebuggerPresent(ByVal hProcess As IntPtr, ByRef pbDebuggerPresent As Integer) As Integer

    Friend Delegate Function EnumWindowProc(ByVal wnd As IntPtr, ByVal lParam As IntPtr) As Integer

    Friend Delegate Function EnumWindows(ByVal lpEnumFunc As EnumWindowProc, ByVal lParam As IntPtr) As Integer

    Friend Delegate Function IsDebuggerPresent() As Integer

    Friend Delegate Function NtQueryInformationProcess(ByVal ProcessHandle As IntPtr, ByVal ProcessInformationClass As Integer, ByVal ProcessInformation As PROCESS_BASIC_INFORMATION, ByVal ProcessInformationLength As UInt32, <Out()> ByRef ReturnLength As UInt32) As Integer

    Friend Delegate Function NtQueryInformationProcess_DebugPort(ByVal ProcessHandle As IntPtr, ByVal ProcessInformationClass As Integer, <Out()> ByRef debugPort As UInt32, ByVal ProcessInformationLength As UInt32, <Out()> ByRef ReturnLength As UInt32) As Integer

    Friend Delegate Sub OutputDebugString(<MarshalAs(UnmanagedType.LPStr)> ByVal lpOutputString As String)

    <StructLayout(LayoutKind.Sequential)> _
    Friend Class PROCESS_BASIC_INFORMATION
        Friend Reserved1 As IntPtr
        Friend PebBaseAddress As IntPtr
        Friend Reserved2 As IntPtr
        Friend Reserved3 As IntPtr
        Friend UniqueProcessId As IntPtr
        Friend Reserved4 As IntPtr
    End Class
End Class


