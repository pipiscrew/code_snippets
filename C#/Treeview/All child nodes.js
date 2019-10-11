http://stackoverflow.com/questions/177277/how-to-get-a-list-of-all-child-nodes-in-a-treeview-in-net


function outputNodes(Node root)
    writeln(root.Text)
    foreach(Node n in root.ChildNodes)
        outputNodes(n)
    end
end

-OR-


Function GetChildren(parentNode as TreeNode) as List(Of String)
  Dim nodes as List(Of String) = New List(Of String)
  GetAllChildren(parentNode, nodes)
  return nodes
End Function

Sub GetAllChildren(parentNode as TreeNode, nodes as List(Of String))
  For Each childNode as TreeNode in parentNode.Nodes
    nodes.Add(childNode.Text)
    GetAllChildren(childNode, nodes)
  Next
End Function