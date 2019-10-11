        Dim indexes As ListView.SelectedIndexCollection = _
            Me.ListView1.SelectedIndices
        Dim index As Integer
        Dim price As Double = 0.0
        For Each index In indexes
            price += Double.Parse(Me.ListView1.Items(index).SubItems(1).Text)
        Next
