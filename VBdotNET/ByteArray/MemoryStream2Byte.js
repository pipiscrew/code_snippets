            If Clipboard.ContainsData("CFF Explorer Data") Then
                Dim mem As MemoryStream
                Dim ccReturn As Byte()
                Dim i%

                mem = Clipboard.GetData("CFF Explorer Data")
                ccReturn = mem.ToArray()

                For i = 0 To ccReturn.Length - 1
                    TextBox2b.Text = TextBox2b.Text & ccReturn(i).ToString("X2") & " "
                Next

            End If