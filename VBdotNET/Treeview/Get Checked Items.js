Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click
For Each n As TreeNode In GetCheck(TreeView1.Nodes)
Trace.WriteLine(n.Text)
Next
End Sub

Private Function GetCheck(ByVal node As TreeNodeCollection) As List(Of TreeNode)
Dim lN As New List(Of TreeNode)
For Each n As TreeNode In node
If n.Checked Then lN.Add(n)
lN.AddRange(GetCheck(n.Nodes))
Next

Return lN
End Function


'- mono gia to sygkekrimeno select item :
            Dim trTMP As TreeNode
            Dim tmpSTR$ = ""

            For Each trTMP In tr.SelectedNode.Nodes
                If trTMP.Checked Then
                    tmpSTR = tmpSTR & trTMP.Text.Substring(0, trTMP.Text.IndexOf(" ->")) & ","
                End If
            Next

            MsgBox(tmpSTR)