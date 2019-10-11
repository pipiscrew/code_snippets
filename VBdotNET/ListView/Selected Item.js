        If lstv.SelectedIndices.Count = 0 Then Exit Sub

        Dim intIndex%
        intIndex = lstv.SelectedIndices(0)

        If MsgBox("You are going to delete" & vbCrLf & vbCrLf & "Item Code: " & lstv.Items(intIndex).Text, MsgBoxStyle.YesNo + MsgBoxStyle.Information, apTitle) = MsgBoxResult.No Then Exit Sub

        lstv.Items(intIndex).Remove()
        
        
        ++
        If .Items(intIndex).ImageIndex = 0 Then ComboBox1.SelectedIndex = 0 Else ComboBox1.SelectedIndex = 1



***2nd way***
frmViewPROC.Text = lstv.SelectedItems(0).Text


if lstv.SelectedItems.Count = 0 then exit sub