    Private Sub lstviewCheck(ByVal listviewCTL As ComponentFactory.Krypton.Toolkit.KryptonCheckedListBox, ByVal val As Boolean)
        Try
            Cursor = System.Windows.Forms.Cursors.WaitCursor

            If listviewCTL.Items.Count > 0 Then
                Dim i%

                For i = 0 To listviewCTL.Items.Count - 1
                    listviewCTL.SetItemChecked(i, val)
                Next
            End If
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        Finally
            Cursor = System.Windows.Forms.Cursors.Default
        End Try
    End Sub