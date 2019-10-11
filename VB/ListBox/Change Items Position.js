Public Sub MoveFldUp(lb As Object)
    Dim tmpField As String
    Dim i As Integer
    i = lb.ListIndex
    If lb.ListCount < 1 Then Exit Sub


    If i > 0 And i < lb.ListCount Then
        tmpField = lb.List(i - 1)
        lb.List(i - 1) = lb.List(i)
        lb.List(i) = tmpField
        lb.ListIndex = i - 1
        lb.Selected(i - 1) = True
        lb.Selected(i) = False
    End If
End Sub


Public Sub MoveFldDown(lb As Object)
    Dim tmpField As String
    Dim i As Integer
    i = lb.ListIndex
    If lb.ListCount < 1 Then Exit Sub


    If i > -1 And i < lb.ListCount - 1 Then
        tmpField = lb.List(i + 1)
        lb.List(i + 1) = lb.List(i)
        lb.List(i) = tmpField
        lb.ListIndex = i + 1
        lb.Selected(i + 1) = True
        lb.Selected(i) = False
    End If
End Sub
