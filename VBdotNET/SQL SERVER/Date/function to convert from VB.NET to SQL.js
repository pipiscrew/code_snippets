    Public Function ConvertDATEtoSQL(ByVal dt As DateTime) As String
        Return dt.Year & "-" & dt.Month & "-" & dt.Day
    End Function
