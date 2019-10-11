Public Function RandomNumber(MaxNum As Long, IncludeZero As Boolean) As Long 
    Dim NewMax As Long


    If IncludeZero = True Then
        Call Randomize
        NewMax& = MaxNum& + 1&
        RandomNumber& = Int(NewMax& * Rnd)
    Else
        Call Randomize
        RandomNumber& = Int((MaxNum& * Rnd) + 1)
    End If
End Function

url :: http://www.planet-source-code.com/vb/scripts/ShowCode.asp?txtCodeId=61123&lngWId=1