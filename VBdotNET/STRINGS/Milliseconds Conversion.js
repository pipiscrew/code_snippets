    Public Shared Function longMillisToTime(ByVal time As Long) As [String]
        Dim MILLISECONDS = 1000
        Dim SECONDS = 60
        Dim MINUTES = 60

        time /= MILLISECONDS
        Dim seconds__1 As Integer = CInt((time Mod SECONDS))
        time /= SECONDS
        Dim minutes__2 As Integer = CInt((time Mod MINUTES))
        Dim hours As Integer = CInt((time / MINUTES))
        Return String.Format("{0}:{1}:{2}", hours, minutes__2, seconds__1)
    End Function