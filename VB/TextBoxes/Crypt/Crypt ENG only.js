''ENG ONLY with pass

Private Function Crypt(Source As String, strPassword As String, EnDeCrypt As Boolean) As String
    Dim intPassword As Long
    Dim intCrypt As Long


    For X = 1 To Len(strPassword)
        intPassword = intPassword + Asc(Mid$(strPassword, X, 1))
    Next X


    For X = 1 To Len(Source)


        If EnDeCrypt = True Then
            intCrypt = Asc(Mid$(Source, X, 1)) + intPassword + X
            


            Do Until intCrypt <= 255
                intCrypt = intCrypt - 255
            Loop
        Else
            intCrypt = Asc(Mid$(Source, X, 1)) - intPassword - X
            


            Do Until intCrypt > 0
                intCrypt = intCrypt + 255
            Loop
        End If
        Crypt = Crypt & Chr(intCrypt)
    Next X
End Function
