    Private Shared Function ConvertTimestamp(ByVal timestamp As Double) As DateTime
        'Return CDate("1/1/1979")

        Try
            'create a new DateTime value based on the Unix Epoch
            Dim converted As New DateTime(1970, 1, 1, 0, 0, 0, 0)

            'add the timestamp to the value
            Dim newDateTime As DateTime = converted.AddSeconds(timestamp + 7200)
            'to + 7200 den xreiazetai used only by rapidshare

            'return the value in string format
            Return newDateTime.ToString
        Catch
            Return CDate("1/1/1979")
        End Try
    End Function