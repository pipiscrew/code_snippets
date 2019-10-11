Private Sub Command1_Click()
Dim arrPrices(1 To 45, 1 To 2)

Dim i As Long
For i = 1 To 45
   arrPrices(i, 1) = "N" & i
   arrPrices(i, 2) = i * 2
Next i

MSChart1.ChartData = arrPrices
End Sub
