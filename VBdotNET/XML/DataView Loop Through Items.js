            Dim dsStore As New DataSet()
            dsStore.ReadXml(Application.StartupPath & "\dbase.xml")

            Dim dtvCust As DataView
            dtvCust = dsStore.Tables(0).DefaultView

            dtvCust.RowFilter = "isfolder = '1' and parentfolder='0'"
            dtvCust.Sort = "favid"


            For Each rv As DataRowView In dtvCust
                'Get the Datarow
                Dim r As DataRow = rv.Row

                tr.Nodes.Add(r.Item("favid"), r.Item("favname"), 0)
                tr.Nodes(tr.Nodes.Count - 1).Tag = r.Item("favid")

                'For i As Integer = 0 To r.ItemArray.Length - 1
                '    Debug.WriteLine(r(i))
                'Next
            Next