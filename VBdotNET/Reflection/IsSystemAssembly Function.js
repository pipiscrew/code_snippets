    Public Function IsSystemAssembly(ByVal pToken$) As Boolean
        pToken = pToken.ToLower

        If pToken = "b77a5c561934e089" Or pToken = "b03f5f7f11d50a3a" Or pToken = "31bf3856ad364e35" Or pToken = "969db8053d3322ac" Or pToken = "71e9bce111e9429c" Or pToken = "89845dcd8080cc91" Then
            Return True
        Else
            Return False
        End If
    End Function