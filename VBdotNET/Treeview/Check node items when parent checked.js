#Region " Check / Uncheck TREEVIEW nodes "
    Private Sub tr_AfterCheck(ByVal sender As Object, ByVal e As System.Windows.Forms.TreeViewEventArgs) Handles tr.AfterCheck
        Dim parent_node As TreeNode = e.Node
        Dim is_checked As Boolean = parent_node.Checked
        For i As Integer = 0 To e.Node.Nodes.Count - 1
            SetSubtreeChecked(parent_node.Nodes(i), is_checked)
        Next i

    End Sub

    Private Sub SetSubtreeChecked(ByVal parent_node As _
    TreeNode, ByVal is_checked As Boolean)
        ' Set the parent's Checked value.
        parent_node.Checked = is_checked

        ' Set the child nodes' Checked values.
        For i As Integer = 0 To parent_node.Nodes.Count - 1
            SetSubtreeChecked(parent_node.Nodes(i), is_checked)
        Next i
    End Sub
#End Region