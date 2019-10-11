        Dim oitem As ListViewItem '= New ListViewItem()
        Dim osItem As ListViewItem.ListViewSubItem
        While Not rs.EoF
            oitem = New ListViewItem()

            oitem.Text = rs.Fields.Item(0).Value
            'oitem.Tag = rsKEY

            osItem = New ListViewItem.ListViewSubItem()
            osItem.Text = rs.Fields.Item(1).Value
            oitem.SubItems.Add(osItem)

            osItem = New ListViewItem.ListViewSubItem()
            osItem.Text = rs.Fields.Item(2).Value
            oitem.SubItems.Add(osItem)

            osItem = New ListViewItem.ListViewSubItem()
            osItem.Text = rs.Fields.Item(3).Value
            oitem.SubItems.Add(osItem)

            osItem = New ListViewItem.ListViewSubItem()
            osItem.Text = rs.Fields.Item(4).Value
            oitem.SubItems.Add(osItem)

            Me.lstv.Items.Add(oitem)
            rs.MoveNext()
        End While

        Me.Text = "  [" & lstv.Items.Count & "]  " & Me.Text & " for : " & Form1.CustNames.Text

        If lstv.Items.Count = 0 Then Button1.Enabled = False