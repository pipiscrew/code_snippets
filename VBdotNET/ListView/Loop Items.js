        For i = 0 To lstv.Items.Count - 1
            oOrder.Lines.ItemCode = lstv.Items(i).Text
            oOrder.Lines.ItemDescription = lstv.Items(i).SubItems(1).Text
            oOrder.Lines.Quantity = lstv.Items(i).SubItems(2).Text
            oOrder.Lines.Price = lstv.Items(i).SubItems(3).Text
            oOrder.Lines.TaxCode = lstv.Items(i).SubItems(4).Text
            oOrder.Lines.LineTotal = lstv.Items(i).SubItems(5).Text

            oOrder.Lines.Add()
        Next