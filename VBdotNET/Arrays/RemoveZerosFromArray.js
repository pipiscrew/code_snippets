    Private Function RemoveZerosFromArray(ByVal arr As Byte()) As Byte()
        Dim i%
        Dim tmpARR As Byte()
        Dim tmpARRcounter%
        ReDim tmpARR(15)

        For i = 0 To arr.Length - 1
            If arr(i) <> 0 Then
                tmpARR(tmpARRcounter) = arr(i)
                tmpARRcounter += 1
            End If
        Next

        Return tmpARR

    End Function