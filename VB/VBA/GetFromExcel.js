Private Sub Command1_Click()
   Dim CurRow As String
   Static Row   ' Worksheet row number.
   Row = Row + 1   ' IncRement Row.
   If Row = 1 Then   ' First time only.
      ' Make sure the link isn't active.
      Text1.LinkMode = 0
      ' Set the application name and topic name.
      Text1.LinkTopic = "Excel|Sheet1"
      Text1.LinkItem = "R1C1"   ' Set LinkItem.
      Text1.LinkMode = 1   ' Set LinkMode to Automatic.
   Else
      ' Update the row in the data item.
      CurRow = "R" & Row & "C1"
      Text1.LinkItem = CurRow   ' Set LinkItem.
   End If
End Sub