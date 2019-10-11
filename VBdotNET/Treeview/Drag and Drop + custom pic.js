
    Private Sub tvw_ItemDrag(ByVal sender As Object, ByVal e As ItemDragEventArgs) Handles TR.ItemDrag
        If e.Item.ImageIndex < 2 Then Exit Sub

        TR.DoDragDrop(e.Item, DragDropEffects.Move)
    End Sub

    Private Sub tvw_DragEnter(ByVal sender As Object, ByVal e As DragEventArgs) Handles TR.DragEnter
        e.Effect = DragDropEffects.Move
    End Sub

    Private Sub tvw_DragDrop(ByVal sender As Object, ByVal e As DragEventArgs) Handles TR.DragDrop
        TR.Cursor = Cursors.Default

        Dim loc As Point = (CType(sender, TreeView)).PointToClient(New Point(e.X, e.Y))
        Dim node As TreeNode = CType(e.Data.GetData(GetType(TreeNode)), TreeNode)
        Dim destNode As TreeNode = (CType(sender, TreeView)).GetNodeAt(loc)

        If node.Parent Is Nothing Then
            Exit Sub
            'node.TreeView.Nodes.Remove(node)
        Else
            node.Parent.Nodes.Remove(node)
        End If

        Dim parentID%

        If destNode.ImageIndex = 2 Then 'when dragged to code
            parentID = destNode.Parent.Name
            destNode.Parent.Nodes.Add(node)
            'destNode.TreeView.Nodes.Insert(destNode.Index + 1, node)
        Else
            parentID = destNode.Name
            destNode.Nodes.Add(node)
            destNode.Expand()
            'destNode.Parent.Nodes.Insert(destNode.Index + 1, node)
        End If

        Try
            sqlC.ExecuteSQL("update codes set parentnode=" & parentID & " where nodeid=" & node.Name)
        Catch ex As Exception
            MsgBox(ex.Message, MsgBoxStyle.Exclamation, apTitle)
        End Try
    End Sub

    Private Sub TR_GiveFeedback(ByVal sender As Object, ByVal e As System.Windows.Forms.GiveFeedbackEventArgs) Handles TR.GiveFeedback
        'mono kai mono gia na exoyme custom icon 
        'den einai anagkaia h procedure
        If e.Effect = DragDropEffects.Move Then
            e.UseDefaultCursors = False

            Dim stream As IO.Stream = Reflection.Assembly.GetExecutingAssembly().GetManifestResourceStream("SourceCodeOrganizerNET.drag-drop.ico")

            TR.Cursor = New Cursor(stream)
        Else
            e.UseDefaultCursors = True
        End If

    End Sub

    Private Sub TR_DragOver(ByVal sender As Object, ByVal e As System.Windows.Forms.DragEventArgs) Handles TR.DragOver
        'mono kai mono gia na fainetai to selected dr&drop
        'den einai anagkaia h procedure
        Dim tree As TreeView = CType(sender, TreeView)

        e.Effect = DragDropEffects.None

        If Not e.Data.GetData(GetType(TreeNode)) Is Nothing Then
            Dim pt As New Point(e.X, e.Y)
            pt = tree.PointToClient(pt)
            Dim node As TreeNode = tree.GetNodeAt(pt)
            If Not node Is Nothing Then
                e.Effect = DragDropEffects.Move
                tree.SelectedNode = node
            End If

        End If
    End Sub

    Private Sub TR_DragLeave(ByVal sender As Object, ByVal e As System.EventArgs) Handles TR.DragLeave
        'when dragging to nowhere
        TR.Cursor = Cursors.Default
    End Sub