
    Private Sub KryptonButton3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonButton3.Click

        If LIST1.SelectedIndex > 0 Then

            Dim itemtext As String
            Dim selecteditem As Integer
            Dim newPos% = LIST1.SelectedIndex - 1
            Dim newVal As Boolean = LIST1.GetItemChecked(LIST1.SelectedIndex)

            itemtext = LIST1.SelectedItem.ToString
            selecteditem = LIST1.SelectedIndex
            LIST1.Items.Remove(itemtext)
            LIST1.Items.Insert(selecteditem - 1, itemtext)

            LIST1.SetItemChecked(newPos, newVal)
            LIST1.SelectedIndex = newPos

        ElseIf LIST1.SelectedIndex = 0 Then
            MsgBox("You cann't move the item up any further.")
        End If
    End Sub


    Private Sub KryptonButton4_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles KryptonButton4.Click
        If LIST1.SelectedIndex < LIST1.Items.Count - 1 Then

            Dim itemtext As String
            Dim selecteditem As Integer
            Dim newPos% = LIST1.SelectedIndex + 1
            Dim newVal As Boolean = LIST1.GetItemChecked(LIST1.SelectedIndex)

            itemtext = LIST1.SelectedItem.ToString
            selecteditem = LIST1.SelectedIndex
            LIST1.Items.Remove(itemtext)
            LIST1.Items.Insert(selecteditem + 1, itemtext)

            LIST1.SetItemChecked(newPos, newVal)
            LIST1.SelectedIndex = newPos

        Else
            MsgBox("You cann't move the item up any further.")
        End If
    End Sub