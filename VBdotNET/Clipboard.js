Clipboard.Clear()
Clipboard.SetDataObject(tmp, TextDataFormat.Text)


#Region " Clipboard Procedures "

    Private Sub Copy2Clipboard(ByVal str$)
        Try
            Clipboard.Clear()
            Clipboard.SetDataObject(str, TextDataFormat.Text)
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try
    End Sub

    Private Sub GetFromClipboard(ByVal txtCTL As ComponentFactory.Krypton.Toolkit.KryptonTextBox)
        Try
            txtCTL.Text = Clipboard.GetText().Trim
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try
    End Sub

#End Region


'GetData
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