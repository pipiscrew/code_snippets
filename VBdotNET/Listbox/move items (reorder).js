     If ListBox1.SelectedIndex > 0 Then
         Dim itemtext As String
         Dim selecteditem As Integer

         itemtext = ListBox1.SelectedItem.ToString
         selecteditem = ListBox1.SelectedIndex
         ListBox1.Items.Remove(itemtext)
         ListBox1.Items.Insert(selecteditem - 1, itemtext)

     ElseIf ListBox1.SelectedIndex = 0 Then
         MsgBox("You cann't move the item up any further.")
     End If 
     
     
     'kai gia to anapodo apla + 1