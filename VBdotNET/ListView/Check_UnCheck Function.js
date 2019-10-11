    Private Sub lstviewCheck(ByVal listviewCTL As ListView, ByVal val As Boolean)
        Try
            Cursor = System.Windows.Forms.Cursors.WaitCursor

            If lstv.Items.Count > 0 Then
                Dim i%

                For i = 0 To lstv.Items.Count - 1
                    listviewCTL.Items(i).Checked = val
                Next
            End If
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        Finally
            Cursor = System.Windows.Forms.Cursors.Default
        End Try
    End Sub


    Private Sub lstvBARselectALL_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles lstvBARselectALL.Click
        lstviewCheck(lstv, True)
    End Sub

    Private Sub lstvBARunselectALL_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles lstvBARunselectALL.Click
        lstviewCheck(lstv, False)
    End Sub