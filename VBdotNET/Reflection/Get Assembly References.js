
    Private Sub GetASSReferences(ByVal filepath$)
        Try
            'source also @:
            'http://msdn.microsoft.com/en-us/library/system.reflection.assemblyname.getpublickeytoken.aspx

            'lstv2.Items.Clear()


            ''Dim assemblyName As AssemblyName() = Assembly.ReflectionOnlyLoadFrom(filepath).GetReferencedAssemblies

            Dim assemblyBytes As Byte() = File.ReadAllBytes(filepath)
            Dim assembly As Assembly = assembly.Load(assemblyBytes)
            'assembly.GetExportedTypes()

            Dim assemblyName As AssemblyName() = assembly.GetReferencedAssemblies()

            Dim tmpARR() As String
            Dim pToken$ = ""
            Dim ASSicon% = 0
            For Each ass In assemblyName

                tmpARR = Split(ass.ToString, ",")
                pToken = Trim(Replace(tmpARR(3), "PublicKeyToken=", "", , , CompaRemethod.Text))

                'system assemblies
                If IsSystemAssembly(pToken) Then
                    ASSicon = 0
                Else
                    ASSicon = 1
                End If


                lstv2.Items.Add(Trim(tmpARR(0)), ASSicon)
                lstv2.Items(lstv2.Items.Count - 1).SubItems.Add(Trim(Replace(tmpARR(1), "Version=", "", , , CompaRemethod.Text)))
                lstv2.Items(lstv2.Items.Count - 1).SubItems.Add(pToken)
            Next

        Catch
            lstv2.Items.Clear()
        End Try
    End Sub