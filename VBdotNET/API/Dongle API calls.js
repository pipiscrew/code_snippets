    <DllImport("Win32dll", EntryPoint:="DogRead", CharSet:=CharSet.Ansi, SetLastError:=True, ExactSpelling:=True)> _
    Public Shared Function DogRead_Double(ByVal DogBytes As Integer, ByVal DogAddr As Integer, ByRef DogData As Double) As Integer
    End Function

    <DllImport("Win32dll", EntryPoint:="DogRead", CharSet:=CharSet.Ansi, SetLastError:=True, ExactSpelling:=True)> _
    Public Shared Function DogRead_Long(ByVal DogBytes As Integer, ByVal DogAddr As Integer, ByRef DogData As Integer) As Integer
    End Function

    <DllImport("Win32dll", EntryPoint:="DogRead", CharSet:=CharSet.Ansi, SetLastError:=True, ExactSpelling:=True)> _
    Public Shared Function DogRead_SN(ByVal DogBytes As Integer, ByVal DogAddr As Integer, ByRef DogData As Integer) As Integer
    End Function

    <DllImport("Win32dll", EntryPoint:="DogRead", CharSet:=CharSet.Ansi, SetLastError:=True, ExactSpelling:=True)> _
    Public Shared Function DogRead_Str(ByVal DogBytes As Integer, ByVal DogAddr As Integer, <MarshalAs(UnmanagedType.VBByRefStr)> ByRef DogData As String) As Integer
    End Function

    <DllImport("Win32dll", EntryPoint:="DogWrite", CharSet:=CharSet.Ansi, SetLastError:=True, ExactSpelling:=True)> _
    Public Shared Function DogWrite_Double(ByVal DogBytes As Integer, ByVal DogAddr As Integer, ByRef DogData As Double) As Integer
    End Function

    <DllImport("Win32dll", EntryPoint:="DogWrite", CharSet:=CharSet.Ansi, SetLastError:=True, ExactSpelling:=True)> _
    Public Shared Function DogWrite_Long(ByVal DogBytes As Integer, ByVal DogAddr As Integer, ByRef DogData As Integer) As Integer
    End Function

    <DllImport("Win32dll", EntryPoint:="DogWrite", CharSet:=CharSet.Ansi, SetLastError:=True, ExactSpelling:=True)> _
    Public Shared Function DogWrite_Str(ByVal DogBytes As Integer, ByVal DogAddr As Integer, <MarshalAs(UnmanagedType.VBByRefStr)> ByRef DogData As String) As Integer
    End Function


    ' Fields
    Public DogAddr As Integer = 1
    Public DogBytes As Integer = 0
    Public DogSN As Integer = 0
