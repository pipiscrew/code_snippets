ftiaxnoyme thn domh me to attachment utility kai meta :

    Private Function GetItems() As DataTable
        Dim dsStore As New DataSet()
        dsStore.ReadXml(Application.StartupPath & "\dbase.xml")
        Return dsStore.Tables("EBAYItems")
    End Function


    Private Sub FillList()
        listView.Items.Clear()

        Dim dtGroups As DataTable = GetItems()
        For Each dr As DataRow In dtGroups.Rows
            Additem(dr("ItemCode").ToString(), dr("Title").ToString(), dr("Price").ToString(), dr("Seller").ToString(), dr("Comment").ToString(), dr("DateREC").ToString(), dr("ItemURL").ToString())
        Next

        dtGroups.Dispose()

    End Sub

    Private Sub ToolSave_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ToolSave.Click
        If Len(TextItemNO.Text.Trim) = 0 Then MsgBox("You should at least write the 'Item No' field", MsgBoxStyle.Exclamation, apTitle) : Exit Sub

        Try
            Dim dtGroups As DataTable = GetItems()

            Dim dr() As DataRow = dtGroups.Select("ItemCode = '" & TextItemNO.Text & "'")

            If dr.GetUpperBound(0) = -1 Then 'No item exist with that ^ ItemCODE so ADD NEW
                Dim dr2 As DataRow = dtGroups.NewRow
                dr2 = dtGroups.NewRow

                dr2("ItemCode") = TextItemNO.Text
                dr2("Title") = TextItemName.Text
                dr2("Price") = TextPrice.Text
                dr2("Seller") = TextSeller.Text
                dr2("Comment") = TextComm.Text
                dr2("DateREC") = TextDate.Value.Day & "/" & TextDate.Value.Month & "/" & TextDate.Value.Year
                dr2("ItemURL") = TextURL.Text

                dtGroups.Rows.Add(dr2)
            Else                             '>>>>>>>>>>>UPDATE
                dr(0)("Title") = TextItemName.Text
                dr(0)("Price") = TextPrice.Text
                dr(0)("Seller") = TextSeller.Text
                dr(0)("Comment") = TextComm.Text
                dr(0)("ItemURL") = TextURL.Text
                dr(0)("DateREC") = TextDate.Value.Day & "/" & TextDate.Value.Month & "/" & TextDate.Value.Year
            End If


            dtGroups.WriteXml(Application.StartupPath & "\dbase.xml", XmlWriteMode.WriteSchema)

            dr = Nothing
            dtGroups.Dispose()
            FillList()

        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Critical, apTitle)
        End Try
    End Sub

    Private Sub ToolNew_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ToolNew.Click
        TextItemNO.Text = ""
        TextItemName.Text = ""
        TextPrice.Text = ""
        TextSeller.Text = ""
        TextComm.Text = ""
        TextURL.Text = ""
        TextDate.Value = Now
    End Sub

    Private Sub ListView_MouseClick(ByVal sender As Object, ByVal e As System.Windows.Forms.MouseEventArgs) Handles ListView.MouseClick
        If ListView.SelectedIndices.Count = 0 Then Exit Sub

        TextItemNO.Text = ListView.SelectedItems(0).Text
        TextItemName.Text = ListView.SelectedItems(0).SubItems(1).Text
        TextSeller.Text = ListView.SelectedItems(0).SubItems(2).Text
        TextPrice.Text = ListView.SelectedItems(0).SubItems(3).Text
        TextComm.Text = ListView.SelectedItems(0).SubItems(4).Text
        TextDate.Value = ListView.SelectedItems(0).SubItems(5).Text
        TextURL.Text = ListView.SelectedItems(0).SubItems(6).Text
    End Sub

    Private Sub ToolDelete_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ToolDelete.Click
        If ListView.SelectedIndices.Count = 0 Then MsgBox("Please select a item!", MsgBoxStyle.Exclamation, apTitle) : Exit Sub

        Try
            Dim dsStore As New DataSet()
            Dim dv As DataView

            dsStore.ReadXml(Application.StartupPath & "\dbase.xml", XmlReadMode.ReadSchema)

            dv = dsStore.Tables(0).DefaultView

            dv.RowFilter = "itemcode='" + TextItemNO.Text + "'"
            'dv.Sort = "categoryID";

            If dv.Count = 0 Then Exit Try  'No record found
            dv.Delete(0)
            dv.RowFilter = ""

            dsStore.WriteXml(Application.StartupPath & "\dbase.xml", XmlWriteMode.WriteSchema)

            dv.Dispose()
            dsStore.Dispose()

            FillList()

            ToolNew.PerformClick()

        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Critical, apTitle)
        End Try
    End Sub

'Etsi kanoyme create to XML otana den yparxei ~LOL~
    Private Sub CreateXML()
        Dim currentTable As New DataSet
        currentTable.Tables.Add("EBAYItems")
        currentTable.Tables(0).Columns.Add("ItemCode", Type.GetType("System.String"))
        currentTable.Tables(0).Columns.Add("Title", Type.GetType("System.String"))
        currentTable.Tables(0).Columns.Add("Price", Type.GetType("System.String"))
        currentTable.Tables(0).Columns.Add("Seller", Type.GetType("System.String"))
        currentTable.Tables(0).Columns.Add("Comment", Type.GetType("System.String"))
        currentTable.Tables(0).Columns.Add("DateREC", Type.GetType("System.String"))
        currentTable.Tables(0).Columns.Add("ItemURL", Type.GetType("System.String"))

        currentTable.WriteXml(Application.StartupPath & "\dbase.xml", XmlWriteMode.WriteSchema)

        currentTable.Dispose()
    End Sub