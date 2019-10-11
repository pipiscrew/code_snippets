Private Const sortAlphanumeric = 0
Private Const sortNumeric = 1
Private Const sortDate = 2
Private Const sortAscending = 3
Private Const sortDescending = 4
Private SortOrd As Boolean


Private Function SortColumn(ByVal ListViewControl As MSComctlLib.ListView, ColumnIndex As Integer, SortType As Integer, SortOrder As Integer) As Boolean
    Dim x As Integer, y As Integer
    On Error GoTo ErrHandler
    


    Select Case SortType
        
        '*** Alphanumeric sort
        Case sortAlphanumeric


        DoSort ListViewControl, SortOrder, ColumnIndex - 1
            
            '*** Numeric Sort
            Case sortNumeric
            Dim strMax As String, strNew As String
            
            'Find the longest (whole) number string
            '     length in the column


            If ColumnIndex > 1 Then


                For x = 1 To ListViewControl.ListItems.Count


                    If Len(ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1)) <> 0 Then 'ignores 0 length strings


                        If Len(CStr(Int(ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1)))) > Len(strMax) Then
                            strMax = CStr(Int(ListViewControl.ListItems(x).SubItems(ColumnIndex - 1)))
                        End If
                    End If
                Next
            Else


                For x = 1 To ListViewControl.ListItems.Count


                    If Len(ListViewControl.ListItems(x)) <> 0 Then


                        If Len(CStr(Int(ListViewControl.ListItems(x)))) > Len(strMax) Then
                            strMax = CStr(Int(ListViewControl.ListItems(x)))
                        End If
                    End If
                Next
            End If
            
            'hide the control - speeds up the sort
            ListViewControl.Visible = False
            


            If ColumnIndex > 1 Then


                For x = 1 To ListViewControl.ListItems.Count


                    If Len(ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1)) = 0 Then
                        ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1) = "0" 'make 0 length strings = To "0"
                    ElseIf Len(CStr(Int(ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1)))) < Len(strMax) Then
                        'prefix all numbers with 0's as required
                        '
                        strNew = ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1)


                        For y = 1 To Len(strMax) - Len(CStr(Int(ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1))))
                            strNew = "0" & strNew
                        Next
                        ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1) = strNew
                    End If
                Next
            Else


                For x = 1 To ListViewControl.ListItems.Count


                    If Len(ListViewControl.ListItems(x).Text) = 0 Then
                        ListViewControl.ListItems(x).Text = "0" 'make 0 length strings = To "0"
                    ElseIf Len(CStr(Int(ListViewControl.ListItems(x)))) < Len(strMax) Then
                        'prefix all numbers with 0's as required
                        '
                        strNew = ListViewControl.ListItems(x).Text


                        For y = 1 To Len(strMax) - Len(CStr(Int(ListViewControl.ListItems(x))))
                            strNew = "0" & strNew
                        Next
                        ListViewControl.ListItems(x).Text = strNew
                    End If
                Next
            End If
            


            DoSort ListViewControl, SortOrder, ColumnIndex - 1
                


                If ColumnIndex > 1 Then
                    'Remove preceding 0's


                    For x = 1 To ListViewControl.ListItems.Count
                        ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1) = CDbl(ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1))
                        If ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1) = 0 Then ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1) = ""
                    Next
                Else
                    'Remove preceding 0's


                    For x = 1 To ListViewControl.ListItems.Count
                        ListViewControl.ListItems(x).Text = CDbl(ListViewControl.ListItems(x).Text)
                        If ListViewControl.ListItems(x).Text = 0 Then ListViewControl.ListItems(x).Text = ""
                    Next
                End If
                ListViewControl.Visible = True
                
                '*** Date Sort
                Case sortDate
                ListViewControl.Visible = False


                If ColumnIndex > 1 Then
                    'Convert dates to format that can be sor
                    '     ted alphanumerically


                    For x = 1 To ListViewControl.ListItems.Count
                        ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1) = Format(ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1), "YYYY MM DD hh:mm:ss")
                    Next


                    DoSort ListViewControl, SortOrder, ColumnIndex - 1
                        'Convert dates back to General Date form
                        '     at


                        For x = 1 To ListViewControl.ListItems.Count
                            ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1) = Format(ListViewControl.ListItems(x).ListSubItems(ColumnIndex - 1), "General Date")
                        Next
                    Else
                        'Convert dates to format that can be sor
                        '     ted alphanumerically


                        For x = 1 To ListViewControl.ListItems.Count
                            ListViewControl.ListItems(x).Text = Format(ListViewControl.ListItems(x).Text, "YYYY MM DD hh:mm:ss")
                        Next


                        DoSort ListViewControl, SortOrder, ColumnIndex - 1
                            'Convert dates back to General Date form
                            '     at


                            For x = 1 To ListViewControl.ListItems.Count
                                ListViewControl.ListItems(x).Text = Format(ListViewControl.ListItems(x).Text, "General Date")
                            Next
                            
                        End If
                        
                        ListViewControl.Visible = True
                    End Select
                SortColumn = True
                
Exit_Function:
                Exit Function
                
ErrHandler:
                MsgBox Err.Description & " (" & Err.Number & ")", vbOKOnly + vbCritical, "ListView Sort module Error"
                SortColumn = False
                Resume Exit_Function
            End Function

Private Sub DoSort(ByVal ListViewControl As MSComctlLib.ListView, SortOrder As Integer, SortKey As Integer)


    If SortOrder = sortAscending Then
        ListViewControl.SortOrder = lvwAscending
    ElseIf SortOrder = sortDescending Then
        ListViewControl.SortOrder = lvwDescending
    End If
    ListViewControl.SortKey = SortKey
    ListViewControl.Sorted = True
End Sub

kai sto
Private Sub lstv_ColumnClick(ByVal ColumnHeader As MSComctlLib.ColumnHeader)
lstv.SortOrder = (lstv.SortOrder - 1) * -1

Select Case ColumnHeader.Index
Case 1
    SortColumn lstv, ColumnHeader.Index, 0, lstv.SortOrder
Case 2
    SortColumn lstv, ColumnHeader.Index, 2, lstv.SortOrder
Case 3
    SortColumn lstv, ColumnHeader.Index, 1, lstv.SortOrder
End Select

End Sub