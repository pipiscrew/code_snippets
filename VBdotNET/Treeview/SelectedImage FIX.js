'Fixes Selected Image 
tr.Nodes.Add(dR.Item("favid"), dR.Item("favname"), 0, 0)
0 = to image poy 8a exei
0 = to image poy 8a exei otan einai selected!

examples :
            For Each rv As DataRowView In dtvCust
                dR = rv.Row
                tr.Nodes.Add(dR.Item("favid"), dR.Item("favname"), 0, 0)
                tr.Nodes(tr.Nodes.Count - 1).Tag = dR.Item("favid")
            Next
            
            
            
            For Each rv As DataRowView In dtvCust
                dR = rv.Row
                Dim trTemp As TreeNode()
                trTemp = tr.Nodes.Find(dR.Item("parentfolder"), True)

                If trTemp.Length > 0 Then trTemp(0).Nodes.Add(dR.Item("favid"), dR.Item("favname"), 0, 0).Tag = dR.Item("favid")
            Next