    Private Function CollectionArrayListDECoffsets(ByVal arr As ArrayList) As String
        Dim i%

        CollectionArrayListDECoffsets = ""

        For i = 0 To arr.Count - 1
            CollectionArrayListDECoffsets = CollectionArrayListDECoffsets & arr(i) & ","
        Next

        CollectionArrayListDECoffsets = Mid(CollectionArrayListDECoffsets, 1, Len(CollectionArrayListDECoffsets) - 1)
    End Function