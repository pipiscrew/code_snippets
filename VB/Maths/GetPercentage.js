Public Function GetPercentage(ByVal SoFar, ByVal Total) As Single
    On Error GoTo UhOh
    
    If SoFar > Total Then GoTo UhOh

    If SoFar = 0 Then
        GetPercentage = 0
        Exit Function
    End If
    
    SoFar = SoFar * 100 'Multiply by 100
    Total = SoFar / Total 'Then devide by the total to Get your percentage
    GetPercentage = Total 'Return the percentage
    Exit Function 'We don't want To activate the errorhandler and return 0 do we?
UhOh:
    GetPercentage = -1
End Function