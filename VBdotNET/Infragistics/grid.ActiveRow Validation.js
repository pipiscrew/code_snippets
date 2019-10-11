        If EpafesGRID.ActiveRow Is Nothing Then Exit Sub
    
        
                If MsgBox("???? ?? ?????????? : " & vbCrLf & vbCrLf & "?????????? :" & EpafesGRID.ActiveRow.Cells.Item(1).Value & vbCrLf & "??????? :" & EpafesGRID.ActiveRow.Cells.Item(3).Value & vbCrLf & vbCrLf & "????? ???????? ;", MsgBoxStyle.Information + MsgBoxStyle.YesNo, apTitle) = MsgBoxResult.No Then Exit Sub
        sqlc.DatabaseCommand("delete from ContactsWithCustomers where id = " & EpafesGRID.ActiveRow.Cells.Item(0).Value & "")