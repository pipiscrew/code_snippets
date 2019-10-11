Imports System.Reflection

        Dim a As [Assembly] = Assembly.LoadFile(Application.StartupPath & "\PipisCrewProviders.dll")

        For Each t As Type In a.GetTypes
            If t.Name = "ADOnet" Then

                Dim myType As Type = t

                ' Create an instance
                Dim obj As Object = Activator.CreateInstance(myType, New Object() {"Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" & Application.StartupPath & "\dbase.mdb"})
                obj = obj

                Dim ds As DataSet

                ds = obj.getdataset("select * from Products")

                MsgBox(ds.Tables(0).Rows.Count, MsgBoxStyle.Information)

            End If
        Next

-------------------------------------------------------------------------------


without FOR NEXT 


        Dim a As [Assembly] = [Assembly].LoadFile("C:\Documents and Settings\Admin\Desktop\Providers\PipisCrewProviders\bin\Release\PipisCrewProviders.dll")

        Dim withoutFOR As Type
        withoutFOR = a.GetType("PipisCrewProviders.ADOnet", True, True)

        Dim instance As Object
        instance = Activator.CreateInstance(withoutFOR, New Object() {"Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" & Application.StartupPath & "\dbase.mdb"})

        Dim ds As DataSet

        ds = instance.getdataset("select * from Products")

        MsgBox(ds.Tables(0).Rows.Count, MsgBoxStyle.Information)

