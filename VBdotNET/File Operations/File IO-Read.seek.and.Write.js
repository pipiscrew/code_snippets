Dim ZeroBytes As Byte() = {0, 0}

Dim tmpFileRef As New IO.FileStream(lstv.SelectedItems(0).Text, FileMode.Open, FileAccess.ReadWrite)
                tmpFileRef.Seek(tmpRef(lstv2.Items(index).Index).PublicKeyOrTokenOffset, SeekOrigin.Begin)
                tmpFileRef.Write(ZeroBytes, 0, 2)
            tmpFileRef.Close()
            tmpFileRef.Dispose()