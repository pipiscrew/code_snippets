    Public Function IsValidAssembly(ByVal filepath$) As Boolean
        Try
            Dim tmp = AssemblyName.GetAssemblyName(filepath).Version()
            Return True
        Catch ex As Exception
            Return False
        End Try
    End Function