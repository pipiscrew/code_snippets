Imports System.Reflection

''>>>>>>>>> u must set in Resource file, the property 'Build Action' to Embedded Resource' 
        Dim stream As IO.Stream = Assembly.GetExecutingAssembly().GetManifestResourceStream("WindowsApplication1.PipisCrewProviders.dll")

        Dim buffer As Byte() = New Byte(stream.Length - 1) {}

        stream.Read(buffer, 0, buffer.Length)

        Dim assembly2 As Assembly = Assembly.Load(buffer)

        For Each t As Type In assembly2.GetTypes
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