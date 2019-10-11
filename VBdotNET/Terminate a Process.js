            Try 
                Dim processById As Process = Process.GetProcessById(result)
                If (Not processById Is Nothing) Then
                    processById.Kill
                End If
            Catch obj1 As Object
            End Try
