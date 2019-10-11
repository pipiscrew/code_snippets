'**************************************
' Name: Make MSHFlexGrid Editable withou
'     t help of any textbox or other control
' Description:Make MSHFlexGrid Editable 


'     without help of any textbox or other con
    '     trol
' By: Kazi Khalid
'
' Assumes:'Take an MSHFlexgrid name it a
'     s msh1
'
'This code is copyrighted and has' limited warranties.Please see http://w
'     ww.Planet-Source-Code.com/vb/scripts/Sho
'     wCode.asp?txtCodeId=50802&lngWId=1'for details.'**************************************

'in the keypress event of msh1 write the
'     following code.


Private Sub msh1_KeyPress(KeyAscii As Integer)


    Select Case KeyAscii
        Case vbKeyReturn, vbKeyTab
        'move to next cell.


        With msh1


            If .Col + 1 <= .Cols - 1 Then
                .Col = .Col + 1
            Else


                If .Row + 1 <= .Rows - 1 Then
                    .Row = .Row + 1
                    .Col = 0
                Else
                    .Row = 1
                    .Col = 0
                End If
            End If
        End With
        Case vbKeyBack


        With msh1
            'Remove the last character, if any.


            If Len(.Text) Then
                .Text = Left(.Text, Len(.Text) - 1)
            End If
        End With
        Case Is < 32
        Case Else


        With msh1
            .Text = .Text & Chr(KeyAscii)
        End With
    End Select
End Sub