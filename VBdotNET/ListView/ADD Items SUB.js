    Private Sub Additem(ByVal strName As String, ByVal rsKEY As String, Optional ByVal strSubitem1 As String = "", Optional ByVal strSubItem2 As String = "", Optional ByVal strSubItem3 As String = "", Optional ByVal intImage As Boolean = False)

        'Declare the Listview Items for adding

        'The variable to hold the item in
        Dim oitem As ListViewItem = New ListViewItem()

        'The variable to hold a subitem in
        'Note: You can no longer do Oitem.subitems(x) or oitem.listsubitems(x) to access the items subitems
        Dim osItem As ListViewItem.ListViewSubItem

        oitem.Text = ""
        oitem.Tag = rsKEY

        osItem = New ListViewItem.ListViewSubItem()
        osItem.Text = strName
        oitem.SubItems.Add(osItem)


        osItem = New ListViewItem.ListViewSubItem()
        osItem.Text = strSubitem1
        oitem.SubItems.Add(osItem)

        osItem = New ListViewItem.ListViewSubItem()
        osItem.Text = strSubItem2
        oitem.SubItems.Add(osItem)

        osItem = New ListViewItem.ListViewSubItem()
        osItem.Text = strSubItem3
        oitem.SubItems.Add(osItem)

        Me.lstv.Items.Add(oitem)

        'oitem.ImageIndex = 0
        If intImage = False Then oitem.ImageIndex = 0 Else oitem.ImageIndex = 1

    End Sub


on the fly
                lstv2.Items.Add(Trim(tmpARR(0)), ASSicon)
                lstv2.Items(lstv2.Items.Count - 1).SubItems.Add(Trim(Replace(tmpARR(1), "Version=", "", , , CompareMethod.Text)))
                lstv2.Items(lstv2.Items.Count - 1).SubItems.Add(pToken)