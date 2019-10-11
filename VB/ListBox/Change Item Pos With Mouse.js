dim LstInd  As Integer

Private Sub Form_Load()
List1.AddItem "01 one"
List1.AddItem "02 two"
List1.AddItem "03 three"
List1.AddItem "04 four"
List1.AddItem "05 five"
List1.AddItem "06 six"
List1.AddItem "07 seven"
List1.AddItem "08 eight"
List1.AddItem "09 nine"
List1.AddItem "10 ten"
List1.AddItem "11 eleven"
List1.AddItem "12 twelf"
List1.AddItem "13 thirteen"
List1.AddItem "14 fourteen"
List1.AddItem "15 fifteen"
List1.AddItem "16 sixteen"
List1.AddItem "17 seventeen"

End Sub

Public Sub List1_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)
    LstInd = List1.ListIndex
    'Me.Caption = List2.List(List1.ListIndex)
End Sub

Private Sub List1_MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)

Dim temp As String
Dim temp2 As String

If Button = 1 Then
    If LstInd = List1.ListIndex Then Exit Sub
    
    temp = List1.List(List1.ListIndex)
    List1.List(List1.ListIndex) = List1.List(LstInd)
    List1.List(LstInd) = temp
    
  
End If
LstInd = List1.ListIndex
End Sub