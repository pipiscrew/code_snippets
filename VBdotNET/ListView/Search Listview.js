            Dim srch As ListViewItem
            srch = MainForm.lstv.FindItemWithText(lstv.SelectedItems(0).Text)

            srch.EnsureVisible()
            srch.Selected = True