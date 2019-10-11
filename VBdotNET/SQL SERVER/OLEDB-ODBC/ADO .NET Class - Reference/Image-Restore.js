        Dim rd As System.Data.OleDb.OleDbDataReader

        rd = sqlC.GetDATAREADER("select cover from [movies] where movieID =" & MoviesGRID.SelectedRows(0).Cells(0).Value) 

        If rd.HasRows Then
            rd.Read()

            If Not rd(0) Is DBNull.Value Then
                If Not rd(0) Is Nothing Then
                    sqlC.Byte2Image(PictureBox1.Image, rd(0))
'or write direct to file 
'sqlC.Byte2ImageFile("c:\1.png", rd(0))
                Else
                    PictureBox1.Image = Nothing
                End If

            Else
                PictureBox1.Image = Nothing
            End If
        Else
            PictureBox1.Image = Nothing
        End If