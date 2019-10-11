If Me.WindowState <> vbMinimized Then
    If Me.Width < 10815 Then Me.Width = 10815
    If Me.Height < 6630 Then Me.Height = 6630
    
    Text1.Width = (Me.Width / 2) - 380
    Text2.Left = Text1.Width + 500
    Text2.Width = Text1.Width
End If 