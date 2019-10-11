            ElseIf Style = 4 Then
                    .TableCell(tcAlign, , 1) = 7 ' center align all cells
                    .TableCell(tcAlign, , 3) = 7 ' center align all cells
                    .TableCell(tcAlign, , 5) = 7 ' center align all cells
                    .TableCell(tcAlign, , 6) = 7 ' center align all cells
                    
                    Many = False
                    For row = 1 To rs.RecordCount
                            If prevID <> rs(0) Then
                                    If Many = True Then
                                        .TableCell(tcText, row - 1, 7) = "Total  : " & Format(TotalValue, "0.00")
                                        .TableCell(tcAlign, row - 1, 7) = taCenterMiddle
                                        .TableCell(tcFontBold, row - 1, 7) = True
                                        .TableCell(tcBackColor, row - 1, 7) = vbYellow
                                        Many = False
                                    End If
                                    
                                    TotalValue = 0
                                    .TableCell(tcText, row, 1) = rs(0) 'code
                                    .TableCell(tcText, row, 2) = rs(1) 'Name
                                    .TableCell(tcText, row, 3) = rs(2) 'DateRec
                                    .TableCell(tcText, row, 4) = rs(3) '????????
                                    .TableCell(tcText, row, 5) = rs(4) 'SALE
                                    .TableCell(tcText, row, 6) = rs(5) 'Thls
                                    .TableCell(tcText, row, 7) = rs(6) 'Sxolia
                                    TotalValue = Replace(.TableCell(tcText, row, 5), ".", ",")
                            Else
                                    Many = True
                                    .TableCell(tcText, row, 4) = rs(3) '????????
                                    .TableCell(tcText, row, 5) = rs(4) 'SALE
                                    TotalValue = TotalValue + CDbl(Replace(.TableCell(tcText, row, 5), ".", ","))
                            End If
                            prevID = rs(0)
                            TotalValues = TotalValues + CDbl(Replace(.TableCell(tcText, row, 5), ".", ","))
                            rs.MoveNext
                    Next row
                    
                    If Many = True Then
                        .TableCell(tcText, row - 1, 7) = "Total  : " & Format(TotalValue, "0.00")
                        .TableCell(tcAlign, row - 1, 7) = taCenterMiddle
                        .TableCell(tcFontBold, row - 1, 7) = True
                        .TableCell(tcBackColor, row - 1, 7) = vbYellow
                    End If
                    
                    .TableCell(tcText, row, 7) = "Syn. Total : " & Format(TotalValues, "0.00")
                    .TableCell(tcAlign, row, 7) = taCenterMiddle
                    .TableCell(tcFontBold, row, 7) = True
                    .TableCell(tcForeColor, row, 7) = vbRed
                    .TableCell(tcBackColor, row, 7) = vbYellow
                    
             End If
