    Public Function CheckForNull(ByVal strValue As String) As String
        If Not strValue Is DBNull.Value Then
            Return strValue
        Else
            Return "NULL VALUE"
        End If
    End Function