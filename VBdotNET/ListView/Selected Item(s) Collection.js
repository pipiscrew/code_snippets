    Public selectedLSTVitems As ListView.SelectedListViewItemCollection

	selectedLSTVitems = lstv.SelectedItems


        For Each item As ListViewItem In selectedLSTVitems
            sourceItems = sourceItems & item.SubItems(1).Text & vbCrLf
            KryptonTextBox1.Text = KryptonTextBox1.Text & item.SubItems(1).Text & vbCrLf
        Next