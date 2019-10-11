    Public tmpLSTV As ListView.ListViewItemCollection 'lstvitems gotten from another listview

    Private Sub frmAnalyze_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        lstv.Columns.Add("Search Type", 190)
        lstv.Columns.Add("Occurred", 70)
        lstv.Columns.Add("DEC Offset(s)", 90)

        Dim i%
        For i = 0 To tmpLSTV.Count - 1 'how many groups
            lstv.Groups.Add(New ListViewGroup(IO.Path.GetFileName(tmpLSTV.Item(i).Text), HorizontalAlignment.Left))
            'fill group tag property 
            lstv.Groups(lstv.Groups.Count - 1).Tag = tmpLSTV.Item(i).Text
        Next
    End Sub
    

    Private Sub Additem(ByVal SearchType$, ByVal Occurred$, ByVal DECoffset$, ByVal assGROUP%)

        'Declare the Listview Items for adding

        'The variable to hold the item in
        Dim oitem As ListViewItem = New ListViewItem()

        'The variable to hold a subitem in
        'Note: You can no longer do Oitem.subitems(x) or oitem.listsubitems(x) to access the items subitems
        Dim osItem As ListViewItem.ListViewSubItem

        oitem.Text = SearchType
        'oitem.Tag = rsKEY

        osItem = New ListViewItem.ListViewSubItem()
        osItem.Text = Occurred
        oitem.SubItems.Add(osItem)

        osItem = New ListViewItem.ListViewSubItem()
        osItem.Text = DECoffset
        oitem.SubItems.Add(osItem)

		'******************************************************
        oitem.Group() = lstv.Groups(assGROUP)

        lstv.Items.Add(oitem)
    End Sub
    
    'Loop through GROUP items
    Private Sub Button2_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button2.Click
        Dim i%

        'MsgBox(lstv.Groups.Count)

        Dim tmpLSTV As ListView.ListViewItemCollection

        For i = 0 To lstv.Groups.Count - 1
            tmpLSTV = lstv.Groups(i).Items

            For Each item As ListViewItem In tmpLSTV
                MsgBox(item.Checked)
            Next
        Next i
    End Sub