            Dim indexes As ListView.CheckedIndexCollection = lstv2.CheckedIndices
            Dim index As Integer

            For Each index In indexes
                tmpFileRef.Seek(tmpRef(lstv2.Items(index).Index).PublicKeyOrTokenOffset, SeekOrigin.Begin)
                tmpFileRef.Write(ZeroBytes, 0, 2)
            Next
            
            
for simply :
        Dim Entry As Object

        For Each Entry In lstvUSERS.CheckedItems
            UsersID = UsersID & Entry.tag & ","
        Next