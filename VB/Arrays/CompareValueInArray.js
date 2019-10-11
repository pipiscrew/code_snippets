Public Function IsIn(ByVal vVal As Variant, ParamArray vCompVals() As Variant) As Boolean 
    Dim iCtr As Integer


    For iCtr = 0 To UBound(vCompVals)'Initialise counter to Loop through comparison values


        If vCompVals(iCtr) = vVal Then'Do comparison here
            IsIn = True'If we Get a hit Set return value and Exit
            Exit Function'You could Do anything here you wish of course
        End If
    Next iCtr
    IsIn = False 'Get here and you have been unable To find the value you wanted
End Function


px gia string 

Public Function IsIn(ByVal vVal As Variant, vCompVals() As String) As Boolean
    Dim iCtr As Integer


    For iCtr = 0 To UBound(vCompVals) 'Initialise counter to Loop through comparison values


        If vCompVals(iCtr) = vVal Then 'Do comparison here
            IsIn = True 'If we Get a hit Set return value and Exit
            Exit Function 'You could Do anything here you wish of course
        End If
    Next iCtr
    IsIn = False 'Get here and you have been unable To find the value you wanted
End Function