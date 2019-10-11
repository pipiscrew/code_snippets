    Private Function SearchARR(ByVal arr1 As Byte(), ByVal arr2 As Byte()) As Boolean
        Dim buffer As Byte() = arr1 ' New Byte() {3, 6, 4, 8, 3, 7, 5, 6, 4, 2, 5, 8, 3, 7, 9, 5, 3, 4, 5, 3, 7, 9, 4, 5, 3, 7, 2, 6}
        Dim target As Byte() = arr2 'New Byte() {3, 7, 2}
        Dim ST As Integer = 0
        Dim res%
SearchStart:
        'Start index for search
        'Find first byte of target in buffer

        res = Array.IndexOf(buffer, target(0), ST)

        'If res >= 2312000 Then '2837523
         '   res = res
        'End If
        'if first byte is not found then abort
        ' or remaining bytes are less than target array
        If res < 0 OrElse (buffer.Length - res) < target.Length Then

            Return False
        Else
            'Start comparing

            For i As Integer = 1 To target.Length - 2
                If target(i) <> buffer(res + i) Then
                    'The matching has failed here so search for firt byte again
                    ST = res + 1 '  + i + 1
                    'prepare start index
                    GoTo SearchStart
                End If
            Next

            'if we exit the loop without failing then we have a match

            Return True
        End If

    End Function