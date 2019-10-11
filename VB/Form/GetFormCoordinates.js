Public Function GetFormCoordinates(frmWork As Form, coordinates() As Integer) As Boolean
'// the passed-in coordinates array must be an uninitialized dynamic array
'// or an error will occur and the function will fail

On Error GoTo ERRHANDLER

'// set the array to hold 4 values
    ReDim coordinates(3)

'// set the Forms values in the array
    With frmWork
        coordinates(0) = .Top
        coordinates(1) = .Left
        coordinates(2) = .Height
        coordinates(3) = .Width
    End With
'// if we got this far we succeed
    GetFormCoordinates = True
'// so exit
    Exit Function
    
'// an error has occurred
ERRHANDLER:
'// function failed
    GetFormCoordinates = False
End Function