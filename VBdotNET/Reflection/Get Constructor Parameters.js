       Dim a As [Assembly] = [Assembly].LoadFile(Application.StartupPath & "\SimpleAssemblyExplorer.exe")

 
        For Each t As Type In a.GetTypes
            If t.Name = "frmDeobf" Then
                Dim ctrInfo As ConstructorInfo() = t.GetConstructors()
                For Each c As ConstructorInfo In ctrInfo
                    Debug.Print(c.ToString)
                Next
        Next