1st:

Private Sub Command1_Click(Index As Integer)
'Add a command button to the form.
    Dim i As Long
    
    i = Me.Command1.UBound + 1 'get the next available index
    Load Me.Command1(i)
    With Me.Command1(i)
        .Move Rnd * Me.ScaleWidth, Rnd * Me.ScaleHeight 'place random on form
        .Visible = True 'invisible by default
    End With
    
End Sub

Private Sub Form_Unload(Cancel As Integer)
'Remove any dynamically created controls.
    Dim i As Long
    
    If Me.Command1.UBound > 0 Then
        For i = 1 To Me.Command1.UBound
            Unload Me.Command1(i)
        Next i
    End If
    
End Sub


2nd:

Dim n As Double
Dim cmda As CommandButton
 
Private Sub Command1_Click()
    Set cmda = Form3.Controls.Add("VB.CommandButton", "cmd" & n)
    Set cmda.Container = Form3
    cmda.Visible = True
    cmda.Caption = Text1.Text
    Combo1.AddItem Text1.Text
    n = n + 1
End Sub