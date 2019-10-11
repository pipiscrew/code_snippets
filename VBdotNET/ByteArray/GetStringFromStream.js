    Public Function GetStringFromStream(ByVal stream As Stream)
        ' Create a stream reader.
        Using reader As New StreamReader(stream)
            ' Just read to the end.
            Return reader.ReadToEnd()
        End Using
    End Function