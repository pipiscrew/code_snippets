Private Function Encrypt(varPass As String) 
    If Dir(path To save password to) <> "" Then: Kill "path to save password to"
    Dim varEncrypt As String * 50
    Dim varTmp As Double
    Open "path To save password to" For Random As #1 Len = 50


    For I = 1 To Len(varPass)
        varTmp = Asc(Mid$(varPass, I, 1))
        varEncrypt = Str$(((((varTmp * 1.5) / 2.1113) * 1.111119) * I))
        Put #1, I, varEncrypt
        
        
    Next I
    Close #1
End Function
'returns the decrypted pass
'like if decrypt() = "password" then


Private Function Decrypt()
    Open "path To save password to" For Random As #1 Len = 50
    Dim varReturn As String * 50
    Dim varConvert As Double
    Dim varFinalPass As String
    Dim varKey As Integer


    For I = 1 To LOF(1) / 50
        
        
        Get #1, I, varReturn
        varConvert = Val(Trim(varReturn))
        varConvert = ((((varConvert / 1.5) * 2.1113) / 1.111119) / I)
        varFinalPass = varFinalPass & Chr(varConvert)
        
        
    Next I
    Decrypt = varFinalPass
    Close #1
End Function
