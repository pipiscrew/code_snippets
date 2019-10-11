        Dim Entry As Object
        For Each Entry In ListBox1.CheckedItems
            CreateCompanySDF(Entry.ToString)
        Next



OR




        For i = 0 To ListSites.Items.Count - 1
            If ListSites.GetItemCheckState(i) = CheckState.Checked Then
                sMsg = sMsg & " = Checked" & vbCrLf
            Else
                sMsg = sMsg & " = Not Checked" & vbNewLine
            End If
        Next