    Public Sub CheckBoxBatchVals(ByVal ctl As System.Windows.Forms.CheckedListBox, ByVal val As System.Windows.Forms.CheckState)
Dim i%

        For i = 0 To ctl.Items.Count - 1
            ctl.SetItemCheckState(i, val)
        Next
    End Sub
    
    
    
    
'INVERT SELECTION
        Dim i%

        For i = 0 To ListBox1.Items.Count - 1
            If ListBox1.GetItemChecked(i) Then
                ListBox1.SetItemCheckState(i, CheckState.Unchecked)
            Else
                ListBox1.SetItemCheckState(i, CheckState.Checked)
            End If
        Next