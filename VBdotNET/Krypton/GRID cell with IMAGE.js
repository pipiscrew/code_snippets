Select Case callReq.CommentCount
    Case 0
        row.Cells(StatGrid.Comment).Value = My.Resources.comment_add
        row.Cells(StatGrid.Comment).ToolTipText = "Add Comment"
    Case Else
        row.Cells(StatGrid.Comment).Value = My.Resources.comments
        row.Cells(StatGrid.Comment).ToolTipText = "View/Add Comment"
End Select