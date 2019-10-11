Dim aryBeatles() As String = {"John", "Paul", "George", "Ringo"}
Array.Sort(aryBeatles)

' New order of the aryBeatles array:
' 
' aryBeatles
' ----------
' George
' John
' Paul
' Ringo


<>

        Dim arrTmp(1000) As String
        Dim arrTmpLen(1000) As String


        'Sort directories array
        For i = 0 To UBound(arrTmp)
            arrTmpLen(i) = Len(arrTmp(i))
        Next

        System.Array.Sort(arrTmpLen, arrTmp) 'ta sortarei me to length strings
        System.Array.Reverse(arrTmp) 'antistrefei ta item to teleytaio-prwto etc.

        rmDir = ""

        For i = 0 To UBound(arrTmp)
            If Len(arrTmp(i)) = 0 Then Exit For
            rmDir = rmDir & arrTmp(i) & vbCrLf
        Next
        'Sort directories array