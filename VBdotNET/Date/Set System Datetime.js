    Public Structure SYSTEMTIME
        Public wYear As UShort, wMonth As UShort, wDayOfWeek As UShort, wDay As UShort, wHour As UShort, wMinute As UShort, _
         wSecond As UShort, wMilliseconds As UShort
    End Structure


    <DllImport("kernel32.dll")> _
    Public Shared Function SetSystemTime(ByRef time As SYSTEMTIME) As Boolean
    End Function

    <DllImport("kernel32.dll")> _
    Public Shared Sub GetSystemTime(ByRef lpSystemTime As SYSTEMTIME)
    End Sub
    
    
        Dim st As SYSTEMTIME = New SYSTEMTIME

        GetSystemTime(st)

        st.wDay = 10
        st.wMonth = 4
        st.wYear = 2010

        SetSystemTime(st)    