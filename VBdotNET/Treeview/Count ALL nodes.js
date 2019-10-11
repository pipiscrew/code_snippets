Private Function GetTotalNodes(ByVal nodes As TreeNodeCollection) As Integer
    Dim rootNodes As Integer = nodes.Count
    
    For Each node As TreeNode In nodes
        rootNodes += Me.GetTotalNodes(node.Nodes)
    Next
    
    Return rootNodes
End Function
