'http://www.cantelmosoftware.com/dblog/articolo.asp?articolo=16

Imports Mono.Cecil

Module Module1

    Sub Main()
        '[i] spying assembly ...
        Dim assembly As AssemblyDefinition = AssemblyFactory.GetAssembly("d:\goliath.exe")
        '<<<
        For Each attribute As CustomAttribute In assembly.CustomAttributes
            If (attribute.Constructor.DeclaringType.Name = "SuppressIldasmAttribute") Then
                '[i] Remove attribute
                assembly.CustomAttributes.Remove(attribute)
                Exit For
            End If
        Next
        '[i] erase PublicKey and PublicKeyToken
        With assembly.Name
            .PublicKey = Nothing
            .PublicKeyToken = Nothing
        End With
        '[i] save to disk the new tampered assembly
        AssemblyFactory.SaveAssembly(assembly, "d:\goliath_ildasm.exe")
    End Sub

End Module 