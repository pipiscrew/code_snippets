Private Sub FastIntegerSort(theArray() As Integer)
    Const MIN_VALUE = 0
    Const MAX_VALUE = 32767
    Dim upper As Long
    Dim ix As Long, ix2 As Long
    Dim count(MIN_VALUE To MAX_VALUE) As Long
    upper = UBound(theArray)
    Dim lower As Long
    lower = LBound(theArray)


    For ix = lower To upper
        count(theArray(ix)) = count(theArray(ix)) + 1
    Next 'ix
    Dim curPos As Long
    curPos = LBound(count)
    upper = UBound(count)


    For ix = MIN_VALUE To MAX_VALUE


        If count(ix) = 0 Then
            'skip
        Else


            For ix2 = 1 To count(ix)
                theArray(curPos) = ix
                curPos = curPos + 1
            Next 'ix2
        End If
    Next 'ix
End Sub
