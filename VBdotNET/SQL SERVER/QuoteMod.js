    Public Function QuoteMod(ByVal StripStr As String) As String

        Return Replace(StripStr, "'", "''")

    End Function