'source:
'http://bytes.com/topic/c-sharp/answers/538824-copy-nodes-one-treeview-another

        '  Dim myTreeNodeCollection As TreeNodeCollection = tr.Nodes
        ' Create an array of 'TreeNodes'.
        Dim myTreeNodeArray As TreeNode() = New TreeNode(tr.Nodes.Count - 1) {}
        ' Copy the tree nodes to the 'myTreeNodeArray' array.
        tr.Nodes.CopyTo(myTreeNodeArray, 0)
        ' Remove all the tree nodes from the 'myTreeViewBase' TreeView.
        tr.Nodes.Clear()
        ' Add the 'myTreeNodeArray' to the 'myTreeViewCustom' TreeView.
        TreeView1.Nodes.AddRange(myTreeNodeArray)
        'tr.Nodes.AddRange(myTreeNodeArray)
        
        
'OR vb6

Private Sub Command1_Click()
'The Command below will copy the content of TreeView1 to Treeview2
CopyTreeview TreeView1, TreeView2
End Sub

Private Sub CopyTreeview(objTVSrc As TreeView, objTVDest As TreeView)
Dim nodeRoot As Node
objTVDest.Nodes.Clear
For Each nodeRoot In objTVSrc.Nodes
If (nodeRoot.Parent Is Nothing) Then
Call CopyTVParentNode(nodeRoot, objTVDest.Nodes)
End If
Next
End Sub

Private Sub CopyTVParentNode(nodeParent As Node, nodesDest As Nodes)
Dim nodeDummy As Node
Dim nodeChild As Node
Set nodeDummy = CopyNode(nodeParent, nodesDest)
Set nodeChild = nodeParent.Child
Do While Not (nodeChild Is Nothing)
If nodeChild.Children Then
Call CopyTVParentNode(nodeChild, nodesDest)
Else
Set nodeDummy = CopyNode(nodeChild, nodesDest)
End If
Set nodeChild = nodeChild.Next
Loop
End Sub

Private Function CopyNode(nodeSrc As Node, nodesDest As Nodes) As Node
With nodeSrc
If (.Parent Is Nothing) Then
Set CopyNode = nodesDest.Add(, , .Key, .Text, .Image, .SelectedImage)
CopyNode.Expanded = True
Else
Set CopyNode = nodesDest.Add(.Parent.Index, _
tvwChild, .Key, .Text, .Image, .SelectedImage)
CopyNode.Expanded = True
End If
End With
End Function

Private Sub Form_Load()
TreeView1.Nodes.Add , , "Sample", "Primary"
TreeView1.Nodes.Add , , "Sample2", "Primary2"
TreeView1.Nodes.Add "Sample", tvwChild, "Sample3", "Child"
End Sub