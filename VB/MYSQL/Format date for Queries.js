
Public Function GetDateAsMySQL(dtp As Date) As String
    Dim str As String

    str = Year(dtp) & "-" & Month(dtp) & "-" & Day(dtp)

    GetDateAsMySQL = str
End Function

