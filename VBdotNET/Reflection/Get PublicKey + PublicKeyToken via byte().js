'tested & working
'with hardcoded asssemblies

    Private Sub AddAssembly4Search(ByVal filepath$)
       Dim buffer As Byte() = System.IO.File.ReadAllBytes(filePath)
        Dim assPublicKey$ = ""
        Dim mask As Byte = 15

        For Each b As Byte In Reflection.Assembly.Load(buffer).GetName.GetPublicKey
            assPublicKey = assPublicKey & (Hex(b \ 16 And mask) & Hex(b And mask))
        Next b

        If lstvSearch.FindItemWithText(assPublicKey) Is Nothing Then
            lstvSearch.Items.Add(assPublicKey)
        End If

        assPublicKey = ""
        For Each b As Byte In Reflection.Assembly.Load(buffer).GetName.GetPublicKeyToken
            assPublicKey = assPublicKey & (Hex(b \ 16 And mask) & Hex(b And mask))
        Next b

        If lstvSearch.FindItemWithText(assPublicKey) Is Nothing Then
            lstvSearch.Items.Add(assPublicKey)
        End If

    End Sub