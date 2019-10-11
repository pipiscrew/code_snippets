'gia na grafoyme kati prin apo to table -- Meta apo .EndTable
           .TextColor = vbBlack 'MONO GIA TO PARAGRAPH
           .TextAlign = taLeftMiddle
           
            .Paragraph = "prin apo table"
           
'gia na grafoyme kati prin apo to table -- Meta apo .EndTable

'gia na grafoyme kati meta apo to table -- Meta apo .EndTable
          .EndTable
          
           .TextColor = vbRed
           .TextAlign = taRightMiddle

           .Paragraph = vbCr & tempFooter
'gia na grafoyme kati meta apo to table -- Meta apo .EndTable

' gia na diamorfwnoyme toys COLHeaders  -- Meta apo to table .Start
            .StartTable

            .AddTable fmt, hdr, "", RGB(250, 250, 0)

            .TableCell(tcFontBold, 0, , 0) = True
            .TableCell(tcAlign, 0, , 0) = taCenterMiddle
            .TableCell(tcCols) = countItem
            .TableCell(tcRows) = rs.RecordCount
' gia na diamorfwnoyme toys COLHeaders  -- Meta apo table start

'gia bold textcolor in the table
.TableCell(tcFontBold, , 1) = True 'kaneolo to col bold
'gia bold textcolor in the table

'Gia na bazoyme kapoio image sto document mas -- prin .StartTable
.DrawPicture Image1, 250, 250 'Karfwnoyme to banner ths etairias
'Gia na bazoyme kapoio image sto document mas -- prin .StartTable

'Alazoyme to paxos twn grammwn
.TableCell(tcRowHeight, 1, 1, rs.RecordCount, 5) = "1.8in"
'Alazoyme to paxos twn grammwn

'Bazoyme mia eikona se mia 8esh toy table
.TableCell(tcPicture, row, 2) = LoadPicture(App.Path & "\$.jpg") 
'Bazoyme mia eikona se mia 8esh toy table

'basic write txt in cell
.TableCell(tcText, row, 3) = Perigraf
'basic write txt in cell

'MergeCell
.TableCell(tcColSpan, row, 1, row, 4) = 3 'MergeCell
'MergeCell

'Align in cells
.TableCell(tcAlign, row, 4) = taRightTop
'Align in cells

'Panta afhnoyme kenh grammh me
tempFooter & vbCr &
'Panta afhnoyme kenh grammh me

'Eisagwgh eikonwn ana record kai parakoloy8hsei gia newpage (na mhn akoympaei to footer)
Private Sub GetPictureFromDB(ylikoCode$)

On Error GoTo Byebye

Dim whoRS As ADODB.Recordset

Set whoRS = GetRecordSet("select Eikona from Apoqhkh where KwdikosYlikoy='" & ylikoCode & "'", "bd1.def")
'Eikona
    On Error Resume Next

    Set mstream = New ADODB.Stream
    mstream.Type = adTypeBinary
    mstream.Open
    mstream.Write whoRS.Fields(0).Value
    mstream.SaveToFile App.Path & "\" & "$$$.$$$", adSaveCreateOverWrite
    
    'VP.Paragraph = vbCr '& vbCr & vbCr
    
    If VP.CurrentY + 1100 > VP.PageHeight - VP.MarginBottom Then

        VP.NewPage
    End If
    
    VP.DrawPicture LoadPicture(App.Path & "\" & "$$$.$$$"), VP.CurrentX, VP.CurrentY, 1100, 1100


    VP.CurrentY = VP.CurrentY + 1100
'Eikona
Byebye:
End Sub
'Eisagwgh eikonwn ana record kai parakoloy8hsei gia newpage (na mhn akoympaei to footer)