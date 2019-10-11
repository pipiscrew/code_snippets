Private Sub FullScreen()
With Form1        ' Replace Form1 with the name of your form
    .Top = 0
    .Left = 0
    .Height = Screen.Height
    .Width = Screen.Width
End With
End Sub