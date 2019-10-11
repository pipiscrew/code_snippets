Imports System.Reflection

                Dim a As [Assembly] = [Assembly].LoadFile(Application.StartupPath & "\StrongNameHelper.exe") 'PipisCrewProviders.dll")

        For Each t As Type In a.GetTypes
            If t.Name = "frmFixer" Then

                Dim myType As Type = t

                ' Create an instance
                Dim obj As Object = Activator.CreateInstance(myType)
                obj = obj
                obj.showdialog()

            End If
        Next