Private Sub MSHFlexCLS(ctl As MSHFlexGrid)
Dim i%
    For i = ctl.Rows - 2 To 1 Step -1
        ctl.RemoveItem i
    Next i
    ctl.TextMatrix(1, 0) = "": ctl.TextMatrix(1, 1) = ""
    ctl.TextMatrix(1, 2) = "": ctl.TextMatrix(1, 3) = ""
End Sub