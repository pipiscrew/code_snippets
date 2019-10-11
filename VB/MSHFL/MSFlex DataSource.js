Sub loadRSFlexiValues(flexiName As MSFlexGrid, rsFlexiValues As Recordset) 


    With flexiName
        .Redraw = False
        strFormatString = .FormatString
        .Clear
        .Rows = 2
        .FormatString = strFormatString


        If rsFlexiValues.EOF = False Then
            rsFlexiValues.MoveFirst
            .Rows = 2
            lngCol = 0


            While rsFlexiValues.EOF = False
                .Row = .Rows - 1


                While lngCol < .Cols
                    .Col = lngCol


                    If Len(rsFlexiValues(lngCol)) > 0 Then


                        If IsDate(rsFlexiValues(lngCol)) = True Then


                            If InStr(1, UCase(rsFlexiValues(lngCol)), "AM") <> 0 Or InStr(1, UCase(rsFlexiValues(lngCol)), "PM") <> 0 Then
                                .Text = Format(rsFlexiValues(lngCol), "hh:mm AMPM")
                            Else
                                .Text = Format(rsFlexiValues(lngCol), "dd-MMM-yyyy")
                            End If
                        ElseIf IsNumeric(rsFlexiValues(lngCol)) = True And InStr(1, CStr(rsFlexiValues(lngCol)), ".", vbTextCompare) <> 0 Then
                            .Text = Format(rsFlexiValues(lngCol), "##0.00")
                        Else
                            .Text = CStr(rsFlexiValues(lngCol))
                        End If
                    End If
                    lngCol = lngCol + 1
                Wend
                lngCol = 0
                .Rows = .Rows + 1
                rsFlexiValues.MoveNext
            Wend
        End If
        .Redraw = True
    End With
End Sub
