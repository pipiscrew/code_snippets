sto form load
        DataGridView1.Controls.Add(EtairiaCombo) 'editable
        DataGridView1.Controls.Add(SxeshCOMBO)   'list


meta events @:
    Private Sub DataGridView1_CellBeginEdit(ByVal sender As System.Object, ByVal e As System.Windows.Forms.DataGridViewCellCancelEventArgs) Handles DataGridView1.CellBeginEdit
        If (e.ColumnIndex = 0) Then
            Dim rect As Rectangle = Me.DataGridView1.GetCellDisplayRectangle(e.ColumnIndex, e.RowIndex, True)
            EtairiaCombo.Location = rect.Location
            EtairiaCombo.Width = rect.Width
            EtairiaCombo.Height = rect.Height
            EtairiaCombo.AutoCompleteMode = AutoCompleteMode.SuggestAppend
            'EtairiaCombo.Text = Me.DataGridView1.CurrentCell.Value.ToString()

            If Not DataGridView1.CurrentCell.Value Is Nothing Then
                If Me.DataGridView1.CurrentCell.Value.ToString.Length > 0 Then
                    EtairiaCombo.Items.Clear()
                    EtairiaCombo.Items.Add(New ComboClass(DataGridView1.CurrentCell.Value, DataGridView1.CurrentCell.Tag))
                    EtairiaCombo.SelectedIndex = 0
                End If
            End If

            'If DataGridView1.Rows(e.RowIndex).Cells(0).Value.ToString.Length > 0 Then FillComboETAIRIASearch(DataGridView1.Rows(e.RowIndex).Cells(0).Value)
            EtairiaCombo.Visible = True
        End If

        If (e.ColumnIndex = 1) Then
            Dim rect As Rectangle = Me.DataGridView1.GetCellDisplayRectangle(e.ColumnIndex, e.RowIndex, True)
            SxeshCOMBO.Location = rect.Location
            SxeshCOMBO.Width = rect.Width
            SxeshCOMBO.Height = rect.Height

            If Not DataGridView1.CurrentCell.Value Is Nothing Then
                If Me.DataGridView1.CurrentCell.Value.ToString.Length > 0 Then
                    SxeshCOMBO.SelectedIndex = SxeshCOMBO.FindStringExact(DataGridView1.CurrentCell.Value.ToString)
                End If
            End If

            SxeshCOMBO.Visible = True
        End If
    End Sub

    Private Sub DataGridView1_CellEndEdit(ByVal sender As System.Object, ByVal e As System.Windows.Forms.DataGridViewCellEventArgs) Handles DataGridView1.CellEndEdit
        If (e.ColumnIndex = 0) Then
            Me.DataGridView1.CurrentCell.Value = EtairiaCombo.Text
            If EtairiaCombo.SelectedItem Is Nothing Then
                Me.DataGridView1.CurrentCell.Tag = 0
            Else
                Me.DataGridView1.CurrentCell.Tag = EtairiaCombo.SelectedItem.itemdata
            End If

            'MsgBox(Me.DataGridView1.CurrentCell.Tag)
            Me.EtairiaCombo.Visible = False
        End If

        If (e.ColumnIndex = 1) Then
            Me.DataGridView1.CurrentCell.Value = SxeshCOMBO.Text
            If SxeshCOMBO.SelectedItem Is Nothing Then
                Me.DataGridView1.CurrentCell.Tag = 0
            Else
                Me.DataGridView1.CurrentCell.Tag = SxeshCOMBO.SelectedItem.itemdata
            End If

            'MsgBox(Me.DataGridView1.CurrentCell.Tag)
            Me.SxeshCOMBO.Visible = False
        End If
    End Sub

    Private Sub DataGridView1_Scroll(ByVal sender As System.Object, ByVal e As System.Windows.Forms.ScrollEventArgs) Handles DataGridView1.Scroll
        'If (DataGridView1.CurrentCell.ColumnIndex = 1 And DataGridView1.CurrentCell.RowIndex = 1) Then
        '    If EtairiaCombo.Visible = True Then
        '        Dim r As Rectangle = Me.DataGridView1.GetCellDisplayRectangle(Me.DataGridView1.CurrentCell.ColumnIndex, Me.DataGridView1.CurrentCell.RowIndex, True)
        '        EtairiaCombo.Location = r.Location
        '        EtairiaCombo.Width = r.Width
        '        EtairiaCombo.Height = r.Height
        '    End If
        'End If
    End Sub