        Try
            Cursor = System.Windows.Forms.Cursors.WaitCursor

            tr.Nodes.Clear()

            'LOAD XML with STORED DATA 
            Dim dR As DataRow
            Dim dsStore As New DataSet()
            dsStore.ReadXml(Application.StartupPath & "\dbase.xml")
            'LOAD XML with STORED DATA 

            Dim dtvCust As DataView
            dtvCust = dsStore.Tables(0).DefaultView

            '>>>>>>>>> ROOT FOLDER 
            dtvCust.RowFilter = "isfolder = '1' and parentfolder='0'"
            dtvCust.Sort = "favid"

            For Each rv As DataRowView In dtvCust
                dR = rv.Row
                tr.Nodes.Add(dR.Item("favid"), dR.Item("favname"), 0)
                tr.Nodes(tr.Nodes.Count - 1).Tag = dR.Item("favid")
            Next
            '>>>>>>>>> ROOT FOLDER 


            '>>>>>>>>> Child Folders
            dtvCust.RowFilter = "isfolder = '1' and parentfolder<>'0'"
            dtvCust.Sort = "parentfolder,favname"

            For Each rv As DataRowView In dtvCust
                dR = rv.Row
                Dim trTemp As TreeNode()
                trTemp = tr.Nodes.Find(dR.Item("parentfolder"), True)

                If trTemp.Length > 0 Then trTemp(0).Nodes.Add(dR.Item("favid"), dR.Item("favname"), 2).Tag = dR.Item("favid")
            Next
            '>>>>>>>>> Child Folders


            '>>>>>>>>> ITEMS
            dtvCust.RowFilter = "isfolder = '0'" ' and parentfolder='0'"
            dtvCust.Sort = "favname"

            For Each rv As DataRowView In dtvCust
                dR = rv.Row
                Dim trTemp As TreeNode()
                trTemp = tr.Nodes.Find(dR.Item("parentfolder"), True)

                If trTemp.Length > 0 Then trTemp(0).Nodes.Add(dR.Item("favid"), dR.Item("favname"), 2).Tag = dR.Item("favid")
            Next
            '>>>>>>>>> ITEMS

            dsStore.Dispose()

        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        Finally
            Cursor = System.Windows.Forms.Cursors.Default
        End Try